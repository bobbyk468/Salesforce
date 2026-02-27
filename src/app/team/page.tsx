import type { Metadata } from 'next'
import Link from 'next/link'
import { CONTACT_EMAIL, SITE_NAME } from '@/lib/constants'
import { getWebPageJsonLd, getBreadcrumbListJsonLd } from '@/lib/schema-data'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const pageTitle = `Editorial Team | ${SITE_NAME}`
const pageDescription =
  'Trailblaze Prep content is written and reviewed by Salesforce-certified practitioners. Learn about our editorial team, review process, and accuracy standards.'

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${baseUrl}/team` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'website',
    url: `${baseUrl}/team`,
    siteName: 'Trailblaze Prep',
    images: [{ url: `${baseUrl}/og?t=${encodeURIComponent(pageTitle)}`, width: 1200, height: 630, alt: pageTitle }],
  },
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Team', url: '/team' },
]

export default function TeamPage() {
  const webPageJsonLd = getWebPageJsonLd({
    name: pageTitle,
    description: pageDescription,
    path: '/team',
    breadcrumbItems,
  })
  const breadcrumbJsonLd = getBreadcrumbListJsonLd(breadcrumbItems)

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <h1 className="text-3xl font-bold text-gray-900 mb-6">Trailblaze Prep Editorial Team</h1>

      <section className="space-y-4 text-gray-700 mb-8">
        <p>
          Our content is reviewed by Salesforce-certified practitioners with hands-on implementation and exam preparation experience across administrator, developer, consultant, and architect tracks.
        </p>
        <p>
          Every certification guide is mapped to official exam objectives, then reviewed for clarity, technical accuracy, and release alignment before publication.
        </p>
      </section>

      <section className="space-y-3 mb-8">
        <h2 className="text-xl font-semibold text-gray-900">How we verify content</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1.5">
          <li>Outline alignment against official Salesforce certification guides.</li>
          <li>Peer review for sample questions and answer explanations.</li>
          <li>Release-cycle checks for objective and terminology changes.</li>
          <li>No braindumps, leaked questions, or copied exam content.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-900">Contact the editorial team</h2>
        <p className="text-gray-700">
          Send corrections or feedback to{' '}
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-salesforce-blue font-medium hover:underline">
            {CONTACT_EMAIL}
          </a>
          .
        </p>
        <p className="text-gray-700">
          You can also read our methodology on the{' '}
          <Link href="/about" className="text-salesforce-blue font-medium hover:underline">
            About page
          </Link>
          .
        </p>
      </section>
    </div>
  )
}
