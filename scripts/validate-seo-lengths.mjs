#!/usr/bin/env node
/**
 * SEO title & description length validator.
 * Scans the Next.js build output (.next/server/app) HTML files and asserts:
 *   - <title> ≤ 60 characters
 *   - <meta name="description"> ≤ 160 characters
 *
 * Usage (run after npm run build):
 *   node scripts/validate-seo-lengths.mjs
 *
 * Exit code 1 if any violations found — safe to add as a CI step.
 */

import { readFileSync, readdirSync, statSync } from 'fs'
import { join } from 'path'

const BUILD_DIR = join(process.cwd(), '.next/server/app')
const TITLE_MAX = 60
const DESC_MAX = 160

function* walkHtml(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name)
    if (entry.isDirectory()) yield* walkHtml(full)
    else if (entry.name.endsWith('.html')) yield full
  }
}

function decodeHtmlEntities(str) {
  return str
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#x27;/g, "'")
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&#x2026;/g, '…')
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)))
}

function extractTitle(html) {
  const m = html.match(/<title[^>]*>([^<]*)<\/title>/)
  return m ? decodeHtmlEntities(m[1].trim()) : null
}

function extractDescription(html) {
  const m = html.match(/<meta\s+name="description"\s+content="([^"]*)"/)
    ?? html.match(/<meta\s+content="([^"]*)"\s+name="description"/)
  return m ? decodeHtmlEntities(m[1].trim()) : null
}

let violations = 0
let checked = 0

for (const file of walkHtml(BUILD_DIR)) {
  const html = readFileSync(file, 'utf8')
  const relPath = file.replace(BUILD_DIR, '').replace(/\/page\.html$/, '') || '/'

  const title = extractTitle(html)
  const desc = extractDescription(html)
  checked++

  if (title && title.length > TITLE_MAX) {
    console.error(`TITLE TOO LONG (${title.length} chars) on ${relPath}:\n  "${title}"`)
    violations++
  }
  if (desc && desc.length > DESC_MAX) {
    console.error(`DESC TOO LONG (${desc.length} chars) on ${relPath}:\n  "${desc}"`)
    violations++
  }
  if (!title) {
    console.warn(`MISSING TITLE on ${relPath}`)
    violations++
  }
  if (!desc) {
    console.warn(`MISSING DESC on ${relPath}`)
    violations++
  }
}

console.log(`\nChecked ${checked} pages. Violations: ${violations}`)
if (violations > 0) process.exit(1)
else console.log('All titles ≤60 chars and descriptions ≤160 chars. ✓')
