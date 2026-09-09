#!/usr/bin/env node
/**
 * Verify GSC canonical/indexability hygiene.
 *
 * This script catches the two GSC classes we keep seeing:
 * - "Duplicate without user-selected canonical": every indexable URL should have exactly
 *   one self-referencing canonical and schema should anchor Article.mainEntityOfPage to itself.
 * - "Page with redirect": sitemap/public/index URLs and discovered internal HTML links should
 *   not point at redirecting same-site URLs.
 *
 * Usage:
 *   node scripts/verify-gsc-canonicals.mjs --base=http://localhost:3007
 *   node scripts/verify-gsc-canonicals.mjs --base=https://www.trailblazeprep.com
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.join(__dirname, '..')
const DEFAULT_BASE = process.env.BASE_URL || 'https://www.trailblazeprep.com'
const baseArg = process.argv.find((arg) => arg.startsWith('--base='))?.split('=')[1]
const baseUrl = (baseArg || DEFAULT_BASE).replace(/\/$/, '')
const baseOrigin = new URL(baseUrl).origin
const canonicalOrigin = 'https://www.trailblazeprep.com'

const INTERNAL_HOSTS = new Set(['www.trailblazeprep.com', 'trailblazeprep.com'])
const IGNORED_PATH_RE = /^(?:\/_next\/|\/api\/|\/og$)|\.(?:png|jpe?g|webp|avif|svg|ico|css|js|txt|xml|json|webmanifest|pdf)$/i

function normalizePath(href) {
  try {
    const url = href.startsWith('http') ? new URL(href) : new URL(href, canonicalOrigin)
    if (!INTERNAL_HOSTS.has(url.hostname)) return null
    if (IGNORED_PATH_RE.test(url.pathname)) return null
    return url.pathname === '/' ? '/' : url.pathname.replace(/\/$/, '')
  } catch {
    return null
  }
}

function expectedCanonicalForPath(pathname) {
  return `${canonicalOrigin}${pathname === '/' ? '' : pathname}`
}

async function fetchText(url, options = {}) {
  const res = await fetch(url, options)
  const text = await res.text()
  return { res, text }
}

async function fetchSitemapPaths() {
  const { res, text } = await fetchText(`${baseUrl}/sitemap.xml`)
  if (!res.ok) throw new Error(`Unable to fetch sitemap.xml: HTTP ${res.status}`)
  return [...text.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => normalizePath(match[1])).filter(Boolean)
}

function fetchPublicUrlPaths() {
  const urlsPath = path.join(ROOT, 'public/urls.json')
  if (!fs.existsSync(urlsPath)) return []
  const data = JSON.parse(fs.readFileSync(urlsPath, 'utf8'))
  const urls = Array.isArray(data) ? data : data.urls
  if (!Array.isArray(urls)) return []
  return urls.map((url) => normalizePath(url)).filter(Boolean)
}

function extractCanonical(html) {
  return [...html.matchAll(/<link\s+[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["'][^>]*>/gi)].map((match) => match[1])
}

function extractRobots(html) {
  return html.match(/<meta\s+[^>]*name=["']robots["'][^>]*content=["']([^"']+)["'][^>]*>/i)?.[1] || ''
}

function extractInternalLinks(html) {
  const links = new Set()
  for (const match of html.matchAll(/\s(?:href|src)=["']([^"'#?]+)(?:[?#][^"']*)?["']/gi)) {
    const pathname = normalizePath(match[1])
    if (pathname) links.add(pathname)
  }
  return links
}

function extractJsonLd(html) {
  const blocks = []
  for (const match of html.matchAll(/<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)) {
    try {
      blocks.push(JSON.parse(match[1].replace(/&quot;/g, '"')))
    } catch {
      // Ignore malformed blocks here; schema validation belongs to a dedicated structured-data check.
    }
  }
  return blocks.flatMap((block) => (Array.isArray(block) ? block : [block]))
}

async function main() {
  const issues = []
  const sitemapPaths = [...new Set(await fetchSitemapPaths())]
  const publicUrlPaths = [...new Set(fetchPublicUrlPaths())]
  const seedPaths = [...new Set([...sitemapPaths, ...publicUrlPaths])]
  const discoveredPaths = new Set(seedPaths)

  for (const pathname of seedPaths) {
    const url = `${baseOrigin}${pathname === '/' ? '' : pathname}`
    const { res, text } = await fetchText(url, { redirect: 'manual' })
    if (res.status >= 300 && res.status < 400) {
      issues.push({ type: 'seed-url-redirects', path: pathname, status: res.status, location: res.headers.get('location') })
      continue
    }
    if (!res.ok) {
      issues.push({ type: 'seed-url-error', path: pathname, status: res.status })
      continue
    }
    if (!res.headers.get('content-type')?.includes('text/html')) continue

    const canonicals = extractCanonical(text)
    const expectedCanonical = expectedCanonicalForPath(pathname)
    if (canonicals.length !== 1) {
      issues.push({ type: 'canonical-count', path: pathname, count: canonicals.length, canonicals })
    } else if (canonicals[0] !== expectedCanonical) {
      issues.push({ type: 'canonical-mismatch', path: pathname, expected: expectedCanonical, actual: canonicals[0] })
    }

    const robots = extractRobots(text)
    if (/noindex/i.test(robots)) {
      issues.push({ type: 'seed-url-noindex', path: pathname, robots })
    }

    for (const item of extractJsonLd(text)) {
      if (item?.['@type'] !== 'Article') continue
      const expectedPageId = `${expectedCanonical}#webpage`
      const actual = item.mainEntityOfPage?.['@id']
      if (actual && actual !== expectedPageId) {
        issues.push({ type: 'article-main-entity-mismatch', path: pathname, expected: expectedPageId, actual })
      }
    }

    for (const linkedPath of extractInternalLinks(text)) discoveredPaths.add(linkedPath)
  }

  for (const pathname of [...discoveredPaths].sort()) {
    const url = `${baseOrigin}${pathname === '/' ? '' : pathname}`
    const res = await fetch(url, { redirect: 'manual' })
    if (res.status >= 300 && res.status < 400) {
      issues.push({ type: 'internal-link-redirects', path: pathname, status: res.status, location: res.headers.get('location') })
    } else if (res.status === 404) {
      issues.push({ type: 'internal-link-404', path: pathname })
    }
  }

  console.log('=== GSC Canonical & Redirect Hygiene ===')
  console.log(`Base: ${baseUrl}`)
  console.log(`Sitemap URLs: ${sitemapPaths.length}`)
  console.log(`Public urls.json URLs: ${publicUrlPaths.length}`)
  console.log(`Discovered internal paths: ${discoveredPaths.size}`)

  if (issues.length > 0) {
    console.log('\nISSUES FOUND:')
    for (const issue of issues.slice(0, 100)) console.log(`- ${JSON.stringify(issue)}`)
    if (issues.length > 100) console.log(`... and ${issues.length - 100} more`)
    console.log(`\nFAILED: ${issues.length} issue(s)`)
    process.exit(1)
  }

  console.log('\nPASSED: No sitemap/public/internal redirect leaks, no canonical mismatches, no sitemap noindex conflicts, and no Article mainEntityOfPage conflicts.')
}

main().catch((error) => {
  console.error(error.message)
  process.exit(1)
})
