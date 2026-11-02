import { getCertPrimaryName } from './cert-name-aliases'
import { OFFICIAL_CERT_NAMES } from './cert-official-names'
import { EXAM_CODE_TITLE_LABELS, getRecognizedExamCode } from './certification-exam-codes'
import { RELEASE_YEAR } from './release-data'

// A calendar label does not assert that every issuer exam uses this release.
const TITLE_YEAR = RELEASE_YEAR
const MAX_TITLE_LENGTH = 60

function clampTitle(title: string): string {
  return title.length <= MAX_TITLE_LENGTH ? title : `${title.slice(0, MAX_TITLE_LENGTH - 1)}…`
}

function compactStudyGuideLabel(label: string): string {
  return label
    .replace(/^Salesforce Certified\s+/i, '')
    .replace(/^Salesforce\s+/i, '')
    .replace(/\s+and\s+/gi, ' & ')
    .replace(/Marketing Cloud Account Engagement/gi, 'Account Engagement')
    .replace(/Marketing Cloud Engagement/gi, 'MC Engagement')
    .replace(/Marketing Cloud Advanced Cross Channel/gi, 'MC Advanced Cross Channel')
    .replace(/Marketing Cloud Intelligence/gi, 'MC Intelligence')
    .replace(/Marketing Cloud Personalization/gi, 'MC Personalization')
    .replace(/Agentforce Field Service/gi, 'Field Service')
    .replace(/Identity & Access Management/gi, 'Identity & Access Mgmt')
    .replace(/Development Lifecycle & Deployment/gi, 'Dev Lifecycle & Deployment')
    .replace(/\s{2,}/g, ' ')
    .trim()
}

function boundedStudyGuideTitle(label: string, code?: string): string {
  const prefix = code ? `${code} ` : ''
  const labels = [...new Set([label, compactStudyGuideLabel(label)])]
  const candidates = [
    ...labels.map((value) => `${prefix}${value} Study Guide [${TITLE_YEAR}]`),
    ...labels.map((value) => `${prefix}${value} Study Guide`),
  ]
  const title = candidates.find((candidate) => candidate.length <= MAX_TITLE_LENGTH)
  if (title) return title

  const suffix = 'Study Guide'
  const maxLabelLength = MAX_TITLE_LENGTH - prefix.length - suffix.length - 1
  const shortened = compactStudyGuideLabel(label).slice(0, maxLabelLength).trimEnd()
  const lastSpace = shortened.lastIndexOf(' ')
  const readable = lastSpace > 12 ? shortened.slice(0, lastSpace) : shortened
  return `${prefix}${readable.trimEnd()} ${suffix}`
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
  const examCode = getRecognizedExamCode(slug)
  const codeLabel = EXAM_CODE_TITLE_LABELS[slug]
  if (examCode && codeLabel) return boundedStudyGuideTitle(codeLabel, examCode)

  // Overrides for cert names that are too long for the default format.
  const overrides: Record<string, string> = {
    'crm-analytics-einstein-discovery-consultant': `CRM Analytics Study Guide [${TITLE_YEAR}]`,
    'identity-access-management-architect': `Identity & Access Mgmt Architect Study Guide [${TITLE_YEAR}]`,
    'dev-lifecycle-deployment-architect': `Dev Lifecycle & Deployment Arch Study Guide [${TITLE_YEAR}]`,
    'marketing-cloud-engagement-foundations': `MC Engagement Foundations Study Guide [${TITLE_YEAR}]`,
    'marketing-cloud-engagement-developer': `MC Engagement Developer Study Guide [${TITLE_YEAR}]`,
    'pardot-consultant': `Pardot Consultant Study Guide [${TITLE_YEAR}]`,
    'pardot-specialist': `Pardot Specialist Study Guide [${TITLE_YEAR}]`,
  }
  if (overrides[slug] && overrides[slug].length <= MAX_TITLE_LENGTH) return overrides[slug]

  const official = getCertPrimaryName(slug, getShortCertLabel(slug))
  const short =
    official
      .replace(/^Salesforce Certified\s+/i, '')
      .replace(/\s*Certification\s*/i, ' ')
      .trim() || getShortCertLabel(slug)

  return boundedStudyGuideTitle(short)
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
