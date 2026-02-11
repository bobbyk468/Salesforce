/* eslint-disable no-console */
/**
 * Fixes an automated replacement that left an extra `</div>` after inserting
 * <FullQuestionBankCta />, before the related-certs section.
 */

const fs = require('fs')
const path = require('path')

const repoRoot = path.join(__dirname, '..')
const certDir = path.join(repoRoot, 'src', 'app', 'certifications')

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

function fix(contents) {
  if (!contents.includes('<FullQuestionBankCta')) return { changed: false, contents }

  const regex =
    /(<FullQuestionBankCta[^\n]*\/>\s*)\n\s*<\/div>\s*\n(\s*<div id="related-certs">)/g

  const next = contents.replace(regex, '$1\n$2')
  return { changed: next !== contents, contents: next }
}

function main() {
  const files = getAllPageFiles(certDir)
  let changedCount = 0
  for (const file of files) {
    if (file.endsWith(path.join('certifications', 'administrator', 'page.tsx'))) continue
    const original = fs.readFileSync(file, 'utf8')
    const { changed, contents } = fix(original)
    if (!changed) continue
    fs.writeFileSync(file, contents, 'utf8')
    changedCount++
  }
  console.log(`Removed extra closing </div> in ${changedCount} files.`)
}

main()

