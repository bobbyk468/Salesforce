/* eslint-disable no-console */
/**
 * Fixes a prior automated edit where `import FullQuestionBankCta ...` may have been
 * inserted in the middle of a multi-line import, breaking TSX parsing.
 *
 * Strategy:
 * - For every certification page, if it uses <FullQuestionBankCta ...>, ensure the import exists
 *   and is placed safely at the top (after optional 'use client').
 * - Remove any existing occurrences of the import line elsewhere.
 */

const fs = require('fs')
const path = require('path')

const repoRoot = path.join(__dirname, '..')
const certDir = path.join(repoRoot, 'src', 'app', 'certifications')

const importLine = "import FullQuestionBankCta from '@/components/FullQuestionBankCta'"

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

function normalize(contents) {
  const lines = contents.split('\n')
  const usesComponent = contents.includes('<FullQuestionBankCta ')
  if (!usesComponent) return { changed: false, contents }

  // Remove all existing importLine occurrences (anywhere)
  const filtered = lines.filter((l) => l.trim() !== importLine)

  // Insert safely at top (after optional 'use client')
  let insertAt = 0
  if (
    filtered[0] &&
    (filtered[0].trim() === "'use client'" ||
      filtered[0].trim() === '"use client"' ||
      filtered[0].trim() === "'use client';" ||
      filtered[0].trim() === '"use client";')
  ) {
    insertAt = 1
  }

  // Avoid duplicate if already at top (after filtering, it isn't)
  filtered.splice(insertAt, 0, importLine)

  return { changed: true, contents: filtered.join('\n') }
}

function main() {
  const files = getAllPageFiles(certDir)
  let changedCount = 0
  for (const file of files) {
    if (file.endsWith(path.join('certifications', 'administrator', 'page.tsx'))) continue
    const original = fs.readFileSync(file, 'utf8')
    const { changed, contents } = normalize(original)
    if (!changed) continue
    if (contents !== original) {
      fs.writeFileSync(file, contents, 'utf8')
      changedCount++
    }
  }
  console.log(`Fixed import placement in ${changedCount} files.`)
}

main()

