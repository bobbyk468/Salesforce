#!/usr/bin/env node
/**
 * Keeps each credential's certification-card copy honest and search-useful.
 *
 * The card's `description` is the paragraph Google most often lifts as the
 * snippet — it beat the hand-written meta description on
 * /certifications/developer-1, where the page ranked on page 5 with a snippet
 * that read "...using Apex and Visualforce", a framing that predates LWC.
 * A snippet that answers "what is this exam" earns the click; one that does
 * not, does not.
 *
 * So each description keeps its own editorial opening — what the exam actually
 * tests, written per credential — and this script maintains ONE appended
 * sentence of facts after it: question count, time, pass mark and the two
 * heaviest sections. Those come from src/lib/exam-weightage-data.ts, where
 * every entry is sourced from the official exam guide by article ID, so the
 * copy cannot drift from the verified numbers.
 *
 * It also corrects examDetails.passingScore and examDetails.duration from the
 * same source. Those were wrong in a number of files: PD1 claimed 110 minutes
 * against the guide's 105, and the Sales Cloud card claimed a 68% pass mark
 * when the renamed Agentforce Sales Consultant exam needs 73%.
 *
 * Idempotent: re-running replaces the generated sentence rather than stacking
 * another copy. Run with --check to fail instead of writing, for CI.
 *
 *   node scripts/sync-cert-card-facts.mjs [--check]
 */

import { readFileSync, writeFileSync, readdirSync } from 'node:fs'
import { join, relative, basename } from 'node:path'

const ROOT = new URL('..', import.meta.url).pathname
const WEIGHTAGE = join(ROOT, 'src/lib/exam-weightage-data.ts')
const JSON_DIR = join(ROOT, 'src/lib/cert-page-spike/promoted-associate')

const checkOnly = process.argv.includes('--check')

/** Credentials whose exam cannot be booked: the template replaces the card
 *  description entirely, and a "the exam is 60 questions" sentence would be
 *  misleading, so they get the facts in examDetails only. */
const statusSource = readFileSync(join(ROOT, 'src/lib/credential-status.ts'), 'utf8')
const unavailable = new Set(
  [...statusSource.matchAll(/'([a-z0-9-]+)':\s*examClosedAugust2026\(/g)].map((m) => m[1]),
)
for (const m of statusSource.matchAll(/'([a-z0-9-]+)':\s*AI_ASSOCIATE_STATUS/g)) unavailable.add(m[1])
unavailable.add('education-cloud-consultant')
unavailable.add('ai-associate')

// ---------------------------------------------------------------------------
// The one source of truth: verified sections, plus the facts recorded in the
// comment above each entry.
// ---------------------------------------------------------------------------

const weightageSource = readFileSync(WEIGHTAGE, 'utf8')
const entryRe = /((?:^[ \t]*\/\/.*\n)*)^ {2}'([a-z0-9-]+)': \[\n((?: {4}\{[^\n]*\n)+) {2}\],/gm

/** slug -> { sections, questions, passingScore, minutes } */
const verified = new Map()
for (const [, comments, slug, body] of weightageSource.matchAll(entryRe)) {
  if (!/Verified\s+\d{1,2}\s+\w+\s+\d{4}[\s\S]*?articleView\?id=\d+/i.test(comments)) continue
  const sections = [...body.matchAll(/name: '((?:[^'\\]|\\.)*)', percentage: (\d+)/g)].map(
    ([, name, percentage]) => ({
      name: name.replace(/\\'/g, "'").replace(/&amp;/g, '&'),
      percentage: Number(percentage),
    }),
  )
  const pass = comments.match(/(\d{2})% to pass/)
  const minutes = comments.match(/(\d{2,3}) minutes/)
  const questions = comments.match(/(?:~)?(\d{2,3})\s+(?:scored\s+|multiple-choice\s+)?(?:questions|items)/)
  verified.set(slug, {
    sections,
    passingScore: pass ? Number(pass[1]) : null,
    minutes: minutes ? Number(minutes[1]) : null,
    questions: questions ? Number(questions[1]) : null,
  })
}

// ---------------------------------------------------------------------------

/** The generated sentence, or null when there are not enough verified facts. */
function factsSentence(slug) {
  const v = verified.get(slug)
  if (!v || unavailable.has(slug)) return null
  if (v.questions === null || v.minutes === null || v.passingScore === null) return null

  const top = [...v.sections].sort((a, b) => b.percentage - a.percentage).slice(0, 2)
  if (top.length < 2) return null

  const weighting =
    top[0].percentage === top[1].percentage
      ? `${top[0].name} and ${top[1].name} (${top[0].percentage}% each)`
      : `${top[0].name} (${top[0].percentage}%) and ${top[1].name} (${top[1].percentage}%)`

  return (
    `The exam is ${v.questions} scored questions in ${v.minutes} minutes, ` +
    `with a ${v.passingScore}% pass mark, weighted towards ${weighting}.`
  )
}

/** Strip a previously generated sentence so re-runs replace rather than stack. */
const GENERATED_RE = /\s*The exam is \d{1,3} scored questions in \d{2,3} minutes, with a \d{2}% pass mark, weighted towards [^.]*\./g

function rewriteDescription(slug, description) {
  const editorial = description.replace(GENERATED_RE, '').trim()
  const facts = factsSentence(slug)
  return facts ? `${editorial} ${facts}` : editorial
}

const changes = []

function applyToJson(file) {
  const slug = basename(file, '.json')
  const raw = readFileSync(file, 'utf8')
  const data = JSON.parse(raw)
  const card = data.certificationCard
  if (!card) return

  const v = verified.get(slug)
  let touched = false

  if (typeof card.description === 'string') {
    const next = rewriteDescription(slug, card.description)
    if (next !== card.description) {
      card.description = next
      touched = true
    }
  }

  if (v && card.examDetails) {
    if (v.passingScore !== null) {
      const want = `${v.passingScore}%`
      if (card.examDetails.passingScore !== want) {
        changes.push(
          `${relative(ROOT, file)}: passingScore ${card.examDetails.passingScore} -> ${want}`,
        )
        card.examDetails.passingScore = want
        touched = true
      }
    }
    if (v.minutes !== null) {
      const want = `${v.minutes} min`
      if (card.examDetails.duration !== want) {
        changes.push(`${relative(ROOT, file)}: duration ${card.examDetails.duration} -> ${want}`)
        card.examDetails.duration = want
        touched = true
      }
    }
  }

  if (touched) {
    if (!checkOnly) writeFileSync(file, `${JSON.stringify(data, null, 2)}\n`)
    changes.push(`${relative(ROOT, file)}: description/examDetails updated`)
  }
}

for (const name of readdirSync(JSON_DIR)) {
  if (name.endsWith('.json')) applyToJson(join(JSON_DIR, name))
}

// ---------------------------------------------------------------------------
// SLUG_TO_EXAM_LOGISTICS in cert-seo-data.ts feeds the meta description on
// every certification page ("60 questions, 68% to pass, 105 min"), so a wrong
// value there is the line Google shows. 44 entries carried a '~65%' placeholder
// that was never a real passing score.
// ---------------------------------------------------------------------------

const SEO_DATA = join(ROOT, 'src/lib/cert-seo-data.ts')
const seoSource = readFileSync(SEO_DATA, 'utf8')
const start = seoSource.indexOf('const SLUG_TO_EXAM_LOGISTICS')
const end = seoSource.indexOf('\n}\n', start)
if (start === -1 || end === -1) {
  console.error('could not locate SLUG_TO_EXAM_LOGISTICS')
  process.exit(1)
}

let block = seoSource.slice(start, end)
const before = block

block = block.replace(
  /^(\s*)'?([a-z0-9-]+)'?: \{ questions: ([^,]+), passingScore: '([^']*)', duration: '([^']*)' \},$/gm,
  (line, indent, slug, questions, pass, duration) => {
    const v = verified.get(slug)
    if (!v) return line
    const wantPass = v.passingScore !== null ? `${v.passingScore}%` : pass
    const wantDuration = v.minutes !== null ? `${v.minutes} min` : duration
    const wantQuestions = v.questions !== null ? String(v.questions) : questions
    if (wantPass !== pass) changes.push(`cert-seo-data.ts ${slug}: passingScore ${pass} -> ${wantPass}`)
    if (wantDuration !== duration) {
      changes.push(`cert-seo-data.ts ${slug}: duration ${duration} -> ${wantDuration}`)
    }
    if (wantQuestions !== questions.trim()) {
      changes.push(`cert-seo-data.ts ${slug}: questions ${questions.trim()} -> ${wantQuestions}`)
    }
    const key = /^[a-z][a-z0-9]*$/.test(slug) && !slug.includes('-') ? slug : `'${slug}'`
    return `${indent}${key}: { questions: ${wantQuestions}, passingScore: '${wantPass}', duration: '${wantDuration}' },`
  },
)

if (block !== before && !checkOnly) {
  writeFileSync(SEO_DATA, seoSource.slice(0, start) + block + seoSource.slice(end))
}

console.log(
  `cert cards: ${verified.size} verified credentials, ${changes.length} change(s)` +
    (checkOnly ? ' (check only, nothing written)' : ''),
)
for (const c of changes.slice(0, 200)) console.log(`  ${c}`)

if (checkOnly && changes.length > 0) process.exit(1)
