import type { Metadata } from 'next'
import Link from 'next/link'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import RelatedGuides from '@/components/RelatedGuides'
import { getRelatedGuides } from '@/lib/related-guides-data'
import { RELEASE_CURRENT } from '@/lib/release-data'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const pageTitle = `System Architect vs Application Architect: Differences (${RELEASE_CURRENT})`
const pageDescription = `System vs Application Architect: required exams, domain differences, costs, career value. Which to pursue first on CTA path.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/system-architect-vs-application-architect` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/system-architect-vs-application-architect`,
    images: [{ url: `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`, alt: pageTitle }],
  },
  keywords: `system architect vs application architect salesforce, salesforce architect credentials comparison, application architect or system architect first 2026`,
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'System Architect vs Application Architect', url: '/system-architect-vs-application-architect' },
]

const faqItems = [
  {
    question: 'What is the difference between System Architect and Application Architect?',
    answer: 'System Architect focuses on infrastructure and technical architecture domains: integration, data architecture, identity and access management, sharing and visibility, and development lifecycle. Application Architect focuses on application-layer design: advanced administration, platform development (PD1), data modelling, and sharing design. System Architect is more infrastructure-and-platform-focused; Application Architect is more application-layer-and-code-focused.',
  },
  {
    question: 'Which should I pursue first: System Architect or Application Architect?',
    answer: 'Most candidates start with Application Architect — the component exams (Advanced Administrator, Platform Developer I) are more accessible, better-resourced for study, and cost $200 each rather than $400. Application Architect builds the application-layer foundation before tackling the deeper infrastructure domains of System Architect. Candidates with strong integration or security backgrounds may find System Architect domain exams more natural to start with.',
  },
  {
    question: 'How much does it cost to earn both credentials?',
    answer: 'Minimum cost to earn both credentials (passing each exam once): Application Architect ~$1,200 (ADV Admin $200 + PD1 $200 + Data Architect $400 + Sharing & Visibility $400) + System Architect additional unique exams ~$1,200 (Integration Architect $400 + IAM Architect $400 + Dev Lifecycle $400) = approximately $2,400 total. Note: Data Architect and Sharing & Visibility Architect count toward both credentials — you only pay for them once.',
  },
  {
    question: 'Are both credentials required for the CTA?',
    answer: 'Yes — both the System Architect credential AND the Application Architect credential must be held before applying for the Salesforce Certified Technical Architect (CTA) Board Review. You cannot apply for CTA with only one of the two credentials. Both must be in Active status at the time of CTA application.',
  },
  {
    question: 'Do overlapping exams count toward both credentials?',
    answer: 'Yes — the Data Architect exam and the Sharing & Visibility Architect exam appear in both credential requirements. Passing either exam once automatically counts toward both Application Architect and System Architect credentials. This overlap reduces the total unique exams needed from nine to seven for candidates pursuing both credentials and the full CTA path.',
  },
]

export default function SystemArchitectVsApplicationArchitectPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/system-architect-vs-application-architect" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />

      <div data-lcp-header className="mb-10">
        <div className="inline-flex items-center gap-2 bg-salesforce-blue/10 text-salesforce-dark text-sm font-semibold px-3 py-1 rounded-full mb-4">
          <span>Certification Comparison</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          System Architect vs Application Architect ({RELEASE_CURRENT})
        </h1>
        <p className="text-lg text-gray-600">
          Both are multi-exam Salesforce architect credentials required for CTA — but they cover different domains and have different entry points. Here is how they compare and which to pursue first.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
        <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-bold text-gray-900">Application Architect</h2>
            <span className="text-xs font-semibold bg-salesforce-blue/10 text-salesforce-dark px-2 py-0.5 rounded-full">Start Here</span>
          </div>
          <div className="space-y-2 text-sm text-gray-700 mb-4">
            <div className="flex justify-between"><span className="text-gray-500">Required exams</span><span className="font-semibold">4</span></div>
            <div className="flex justify-between"><span className="text-gray-500">Min cost</span><span className="font-semibold">~$1,200</span></div>
            <div className="flex justify-between"><span className="text-gray-500">Est. timeline</span><span className="font-semibold">6–12 months</span></div>
            <div className="flex justify-between"><span className="text-gray-500">Entry cost</span><span className="font-semibold">$200 (ADV Admin)</span></div>
          </div>
          <div className="text-xs text-gray-600 space-y-1 mb-3">
            <p className="font-semibold text-gray-900">Required exams:</p>
            <p>Advanced Administrator ($200)</p>
            <p>Platform Developer I ($200)</p>
            <p>Data Architect ($400)</p>
            <p>Sharing &amp; Visibility Architect ($400)</p>
          </div>
          <Link href="/application-architect-study-guide" className="block text-center text-xs font-semibold text-salesforce-blue hover:underline">Study Guide →</Link>
        </div>

        <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-bold text-gray-900">System Architect</h2>
            <span className="text-xs font-semibold bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">Take Second</span>
          </div>
          <div className="space-y-2 text-sm text-gray-700 mb-4">
            <div className="flex justify-between"><span className="text-gray-500">Required exams</span><span className="font-semibold">5</span></div>
            <div className="flex justify-between"><span className="text-gray-500">Min cost</span><span className="font-semibold">~$2,000</span></div>
            <div className="flex justify-between"><span className="text-gray-500">Est. timeline</span><span className="font-semibold">6–18 months</span></div>
            <div className="flex justify-between"><span className="text-gray-500">Entry cost</span><span className="font-semibold">$400 (each exam)</span></div>
          </div>
          <div className="text-xs text-gray-600 space-y-1 mb-3">
            <p className="font-semibold text-gray-900">Required exams:</p>
            <p>Integration Architect ($400)</p>
            <p>Data Architect ($400) ← shared</p>
            <p>Sharing &amp; Visibility Architect ($400) ← shared</p>
            <p>IAM Architect ($400)</p>
            <p>Dev Lifecycle &amp; Deployment Architect ($400)</p>
          </div>
          <Link href="/system-architect-study-guide" className="block text-center text-xs font-semibold text-salesforce-blue hover:underline">Study Guide →</Link>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Key Differences</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100">
                <th scope="col" className="text-left py-2 pr-4 text-gray-500 font-medium">Area</th>
                <th scope="col" className="text-left py-2 pr-4 text-gray-500 font-medium">Application Architect</th>
                <th scope="col" className="text-left py-2 text-gray-500 font-medium">System Architect</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50 text-sm">
              {[
                { area: 'Primary domain', app: 'Application layer design', sys: 'Infrastructure & technical architecture' },
                { area: 'Number of exams', app: '4', sys: '5' },
                { area: 'Min first exam cost', app: '$200 (ADV Admin or PD1)', sys: '$400 (all exams)' },
                { area: 'Study material availability', app: 'Abundant (ADV Admin & PD1 are popular)', sys: 'Less abundant for architect-level exams' },
                { area: 'Recommended first', app: 'Yes — lower entry cost', sys: 'After Application Architect' },
                { area: 'Best background', app: 'Admin/developer professionals', sys: 'Senior architects, integration specialists' },
                { area: 'CTA requirement', app: 'Required (with System Arch)', sys: 'Required (with Application Arch)' },
              ].map((row) => (
                <tr key={row.area}>
                  <td className="py-2 pr-4 font-medium text-gray-900">{row.area}</td>
                  <td className="py-2 pr-4 text-gray-700">{row.app}</td>
                  <td className="py-2 text-gray-700">{row.sys}</td>
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

      <RelatedGuides links={getRelatedGuides('system-architect-vs-application-architect')} />

      <div className="bg-salesforce-blue rounded-xl p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-2">Start the Architect Path</h2>
        <p className="text-blue-100 mb-6">Free practice questions for every domain exam in both architect credentials.</p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/application-architect-study-guide" className="inline-flex items-center px-5 py-3 bg-white text-salesforce-blue rounded-lg font-semibold hover:bg-blue-50 transition-colors text-sm">
            Application Architect Guide
          </Link>
          <Link href="/system-architect-study-guide" className="inline-flex items-center px-5 py-3 border border-white/40 text-white rounded-lg font-semibold hover:bg-white/10 transition-colors text-sm">
            System Architect Guide
          </Link>
        </div>
      </div>
    </div>
  )
}
