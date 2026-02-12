import Link from 'next/link'
import { Metadata } from 'next'
import { getWebPageJsonLd, getBreadcrumbListJsonLd } from '@/lib/schema-data'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'

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
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms of Use | Trailblaze Prep',
    description:
      'Terms of use for Trailblaze Prep, an independent Salesforce certification preparation resource. Use of practice questions and study materials.',
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
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Terms of Use</h1>
      <p className="text-gray-600 mb-6">
        Last updated: {new Date().toLocaleDateString('en-US')}
      </p>
      <div className="prose prose-gray max-w-none space-y-4 text-gray-700">
        <p>
          By using this site, you agree to use it only for lawful purposes and in accordance with these terms.
          This site is an independent preparation resource and is not affiliated with, endorsed by, or sponsored by Salesforce, Inc.
        </p>
        <p>
          <strong>Trademark Notice:</strong> Salesforce, Trailblazer, Trailhead, and all other Salesforce marks are trademarks of salesforce.com, inc. "Trailblaze Prep" is not affiliated with or endorsed by Salesforce's Trailblazer program or Trailhead. Our use of Salesforce certification names is for descriptive purposes only to identify the certifications we help prepare for.
        </p>
        <p>
          Our practice questions and study materials are designed to help you prepare for Salesforce certification exams.
          They are exam-style practice materials aligned with official exam outlines—not braindumps or real exam content.
        </p>
        <p>
          For full terms, contact us at the email in the footer. We reserve the right to update these terms at any time.
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
