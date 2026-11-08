import openNextWorker from './.open-next/worker.js'
export * from './.open-next/worker.js'

const canonicalHost = 'www.trailblazeprep.com'
const productionHosts = new Set([canonicalHost, 'trailblazeprep.com'])
const dynamicRoutePattern = /^\/(?:api|og)(?:\/|$)/
const nextRequestHeaders = [
  'rsc',
  'next-router-prefetch',
  'next-router-state-tree',
  'next-router-segment-prefetch',
  'next-url',
]

function secureProductionResponse(response, cacheStatus) {
  const secured = new Response(response.body, response)
  secured.headers.set('Strict-Transport-Security', 'max-age=31536000')
  if (cacheStatus) secured.headers.set('X-Trailblaze-Edge-Cache', cacheStatus)
  return secured
}

function isHtmlCacheCandidate(request, url, versionId) {
  if (!versionId || !['GET', 'HEAD'].includes(request.method)) return false
  if (dynamicRoutePattern.test(url.pathname) || request.headers.has('authorization')) return false
  if (nextRequestHeaders.some((header) => request.headers.has(header))) return false
  return !request.headers.get('accept')?.includes('text/x-component')
}

function htmlCacheKey(url, versionId) {
  const cacheUrl = new URL(url)
  cacheUrl.searchParams.set('__trailblaze_worker_version', versionId)
  return new Request(cacheUrl, { method: 'GET' })
}

function canStoreHtmlResponse(response) {
  const cacheControl = response.headers.get('cache-control') || ''
  return response.status === 200
    && response.headers.get('content-type')?.toLowerCase().includes('text/html')
    && !response.headers.has('set-cookie')
    && !/(?:^|,)\s*(?:private|no-store|no-cache)\b/i.test(cacheControl)
    && response.headers.get('vary') !== '*'
}

export default {
  ...openNextWorker,
  async fetch(request, env, ctx) {
    const url = new URL(request.url)
    const isProduction = productionHosts.has(url.hostname)
    if (isProduction && (url.protocol !== 'https:' || url.hostname !== canonicalHost)) {
      url.protocol = 'https:'
      url.hostname = canonicalHost
      url.port = ''
      return Response.redirect(url.toString(), 308)
    }

    const versionId = env?.WORKER_VERSION?.id
    const cacheCandidate = isProduction
      && url.protocol === 'https:'
      && isHtmlCacheCandidate(request, url, versionId)

    if (cacheCandidate) {
      const cache = caches.default
      const cacheKey = htmlCacheKey(url, versionId)
      const cached = await cache.match(cacheKey)
      if (cached) {
        const hit = secureProductionResponse(cached, 'HIT')
        return request.method === 'HEAD' ? new Response(null, hit) : hit
      }

      // A HEAD miss is rendered as GET once so curl -I can warm and verify the
      // same HTML object that browsers receive. The caller still gets no body.
      const upstreamRequest = request.method === 'HEAD'
        ? new Request(request, { method: 'GET' })
        : request
      const response = await openNextWorker.fetch(upstreamRequest, env, ctx)
      const storable = canStoreHtmlResponse(response)
      const secured = secureProductionResponse(response, storable ? 'MISS' : 'BYPASS')

      if (storable) {
        try {
          await cache.put(cacheKey, secured.clone())
        } catch (error) {
          console.error('Unable to populate the HTML edge cache', error)
        }
      }

      return request.method === 'HEAD' ? new Response(null, secured) : secured
    }

    const response = await openNextWorker.fetch(request, env, ctx)
    if (!isProduction || url.protocol !== 'https:') return response

    // Static assets bypass Next headers; secure their responses at the entrypoint too.
    return secureProductionResponse(response)
  },
}
