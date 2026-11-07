#!/usr/bin/env node
/** Validate 50–60 character titles and route-specific description ranges. */
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
  const descMin = hub ? HUB_DESC_MIN : DESC_MIN
  const descMax = hub ? HUB_DESC_MAX : DESC_MAX
  const issues = []
  for (const [label, value, length, min, max] of [
    ['TITLE', title, titleLength, TITLE_MIN, TITLE_MAX],
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
  ranges: { title: [TITLE_MIN, TITLE_MAX], description: [DESC_MIN, DESC_MAX], hubDescription: [HUB_DESC_MIN, HUB_DESC_MAX] },
  checked: pages.length,
  violations,
  pages,
}
if (reportPath) writeFileSync(reportPath, `${JSON.stringify(report, null, 2)}\n`)
console.log(`\nChecked ${pages.length} pages. Violations: ${violations}`)
if (violations > 0) process.exitCode = 1
else console.log('All titles 50–60 chars and descriptions match route-specific ranges. ✓')
