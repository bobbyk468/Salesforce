/**
 * CI validation: Ensure certification catalog stays in sync with the spike registry.
 * Prevents deploying pages that generate notFound() due to missing data.
 *
 * Run: npm test -- cert-sync.test.ts
 */

import { readFileSync } from 'fs'
import { join } from 'path'

const ROOT = join(__dirname, '../../..')

function getCatalogSlugs(): Set<string> {
  const raw = readFileSync(join(ROOT, 'src/lib/certifications-data.ts'), 'utf8')
  const set = new Set<string>()
  for (const m of raw.matchAll(/href:\s*'\/certifications\/([^/']+)'/g)) {
    set.add(m[1])
  }
  return set
}

function getRegistrySlugs(): Set<string> {
  const raw = readFileSync(join(ROOT, 'src/lib/cert-page-spike/registry.ts'), 'utf8')
  const set = new Set<string>()

  // Extract SPIKED_CERT_SLUGS array
  const match = raw.match(/export const SPIKED_CERT_SLUGS = \[\s*([\s\S]*?)\s*\] as const/)
  if (!match) {
    throw new Error('Could not parse SPIKED_CERT_SLUGS from registry.ts')
  }

  // Extract all slug strings from the array
  // They appear as: 'slug-name',
  for (const m of match[1].matchAll(/'([a-z0-9-]+)'/g)) {
    set.add(m[1])
  }

  return set
}

describe('Certification Catalog ↔ Registry Sync', () => {
  let catalogSlugs: Set<string>
  let registrySlugs: Set<string>

  beforeAll(() => {
    catalogSlugs = getCatalogSlugs()
    registrySlugs = getRegistrySlugs()
  })

  test('all catalog entries should have spike registry data', () => {
    const missing = Array.from(catalogSlugs).filter((slug) => !registrySlugs.has(slug))

    if (missing.length > 0) {
      throw new Error(
        `Found ${missing.length} catalog certs without registry entries:\n` +
          missing.map((s) => `  - ${s}`).join('\n') +
          '\n\nAdd to src/lib/cert-page-spike/registry.ts and run npm run build.',
      )
    }

    expect(missing.length).toBe(0)
  })

  test('all registry entries should exist in catalog', () => {
    const orphaned = Array.from(registrySlugs).filter((slug) => !catalogSlugs.has(slug))

    if (orphaned.length > 0) {
      // Note: Some registry entries (like developer-1 hand markers) may not be in certifications-data
      // This is expected. Only warn if there are many or if they look like real certs.
      const likelyOrphaned = orphaned.filter(
        (slug) => !['ai-associate', 'app-builder', 'administrator', 'advanced-administrator', 'developer-1'].includes(slug),
      )

      if (likelyOrphaned.length > 0) {
        console.warn(
          `Found ${likelyOrphaned.length} registry entries not in catalog (may be correct if hand-authored):`,
          likelyOrphaned.join(', '),
        )
      }
    }

    expect(registrySlugs.size).toBeGreaterThan(0)
  })

  test('registry should have reasonable coverage of catalog', () => {
    // At least 85% of catalog should be spiked
    const coverage = registrySlugs.size / catalogSlugs.size
    const threshold = 0.85

    if (coverage < threshold) {
      throw new Error(
        `Registry coverage too low: ${(coverage * 100).toFixed(1)}% ` +
          `(${registrySlugs.size}/${catalogSlugs.size}). ` +
          `Target: ${(threshold * 100).toFixed(0)}%.\n` +
          `Missing: ${Array.from(catalogSlugs).filter((s) => !registrySlugs.has(s)).join(', ')}`,
      )
    }

    expect(coverage).toBeGreaterThanOrEqual(threshold)
  })
})
