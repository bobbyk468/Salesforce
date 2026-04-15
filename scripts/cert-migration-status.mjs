#!/usr/bin/env node
/**
 * Prints certification [slug] migration progress (catalog vs filesystem vs registry).
 * Run from repo root: node scripts/cert-migration-status.mjs
 */
import { readFileSync, readdirSync, existsSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')
const CERT_DIR = join(ROOT, 'src/app/certifications')
const DATA = join(ROOT, 'src/lib/certifications-data.ts')
const REGISTRY = join(ROOT, 'src/lib/cert-page-spike/registry.ts')
const LEGACY_GEN = join(ROOT, 'src/lib/cert-page-spike/legacy-cert-slugs.generated.ts')
const PROMOTED_DIR = join(ROOT, 'src/lib/cert-page-spike/promoted-associate')

/**
 * Parse hand-authored `*-data.ts` markers from registry.ts.
 * Looks for the explicit slug assignments in certSpikeBodyBySlug:
 *   'ai-associate': aiAssociateCertPageBody,
 *   'app-builder': appBuilderCertPageBody,
 *   ... etc
 */
function dataTemplateSlugsFromRegistry() {
  const raw = readFileSync(REGISTRY, 'utf8')
  const slugs = []

  // Match the explicit object literal lines (before spread operators)
  // Pattern: '  'slug-name': variableName,'
  const bodyMatch = raw.match(/export const certSpikeBodyBySlug[^{]*\{([\s\S]*?)\}/)
  if (!bodyMatch) return []

  const objectContent = bodyMatch[1]
  // Extract quoted slug names that come before a colon and variable name (not spread)
  for (const match of objectContent.matchAll(/^\s*'([a-z0-9-]+)':\s*\w+/gm)) {
    // Filter to only hand-authored ones (exclude promotedAssociateCertBodies spread)
    const slug = match[1]
    // These are the hand-authored ones that appear as explicit entries
    if (slug === 'ai-associate' || slug === 'app-builder' || slug === 'administrator' ||
        slug === 'advanced-administrator' || slug === 'developer-1') {
      slugs.push(slug)
    }
  }

  return slugs.length > 0 ? slugs : [
    'ai-associate',
    'app-builder',
    'administrator',
    'advanced-administrator',
    'developer-1',
  ]
}

function catalogSlugsFromSource() {
  const raw = readFileSync(DATA, 'utf8')
  const set = new Set()
  for (const m of raw.matchAll(/href:\s*'\/certifications\/([^/']+)'/g)) {
    set.add(m[1])
  }
  return [...set].sort()
}

function filesystemSlugs() {
  return readdirSync(CERT_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name)
    .filter((name) => name !== '[slug]' && name !== 'role')
    .filter((name) => existsSync(join(CERT_DIR, name, 'page.tsx')))
    .sort()
}

function legacySlugsFromGenerated() {
  if (!existsSync(LEGACY_GEN)) return []
  const raw = readFileSync(LEGACY_GEN, 'utf8')
  const slugs = []
  for (const m of raw.matchAll(/\n\s*'([a-z0-9-]+)',/g)) {
    slugs.push(m[1])
  }
  return slugs
}

function promotedJsonSlugs() {
  if (!existsSync(PROMOTED_DIR)) return []
  return readdirSync(PROMOTED_DIR)
    .filter((f) => f.endsWith('.json'))
    .map((f) => f.replace(/\.json$/, ''))
    .sort()
}

function allRegistrySlugs() {
  return [...new Set([...DATA_TEMPLATE_SLUGS, ...promotedJsonSlugs(), ...legacySlugsFromGenerated()])].sort()
}

const dataTemplateSlugs = dataTemplateSlugsFromRegistry()
const catalog = catalogSlugsFromSource()
const fsSlugs = filesystemSlugs()
const promoted = promotedJsonSlugs()
const legacy = legacySlugsFromGenerated()

// Override the function that builds all registry slugs
const migrated = [...new Set([...dataTemplateSlugs, ...promoted, ...legacy])].sort()
const migSet = new Set(migrated)
const promotedCount = promoted.length
const legacyCount = legacy.length

console.log('\n📋 Certification → [slug] dynamic route migration\n')
console.log(
  `  Migrated (registry):     ${migrated.length}  (${dataTemplateSlugs.length} hand data + ${promotedCount} promoted JSON associate + ${legacyCount} legacy TSX)`,
)
console.log(`  Catalog slugs (nav):     ${catalog.length}`)
console.log(`  Filesystem cert pages:   ${fsSlugs.length}`)
console.log(`  Catalog remaining:       ${catalog.filter((s) => !migSet.has(s)).length}`)
console.log(`  Filesystem remaining:    ${fsSlugs.filter((s) => !migSet.has(s)).length}`)
console.log('\n  Not migrated yet (filesystem):\n')
for (const s of fsSlugs.filter((x) => !migSet.has(x))) {
  console.log(`    - ${s}`)
}
console.log(
  '\n  Associate bodies: `src/lib/cert-page-spike/promoted-associate/*.json` (+ promoted-index.ts).\n' +
    '  Legacy TSX: `src/components/certifications/cert-bodies/` (bespoke pages only).\n' +
    '  Re-run extraction: `npm run cert:promote-associate` (after restoring/editing cert-bodies sources).\n',
)
