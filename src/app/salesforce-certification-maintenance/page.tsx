import type { Metadata } from 'next'
import Link from 'next/link'
import { getWebPageJsonLd, getBreadcrumbListJsonLd, getArticleJsonLd, getFaqPageJsonLd } from '@/lib/schema-data'
import { RELEASE_CURRENT } from '@/lib/release-data'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const pageTitle = `Salesforce Certification Maintenance Guide (${RELEASE_CURRENT})`
const pageDescription = `How to maintain your Salesforce certification in 2026: when maintenance is due, how to find modules on Trailhead, what happens if you miss a deadline, and renewal tips.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/salesforce-certification-maintenance` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/salesforce-certification-maintenance`,
    images: [{ url: `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`, alt: pageTitle }],
  },
  keywords: `salesforce certification maintenance, salesforce certification renewal 2026, how to maintain salesforce certification, trailhead maintenance modules`,
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Salesforce Certification Maintenance Guide', url: '/salesforce-certification-maintenance' },
]

const faqItems = [
  {
    question: 'How often do Salesforce certifications need to be maintained?',
    answer: 'Salesforce releases three major platform releases per year (Spring, Summer, Winter). Each release brings a maintenance module requirement. For most certifications, you must complete the corresponding release maintenance module within approximately 30 days of its publication on Trailhead. If you hold multiple certifications in the same role category, they typically share a single maintenance module — you do not need to complete one per certification.',
  },
  {
    question: 'What happens if I miss the Salesforce certification maintenance deadline?',
    answer: 'If you miss a maintenance deadline, your certification status changes from Active to Inactive on your Trailhead/Credential profile. Inactive certifications are not revoked permanently — you can reactivate by completing all outstanding maintenance modules. However, during the inactive period, you should not claim the certification on your resume or LinkedIn profile as currently active.',
  },
  {
    question: 'Where do I find the Salesforce certification maintenance modules?',
    answer: 'Maintenance modules are published on Trailhead (trailhead.salesforce.com). Log in to Trailhead, go to your profile, and check the Credentials section — any certifications with pending maintenance will show an alert. You can also find maintenance modules by searching "maintenance" in the Trailhead module catalogue. Salesforce also sends email reminders to your registered email address.',
  },
  {
    question: 'Do maintenance modules cost anything?',
    answer: 'No — Salesforce certification maintenance modules are completely free. They are short Trailhead modules (typically 20–60 minutes) covering new features and changes in the latest release that relate to your certification area. There are no fees for maintenance, unlike some certifications from other vendors that require paid renewals or retakes.',
  },
  {
    question: 'Do all Salesforce certifications require maintenance?',
    answer: 'Most role-based Salesforce certifications (Administrator, Developer, Consultant, Architect) require regular maintenance. Accredited Professional (AP) certifications and some associate-level certifications may have different maintenance requirements. Check your specific certification page on trailhead.salesforce.com/credentials for the exact maintenance schedule and any exceptions.',
  },
]

export default function SalesforceCertificationMaintenancePage() {
  const webPageJsonLd = getWebPageJsonLd({ name: pageTitle, description: pageDescription, path: '/salesforce-certification-maintenance', breadcrumbItems })
  const breadcrumbJsonLd = getBreadcrumbListJsonLd(breadcrumbItems)
  const articleJsonLd = getArticleJsonLd({ headline: pageTitle, description: pageDescription, path: '/salesforce-certification-maintenance' })
  const faqJsonLd = getFaqPageJsonLd(faqItems)

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <div data-lcp-header className="mb-10">
        <div className="inline-flex items-center gap-2 bg-salesforce-blue/10 text-salesforce-blue text-sm font-semibold px-3 py-1 rounded-full mb-4">
          <span>Maintenance Guide</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          Salesforce Certification Maintenance Guide ({RELEASE_CURRENT})
        </h1>
        <p className="text-lg text-gray-600">
          Everything you need to know about keeping your Salesforce certifications active — maintenance schedule, where to find modules, and what happens if you miss a deadline.
        </p>
      </div>

      {/* Key facts */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
        {[
          { label: 'Releases/Year', value: '3' },
          { label: 'Cost', value: 'Free' },
          { label: 'Module Time', value: '20–60 min' },
          { label: 'Where', value: 'Trailhead' },
        ].map((stat) => (
          <div key={stat.label} className="bg-white rounded-xl border border-gray-100 p-4 text-center shadow-sm">
            <div className="text-2xl font-bold text-salesforce-blue">{stat.value}</div>
            <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* How it works */}
      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">How Salesforce Certification Maintenance Works</h2>
        <div className="space-y-4 text-sm text-gray-700">
          <p>Salesforce releases three major platform updates per year — <strong>Spring</strong> (January/February), <strong>Summer</strong> (May/June), and <strong>Winter</strong> (September/October). Each release introduces new features and changes to the platform.</p>
          <p>For each release, Salesforce publishes <strong>maintenance modules on Trailhead</strong> — one or a few short modules per certification role category. You must complete the module within approximately <strong>30 days</strong> of its publication to keep your certification in Active status.</p>
          <p>Certifications within the same role category typically share one maintenance module. For example, a candidate holding both ADM-201 and Advanced Administrator typically completes a single Administrator-category maintenance module — not two separate ones.</p>
        </div>
      </div>

      {/* Step by step */}
      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">How to Complete Maintenance — Step by Step</h2>
        <div className="space-y-4">
          {[
            { step: '1', title: 'Watch for Salesforce release announcements', desc: 'Salesforce announces each release on the Salesforce blog and Trust.salesforce.com. Sign up for Salesforce release email notifications to get notified when maintenance modules are available.' },
            { step: '2', title: 'Log in to Trailhead', desc: 'Go to trailhead.salesforce.com and log in with your Salesforce credentials (the same account linked to your certification). Navigate to your profile and click "Credentials".' },
            { step: '3', title: 'Check for pending maintenance', desc: 'Any certifications with outstanding maintenance requirements will show an alert icon. Click the certification to see the required maintenance module(s) and the deadline.' },
            { step: '4', title: 'Complete the maintenance module', desc: 'Click through to the Trailhead module, read each unit, and complete the challenge (multiple-choice quiz). Maintenance modules typically take 20–60 minutes. You can pause and resume at any time.' },
            { step: '5', title: 'Verify your status', desc: 'After completing the module, your certification status updates to Active for the new release. Your Trailhead profile badge will reflect the updated maintenance date.' },
          ].map((item) => (
            <div key={item.step} className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-salesforce-blue text-white flex items-center justify-center font-bold text-sm">{item.step}</div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* What if you miss */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold text-amber-900 mb-3">What If You Miss the Maintenance Deadline?</h2>
        <div className="space-y-2 text-sm text-amber-800">
          <p><strong>Your certification becomes Inactive</strong> — it is not permanently revoked, but it will show as Inactive on your Trailhead credential profile.</p>
          <p><strong>To reactivate:</strong> Complete all outstanding maintenance modules. Your status returns to Active immediately after completion.</p>
          <p><strong>During inactive status:</strong> Do not represent yourself as actively certified on your resume, LinkedIn, or to clients. The Inactive status is visible on the public Trailhead verification system.</p>
          <p><strong>No penalty fees:</strong> Reactivation is free — just complete the overdue modules. Unlike some other certification programmes, Salesforce does not charge for reactivation.</p>
        </div>
      </div>

      {/* Release schedule */}
      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Salesforce Release Schedule ({RELEASE_CURRENT})</h2>
        <div className="space-y-3">
          {[
            { release: 'Spring &apos;26', period: 'Jan–Feb 2026', maintenance: 'Feb–Mar 2026', status: 'Upcoming' },
            { release: 'Summer &apos;26', period: 'May–Jun 2026', maintenance: 'Jun–Jul 2026', status: 'Upcoming' },
            { release: 'Winter &apos;27', period: 'Sep–Oct 2026', maintenance: 'Oct–Nov 2026', status: 'Upcoming' },
          ].map((row) => (
            <div key={row.release} className="flex flex-wrap items-center justify-between gap-3 py-3 border-b border-gray-100 last:border-0 text-sm">
              <span className="font-semibold text-gray-900">{row.release}</span>
              <span className="text-gray-500">Release: {row.period}</span>
              <span className="text-gray-500">Maintenance due: {row.maintenance}</span>
              <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">{row.status}</span>
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-400 mt-3">Exact dates vary. Check release.salesforce.com for confirmed dates.</p>
      </div>

      {/* FAQ */}
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

      <div className="bg-salesforce-blue rounded-xl p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-2">Get Certified First</h2>
        <p className="text-blue-100 mb-6">Start with free practice questions for any Salesforce certification.</p>
        <Link href="/certifications" className="inline-flex items-center px-6 py-3 bg-white text-salesforce-blue rounded-lg font-semibold hover:bg-blue-50 transition-colors">
          Browse All Certifications
        </Link>
      </div>
    </div>
  )
}
