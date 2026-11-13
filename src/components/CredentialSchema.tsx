import { isRetiredCredential, hasUnverifiedClaudeExamDetails } from '@/lib/credential-status'
import { getCertFormerName } from '@/lib/cert-name-aliases'
import { getRecognizedExamCode } from '@/lib/certification-exam-codes'

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
  const examCode = getRecognizedExamCode(certSlug)

  const alternateName = [...new Set([formerName, examCode, ...(extraAlternateNames ?? [])].filter((v): v is string => Boolean(v)))]
  const identifier = [
    ...(examCode ? [{ '@type': 'PropertyValue', propertyID: 'Exam Code', value: examCode }] : []),
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
