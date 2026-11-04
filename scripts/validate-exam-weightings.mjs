#!/usr/bin/env node
/**
 * Guards the exam-weighting numbers the site prints as fact.
 *
 * Two different things can go wrong, and this script checks both:
 *
 *  1. The table in src/lib/exam-weightage-data.ts can drift from the official
 *     exam guide. The script cannot read help.salesforce.com, so instead it
 *     insists that every entry carries a `Verified <date>: help.salesforce.com
 *     /s/articleView?id=...` comment naming the guide it was taken from. An
 *     entry with no such comment is unverified, and the site should not print
 *     it as fact. An audit in November 2026 found most of the table had been
 *     invented: round numbers that summed to 100 but matched no published
 *     guide, several of them a flat 25/25/25/25.
 *
 *  2. The same percentages are hardcoded a second time in page prose
 *     ("Business Logic and Process Automation (28%)"). Those copies do not
 *     move when the table is corrected, so the site can state two different
 *     weightings for one section. This script finds prose percentages whose
 *     section name matches a table entry and whose number does not.
 *
 * Exit code 1 on any failure, so it can run in `npm test`.
 *
 * Flags:
 *   --allow-unverified   report unverified table entries without failing,
 *                        for use while the backlog is still being worked
 *                        through.
 */

import { readFileSync, readdirSync, statSync } from 'node:fs'
import { join, relative } from 'node:path'

const ROOT = new URL('..', import.meta.url).pathname
const TABLE = join(ROOT, 'src/lib/exam-weightage-data.ts')
const SEARCH_DIRS = ['src/app', 'src/components']

const allowUnverified = process.argv.includes('--allow-unverified')

/** Slugs with no published exam outline, so no weightings to verify. */
const NO_PUBLISHED_OUTLINE = new Set([
  // Earned by holding a set of other certifications rather than by sitting an
  // exam, so Salesforce publishes no outline for them.
  'application-architect',
  'system-architect',
])

const failures = []
const warnings = []

// ---------------------------------------------------------------------------
// 1. Parse the table, with the comment block that precedes each entry.
// ---------------------------------------------------------------------------

const source = readFileSync(TABLE, 'utf8')

/** @type {Map<string, {sections: {name: string, percentage: number}[], verified: boolean}>} */
const table = new Map()

const entryRe = /((?:^[ \t]*\/\/.*\n)*)^ {2}'([a-z0-9-]+)': \[\n((?: {4}\{[^\n]*\n)+) {2}\],/gm
let match
while ((match = entryRe.exec(source)) !== null) {
  const [, comments, slug, body] = match
  const sections = [...body.matchAll(/name: '((?:[^'\\]|\\.)*)', percentage: (\d+)/g)].map(
    ([, name, percentage]) => ({ name: name.replace(/\\'/g, "'"), percentage: Number(percentage) }),
  )
  table.set(slug, {
    sections,
    // "Verified <date>" and an articleView id, in that order but with any
    // wording in between, so the comments can read naturally.
    verified: /Verified\s+\d{1,2}\s+\w+\s+\d{4}[\s\S]*?articleView\?id=\d+/i.test(comments),
  })
}

if (table.size === 0) {
  failures.push(`${relative(ROOT, TABLE)}: parsed no entries — the file's shape changed`)
}

for (const [slug, { sections, verified }] of table) {
  const total = sections.reduce((sum, s) => sum + s.percentage, 0)
  if (total !== 100) {
    failures.push(`${slug}: sections sum to ${total}%, not 100%`)
  }
  if (sections.length < 2) {
    failures.push(`${slug}: only ${sections.length} section(s)`)
  }
  if (NO_PUBLISHED_OUTLINE.has(slug)) {
    failures.push(
      `${slug}: Salesforce publishes no exam outline for this credential, so ` +
        `these weightings cannot be sourced — remove the entry`,
    )
    continue
  }
  // A real outline is lumpy. An all-multiples-of-5 split that nobody has
  // checked against a guide is the signature of an invented one.
  const allRound = sections.every((s) => s.percentage % 5 === 0)
  if (!verified) {
    const note = allRound ? ' (and every percentage is a multiple of 5)' : ''
    const line = `${slug}: no "Verified <date>: help.salesforce.com/..." comment${note}`
    ;(allowUnverified ? warnings : failures).push(line)
  }
}

// ---------------------------------------------------------------------------
// 2. Cross-check percentages hardcoded in page prose against the table.
// ---------------------------------------------------------------------------

// Section names repeat across credentials with different weights — "Data
// Management" is 22% on one exam and 18% on another, and "Automation" is 15%
// for the Administrator but 20% for Administrator II. So a prose percentage is
// only ever compared against the ONE credential whose page it sits on, never
// against every entry in the table. A page we cannot attribute to a credential
// is skipped rather than guessed at.
const PAGE_SLUG_ALIASES = new Map([
  ['adm-201', 'administrator'],
  ['pd1', 'developer-1'],
  ['pd2', 'developer-2'],
  ['sales-cloud-consultant', 'sales-cloud'],
  ['service-cloud-consultant', 'service-cloud'],
  ['experience-cloud-consultant', 'experience-cloud'],
  ['crm-analytics', 'crm-analytics-einstein-discovery-consultant'],
  ['administratorcertbody', 'administrator'],
  ['developer1certbody', 'developer-1'],
  ['appbuildertemplate', 'app-builder'],
])

/** Longest table slug (or alias) that the file name starts with. */
function slugForFile(file) {
  const name = file
    .split('/')
    .pop()
    .replace(/\.(tsx?|json)$/, '')
  const dir = file.split('/').slice(-2, -1)[0] ?? ''
  const candidates = [dir, name.toLowerCase()]

  let best = null
  for (const candidate of candidates) {
    for (const [alias, slug] of PAGE_SLUG_ALIASES) {
      if (candidate === alias || candidate.startsWith(`${alias}-`)) {
        if (!best || alias.length > best.length) best = { length: alias.length, slug }
      }
    }
    for (const slug of table.keys()) {
      if (candidate === slug || candidate.startsWith(`${slug}-`)) {
        if (!best || slug.length > best.length) best = { length: slug.length, slug }
      }
    }
  }
  return best?.slug ?? null
}

function normalise(text) {
  return text
    .replace(/&amp;/g, '&')
    .replace(/&apos;|&#39;|’/g, "'")
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase()
}

function* walk(dir) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry)
    if (statSync(full).isDirectory()) yield* walk(full)
    else if (/\.(tsx?|json)$/.test(entry)) yield full
  }
}

// "Business Logic and Process Automation (28%)" and the "… 28%" variant.
const PROSE_RE = /([A-Z][A-Za-z0-9 ,/&'’:()-]{3,70}?)\s*\((\d{1,2})%\)/g

for (const dir of SEARCH_DIRS) {
  const base = join(ROOT, dir)
  let exists = true
  try {
    statSync(base)
  } catch {
    exists = false
  }
  if (!exists) continue

  for (const file of walk(base)) {
    const slug = slugForFile(file)
    if (!slug) continue
    const entry = table.get(slug)
    // Only a verified entry is an authority to check prose against.
    if (!entry?.verified) continue

    const expected = new Map(entry.sections.map((s) => [normalise(s.name), s.percentage]))
    const lines = readFileSync(file, 'utf8').split('\n')

    lines.forEach((line, index) => {
      for (const [, rawName, rawPct] of line.matchAll(PROSE_RE)) {
        const key = normalise(rawName)
        if (!expected.has(key)) continue
        const pct = Number(rawPct)
        if (expected.get(key) === pct) continue
        failures.push(
          `${relative(ROOT, file)}:${index + 1}: prose says "${rawName.trim()} (${pct}%)" but ` +
            `the ${slug} guide says ${expected.get(key)}%`,
        )
      }
    })
  }
}

// ---------------------------------------------------------------------------

const verifiedCount = [...table.values()].filter((e) => e.verified).length
console.log(
  `exam weightings: ${table.size} entries, ${verifiedCount} verified against an official guide`,
)

for (const warning of warnings) console.log(`  note: ${warning}`)

if (failures.length > 0) {
  console.error(`\n${failures.length} problem(s):`)
  for (const failure of failures) console.error(`  ${failure}`)
  process.exit(1)
}

console.log('no problems found')
