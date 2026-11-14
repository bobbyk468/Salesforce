import type { Metadata } from 'next'
import Link from '@/components/AppLink'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import RelatedGuides from '@/components/RelatedGuides'
import { getRelatedGuides } from '@/lib/related-guides-data'
import { RELEASE_CURRENT } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import LastUpdated from '@/components/LastUpdated'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const pageTitle = `Do Salesforce Certifications Expire? (${RELEASE_CURRENT})`
const metadataTitle = 'Salesforce Certification Validity and Renewal Guide'
const pageDescription = `Learn Salesforce certification validity, what Inactive means, and how maintenance and reactivation keep credentials current.`
export const metadata: Metadata = {
  title: { absolute: metadataTitle },
  description: pageDescription,
  alternates: {
    canonical: `${siteUrl}/salesforce-certification-validity`,
    languages: { 'en-US': `${siteUrl}/salesforce-certification-validity`, 'x-default': `${siteUrl}/salesforce-certification-validity` },
  },
  openGraph: {
    title: metadataTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/salesforce-certification-validity`,
    images: [{ url: `${siteUrl}/og?t=${encodeURIComponent(metadataTitle)}`, width: 1200, height: 630, alt: metadataTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: metadataTitle,
    description: pageDescription,
    images: [{ url: `${siteUrl}/og?t=${encodeURIComponent(metadataTitle)}`, alt: metadataTitle }],
  },
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Salesforce Certification Validity & Expiry', url: '/salesforce-certification-validity' },
]

const faqItems = [
  {
    question: 'Do Salesforce certifications expire?',
    answer: 'Salesforce certifications do not have a permanent expiry date, but they can become Inactive if you miss required maintenance. Salesforce releases platform updates three times a year (Spring, Summer, and Winter) and publishes related Trailhead maintenance modules. If you miss a deadline, your status changes from Active to Inactive. Complete the overdue modules to reactivate your certification.',
  },
  {
    question: 'How long is a Salesforce certification valid?',
    answer: 'Salesforce certifications have no fixed expiry date. They remain valid as long as you complete the required maintenance modules. Modules are free and usually take 20–60 minutes each. Your certification date on Trailhead updates when you complete maintenance for a release.',
  },
  {
    question: 'What is the difference between Active and Inactive certification status?',
    answer: 'Active means you have completed the required maintenance for your certification. Inactive means one or more modules are overdue. While your certification is Inactive, do not describe it as currently active on your resume, LinkedIn profile, or to clients. Employers and clients can see the status on the public Trailhead credential verification page.',
  },
  {
    question: 'How do I reactivate an Inactive Salesforce certification?',
    answer: 'Sign in to Trailhead (trailhead.salesforce.com), open your profile, and select Credentials. Inactive certifications show the outstanding maintenance modules. Complete all overdue modules, which usually take 20–60 minutes each, to restore Active status. Reactivation is free. If maintenance is overdue for several releases, complete every outstanding module.',
  },
  {
    question: 'Do I need to retake the full exam to maintain my certification?',
    answer: 'No. You do not need to retake the full exam. Maintenance means completing short Trailhead modules with quizzes about new features in the latest release. Plan for about 1–3 hours of maintenance per year for each certification category.',
  },
]

export default function SalesforceCertificationValidityPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/salesforce-certification-validity" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />

      <div data-lcp-header className="mb-10">
        <div className="inline-flex items-center gap-2 bg-salesforce-blue/10 text-salesforce-dark text-sm font-semibold px-3 py-1 rounded-full mb-4">

      <ContentPageAuthor />
          <span>Certification Guide</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          Salesforce Certification Validity &amp; Expiry ({RELEASE_CURRENT})
        </h1>
        <LastUpdated />
        <p className="text-lg text-gray-600">
          Salesforce certifications do not expire, but they require maintenance. Here’s exactly how certification validity works and how to keep yours Active.
        </p>
      </div>

      <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-10">
        <h2 className="text-lg font-bold text-green-900 mb-2">Short answer: Certifications have no fixed expiry date</h2>
        <p className="text-sm text-green-800">Salesforce certifications stay Active when you complete the required maintenance badge each year. The badge is released in the Spring, Summer, or Winter cycle assigned to that credential and is due one year after it becomes available.</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
        {[
          { label: 'Fixed Expiry?', value: 'No' },
          { label: 'Maintenance/Year', value: '3×' },
          { label: 'Module Time', value: '20–60 min' },
          { label: 'Reactivation Cost', value: 'Free' },
        ].map((stat) => (
          <div key={stat.label} className="bg-white rounded-xl border border-gray-100 p-4 text-center shadow-sm">
            <div className="text-2xl font-bold text-salesforce-blue">{stat.value}</div>
            <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">How Certification Validity Works</h2>
        <div className="space-y-4 text-sm text-gray-700">
          <p>After you pass a Salesforce certification exam, your Trailhead profile shows the credential as <strong>Active</strong>. The certification itself has no expiry date.</p>
          <p>Salesforce releases three major platform updates each year: <strong>Spring</strong> (Jan/Feb), <strong>Summer</strong> (May/Jun), and <strong>Winter</strong> (Sep/Oct). Trailhead maintenance modules cover changes related to each certification area.</p>
          <p>Complete the required maintenance module within about <strong>30 days</strong> of publication. If you meet the deadline, your status stays Active and your certification date updates. If you miss it, your status changes to <strong>Inactive</strong>.</p>
          <p>Certifications in the same role category, such as Administrator credentials, usually share one maintenance module. You do not need a separate module for every certification you hold.</p>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Active vs Inactive: What It Means</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
          <div className="bg-green-50 rounded-xl p-5 border border-green-100">
            <h3 className="font-bold text-green-900 mb-3">Active Status</h3>
            <ul className="space-y-2 text-green-800">
              <li>✓ Required maintenance modules are complete for the current release</li>
              <li>✓ Certification appears on the public Trailhead verification page</li>
              <li>✓ You can list it as active on your resume and LinkedIn</li>
              <li>✓ It counts toward Salesforce partner certification requirements</li>
              <li>✓ Trailhead displays the certification badge on your profile</li>
            </ul>
          </div>
          <div className="bg-amber-50 rounded-xl p-5 border border-amber-100">
            <h3 className="font-bold text-amber-900 mb-3">Inactive Status</h3>
            <ul className="space-y-2 text-amber-800">
              <li>⚠ One or more maintenance modules are overdue</li>
              <li>⚠ Public Trailhead verification shows it as Inactive</li>
              <li>⚠ Do not list it as currently active on your resume</li>
              <li>⚠ It does not count toward partner certification requirements</li>
              <li>✓ You can reactivate it for free at any time</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">How Salesforce Compares to Other Certifications</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100">
                <th scope="col" className="text-left py-2 pr-4 text-gray-600 font-medium">Certification</th>
                <th scope="col" className="text-left py-2 pr-4 text-gray-600 font-medium">Expiry</th>
                <th scope="col" className="text-left py-2 text-gray-600 font-medium">Renewal requirement</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {[
                { cert: 'Salesforce', expiry: 'No fixed expiry', renewal: '1 short Trailhead badge/year (free, 20–60 min)' },
                { cert: 'AWS', expiry: '3 years', renewal: 'Retake exam or earn higher-level cert' },
                { cert: 'PMP (PMI)', expiry: '3 years', renewal: '60 PDUs of continuing education' },
                { cert: 'Microsoft Azure', expiry: '1 year (role-based)', renewal: 'Free renewal assessment on Microsoft Learn' },
                { cert: 'Google Cloud', expiry: '2 years', renewal: 'Retake exam (same fee)' },
              ].map((row) => (
                <tr key={row.cert}>
                  <td className="py-2 pr-4 text-gray-900 font-medium">{row.cert}</td>
                  <td className="py-2 pr-4 text-gray-700">{row.expiry}</td>
                  <td className="py-2 text-gray-700">{row.renewal}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-600 mt-3">Salesforce maintenance does not require a full exam retake.</p>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
        <dl className="space-y-4">
          {faqItems.map((item) => (
            <div key={item.question} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
              <dt className="font-semibold text-gray-900 mb-1">{item.question}</dt>
              <dd className="text-sm text-gray-700">{item.answer}</dd>
            </div>
          ))}
        </dl>
      </div>

      <RelatedGuides links={getRelatedGuides('salesforce-certification-validity')} />

      <div className="bg-salesforce-blue rounded-xl p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-2">Start Your Certification Journey</h2>
        <p className="text-white mb-6">Prepare with free practice questions for your next Salesforce certification.</p>
        <Link href="/certifications" className="inline-flex items-center px-6 py-3 bg-white text-salesforce-blue rounded-lg font-semibold hover:bg-blue-50 transition-colors">
          Browse All Certifications
        </Link>
      </div>
    </div>
  )
}
