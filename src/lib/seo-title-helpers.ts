import { getCertPrimaryName } from './cert-name-aliases'
import { OFFICIAL_CERT_NAMES } from './cert-official-names'
import { RELEASE_CURRENT } from './release-data'

const TITLE_YEAR = RELEASE_CURRENT
const MAX_TITLE_LENGTH = 60

function clampTitle(title: string): string {
  return title.length <= MAX_TITLE_LENGTH ? title : `${title.slice(0, MAX_TITLE_LENGTH - 1)}…`
}

function getShortCertLabel(slug: string): string {
  // Prefer official name, then humanised slug.
  const official = OFFICIAL_CERT_NAMES[slug]
  if (official) {
    // Remove leading "Salesforce Certified" to save pixels.
    return official.replace(/^Salesforce Certified\s+/i, '').trim()
  }
  return slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')
}

/** Transactional hub title for `/certifications/[slug]`. */
export function buildCertHubTitle(slug: string): string {
  const short = getShortCertLabel(slug)
  const base = `Free ${short} Practice Exam (${TITLE_YEAR})`
  return clampTitle(base)
}

/** Outcome‑oriented title for `[slug]-exam-tips` pages. */
export function buildExamTipsTitle(slug: string): string {
  const official = getCertPrimaryName(slug, getShortCertLabel(slug))
  const short =
    official
      .replace(/^Salesforce Certified\s+/i, '')
      .replace(/\s*Certification\s*/i, ' ')
      .trim() || getShortCertLabel(slug)

  const base = `How to Pass ${short}: 3 Concepts Candidates Fail`
  return clampTitle(base)
}

/** Authority‑framed title for `[slug]-study-guide` pages. */
export function buildStudyGuideTitle(slug: string): string {
  const official = getCertPrimaryName(slug, getShortCertLabel(slug))
  const short =
    official
      .replace(/^Salesforce Certified\s+/i, '')
      .replace(/\s*Certification\s*/i, ' ')
      .trim() || getShortCertLabel(slug)

  const base = `${short} Study Guide & Prep Roadmap [${TITLE_YEAR}]`
  return clampTitle(base)
}

/** Decision‑support title for `[a]-vs-[b]` pages. */
export function buildVsTitle(aSlug: string, bSlug: string): string {
  const a = getShortCertLabel(aSlug)
  const b = getShortCertLabel(bSlug)
  const base = `${a} vs ${b}: Which Cert First? (Salary & Diff)`
  return clampTitle(base)
}

/** Role path titles like `/admin-certification-path`. */
export function buildPathTitle(roleLabel: string): string {
  const base = `Salesforce ${roleLabel} Cert Path: ${TITLE_YEAR} Roadmap`
  return clampTitle(base)
}

