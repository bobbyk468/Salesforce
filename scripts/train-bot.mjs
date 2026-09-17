#!/usr/bin/env node
/**
 * Trailblaze Prep Bot — Training Script
 *
 * Crawls Trailblaze Prep pages only, chunks the content, and saves a
 * knowledge base JSON for the chat API. It deliberately does not ingest
 * external websites, so bot answers remain grounded in this website.
 *
 * Usage:
 *   node scripts/train-bot.mjs
 *
 * Output:
 *   bot-data/knowledge-base.json
 *
 * Requires: puppeteer (devDependency — already installed)
 */

import puppeteer from 'puppeteer'
import { writeFileSync, mkdirSync, readFileSync } from 'fs'
import { join } from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')
const OUTPUT_DIR = join(ROOT, 'bot-data')
const OUTPUT_FILE = join(OUTPUT_DIR, 'knowledge-base.json')

const DELAY_TBPREP = 200 // ms between Trailblaze Prep requests
const PAGE_TIMEOUT = 45_000

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function sleep(ms) {
  return new Promise(r => setTimeout(r, ms))
}

function chunkText(text, maxWords = 350) {
  // Split on paragraph boundaries so chunks never cut mid-sentence.
  // The scraper preserves \n\n between blocks; collapse intra-paragraph whitespace only.
  const paragraphs = text
    .split(/\n\n+/)
    .map(p => p.replace(/[ \t]+/g, ' ').trim())
    .filter(p => p.length > 20)

  const chunks = []
  let current = []
  let wordCount = 0

  for (const para of paragraphs) {
    const words = para.split(/\s+/).length
    if (wordCount > 0 && wordCount + words > maxWords) {
      if (wordCount >= 25) chunks.push(current.join('\n\n'))
      current = [para]
      wordCount = words
    } else {
      current.push(para)
      wordCount += words
    }
  }
  if (wordCount >= 25) chunks.push(current.join('\n\n'))

  return chunks
}

async function scrapePage(page, url, source) {
  try {
    await page.goto(url, { waitUntil: 'networkidle2', timeout: PAGE_TIMEOUT })

    const result = await page.evaluate(() => {
      // Remove noise elements
      document.querySelectorAll(
        'nav, header, footer, script, style, noscript, aside, [aria-hidden="true"], ' +
        '.no-print, [class*="cookie"], [class*="banner"], [class*="popup"], [id*="cookie"]'
      ).forEach(el => el.remove())

      const h1 = document.querySelector('h1')?.textContent?.trim() || document.title
      const main = document.querySelector('main') || document.querySelector('[role="main"]') || document.body
      // Extract semantic blocks so paragraph boundaries survive into the chunker.
      // Each block becomes one paragraph; the chunker groups them without splitting sentences.
      const blocks = [...main.querySelectorAll('p, h2, h3, h4, h5, li, dt, dd')]
      const text = blocks.length > 0
        ? blocks.map(el => el.textContent?.replace(/\s+/g, ' ').trim()).filter(Boolean).join('\n\n')
        : (main.innerText || main.textContent || '').replace(/\s+/g, ' ').trim()
      return { title: h1, text }
    })

    return { url, source, title: result.title, content: result.text }
  } catch (err) {
    process.stderr.write(`  SKIP ${url}: ${err.message}\n`)
    return null
  }
}

function getWebsiteUrls() {
  const urlIndex = JSON.parse(readFileSync(join(ROOT, 'public', 'urls.json'), 'utf-8'))
  const urls = (urlIndex.urls || []).filter(url =>
    !url.includes('/og?') && !url.includes('/api/') && !url.includes('/_next/')
  )
  process.stdout.write(`  Found ${urls.length} published Trailblaze Prep URLs\n`)
  return urls
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
  process.stdout.write('=== Trailblaze Prep Bot Training ===\n\n')
  mkdirSync(OUTPUT_DIR, { recursive: true })

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
  })

  const allChunks = []
  let chunkId = 0

  function addChunks(pageData) {
    if (!pageData) return
    const texts = chunkText(pageData.content)
    texts.forEach(text => {
      allChunks.push({
        id: chunkId++,
        title: pageData.title,
        url: pageData.url,
        source: pageData.source,
        content: text,
      })
    })
    process.stdout.write(`  → ${texts.length} chunk(s)\n`)
  }

  try {
    // -----------------------------------------------------------------------
    // Trailblaze Prep — all published pages listed in the repository URL index.
    // -----------------------------------------------------------------------
    process.stdout.write('\n--- Trailblaze Prep (trailblazeprep.com) ---\n')
    const sitemapUrls = getWebsiteUrls()

    for (let i = 0; i < sitemapUrls.length; i++) {
      const url = sitemapUrls[i]
      process.stdout.write(`[${i + 1}/${sitemapUrls.length}] ${url}\n`)
      // Isolate every navigation. A page that unexpectedly detaches cannot
      // poison the remaining crawl or prevent the knowledge base from writing.
      const contentPage = await browser.newPage()
      try {
        await contentPage.setUserAgent(
          'Mozilla/5.0 (compatible; TrailblazePrepBot/1.0; +https://www.trailblazeprep.com)'
        )
        const data = await scrapePage(contentPage, url, 'trailblazeprep')
        addChunks(data)
      } finally {
        await contentPage.close().catch(() => {})
      }
      await sleep(DELAY_TBPREP)
    }

  } finally {
    await browser.close().catch(() => {})
  }

  // -------------------------------------------------------------------------
  // Write knowledge base
  // -------------------------------------------------------------------------
  const output = {
    generated: new Date().toISOString(),
    version: 1,
    totalChunks: allChunks.length,
    chunks: allChunks,
  }

  writeFileSync(OUTPUT_FILE, JSON.stringify(output, null, 2), 'utf-8')

  process.stdout.write(`\n✅ Knowledge base saved to ${OUTPUT_FILE}\n`)
  process.stdout.write(`   Total chunks: ${allChunks.length}\n`)
  process.stdout.write('\nRe-run anytime to retrain with fresh content.\n')
}

main().catch(err => {
  process.stderr.write(`\nFatal: ${err.message}\n`)
  process.exit(1)
})
