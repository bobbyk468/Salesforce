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
      data-href alongside data-precedence, so the inlined copy is at least
      labelled with the URL it stands in for.

      Tried, and it does NOT stop React re-requesting the stylesheet. Measured
      on the live page after deploying it: still two resource entries for the
      same .css, and still one <link rel="stylesheet"> in the DOM. The reason
      is that neither reference comes from the HTML this rewriter can see.
      Both are inside the RSC flight payload:

        :HL["/_next/static/chunks/<hash>.css","style"]        <- preload hint
        ["$","link","0",{"rel":"stylesheet","href":"..."}]    <- React inserts

      HTMLRewriter rewrites tags, not serialized React state, and editing that
      payload by hand would risk breaking hydration for one cacheable request.

      So this is a deliberate, measured trade. Inlining still does its job:
      first paint is not blocked on a stylesheet round trip. The cost is that
      the file is still fetched afterwards, off the critical path and
      cacheable. Next's own experimental.inlineCss removes both references but
      writes the stylesheet into the page three times — measured at 730KB ->
      1009KB raw on the homepage — which is the worse end of the trade. See
      the note in next.config.js.
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
/*
  Inlining is OFF while the CLS cause is being tested.

  Evidence that pointed here: on a live PSI mobile run, CLS 0.203 is a single
  shift of the jump bar, and a pixel diff of the trace screenshots shows EVERY
  text line in the viewport re-rendering between 1875ms and 2250ms with no
  block translation. That is a font swap. The deployed CSS carries
  font-display:optional on all seven faces, which should make a late swap
  impossible — the browser commits to the fallback for the page view.

  What can undo that commitment is a fresh style resolution after the font has
  arrived. React performs one: because the inlined <style> is not the resource
  it is looking for, it inserts the original <link rel="stylesheet"> during
  hydration (confirmed live: one link in the DOM though the served HTML has
  none, and two requests for the same .css). Timing fits — hydration lands in
  that window — and so does the intermittency, since it depends on whether the
  font beats hydration.

  So the duplicate request and the CLS are plausibly the same bug. Turning
  inlining off removes both: the HTML keeps its original <link>, React finds
  what it expects and inserts nothing, and no second style resolution happens.
  The cost is that the stylesheet is render-blocking again.

  If PSI shows CLS unchanged, this is wrong — set INLINE_STYLESHEETS back to
  true, because the inlining is worth keeping on its own merits.
*/
const INLINE_STYLESHEETS = false

function inlineStylesheets(response, env) {
  if (!INLINE_STYLESHEETS) return response
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
