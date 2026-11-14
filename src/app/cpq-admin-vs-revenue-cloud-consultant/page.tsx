import type { Metadata } from 'next'
import Link from '@/components/AppLink'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import RelatedGuides from '@/components/RelatedGuides'
import { getRelatedGuides } from '@/lib/related-guides-data'
import { RELEASE_CURRENT } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import LastUpdated from '@/components/LastUpdated'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const pageTitle = `CPQ Admin vs Revenue Cloud Consultant (${RELEASE_CURRENT})`
const pageDescription = 'Compare CPQ Administrator and Revenue Cloud Consultant skills, difficulty, topic overlap, and fit for quote-to-cash roles.'

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: {
    canonical: `${siteUrl}/cpq-admin-vs-revenue-cloud-consultant`,
    languages: { 'en-US': `${siteUrl}/cpq-admin-vs-revenue-cloud-consultant`, 'x-default': `${siteUrl}/cpq-admin-vs-revenue-cloud-consultant` },
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/cpq-admin-vs-revenue-cloud-consultant`,
    images: [{ url: `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`, alt: pageTitle }],
  },
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Certification Comparison', url: '/certification-comparison' },
  { name: 'CPQ Admin vs Revenue Cloud Consultant', url: '/cpq-admin-vs-revenue-cloud-consultant' },
]

const faqItems = [
  {
    question: 'What is the difference between CPQ Administrator and Revenue Cloud Consultant?',
    answer: 'CPQ Administrator covers product setup and quoting in Salesforce CPQ, including bundles, pricing rules, discount schedules, quote templates, and contracts. Revenue Cloud Consultant covers more of the quote-to-cash process: CPQ, billing and payment terms, revenue recognition (ASC 606), subscriptions, and the link between CPQ and Salesforce Billing.',
  },
  {
    question: 'Which certification should I take first: CPQ Admin or Revenue Cloud Consultant?',
    answer: 'The recommendation here is to take CPQ Administrator first. Revenue Cloud Consultant assumes strong CPQ knowledge, and about 30–40% of its exam overlaps with CPQ product and pricing topics. Candidates often hold CPQ Administrator or have similar project experience. If you work only with quoting, pricing, and contracts, CPQ Admin may be enough. If your work includes billing and revenue recognition, consider Revenue Cloud Consultant next.',
  },
  {
    question: 'What does Salesforce Billing add to CPQ?',
    answer: 'Salesforce Billing handles steps after a CPQ order, including invoice creation, payments, billing schedules (annual, monthly, or usage-based), revenue recognition under ASC 606, and financial reports. In this process, CPQ covers the quote and contract; Billing continues from the order through invoicing and payment.',
  },
  {
    question: 'How much overlap is there between CPQ Admin and Revenue Cloud Consultant exams?',
    answer: 'The exams overlap by about 30–40%. Both cover CPQ product setup, pricing, bundles, quote templates, and contracts. Revenue Cloud Consultant adds billing schedules, invoices, payments, revenue recognition, billing amendments and renewals, and the Salesforce Billing data model. CPQ knowledge carries over to those shared topics.',
  },
  {
    question: 'What experience is recommended for Revenue Cloud Consultant?',
    answer: 'Salesforce recommends at least two years of CPQ implementation experience and exposure to Salesforce Billing projects. You should understand the quote-to-cash process and have configured a CPQ implementation. The exam uses scenarios to test consulting decisions about billing and revenue recognition.',
  },
]

export default function CpqAdminVsRevenueCloudConsultantPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/cpq-admin-vs-revenue-cloud-consultant" breadcrumbItems={breadcrumbItems} faqItems={faqItems} aboutEntities={['/certifications/cpq-administrator', '/certifications/revenue-cloud-consultant']} />

      <div data-lcp-header className="mb-10">
        <div className="inline-flex items-center gap-2 bg-salesforce-blue/10 text-salesforce-dark text-sm font-semibold px-3 py-1 rounded-full mb-4">
          <span>Comparison</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          CPQ Administrator vs Revenue Cloud Consultant ({RELEASE_CURRENT})
        </h1>
        <LastUpdated />
        <p className="text-lg text-gray-600">
          Both credentials cover quote-to-cash work at different points. CPQ Administrator focuses on quoting; Revenue Cloud Consultant extends the scope to billing and revenue recognition.
        </p>
      </div>

      <ContentPageAuthor />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
        {[
          {
            name: 'CPQ Administrator',
            href: '/certifications/cpq-administrator',
            badge: 'Take First',
            badgeColor: 'bg-green-100 text-green-800',
            fee: '$200', questions: '60', time: '105 min', passing: '65%',
            scope: 'Quote-to-Contract',
            focus: 'Product configuration, pricing, discounting, quote templates, contract generation',
            skills: ['Product bundles and configuration rules', 'Pricing cascade and discount schedules', 'Quote templates and PDF generation', 'Order and contract creation', 'Subscription pricing and renewals'],
          },
          {
            name: 'Revenue Cloud Consultant',
            href: '/certifications/revenue-cloud-consultant',
            badge: 'Take Second',
            badgeColor: 'bg-salesforce-blue/10 text-salesforce-dark',
            fee: '$200', questions: '60', time: '105 min', passing: '63%',
            scope: 'Quote-to-Cash (full lifecycle)',
            focus: 'CPQ + billing, invoicing, revenue recognition, payment management, ASC 606',
            skills: ['Salesforce Billing configuration', 'Invoice generation and payment processing', 'Revenue recognition rules (ASC 606)', 'Billing schedules and evergreen contracts', 'Amendment and renewal billing flows'],
          },
        ].map((cert) => (
          <div key={cert.name} className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <h2 className="text-lg font-bold text-gray-900">{cert.name}</h2>
              <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${cert.badgeColor}`}>{cert.badge}</span>
            </div>
            <div className="grid grid-cols-4 gap-2 mb-4">
              {[{ l: 'Fee', v: cert.fee }, { l: 'Questions', v: cert.questions }, { l: 'Time', v: cert.time }, { l: 'Pass', v: cert.passing }].map((s) => (
                <div key={s.l} className="text-center bg-gray-50 rounded-lg p-2">
                  <div className="font-bold text-salesforce-dark text-xs">{s.v}</div>
                  <div className="text-xs text-gray-600">{s.l}</div>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-600 mb-1"><strong>Scope:</strong> {cert.scope}</p>
            <p className="text-sm text-gray-600 mb-3"><strong>Focus:</strong> {cert.focus}</p>
            <ul className="space-y-1 mb-4">
              {cert.skills.map((s) => (
                <li key={s} className="text-sm text-gray-700 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-salesforce-blue flex-shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
            <Link href={cert.href} className="inline-flex items-center text-salesforce-blue font-medium text-sm hover:underline">
              Free Practice Questions →
            </Link>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Where Each Credential Fits in Quote-to-Cash</h2>
        <div className="flex flex-wrap gap-2 items-center text-sm">
          {[
            { label: 'Opportunity', cert: 'CPQ Admin', color: 'bg-green-100 text-green-800' },
            { label: '→', cert: null, color: '' },
            { label: 'Quote & Pricing', cert: 'CPQ Admin', color: 'bg-green-100 text-green-800' },
            { label: '→', cert: null, color: '' },
            { label: 'Order & Contract', cert: 'CPQ Admin', color: 'bg-green-100 text-green-800' },
            { label: '→', cert: null, color: '' },
            { label: 'Invoice & Billing', cert: 'Revenue Cloud', color: 'bg-blue-100 text-blue-800' },
            { label: '→', cert: null, color: '' },
            { label: 'Revenue Recognition', cert: 'Revenue Cloud', color: 'bg-blue-100 text-blue-800' },
          ].map((item, i) => (
            item.cert ? (
              <div key={i} className="text-center">
                <div className={`px-3 py-1.5 rounded-lg font-medium ${item.color}`}>{item.label}</div>
                <div className="text-xs text-gray-600 mt-1">{item.cert}</div>
              </div>
            ) : (
              <span key={i} className="text-gray-600 font-bold">{item.label}</span>
            )
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">How the Credentials Differ</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100">
                <th scope="col" className="text-left py-2 pr-4 text-gray-600 font-medium">Aspect</th>
                <th scope="col" className="text-left py-2 pr-4 text-salesforce-blue font-medium">CPQ Admin</th>
                <th scope="col" className="text-left py-2 text-salesforce-blue font-medium">Revenue Cloud Consultant</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {[
                { aspect: 'Process coverage', a: 'Opportunity → Contract', b: 'Opportunity → Revenue Recognition' },
                { aspect: 'Billing tested?', a: 'No', b: 'Yes, core topic' },
                { aspect: 'Revenue recognition?', a: 'No', b: 'Yes: ASC 606' },
                { aspect: 'Difficulty', a: 'Challenging', b: 'Very Hard' },
                { aspect: 'Recommended prior cert', a: 'ADM-201 helpful', b: 'CPQ Admin required' },
                { aspect: 'Time limit', a: '105 minutes', b: '105 minutes' },
                { aspect: 'Fee', a: '$200', b: '$200' },
                { aspect: 'Avg Salary', a: '$95–130k (US)', b: '$100–140k (US)' },
              ].map((row) => (
                <tr key={row.aspect}>
                  <td className="py-2 pr-4 text-gray-600">{row.aspect}</td>
                  <td className="py-2 pr-4 text-gray-900">{row.a}</td>
                  <td className="py-2 text-gray-900">{row.b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
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

            <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Choose Between CPQ Administrator and Revenue Cloud Consultant</h2>
        <div className="overflow-x-auto">
          <table className="min-w-[500px] w-full text-sm text-left border-collapse">
            <thead><tr className="border-b-2 border-gray-200">
              <th scope="col" className="py-2.5 pr-4 font-semibold text-gray-900">Your Situation</th>
              <th scope="col" className="py-2.5 font-semibold text-emerald-700">Choose This Cert</th>
            </tr></thead>
            <tbody className="text-gray-700 divide-y divide-gray-100">
              <tr><td className="py-2.5 pr-4">Configuring CPQ product rules, price books, and quote templates</td><td className="py-2.5 font-semibold text-salesforce-blue">CPQ Admin</td></tr>
              <tr><td className="py-2.5 pr-4">Implementing subscription billing, contracts, and renewals end-to-end</td><td className="py-2.5 font-semibold text-purple-700">Revenue Cloud Consultant</td></tr>
              <tr><td className="py-2.5 pr-4">New to CPQ, want the narrower, more achievable entry credential</td><td className="py-2.5 font-semibold text-salesforce-blue">CPQ Admin, start here</td></tr>
              <tr><td className="py-2.5 pr-4">Working with Salesforce Billing (invoices, payments, revenue recognition)</td><td className="py-2.5 font-semibold text-purple-700">Revenue Cloud Consultant</td></tr>
              <tr><td className="py-2.5 pr-4">Consulting on full quote-to-cash transformation projects</td><td className="py-2.5 font-semibold text-purple-700">Revenue Cloud Consultant, broader scope</td></tr>
              <tr><td className="py-2.5 pr-4">Want both, what order?</td><td className="py-2.5 font-semibold text-gray-700">CPQ Admin first, then Revenue Cloud Consultant</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <RelatedGuides links={getRelatedGuides('cpq-admin-vs-revenue-cloud-consultant')} />

      <div className="bg-salesforce-blue rounded-xl p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-2">Start with CPQ Administrator</h2>
        <p className="text-white mb-6">Use free practice questions to review both quote-to-cash credentials.</p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/certifications/cpq-administrator" className="inline-flex items-center px-5 py-3 bg-white text-salesforce-blue rounded-lg font-semibold hover:bg-blue-50 transition-colors text-sm">
            CPQ Admin Practice
          </Link>
          <Link href="/certifications/revenue-cloud-consultant" className="inline-flex items-center px-5 py-3 border border-white/40 text-white rounded-lg font-semibold hover:bg-white/10 transition-colors text-sm">
            Revenue Cloud Practice
          </Link>
        </div>
      </div>
    </div>
  )
}
