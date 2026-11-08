import { CERTIFICATION_CATEGORIES } from '@/lib/certifications-data'
import { OFFICIAL_CERT_NAMES } from '@/lib/cert-official-names'
import { OFFICIAL_CREDENTIAL_URLS } from '@/lib/official-credential-urls'
import {
  SLUG_TO_DIFFICULTY,
  SLUG_TO_EXAM_COST,
  SLUG_TO_EXAM_GUIDE_URL,
  SLUG_TO_STUDY_GUIDE,
  getExamLogistics,
  getCertMetaDescription,
} from '@/lib/cert-seo-data'
import {
  getCertPrerequisites,
  getRecommendedPrerequisite,
  getRequiredPrerequisites,
} from '@/lib/cert-prerequisites'

export type GridCert = {
  slug: string
  /** Official "Salesforce Certified ..." name, trimmed of the common prefix. */
  name: string
  href: string
  /** Distinct short exam summary shared with this credential's metadata. */
  description: string
  /** Entry-level / Mid-level / Advanced, or null where we have no rating. */
  level: string | null
  cost: string | null
  questions: string | null
  passingScore: string | null
  duration: string | null
  /** "None required", or the prerequisite cert names. */
  prerequisites: string
  studyGuideHref: string | null
  /** Salesforce's own page for this credential, where we have a verified one. */
  officialUrl: string | null
}

export type GridCategory = {
  slug: string
  name: string
  certs: GridCert[]
}

const LEVEL_LABEL: Record<string, string> = {
  easy: 'Entry-level',
  medium: 'Mid-level',
  hard: 'Advanced',
}

/** Drop the shared prefix so card titles are scannable rather than uniform. */
function shortName(slug: string, fallback: string): string {
  const official = OFFICIAL_CERT_NAMES[slug]
  if (!official) return fallback
  return official.replace(/^Salesforce Certified\s+/i, '').trim() || official
}

function prerequisiteLabel(slug: string): string {
  const required = getRequiredPrerequisites(slug)
  if (required.length) {
    return required.map((s) => shortName(s, s.replace(/-/g, ' '))).join(' + ')
  }
  const recommended = getRecommendedPrerequisite(slug)
  if (recommended) return `${shortName(recommended, recommended.replace(/-/g, ' '))} recommended`
  // Application Architect and System Architect are awarded for passing four
  // component exams rather than one of their own, so "None required" would be
  // plainly wrong for them. The presence of `notes` alone does not mean that
  // — the Tableau entries use notes to say "good starting point" — so match
  // the phrase those two share instead.
  if (/component-exam list/i.test(getCertPrerequisites(slug)?.notes ?? '')) {
    return 'See component exams'
  }
  return 'None required'
}

/**
 * Every certification, grouped by role, with the facts worth comparing at a
 * glance. Built at module scope so the homepage renders it statically and
 * every card is a real link in the HTML.
 *
 * Practice-test aliases are excluded: they are noindex duplicates that
 * canonicalise to their parent certification.
 */
export function getCertificationGrid(): GridCategory[] {
  const seen = new Set<string>()
  const categories: GridCategory[] = []

  for (const category of CERTIFICATION_CATEGORIES) {
    const certs: GridCert[] = []
    for (const item of category.items) {
      const slug = item.href.replace('/certifications/', '')
      if (slug.endsWith('-practice-test')) continue
      // A certification listed under two roles belongs to the first one.
      if (seen.has(slug)) continue
      seen.add(slug)

      const logistics = getExamLogistics(slug)
      const difficulty = SLUG_TO_DIFFICULTY[slug]
      certs.push({
        slug,
        name: shortName(slug, item.name),
        href: item.href,
        description: getCertMetaDescription(slug),
        level: difficulty ? LEVEL_LABEL[difficulty] : null,
        cost: SLUG_TO_EXAM_COST[slug] ?? null,
        questions: logistics ? String(logistics.questions) : null,
        passingScore: logistics?.passingScore ?? null,
        duration: logistics?.duration ?? null,
        prerequisites: prerequisiteLabel(slug),
        studyGuideHref: SLUG_TO_STUDY_GUIDE[slug] ?? null,
        officialUrl: OFFICIAL_CREDENTIAL_URLS[slug] ?? SLUG_TO_EXAM_GUIDE_URL[slug] ?? null,
      })
    }
    if (certs.length) categories.push({ slug: category.slug, name: category.name, certs })
  }

  return categories
}
