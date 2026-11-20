#!/usr/bin/env node
/**
 * Dry-run audit of proposed cert-page tags (title / H1 / subtitle strip / meta
 * description / practice + dumps H2s) for the GSC H1 test. Reads the registry,
 * changes nothing on the site.
 *
 *   node scripts/gsc-cert-tag-audit.mjs
 *   -> reports/gsc-95-certs-audit.csv, reports/gsc-95-certs-audit.md
 *
 * Proposed rules come from the Gemini GSC review (2026-11-20), with three house
 * rules applied on top: no em dashes, no filler padding (a short description is
 * flagged, not padded), and no invented exam codes (31 credentials have none).
 */

import { mkdirSync, writeFileSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { createJiti } from 'jiti'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const jiti = createJiti(import.meta.url, { alias: { '@': join(ROOT, 'src') } })

const { SPIKED_CERT_SLUGS } = await jiti.import('@/lib/cert-page-spike/registry')
const { getCertKeywordCluster } = await jiti.import('@/lib/cert-keyword-clusters')
const { getCertMetadata, getCertH1Text, getCertMetaDescription, getPublishedExamFacts, getCertPracticeQuestionsHeading, SLUG_TO_EXAM_COST } = await jiti.import('@/lib/cert-seo-data')
const { getCredentialStatus, getCredentialCardNote } = await jiti.import('@/lib/credential-status')

const len = (s) => [...s].length
const join_ = (parts, sep) => parts.filter(Boolean).join(sep)

function currentTitle(slug) {
  const t = getCertMetadata(slug).title
  return typeof t === 'string' ? t : t?.absolute ?? t?.default ?? ''
}

function buildRow(slug) {
  const c = getCertKeywordCluster(slug)
  const officialName = c.fullTitle
  const partialName = c.shortTitle
  const [primaryCode, ...legacyCodes] = c.codes
  const facts = getPublishedExamFacts(slug)
  const status = getCredentialStatus(slug)

  const title = currentTitle(slug)
  const h1 = `${officialName} Practice Questions`

  // Keep the shortest form of each old name: drop variants that contain another listed name.
  const olds = c.legacyNames.filter((n) => n !== partialName && n !== officialName)
  const formerly = olds
    .filter((n) => !/^[A-Za-z]+(-[A-Za-z]+)*-\d+$/.test(n)) // codes are not names (and AP-222 must never render)
    .filter((n, _, list) => !list.some((m) => m !== n && n.includes(m)))
  const questions = facts && /^\d/.test(String(facts.questions)) ? `${facts.questions} Questions` : null
  const pass = facts && /^\d/.test(String(facts.passingScore)) ? `${facts.passingScore} to Pass` : null
  // Fee alone is still published for credentials with no exam format (e.g. composite architects), unless the exam is unavailable.
  const rawFee = facts?.fee ?? (status ? undefined : SLUG_TO_EXAM_COST[slug])
  const fee = /^\$/.test(rawFee ?? '') ? rawFee : null
  const statusNote = getCredentialCardNote(slug)?.replace(/^Exam closed .*retires (\w+) \d+, (\d{4})$/, 'Retiring $1 $2') ?? null
  const subtitle = join_(
    [
      c.codes.length && `${c.codes.length > 1 ? 'Exam Codes' : 'Exam Code'}: ${c.codes.join(' · ')}`,
      formerly.length && `Formerly: ${formerly.join(', ')}`,
      join_([questions, pass, fee, statusNote], ' · '),
    ],
    ' | ',
  )

  const name = primaryCode ? `${partialName} (${primaryCode})` : partialName
  const factPart = join_(
    [questions && questions.replace('Questions', 'exam questions'), pass && pass.replace('to Pass', 'to pass'), fee && `${fee} fee`],
    ', ',
  )
  const variants = [
    `Free ${name} practice questions, sample test & study guide.${factPart ? ` ${factPart}, with explanations.` : ' With explanations.'}`,
    `Free ${name} practice questions, sample test & guide.${factPart ? ` ${factPart}, with explanations.` : ' With explanations.'}`,
    `Free ${name} practice questions & guide.${factPart ? ` ${factPart}, with explanations.` : ' With explanations.'}`,
  ]
  const description = variants.find((v) => len(v) <= 155) ?? variants.at(-1)

  const h2Practice = `${partialName} Sample Questions & Practice Test`
  const h2Dumps = `Official Exam Code of Conduct: ${partialName} Practice Questions vs. Unofficial Dumps`

  const flags = []
  if (len(title) > 60) flags.push('TITLE>60')
  if (len(h1) > 80) flags.push('H1>80')
  else if (len(h1) > 75) flags.push('H1>75')
  if (len(description) < 125) flags.push('DESC<125')
  if (len(description) > 155) flags.push('DESC>155')
  if (len(subtitle) > 140) flags.push('SUB>140')
  if (!primaryCode) flags.push('NO_CODE')
  if (!factPart) flags.push('NO_FACTS')
  // Retired / closed / transitioned credentials need a status-led description, not a practice pitch.
  if (status) flags.push(`STATUS:${status.kind}`)

  const currentH1 = getCertH1Text(slug)
  const currentDesc = getCertMetaDescription(slug)
  return {
    slug,
    title,
    title_len: len(title),
    h1,
    h1_len: len(h1),
    subtitle_strip: subtitle,
    subtitle_len: len(subtitle),
    meta_description: description,
    desc_len: len(description),
    h2_practice: h2Practice,
    h2_dumps: h2Dumps,
    flags: flags.join(' '),
    current_h1: currentH1,
    current_h1_len: len(currentH1),
    current_desc: currentDesc,
    current_desc_len: len(currentDesc),
    current_h2_practice: getCertPracticeQuestionsHeading(slug),
    status: status?.kind ?? "active",
    title_missing_code: c.codes.length > 0 && !c.codes.some((code) => title.includes(code)),
  }
}

// The two noindex practice-test aliases share their parent cert's tags.
const slugs = SPIKED_CERT_SLUGS.filter((s) => !s.endsWith('-practice-test') && getCertKeywordCluster(s))
const rows = slugs.map(buildRow).sort((a, b) => a.slug.localeCompare(b.slug))

const outDir = join(ROOT, 'reports')
mkdirSync(outDir, { recursive: true })
const cols = Object.keys(rows[0])
const csvCell = (v) => (/[",\n]/.test(String(v)) ? `"${String(v).replace(/"/g, '""')}"` : String(v))
writeFileSync(join(outDir, 'gsc-95-certs-audit.csv'), [cols.join(','), ...rows.map((r) => cols.map((k) => csvCell(r[k])).join(','))].join('\n') + '\n')

const flagged = rows.filter((r) => r.flags)
const counts = {}
rows.forEach((r) => r.flags.split(' ').filter(Boolean).forEach((f) => (counts[f] = (counts[f] ?? 0) + 1)))
const mdCell = (v) => String(v).replace(/\|/g, '\\|')
const md = [
  '# GSC cert tag audit (dry run, for review)',
  '',
  `Generated ${new Date().toISOString().slice(0, 10)} by \`scripts/gsc-cert-tag-audit.mjs\` from the certification registry. Nothing on the site was changed.`,
  '',
  '**Rules applied:** your H1 / subtitle / meta description / H2 spec, with three house rules on top:',
  '1. No em dashes, so descriptions end ", with explanations." instead of "—with explanations."',
  '2. No filler padding. "Updated for 2026 exam objectives." is not added; short descriptions are flagged `DESC<125` for hand tuning instead.',
  '3. No invented exam codes. 23 credentials have no published code (`NO_CODE`) and render none; codes are never listed as "Formerly" names.',
  '',
  'Titles are the live titles (unchanged). "Current H1" is what the page shows today.',
  '',
  `- Rows: **${rows.length}**`,
  `- Rows with no flags: **${rows.length - flagged.length}**`,
  `- Flag counts: ${Object.entries(counts).map(([k, v]) => `\`${k}\` ${v}`).join(', ') || 'none'}`,
  '',
  'Flags: `H1>75` soft, `H1>80` hard, `DESC<125` / `DESC>155`, `SUB>140`, `TITLE>60`.',
  '`NO_CODE` = no published exam code. `NO_FACTS` = exam format not published or exam unavailable, so the description has no question count, pass mark or fee.',
  '`STATUS:<kind>` = retired, exam-closed or transitioned credential; its live description is a status notice and probably should stay one.',
  '',
  'Every row also gets `H2 practice` = "{Partial Name} Sample Questions & Practice Test" and `H2 dumps` = "Official Exam Code of Conduct: {Partial Name} Practice Questions vs. Unofficial Dumps" (full text in the CSV).',
  '',
  '## Proposed tags',
  '',
  '| Slug | Current H1 (len) | Proposed H1 (len) | Subtitle strip (len) | Proposed meta description (len) | Flags |',
  '|---|---|---|---|---|---|',
  ...rows.map(
    (r) =>
      `| \`${r.slug}\` | ${mdCell(r.current_h1)} (${r.current_h1_len}) | ${mdCell(r.h1)} (${r.h1_len}) | ${mdCell(r.subtitle_strip)} (${r.subtitle_len}) | ${mdCell(r.meta_description)} (${r.desc_len}) | ${r.flags} |`,
  ),
  '',
  '## Flagged rows',
  '',
  ...(flagged.length ? flagged.map((r) => `- \`${r.slug}\`: ${r.flags}`) : ['None.']),
  '',
].join('\n')
writeFileSync(join(outDir, 'gsc-95-certs-audit.md'), md)

// ---------------------------------------------------------------------------
// Review document: the live state of every cert page after the 2026-11-20
// description/H2 change, grouped for the H1 test, with the prompt for the reviewer.
// ---------------------------------------------------------------------------
const H1_TEST_COHORT = [
  'advanced-administrator', 'platform-foundations', 'developer-2', 'javascript-developer-i', 'omnistudio-developer',
  'experience-cloud', 'data-360-consultant', 'nonprofit-cloud', 'revenue-management-consultant', 'data-architect',
  'integration-architect', 'ux-designer', 'mulesoft-integration-foundations', 'tableau-data-analyst', 'health-cloud-ap',
]
const H1_TEST_CONTROL = ['administrator', 'agentforce-specialist', 'app-builder', 'developer-1', 'sales-cloud', 'service-cloud', 'business-analyst']
const groupOf = (r) =>
  H1_TEST_COHORT.includes(r.slug) ? 'H1 test' : H1_TEST_CONTROL.includes(r.slug) ? 'Control' : r.status !== 'active' ? `Status: ${r.status}` : 'Active, later'
const practiceLed = (r) => r.current_h2_practice === r.h2_practice
const groupOrder = ['H1 test', 'Control', 'Active, later']
const reviewRows = [...rows].sort((a, b) => {
  const ga = groupOrder.indexOf(groupOf(a)), gb = groupOrder.indexOf(groupOf(b))
  return (ga === -1 ? 9 : ga) - (gb === -1 ? 9 : gb) || groupOf(a).localeCompare(groupOf(b)) || a.slug.localeCompare(b.slug)
})
const groupCounts = {}
reviewRows.forEach((r) => (groupCounts[groupOf(r)] = (groupCounts[groupOf(r)] ?? 0) + 1))
const descLed = rows.filter((r) => r.current_desc.startsWith('Free ')).length
const over155 = rows.filter((r) => r.current_desc_len > 155 && r.current_desc.startsWith('Free '))
const titleNoCode = rows.filter((r) => r.title_missing_code && r.status === 'active')
const review = [
  '# Cert page tags after the 2026-11-20 change: review request',
  '',
  '## Prompt',
  '',
  'You approved the dry-run table (`gsc-95-certs-audit`) on 2026-11-20. Step 1 of your rollout is now live on www.trailblazeprep.com: the practice-led meta description and the practice H2. The H1 and subtitle-strip change is NOT live yet; it is planned for the 15-page cohort from 2026-12-04.',
  '',
  'What was applied, per your adjustments:',
  `- **Meta description**: ${descLed} active credentials now use "Free {name} ({code}) practice questions, sample test & study guide. {N} exam questions, {pass} to pass, {fee} fee, with explanations." with shorter variants to stay at or under 155 where possible (hard cap 160).`,
  '- **Your trim of the two longest**: `dev-lifecycle-deployment-architect` is now 152. Your suggested edit ("with" to "plus", drop "exam ") left it at 160, because "with" and "plus" are the same length, so "& guide" was dropped instead. `consumer-goods-tpm-ap` is exam-closed, so it now keeps its current status copy instead.',
  '- **All 30 retired, exam-closed, transitioned and unverified credentials** keep their current description and their old H2 ("[Name] Practice Questions (With Explanations)"), as you recommended. That is more than the 5 you first named: your second reply extended it to all status credentials.',
  '- **The 5 credentials with no published question count** (Application Architect, System Architect, Technical Architect and the two CTA stages) keep their current composed description. They do get the new H2.',
  '- **Practice H2** "{Partial Name} Sample Questions & Practice Test" is live on every active credential.',
  `- ${over155.length} new descriptions are 156 to 160 characters (you said to leave 156 to 159): ${over155.map((r) => `\`${r.slug}\` ${r.current_desc_len}`).join(', ')}.`,
  '',
  'Please review and answer:',
  '1. Do the live descriptions and H2s in the table below match what you approved? Flag any row that reads wrong or misleading.',
  '2. Is the group assignment right? `H1 test` = your 15-page cohort, `Control` = protected top pages (I added `administrator` to your 6, since you earlier excluded it from the first test group). Should anything move?',
  '3. For the H1 test on 2026-12-04: confirm the "H1 for test" column, and whether the subtitle strip should ship at the same time as the H1 or separately.',
  `4. ${titleNoCode.length} titles carry no exam code because the official name fills the 60-character budget: ${titleNoCode
    .map((r) => `\`${r.slug}\` ("${r.title}")`)
    .join(', ')}. Keep them name-only, or let these titles exceed 60 to fit the code?`,
  '5. What GSC baseline should I export today (2026-11-20) so the description/H2 change and the later H1 change can be judged separately?',
  '',
  '## Summary',
  '',
  `- Cert pages: **${rows.length}**`,
  ...Object.entries(groupCounts).map(([g, n]) => `- ${g}: ${n}`),
  `- Practice-led description live: ${descLed} · new practice H2 live: ${rows.filter(practiceLed).length}`,
  '',
  '## All certification pages (live state)',
  '',
  '| # | Slug | Group | Title (len) | H1 now (len) | H1 for test (len) | Meta description now (len) | Practice H2 now |',
  '|---|---|---|---|---|---|---|---|',
  ...reviewRows.map(
    (r, i) =>
      `| ${i + 1} | \`${r.slug}\` | ${groupOf(r)} | ${mdCell(r.title)} (${r.title_len}) | ${mdCell(r.current_h1)} (${r.current_h1_len}) | ${
        groupOf(r) === 'H1 test' ? `${mdCell(r.h1)} (${r.h1_len})` : '-'
      } | ${mdCell(r.current_desc)} (${r.current_desc_len}) | ${mdCell(r.current_h2_practice)} |`,
  ),
  '',
].join('\n')
writeFileSync(join(outDir, 'gsc-95-certs-review.md'), review)

console.log(`Rows: ${rows.length}${rows.length === 95 ? '' : ' (EXPECTED 95)'}`)
console.log('Review groups:', groupCounts)
console.log(`No flags: ${rows.length - flagged.length}`)
console.log('Flag counts:', counts)
console.log('Flagged:')
flagged.forEach((r) => console.log(`  ${r.slug}: ${r.flags}`))
