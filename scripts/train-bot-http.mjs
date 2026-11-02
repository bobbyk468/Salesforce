#!/usr/bin/env node

import { copyFile, mkdir, readFile, rename, writeFile, access } from 'node:fs/promises'
import { constants } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { parseDocument, DomUtils } from 'htmlparser2'
import { selectAll, selectOne } from 'css-select'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const URL_INDEX = join(ROOT, 'public', 'urls.json')
const OUTPUT_FILE = join(ROOT, 'bot-data', 'knowledge-base.json')
const BACKUP_FILE = join(ROOT, 'performance-report', '2026-10-05', 'knowledge-base-before-http-refresh.json')
const PRODUCTION_ORIGIN = 'https://www.trailblazeprep.com'
const MAX_CONCURRENCY = 4
const TIMEOUT_MS = 30_000

const EXCLUDED = 'nav, header, footer, aside:not([aria-label^="Credential status:"]), script, style, noscript, [aria-hidden="true"], .no-print'
const SEMANTIC = 'p, h2, h3, h4, h5, li, dt, dd'
const BLOCK_TAGS = new Set([
  'address', 'article', 'blockquote', 'dd', 'div', 'dl', 'dt', 'fieldset', 'figcaption',
  'figure', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'li', 'main', 'ol', 'p', 'section', 'ul',
])

export function validateURL(value) {
  let url
  try { url = new URL(value) } catch { throw new Error(`Invalid URL: ${value}`) }
  if (url.protocol !== 'https:' || url.hostname !== 'www.trailblazeprep.com' || url.port || url.username || url.password) {
    throw new Error(`URL is not on the allowed HTTPS host: ${value}`)
  }
  if (url.pathname === '/og' || /\/(?:api|_next)(?:\/|$)/i.test(url.pathname)) {
    throw new Error(`URL path is not crawlable: ${value}`)
  }
  return url
}

function textOf(node) {
  if (!node) return ''
  function render(current) {
    if (current.type === 'text') return current.data
    if (!current.children) return ''
    const contents = current.children.map(render).join('')
    return BLOCK_TAGS.has(current.name) ? `\n\n${contents}\n\n` : contents
  }
  return render(node)
    .split(/\n\s*\n+/)
    .map(block => block.replace(/\s+/g, ' ').trim())
    .filter(Boolean)
    .join('\n\n')
}

export function chunkText(text, maxWords = 350) {
  const paragraphs = String(text)
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

export function extractPage(html) {
  const doc = parseDocument(html, { decodeEntities: true })
  const pageNotice = selectAll('aside[aria-label^="Credential status:"]', doc).map(textOf).join('\n\n')
  for (const node of selectAll(EXCLUDED, doc)) DomUtils.removeElement(node)
  const main = selectOne('main', doc) || selectOne('[role="main"]', doc) || doc
  const title = textOf(selectOne('h1', main) || selectOne('h1', doc)) ||
    textOf(selectOne('head title', doc))
  const blocks = selectAll(SEMANTIC, main).map(textOf).filter(Boolean)
  return { title, text: blocks.join('\n\n'), pageNotice }
}

export function validateBase(value) {
  let base
  try { base = new URL(value) } catch { throw new Error(`Invalid --base URL: ${value}`) }
  const local = (base.protocol === 'http:' || base.protocol === 'https:') &&
    (base.hostname === 'localhost' || base.hostname === '127.0.0.1')
  const production = base.origin === PRODUCTION_ORIGIN
  if ((!local && !production) || base.username || base.password || base.search || base.hash || (base.pathname !== '/' && base.pathname !== '')) {
    throw new Error('--base must be localhost, 127.0.0.1, or https://www.trailblazeprep.com')
  }
  return base.origin
}

function parseArgs(argv) {
  let base = PRODUCTION_ORIGIN
  let seenBase = false
  for (const arg of argv) {
    if (!arg.startsWith('--base=')) throw new Error(`Unknown argument: ${arg}`)
    if (seenBase) throw new Error('Duplicate --base argument')
    seenBase = true
    base = validateBase(arg.slice('--base='.length))
  }
  return base
}

async function fetchPage(url, base) {
  const source = validateURL(url)
  const target = new URL(source.pathname + source.search, base)
  const response = await fetch(target, {
    redirect: 'manual',
    signal: AbortSignal.timeout(TIMEOUT_MS),
    headers: { 'user-agent': 'TrailblazePrepBot/1.0 (+https://www.trailblazeprep.com)' },
  })
  if (response.status !== 200) throw new Error(`HTTP ${response.status}`)
  return extractPage(await response.text())
}

async function mapConcurrent(items, limit, worker) {
  const results = new Array(items.length)
  let next = 0
  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, async () => {
    while (true) {
      const index = next++
      if (index >= items.length) return
      try { results[index] = { value: await worker(items[index], index) } }
      catch (error) { results[index] = { error } }
    }
  }))
  return results
}

async function writeKnowledgeBase(output) {
  await mkdir(dirname(OUTPUT_FILE), { recursive: true })
  await mkdir(dirname(BACKUP_FILE), { recursive: true })
  try {
    await access(BACKUP_FILE)
  } catch {
    try {
      await access(OUTPUT_FILE)
      await copyFile(OUTPUT_FILE, BACKUP_FILE, constants.COPYFILE_EXCL)
    } catch (error) {
      if (error.code !== 'ENOENT' && error.code !== 'EEXIST') throw error
    }
  }
  const temp = `${OUTPUT_FILE}.${process.pid}.${Date.now()}.tmp`
  try {
    await writeFile(temp, JSON.stringify(output, null, 2), { encoding: 'utf8', flag: 'wx' })
    await rename(temp, OUTPUT_FILE)
  } catch (error) {
    const { unlink } = await import('node:fs/promises')
    await unlink(temp).catch(() => {})
    throw error
  }
}

export async function main(argv = process.argv.slice(2)) {
  const base = parseArgs(argv)
  const index = JSON.parse(await readFile(URL_INDEX, 'utf8'))
  if (!Array.isArray(index.urls) || !index.urls.length || new Set(index.urls).size !== index.urls.length) {
    throw new Error(`Expected a nonempty, unique URL index in ${URL_INDEX}`)
  }
  const urls = index.urls.map(url => {
    validateURL(url)
    return url
  })
  const fetched = await mapConcurrent(urls, MAX_CONCURRENCY, url => fetchPage(url, base))
  const failures = []
  const chunks = []
  for (let i = 0; i < fetched.length; i++) {
    const result = fetched[i]
    if (result.error) {
      failures.push(`${urls[i]}: ${result.error.message}`)
      continue
    }
    const { title, text, pageNotice } = result.value
    const contentChunks = chunkText(text)
    if (!title || contentChunks.length === 0) {
      failures.push(`${urls[i]}: page had no title or usable content chunks`)
      continue
    }
    for (const content of contentChunks) {
      chunks.push({ id: chunks.length, title, url: urls[i], source: 'trailblazeprep', content,
        ...(pageNotice ? { pageNotice } : {}) })
    }
  }
  if (failures.length) {
    process.stderr.write(`Training aborted: ${failures.length} URL(s) failed or produced no chunks.\n`)
    for (const failure of failures) process.stderr.write(`- ${failure}\n`)
    return 1
  }
  if (!chunks.length) throw new Error('Training aborted: no chunks were produced')
  await writeKnowledgeBase({ generated: new Date().toISOString(), version: 1, totalChunks: chunks.length, chunks })
  process.stdout.write(`Saved ${chunks.length} chunks from ${urls.length} pages to ${OUTPUT_FILE}\n`)
  return 0
}

const invokedPath = process.argv[1] ? pathToFileURL(resolve(process.argv[1])).href : ''
if (invokedPath === import.meta.url) {
  main().then(code => { process.exitCode = code }).catch(error => {
    process.stderr.write(`Fatal: ${error.message}\n`)
    process.exitCode = 1
  })
}
