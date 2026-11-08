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

class StylesheetInliner {
  constructor(env) {
    this.env = env
  }

  async element(element) {
    const href = element.getAttribute('href')
    if (!href?.startsWith('/_next/static/') || !href.endsWith('.css')) return
    const css = await readCssOnce(href, this.env)
    if (!css) return
    /*
      data-precedence AND data-href, both required.

      React tracks stylesheet resources in a map it builds by scanning the
      document for link[rel=stylesheet][data-precedence] and for
      style[data-href][data-precedence]. With only data-precedence, the
      inlined <style> is not keyed to the href React is looking for, so during
      hydration React concluded the stylesheet was missing and inserted the
      original <link> — measured on the live page as a second request for the
      same file, which is the "2 CSS resources" the audit reported.

      data-href makes the inlined copy the registered resource for that URL,
      so React finds it and inserts nothing.
    */
    const precedence = element.getAttribute('data-precedence') ?? 'next'
    element.replace(
      `<style data-href="${href}" data-precedence="${precedence}">${css}</style>`,
      { html: true },
    )
  }
}

/**
 * Replaces the blocking <link rel="stylesheet"> with the stylesheet inline.
 *
 * `experimental.inlineCss` does this in Next itself, but on 16.4.4 it writes
 * the stylesheet into the page three times — once in <style> and twice more
 * inside the RSC payload — which took the homepage from 730KB to 1009KB raw.
 * Doing it here, after Next has produced the HTML, leaves the RSC payload
 * untouched and costs exactly one copy.
 *
 * HTMLRewriter rather than a regex over `await response.text()`: the latter
 * buffers the whole 825KB document before a single byte goes out, which shows
 * up on the cache-miss path that a cold visitor or a remote auditor hits.
 * HTMLRewriter rewrites the tag as the body streams through.
 */
function inlineStylesheets(response, env) {
  return new HTMLRewriter()
    .on('link[rel="stylesheet"]', new StylesheetInliner(env))
    .transform(response)
}

/**
 * The one route that is allowed to be framed by other sites.
 *
 * Every page carries X-Frame-Options: DENY from next.config.js, which is
 * right for all of them but the embeddable calculator. It cannot be relaxed
 * there in next.config.js: Next appends rather than replaces a repeated
 * header key, so a per-route override would emit "DENY, ALLOWALL" and
 * browsers treat a malformed X-Frame-Options as a refusal.
 *
 * X-Frame-Options has no allow-list form anyway, so the header is dropped and
 * CSP frame-ancestors takes over as the modern equivalent.
 */
const framableRoutePattern = /^\/tools\/score-calculator\/embed\/?$/

function allowFramingIfEmbed(response, url) {
  if (!framableRoutePattern.test(url.pathname)) return response
  const framable = new Response(response.body, response)
  framable.headers.delete('X-Frame-Options')
  const csp = framable.headers.get('Content-Security-Policy')
  if (csp && !/frame-ancestors/i.test(csp)) {
    framable.headers.set('Content-Security-Policy', `${csp.replace(/;\s*$/, '')}; frame-ancestors *`)
  }
  return framable
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
        const hit = allowFramingIfEmbed(secureProductionResponse(cached, 'HIT'), url)
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
      const response = storable ? inlineStylesheets(upstream, env) : upstream
      const secured = secureProductionResponse(response, storable ? 'MISS' : 'BYPASS')

      if (storable) {
        try {
          await cache.put(cacheKey, secured.clone())
        } catch (error) {
          console.error('Unable to populate the HTML edge cache', error)
        }
      }

      const out = allowFramingIfEmbed(secured, url)
      return request.method === 'HEAD' ? new Response(null, out) : out
    }

    const upstream = await openNextWorker.fetch(request, env, ctx)
    // Inline here too, so previews and any uncacheable HTML get the same
    // treatment as the cached production path rather than a blocking <link>.
    const response = isHtmlResponse(upstream) ? inlineStylesheets(upstream, env) : upstream
    if (!isProduction || url.protocol !== 'https:') return allowFramingIfEmbed(response, url)

    // Static assets bypass Next headers; secure their responses at the entrypoint too.
    return allowFramingIfEmbed(secureProductionResponse(response), url)
  },
}
