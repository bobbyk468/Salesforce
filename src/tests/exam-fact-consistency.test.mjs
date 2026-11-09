/**
 * Guards against exam facts drifting out of the data layer.
 *
 * Every bug this project hit in November 2026 had the same shape: a passing
 * score, question count or section weighting written into JSX as a string
 * literal instead of read from cert-seo-data.ts, which then went stale or was
 * never right. Hunting those with one-off greps fixes today's snapshot; the
 * next time Salesforce refreshes a blueprint they rot back.
 *
 * These tests fail the build when a file that is unambiguously about one
 * credential states a passing score that disagrees with the data layer, and
 * when a tilde estimate is used as a pass mark anywhere.
 */
import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync, readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = fileURLToPath(new URL('../../', import.meta.url))
const read = (p) => readFileSync(join(ROOT, p), 'utf8')

function walk(dir, out = []) {
  for (const name of readdirSync(join(ROOT, dir))) {
    const rel = `${dir}/${name}`
    if (statSync(join(ROOT, rel)).isDirectory()) walk(rel, out)
    else if (/\.(ts|tsx|json)$/.test(name)) out.push(rel)
  }
  return out
}

/** slug -> published passing score, straight from the data layer. */
function passingScores() {
  const src = read('src/lib/cert-seo-data.ts')
  const out = {}
  const re =
    /'?([a-z0-9-]+)'?: \{ questions: [^,]+, passingScore: '([^']+)', duration: '[^']+' \}/g
  let m
  while ((m = re.exec(src))) out[m[1]] = m[2]
  return out
}

const SCORES = passingScores()

test('the data layer still publishes passing scores', () => {
  assert.ok(Object.keys(SCORES).length > 50, 'expected the logistics map to parse')
})

test('no file states a passing score that disagrees with the data layer', () => {
  // Only files named after exactly one credential: merged study guide and exam
  // tips components, and the per-credential spike data. Multi-credential pages
  // are out of scope because a figure there may legitimately belong to either.
  const files = [
    ...walk('src/components/certifications/merged'),
    ...walk('src/lib/cert-page-spike'),
  ]
  const slugs = Object.keys(SCORES).sort((a, b) => b.length - a.length)
  const problems = []

  for (const file of files) {
    const base = file.split('/').pop().replace(/\.(tsx|ts|json)$/, '')
    const stem = base.replace(/-study-guide$|-exam-tips$|-data$/, '')
    const slug = slugs.find((s) => s === stem)
    if (!slug) continue
    const expected = SCORES[slug]
    if (!/^\d{2,3}%$/.test(expected)) continue

    const src = read(file)
    const found = new Set()
    for (const re of [
      /(\d{2,3})%\s*(?:passing|to pass|pass mark)/gi,
      /passing score[^.\n]{0,24}?(\d{2,3})%/gi,
    ]) {
      let m
      while ((m = re.exec(src))) found.add(`${m[1]}%`)
    }
    for (const value of found) {
      if (value !== expected) {
        problems.push(`${file}: states ${value}, data layer says ${expected} for ${slug}`)
      }
    }
  }

  assert.deepEqual(problems, [], `passing scores disagree with cert-seo-data.ts:\n${problems.join('\n')}`)
})

test('no tilde estimate is used as a pass mark', () => {
  // "~65%" was written into 91 places as filler for any exam nobody had looked
  // up, and was wrong wherever a real figure existed. A pass mark is either
  // known or not published; it is never approximate.
  const offenders = []
  for (const file of [...walk('src/app'), ...walk('src/components'), ...walk('src/lib')]) {
    const src = read(file)
    for (const m of src.matchAll(/.{0,40}~\d{2}%.{0,40}/g)) {
      if (/pass|score|mark/i.test(m[0]) && !/retake|discount|voucher/i.test(m[0])) {
        offenders.push(`${file}: ${m[0].replace(/\s+/g, ' ').trim()}`)
      }
    }
  }
  assert.deepEqual(offenders, [], `tilde estimates used as pass marks:\n${offenders.join('\n')}`)
})

test('HTML entities are not written inside string literals', () => {
  // JSX text nodes decode &amp; correctly; a string literal does not, so the
  // reader sees a literal "&amp;" on the page.
  const offenders = []
  const field =
    /(?:answer|text|body|note|focus|label|title|description|tasks|question|anchorText|intro|summary|studyStrategy|passRateGuidance)\s*:\s*(['"`])((?:[^'"`\\]|\\.)*?)\1/g
  for (const file of [...walk('src/app'), ...walk('src/components'), ...walk('src/lib')]) {
    const src = read(file)
    for (const m of src.matchAll(field)) {
      if (/&(amp|quot|lt|gt|#39|apos);/.test(m[2])) {
        offenders.push(`${file}: ${m[2].slice(0, 70)}`)
      }
    }
  }
  assert.deepEqual(offenders, [], `HTML entities inside string literals:\n${offenders.join('\n')}`)
})

test('retired credentials are not recommended as a starting point', () => {
  // AI Associate retired in February 2026. It may be referenced as history; it
  // may not be pitched as somewhere to start.
  const offenders = []
  for (const file of walk('src/app')) {
    const src = read(file)
    for (const m of src.matchAll(/.{0,70}AI Associate.{0,70}/g)) {
      const t = m[0].replace(/\s+/g, ' ')
      if (/retired|historical|archiv|no longer/i.test(t)) continue
      if (
        /easiest|start(?:ing)?\b|first cert|begin with|ideal first|entry point|lowest-(?:cost|risk)|recommended first|take first/i.test(
          t,
        )
      ) {
        offenders.push(`${file}: ${t.trim()}`)
      }
    }
  }
  assert.deepEqual(offenders, [], `retired credential pitched as a starting point:\n${offenders.join('\n')}`)
})
