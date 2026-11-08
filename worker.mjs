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

/**
 * Stylesheet text by asset path, for the lifetime of the isolate.
 *
 * There is one stylesheet and it is immutable per build, so each isolate
 * reads it at most once however many pages it serves.
 */
const cssTextByPath = new Map()

async function readCssOnce(path, env) {
  if (cssTextByPath.has(path)) return cssTextByPath.get(path)
  const pending = (async () => {
    try {
      const assetResponse = await env.ASSETS.fetch(new URL(path, 'https://assets.local'))
      if (!assetResponse.ok) return null
      return await assetResponse.text()
    } catch (error) {
      console.error('Unable to read the stylesheet for inlining', error)
      return null
    }
  })()
  cssTextByPath.set(path, pending)
  return pending
}

const stylesheetLinkPattern =
  /<link[^>]+rel="stylesheet"[^>]*href="(\/_next\/static\/[^"]+\.css)"[^>]*>/g

/**
 * Replaces the blocking <link rel="stylesheet"> with the stylesheet inline.
 *
 * `experimental.inlineCss` does this in Next itself, but on 16.4.4 it writes
 * the stylesheet into the page three times — once in <style> and twice more
 * inside the RSC payload — which took the homepage from 730KB to 1009KB raw.
 * Doing it here, after Next has produced the HTML, leaves the RSC payload
 * untouched and costs exactly one copy.
 *
 * `data-precedence` is carried over to the <style> tag: React uses it to order
 * and de-duplicate stylesheets, and dropping it makes React re-insert the
 * original <link> during a client-side navigation.
 */
async function inlineStylesheets(response, env) {
  const html = await response.text()
  const links = [...html.matchAll(stylesheetLinkPattern)]
  if (links.length === 0) return new Response(html, response)

  let inlined = html
  for (const link of links) {
    const css = await readCssOnce(link[1], env)
    if (!css) continue
    const precedence = /data-precedence="([^"]*)"/.exec(link[0])?.[1] ?? 'next'
    inlined = inlined.replace(
      link[0],
      `<style data-precedence="${precedence}">${css}</style>`,
    )
  }

  const rewritten = new Response(inlined, response)
  rewritten.headers.delete('content-length')
  return rewritten
}

function isHtmlResponse(response) {
  return response.status === 200
    && !!response.headers.get('content-type')?.toLowerCase().includes('text/html')
}

function canStoreHtmlResponse(response) {
  const cacheControl = response.headers.get('cache-control') || ''
  return isHtmlResponse(response)
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
      const upstream = await openNextWorker.fetch(upstreamRequest, env, ctx)
      const storable = canStoreHtmlResponse(upstream)
      // Inline before caching, so the work is done once per cache entry
      // rather than on every request.
      const response = storable ? await inlineStylesheets(upstream, env) : upstream
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

    const upstream = await openNextWorker.fetch(request, env, ctx)
    // Inline here too, so previews and any uncacheable HTML get the same
    // treatment as the cached production path rather than a blocking <link>.
    const response = isHtmlResponse(upstream) ? await inlineStylesheets(upstream, env) : upstream
    if (!isProduction || url.protocol !== 'https:') return response

    // Static assets bypass Next headers; secure their responses at the entrypoint too.
    return secureProductionResponse(response)
  },
}
