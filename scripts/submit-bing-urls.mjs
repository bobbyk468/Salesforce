#!/usr/bin/env node
/**
 * Submit all sitemap URLs to Bing via the URL Submission API.
 * Run after deploy: BING_INDEXING_API_KEY=yourkey node scripts/submit-bing-urls.mjs
 *
 * Requires:
 *   - BING_INDEXING_API_KEY (or BING_API_KEY) in env
 *   - Site verified in Bing Webmaster Tools
 *   - API key from: Bing Webmaster > Settings > API Access > Generate
 *
 * Docs: https://learn.microsoft.com/en-us/bingwebmaster/
 * Limit: 500 URLs per batch, 10,000/day
 */

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const SITEMAP_URL = `${SITE_URL}/sitemap.xml`
const BING_API_BASE = 'https://ssl.bing.com'
const BATCH_SIZE = 500

const apiKey = process.env.BING_INDEXING_API_KEY || process.env.BING_API_KEY

async function fetchUrlsFromSitemap() {
  const res = await fetch(SITEMAP_URL)
  if (!res.ok) throw new Error(`Failed to fetch sitemap: ${res.status}`)
  const xml = await res.text()
  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1])
  return [...new Set(urls)]
}

function chunk(arr, size) {
  const chunks = []
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size))
  }
  return chunks
}

async function submitBatch(urlList) {
  const url = `${BING_API_BASE}/webmaster/api.svc/json/SubmitUrlbatch?apikey=${encodeURIComponent(apiKey)}`
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({ siteUrl: SITE_URL, urlList }),
  })
  return res
}

async function main() {
  if (!apiKey) {
    console.error('BING_INDEXING_API_KEY or BING_API_KEY must be set')
    process.exit(1)
  }

  console.log('Fetching URLs from sitemap...')
  const urls = await fetchUrlsFromSitemap()
  console.log(`Found ${urls.length} URLs`)

  if (urls.length === 0) {
    console.error('No URLs found in sitemap')
    process.exit(1)
  }

  const batches = chunk(urls, BATCH_SIZE)
  console.log(`Submitting in ${batches.length} batch(es) to Bing URL Submission API...`)

  let submittedCount = 0
  for (let i = 0; i < batches.length; i++) {
    const batch = batches[i]
    try {
      const res = await submitBatch(batch)
      const body = await res.text()
      if (res.ok) {
        submittedCount += batch.length
        console.log(`  Batch ${i + 1}/${batches.length}: ${res.status} OK (${batch.length} URLs)`)
      } else {
        console.error(`  Batch ${i + 1}/${batches.length}: ${res.status} ${res.statusText}`)
        console.error(`  Response: ${body}`)
      }
    } catch (err) {
      console.error(`  Batch ${i + 1}/${batches.length}: ${err.message}`)
    }
  }

  if (submittedCount === 0) {
    console.error('\nAll batches failed. Check API key and site verification in Bing Webmaster Tools.')
    process.exit(1)
  }

  console.log(`\nDone. Submitted ${submittedCount} URL(s) to Bing.`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
