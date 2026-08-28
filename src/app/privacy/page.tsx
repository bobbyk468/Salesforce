import Link from 'next/link'
import { Metadata } from 'next'
import { getWebPageJsonLd, getBreadcrumbListJsonLd } from '@/lib/schema-data'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const ogImageUrl = `${baseUrl}/og?t=Privacy%20Policy%20%7C%20Trailblaze%20Prep`

export const metadata: Metadata = {
  title: { absolute: 'Privacy Policy | Trailblaze Prep' },
  description:
    'Privacy policy for Trailblaze Prep, an independent Salesforce certification preparation resource. How we handle your data and contact information.',
  alternates: { canonical: `${baseUrl}/privacy` },
  openGraph: {
    title: 'Privacy Policy | Trailblaze Prep',
    description:
      'Privacy policy for Trailblaze Prep, an independent Salesforce certification preparation resource. How we handle your data and contact information.',
    type: 'website',
    url: `${baseUrl}/privacy`,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: 'Privacy Policy | Trailblaze Prep' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | Trailblaze Prep',
    description:
      'Privacy policy for Trailblaze Prep, an independent Salesforce certification preparation resource. How we handle your data and contact information.',
    images: [{ url: ogImageUrl, alt: 'Privacy Policy | Trailblaze Prep' }],
  },
}

const privacyBreadcrumb = [{ name: 'Home', url: '/' }, { name: 'Privacy Policy', url: '/privacy' }]

export default function PrivacyPage() {
  const webPageJsonLd = getWebPageJsonLd({
    name: 'Privacy Policy | Trailblaze Prep',
    description:
      'Privacy policy for Trailblaze Prep, an independent Salesforce certification preparation resource. How we handle your data and contact information.',
    path: '/privacy',
    breadcrumbItems: privacyBreadcrumb,
  })
  const breadcrumbJsonLd = getBreadcrumbListJsonLd(privacyBreadcrumb)
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <div data-lcp-header>
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
      </div>
      <p className="text-gray-600 mb-6">
        Last updated: {new Date().toLocaleDateString('en-US')}
      </p>
      <div className="prose prose-gray max-w-none space-y-4 text-gray-700">
        <p>
          We respect your privacy. When you contact us, we use your details only to respond.
        </p>
        <p>
          Trailblaze Prep is a certification preparation website. Most pages can be read without creating an account,
          submitting personal information, or sharing payment details with us. If you choose to contact us, the information
          you provide may include your name, email address, exam interest, and the message you send. We use that information
          to answer your question, provide study-material guidance, or follow up on a request you initiated.
        </p>
        <p>
          We do not sell your data. We may use cookies for site use. We do not use them for ad tracking without your consent.
        </p>
        <p>
          We may review aggregated site analytics to understand which certification pages, study guides, and practice-question
          resources are useful to visitors. Those analytics help us improve navigation, page speed, and content accuracy. They
          are not used to publish personal profiles or identify individual candidates.
        </p>
        <p>
          If you ask us to correct, update, or remove contact information you previously submitted, we will make reasonable
          efforts to honor that request. We keep contact records only as long as needed to respond, manage support history, or
          satisfy basic operational requirements.
        </p>
        <p className="text-sm bg-gray-50 p-4 rounded-lg border border-gray-200">
          <strong>Trademark notice:</strong> This site is not affiliated with Salesforce, Inc.
          Salesforce, Trailblazer, Trailhead, and other Salesforce marks are trademarks of salesforce.com, inc.
          "Trailblaze Prep" is independent and not endorsed by or affiliated with Salesforce’s Trailblazer program.
        </p>
        <p>
          For questions about this policy, contact us at the email in the footer.
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
