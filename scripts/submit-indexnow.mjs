#!/usr/bin/env node
/**
 * Submit all sitemap URLs to IndexNow (Bing, Yandex, etc.).
 * Run after deploy: node scripts/submit-indexnow.mjs
 *
 * Requires: key file at public/{key}.txt (already exists)
 * Docs: https://www.indexnow.org/documentation
 */

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const SITEMAP_URL = `${SITE_URL}/sitemap.xml`
const INDEXNOW_KEY = 'trailblazeprep-indexnow-31aded69c6aa7fb9bcde3b846ac91e27'
const KEY_LOCATION = `${SITE_URL}/${INDEXNOW_KEY}.txt`

const INDEXNOW_ENDPOINTS = [
  'https://www.bing.com/indexnow',
  'https://yandex.com/indexnow',
]

async function fetchUrlsFromSitemap() {
  const res = await fetch(SITEMAP_URL)
  if (!res.ok) throw new Error(`Failed to fetch sitemap: ${res.status}`)
  const xml = await res.text()
  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1])
  return [...new Set(urls)]
}

async function submitToIndexNow(urlList) {
  const body = {
    host: new URL(SITE_URL).hostname,
    key: INDEXNOW_KEY,
    keyLocation: KEY_LOCATION,
    urlList,
  }

  const results = []
  for (const endpoint of INDEXNOW_ENDPOINTS) {
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        body: JSON.stringify(body),
      })
      const name = new URL(endpoint).hostname
      results.push({ engine: name, status: res.status, ok: res.ok })
      console.log(`${name}: ${res.status} ${res.ok ? 'OK' : res.statusText}`)
    } catch (err) {
      results.push({ engine: endpoint, error: err.message })
      console.error(`${endpoint}: ${err.message}`)
    }
  }
  return results
}

async function main() {
  console.log('Fetching URLs from sitemap...')
  const urls = await fetchUrlsFromSitemap()
  console.log(`Found ${urls.length} URLs`)

  if (urls.length === 0) {
    console.error('No URLs found in sitemap')
    process.exit(1)
  }

  // IndexNow allows up to 10,000 URLs per request
  console.log('\nSubmitting to IndexNow...')
  const results = await submitToIndexNow(urls)

  const succeeded = results.filter((r) => r.ok || r.status === 202)
  const failed = results.filter((r) => !r.ok && r.status !== 202 && !r.error)
  if (succeeded.length === 0) {
    console.error('\nAll submissions failed')
    process.exit(1)
  }
  if (failed.length > 0) {
    console.warn('\nNote: Some engines returned errors (e.g. Bing 403 if site not in Bing Webmaster)')
  }
  console.log(`\nDone. Submitted to ${succeeded.length} engine(s).`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
