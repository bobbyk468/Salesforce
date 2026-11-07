import { CERTIFICATION_CATEGORIES } from '@/lib/certifications-data'
import { OFFICIAL_CERT_NAMES } from '@/lib/cert-official-names'
import {
  SLUG_TO_EXAM_COST,
  SLUG_TO_EXAM_TIPS,
  SLUG_TO_STUDY_GUIDE,
  getExamLogistics,
} from '@/lib/cert-seo-data'

/**
 * One searchable destination.
 *
 * `k` is the pre-lowercased haystack the client matches against, so the
 * browser never has to lowercase 300 strings on every keystroke. Field names
 * are single letters because this ships as JSON over the wire.
 */
export type SearchEntry = {
  /** Title shown in the result row. */
  t: string
  /** Path. */
  u: string
  /** Group label shown beside the title. */
  g: string
  /** Lowercased search haystack: title + synonyms + metadata. */
  k: string
  /** Optional one-line detail (exam fee, question count). */
  d?: string
}

/** Role hub pages, and the role each certification belongs to. */
function roleBySlug(): Map<string, string> {
  const map = new Map<string, string>()
  for (const category of CERTIFICATION_CATEGORIES) {
    for (const item of category.items) {
      const slug = item.href.replace('/certifications/', '')
      if (!map.has(slug)) map.set(slug, category.name)
    }
  }
  return map
}

/**
 * Hand-maintained list of the tool and guidance pages worth searching. These
 * live in their own route folders with local metadata, so unlike the
 * certification families they cannot be derived from a central map.
 */
const STATIC_PAGES: { t: string; u: string; g: string; k?: string }[] = [
  { t: 'All Salesforce certifications', u: '/certifications', g: 'Browse' },
  { t: 'Full certification list by role', u: '/salesforce-certifications-list', g: 'Browse' },
  { t: 'Certification paths', u: '/certification-path', g: 'Paths' },
  { t: 'Admin certification path', u: '/admin-certification-path', g: 'Paths' },
  { t: 'Developer certification path', u: '/developer-certification-path', g: 'Paths' },
  { t: 'Consultant certification path', u: '/consultant-certification-path', g: 'Paths' },
  { t: 'Architect certification path', u: '/architect-certification-path', g: 'Paths' },
  { t: 'Marketing Cloud certification path', u: '/marketing-cloud-certification-path', g: 'Paths' },
  { t: 'Which certification should I take first?', u: '/which-salesforce-certification-first', g: 'Paths' },
  { t: 'How to study for a Salesforce certification', u: '/how-to-study-for-salesforce-certification', g: 'Guides' },
  { t: 'Certification difficulty ranking', u: '/salesforce-certification-difficulty', g: 'Tools', k: 'hardest easiest difficulty' },
  { t: 'Certification cost', u: '/salesforce-certification-cost', g: 'Tools', k: 'price fee how much' },
  { t: 'Associate certification cost', u: '/salesforce-associate-certification-cost', g: 'Tools', k: 'price fee' },
  { t: 'Certification ROI calculator', u: '/salesforce-certification-roi-calculator', g: 'Tools', k: 'salary worth it return' },
  { t: 'Certification validity and maintenance', u: '/salesforce-certification-validity', g: 'Guides', k: 'expire renewal maintain' },
  { t: 'How to become a Salesforce Administrator', u: '/how-to-become-salesforce-administrator', g: 'Careers' },
  { t: 'How to become a Salesforce Developer', u: '/how-to-become-salesforce-developer', g: 'Careers' },
  { t: 'How to become a Salesforce Consultant', u: '/how-to-become-salesforce-consultant', g: 'Careers' },
  { t: 'How to become a Salesforce Architect', u: '/how-to-become-salesforce-architect', g: 'Careers' },
  { t: 'Admin vs Developer career', u: '/salesforce-admin-vs-developer-career', g: 'Careers' },
  { t: 'Become a CTA', u: '/become-cta', g: 'Careers', k: 'technical architect cta' },
  { t: 'Contact', u: '/contact', g: 'Site' },
  { t: 'About', u: '/about', g: 'Site' },
  { t: 'Editorial policy', u: '/editorial-policy', g: 'Site' },
]

/** Comparison pages, kept here because each owns its own route metadata. */
const COMPARISONS: [string, string][] = [
  ['ADM-201 vs App Builder', '/adm-201-vs-app-builder'],
  ['Administrator vs Advanced Administrator', '/administrator-vs-advanced-administrator'],
  ['App Builder vs Developer I', '/app-builder-vs-developer-i'],
  ['PD1 vs PD2', '/pd1-vs-pd2'],
  ['Agentforce Specialist vs AI Associate', '/agentforce-specialist-vs-ai-associate'],
  ['Platform Foundations vs AI Associate', '/platform-foundations-vs-ai-associate'],
  ['B2B vs B2C Solution Architect', '/b2b-vs-b2c-solution-architect'],
  ['Business Analyst vs Strategy Designer', '/business-analyst-vs-strategy-designer'],
  ['CPQ Admin vs Revenue Cloud Consultant', '/cpq-admin-vs-revenue-cloud-consultant'],
  ['CPQ Admin vs CPQ Billing AP', '/cpq-admin-vs-cpq-billing-ap'],
  ['Data Cloud vs CRM Analytics', '/data-cloud-vs-crm-analytics'],
  ['Data Cloud vs Marketing Cloud', '/data-cloud-vs-marketing-cloud'],
  ['Education Cloud vs Nonprofit Cloud Consultant', '/education-cloud-vs-nonprofit-cloud-consultant'],
  ['Field Service vs Service Cloud Consultant', '/field-service-vs-service-cloud-consultant'],
  ['System Architect vs Application Architect', '/system-architect-vs-application-architect'],
  ['UX Designer vs Strategy Designer', '/ux-designer-vs-strategy-designer'],
]

function entry(t: string, u: string, g: string, extraKeywords = '', d?: string): SearchEntry {
  return { t, u, g, k: `${t} ${extraKeywords}`.toLowerCase().replace(/\s+/g, ' ').trim(), ...(d ? { d } : {}) }
}

/** Built once at build time and served as a static JSON asset. */
export function buildSearchIndex(): SearchEntry[] {
  const roles = roleBySlug()
  const entries: SearchEntry[] = []
  const seen = new Set<string>()

  const push = (e: SearchEntry) => {
    if (seen.has(e.u)) return
    seen.add(e.u)
    entries.push(e)
  }

  // Role hubs
  for (const category of CERTIFICATION_CATEGORIES) {
    push(entry(`${category.name} certifications`, `/certifications/role/${category.slug}`, 'Role', 'role track path'))
  }

  // Certification pages: the highest-value search targets on the site.
  for (const category of CERTIFICATION_CATEGORIES) {
    for (const item of category.items) {
      const slug = item.href.replace('/certifications/', '')
      const official = OFFICIAL_CERT_NAMES[slug]
      const logistics = getExamLogistics(slug)
      const cost = SLUG_TO_EXAM_COST[slug]
      const detail = logistics
        ? `${logistics.questions} questions · ${logistics.passingScore} to pass · ${logistics.duration}${cost ? ` · ${cost}` : ''}`
        : cost
      push(
        entry(
          official || item.name,
          item.href,
          'Certification',
          `${item.name} ${slug.replace(/-/g, ' ')} ${roles.get(slug) || ''} exam practice questions`,
          detail,
        ),
      )
    }
  }

  // Study guides and exam tips, derived from the central maps.
  for (const [slug, href] of Object.entries(SLUG_TO_STUDY_GUIDE)) {
    const name = OFFICIAL_CERT_NAMES[slug] || slug.replace(/-/g, ' ')
    push(entry(`${name} study guide`, href, 'Study guide', `${slug.replace(/-/g, ' ')} notes revision`))
  }
  for (const [slug, href] of Object.entries(SLUG_TO_EXAM_TIPS)) {
    const name = OFFICIAL_CERT_NAMES[slug] || slug.replace(/-/g, ' ')
    push(entry(`${name} exam tips`, href, 'Exam tips', `${slug.replace(/-/g, ' ')} how to pass`))
  }

  for (const [title, href] of COMPARISONS) {
    push(entry(title, href, 'Compare', 'vs versus difference between which'))
  }

  for (const page of STATIC_PAGES) {
    push(entry(page.t, page.u, page.g, page.k || ''))
  }

  return entries
}
