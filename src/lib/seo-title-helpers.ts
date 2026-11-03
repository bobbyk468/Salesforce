import { getCertPrimaryName } from './cert-name-aliases'
import { OFFICIAL_CERT_NAMES } from './cert-official-names'
import { EXAM_CODE_TITLE_LABELS, getRecognizedExamCode } from './certification-exam-codes'
import { RELEASE_YEAR } from './release-data'

// A calendar label does not assert that every issuer exam uses this release.
const TITLE_YEAR = RELEASE_YEAR
const MAX_TITLE_LENGTH = 60
const MIN_TITLE_LENGTH = 50

/** Add a useful qualifier to short titles while keeping the phrase complete. */
export function completeSeoTitle(title: string, qualifiers = ['Exam Prep', 'Study Guide']): string {
  const clean = title.replace(/\s+/g, ' ').trim()
  if (clean.length >= MIN_TITLE_LENGTH && clean.length <= MAX_TITLE_LENGTH) return clean
  if (clean.length < MIN_TITLE_LENGTH) {
    if (/Study Guide/i.test(clean) && !/\b(?:Exam|Certification) Study Guide/i.test(clean)) {
      for (const phrase of ['Exam Study Guide', 'Certification Study Guide']) {
        const candidate = clean.replace(/Study Guide/i, phrase)
        if (candidate.length >= MIN_TITLE_LENGTH && candidate.length <= MAX_TITLE_LENGTH) return candidate
      }
    }
    const suffixes = /Study Guide/i.test(clean)
      ? ['& Topics', '& Exam Topics', 'for Exam Preparation']
      : /Practice Exam/i.test(clean)
        ? ['& Prep', '& Exam Guide', '& Study Guide', 'with Exam Topics']
        : /Exam Tips/i.test(clean)
          ? ['& Plan', '& Study Plan', 'and Practice']
          : /Cert Path|Certification Path/i.test(clean)
            ? ['& Roadmap', '& Career Roadmap', 'for Certification Study']
            : qualifiers.map((qualifier) => `| ${qualifier}`)
    for (const qualifier of [...suffixes, ...qualifiers]) {
      const candidate = `${clean} ${qualifier}`
      if (candidate.length >= MIN_TITLE_LENGTH && candidate.length <= MAX_TITLE_LENGTH) return candidate
    }
    return clean
  }
  return clean
}

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

/**
 * Tableau, Slack and Claude run their own certification programmes, so the
 * "Salesforce" qualifier would be wrong on those guides.
 */
function acceptsSalesforceQualifier(label: string): boolean {
  return !/^(?:Salesforce|Tableau|Slack|Claude)\b/i.test(label)
}

function boundedStudyGuideTitle(label: string, code?: string): string {
  const prefix = code ? `${code} ` : ''
  const labels = [...new Set([label, compactStudyGuideLabel(label)])]
  // These titles ran well short of the 60-character limit because the shortest
  // fitting variant won. Spend the space on the "Salesforce" qualifier first,
  // which is how people search, then fall back to the previous behaviour. The
  // code prefix has to stay first where there is one.
  const qualified =
    !code && acceptsSalesforceQualifier(label) ? [`Salesforce ${label}`, ...labels] : labels
  const candidates = [
    ...qualified.map((value) => `${prefix}${value} Study Guide [${TITLE_YEAR}]`),
    ...qualified.map((value) => `${prefix}${value} Study Guide`),
  ]
  const title = candidates.find((candidate) => candidate.length <= MAX_TITLE_LENGTH)
  if (title) return completeSeoTitle(title, ['Certification Exam Prep', 'Exam & Study Guide'])

  const suffix = 'Study Guide'
  const maxLabelLength = MAX_TITLE_LENGTH - prefix.length - suffix.length - 1
  const shortened = compactStudyGuideLabel(label).slice(0, maxLabelLength).trimEnd()
  const lastSpace = shortened.lastIndexOf(' ')
  const readable = lastSpace > 12 ? shortened.slice(0, lastSpace) : shortened
  return completeSeoTitle(`${prefix}${readable.trimEnd()} ${suffix}`, ['Certification Exam Prep'])
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
  const compact = compactStudyGuideLabel(short)
  const code = getRecognizedExamCode(slug)
  const candidates = [
    `Free ${short} Practice Exam (${TITLE_YEAR})`,
    `Free ${compact} Practice Exam (${TITLE_YEAR})`,
    code ? `${code} ${compact} Practice Exam ${TITLE_YEAR}` : '',
    `Free ${compact} Exam Practice & Study Guide (${TITLE_YEAR})`,
  ].filter(Boolean)
  return candidates.find((candidate) => candidate.length >= MIN_TITLE_LENGTH && candidate.length <= MAX_TITLE_LENGTH)
    ?? candidates.find((candidate) => candidate.length <= MAX_TITLE_LENGTH)
    ?? `Free ${compact} Exam Practice (${TITLE_YEAR})`
}

/** Outcome‑oriented title for `[slug]-exam-tips` pages. */
export function buildExamTipsTitle(slug: string): string {
  if (slug === 'ai-associate') return 'AI Associate (Retired): Historical Exam Tips & Notes'
  if (slug === 'education-cloud-consultant') return 'Education Cloud Consultant: Archived Exam Tips & Guide'

  const official = getCertPrimaryName(slug, getShortCertLabel(slug))
  const short =
    official
      .replace(/^Salesforce Certified\s+/i, '')
      .replace(/\s*Certification\s*/i, ' ')
      .trim() || getShortCertLabel(slug)

  const compact = compactStudyGuideLabel(short)
    .replace(/^Accredited\s+/i, '')
    .replace(/\s+Accredited Professional\b/gi, ' AP')
    .replace(/\s+Professional\b/gi, ' AP')
    .replace(/\bPlatform\s+/gi, '')
    .replace(/\bMarketing Cloud\b/gi, 'MC')
    .replace(/\bAgentforce 360 for Public Sector\b/gi, 'Public Sector Solutions')
    .replace(/\bAgentforce\s+/gi, '')
    .replace(/\bDevelopment Lifecycle\b/gi, 'Dev Lifecycle')
    .replace(/\bIdentity and Access Management\b/gi, 'Identity & Access')
    .replace(/\bSharing and Visibility\b/gi, 'Sharing & Visibility')
    .replace(/\bTechnical Architect - Architect\b/gi, 'CTA')
    .replace(/\s{2,}/g, ' ')
    .trim()
  const conciseLabels: Record<string, string> = {
    'slack-developer': 'Slack Certified Developer',
    'crm-analytics-einstein-discovery-consultant': 'CRM Analytics Consultant',
    'marketing-cloud-engagement-foundations': 'MC Engagement Foundations',
    'nonprofit-success-pack-consultant': 'NPSP Consultant',
    'advanced-field-service-ap': 'Advanced Field Service AP',
    'b2b-commerce-developer-ap': 'B2B Commerce Developer AP',
    'consumer-goods-tpm-ap': 'Consumer Goods TPM AP',
    'health-cloud-ap': 'Agentforce Health AP',
    'manufacturing-cloud-ap': 'Agentforce Manufacturing AP',
    'consumer-goods-cloud-ap': 'Agentforce Consumer Goods AP',
    'communications-cloud-ap': 'Agentforce Communications AP',
  }
  const examCode = getRecognizedExamCode(slug)
  const names = [...new Set([short, conciseLabels[slug], compact, examCode ? `${examCode} ${compact}` : ''].filter(Boolean))]
  const candidates = names.flatMap((name) => [
    `How to Pass ${name}: Exam Tips & Study Plan`,
    `How to Pass ${name}: Exam Tips and Practice`,
    `How to Pass ${name}: Exam Tips`,
    `${name}: Exam Tips & Study Plan`,
    `${name}: Exam Tips and Practice`,
    `${name}: Exam Tips & Practice Plan`,
    `${name} Exam Tips: Study Plan & Practice Questions`,
    `${name} Exam Tips, Study Plan & Practice Questions`,
    `How to Pass the ${name} Exam: Tips & Study Plan`,
    `Study for the ${name} Exam: Tips & Practice Questions`,
    `${name} Certification Exam Tips & Study Plan`,
  ])
  const title = candidates.find((candidate) => candidate.length >= MIN_TITLE_LENGTH && candidate.length <= MAX_TITLE_LENGTH)
  if (title) return title
  throw new Error(`No complete exam tips title fits ${slug}`)
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
  if (overrides[slug] && overrides[slug].length <= MAX_TITLE_LENGTH) {
    return completeSeoTitle(overrides[slug], ['Certification Exam Prep', 'Exam & Study Guide'])
  }

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
  if (aSlug === 'developer-1' && bSlug === 'developer-2') {
    return 'PD1 vs PD2: Which Salesforce Developer Cert First?'
  }
  const a = getShortCertLabel(aSlug)
  const b = getShortCertLabel(bSlug)
  const aCompact = compactStudyGuideLabel(a)
  const bCompact = compactStudyGuideLabel(b)
  const candidates = [
    `${a} vs ${b}: Which Cert First? (Salary & Diff)`,
    `${aCompact} vs ${bCompact}: Which Cert First? (Salary & Diff)`,
    `${aCompact} vs ${bCompact}: Which Certification First?`,
    `${aCompact} vs ${bCompact}: Exam & Career Comparison`,
  ]
  return candidates.find((candidate) => candidate.length >= MIN_TITLE_LENGTH && candidate.length <= MAX_TITLE_LENGTH)
    ?? candidates.find((candidate) => candidate.length <= MAX_TITLE_LENGTH)
    ?? `${aCompact} vs ${bCompact}: Compare Certifications`
}

/** Role path titles like `/admin-certification-path`. */
export function buildPathTitle(roleLabel: string): string {
  const candidates = [
    `Salesforce ${roleLabel} Cert Path: ${TITLE_YEAR} Roadmap`,
    `Salesforce ${roleLabel} Certification Roadmap & Career Guide`,
    `Salesforce ${roleLabel} Cert Roadmap & Exam Study Guide`,
  ]
  return candidates.find((candidate) => candidate.length >= MIN_TITLE_LENGTH && candidate.length <= MAX_TITLE_LENGTH)
    ?? candidates.find((candidate) => candidate.length <= MAX_TITLE_LENGTH)
    ?? `Salesforce ${roleLabel} Certification Roadmap`
}
