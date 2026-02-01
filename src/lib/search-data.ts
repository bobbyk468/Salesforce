import { CERTIFICATION_CATEGORIES } from './certifications-data'

export type SearchResult = { name: string; href: string; examCode?: string }

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

/** Href → primary exam code for display in search results. */
const HREF_TO_EXAM_CODE: Record<string, string> = {
  '/certifications/administrator': 'ADM-201',
  '/certifications/advanced-administrator': 'ADM-211',
  '/certifications/developer-1': 'PD1',
  '/certifications/developer-2': 'PD2',
  '/certifications/app-builder': 'App Builder',
  '/certifications/sales-cloud': 'Sales Cloud',
  '/certifications/service-cloud': 'Service Cloud',
  '/certifications/technical-architect': 'CTA',
}

/** Popular certifications for search UX (high-traffic certs). */
export const POPULAR_SEARCHES: SearchResult[] = (() => {
  const hrefs = [
    '/certifications/administrator',
    '/certifications/advanced-administrator',
    '/certifications/app-builder',
    '/certifications/developer-1',
    '/certifications/developer-2',
    '/certifications/sales-cloud',
    '/certifications/service-cloud',
    '/certifications/technical-architect',
  ]
  return hrefs
    .map((href) => {
      const cert = SEARCHABLE_CERTS.find((c) => c.href === href)
      if (!cert) return null
      return { ...cert, examCode: HREF_TO_EXAM_CODE[href] }
    })
    .filter((c): c is SearchResult => c !== null)
})()

/** Exam code suggestions for quick search (code, name, href). */
export const EXAM_CODE_SUGGESTIONS: { code: string; name: string; href: string }[] = [
  { code: 'ADM-201', name: 'Platform Administrator', href: '/certifications/administrator' },
  { code: 'ADM-211', name: 'Advanced Administrator', href: '/certifications/advanced-administrator' },
  { code: 'PD1', name: 'Platform Developer I', href: '/certifications/developer-1' },
  { code: 'PD2', name: 'Platform Developer II', href: '/certifications/developer-2' },
  { code: 'App Builder', name: 'Platform App Builder', href: '/certifications/app-builder' },
  { code: 'Sales Cloud', name: 'Sales Cloud Consultant', href: '/certifications/sales-cloud' },
  { code: 'Service Cloud', name: 'Service Cloud Consultant', href: '/certifications/service-cloud' },
  { code: 'CTA', name: 'Technical Architect', href: '/certifications/technical-architect' },
]

export function searchCerts(query: string): SearchResult[] {
  const raw = query.trim()
  const q = raw.toLowerCase()
  if (!q) return []
  const codeKey = raw.toUpperCase()
  const exactHref = EXAM_CODE_TO_HREF[raw] ?? EXAM_CODE_TO_HREF[codeKey]
  if (exactHref) {
    const cert = SEARCHABLE_CERTS.find((c) => c.href === exactHref)
    if (cert) {
      return [{ ...cert, examCode: HREF_TO_EXAM_CODE[exactHref] }]
    }
    return []
  }
  return SEARCHABLE_CERTS.filter(
    (c) =>
      c.name.toLowerCase().includes(q) ||
      c.href.replace('/certifications/', '').replace(/-/g, ' ').includes(q)
  )
    .slice(0, 10)
    .map((c) => ({ ...c, examCode: HREF_TO_EXAM_CODE[c.href] }))
}
