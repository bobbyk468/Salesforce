import { CERTIFICATION_CATEGORIES } from './certifications-data'

/** Flat list of all certifications (deduplicated by href) for search. */
export const SEARCHABLE_CERTS: { name: string; href: string }[] = (() => {
  const seen = new Set<string>()
  const result: { name: string; href: string }[] = []
  for (const cat of CERTIFICATION_CATEGORIES) {
    for (const item of cat.items) {
      if (seen.has(item.href)) continue
      seen.add(item.href)
      result.push({ name: item.name, href: item.href })
    }
  }
  return result
})()

/** Exam code / common keyword → cert href for quick lookup (e.g. ADM-201, PD1). */
export const EXAM_CODE_TO_HREF: Record<string, string> = {
  'ADM-201': '/certifications/administrator',
  'ADM-211': '/certifications/advanced-administrator',
  'ADM': '/certifications/administrator',
  PD1: '/certifications/developer-1',
  'PD2': '/certifications/developer-2',
  'Platform Developer I': '/certifications/developer-1',
  'Platform Developer II': '/certifications/developer-2',
  'App Builder': '/certifications/app-builder',
  'Sales Cloud': '/certifications/sales-cloud',
  'Service Cloud': '/certifications/service-cloud',
  'CTA': '/certifications/technical-architect',
  'Technical Architect': '/certifications/technical-architect',
}

export function searchCerts(query: string): { name: string; href: string }[] {
  const raw = query.trim()
  const q = raw.toLowerCase()
  if (!q) return []
  const codeKey = raw.toUpperCase()
  const exactHref = EXAM_CODE_TO_HREF[raw] ?? EXAM_CODE_TO_HREF[codeKey]
  if (exactHref) {
    const cert = SEARCHABLE_CERTS.find((c) => c.href === exactHref)
    return cert ? [cert] : []
  }
  return SEARCHABLE_CERTS.filter(
    (c) =>
      c.name.toLowerCase().includes(q) ||
      c.href.replace('/certifications/', '').replace(/-/g, ' ').includes(q)
  ).slice(0, 10)
}
