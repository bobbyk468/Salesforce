import { CERTIFICATION_CATEGORIES } from '@/lib/certifications-data'
import { OFFICIAL_CERT_NAMES } from '@/lib/cert-official-names'
import { OFFICIAL_CREDENTIAL_URLS } from '@/lib/official-credential-urls'
import { getRecognizedExamCode } from '@/lib/certification-exam-codes'
import { getCertAlias } from '@/lib/cert-alias-registry'
import {
  SLUG_TO_DIFFICULTY,
  SLUG_TO_EXAM_COST,
  SLUG_TO_EXAM_GUIDE_URL,
  SLUG_TO_STUDY_GUIDE,
  getPublishedExamFacts,
  getCertMetaDescription,
} from '@/lib/cert-seo-data'
import { getCredentialCardNote, isComponentOnlyCredential } from '@/lib/credential-status'
import {
  getCertPrerequisites,
  getRecommendedPrerequisite,
  getRequiredPrerequisites,
} from '@/lib/cert-prerequisites'

export type GridCert = {
  slug: string
  /** Official "Salesforce Certified ..." name, trimmed of the common prefix. */
  name: string
  examCode: string | null
  href: string
  /** Distinct short exam summary shared with this credential's metadata. */
  description: string
  /** Entry-level / Mid-level / Advanced, or null where we have no rating. */
  level: string | null
  cost: string | null
  questions: string | null
  passingScore: string | null
  duration: string | null
  /** Short retirement status, e.g. "Exam closed Aug 31, 2026; retires Feb 1, 2027". */
  statusNote: string | null
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
  const official = getCertAlias(slug)?.bare ?? OFFICIAL_CERT_NAMES[slug]
  if (!official) return fallback
  return official.replace(/^Salesforce Certified\s+/i, '').trim() || official
}

function prerequisiteLabel(slug: string): string {
  const required = getRequiredPrerequisites(slug)
  if (required.length) {
    return required.map((s) => shortName(s, s.replace(/-/g, ' '))).join(' + ')
  }
  const recommended = getRecommendedPrerequisite(slug)
  // The guide says "Prerequisite: None". Say so first; a recommendation is
  // secondary and must not read as a requirement.
  if (getCertPrerequisites(slug)?.noPrerequisite) return 'None required'
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
 * Fee as shown on a card. Application Architect and System Architect have no
 * exam of their own, so a single-exam price would be wrong; the Technical
 * Architect card shows both stages because a candidate pays for both.
 */
function gridCost(slug: string): string | null {
  if (isComponentOnlyCredential(slug)) return 'Composite ($0; 4 component exams)'
  if (slug === 'technical-architect') return '$6,000 ($1,500 Eval + $4,500 Board)'
  const cost = SLUG_TO_EXAM_COST[slug]
  if (!cost) return null
  const retake = getPublishedExamFacts(slug)?.retake
  return retake ? `${cost} (${retake === 'Free' ? 'free retake' : `Retake ${retake}`})` : cost
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

      const logistics = getPublishedExamFacts(slug)
      const difficulty = SLUG_TO_DIFFICULTY[slug]
      certs.push({
        slug,
        name: shortName(slug, item.name),
        examCode: (() => {
          const alias = getCertAlias(slug)
          return alias
            ? [alias.code, ...(alias.legacy ?? [])].filter(Boolean).join(' / ')
            : getRecognizedExamCode(slug) ?? null
        })(),
        href: item.href,
        description: getCertMetaDescription(slug),
        level: difficulty ? LEVEL_LABEL[difficulty] : null,
        cost: gridCost(slug),
        statusNote: getCredentialCardNote(slug) ?? null,
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
