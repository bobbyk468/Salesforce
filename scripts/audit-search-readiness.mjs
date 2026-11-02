#!/usr/bin/env node
import { parseDocument } from 'htmlparser2'
import { selectAll } from 'css-select'
import { writeFile, mkdir } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const SCRIPT_DIR = path.dirname(fileURLToPath(import.meta.url))
const DEFAULT_BASE = 'https://www.trailblazeprep.com'
const PRODUCTION_ORIGIN = 'https://www.trailblazeprep.com'
const REQUEST_TIMEOUT_MS = 20_000
const PRODUCTION_HOSTS = new Set(['www.trailblazeprep.com', 'trailblazeprep.com'])

function parseArgs(args) {
  const options = { base: DEFAULT_BASE, output: null, canonicalOrigin: PRODUCTION_ORIGIN, concurrency: 8 }
  for (const arg of args) {
    const match = arg.match(/^--(base|output|canonical-origin|concurrency)=(.*)$/)
    if (!match) throw new Error(`Unknown argument: ${arg}`)
    const [, key, value] = match
    if (!value) throw new Error(`--${key} requires a value`)
    if (key === 'concurrency') {
      options.concurrency = Number(value)
      if (!Number.isInteger(options.concurrency) || options.concurrency < 1 || options.concurrency > 64) {
        throw new Error('--concurrency must be an integer from 1 to 64')
      }
    } else if (key === 'base') options.base = value.replace(/\/$/, '')
    else if (key === 'canonical-origin') options.canonicalOrigin = new URL(value).origin
    else options.output = value
  }
  const baseUrl = new URL(options.base)
  if (!['http:', 'https:'].includes(baseUrl.protocol)) throw new Error('--base must use http or https')
  options.base = baseUrl.origin
  return options
}

function textContent(node) {
  if (!node) return ''
  if (node.type === 'text') return node.data
  if (node.type === 'script' || node.type === 'style') return ''
  return (node.children || []).map(textContent).join(' ')
}

function cleanText(value) {
  return value.replace(/\s+/g, ' ').trim()
}

function parseHtml(html, pageUrl, headers = {}) {
  const doc = parseDocument(html, { decodeEntities: true })
  const nodes = (selector) => selectAll(selector, doc.children)
  const metas = nodes('meta')
  // Only document-head titles are search-result title candidates; SVG <title> is accessible text.
  const titles = nodes('head title').map((node) => cleanText(textContent(node)))
  const descriptions = metas
    .filter((node) => (node.attribs.name || '').toLowerCase() === 'description')
    .map((node) => cleanText(node.attribs.content || ''))
  const canonicalLinks = nodes('link').filter((node) =>
    (node.attribs.rel || '').toLowerCase().split(/\s+/).includes('canonical'))
  const canonicalValues = canonicalLinks.map((node) => node.attribs.href || '')
  const h1s = nodes('h1').map((node) => cleanText(textContent(node)))
  const robotsMeta = metas
    .filter((node) => ['robots', 'googlebot'].includes((node.attribs.name || '').toLowerCase()))
    .map((node) => node.attribs.content || '')
  const xRobots = headers['x-robots-tag'] || ''
  const noindex = [...robotsMeta, xRobots].some((value) => /(?:^|[,;\s])noindex(?:$|[,;\s])/i.test(value))

  const ids = new Set()
  const duplicateIds = new Set()
  for (const node of nodes('[id]')) {
    if (ids.has(node.attribs.id)) duplicateIds.add(node.attribs.id)
    ids.add(node.attribs.id)
  }
  for (const node of nodes('a[name]')) ids.add(node.attribs.name)
  const internalLinks = []
  for (const node of nodes('a[href]')) {
    const href = (node.attribs.href || '').trim()
    if (!href || /^(?:mailto:|tel:|javascript:|data:)/i.test(href)) continue
    let target
    try { target = new URL(href, pageUrl) } catch { continue }
    if (!['http:', 'https:'].includes(target.protocol)) continue
    const pageOrigin = new URL(pageUrl).origin
    if (target.origin !== pageOrigin && !PRODUCTION_HOSTS.has(target.hostname.toLowerCase())) continue
    // Local preview crawls remap production links to their local route for status and anchor checks.
    if (target.origin !== pageOrigin) target = new URL(`${target.pathname}${target.search}${target.hash}`, pageOrigin)
    // Only the site's known exam-prefill state fragment is not an element anchor.
    const fragment = /^#exam=/i.test(target.hash) ? '' : target.hash
    internalLinks.push({ href, url: `${target.origin}${target.pathname}${target.search}`, fragment })
  }

  const jsonLd = []
  const jsonLdErrors = []
  for (const node of nodes('script[type]')) {
    if (!(node.attribs.type || '').split(';')[0].trim().toLowerCase().includes('ld+json')) continue
    const raw = (node.children || []).map((child) => child.data || '').join('').trim()
    if (!raw) continue
    try {
      const parsed = JSON.parse(raw)
      const objects = []
      const visit = (value) => {
        if (Array.isArray(value)) value.forEach(visit)
        else if (value && typeof value === 'object') {
          objects.push(value)
          if (Array.isArray(value['@graph'])) value['@graph'].forEach(visit)
        }
      }
      visit(parsed)
      jsonLd.push(...objects)
    } catch (error) {
      jsonLdErrors.push(error.message)
    }
  }

  return {
    title: titles[0] || '', titleCount: titles.length,
    description: descriptions[0] || '', descriptionCount: descriptions.length,
    canonical: canonicalValues[0] || '', canonicalCount: canonicalValues.length,
    h1s, noindex, robotsMeta, xRobots, ids: [...ids], internalLinks,
    jsonLd, jsonLdErrors,
    language: nodes('html')[0]?.attribs.lang || '',
    viewport: metas.find(node => (node.attribs.name || '').toLowerCase() === 'viewport')?.attribs.content || '',
    duplicateIds: [...duplicateIds],
    imagesWithoutAlt: nodes('img').filter(node => !Object.hasOwn(node.attribs, 'alt')).map(node => node.attribs.src || '(missing src)'),
  }
}

function canonicalTarget(url, canonicalOrigin = PRODUCTION_ORIGIN) {
  const parsed = new URL(url)
  return `${new URL(canonicalOrigin).origin}${parsed.pathname}`
}

async function fetchManual(url, fetchImpl = fetch) {
  const response = await fetchImpl(url, {
    redirect: 'manual',
    signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
    headers: { 'User-Agent': 'TrailblazePrepSearchReadinessAudit/1.0 (+sitemap crawl)' },
  })
  const headers = Object.fromEntries(response.headers.entries())
  const body = response.status >= 300 && response.status < 400 ? '' : await response.text()
  return { status: response.status, headers, body, location: response.headers.get('location') }
}

function networkFailure(error) { return `Network error: ${error.message}` }

async function getSitemapUrls(base) {
  const visited = new Set()
  const pageUrls = new Set()
  const errors = []
  const walk = async (sitemapUrl) => {
    if (visited.has(sitemapUrl)) return
    visited.add(sitemapUrl)
    let response
    try { response = await fetchManual(sitemapUrl) } catch (error) {
      errors.push({ url: sitemapUrl, error: networkFailure(error) })
      return
    }
    if (response.status !== 200) {
      errors.push({ url: sitemapUrl, status: response.status, location: response.location })
      return
    }
    const doc = parseDocument(response.body, { xmlMode: true, decodeEntities: true })
    const locs = selectAll('loc', doc.children).map((node) => cleanText(textContent(node)))
    const index = selectAll('sitemapindex', doc.children).length > 0
    if (!locs.length) {
      errors.push({ url: sitemapUrl, error: 'No <loc> entries found' })
      return
    }
    if (index) {
      for (const loc of locs) await walk(new URL(loc, sitemapUrl).href)
      return
    }
    for (const loc of locs) {
      try {
        const parsed = new URL(loc, sitemapUrl)
        if (['http:', 'https:'].includes(parsed.protocol)) pageUrls.add(`${base}${parsed.pathname}${parsed.search}`)
      } catch { errors.push({ url: sitemapUrl, error: `Invalid sitemap URL: ${loc}` }) }
    }
  }
  await walk(`${base}/sitemap.xml`)
  return { urls: [...pageUrls].sort(), sitemapCount: visited.size, errors }
}

async function mapLimit(items, limit, callback) {
  const results = new Array(items.length)
  let cursor = 0
  const workers = Array.from({ length: Math.min(limit, items.length) }, async () => {
    while (true) {
      const index = cursor++
      if (index >= items.length) return
      results[index] = await callback(items[index], index)
    }
  })
  await Promise.all(workers)
  return results
}

function normForDuplicate(value) { return cleanText(value).toLocaleLowerCase() }

function schemaTypes(value) {
  const type = value['@type']
  return (Array.isArray(type) ? type : [type]).filter(Boolean)
}

function normalizeComparableUrl(value, base) {
  if (!value) return null
  try {
    const url = new URL(typeof value === 'string' ? value : value['@id'], base)
    return `${url.origin}${url.pathname}`.replace(/\/$/, '') || `${url.origin}/`
  } catch { return null }
}

function classifyPage(page, canonicalOrigin = PRODUCTION_ORIGIN) {
  const failures = []
  const warnings = []
  if (page.status !== 200) failures.push(`HTTP status ${page.status}${page.location ? ` redirect to ${page.location}` : ''}`)
  if (!page.title) failures.push('Missing title')
  if (!page.description) failures.push('Missing meta description')
  if (!page.canonical) failures.push('Missing canonical link')
  else {
    let actual
    try { actual = normalizeComparableUrl(page.canonical, page.url) } catch {}
    const expected = normalizeComparableUrl(canonicalTarget(page.url, canonicalOrigin), canonicalOrigin)
    if (page.canonicalCount !== 1) failures.push(`Expected one canonical link; found ${page.canonicalCount}`)
    if (actual !== expected) failures.push(`Canonical mismatch: expected ${expected}, found ${page.canonical}`)
  }
  if (page.noindex) failures.push('Page declares noindex')
  if (page.h1s.length === 0) failures.push('Missing H1')
  if (page.jsonLdErrors.length) failures.push(`Invalid JSON-LD (${page.jsonLdErrors.length} block(s))`)
  if (page.language !== undefined && !page.language.trim()) failures.push('Missing document language')
  if (page.viewport !== undefined && !/width\s*=\s*device-width/i.test(page.viewport)) failures.push('Missing responsive viewport')
  if (page.duplicateIds?.length) warnings.push(`Duplicate element IDs: ${page.duplicateIds.join(', ')}`)
  if (page.imagesWithoutAlt?.length) warnings.push(`Images missing alt attributes (${page.imagesWithoutAlt.length})`)
  if (page.titleCount > 1) warnings.push(`Multiple title elements (${page.titleCount})`)
  if (page.descriptionCount > 1) warnings.push(`Multiple meta descriptions (${page.descriptionCount})`)
  if (page.h1s.length > 1) warnings.push(`Multiple H1 elements (${page.h1s.length})`)
  if (page.title.length > 60) warnings.push(`Title is ${page.title.length} characters (diagnostic only)`)
  if (page.description.length > 160) warnings.push(`Meta description is ${page.description.length} characters (diagnostic only)`)
  if (page.title && page.title.length < 15) warnings.push(`Title is ${page.title.length} characters (diagnostic only)`)
  if (page.description && page.description.length < 50) warnings.push(`Meta description is ${page.description.length} characters (diagnostic only)`)
  const pageCanonical = normalizeComparableUrl(page.canonical, page.url)
  for (const node of page.jsonLd) {
    if (!schemaTypes(node).some((value) => String(value).toLowerCase() === 'article')) continue
    const mainEntity = node.mainEntityOfPage
    if (mainEntity === undefined) continue
    const values = Array.isArray(mainEntity) ? mainEntity : [mainEntity]
    for (const value of values) {
      const target = normalizeComparableUrl(value, page.url)
      if (!target || target !== pageCanonical) failures.push(`Article mainEntityOfPage does not match canonical: ${JSON.stringify(value)}`)
    }
  }
  return { failures, warnings }
}

function addDuplicateFindings(pages, field) {
  const groups = new Map()
  for (const page of pages) {
    const value = normForDuplicate(page[field])
    if (!value) continue
    if (!groups.has(value)) groups.set(value, [])
    groups.get(value).push(page.url)
  }
  return [...groups.entries()]
    .filter(([, urls]) => urls.length > 1)
    .map(([value, urls]) => ({ type: `duplicate-${field}`, value, urls }))
}

async function audit(options) {
  const sitemap = await getSitemapUrls(options.base)
  const pages = await mapLimit(sitemap.urls, options.concurrency, async (url) => {
    const page = { url, status: null, title: '', description: '', canonical: '', canonicalCount: 0, titleCount: 0,
      descriptionCount: 0, h1s: [], noindex: false, jsonLdErrors: [], internalLinks: [], ids: [], error: null, failures: [], warnings: [] }
    try {
      const response = await fetchManual(url)
      Object.assign(page, { status: response.status, location: response.location })
      if (response.status === 200) Object.assign(page, parseHtml(response.body, url, response.headers))
    } catch (error) { page.error = error.message; page.failures.push(networkFailure(error)) }
    if (!page.error) {
      const classification = classifyPage(page, options.canonicalOrigin)
      page.failures.push(...classification.failures)
      page.warnings.push(...classification.warnings)
    }
    return page
  })

  const pagesByUrl = new Map(pages.map((page) => [page.url, page]))
  const origin = new URL(options.base).origin
  const linkTargets = new Map()
  for (const source of pages) for (const link of source.internalLinks) {
    const target = new URL(link.url)
    if (target.origin !== origin) continue
    const key = `${target.origin}${target.pathname}${target.search}`
    if (!linkTargets.has(key)) linkTargets.set(key, { url: key, fragments: new Set(), sources: new Set() })
    const entry = linkTargets.get(key)
    if (link.fragment) entry.fragments.add(link.fragment)
    entry.sources.add(source.url)
  }
  const linkChecks = await mapLimit([...linkTargets.values()], options.concurrency, async (entry) => {
    let result = { url: entry.url, status: null, location: null, fragments: [...entry.fragments], sources: [...entry.sources], failures: [] }
    let page = pagesByUrl.get(entry.url)
    try {
      if (!page) {
        const response = await fetchManual(entry.url)
        result.status = response.status
        result.location = response.location
        if (response.status === 200) page = { url: entry.url, ...parseHtml(response.body, entry.url, response.headers) }
      } else {
        result.status = page.status
        result.location = page.location || null
      }
      if (result.status !== 200) result.failures.push(`Internal target returned ${result.status}${result.location ? ` redirect to ${result.location}` : ''}`)
      if (page && result.status === 200) for (const fragment of entry.fragments) {
        let id
        try { id = decodeURIComponent(fragment.slice(1)) } catch { id = fragment.slice(1) }
        if (!page.ids.includes(id)) result.failures.push(`Missing anchor ${fragment}`)
      }
    } catch (error) {
      result.failures.push(networkFailure(error))
    }
    return result
  })

  const duplicateTitles = addDuplicateFindings(pages, 'title')
  const duplicateDescriptions = addDuplicateFindings(pages, 'description')
  const hardFailures = []
  for (const error of sitemap.errors) hardFailures.push({ type: 'sitemap-fetch', ...error })
  for (const page of pages) for (const issue of page.failures) hardFailures.push({ type: 'page', url: page.url, issue })
  for (const duplicate of [...duplicateTitles, ...duplicateDescriptions]) hardFailures.push(duplicate)
  for (const check of linkChecks) for (const issue of check.failures) hardFailures.push({ type: 'internal-link', url: check.url, issue, sources: check.sources })
  const warnings = pages.flatMap((page) => page.warnings.map((issue) => ({ url: page.url, issue })))
  return {
    generatedAt: new Date().toISOString(), base: options.base,
    expectations: { canonicalOrigin: options.canonicalOrigin, redirects: 'manual; any page or internal target redirect is a failure', timeoutMs: REQUEST_TIMEOUT_MS },
    summary: {
      sitemapCount: sitemap.sitemapCount, sitemapPageCount: sitemap.urls.length, pagesChecked: pages.length,
      internalTargetsChecked: linkChecks.length, pagesWithHardFailures: new Set(hardFailures.filter((item) => item.url).map((item) => item.url)).size,
      hardFailureCount: hardFailures.length, warningCount: warnings.length,
      duplicateTitleGroups: duplicateTitles.length, duplicateDescriptionGroups: duplicateDescriptions.length,
      pass: hardFailures.length === 0,
    },
    sitemapErrors: sitemap.errors,
    duplicateTitles, duplicateDescriptions,
    hardFailures, warnings,
    pages: pages.map(({ ids, internalLinks, jsonLd, ...page }) => ({ ...page, internalLinkCount: internalLinks.length, jsonLdObjectCount: jsonLd.length })),
    internalLinks: linkChecks,
  }
}

async function main() {
  let options
  try { options = parseArgs(process.argv.slice(2)) } catch (error) {
    console.error(error.message)
    process.exitCode = 2
    return
  }
  const report = await audit(options)
  const output = options.output || path.join(SCRIPT_DIR, '..', 'performance-report', new Date().toISOString().slice(0, 10), 'search-readiness-production.json')
  await mkdir(path.dirname(path.resolve(output)), { recursive: true })
  await writeFile(output, `${JSON.stringify(report, null, 2)}\n`)
  console.log(`Search readiness: ${report.summary.pass ? 'PASS' : 'FAIL'} — ${report.summary.pagesChecked}/${report.summary.sitemapPageCount} sitemap pages; ${report.summary.internalTargetsChecked} internal targets`)
  console.log(`Hard failures: ${report.summary.hardFailureCount}; diagnostic warnings: ${report.summary.warningCount}`)
  console.log(`Report: ${path.resolve(output)}`)
  for (const finding of report.hardFailures.slice(0, 20)) {
    console.log(`FAIL ${finding.url || finding.urls?.join(', ') || finding.type}: ${finding.issue || finding.value || finding.error || `HTTP ${finding.status}`}`)
  }
  if (report.hardFailures.length > 20) console.log(`... ${report.hardFailures.length - 20} more failures in the JSON report`)
  if (!report.summary.pass) process.exitCode = 1
}

export { addDuplicateFindings, canonicalTarget, classifyPage, fetchManual, networkFailure, parseArgs, parseHtml }

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) await main()
