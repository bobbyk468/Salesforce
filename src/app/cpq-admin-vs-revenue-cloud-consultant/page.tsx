import type { Metadata } from 'next'
import Link from '@/components/AppLink'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import CredentialStatusNotice from '@/components/CredentialStatusNotice'
import { getPublishedExamFacts } from '@/lib/cert-seo-data'
import RelatedGuides from '@/components/RelatedGuides'
import { getRelatedGuides } from '@/lib/related-guides-data'
import { RELEASE_CURRENT } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import LastUpdated from '@/components/LastUpdated'
import WhichFirstBlock from '@/components/WhichFirstBlock'

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

/**
 * Exam facts read from the certification registry in cert-seo-data.ts, and the
 * retirement banner from credential-status.ts, so the cards, table, FAQs and
 * closing CTA on this page cannot tell a reader to book an exam Salesforce has
 * closed. getPublishedExamFacts, not getExamLogistics: CPQ Administrator is
 * closed, and these are its published figures kept as history.
 */
function examFacts(slug: string) {
  const f = getPublishedExamFacts(slug)
  if (!f) throw new Error(`No published exam facts for ${slug}`)
  return f
}

const revCon = examFacts('revenue-management-consultant')
const cpqAdmin = examFacts('cpq-administrator')

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Certification Comparison', url: '/certification-comparison' },
  { name: 'CPQ Admin vs Revenue Cloud Consultant', url: '/cpq-admin-vs-revenue-cloud-consultant' },
]

const faqItems = [
  {
    question: 'What is the difference between CPQ Administrator and Revenue Management Consultant?',
    answer: 'CPQ Administrator covers product setup and quoting in Salesforce CPQ, including bundles, pricing rules, discount schedules, quote templates, and contracts. Revenue Management Consultant, formerly Revenue Cloud Consultant, covers more of the quote-to-cash process: CPQ, billing and payment terms, revenue recognition (ASC 606), subscriptions, and the link between CPQ and Salesforce Billing.',
  },
  {
    question: 'Which certification should I take first: CPQ Admin or Revenue Management Consultant?',
    answer: 'Revenue Management Consultant (Rev-Con-201), because it is the only one of the two you can book. Salesforce closed CPQ Administrator registration on July 24, 2026, August 31, 2026 was the last day to sit it, and the credential retires on February 1, 2027. Revenue Management Consultant still assumes strong CPQ knowledge, and about 30–40% of it overlaps with CPQ product and pricing topics, so the published CPQ Administrator outline remains useful study material even though it is no longer an exam you can take.',
  },
  {
    question: 'What does Salesforce Billing add to CPQ?',
    answer: 'Salesforce Billing handles steps after a CPQ order, including invoice creation, payments, billing schedules (annual, monthly, or usage-based), revenue recognition under ASC 606, and financial reports. In this process, CPQ covers the quote and contract; Billing continues from the order through invoicing and payment.',
  },
  {
    question: 'How much overlap is there between CPQ Admin and Revenue Management Consultant exams?',
    answer: 'The exams overlap by about 30–40%. Both cover CPQ product setup, pricing, bundles, quote templates, and contracts. Revenue Management Consultant adds billing schedules, invoices, payments, revenue recognition, billing amendments and renewals, and the Salesforce Billing data model. CPQ knowledge carries over to those shared topics.',
  },
  {
    question: 'What experience is recommended for Revenue Management Consultant?',
    answer: 'Salesforce recommends at least two years of CPQ implementation experience and exposure to Salesforce Billing projects. You should understand the quote-to-cash process and have configured a CPQ implementation. The exam uses scenarios to test consulting decisions about billing and revenue recognition.',
  },
]

export default function CpqAdminVsRevenueCloudConsultantPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/cpq-admin-vs-revenue-cloud-consultant" breadcrumbItems={breadcrumbItems} faqItems={faqItems} aboutEntities={['/certifications/cpq-administrator', '/certifications/revenue-management-consultant']} />

      <div data-lcp-header className="mb-10">
        <div className="inline-flex items-center gap-2 bg-salesforce-blue/10 text-salesforce-dark text-sm font-semibold px-3 py-1 rounded-full mb-4">
          <span>Comparison</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          CPQ Administrator vs Revenue Cloud Consultant ({RELEASE_CURRENT})
        </h1>
        <LastUpdated />
        <p className="text-lg text-gray-600">
          Both credentials cover quote-to-cash work at different points. CPQ Administrator focuses on quoting; the consultant credential extends the scope to billing and revenue recognition. Salesforce now issues that second one as <strong>Revenue Management Consultant (Rev-Con-201)</strong>, the name this page uses after this line; &quot;Revenue Cloud Consultant&quot; is the former name you will still see in older material.
        </p>
      </div>

      <CredentialStatusNotice slug="cpq-administrator" />

      <ContentPageAuthor />

      <WhichFirstBlock
        certA={{
          name: "Revenue Management Consultant",
          certSlug: "revenue-management-consultant",
          examTipsSlug: "certifications/revenue-management-consultant",
          conditions: [
          "You design quoting, contracts, amendments, and renewals",
          "Your projects span the revenue lifecycle rather than one quoting tool",
          "You want the one of the pair that is still bookable",
          `You need ${revCon.passingScore} across ${revCon.questions} questions in ${revCon.duration}, ${revCon.fee}`,
          ],
        }}
        certB={{
          name: "CPQ Administrator",
          certSlug: "cpq-administrator",
          unavailable: "exam closed August 2026",
          conditions: [
          "Product bundles, price rules, and discount schedules",
          "Quote templates and CPQ-specific configuration depth",
          "Still useful as reference if you administer an existing CPQ org",
          "Credential retires 1 February 2027",
          ],
        }}
        recommendation={{
          certName: "Revenue Management Consultant",
          certSlug: "revenue-management-consultant",
          examTipsSlug: "certifications/revenue-management-consultant",
          reason: "There is no longer a choice to weigh. Salesforce closed CPQ Administrator registration on 24 July 2026, 31 August 2026 was the last sitting, and the credential retires on 1 February 2027, so Revenue Management Consultant (Rev-Con-201) is the only quote-to-cash exam of the two you can book. It covers the lifecycle CPQ sits inside, so the study overlap is substantial if you already know CPQ.",
          careerPathSlug: "consultant-certification-path",
          careerPathLabel: "Consultant Certification Path",
        }}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
        {[
          {
            name: 'Revenue Management Consultant',
            href: '/certifications/revenue-management-consultant',
            badge: 'Take this one',
            badgeColor: 'bg-green-100 text-green-800',
            fee: revCon.fee, questions: String(revCon.questions), time: revCon.duration, passing: revCon.passingScore,
            scope: 'Quote-to-Cash (full lifecycle)',
            focus: 'CPQ + billing, invoicing, revenue recognition, payment management, ASC 606',
            skills: ['Salesforce Billing configuration', 'Invoice generation and payment processing', 'Revenue recognition rules (ASC 606)', 'Billing schedules and evergreen contracts', 'Amendment and renewal billing flows'],
          },
          {
            name: 'CPQ Administrator',
            href: '/certifications/cpq-administrator',
            badge: 'Exam closed August 2026',
            badgeColor: 'bg-amber-100 text-amber-900',
            fee: cpqAdmin.fee, questions: String(cpqAdmin.questions), time: cpqAdmin.duration, passing: cpqAdmin.passingScore,
            scope: 'Quote-to-Contract',
            focus: 'Product configuration, pricing, discounting, quote templates, contract generation',
            skills: ['Product bundles and configuration rules', 'Pricing cascade and discount schedules', 'Quote templates and PDF generation', 'Order and contract creation', 'Subscription pricing and renewals'],
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
        <p className="text-sm text-gray-600 mb-4">Revenue Management Consultant is tested across the whole row. The quoting stages are where the closed CPQ Administrator exam went deepest, which is why its outline is still worth reading.</p>
        <div className="flex flex-wrap gap-2 items-center text-sm">
          {[
            { label: 'Opportunity', cert: 'CPQ Admin (closed)', color: 'bg-amber-100 text-amber-900' },
            { label: '→', cert: null, color: '' },
            { label: 'Quote & Pricing', cert: 'CPQ Admin (closed)', color: 'bg-amber-100 text-amber-900' },
            { label: '→', cert: null, color: '' },
            { label: 'Order & Contract', cert: 'CPQ Admin (closed)', color: 'bg-amber-100 text-amber-900' },
            { label: '→', cert: null, color: '' },
            { label: 'Invoice & Billing', cert: 'Revenue Mgmt', color: 'bg-blue-100 text-blue-800' },
            { label: '→', cert: null, color: '' },
            { label: 'Revenue Recognition', cert: 'Revenue Mgmt', color: 'bg-blue-100 text-blue-800' },
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
                <th scope="col" className="text-left py-2 pr-4 text-salesforce-blue font-medium">CPQ Admin (closed)</th>
                <th scope="col" className="text-left py-2 text-salesforce-blue font-medium">Revenue Management Consultant</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {[
                { aspect: 'Process coverage', a: 'Opportunity → Contract', b: 'Opportunity → Revenue Recognition' },
                { aspect: 'Billing tested?', a: 'No', b: 'Yes, core topic' },
                { aspect: 'Revenue recognition?', a: 'No', b: 'Yes: ASC 606' },
                { aspect: 'Difficulty', a: 'Challenging', b: 'Very Hard' },
                { aspect: 'Bookable now?', a: 'No, exam closed 31 August 2026; credential retires 1 February 2027', b: 'Yes' },
                { aspect: 'Recommended prior cert', a: 'ADM-201 helpful', b: 'CPQ experience assumed; no certification required' },
                { aspect: 'Time limit', a: cpqAdmin.duration, b: revCon.duration },
                { aspect: 'Fee', a: cpqAdmin.fee, b: revCon.fee },
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
        <h2 className="text-xl font-bold text-gray-900 mb-4">Choose Between CPQ Administrator and Revenue Management Consultant</h2>
        <div className="overflow-x-auto">
          <table className="min-w-[500px] w-full text-sm text-left border-collapse">
            <thead><tr className="border-b-2 border-gray-200">
              <th scope="col" className="py-2.5 pr-4 font-semibold text-gray-900">Your Situation</th>
              <th scope="col" className="py-2.5 font-semibold text-emerald-700">Choose This Cert</th>
            </tr></thead>
            <tbody className="text-gray-700 divide-y divide-gray-100">
              <tr><td className="py-2.5 pr-4">Configuring CPQ product rules, price books, and quote templates</td><td className="py-2.5 font-semibold text-purple-700">Revenue Management Consultant; read the closed CPQ Admin outline alongside it</td></tr>
              <tr><td className="py-2.5 pr-4">Implementing subscription billing, contracts, and renewals end-to-end</td><td className="py-2.5 font-semibold text-purple-700">Revenue Management Consultant</td></tr>
              <tr><td className="py-2.5 pr-4">New to CPQ, want the narrower entry credential</td><td className="py-2.5 font-semibold text-gray-700">No longer an option: CPQ Admin closed on 31 August 2026</td></tr>
              <tr><td className="py-2.5 pr-4">Working with Salesforce Billing (invoices, payments, revenue recognition)</td><td className="py-2.5 font-semibold text-purple-700">Revenue Management Consultant</td></tr>
              <tr><td className="py-2.5 pr-4">Consulting on full quote-to-cash transformation projects</td><td className="py-2.5 font-semibold text-purple-700">Revenue Management Consultant, broader scope</td></tr>
              <tr><td className="py-2.5 pr-4">Already hold CPQ Administrator</td><td className="py-2.5 font-semibold text-gray-700">You keep it, marked Retired from 1 February 2027; Revenue Management Consultant is the credential to add</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <RelatedGuides links={getRelatedGuides('cpq-admin-vs-revenue-cloud-consultant')} />

      <div className="bg-salesforce-blue rounded-xl p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-2">Start with Revenue Management Consultant</h2>
        <p className="text-white mb-6">Rev-Con-201 is the bookable quote-to-cash exam. The CPQ Administrator bank stays up as study material for its closed outline.</p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/certifications/revenue-management-consultant" className="inline-flex items-center px-5 py-3 bg-white text-salesforce-blue rounded-lg font-semibold hover:bg-blue-50 transition-colors text-sm">
            Revenue Management Practice
          </Link>
          <Link href="/certifications/cpq-administrator" className="inline-flex items-center px-5 py-3 border border-white/40 text-white rounded-lg font-semibold hover:bg-white/10 transition-colors text-sm">
            CPQ Admin Practice (closed exam)
          </Link>
        </div>
      </div>
    </div>
  )
}
