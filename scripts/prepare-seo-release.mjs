#!/usr/bin/env node
import fs from 'node:fs'
import path from 'node:path'
import crypto from 'node:crypto'
import { fileURLToPath } from 'node:url'

const repo = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const outputArg = process.argv[2]?.startsWith('--output=') ? process.argv[2].slice(9) : ''
if (process.argv.length !== 3 || !path.isAbsolute(outputArg)) throw new Error('Usage: node scripts/prepare-seo-release.mjs --output=/absolute/new/staging/path')
const output = path.resolve(outputArg)
if (output === repo || output.startsWith(repo + path.sep)) throw new Error('Output must be outside the active repository')
if (fs.existsSync(output)) throw new Error('Output must be a new path; refusing to overwrite existing content')
const sha = (s) => crypto.createHash('sha256').update(s).digest('hex')
const changes = []
const excluded = []
fs.mkdirSync(output, { recursive: true })

function copy(rel) {
  const from = path.join(repo, rel)
  if (!fs.existsSync(from)) throw new Error('Missing required input: ' + rel)
  const to = path.join(output, rel)
  fs.mkdirSync(path.dirname(to), { recursive: true })
  fs.cpSync(from, to, { recursive: true, filter: (item) => {
    const r = path.relative(repo, item).split(path.sep).join('/')
    const skip = r === 'src/lib/question-banks/imported' || r.startsWith('src/lib/question-banks/imported/') ||
      r === 'src/tests' || r.startsWith('src/tests/') ||
      /(^|\/)(?:\.env(?:\..*)?|\.gsc|indexing_token[^/]*)$/i.test(r)
    if (skip) excluded.push(r)
    return !skip
  } })
}
for (const rel of ['src', 'public', 'bot-data/knowledge-base.json', 'package.json', 'package-lock.json',
  'next.config.js', 'open-next.config.ts', 'postcss.config.js', 'tailwind.config.js', 'tsconfig.json',
  'wrangler.jsonc', 'worker.mjs', 'README.md']) copy(rel)
for (const rel of [
  'scripts/audit-search-readiness.mjs', 'scripts/audit-search-readiness.test.mjs',
  'scripts/validate-seo-lengths.mjs', 'scripts/validate-seo-lengths.test.mjs',
  'scripts/worker-security.test.mjs', 'scripts/audit-transport.mjs',
  'scripts/audit-transport.test.mjs', 'scripts/train-bot-http.mjs',
  'scripts/train-bot-http.test.mjs', 'scripts/analyze-gsc-baseline.py',
  'scripts/test_analyze_gsc_baseline.py', 'scripts/gsc-index-status.py',
  'scripts/test_gsc_index_status.py', 'scripts/gsc_oauth_env.py',
  'scripts/prepare-seo-release.mjs',
  'scripts/cert-sync.test.mjs', 'scripts/request-canonical.test.mjs',
  'scripts/chat-route.test.mjs', 'scripts/credential-facts.test.mjs',
  'scripts/editorial-callout.test.mjs', 'scripts/marketing-facts.test.mjs',
  'scripts/agentforce-mulesoft-facts.test.mjs',
]) {
  const from = path.join(repo, rel)
  if (!fs.existsSync(from)) continue
  const to = path.join(output, rel)
  fs.mkdirSync(path.dirname(to), { recursive: true })
  fs.copyFileSync(from, to)
}
for (const rel of [
  'src/tests/seo-templates.test.mjs', 'src/tests/cert-sync.test.mjs',
  'src/tests/request-canonical.test.mjs', 'src/tests/chat-route.test.mjs',
  'src/tests/credential-facts.test.mjs', 'src/tests/editorial-callout.test.mjs',
  'src/tests/marketing-facts.test.mjs', 'src/tests/agentforce-mulesoft-facts.test.mjs',
]) {
  const from = path.join(repo, rel)
  if (!fs.existsSync(from)) continue
  const to = path.join(output, rel)
  fs.mkdirSync(path.dirname(to), { recursive: true })
  fs.copyFileSync(from, to)
}
if (fs.existsSync(path.join(repo, 'next-env.d.ts'))) copy('next-env.d.ts')

const allowed = new Set(['NEXT_PUBLIC_SITE_URL', 'NEXT_PUBLIC_GA_MEASUREMENT_ID'])
const publicValues = new Map()
for (const name of ['.env', '.env.local', '.env.production', '.env.production.local']) {
  const file = path.join(repo, name)
  if (!fs.existsSync(file)) continue
  for (const line of fs.readFileSync(file, 'utf8').split(/\r?\n/)) {
    const m = line.match(/^\s*(?:export\s+)?([A-Z0-9_]+)\s*=\s*(.*)\s*$/)
    if (!m || !allowed.has(m[1])) continue
    let value = m[2].trim()
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) value = value.slice(1, -1)
    publicValues.set(m[1], value)
  }
}
if (publicValues.size) fs.writeFileSync(path.join(output, '.env.production.local'),
  [...publicValues].map(([k,v]) => k + '=' + JSON.stringify(v)).join('\n') + '\n', { mode: 0o600 })

function overlay(rel, transform, reason) {
  const file = path.join(output, rel)
  const before = fs.readFileSync(file, 'utf8')
  const after = transform(before)
  if (before === after) throw new Error('Overlay made no change: ' + rel)
  fs.writeFileSync(file, after)
  changes.push({ path: rel, reason, beforeSha256: sha(before), afterSha256: sha(after) })
}
overlay('src/lib/git-practice-questions.ts', () =>
  "import type { SampleQuestion } from '@/components/PracticeQuestionsSection'\n\n" +
  '/** Release overlay: use only the curated fallback supplied by each page. */\n' +
  'export function getPracticeQuestionsForExam(_slug: string, fallback: SampleQuestion[]): SampleQuestion[] { return fallback }\n' +
  '/** Imported banks are excluded from this release stage. */\n' +
  'export function hasImportedPracticeQuestions(_slug: string): boolean { return false }\n',
  'Use curated fallbacks without statically importing private banks.')
overlay('src/lib/cert-seo-data.ts', (text) => {
  let next = text.replace("import importedQuestionCounts from './question-banks/imported/counts.json'\n", '')
  next = next.replace(/const gitQuestionCounts: Record<string, number> = importedQuestionCounts\nconst importedAnswerNotice = '[^\n]*'\n/, '')
  const answerStart = next.indexOf('    answer: gitQuestionCounts[slug]')
  if (answerStart >= 0) {
    const answerEnd = next.indexOf('\n  }', answerStart)
    if (answerEnd < 0) throw new Error('Cannot bound imported FAQ answer')
    const tick = String.fromCharCode(96)
    next = next.slice(0, answerStart) + '    answer: ' + tick +
      'Yes. This page includes free sample practice questions with explanations. Use them alongside the current official documentation.' +
      tick + ',' + next.slice(answerEnd)
  }
  next = next.replace("    gitQuestionCounts[slug] ? baseFree : { ...baseFree, ...baseOverrides?.freeQuestions },",
    "    { ...baseFree, ...baseOverrides?.freeQuestions },")
  const mapStart = next.indexOf('    ...certSpecificFaqs.map((faq) => gitQuestionCounts[slug]')
  if (mapStart >= 0) {
    const mapEnd = next.indexOf(',\n    baseFaqs[2],', mapStart)
    if (mapEnd < 0) throw new Error('Cannot bound imported FAQ map')
    next = next.slice(0, mapStart) + '    ...certSpecificFaqs,\n    baseFaqs[1]' + next.slice(mapEnd)
  }
  const hStart = next.indexOf('export function getCertPracticeQuestionsHeading(')
  if (hStart >= 0) {
    const hEnd = next.indexOf('\n}\n', hStart) + 3
    if (hEnd < 3) throw new Error('Cannot bound practice heading')
    next = next.slice(0, hStart) +
      'export function getCertPracticeQuestionsHeading(slug: string): string {\n' +
      '  const primaryName = getCertPrimaryName(slug, slugToDisplayName(slug))\n' +
      '  return primaryName + " Practice Questions (With Explanations)"\n}\n' + next.slice(hEnd)
  }
  if (/importedQuestionCounts|gitQuestionCounts|importedAnswerNotice|SF-Questions repository/.test(next)) throw new Error('Imported metadata remains')
  return next
}, 'Remove imported counts and source-dependent FAQ/metadata wording.')
overlay('src/app/page.tsx', (text) => {
  let next = text.replace("import { getPracticeQuestionsForExam } from '@/lib/git-practice-questions'\n",
    "import { administratorSampleQuestions } from '@/lib/cert-page-spike/administrator-data'\n")
  next = next.replace('Some question sets are imported from the SF-Questions repository with source-provided answers that have not been independently verified. These resources do not guarantee a passing score. Check current official documentation and the source notice on each exam page.',
    'Practice questions are study aids, not a prediction of exam results. Verify current objectives and exam details with the official issuer documentation.')
  const start = next.indexOf('  const homepageQuestionExams = [')
  const end = next.indexOf('\n\n  return (\n    <div>', start)
  if (start < 0 || end < 0) throw new Error('Homepage sample block markers changed')
  const curated = [
    '  const homepageSample = administratorSampleQuestions.find((question) => {',
    '    const answer = question.correctAnswers?.length === 1 ? question.correctAnswers[0] : question.correctAnswer',
    '    return Number.isInteger(answer) && answer! >= 0 && answer! < question.options.length',
    '  })',
    '  const homepageQuestions = homepageSample ? [{',
    "    examLabel: 'Platform Administrator', question: homepageSample.question, options: homepageSample.options,",
    '    correctAnswer: homepageSample.correctAnswers?.length === 1 ? homepageSample.correctAnswers[0] : homepageSample.correctAnswer!,',
    '  }] : []',
  ].join('\n')
  return next.slice(0, start) + curated + next.slice(end)
}, 'Use a curated Administrator sample on the homepage.')
overlay('src/components/HeroSampleQuestionCard.tsx', (text) =>
  text.replace('Source-provided sample', 'Practice sample')
    .replace('Answer shown as provided with the source question; not independently verified.',
      'Use current official documentation to verify concepts; practice performance does not predict an exam result.'),
  'Use neutral copy in the curated homepage sample.')
overlay('src/components/PracticeQuestionsSection.tsx', (text) =>
  text.replace('Imported from the SF-Questions repository. Answer keys are source-provided and have not\n          been independently verified. Use current official documentation to check your understanding;\n          this sample does not predict an exam result.',
    'Practice answer keys are study aids; verify concepts against current official documentation. Practice performance does not predict an exam result.'),
  'Use neutral validation wording for optional sourced questions.')
overlay('src/components/QuestionCard.tsx', (text) =>
  text.replace('<p className="font-semibold">Source-provided answer; not independently verified.</p>\n' +
    '                <p className="whitespace-pre-wrap [overflow-wrap:anywhere]">{source.repository}@{source.commit} — {source.path} (question {source.questionId})</p>\n' +
    '                {source.answerEvidence && <p className="mt-1 whitespace-pre-wrap [overflow-wrap:anywhere]">Source-provided answer evidence: {source.answerEvidence}</p>}',
    '<p className="font-semibold">Practice answer key; verify concepts against current official documentation.</p>'),
  'Remove upstream identifiers and neutralize answer-key wording.')

let corpusHits = 0
const sourceBankPath = path.join(repo, 'src/lib/question-banks/imported/banks.json')
const corpus = fs.readFileSync(path.join(output, 'bot-data/knowledge-base.json'), 'utf8')
if (fs.existsSync(sourceBankPath)) {
  const banks = JSON.parse(fs.readFileSync(sourceBankPath, 'utf8'))
  for (const [slug, questions] of Object.entries(banks))
    for (const q of questions) if (q.question && corpus.includes(q.question)) corpusHits++
}
if (corpusHits) throw new Error('Chatbot corpus contains exact imported prompts; refresh/review before release.')

const helper = fs.readFileSync(path.join(output, 'src/lib/git-practice-questions.ts'), 'utf8')
if (fs.existsSync(path.join(output, 'src/lib/question-banks/imported')) || /question-banks\/imported|banks\.json/.test(helper))
  throw new Error('Imported bank exclusion check failed')
const files = []
function walk(dir, prefix = '') {
  for (const e of fs.readdirSync(dir, { withFileTypes: true }).sort((a,b) => a.name.localeCompare(b.name))) {
    if (e.name === 'node_modules' || e.isSymbolicLink()) continue
    const rel = path.posix.join(prefix, e.name), full = path.join(dir, e.name)
    if (e.isDirectory()) walk(full, rel)
    else if (e.isFile()) files.push({ path: rel, sha256: sha(fs.readFileSync(full)) })
  }
}
walk(output)
const report = { format: 'trailblaze-seo-release-preparation-v1', sourceCheckout: repo,
  publicBuildSettingNames: [...publicValues.keys()].sort(), nodeModules: 'Run PUPPETEER_SKIP_DOWNLOAD=true npm ci in the stage; shared dependency symlinks break Cloudflare bundling.',
  excluded: [...new Set(excluded)].sort(), overlays: changes,
  safeguards: { importedDirectoryExcluded: true, helperHasNoStaticImport: true,
    chatbotExactImportedPromptHits: corpusHits, envValuesPrinted: false }, files }
fs.writeFileSync(path.join(output, 'release-preparation-report.json'), JSON.stringify(report, null, 2) + '\n')
console.log('Prepared isolated release stage at ' + output)
console.log('Install isolated dependencies with PUPPETEER_SKIP_DOWNLOAD=true npm ci before building this stage.')
console.log('Overlay changes: ' + changes.length + '; copied files: ' + files.length + '; chatbot exact imported prompt hits: ' + corpusHits)
console.log('Public build setting names preserved: ' + ([...publicValues.keys()].sort().join(', ') || '(none found)'))
