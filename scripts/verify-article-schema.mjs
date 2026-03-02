#!/usr/bin/env node
/**
 * Verify that Article schema includes the "image" field in all schema sources.
 * Run: node scripts/verify-article-schema.mjs
 *
 * Checks:
 * 1. schema-data.ts getArticleJsonLd - used by study guides, exam tips, vs pages
 * 2. CertPageSeo.tsx - used by cert pages
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.join(__dirname, '..')

const CHECKS = [
  {
    file: 'src/lib/schema-data.ts',
    patterns: [/image:\s*\[/, /ImageObject.*url: imageUrl/],
    desc: 'getArticleJsonLd (study guides, exam tips, vs pages)',
  },
  {
    file: 'src/components/CertPageSeo.tsx',
    patterns: [/image:\s*\[/, /ImageObject.*url: ogImageUrl/],
    desc: 'CertPageSeo (cert pages)',
  },
]

console.log('=== Article Schema Image Verification ===\n')

let allPassed = true
for (const { file, patterns, desc } of CHECKS) {
  const filePath = path.join(ROOT, file)
  if (!fs.existsSync(filePath)) {
    console.log(`FAIL   ${desc}`)
    console.log(`       File not found: ${file}`)
    allPassed = false
    continue
  }
  const content = fs.readFileSync(filePath, 'utf8')
  const hasImage = patterns.every((p) => p.test(content))
  const status = hasImage ? 'PASS' : 'FAIL'
  if (!hasImage) allPassed = false
  console.log(`${status.padEnd(6)} ${desc}`)
}

console.log('')
if (allPassed) {
  console.log('PASSED: All Article schema sources include the image field.')
} else {
  console.log('FAILED: Some schema sources are missing the Article image field.')
  process.exit(1)
}
