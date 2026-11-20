#!/usr/bin/env node
/**
 * Bulk-submit URLs to IndexNow (Bing, Yandex, Seznam, Naver, etc.).
 *
 * Usage:
 *   npm run indexnow                         # all <loc> URLs from the sitemap
 *   npm run indexnow -- --file urls.txt      # one https:// URL per line
 *   npm run indexnow -- --dry-run            # print payload summary, send nothing
 *
 * Key: INDEXNOW_KEY env var, otherwise read from the key file in public/
 * (a .txt whose contents equal its own basename, as IndexNow requires).
 *
 * Sitemap lookup order: out/sitemap.xml, public/sitemap.xml,
 * .next/server/app/sitemap.xml.body (next build output), then the live site.
 *
 * Docs: https://www.indexnow.org/documentation
 * Zero dependencies: Node 18+ (global fetch).
 */

import { existsSync, readFileSync, readdirSync } from 'node:fs'
import { join, dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const SITE_ORIGIN = 'https://www.trailblazeprep.com'
const SITE_PREFIX = `${SITE_ORIGIN}/`
const HOST = new URL(SITE_ORIGIN).hostname
const ENDPOINT = 'https://api.indexnow.org/indexnow'
const MAX_PER_REQUEST = 10_000
const KEY_PATTERN = /^[A-Za-z0-9-]{8,128}$/

const STATUS_HINTS = {
  200: 'OK: URLs submitted.',
  202: 'Accepted: key validation pending; URLs received.',
  400: 'Bad request: invalid JSON or payload format.',
  403: 'Forbidden: key not valid, or key file not reachable at keyLocation (is it deployed?).',
  422: 'Unprocessable: URLs do not belong to host, or key does not match the file contents.',
  429: 'Too many requests: possible spam signal, slow down.',
}

function parseArgs(argv) {
  const args = { dryRun: false, file: null }
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i]
    if (a === '--dry-run') args.dryRun = true
    else if (a === '--file') {
      args.file = argv[++i]
      if (!args.file) fail('--file needs a path')
    } else if (a.startsWith('--file=')) args.file = a.slice('--file='.length)
    else if (a === '--help' || a === '-h') {
      console.log('Usage: node scripts/indexnow-submit.mjs [--dry-run] [--file <path>]')
      process.exit(0)
    } else fail(`Unknown argument: ${a}`)
  }
  return args
}

function fail(msg) {
  console.error(`Error: ${msg}`)
  process.exit(1)
}

function resolveKey() {
  const publicDir = join(ROOT, 'public')
  const envKey = process.env.INDEXNOW_KEY?.trim()
  if (envKey) {
    if (!KEY_PATTERN.test(envKey)) fail('INDEXNOW_KEY must be 8-128 chars of a-z, A-Z, 0-9, -')
    const file = join(publicDir, `${envKey}.txt`)
    if (!existsSync(file)) fail(`INDEXNOW_KEY is set but public/${envKey}.txt does not exist`)
    return envKey
  }
  const matches = readdirSync(publicDir)
    .filter((f) => f.endsWith('.txt'))
    .map((f) => ({ name: f.slice(0, -4), body: readFileSync(join(publicDir, f), 'utf8').trim() }))
    .filter(({ name, body }) => KEY_PATTERN.test(name) && body === name)
  if (matches.length === 0) fail('No IndexNow key file found in public/ (a .txt containing its own basename)')
  if (matches.length > 1) fail(`Multiple key files in public/: ${matches.map((m) => m.name).join(', ')}. Set INDEXNOW_KEY.`)
  return matches[0].name
}

function extractLocs(xml) {
  return [...xml.matchAll(/<loc>\s*([^<]+?)\s*<\/loc>/g)].map((m) =>
    m[1].replace(/&amp;/g, '&').replace(/&apos;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>'),
  )
}

async function loadFromSitemap() {
  const candidates = ['out/sitemap.xml', 'public/sitemap.xml', '.next/server/app/sitemap.xml.body']
  for (const rel of candidates) {
    const p = join(ROOT, rel)
    if (existsSync(p)) return { source: rel, urls: extractLocs(readFileSync(p, 'utf8')) }
  }
  const remote = `${SITE_ORIGIN}/sitemap.xml`
  const res = await fetch(remote)
  if (!res.ok) fail(`No local sitemap found and ${remote} returned ${res.status}`)
  return { source: remote, urls: extractLocs(await res.text()) }
}

function loadFromFile(path) {
  const abs = resolve(process.cwd(), path)
  if (!existsSync(abs)) fail(`File not found: ${path}`)
  const urls = readFileSync(abs, 'utf8')
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter((l) => l && !l.startsWith('#'))
  return { source: path, urls }
}

function filterUrls(raw) {
  const kept = []
  const rejected = []
  const seen = new Set()
  for (const u of raw) {
    if (!u.startsWith(SITE_PREFIX) && u !== SITE_ORIGIN) {
      rejected.push(u)
      continue
    }
    if (!seen.has(u)) {
      seen.add(u)
      kept.push(u)
    }
  }
  return { kept, rejected, duplicates: raw.length - kept.length - rejected.length }
}

async function submitChunk(payload) {
  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(payload),
  })
  const text = await res.text().catch(() => '')
  return { status: res.status, text }
}

async function main() {
  const args = parseArgs(process.argv.slice(2))
  const key = resolveKey()
  const keyLocation = `${SITE_ORIGIN}/${key}.txt`

  const { source, urls: raw } = args.file ? loadFromFile(args.file) : await loadFromSitemap()
  const { kept: urls, rejected, duplicates } = filterUrls(raw)

  console.log(`Source:      ${source}`)
  console.log(`Host:        ${HOST}`)
  console.log(`Key:         ${key}`)
  console.log(`keyLocation: ${keyLocation}`)
  console.log(`URLs:        ${urls.length} to submit (${raw.length} read, ${rejected.length} off-host, ${duplicates} duplicate)`)
  if (rejected.length) {
    console.log(`Rejected (not under ${SITE_PREFIX}):`)
    rejected.slice(0, 10).forEach((u) => console.log(`  - ${u}`))
    if (rejected.length > 10) console.log(`  ... and ${rejected.length - 10} more`)
  }
  if (urls.length === 0) fail('Nothing to submit')

  const chunks = []
  for (let i = 0; i < urls.length; i += MAX_PER_REQUEST) chunks.push(urls.slice(i, i + MAX_PER_REQUEST))

  if (args.dryRun) {
    console.log(`\nDry run: ${chunks.length} request(s) to ${ENDPOINT} would be sent. URLs:`)
    urls.forEach((u) => console.log(`  ${u}`))
    return
  }

  console.log(`\nSubmitting ${chunks.length} request(s) to ${ENDPOINT}...`)
  let failed = 0
  for (let i = 0; i < chunks.length; i++) {
    const urlList = chunks[i]
    try {
      const { status, text } = await submitChunk({ host: HOST, key, keyLocation, urlList })
      const hint = STATUS_HINTS[status] ?? 'Unexpected status.'
      const ok = status === 200 || status === 202
      const line = `Request ${i + 1}/${chunks.length} (${urlList.length} URLs): ${status} ${hint}`
      if (ok) console.log(line)
      else {
        failed++
        console.error(line)
        if (text) console.error(`  Response: ${text.slice(0, 500)}`)
      }
    } catch (err) {
      failed++
      console.error(`Request ${i + 1}/${chunks.length}: network error: ${err.message}`)
    }
  }
  console.log(failed ? `\n${failed} request(s) failed.` : `\nDone. ${urls.length} URLs submitted.`)
  if (failed) process.exit(1)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
