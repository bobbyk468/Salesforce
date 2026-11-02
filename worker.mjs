import openNextWorker from './.open-next/worker.js'
export * from './.open-next/worker.js'

const canonicalHost = 'www.trailblazeprep.com'
const productionHosts = new Set([canonicalHost, 'trailblazeprep.com'])

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

    const response = await openNextWorker.fetch(request, env, ctx)
    if (!isProduction || url.protocol !== 'https:') return response

    // Static assets bypass Next headers; secure their responses at the entrypoint too.
    const secured = new Response(response.body, response)
    secured.headers.set('Strict-Transport-Security', 'max-age=31536000')
    return secured
  },
}
