import type { Metadata } from 'next'
import Link from 'next/link'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import RelatedGuides from '@/components/RelatedGuides'
import { getRelatedGuides } from '@/lib/related-guides-data'
import { RELEASE_CURRENT } from '@/lib/release-data'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const pageTitle = `Salesforce Certification Validity & Expiry (${RELEASE_CURRENT})`
const pageDescription = `Do Salesforce certifications expire? How long are they valid? How to keep them active with maintenance modules in 2026 — complete guide.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/salesforce-certification-validity` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/salesforce-certification-validity`,
    images: [{ url: `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`, alt: pageTitle }],
  },
  keywords: `do salesforce certifications expire, salesforce certification validity 2026, how long salesforce certification valid, salesforce cert expiry`,
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Salesforce Certification Validity & Expiry', url: '/salesforce-certification-validity' },
]

const faqItems = [
  {
    question: 'Do Salesforce certifications expire?',
    answer: 'Salesforce certifications do not permanently expire — but they can become Inactive if you fail to complete maintenance modules. Salesforce releases three platform updates per year (Spring, Summer, Winter), and each release brings a short maintenance module on Trailhead. If you miss a maintenance deadline, your certification status changes from Active to Inactive. Inactive certifications are not revoked — they can be reactivated at any time by completing the overdue maintenance modules.',
  },
  {
    question: 'How long is a Salesforce certification valid?',
    answer: 'There is no fixed expiry date on Salesforce certifications. Unlike certifications from some other vendors that expire after 2–3 years and require a full re-examination, Salesforce certifications remain valid indefinitely as long as you complete the ongoing maintenance modules (3 per year, approximately 20–60 minutes each, free). The certification date on your Trailhead profile updates with each maintenance completion to reflect the most recent platform release.',
  },
  {
    question: 'What is the difference between Active and Inactive certification status?',
    answer: 'Active status means your certification is current — you have completed all required maintenance modules for the most recent Salesforce release. Inactive status means one or more maintenance modules are overdue. During inactive status, you should not represent yourself as actively certified on your resume, LinkedIn, or to clients — the Inactive status is visible on the public Trailhead credential verification page that employers and clients can check.',
  },
  {
    question: 'How do I reactivate an Inactive Salesforce certification?',
    answer: 'Log in to Trailhead (trailhead.salesforce.com), go to your profile, and click Credentials. Certifications with Inactive status will show the pending maintenance modules. Complete all overdue modules — typically 20–60 minutes each — and your certification status returns to Active immediately. There is no fee for reactivation. If you have multiple releases of overdue maintenance, you must complete them all to restore Active status.',
  },
  {
    question: 'Do I need to retake the full exam to maintain my certification?',
    answer: 'No — Salesforce does not require retaking the full certification exam for maintenance. The maintenance requirement is completion of short Trailhead modules (multiple-choice quizzes covering new features in the latest release). This is fundamentally different from certifications like AWS or PMP that require periodic full re-examination or continuing education credits. Salesforce maintenance is lightweight by design — approximately 1–3 hours per year per certification category.',
  },
]

export default function SalesforceCertificationValidityPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/salesforce-certification-validity" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />

      <div data-lcp-header className="mb-10">
        <div className="inline-flex items-center gap-2 bg-salesforce-blue/10 text-salesforce-dark text-sm font-semibold px-3 py-1 rounded-full mb-4">
          <span>Certification Guide</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          Salesforce Certification Validity &amp; Expiry ({RELEASE_CURRENT})
        </h1>
        <p className="text-lg text-gray-600">
          Salesforce certifications do not expire — but they require maintenance. Here&apos;s exactly how certification validity works and how to keep yours Active.
        </p>
      </div>

      <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-10">
        <h2 className="text-lg font-bold text-green-900 mb-2">Short answer: Certifications never permanently expire</h2>
        <p className="text-sm text-green-800">Salesforce certifications have no fixed expiry date. They stay Active as long as you complete three short maintenance modules per year (one per Salesforce release). Miss a maintenance deadline and the cert becomes Inactive — but it is never permanently revoked. Completing the overdue modules restores Active status immediately, for free.</p>
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
            <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">How Certification Validity Works</h2>
        <div className="space-y-4 text-sm text-gray-700">
          <p>When you pass a Salesforce certification exam, your credential appears on your Trailhead profile with <strong>Active</strong> status. There is no expiry date stamped on the certification itself.</p>
          <p>Salesforce releases three major platform updates per year — <strong>Spring</strong> (Jan/Feb), <strong>Summer</strong> (May/Jun), and <strong>Winter</strong> (Sep/Oct). For each release, Salesforce publishes maintenance modules on Trailhead that cover new features and changes relevant to your certification area.</p>
          <p>You must complete the maintenance module within approximately <strong>30 days</strong> of its publication. If you complete it on time, your certification date updates and your status remains Active. If you miss the deadline, your certification transitions to <strong>Inactive</strong>.</p>
          <p>Certifications in the same role category (e.g., all Administrator certifications) typically share one maintenance module — you do not need to complete one module per certification. This keeps the maintenance burden low even for professionals with multiple certifications.</p>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Active vs Inactive: What It Means</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
          <div className="bg-green-50 rounded-xl p-5 border border-green-100">
            <h3 className="font-bold text-green-900 mb-3">Active Status</h3>
            <ul className="space-y-2 text-green-800">
              <li>✓ All maintenance modules completed for the current release</li>
              <li>✓ Certification appears on public Trailhead verification page</li>
              <li>✓ Can claim certification on resume and LinkedIn</li>
              <li>✓ Counts toward Salesforce partner certification requirements</li>
              <li>✓ Badge displayed on Trailhead profile</li>
            </ul>
          </div>
          <div className="bg-amber-50 rounded-xl p-5 border border-amber-100">
            <h3 className="font-bold text-amber-900 mb-3">Inactive Status</h3>
            <ul className="space-y-2 text-amber-800">
              <li>⚠ One or more maintenance modules overdue</li>
              <li>⚠ Shows as Inactive on public Trailhead verification</li>
              <li>⚠ Should not be claimed as currently active on resume</li>
              <li>⚠ Does not count toward partner certification headcounts</li>
              <li>✓ Can be reactivated at any time for free</li>
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
                <th scope="col" className="text-left py-2 pr-4 text-gray-500 font-medium">Certification</th>
                <th scope="col" className="text-left py-2 pr-4 text-gray-500 font-medium">Expiry</th>
                <th scope="col" className="text-left py-2 text-gray-500 font-medium">Renewal requirement</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {[
                { cert: 'Salesforce', expiry: 'No fixed expiry', renewal: '3 short Trailhead modules/year (free, 20–60 min each)' },
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
        <p className="text-xs text-gray-400 mt-3">Salesforce&apos;s maintenance model is one of the most candidate-friendly in enterprise technology certification.</p>
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
        <p className="text-blue-100 mb-6">Free practice questions for every Salesforce certification — earn a cert that lasts a career.</p>
        <Link href="/certifications" className="inline-flex items-center px-6 py-3 bg-white text-salesforce-blue rounded-lg font-semibold hover:bg-blue-50 transition-colors">
          Browse All Certifications
        </Link>
      </div>
    </div>
  )
}
