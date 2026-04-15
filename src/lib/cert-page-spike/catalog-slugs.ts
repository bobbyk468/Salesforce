import { CERTIFICATION_CATEGORIES } from '@/lib/certifications-data'

/** Slugs from `/certifications/{slug}` links in the public certification catalog (deduped, sorted). */
export function getCertificationCatalogSlugs(): string[] {
  const set = new Set<string>()
  for (const cat of CERTIFICATION_CATEGORIES) {
    for (const item of cat.items) {
      const m = item.href.match(/^\/certifications\/([^/]+)\/?$/)
      if (m) set.add(m[1])
    }
  }
  return [...set].sort()
}
