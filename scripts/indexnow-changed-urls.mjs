#!/usr/bin/env node
/**
 * Map the files changed between two commits to the site URLs IndexNow should hear about.
 *
 * Usage:
 *   node scripts/indexnow-changed-urls.mjs [--base <rev>] [--head <rev>] [--out <file>]
 *   defaults: --base HEAD~1 --head HEAD --out /tmp/changed-urls.txt
 *
 * Result modes:
 *   none     only non-page files changed (CI, docs, scripts, tests, config, CSS, images)
 *   changed  specific pages changed; their URLs are written to --out
 *   full     a shared template, component, data file or the sitemap source changed
 *
 * In GitHub Actions, writes should_submit, mode and count to $GITHUB_OUTPUT.
 * Only URLs that are in the sitemap source (public/urls.json minus the sitemap's
 * noindex list) are ever written, so deleted or noindex pages are never submitted.
 */

import { execFileSync } from 'node:child_process'
import { appendFileSync, readFileSync, writeFileSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const SITE_ORIGIN = 'https://www.trailblazeprep.com'

function parseArgs(argv) {
  const args = { base: 'HEAD~1', head: 'HEAD', out: '/tmp/changed-urls.txt' }
  for (let i = 0; i < argv.length; i++) {
    const [flag, inline] = argv[i].split('=', 2)
    const value = inline ?? argv[++i]
    if (!['--base', '--head', '--out'].includes(flag) || !value) {
      console.error(`Usage: indexnow-changed-urls.mjs [--base <rev>] [--head <rev>] [--out <file>] (bad arg: ${argv[i]})`)
      process.exit(2)
    }
    args[flag.slice(2)] = value
  }
  return args
}

/** Paths in the sitemap: public/urls.json minus the noindex set declared in src/app/sitemap.ts. */
function loadSitemapPaths() {
  const { urls } = JSON.parse(readFileSync(join(ROOT, 'public/urls.json'), 'utf8'))
  const sitemapTs = readFileSync(join(ROOT, 'src/app/sitemap.ts'), 'utf8')
  const noindexBlock = sitemapTs.match(/noindexPracticeTestPaths\s*=\s*new Set\(\[([\s\S]*?)\]\)/)?.[1] ?? ''
  const noindex = new Set([...noindexBlock.matchAll(/'([^']+)'/g)].map((m) => m[1]))
  const paths = new Set(urls.map((u) => new URL(u).pathname).filter((p) => !noindex.has(p)))
  paths.noindex = noindex
  return paths
}

const toUrl = (path) => `${SITE_ORIGIN}${path}`

// Files that never change what a crawler sees on a page.
const IGNORE = [
  /^(?!src\/|public\/urls\.json$)/, // anything outside src/ except the sitemap source: CI, docs, scripts, config, public assets
  /^src\/tests\//,
  /\.test\.[cm]?[jt]sx?$/,
  /\.md$/,
  /\.css$/,
  /^src\/app\/api\//,
  /^src\/app\/og(\/|-image)/,
  /^src\/app\/robots\.ts$/,
  /(^|\/)(opengraph|twitter)-image\.[jt]sx?$/,
]

// Per-cert content files named after the cert slug.
const CERT_CONTENT = [
  /^src\/lib\/cert-page-spike\/(?:promoted-associate\/)?([a-z0-9-]+?)(?:-data\.ts|-body\.json|-sample-questions\.json|\.json)$/,
  /^src\/lib\/question-banks\/(?:imported|local)\/([a-z0-9-]+)\.json$/,
]

/**
 * Classify one changed file.
 * Returns { kind: 'ignore' } | { kind: 'full', reason } | { kind: 'paths', paths: string[] }
 */
function classify(file, sitemapPaths) {
  if (IGNORE.some((re) => re.test(file))) return { kind: 'ignore' }
  if (file === 'public/urls.json' || file === 'src/app/sitemap.ts') return { kind: 'full', reason: 'sitemap source' }

  for (const re of CERT_CONTENT) {
    const slug = file.match(re)?.[1]
    if (!slug) continue
    const path = `/certifications/${slug}`
    if (sitemapPaths.noindex.has(path)) return { kind: 'paths', paths: [] } // real page, but noindex: never submit
    // Unknown slug (e.g. banks.json, counts.json): shared data, so resubmit everything.
    return sitemapPaths.has(path) ? { kind: 'paths', paths: [path] } : { kind: 'full', reason: 'shared cert data' }
  }

  const appMatch = file.match(/^src\/app\/(.*)$/)
  if (appMatch) {
    const parts = appMatch[1].split('/')
    const fileName = parts.pop()
    const segments = parts.filter((s) => !/^\(.*\)$/.test(s)) // drop route groups
    const isLayout = /^(layout|template)\.[jt]sx?$/.test(fileName)
    if (segments.length === 0) {
      if (fileName.startsWith('page.')) return { kind: 'paths', paths: ['/'] }
      return { kind: 'full', reason: 'root app file' }
    }
    // Dynamic segments match any value, so [slug] maps to every sitemap URL at that depth.
    const pattern = segments.map((s) => (/^\[.*\]$/.test(s) ? '[^/]+' : s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))).join('/')
    const re = new RegExp(`^/${pattern}${isLayout ? '(/.*)?' : ''}$`)
    const paths = [...sitemapPaths].filter((p) => re.test(p))
    return { kind: 'paths', paths }
  }

  // Components, lib, utils, middleware: shared across pages.
  return { kind: 'full', reason: 'shared code' }
}

function main() {
  const args = parseArgs(process.argv.slice(2))
  const files = execFileSync('git', ['diff', '--name-only', '--no-renames', args.base, args.head], {
    cwd: ROOT,
    encoding: 'utf8',
  })
    .split('\n')
    .filter(Boolean)

  const sitemapPaths = loadSitemapPaths()
  const urls = new Set()
  const fullReasons = []
  let ignored = 0

  console.log(`Diff ${args.base}..${args.head}: ${files.length} file(s) changed`)
  for (const file of files) {
    const result = classify(file, sitemapPaths)
    if (result.kind === 'ignore') {
      ignored++
      console.log(`  skip  ${file}`)
    } else if (result.kind === 'full') {
      fullReasons.push(`${file} (${result.reason})`)
      console.log(`  FULL  ${file} (${result.reason})`)
    } else {
      result.paths.forEach((p) => urls.add(toUrl(p)))
      const shown = result.paths.length > 5 ? `${result.paths.slice(0, 3).join(', ')} ... (${result.paths.length} URLs)` : result.paths.join(', ')
      console.log(`  page  ${file} -> ${shown || '(not in sitemap)'}`)
    }
  }

  const mode = fullReasons.length ? 'full' : urls.size ? 'changed' : 'none'
  const count = mode === 'full' ? sitemapPaths.size : urls.size
  if (mode === 'changed') writeFileSync(args.out, [...urls].sort().join('\n') + '\n')

  console.log(`\nMode: ${mode}`)
  if (mode === 'none') console.log('No page content changed; nothing to submit.')
  if (mode === 'changed') console.log(`${urls.size} URL(s) written to ${args.out}:\n${[...urls].sort().map((u) => `  ${u}`).join('\n')}`)
  if (mode === 'full') console.log(`Shared files changed; the full sitemap (~${count} URLs) will be submitted.`)

  if (process.env.GITHUB_OUTPUT) {
    appendFileSync(process.env.GITHUB_OUTPUT, `should_submit=${mode !== 'none'}\nmode=${mode}\ncount=${count}\n`)
  }
}

main()
