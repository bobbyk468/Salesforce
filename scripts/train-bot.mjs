#!/usr/bin/env node
/**
 * Trailblaze Prep Bot — Training Script
 *
 * Crawls trailblazeprep.com + Salesforce Trailhead credential pages,
 * chunks the content, and saves a knowledge base JSON for the chat API.
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
import { writeFileSync, mkdirSync } from 'fs'
import { join } from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')
const OUTPUT_DIR = join(ROOT, 'bot-data')
const OUTPUT_FILE = join(OUTPUT_DIR, 'knowledge-base.json')

const DELAY_TBPREP = 800   // ms between trailblazeprep requests
const DELAY_TRAILHEAD = 2000 // ms between Trailhead requests (be polite)
const PAGE_TIMEOUT = 45_000

// ---------------------------------------------------------------------------
// Trailhead credential overview pages
// URL pattern: https://trailhead.salesforce.com/en/credentials/{slug}/
// Add any new credentials here when Salesforce releases them.
// ---------------------------------------------------------------------------
const TRAILHEAD_CRED_SLUGS = [
  // Admin
  'administratoroverview',
  'advancedadministratoroverview',
  'appbuilderoverview',
  'businessanalystoverview',
  // Developer
  'platformdeveloperioverview',
  'platformdeveloperIIoverview',
  'javascriptdeveloperioverview',
  'b2ccommercedeveloperoverview',
  'omnistudiodeveloperoverview',
  'slackdeveloperoverview',
  // Consultant
  'salescloudconsultantoverview',
  'servicecloudconsultantoverview',
  'fieldserviceconsultantoverview',
  'marketingcloudconsultantoverview',
  'marketingcloudemaailspecialistoverview',
  'marketingclouddeveloperoverview',
  'datacloudconsultantoverview',
  'experiencecloudconsultantoverview',
  'pardotspecialistoverview',
  'pardotconsultantoverview',
  'cpqspecialistoverview',
  'educationcloudconsultantoverview',
  'nonprofitcloudconsultantoverview',
  'omnistudioconsultantoverview',
  'crmanalyticseinsteinDiscoveryconsultantoverview',
  'revenuecloudconsultantoverview',
  // AI & Agentforce
  'agentforcespecialistoverview',
  'aiassociateoverview',
  'aispecialistoverview',
  // Architect
  'b2bsolutionarchitectoverview',
  'b2csolutionarchitectoverview',
  'systemsarchitectoverview',
  'applicationarchitectoverview',
  'integrationarchitectoverview',
  'sharingandvisibilityarchitectoverview',
  'dataarchitectoverview',
  'identityandaccessmanagementarchitectoverview',
  'developmentlifecycleanddeploymentarchitectoverview',
  'technicalarchitectoverview',
  // Designer
  'strategicdesigneroverview',
  'uxdesigneroverview',
  // Tableau
  'tableaudataanalystoverview',
  'tableaucertifiedassociateoverview',
  // MuleSoft
  'mulesoftdeveloperioverview',
  'mulesoftdeveloperIIoverview',
  'mulesoftintegrationarchitectoverview',
  'mulesoftplatformarchitectoverview',
]

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

async function fetchSitemapUrls(page) {
  process.stdout.write('Fetching sitemap.xml...\n')
  try {
    await page.goto('https://www.trailblazeprep.com/sitemap.xml', {
      waitUntil: 'networkidle2',
      timeout: 30_000,
    })
    const content = await page.content()
    const matches = [...content.matchAll(/<loc>(https?:\/\/[^<]+)<\/loc>/g)]
    const urls = matches.map(m => m[1]).filter(u =>
      !u.includes('/og?') && !u.includes('/api/') && !u.includes('/_next/')
    )
    process.stdout.write(`  Found ${urls.length} URLs\n`)
    return urls
  } catch (err) {
    process.stderr.write(`  Failed to fetch sitemap: ${err.message}\n`)
    return []
  }
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
    // 1. Trailblaze Prep — all pages from sitemap
    // -----------------------------------------------------------------------
    process.stdout.write('\n--- Trailblaze Prep (trailblazeprep.com) ---\n')
    const sitemapPage = await browser.newPage()
    const sitemapUrls = await fetchSitemapUrls(sitemapPage)
    await sitemapPage.close()

    const contentPage = await browser.newPage()
    await contentPage.setUserAgent(
      'Mozilla/5.0 (compatible; TrailblazePrepBot/1.0; +https://www.trailblazeprep.com)'
    )

    for (let i = 0; i < sitemapUrls.length; i++) {
      const url = sitemapUrls[i]
      process.stdout.write(`[${i + 1}/${sitemapUrls.length}] ${url}\n`)
      const data = await scrapePage(contentPage, url, 'trailblazeprep')
      addChunks(data)
      await sleep(DELAY_TBPREP)
    }
    await contentPage.close()

    // -----------------------------------------------------------------------
    // 2. Trailhead credential overview pages
    // -----------------------------------------------------------------------
    process.stdout.write('\n--- Trailhead Credential Pages ---\n')
    const thPage = await browser.newPage()
    await thPage.setUserAgent(
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    )

    for (let i = 0; i < TRAILHEAD_CRED_SLUGS.length; i++) {
      const slug = TRAILHEAD_CRED_SLUGS[i]
      const url = `https://trailhead.salesforce.com/en/credentials/${slug}/`
      process.stdout.write(`[${i + 1}/${TRAILHEAD_CRED_SLUGS.length}] ${slug}\n`)
      const data = await scrapePage(thPage, url, 'trailhead')
      addChunks(data)
      await sleep(DELAY_TRAILHEAD)
    }
    await thPage.close()

    // -----------------------------------------------------------------------
    // 3. Trailhead Academy — all offerings page (JS-heavy SPA)
    // -----------------------------------------------------------------------
    process.stdout.write('\n--- Trailhead Academy ---\n')
    const acadPage = await browser.newPage()
    await acadPage.setUserAgent(
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    )

    try {
      process.stdout.write('Loading Trailhead Academy offerings...\n')
      await acadPage.goto(
        'https://trailheadacademy.salesforce.com/all-offerings#f-assetType=Certification',
        { waitUntil: 'networkidle2', timeout: 60_000 }
      )
      // Extra wait for SPA rendering
      await sleep(4000)

      const acadData = await acadPage.evaluate(() => {
        const title = 'Salesforce Trailhead Academy — Certification Offerings'
        // Try to find offering cards; fall back to full page text
        const cards = [...document.querySelectorAll('[class*="card"], [class*="offering"], [class*="result"], li')]
        const cardText = cards.map(c => c.textContent?.trim()).filter(t => t && t.length > 30).join('\n\n')
        const fallback = (document.querySelector('main') || document.body).innerText
        return { title, text: (cardText || fallback).replace(/\s+/g, ' ').trim() }
      })

      addChunks({
        url: 'https://trailheadacademy.salesforce.com/all-offerings',
        source: 'trailheadacademy',
        title: acadData.title,
        content: acadData.text,
      })
    } catch (err) {
      process.stderr.write(`  Failed to scrape Trailhead Academy: ${err.message}\n`)
    } finally {
      await acadPage.close()
    }

  } finally {
    await browser.close()
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
