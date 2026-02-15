#!/usr/bin/env node
/**
 * Technical SEO validation for ALL pages (sitemap-driven).
 * Checks: Compression (gzip/br), Text-to-HTML ratio, HTML document size (PageSpeed), and optionally minification.
 *
 * Usage:
 *   node scripts/validate-technical-seo.mjs
 *   node scripts/validate-technical-seo.mjs --base https://www.trailblazeprep.com
 *   node scripts/validate-technical-seo.mjs --base http://localhost:3000 --sample 20
 *
 * Run against production (or a deployed preview) to validate compression.
 * Run after "npm run build" to validate minification locally.
 */

const BASE = process.env.BASE_URL || process.argv.find((a) => a.startsWith('--base='))?.split('=')[1] || 'https://www.trailblazeprep.com'
const baseUrl = BASE.replace(/\/$/, '')
const sample = parseInt(process.argv.find((a) => a.startsWith('--sample='))?.split('=')[1] || '0', 10) || null

async function fetchSitemapUrls() {
  const res = await fetch(`${baseUrl}/sitemap.xml`)
  if (!res.ok) throw new Error(`Sitemap fetch failed: ${res.status}`)
  const xml = await res.text()
  const rawUrls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim())
  // Rewrite URLs to use baseUrl so --base=http://localhost:3000 validates the local build
  const baseOrigin = new URL(baseUrl).origin
  return rawUrls.map((u) => {
    try {
      const path = new URL(u).pathname
      return `${baseOrigin}${path}`
    } catch {
      return u
    }
  })
}

function stripScriptsAndStyles(html) {
  return html
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '')
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, '')
}

function getTextContent(html) {
  const noScriptStyle = stripScriptsAndStyles(html)
  const text = noScriptStyle.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()
  return text
}

async function checkUrl(url, options = {}) {
  const { checkCompression = true, checkRatio = true } = options
  const result = { url, compression: null, ratio: null, htmlBytes: 0, textBytes: 0, status: null, error: null }

  try {
    const res = await fetch(url, {
      headers: { 'Accept-Encoding': 'gzip, deflate, br' },
      redirect: 'follow',
    })
    result.status = res.status
    if (!res.ok) {
      result.error = `HTTP ${res.status}`
      return result
    }

    if (checkCompression) {
      const enc = res.headers.get('content-encoding')
      result.compression = enc || 'none'
    }

    if (checkRatio) {
      const html = await res.text()
      result.htmlBytes = Buffer.byteLength(html, 'utf8')
      const text = getTextContent(html)
      result.textBytes = Buffer.byteLength(text, 'utf8')
      result.ratio = result.htmlBytes > 0 ? result.textBytes / result.htmlBytes : 0
    }
  } catch (e) {
    result.error = e.message
  }
  return result
}

async function checkMinification() {
  const fs = await import('fs')
  const path = await import('path')
  const chunksDir = path.default.join(process.cwd(), '.next', 'static', 'chunks')
  if (!fs.default.existsSync(chunksDir)) {
    return { ok: false, message: '.next/static/chunks not found (run npm run build first)' }
  }
  const files = fs.default.readdirSync(chunksDir).filter((f) => f.endsWith('.js'))
  if (files.length === 0) {
    return { ok: false, message: 'No JS chunks found' }
  }
  let minified = 0
  let total = 0
  for (const f of files) {
    const content = fs.default.readFileSync(path.default.join(chunksDir, f), 'utf8')
    const lines = content.split('\n').length
    const size = content.length
    total++
    if (size > 500 && lines < 100) minified++
  }
  const ok = total > 0 && minified >= Math.min(3, total)
  return { ok, message: `${minified}/${total} chunks look minified (small line count)`, total, minified }
}

const RATIO_MIN = 0.04  // fail below 4%
const RATIO_WARN = 0.08 // warn 4–8%; pass >= 8% (audit target: improve toward 10%+)

// PageSpeed: HTML document size (uncompressed). 100–200KB = needs improvement, >200KB = too large
const HTML_SIZE_WARN_B = 100 * 1024   // 100 KB
const HTML_SIZE_FAIL_B = 200 * 1024   // 200 KB

function main() {
  return (async () => {
    console.log('Technical SEO validation (all pages from sitemap)\n')
    console.log('Base URL:', baseUrl)
    if (sample) console.log('Sample size:', sample, 'URLs')
    console.log('')

    let urls
    try {
      urls = await fetchSitemapUrls()
    } catch (e) {
      console.error('Failed to fetch sitemap:', e.message)
      console.error('Ensure the site is running and sitemap.xml is available at', baseUrl + '/sitemap.xml')
      process.exit(1)
    }

    const toCheck = sample ? urls.slice(0, sample) : urls
    console.log('URLs to check:', toCheck.length, 'of', urls.length)

    const results = []
    for (let i = 0; i < toCheck.length; i++) {
      const url = toCheck[i]
      process.stderr.write(`\rChecking ${i + 1}/${toCheck.length} ${url.slice(baseUrl.length) || '/'}   `)
      const r = await checkUrl(url)
      results.push(r)
    }
    process.stderr.write('\r' + ' '.repeat(80) + '\r')

    const compressionOk = results.filter((r) => r.compression && r.compression !== 'none')
    const compressionFail = results.filter((r) => r.status === 200 && (!r.compression || r.compression === 'none'))
    const ratioFail = results.filter((r) => r.ratio != null && r.ratio < RATIO_MIN)
    const ratioWarn = results.filter((r) => r.ratio != null && r.ratio >= RATIO_MIN && r.ratio < RATIO_WARN)
    const htmlSizeFail = results.filter((r) => r.htmlBytes >= HTML_SIZE_FAIL_B)
    const htmlSizeWarn = results.filter((r) => r.htmlBytes >= HTML_SIZE_WARN_B && r.htmlBytes < HTML_SIZE_FAIL_B)
    const htmlSizeOk = results.filter((r) => r.htmlBytes > 0 && r.htmlBytes < HTML_SIZE_WARN_B)
    const errors = results.filter((r) => r.error)

    console.log('\n--- Compression (Uncompressed Page) ---')
    console.log('Pass (gzip/br):', compressionOk.length)
    if (compressionFail.length > 0) {
      console.log('FAIL (no encoding):', compressionFail.length)
      compressionFail.slice(0, 10).forEach((r) => console.log('  ', r.url))
      if (compressionFail.length > 10) console.log('  ... and', compressionFail.length - 10, 'more')
    }
    if (errors.length > 0) {
      console.log('Errors:', errors.length)
      errors.slice(0, 5).forEach((r) => console.log('  ', r.url, r.error))
    }

    console.log('\n--- Text-to-HTML Ratio (Low Ratio) ---')
    const ratioOk = results.filter((r) => r.ratio != null && r.ratio >= RATIO_WARN)
    console.log('Pass (ratio >=', RATIO_WARN * 100 + '%):', ratioOk.length)
    if (ratioWarn.length > 0) {
      console.log('Warn (ratio 5–8%):', ratioWarn.length)
      ratioWarn.slice(0, 5).forEach((r) => console.log('  ', (r.ratio * 100).toFixed(1) + '%', r.url.slice(baseUrl.length)))
    }
    if (ratioFail.length > 0) {
      console.log('FAIL (ratio < 4%):', ratioFail.length)
      ratioFail.slice(0, 10).forEach((r) => console.log('  ', (r.ratio * 100).toFixed(1) + '%', r.url.slice(baseUrl.length)))
    }

    console.log('\n--- HTML Document Size (PageSpeed) ---')
    console.log('Target: < 100 KB (good), 100–200 KB (needs improvement), > 200 KB (fail)')
    console.log('Pass (< 100 KB):', htmlSizeOk.length)
    if (htmlSizeWarn.length > 0) {
      console.log('Warn (100–200 KB):', htmlSizeWarn.length)
      htmlSizeWarn.slice(0, 15).forEach((r) => console.log('  ', (r.htmlBytes / 1024).toFixed(1) + ' KB', r.url.slice(baseUrl.length) || '/'))
      if (htmlSizeWarn.length > 15) console.log('  ... and', htmlSizeWarn.length - 15, 'more')
    }
    if (htmlSizeFail.length > 0) {
      console.log('FAIL (>= 200 KB):', htmlSizeFail.length)
      htmlSizeFail.forEach((r) => console.log('  ', (r.htmlBytes / 1024).toFixed(1) + ' KB', r.url.slice(baseUrl.length) || '/'))
    }

    console.log('\n--- Minification (Unminified JS/CSS) ---')
    const minCheck = await checkMinification()
    console.log(minCheck.message)
    const isLocal = baseUrl.includes('localhost')
    if (!minCheck.ok && isLocal) console.log('Run "npm run build" then re-run this script to validate production chunks.')
    if (!minCheck.ok && !isLocal) console.log('Minification is validated at build time; production hosts serve minified assets from next build.')

    const failCount = compressionFail.length + ratioFail.length + htmlSizeFail.length + (minCheck.ok || !isLocal ? 0 : 1)
    console.log('\n--- Summary ---')
    if (failCount === 0) {
      console.log('All checks passed for this run.')
      if (htmlSizeWarn.length > 0) console.log('Note:', htmlSizeWarn.length, 'page(s) are 100–200 KB (consider reducing HTML size).')
    } else {
      console.log('Failures:', failCount, '(fix compression, ratio, or HTML size)')
    }
    process.exit(failCount > 0 ? 1 : 0)
  })()
}

main()
