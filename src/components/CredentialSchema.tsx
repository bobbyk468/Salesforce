import { isRetiredCredential, hasUnverifiedClaudeExamDetails } from '@/lib/credential-status'

const SITE_URL = 'https://www.trailblazeprep.com'

interface Props {
  certSlug: string    // key in cert-insights-data.ts e.g. "adm-201"
  certName: string    // display name e.g. "Salesforce Administrator"
  description: string // page meta description
  pageUrl: string     // e.g. "/adm-201-study-guide"
}

export default function CredentialSchema({ certSlug, certName, description, pageUrl }: Props) {
  if (isRetiredCredential(certSlug) || hasUnverifiedClaudeExamDetails(certSlug)) return null
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOccupationalCredential',
    name: `${certName} Certification`,
    description,
    url: `${SITE_URL}${pageUrl}`,
    credentialCategory: 'certification',
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
