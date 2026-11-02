/**
 * CI validation: ensure certification catalog entries resolve through the
 * dynamic-route registry to a hand-authored, promoted, or legacy page body.
 * Run with: node --test src/tests/cert-sync.test.mjs
 */

import assert from 'node:assert/strict'
import { readFileSync, readdirSync } from 'node:fs'
import { join } from 'node:path'
import { test } from 'node:test'
import { fileURLToPath } from 'node:url'

const ROOT = fileURLToPath(new URL('../../', import.meta.url))
const PROMOTED_DIR = join(ROOT, 'src/lib/cert-page-spike/promoted-associate')

function read(relativePath) {
  return readFileSync(join(ROOT, relativePath), 'utf8')
}

function extractConstArray(raw, name) {
  const declaration = new RegExp(`export const ${name} = \\[([\\s\\S]*?)\\] as const`)
  const match = raw.match(declaration)
  assert.ok(match, `Could not find ${name} array`)
  return [...match[1].matchAll(/'([a-z0-9-]+)'/g)].map((item) => item[1])
}

function extractObjectKeys(raw, declaration) {
  const block = raw.match(new RegExp(`export const ${declaration}[^=]*= \\{([\\s\\S]*?)\\n\\}`))
  assert.ok(block, `Could not find ${declaration} object`)
  return [...block[1].matchAll(/^\s*'([a-z0-9-]+)':/gm)].map((item) => item[1])
}

function catalogSlugs() {
  const result = new Set()
  for (const match of read('src/lib/certifications-data.ts').matchAll(/href:\s*'\/certifications\/([^/']+)'/g)) {
    result.add(match[1])
  }
  assert.ok(result.size > 0, 'Could not extract certification catalog slugs')
  return result
}

function registrySlugs() {
  const registry = read('src/lib/cert-page-spike/registry.ts')
  const promotedIndex = read('src/lib/cert-page-spike/promoted-associate/promoted-index.ts')
  const legacy = read('src/lib/cert-page-spike/legacy-cert-slugs.generated.ts')
  const developerData = read('src/lib/cert-page-spike/developer-1-data.ts')

  assert.match(registry, /\.\.\.promotedAssociateCertBodies/)
  assert.match(registry, /\.\.\.legacyCertSpikeBodies/)

  const promotedSlugs = extractConstArray(promotedIndex, 'PROMOTED_ASSOCIATE_SLUGS')
  const promotedBodySlugs = extractObjectKeys(promotedIndex, 'promotedAssociateCertBodies')
  const legacySlugs = extractConstArray(legacy, 'LEGACY_CERT_SLUGS')
  const registryBodySlugs = extractObjectKeys(registry, 'certSpikeBodyBySlug')
  assert.match(registry, /\[DEVELOPER_1_SLUG\]:\s*developer1CertPageBody/)
  const developerSlug = developerData.match(/export const DEVELOPER_1_SLUG = '([a-z0-9-]+)' as const/)
  assert.ok(developerSlug, 'Could not resolve DEVELOPER_1_SLUG')

  return {
    promotedSlugs,
    promotedBodySlugs,
    legacySlugs,
    registered: new Set([...promotedSlugs, ...legacySlugs, ...registryBodySlugs, developerSlug[1]]),
  }
}

test('every certification catalog entry resolves through the page-body registry', () => {
  const catalog = catalogSlugs()
  const registered = registrySlugs().registered
  const missing = [...catalog].filter((slug) => !registered.has(slug)).sort()

  assert.deepEqual(
    missing,
    [],
    `Catalog certifications missing from the route registry:\n${missing.map((slug) => `  - ${slug}`).join('\n')}`,
  )
})

test('promoted registry slugs have matching validated bodies and JSON source files', () => {
  const { promotedSlugs, promotedBodySlugs } = registrySlugs()
  const sort = (values) => [...values].sort()
  const jsonFiles = new Set(
    readdirSync(PROMOTED_DIR)
      .filter((name) => name.endsWith('.json'))
      .map((name) => name.slice(0, -'.json'.length)),
  )

  assert.deepEqual(sort(promotedBodySlugs), sort(promotedSlugs), 'Promoted body keys must match the exported slug list')
  assert.ok(promotedSlugs.every((slug) => jsonFiles.has(slug)), 'Every promoted slug must have its JSON body file')
})

test('the resolved registry covers at least 85% of the catalog', () => {
  const catalog = catalogSlugs()
  const registered = registrySlugs().registered
  const coverage = [...catalog].filter((slug) => registered.has(slug)).length / catalog.size

  assert.ok(
    coverage >= 0.85,
    `Registry coverage is ${(coverage * 100).toFixed(1)}% (${Math.round(coverage * catalog.size)}/${catalog.size}); expected at least 85%`,
  )
})
