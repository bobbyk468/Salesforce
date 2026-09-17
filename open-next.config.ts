import { defineCloudflareConfig } from '@opennextjs/cloudflare'

// Keep the default cache behavior while validating the existing Next.js app on Workers.
export default defineCloudflareConfig()
