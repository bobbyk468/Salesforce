import { isRetiredCredential, hasUnverifiedClaudeExamDetails } from '@/lib/credential-status'
import { getCertFormerName } from '@/lib/cert-name-aliases'
import { LEGACY_EXAM_CODES, SLUG_TO_EXAM_CODE } from '@/lib/certification-exam-codes'
import { getCertAlias, getCertAlternateNames, getCertIdentifiers } from '@/lib/cert-alias-registry'
import { getCertKeywordCluster } from '@/lib/cert-keyword-clusters'

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
  if (hasUnverifiedClaudeExamDetails(certSlug)) return null

  const formerName = getCertFormerName(certSlug)
  const examCode = SLUG_TO_EXAM_CODE[certSlug]
  const legacyCode = LEGACY_EXAM_CODES[certSlug]

  // When the alias registry knows this credential it supplies the names and
  // codes, the same ones the <title>, H1 and lead use.
  const registered = Boolean(getCertAlias(certSlug))
  // The keyword cluster adds the vendor-prefixed and "Certified" phrasings and
  // the numeral variants, so the credential entity lists every name a searcher
  // types, not only the official one.
  const cluster = getCertKeywordCluster(certSlug)
  const alternateName = [...new Set([
    ...(extraAlternateNames ?? []),
    ...getCertAlternateNames(certSlug),
    ...(cluster?.alternateNames ?? []),
    formerName,
    ...(registered ? [] : [examCode, legacyCode]),
  ].filter((v): v is string => Boolean(v)))]
  // An explicit 'Exam Code' in extraIdentifiers replaces the auto-derived one,
  // so a page can state the current code and list the legacy code separately.
  const hasExplicitCode = (extraIdentifiers ?? []).some((id) => id.propertyID === 'Exam Code')
  const registryIdentifiers = getCertIdentifiers(certSlug)
  const identifier = registryIdentifiers.length
    ? registryIdentifiers.map((id) => ({ '@type': 'PropertyValue', ...id }))
    : [
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
    ...(isRetiredCredential(certSlug) ? { creativeWorkStatus: 'Retired' } : {}),
    ...(alternateName.length ? { alternateName } : {}),
    ...(cluster ? { keywords: cluster.keywords.join(', ') } : {}),
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
