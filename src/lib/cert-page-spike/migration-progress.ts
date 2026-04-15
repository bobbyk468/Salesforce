import { readdirSync, existsSync } from 'fs'
import { join } from 'path'
import { getCertificationCatalogSlugs } from './catalog-slugs'
import { SPIKED_CERT_SLUGS } from './registry'

const CERT_DIR = join(process.cwd(), 'src/app/certifications')

/** Every `src/app/certifications/{slug}/page.tsx` except `[slug]`, `role`, and the index `page.tsx`. */
export function getFilesystemCertDetailSlugs(): string[] {
  const names = readdirSync(CERT_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name)
    .filter((name) => name !== '[slug]' && name !== 'role')
  return names
    .filter((name) => existsSync(join(CERT_DIR, name, 'page.tsx')))
    .sort()
}

export type CertMigrationProgress = {
  /** Slugs linked from CERTIFICATION_CATEGORIES */
  catalogSlugs: string[]
  /** Slugs that still have a static `certifications/{slug}/page.tsx` */
  filesystemSlugs: string[]
  migrated: readonly string[]
  migratedSet: Set<string>
  /** Catalog slugs not yet in the dynamic registry */
  remainingCatalog: string[]
  /** Filesystem cert pages not yet migrated (static page still exists) */
  remainingFilesystem: string[]
}

export function getCertMigrationProgress(): CertMigrationProgress {
  const catalogSlugs = getCertificationCatalogSlugs()
  const filesystemSlugs = getFilesystemCertDetailSlugs()
  const migrated = SPIKED_CERT_SLUGS as readonly string[]
  const migratedSet = new Set<string>(migrated)
  const remainingCatalog = catalogSlugs.filter((s) => !migratedSet.has(s))
  const remainingFilesystem = filesystemSlugs.filter((s) => !migratedSet.has(s))
  return {
    catalogSlugs,
    filesystemSlugs,
    migrated,
    migratedSet,
    remainingCatalog,
    remainingFilesystem,
  }
}
