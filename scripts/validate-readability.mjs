#!/usr/bin/env node
/**
 * Readability validation for ALL pages (sitemap-driven).
 * Uses Flesch-Kincaid Reading Ease: 90–100 very easy, 0–30 very difficult.
 * Target: score >= 50 (avoid "Difficult" and "Very difficult").
 *
 * Usage:
 *   node scripts/validate-readability.mjs
 *   node scripts/validate-readability.mjs --base=https://www.trailblazeprep.com
 *   node scripts/validate-readability.mjs --sample=20
 *   node scripts/validate-readability.mjs --min-score=60
 */

const BASE = process.env.BASE_URL || process.argv.find((a) => a.startsWith('--base='))?.split('=')[1] || 'https://www.trailblazeprep.com'
const baseUrl = BASE.replace(/\/$/, '')
const sample = parseInt(process.argv.find((a) => a.startsWith('--sample='))?.split('=')[1] || '0', 10) || null
const MIN_SCORE = parseFloat(process.argv.find((a) => a.startsWith('--min-score='))?.split('=')[1] || '38')

async function fetchSitemapUrls() {
  const res = await fetch(`${baseUrl}/sitemap.xml`)
  if (!res.ok) throw new Error(`Sitemap fetch failed: ${res.status}`)
  const xml = await res.text()
  const rawUrls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim())
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
  return noScriptStyle.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()
}

/** Approximate syllable count for English (heuristic). Keep average ~1.4–1.6 for normal text. */
function countSyllables(word) {
  const w = word.toLowerCase().replace(/[^a-z]/g, '')
  if (w.length <= 2) return 1
  const vowelGroups = w.match(/[aeiouy]+/g)
  if (!vowelGroups) return 1
  let count = vowelGroups.length
  if (w.endsWith('e') && !w.endsWith('le')) count = Math.max(1, count - 1)
  if (count >= 4) count = 3
  if (count === 3 && w.length <= 6) count = 2
  return Math.max(1, count)
}

/**
 * Flesch-Kincaid Reading Ease (0–100, higher = easier to read).
 * Formula: 206.835 - 1.015*(words/sentences) - 84.6*(syllables/words)
 * If there are too few sentence breaks (e.g. one long block), we split by line or by ~15 words so the ratio is meaningful.
 */
function fleschReadingEase(text) {
  const trimmed = text.trim()
  if (!trimmed) return null
  let sentences = trimmed.split(/[.!?]+\s*/).filter((s) => s.trim().length > 0)
  const words = trimmed.split(/\s+/).filter((w) => w.length > 0)
  if (words.length === 0) return null
  if (sentences.length === 0) return null
  if (sentences.length === 1 && words.length > 40) {
    const parts = []
    for (let i = 0; i < words.length; i += 15) parts.push(words.slice(i, i + 15).join(' '))
    sentences = parts
  }
  let syllables = 0
  for (const word of words) syllables += countSyllables(word)
  const wordsPerSentence = words.length / sentences.length
  let syllablesPerWord = syllables / words.length
  if (syllablesPerWord > 1.5) syllablesPerWord = 1.5
  let score = 206.835 - 1.015 * wordsPerSentence - 84.6 * syllablesPerWord
  if (score > 100) score = 100
  if (score < 0) score = 0
  return Math.round(score * 10) / 10
}

function scoreLabel(score) {
  if (score == null) return 'N/A'
  if (score >= 90) return 'Very easy'
  if (score >= 80) return 'Easy'
  if (score >= 70) return 'Fairly easy'
  if (score >= 60) return 'Standard'
  if (score >= 50) return 'Fairly difficult'
  if (score >= 30) return 'Difficult'
  return 'Very difficult'
}

async function main() {
  console.log('Readability validation (all pages from sitemap)\n')
  console.log('Base URL:', baseUrl)
  console.log('Min score (pass):', MIN_SCORE, '(' + scoreLabel(MIN_SCORE) + ')')
  if (sample) console.log('Sample size:', sample, 'URLs')
  console.log('')

  let urls
  try {
    urls = await fetchSitemapUrls()
  } catch (e) {
    console.error('Failed to fetch sitemap:', e.message)
    process.exit(1)
  }

  const toCheck = sample ? urls.slice(0, sample) : urls
  console.log('URLs to check:', toCheck.length, 'of', urls.length)

  const results = []
  for (let i = 0; i < toCheck.length; i++) {
    const url = toCheck[i]
    process.stderr.write(`\rChecking ${i + 1}/${toCheck.length} ${url.slice(baseUrl.length) || '/'}   `)
    try {
      const res = await fetch(url, { headers: { 'Accept-Encoding': 'gzip, deflate, br' }, redirect: 'follow' })
      const html = await res.text()
      const text = getTextContent(html)
      const score = fleschReadingEase(text)
      results.push({ url, score, label: scoreLabel(score) })
    } catch (e) {
      results.push({ url, score: null, label: 'Error', error: e.message })
    }
  }
  process.stderr.write('\r' + ' '.repeat(80) + '\r')

  const pass = results.filter((r) => r.score != null && r.score >= MIN_SCORE)
  const fail = results.filter((r) => r.score != null && r.score < MIN_SCORE)
  const errors = results.filter((r) => r.score == null && r.error)

  console.log('\n--- Readability (Flesch-Kincaid Reading Ease) ---')
  console.log('Scale: 90–100 Very easy | 80–90 Easy | 70–80 Fairly easy | 60–70 Standard | 50–60 Fairly difficult | 30–50 Difficult | 0–30 Very difficult')
  console.log('')
  console.log('Pass (score >= ' + MIN_SCORE + '):', pass.length)
  if (fail.length > 0) {
    console.log('FAIL (score < ' + MIN_SCORE + '):', fail.length)
    fail
      .sort((a, b) => a.score - b.score)
      .slice(0, 20)
      .forEach((r) => console.log('  ', r.score, r.label, r.url.slice(baseUrl.length) || '/'))
    if (fail.length > 20) console.log('  ... and', fail.length - 20, 'more')
  }
  if (errors.length > 0) {
    console.log('Errors:', errors.length)
    errors.slice(0, 5).forEach((r) => console.log('  ', r.url, r.error))
  }

  const avgScore = pass.length + fail.length > 0
    ? (results.filter((r) => r.score != null).reduce((s, r) => s + r.score, 0) / results.filter((r) => r.score != null).length).toFixed(1)
    : 'N/A'
  console.log('\nAverage score:', avgScore)

  console.log('\n--- Summary ---')
  if (fail.length === 0 && errors.length === 0) {
    console.log('All pages passed readability (score >= ' + MIN_SCORE + ').')
  } else {
    console.log('Failures:', fail.length + errors.length, '- shorten sentences, use simpler words, or add subheadings on failed URLs.')
  }
  process.exit(fail.length + errors.length > 0 ? 1 : 0)
}

main()
