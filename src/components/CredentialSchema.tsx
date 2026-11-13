import { isRetiredCredential, hasUnverifiedClaudeExamDetails } from '@/lib/credential-status'
import { getCertFormerName } from '@/lib/cert-name-aliases'
import { LEGACY_EXAM_CODES, SLUG_TO_EXAM_CODE } from '@/lib/certification-exam-codes'

const SITE_URL = 'https://www.trailblazeprep.com'

interface Props {
  certSlug: string    // key in cert-insights-data.ts e.g. "adm-201"
  certName: string    // display name e.g. "Salesforce Administrator"
  description: string // page meta description
  pageUrl: string     // e.g. "/adm-201-study-guide"
  /** Extra alternate names beyond the auto-derived former name and exam code (legacy exam codes, industry nicknames). */
  extraAlternateNames?: string[]
  /** Extra identifiers beyond the auto-derived exam code (legacy exam codes, prep-course codes). */
  extraIdentifiers?: { propertyID: string; value: string }[]
}

export default function CredentialSchema({ certSlug, certName, description, pageUrl, extraAlternateNames, extraIdentifiers }: Props) {
  if (isRetiredCredential(certSlug) || hasUnverifiedClaudeExamDetails(certSlug)) return null

  const formerName = getCertFormerName(certSlug)
  const examCode = SLUG_TO_EXAM_CODE[certSlug]
  const legacyCode = LEGACY_EXAM_CODES[certSlug]

  const alternateName = [...new Set([...(extraAlternateNames ?? []), formerName, examCode, legacyCode].filter((v): v is string => Boolean(v)))]
  // An explicit 'Exam Code' in extraIdentifiers replaces the auto-derived one,
  // so a page can state the current code and list the legacy code separately.
  const hasExplicitCode = (extraIdentifiers ?? []).some((id) => id.propertyID === 'Exam Code')
  const identifier = [
    ...(examCode && !hasExplicitCode ? [{ '@type': 'PropertyValue', propertyID: 'Exam Code', value: examCode }] : []),
    ...(legacyCode ? [{ '@type': 'PropertyValue', propertyID: 'Legacy Exam Code', value: legacyCode }] : []),
    ...(extraIdentifiers ?? []).map((id) => ({ '@type': 'PropertyValue', ...id })),
  ]

  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOccupationalCredential',
    name: `${certName} Certification`,
    description,
    url: `${SITE_URL}${pageUrl}`,
    credentialCategory: 'certification',
    ...(alternateName.length ? { alternateName } : {}),
    ...(identifier.length ? { identifier } : {}),
    recognizedBy: {
      '@type': 'Organization',
      name: 'Salesforce',
      url: 'https://www.salesforce.com',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
