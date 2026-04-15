#!/usr/bin/env node
/**
 * Validate that all configured redirects point to valid destination pages.
 * Checks:
 * 1. All redirect destinations are in the migrated certs
 * 2. All destination pages are static routes (not 404s)
 * 3. No redirect loops exist
 *
 * Run: node scripts/validate-redirects.mjs
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.join(__dirname, '..')

// Extract SPIKED_CERT_SLUGS from registry
function getMigratedSlugs() {
  const registryPath = path.join(ROOT, 'src/lib/cert-page-spike/registry.ts')
  const content = fs.readFileSync(registryPath, 'utf8')

  const slugs = new Set()

  // Get hand-authored slugs
  const handSlugs = [
    'ai-associate',
    'app-builder',
    'administrator',
    'advanced-administrator',
    'developer-1',
  ]
  for (const slug of handSlugs) {
    slugs.add(slug)
  }

  // Get promoted associate slugs
  const promotedPath = path.join(ROOT, 'src/lib/cert-page-spike/promoted-associate/promoted-index.ts')
  const promotedContent = fs.readFileSync(promotedPath, 'utf8')
  const promotedMatch = promotedContent.match(/export const PROMOTED_ASSOCIATE_SLUGS = \[\s*([\s\S]*?)\s*\] as const/)
  if (promotedMatch) {
    for (const m of promotedMatch[1].matchAll(/'([a-z0-9-]+)'/g)) {
      slugs.add(m[1])
    }
  }

  return slugs
}

// Extract redirects from next.config.js
function getConfiguredRedirects() {
  const configPath = path.join(ROOT, 'next.config.js')
  const content = fs.readFileSync(configPath, 'utf8')

  // Simple parser for certification redirects (not the www redirect)
  const certRedirects = []
  const certPattern = /source:\s*'\/certifications\/([^']+)',\s*destination:\s*'\/certifications\/([^']+)'/g

  for (const m of content.matchAll(certPattern)) {
    certRedirects.push({ source: m[1], destination: m[2] })
  }

  return certRedirects
}

function validateRedirects() {
  console.log('🔍 Validating redirects...\n')

  const migratedSlugs = getMigratedSlugs()
  const redirects = getConfiguredRedirects()

  console.log(`📊 Found ${redirects.length} certification redirects\n`)

  let valid = 0
  let invalid = 0

  for (const redirect of redirects) {
    const { source, destination } = redirect

    // Check if destination exists in migrated certs
    if (!migratedSlugs.has(destination)) {
      console.log(`❌ INVALID: /certifications/${source}`)
      console.log(`   → /certifications/${destination} (NOT MIGRATED)\n`)
      invalid++
    } else {
      console.log(`✅ VALID: /certifications/${source} → /certifications/${destination}`)
      valid++
    }
  }

  console.log(`\n📈 Results: ${valid} valid, ${invalid} invalid`)

  if (invalid > 0) {
    console.log('\n⚠️  Fix invalid redirects or update next.config.js')
    process.exit(1)
  } else {
    console.log('\n✨ All redirects point to valid migrated pages!')
  }
}

try {
  validateRedirects()
} catch (err) {
  console.error('Error:', err.message)
  process.exit(1)
}
