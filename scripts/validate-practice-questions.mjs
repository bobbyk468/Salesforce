#!/usr/bin/env node
/**
 * Practice-question quality validator.
 *
 * Guards the four defects that made the question banks unusable before they
 * were rewritten. Each one let a candidate score well without reading the
 * question, which is worse than a question being merely badly worded:
 *
 *   1. Strawman options  - terse dismissals ("Slack only", "Email only") that
 *                          nobody would pick, turning a four-way question into
 *                          a two-way guess.
 *   2. Answer-key skew   - correct answers bunched on one letter. At its worst
 *                          15 of 15 questions on a page answered "B".
 *   3. Length bias       - the correct option being the longest and most
 *                          qualified, so it is identifiable without reading the
 *                          question at all.
 *   4. Missing reasoning - no explanation, or no per-option whyWrong, so a
 *                          wrong answer teaches nothing.
 *
 * Only pages whose questions actually render are checked. Where an imported
 * bank overrides a page, the page's own sampleQuestions never reach a visitor.
 *
 * Usage:
 *   node scripts/validate-practice-questions.mjs [slug ...]
 *
 * Exit code 1 on any failure, so it is safe to run in CI.
 */

import { readFileSync, readdirSync, existsSync } from 'fs'
import { join } from 'path'

const ROOT = process.cwd()
const DATA_DIR = join(ROOT, 'src/lib/cert-page-spike/promoted-associate')
const BANKS = join(ROOT, 'src/lib/question-banks/imported/banks.json')

/** A terse dismissal, not any clause that happens to end in "only". */
const STRAW_MAX_LENGTH = 25
const STRAW_EXACT = new Set(['all of the above', 'none of the above'])
/** Correct option longer than this multiple of its nearest rival is a tell. */
const LENGTH_RATIO_MAX = 1.25
/** Share of questions whose correct option may be the longest. ~25% is chance. */
const LONGEST_SHARE_MAX = 40
const EXPLANATION_MIN = 40

function readJson(path, fallback) {
  if (!existsSync(path)) return fallback
  try {
    return JSON.parse(readFileSync(path, 'utf8'))
  } catch {
    return fallback
  }
}

function isStrawman(option) {
  const text = option.trim().toLowerCase()
  if (STRAW_EXACT.has(text)) return true
  return text.endsWith(' only') && text.length < STRAW_MAX_LENGTH
}

function auditPage(slug) {
  const data = readJson(join(DATA_DIR, `${slug}.json`), null)
  const questions = data?.sampleQuestions
  if (!Array.isArray(questions) || questions.length === 0) return null

  const problems = []
  const letterCounts = new Map()
  let longest = 0

  questions.forEach((question, index) => {
    const options = question.options ?? []
    const answer = question.correctAnswer
    const label = `q${index + 1}`

    if (!Array.isArray(options) || options.length < 2) {
      problems.push(`${label}: fewer than two options`)
      return
    }
    if (!Number.isInteger(answer) || answer < 0 || answer >= options.length) {
      problems.push(`${label}: correctAnswer ${answer} is out of range`)
      return
    }

    letterCounts.set(answer, (letterCounts.get(answer) ?? 0) + 1)

    for (const option of options) {
      if (isStrawman(option)) problems.push(`${label}: strawman option "${option}"`)
    }

    const correct = options[answer]
    const rivals = options.filter((_, i) => i !== answer)
    const longestRival = Math.max(...rivals.map((o) => o.length))
    if (correct.length === Math.max(...options.map((o) => o.length))) longest += 1
    if (correct.length / longestRival > LENGTH_RATIO_MAX) {
      problems.push(
        `${label}: correct option is ${Math.round((correct.length / longestRival - 1) * 100)}% longer than its nearest rival`,
      )
    }

    if ((question.explanation ?? '').length < EXPLANATION_MIN) {
      problems.push(`${label}: explanation missing or too short`)
    }
    const whyWrong = question.whyWrong
    if (!Array.isArray(whyWrong) || whyWrong.length !== options.length - 1) {
      problems.push(`${label}: whyWrong should have ${options.length - 1} entries`)
    }
  })

  // Answer letters must be spread, not bunched on one option.
  const counts = [0, 1, 2, 3].map((i) => letterCounts.get(i) ?? 0)
  if (Math.max(...counts) - Math.min(...counts) > 1) {
    problems.push(`answer spread is uneven: ${counts.join('/')}`)
  }
  const longestShare = Math.round((longest / questions.length) * 100)
  if (longestShare > LONGEST_SHARE_MAX) {
    problems.push(`the correct option is the longest in ${longestShare}% of questions`)
  }

  return { slug, count: questions.length, problems }
}

const banks = readJson(BANKS, {})
const requested = process.argv.slice(2)
const slugs = requested.length
  ? requested
  : readdirSync(DATA_DIR)
      .filter((file) => file.endsWith('.json') && file !== 'promoted-index.json')
      .map((file) => file.slice(0, -'.json'.length))
      // An imported bank overrides the page, so its own questions never render.
      .filter((slug) => !(banks[slug]?.length > 0))

let failed = 0
let checked = 0
let questionCount = 0

for (const slug of slugs.sort()) {
  const result = auditPage(slug)
  if (!result) continue
  checked += 1
  questionCount += result.count
  if (result.problems.length > 0) {
    failed += 1
    console.error(`\n${result.slug}`)
    for (const problem of result.problems) console.error(`  - ${problem}`)
  }
}

console.log(
  `\nChecked ${questionCount} questions across ${checked} rendering pages. Pages with problems: ${failed}`,
)
if (failed > 0) process.exit(1)
console.log('No strawman options, even answer spread, no length bias, reasoning on every option. ✓')
