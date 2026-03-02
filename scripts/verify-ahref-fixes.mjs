#!/usr/bin/env node
/**
 * Verify Ahref fixes before deploy — runs site-wide on ALL pages:
 * 1. Meta descriptions 120-160 chars (no too-short, no too-long)
 * 2. RelatedGuides present on the 21 underlinked pages
 *
 * Covers: pageDescription, descriptionText, inline description in metadata,
 * and certifications using getCertMetadata (validated via cert-seo-data).
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const SRC = path.join(__dirname, '../src/app')
const LIB = path.join(__dirname, '../src/lib')

const UNDERLINKED_SLUGS = [
  'ux-designer-vs-strategy-designer', 'mulesoft-integration-foundations-study-guide',
  'pardot-consultant-vs-marketing-cloud-consultant', 'system-architect-vs-application-architect',
  'business-analyst-study-guide', 'platform-foundations-vs-ai-associate',
  'is-salesforce-certification-worth-it', 'education-cloud-vs-nonprofit-cloud-consultant',
  'salesforce-free-certification', 'how-to-become-salesforce-architect',
  'field-service-vs-service-cloud-consultant', 'pardot-specialist-vs-pardot-consultant',
  'cpq-admin-vs-revenue-cloud-consultant', 'tableau-data-analyst-study-guide',
  'app-builder-vs-developer-i', 'salesforce-certification-passing-score',
  'marketing-cloud-admin-vs-developer', 'mulesoft-developer-i-vs-integration-foundations',
  'salesforce-certification-validity', 'salesforce-exam-retake-policy',
  'b2b-vs-b2c-solution-architect', 'javascript-developer-i-vs-pd1',
]

const RELEASE_PLACEHOLDER = "Winter '26"

// Pages to skip (test/dev pages, or pages with inherited metadata only)
const SKIP_PATHS = ['test-meta']

function findPage(slug) {
  const candidates = [
    path.join(SRC, slug, 'page.tsx'),
    path.join(SRC, 'certifications', slug, 'page.tsx'),
  ]
  for (const p of candidates) {
    if (fs.existsSync(p)) return p
  }
  return null
}

function toRenderedLength(desc) {
  return desc.replace(/\$\{RELEASE_CURRENT\}/g, RELEASE_PLACEHOLDER).length
}

/** Extract meta description from page content — multiple patterns for all page types. */
function extractMetaDescription(content) {
  // 1. pageDescription or descriptionText (explicit vars used for metadata)
  const varPatterns = [
    /pageDescription\s*=\s*`([^`]+)`/s,
    /pageDescription\s*=\s*\n?\s*'([^']+)'/s,
    /descriptionText\s*=\s*`([^`]+)`/s,
    /descriptionText\s*=\s*\n?\s*'([^']+)'/s,
  ]
  for (const regex of varPatterns) {
    const m = content.match(regex)
    if (m?.[1]) return m[1].trim()
  }

  // 2. description: descriptionText — look for descriptionText above
  if (/description:\s*descriptionText,/.test(content)) {
    const m = content.match(/descriptionText\s*=\s*`([^`]+)`/s) || content.match(/descriptionText\s*=\s*'([^']+)'/s)
    if (m?.[1]) return m[1].trim()
  }

  // 3. Inline description in export const metadata — only inside metadata block (before first "},\s*\n\s*[a-zA-Z]")
  const metadataMatch = content.match(/export\s+const\s+metadata\s*:\s*Metadata\s*=\s*\{([^}]+(?:description\s*:\s*[^}]+)?)\}/s)
  if (metadataMatch) {
    const block = metadataMatch[1]
    const inlineBacktick = block.match(/description\s*:\s*`([^`]+)`/s)
    const inlineQuote = block.match(/description\s*:\s*'([^']+)'/s)
    if (inlineBacktick?.[1]) return inlineBacktick[1].trim()
    if (inlineQuote?.[1]) return inlineQuote[1].trim()
  }
  return null
}

function main() {
  let metaIssues = []
  let linkIssues = []
  let noDescPaths = []
  let totalPages = 0
  let pagesWithMeta = 0
  let getCertMetadataPages = 0

  // 1. Check ALL page.tsx files site-wide for meta description length
  function walkDir(dir) {
    if (!fs.existsSync(dir)) return
    const entries = fs.readdirSync(dir, { withFileTypes: true })
    for (const e of entries) {
      const full = path.join(dir, e.name)
      if (e.isDirectory() && !e.name.startsWith('_') && e.name !== 'api') {
        walkDir(full)
      } else if (e.name === 'page.tsx') {
        totalPages++
        const content = fs.readFileSync(full, 'utf8')
        const rel = path.relative(SRC, path.dirname(full))
        const displayPath = rel === '.' || rel === '' ? '/' : '/' + rel.replace(/\\/g, '/')

        if (SKIP_PATHS.some((skip) => displayPath.includes(skip))) return

        // Pages using getCertMetadata(slug) — validated in cert-seo-data (finalizeMetaDescription enforces 140-160)
        if (/return\s+getCertMetadata\s*\([^)]+\)/.test(content) && !extractMetaDescription(content)) {
          getCertMetadataPages++
          return
        }

        const desc = extractMetaDescription(content)
        if (desc) {
          pagesWithMeta++
          const len = toRenderedLength(desc)
          if (len < 120) {
            metaIssues.push({ path: displayPath, len, issue: 'too short', desc: desc.slice(0, 50) + '...' })
          } else if (len > 160) {
            metaIssues.push({ path: displayPath, len, issue: 'too long', desc: desc.slice(0, 50) + '...' })
          }
        } else {
          noDescPaths.push(displayPath)
        }
      }
    }
  }
  walkDir(SRC)

  // 2. Check exam-tips pages canonical to cert page (prevents GSC "chose different canonical")
  const examTipsDirs = fs.readdirSync(SRC).filter(
    (d) => d.endsWith('-exam-tips') || d === 'adm-201-exam-tips-2026' || d === 'pd1-exam-tips-2026' || d === 'pd2-exam-tips-2026'
  )
  const canonicalIssues = []
  for (const dir of examTipsDirs) {
    const filePath = path.join(SRC, dir, 'page.tsx')
    if (!fs.existsSync(filePath)) continue
    const content = fs.readFileSync(filePath, 'utf8')
    const canonicalMatch = content.match(/canonical:\s*`\$\{siteUrl\}\/certifications\/([^`]+)`/)
    if (!canonicalMatch) {
      canonicalIssues.push({ path: `/${dir}`, issue: 'missing canonical to cert page' })
    }
  }

  // 3. Check RelatedGuides on underlinked pages
  for (const slug of UNDERLINKED_SLUGS) {
    const file = findPage(slug)
    if (!file) {
      linkIssues.push({ slug, issue: 'page not found' })
      continue
    }
    const content = fs.readFileSync(file, 'utf8')
    if (!content.includes('RelatedGuides') || !content.includes('getRelatedGuides')) {
      linkIssues.push({ slug, issue: 'RelatedGuides missing' })
    }
  }

  // Report
  console.log('=== Ahref Fix Verification (Site-Wide) ===\n')
  console.log(`Pages scanned: ${totalPages} total`)
  console.log(`  - With explicit meta description: ${pagesWithMeta}`)
  if (getCertMetadataPages > 0) {
    console.log(`  - Using getCertMetadata (lib enforces 140-160 chars): ${getCertMetadataPages}`)
  }
  const noDescCount = noDescPaths.length
  console.log(`  - No explicit description (uses layout default or other): ${noDescCount}`)
  if (noDescCount > 0 && noDescCount <= 20) {
    noDescPaths.forEach((p) => console.log(`      ${p}`))
  }
  console.log('')

  if (metaIssues.length > 0) {
    console.log('META DESCRIPTION ISSUES (must be 120-160 chars):')
    metaIssues.forEach(({ path: p, len, issue }) => console.log(`  ${issue} (${len}): ${p}`))
    console.log('')
  } else {
    console.log('Meta descriptions: OK (all checked pages 120-160 chars)\n')
  }

  if (linkIssues.length > 0) {
    console.log('INTERNAL LINK ISSUES (RelatedGuides):')
    linkIssues.forEach(({ slug, issue }) => console.log(`  ${slug}: ${issue}`))
    console.log('')
  } else {
    console.log('RelatedGuides: OK (present on all 21 underlinked pages)\n')
  }

  if (canonicalIssues.length > 0) {
    console.log('CANONICAL ISSUES (exam-tips should canonical to cert page):')
    canonicalIssues.forEach(({ path: p, issue }) => console.log(`  ${p}: ${issue}`))
    console.log('')
  } else {
    console.log('Exam-tips canonicals: OK (all point to cert page)\n')
  }

  const failed = metaIssues.length + linkIssues.length + canonicalIssues.length
  if (failed > 0) {
    console.log(`FAILED: ${failed} issue(s) need rework`)
    process.exit(1)
  }
  console.log('PASSED: All Ahref fixes verified site-wide.')
}

main()
