import Link from 'next/link'
import { Metadata } from 'next'
import { getWebPageJsonLd, getBreadcrumbListJsonLd } from '@/lib/schema-data'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const ogImageUrl = `${baseUrl}/og?t=Terms%20of%20Use%20%7C%20Trailblaze%20Prep`

export const metadata: Metadata = {
  title: { absolute: 'Terms of Use | Trailblaze Prep' },
  description:
    'Terms of use for Trailblaze Prep, an independent Salesforce certification preparation resource. Use of practice questions and study materials.',
  alternates: { canonical: `${baseUrl}/terms` },
  openGraph: {
    title: 'Terms of Use | Trailblaze Prep',
    description:
      'Terms of use for Trailblaze Prep, an independent Salesforce certification preparation resource. Use of practice questions and study materials.',
    type: 'website',
    url: `${baseUrl}/terms`,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: 'Terms of Use | Trailblaze Prep' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms of Use | Trailblaze Prep',
    description:
      'Terms of use for Trailblaze Prep, an independent Salesforce certification preparation resource. Use of practice questions and study materials.',
    images: [{ url: ogImageUrl, alt: 'Terms of Use | Trailblaze Prep' }],
  },
  robots: {
    index: true,
    follow: true,
  },
}

const termsBreadcrumb = [{ name: 'Home', url: '/' }, { name: 'Terms of Use', url: '/terms' }]

export default function TermsPage() {
  const webPageJsonLd = getWebPageJsonLd({
    name: 'Terms of Use | Trailblaze Prep',
    description:
      'Terms of use for Trailblaze Prep, an independent Salesforce certification preparation resource. Use of practice questions and study materials.',
    path: '/terms',
    breadcrumbItems: termsBreadcrumb,
  })
  const breadcrumbJsonLd = getBreadcrumbListJsonLd(termsBreadcrumb)
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <div data-lcp-header>
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Terms of Use</h1>
      </div>
      <p className="text-gray-600 mb-6">
        Last updated: {new Date().toLocaleDateString('en-US')}
      </p>
      <div className="prose prose-gray max-w-none space-y-4 text-gray-700">
        <p>
          By using this site, you agree to use it only for lawful purposes and in line with these terms.
          This site is an independent prep resource. It is not affiliated with, endorsed by, or sponsored by Salesforce, Inc.
        </p>
        <p>
          <strong>Trademark notice:</strong> Salesforce, Trailblazer, Trailhead, and other Salesforce marks are trademarks of salesforce.com, inc.
          "Trailblaze Prep" is not affiliated with or endorsed by Salesforce’s Trailblazer program or Trailhead.
          We use certification names only to describe the exams we help you prepare for.
        </p>
        <p>
          Our practice questions and study materials help you prepare for Salesforce certification exams.
          They are exam-style materials aligned with official outlines. They are not braindumps or real exam content.
        </p>
        <p>
          For full terms, contact us at the email in the footer. We may update these terms at any time.
        </p>
      </div>
      <p className="mt-8">
        <Link href="/" className="text-salesforce-blue hover:text-salesforce-dark font-medium">
          ← Back to Home
        </Link>
      </p>
    </div>
  )
}
