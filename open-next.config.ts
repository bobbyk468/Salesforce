import { defineCloudflareConfig } from '@opennextjs/cloudflare'

const config = defineCloudflareConfig()

// Cloudflare performs its own server bundling and patches out native image
// optimization. Skip AWS's preliminary bundle, which tries to inline sharp.
config.default = { ...config.default, experimentalBundledNextServer: false }

export default config
