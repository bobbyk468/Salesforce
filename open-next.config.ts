import { defineCloudflareConfig } from '@opennextjs/cloudflare'
import staticAssetsIncrementalCache from '@opennextjs/cloudflare/overrides/incremental-cache/static-assets-incremental-cache'
import { withRegionalCache } from '@opennextjs/cloudflare/overrides/incremental-cache/regional-cache'

/**
 * Cache interception, so prerendered pages are served without booting the
 * Next server on every request.
 *
 * wrangler.jsonc sets `run_worker_first: true`, so every request reaches the
 * worker before Workers Assets and before Cloudflare's cache. That is why a
 * Cache Rule in the dashboard does nothing for HTML — the request never gets
 * as far as the cache layer. Cold TTFB on / measured 0.9-1.8s.
 *
 * `enableCacheInterception` lets the worker answer a prerendered page
 * straight from the incremental cache and skip the Next server entirely.
 *
 * The cache store is Workers Assets rather than KV or R2: every route here
 * is prerendered at build time and nothing revalidates (no `revalidate`
 * export, no revalidatePath/Tag anywhere in src/), which is exactly the case
 * the static-assets adapter is for. It needs no provisioned resource and no
 * new binding — it reads through the ASSETS binding that already exists.
 *
 * withRegionalCache puts a Cache API layer in front, so a colo that has
 * already served a page answers later requests from its own regional cache
 * instead of re-reading the asset. `long-lived` suits content that only
 * changes on deploy.
 */
const config = defineCloudflareConfig({
  incrementalCache: withRegionalCache(staticAssetsIncrementalCache, {
    mode: 'long-lived',
  }),
  enableCacheInterception: true,
})

// Cloudflare performs its own server bundling and patches out native image
// optimization. Skip AWS's preliminary bundle, which tries to inline sharp.
config.default = { ...config.default, experimentalBundledNextServer: false }

export default config
