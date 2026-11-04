#!/usr/bin/env node
/**
 * Build public/sitemap-lastmod.json: a route -> ISO date map for <lastmod>.
 *
 * The sitemap had no <lastmod> at all, so Google had no signal that a page had
 * changed and fell back to guessing. A certification page rewritten this week
 * was still being shown in search with an August date.
 *
 * Dates come from git, not from the build clock. Stamping every URL with
 * "today" on each deploy is the behaviour Google learns to ignore, and it would
 * be untrue. Each route is dated by the last commit that touched the file the
 * page's own content comes from:
 *
 *   /certifications/<slug>  -> the slug's JSON in cert-page-spike, else its
 *                              route file
 *   /<name>                 -> src/app/<name>/page.tsx
 *   /                       -> src/app/page.tsx
 *
 * Changes to shared components and libraries are deliberately not counted. That
 * understates freshness rather than overstating it, which is the safer error.
 *
 * Usage: node scripts/generate-sitemap-lastmod.mjs
 */

import { execFileSync } from 'node:child_process'
import { existsSync, readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

const ROOT = process.cwd()
const OUT = join(ROOT, 'public/page-dates.json')
const CERT_DATA = 'src/lib/cert-page-spike/promoted-associate'

function gitDate(relPath) {
  try {
    const out = execFileSync('git', ['log', '-1', '--format=%cI', '--', relPath], {
      cwd: ROOT,
      encoding: 'utf8',
    }).trim()
    return out || null
  } catch {
    return null
  }
}

/** First commit that added the file: the page's genuine publication date. */
function gitCreated(relPath) {
  try {
    const out = execFileSync(
      'git',
      ['log', '--diff-filter=A', '--follow', '-1', '--format=%cI', '--', relPath],
      { cwd: ROOT, encoding: 'utf8' },
    ).trim()
    return out || null
  } catch {
    return null
  }
}

/**
 * Every file whose content the page actually renders. A certification page
 * draws its body from its own data file and its title, description and FAQ
 * from cert-seo-data, so a change to either genuinely changes the page.
 */
function sourcesFor(pathname) {
  if (pathname === '/') return ['src/app/page.tsx']
  if (pathname.startsWith('/certifications/')) {
    const slug = pathname.slice('/certifications/'.length)
    const own = [
      `${CERT_DATA}/${slug}.json`,
      `src/lib/cert-page-spike/${slug}-data.ts`,
      'src/app/certifications/[slug]/page.tsx',
    ].filter((f) => existsSync(join(ROOT, f)))
    return [...own, 'src/lib/cert-seo-data.ts']
  }
  const route = `src/app${pathname}/page.tsx`
  return existsSync(join(ROOT, route)) ? [route] : []
}

const { urls } = JSON.parse(readFileSync(join(ROOT, 'public/urls.json'), 'utf8'))
const map = {}
let resolved = 0
let fallback = 0

for (const url of urls) {
  const pathname = new URL(url).pathname
  if (map[pathname]) continue
  const sources = sourcesFor(pathname)
  const modifiedDates = sources.map((f) => gitDate(f)).filter(Boolean).sort()
  // Published is the oldest creation date among the page's own sources, so a
  // shared library added later cannot make an old page look new.
  const createdDates = sources
    .filter((f) => f !== 'src/lib/cert-seo-data.ts')
    .map((f) => gitCreated(f))
    .filter(Boolean)
    .sort()
  const modified = modifiedDates.length ? modifiedDates[modifiedDates.length - 1] : null
  const published = createdDates.length ? createdDates[0] : modified
  if (modified) {
    map[pathname] = { published, modified }
    resolved += 1
  } else {
    fallback += 1
  }
}

writeFileSync(OUT, `${JSON.stringify(map, null, 2)}\n`)

const dates = Object.values(map)
  .map((d) => d.modified.slice(0, 10))
  .sort()
console.log(`Wrote ${OUT}`)
console.log(`  routes dated from git: ${resolved}`)
console.log(`  routes left undated:   ${fallback}`)
if (dates.length) {
  console.log(`  oldest: ${dates[0]}   newest: ${dates[dates.length - 1]}`)
}
