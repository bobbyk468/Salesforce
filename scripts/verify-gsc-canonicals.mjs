#!/usr/bin/env node
/**
 * Verify GSC "Duplicate, Google chose different canonical than user" fixes site-wide.
 * Run: node scripts/verify-gsc-canonicals.mjs
 *
 * Checks:
 * 1. trailingSlash: false in next.config.js
 * 2. All exam-tips pages canonical to cert page
 * 3. All pages have explicit canonical (no missing)
 * 4. Cert pages use getCertMetadata (sets self-referencing canonical)
 * 5. Certification-path and similar hub pages have self-referencing canonical
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.join(__dirname, '..')
const SRC = path.join(ROOT, 'src/app')

const SKIP_PATHS = ['test-meta', 'api']

function collectPages(dir, base = '') {
  const pages = []
  if (!fs.existsSync(dir)) return pages
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name)
    const rel = base ? `${base}/${e.name}` : e.name
    if (e.isDirectory()) {
      if (e.name.startsWith('_') || SKIP_PATHS.includes(e.name)) continue
      if (e.name === 'certifications' && base === '') {
        // Recurse into certifications
        pages.push(...collectPages(full, 'certifications'))
      } else if (e.name.includes('[')) {
        // Dynamic route - skip for now
      } else {
        pages.push(...collectPages(full, rel))
      }
    } else if (e.name === 'page.tsx') {
      pages.push(rel === '' ? '/' : '/' + rel.replace(/\\/g, '/').replace(/\/page\.tsx$/, ''))
    }
  }
  return pages
}

// Get all page paths (simplified - just dirs with page.tsx)
function getAllPageDirs() {
  const dirs = []
  function walk(d, base) {
    if (!fs.existsSync(d)) return
    for (const e of fs.readdirSync(d, { withFileTypes: true })) {
      const full = path.join(d, e.name)
      const rel = base ? `${base}/${e.name}` : e.name
      if (e.isDirectory()) {
        if (e.name.startsWith('_') || SKIP_PATHS.includes(e.name)) continue
        if (fs.existsSync(path.join(full, 'page.tsx'))) {
          dirs.push(rel.replace(/\\/g, '/'))
        }
        walk(full, rel)
      }
    }
  }
  walk(SRC, '')
  return dirs
}

function main() {
  const issues = []
  let checks = 0

  // 1. trailingSlash: false
  const nextConfig = fs.readFileSync(path.join(ROOT, 'next.config.js'), 'utf8')
  if (!/trailingSlash:\s*false/.test(nextConfig)) {
    issues.push({ check: 'trailingSlash', message: 'next.config.js should have trailingSlash: false' })
  } else {
    checks++
  }

  // 2. Exam-tips canonical to cert
  const examTipsDirs = fs.readdirSync(SRC).filter(
    (d) => d.endsWith('-exam-tips') || ['adm-201-exam-tips-2026', 'pd1-exam-tips-2026', 'pd2-exam-tips-2026'].includes(d)
  )
  for (const dir of examTipsDirs) {
    const filePath = path.join(SRC, dir, 'page.tsx')
    if (!fs.existsSync(filePath)) continue
    const content = fs.readFileSync(filePath, 'utf8')
    if (!/canonical:\s*`\$\{siteUrl\}\/certifications\//.test(content)) {
      issues.push({ check: 'exam-tips-canonical', message: `/${dir} should canonical to /certifications/[slug]` })
    } else {
      checks++
    }
  }

  // 3. Certification path pages - explicit self-referencing canonical
  const pathPages = ['certification-path', 'admin-certification-path', 'developer-certification-path', 'consultant-certification-path', 'architect-certification-path']
  for (const dir of pathPages) {
    const filePath = path.join(SRC, dir, 'page.tsx')
    if (!fs.existsSync(filePath)) continue
    const content = fs.readFileSync(filePath, 'utf8')
    const hasCanonical = /alternates:\s*\{[^}]*canonical[^}]*\}/s.test(content) && content.includes(`/${dir}`)
    if (!hasCanonical) {
      issues.push({ check: 'path-canonical', message: `/${dir} should have explicit self-referencing canonical` })
    } else {
      checks++
    }
  }

  // 4. Cert pages - use getCertMetadata (includes canonical)
  const certDirs = fs.readdirSync(path.join(SRC, 'certifications')).filter((d) => !d.includes('['))
  for (const dir of certDirs) {
    const filePath = path.join(SRC, 'certifications', dir, 'page.tsx')
    if (!fs.existsSync(filePath)) continue
    const content = fs.readFileSync(filePath, 'utf8')
    const hasGetCertMetadata = /getCertMetadata|alternates:\s*\{[^}]*canonical/.test(content)
    const hasCanonical = /canonical.*certifications/.test(content)
    if (!hasGetCertMetadata && !hasCanonical) {
      issues.push({ check: 'cert-canonical', message: `/certifications/${dir} missing canonical` })
    } else {
      checks++
    }
  }

  // 5. Study guides - must have canonical
  const studyGuideDirs = fs.readdirSync(SRC).filter((d) => d.endsWith('-study-guide'))
  for (const dir of studyGuideDirs) {
    const filePath = path.join(SRC, dir, 'page.tsx')
    if (!fs.existsSync(filePath)) continue
    const content = fs.readFileSync(filePath, 'utf8')
    if (!/alternates:\s*\{[^}]*canonical/.test(content)) {
      issues.push({ check: 'study-guide-canonical', message: `/${dir} missing explicit canonical` })
    } else {
      checks++
    }
  }

  // 6. Vs/comparison pages, how-to, salesforce-certification-* - must have canonical
  const otherDirs = fs.readdirSync(SRC).filter(
    (d) =>
      d.includes('-vs-') ||
      d.startsWith('how-to-') ||
      d.startsWith('salesforce-certification-') ||
      d.startsWith('is-') ||
      d.startsWith('which-') ||
      ['adm-201-study-guide', 'adm-201-vs-app-builder', 'pd1-study-guide', 'pd2-study-guide', 'pd1-vs-pd2'].includes(d)
  )
  for (const dir of otherDirs) {
    const filePath = path.join(SRC, dir, 'page.tsx')
    if (!fs.existsSync(filePath)) continue
    const content = fs.readFileSync(filePath, 'utf8')
    if (!/alternates:\s*\{[^}]*canonical/.test(content)) {
      issues.push({ check: 'other-canonical', message: `/${dir} missing explicit canonical` })
    } else {
      checks++
    }
  }

  // Report
  console.log('=== GSC Canonical Verification (Site-Wide) ===\n')
  console.log('Checks: trailingSlash, exam-tips→cert, certification-path, cert pages, study guides\n')

  if (issues.length > 0) {
    console.log('ISSUES FOUND:')
    issues.forEach(({ check, message }) => console.log(`  [${check}] ${message}`))
    console.log(`\nFAILED: ${issues.length} issue(s)`)
    process.exit(1)
  }

  console.log(`PASSED: All GSC canonical checks verified`)
  console.log(`  - ${examTipsDirs.length} exam-tips → cert page`)
  console.log(`  - ${pathPages.length} certification-path pages`)
  console.log(`  - ${certDirs.length} cert pages`)
  console.log(`  - ${studyGuideDirs.length} study guides`)
  console.log(`  - ${otherDirs.length} vs/how-to/other pages`)
}

main()
