/* eslint-disable no-console */
/**
 * Replace legacy inline "Want More Practice Questions?" blocks on certification pages
 * with the shared <FullQuestionBankCta /> component.
 *
 * Safe behavior:
 * - Skips pages that don't contain the legacy block (e.g. administrator, already-updated pages)
 * - Adds the import only when a replacement is made
 */

const fs = require('fs')
const path = require('path')

const repoRoot = path.join(__dirname, '..')
const certDir = path.join(repoRoot, 'src', 'app', 'certifications')

const legacyBlockStart = '<div id="more-questions" className="mt-12 bg-salesforce-blue/10 rounded-xl p-8 text-center">'
const legacyBlockEnd = '</div>\n\n          <div id="related-certs">'

function getAllPageFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  const results = []
  for (const e of entries) {
    if (e.isDirectory()) {
      if (e.name === 'role') continue
      results.push(...getAllPageFiles(path.join(dir, e.name)))
    } else if (e.isFile() && e.name === 'page.tsx') {
      results.push(path.join(dir, e.name))
    }
  }
  return results
}

function ensureImport(contents) {
  const importLine = "import FullQuestionBankCta from '@/components/FullQuestionBankCta'\n"
  if (contents.includes(importLine.trim())) return contents

  // Insert after the last import line.
  const lines = contents.split('\n')
  let lastImportIdx = -1
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].startsWith('import ')) lastImportIdx = i
  }
  if (lastImportIdx === -1) return importLine + contents

  lines.splice(lastImportIdx + 1, 0, importLine.trimEnd())
  return lines.join('\n')
}

function replaceLegacyBlock(contents) {
  const startIdx = contents.indexOf(legacyBlockStart)
  if (startIdx === -1) return { changed: false, contents }

  const endIdx = contents.indexOf(legacyBlockEnd, startIdx)
  if (endIdx === -1) return { changed: false, contents }

  const before = contents.slice(0, startIdx)
  const after = contents.slice(endIdx) // includes legacyBlockEnd

  const replacement =
    "          <FullQuestionBankCta slug={slug} certTitle={slugToDisplayName(slug)} />\n\n"

  return { changed: true, contents: before + replacement + after }
}

function main() {
  const files = getAllPageFiles(certDir)
  let changedCount = 0
  const changedFiles = []

  for (const file of files) {
    // Skip index and known custom page
    if (file.endsWith(path.join('certifications', 'administrator', 'page.tsx'))) continue

    const original = fs.readFileSync(file, 'utf8')
    const { changed, contents: replaced } = replaceLegacyBlock(original)
    if (!changed) continue

    const withImport = ensureImport(replaced)
    fs.writeFileSync(file, withImport, 'utf8')
    changedCount++
    changedFiles.push(path.relative(repoRoot, file))
  }

  console.log(`Updated ${changedCount} certification pages.`)
  if (changedFiles.length) {
    console.log('Changed files:')
    for (const f of changedFiles) console.log(`- ${f}`)
  }
}

main()

