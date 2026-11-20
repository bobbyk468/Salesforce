#!/usr/bin/env node
/** Validate route-specific title and description length ranges (content routes 50–60 / ≤130; certification pages 20–60 / ≤160). */
import { existsSync, readFileSync, readdirSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { parseDocument } from 'htmlparser2'
import { selectOne } from 'css-select'

const BUILD_DIR = join(process.cwd(), '.next/server/app')
const TITLE_MIN = 50
const TITLE_MAX = 60
const DESC_MIN = 100
const DESC_MAX = 130
const HUB_DESC_MIN = 135
const HUB_DESC_MAX = 158
// Certification pages share the 60-character title ceiling (their titles are
// the credential name and exam code, which can run short, so the floor is
// lower) but keep a wider description budget: the description has to
// name the credential, the "<name> questions" and "<code> questions"
// phrasings, and the question count, pass mark and fee. Neither fits the
// 60/130 budget the content routes keep. 80 and 160 are what Google renders.
const CERT_TITLE_MIN = 20
const CERT_TITLE_MAX = 60
const CERT_DESC_MIN = 100
const CERT_DESC_MAX = 160
const reportPath = process.argv.find((arg) => arg.startsWith('--report='))?.slice('--report='.length)

function* walkHtml(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name)
    if (entry.isDirectory()) yield* walkHtml(full)
    else if (entry.name.endsWith('.html')) yield full
  }
}

function textContent(node) {
  if (node?.type === 'text') return node.data
  return (node?.children ?? []).map(textContent).join('')
}

if (!existsSync(BUILD_DIR)) {
  console.error('No production build found. Run npm run build before validating metadata.')
  process.exit(1)
}

const pages = []
let violations = 0
// Framework error boundaries have no standalone searchable metadata.
const SKIP = new Set(['/_global-error.html'])
for (const file of walkHtml(BUILD_DIR)) {
  const relative = file.slice(BUILD_DIR.length).replaceAll('\\', '/')
  if (SKIP.has(relative)) continue
  const route = relative.replace(/(?:\/index)?\.html$/, '') || '/'
  const doc = parseDocument(readFileSync(file, 'utf8'))
  const title = textContent(selectOne('head > title', doc)).trim()
  const description = selectOne('meta[name="description"]', doc)?.attribs.content?.trim() ?? ''
  const titleLength = Array.from(title).length
  const descriptionLength = Array.from(description).length
  const hub = route === '/' || route === '/certifications'
  const cert = /^\/certifications\/(?!role(?:\/|$))[^/]+$/.test(route)
  const descMin = cert ? CERT_DESC_MIN : hub ? HUB_DESC_MIN : DESC_MIN
  const descMax = cert ? CERT_DESC_MAX : hub ? HUB_DESC_MAX : DESC_MAX
  const titleMin = cert ? CERT_TITLE_MIN : TITLE_MIN
  const titleMax = cert ? CERT_TITLE_MAX : TITLE_MAX
  const issues = []
  for (const [label, value, length, min, max] of [
    ['TITLE', title, titleLength, titleMin, titleMax],
    ['DESC', description, descriptionLength, descMin, descMax],
  ]) {
    if (!value) issues.push(`MISSING ${label}`)
    else if (length < min) issues.push(`${label} TOO SHORT (${length} chars)`)
    else if (length > max) issues.push(`${label} TOO LONG (${length} chars)`)
  }
  for (const issue of issues) console.error(`${issue} on ${route}`)
  violations += issues.length
  pages.push({ route, title, titleLength, description, descriptionLength, issues })
}

if (pages.length === 0) {
  console.error('No HTML pages found; metadata validation did not run.')
  process.exit(1)
}
const report = {
  ranges: {
    title: [TITLE_MIN, TITLE_MAX],
    description: [DESC_MIN, DESC_MAX],
    hubDescription: [HUB_DESC_MIN, HUB_DESC_MAX],
    certTitle: [CERT_TITLE_MIN, CERT_TITLE_MAX],
    certDescription: [CERT_DESC_MIN, CERT_DESC_MAX],
  },
  checked: pages.length,
  violations,
  pages,
}
if (reportPath) writeFileSync(reportPath, `${JSON.stringify(report, null, 2)}\n`)
console.log(`\nChecked ${pages.length} pages. Violations: ${violations}`)
if (violations > 0) process.exitCode = 1
else console.log('All titles and descriptions match route-specific ranges. ✓')
