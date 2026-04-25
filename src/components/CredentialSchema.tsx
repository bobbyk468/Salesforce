import { getCertInsight, DIFFICULTY_LABELS } from '@/lib/cert-insights-data'

const SITE_URL = 'https://www.trailblazeprep.com'

function parseSalary(range: string): { min: number; max: number; median: number } | null {
  // Handles en-dash (–), em-dash (—), and hyphen (-)
  const match = range.match(/\$([0-9,]+)[–—\-]+\$([0-9,]+)/)
  if (!match) return null
  const min = parseInt(match[1].replace(/,/g, ''), 10)
  const max = parseInt(match[2].replace(/,/g, ''), 10)
  return { min, max, median: Math.round((min + max) / 2) }
}

interface Props {
  certSlug: string    // key in cert-insights-data.ts e.g. "adm-201"
  certName: string    // display name e.g. "Salesforce Administrator"
  description: string // page meta description
  pageUrl: string     // e.g. "/adm-201-study-guide"
}

export default function CredentialSchema({ certSlug, certName, description, pageUrl }: Props) {
  const insight = getCertInsight(certSlug)

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

  if (insight) {
    const label = DIFFICULTY_LABELS[insight.difficulty]
    schema.educationalLevel = `${label} (${insight.difficulty}/5) — ${insight.difficultyNote}`

    const salary = parseSalary(insight.salaryRange)
    if (salary) {
      schema.about = {
        '@type': 'Occupation',
        name: certName,
        estimatedSalary: {
          '@type': 'MonetaryAmountDistribution',
          name: `US average annual salary for ${certName} certified professionals`,
          currency: 'USD',
          duration: 'P1Y',
          percentile10: salary.min,
          median: salary.median,
          percentile90: salary.max,
        },
        occupationLocation: {
          '@type': 'Country',
          name: 'United States',
        },
      }
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
