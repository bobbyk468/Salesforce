#!/usr/bin/env node
/**
 * Submit all site URLs to IndexNow after each Vercel deployment.
 * Reads from public/urls.json (pre-built URL feed) so it works both locally
 * and in CI without needing the live site to be up yet.
 *
 * Run: node scripts/submit-indexnow.mjs
 * CI:  triggered by .github/workflows/indexnow.yml after Vercel deploys
 *
 * Key file: public/trailblazeprep-indexnow-31aded69c6aa7fb9bcde3b846ac91e27.txt
 * Docs: https://www.indexnow.org/documentation
 */

import { readFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

const SITE_URL = 'https://www.trailblazeprep.com'
const INDEXNOW_KEY = 'trailblazeprep-indexnow-31aded69c6aa7fb9bcde3b846ac91e27'
const KEY_LOCATION = `${SITE_URL}/${INDEXNOW_KEY}.txt`
const BATCH_SIZE = 100

// api.indexnow.org distributes to all participating engines (Bing, Yandex, Seznam, etc.)
const INDEXNOW_ENDPOINT = 'https://api.indexnow.org/indexnow'

function loadUrls() {
  const urlsPath = join(__dirname, '..', 'public', 'urls.json')
  const data = JSON.parse(readFileSync(urlsPath, 'utf-8'))
  return data.urls
}

async function submitBatch(urlList) {
  const body = {
    host: new URL(SITE_URL).hostname,
    key: INDEXNOW_KEY,
    keyLocation: KEY_LOCATION,
    urlList,
  }
  const res = await fetch(INDEXNOW_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(body),
  })
  return res
}

async function main() {
  const urls = loadUrls()
  console.log(`Loaded ${urls.length} URLs from public/urls.json`)

  const batches = []
  for (let i = 0; i < urls.length; i += BATCH_SIZE) {
    batches.push(urls.slice(i, i + BATCH_SIZE))
  }
  console.log(`Submitting ${batches.length} batch(es) of up to ${BATCH_SIZE} URLs each...\n`)

  let totalOk = 0
  let totalFailed = 0

  for (let i = 0; i < batches.length; i++) {
    const batch = batches[i]
    try {
      const res = await submitBatch(batch)
      const ok = res.status === 200 || res.status === 202
      if (ok) {
        totalOk += batch.length
        console.log(`Batch ${i + 1}/${batches.length}: ${res.status} OK (${batch.length} URLs)`)
      } else {
        const body = await res.text()
        totalFailed += batch.length
        console.warn(`Batch ${i + 1}/${batches.length}: ${res.status} — ${body.slice(0, 120)}`)
      }
    } catch (err) {
      totalFailed += batch.length
      console.error(`Batch ${i + 1}/${batches.length}: network error — ${err.message}`)
    }
  }

  console.log(`\nDone. ${totalOk} URLs submitted successfully, ${totalFailed} failed.`)
  if (totalFailed > 0) process.exit(1)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
