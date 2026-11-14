import type { Metadata } from 'next'
import Link from '@/components/AppLink'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import RelatedGuides from '@/components/RelatedGuides'
import { getRelatedGuides } from '@/lib/related-guides-data'
import { RELEASE_CURRENT } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import LastUpdated from '@/components/LastUpdated'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const pageTitle = `System vs Application Architect: Differences (${RELEASE_CURRENT})`
const pageDescription = `System vs Application Architect: required exams, domain differences, costs, career value. Which to pursue first on CTA path.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: {
    canonical: `${siteUrl}/system-architect-vs-application-architect`,
    languages: { 'en-US': `${siteUrl}/system-architect-vs-application-architect`, 'x-default': `${siteUrl}/system-architect-vs-application-architect` },
  },
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
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Certification Comparison', url: '/certification-comparison' },
  { name: 'System Architect vs Application Architect', url: '/system-architect-vs-application-architect' },
]

const faqItems = [
  {
    question: 'What is the difference between System Architect and Application Architect?',
    answer: 'Salesforce awards Application Architect after you pass Platform App Builder, Platform Developer I, Data Architect, and Sharing and Visibility Architect. There is no separate exam. System Architect requires Platform Developer I, Integration Architect, Identity and Access Management Architect, and Dev Lifecycle and Deployment Architect, and is also awarded automatically. Application Architect focuses on application design and declarative tools; System Architect focuses on infrastructure, integration, and the platform.',
  },
  {
    question: 'Which should I pursue first: System Architect or Application Architect?',
    answer: 'Many candidates start with Application Architect because its App Builder, Data Architect, and Sharing & Visibility exams cost $200–$400 each and may be a more accessible entry point than the infrastructure-heavy System Architect exams. This path also introduces application architecture before deeper work in integration and identity. If you already work in integration or security, you may prefer to begin with System Architect components.',
  },
  {
    question: 'How much does it cost to earn both credentials?',
    answer: 'Application Architect costs: App Builder $200 + PD1 $200 + Data Architect $400 + Sharing & Visibility Architect $400 = $1,200. For System Architect, add Integration Architect $400 + IAM Architect $400 + Dev Lifecycle Architect $400 = $1,200 (PD1 is already counted under Application Architect). The stated combined estimate is approximately $2,600 for both credentials.',
  },
  {
    question: 'Are both credentials required for the CTA?',
    answer: 'Yes. You must hold both System Architect and Application Architect before applying for the Salesforce Certified Technical Architect (CTA) Board Review. One credential alone is not enough, and both must be in Active status when you apply.',
  },
  {
    question: 'Do overlapping exams count toward both credentials?',
    answer: 'Platform Developer I is the only shared exam. Passing it once counts toward both credentials. Data Architect and Sharing and Visibility Architect count only toward Application Architect, while Integration Architect, IAM Architect, and Dev Lifecycle Architect count only toward System Architect. This reduces the number of unique exams from nine to eight for candidates pursuing both credentials and CTA.',
  },
]

export default function SystemArchitectVsApplicationArchitectPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/system-architect-vs-application-architect" breadcrumbItems={breadcrumbItems} faqItems={faqItems} aboutEntities={['/certifications/developer-1', '/certifications/administrator']} />

      <div data-lcp-header className="mb-10">
        <div className="inline-flex items-center gap-2 bg-salesforce-blue/10 text-salesforce-dark text-sm font-semibold px-3 py-1 rounded-full mb-4">
          <span>Certification Comparison</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          System Architect vs Application Architect ({RELEASE_CURRENT})
        </h1>
        <LastUpdated />
        <p className="text-lg text-gray-600">
          Both credentials are part of the CTA path, but they cover different architecture domains and have different component exams. Compare their focus, cost, and shared requirement to decide where to begin.
        </p>
      </div>

      <ContentPageAuthor />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
        <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-bold text-gray-900">Application Architect</h2>
            <span className="text-xs font-semibold bg-salesforce-blue/10 text-salesforce-dark px-2 py-0.5 rounded-full">Start Here</span>
          </div>
          <div className="space-y-2 text-sm text-gray-700 mb-4">
            <div className="flex justify-between"><span className="text-gray-600">Required exams</span><span className="font-semibold">4</span></div>
            <div className="flex justify-between"><span className="text-gray-600">Min cost</span><span className="font-semibold">~$1,200</span></div>
            <div className="flex justify-between"><span className="text-gray-600">Est. timeline</span><span className="font-semibold">6–12 months</span></div>
            <div className="flex justify-between"><span className="text-gray-600">Entry cost</span><span className="font-semibold">$200 (App Builder)</span></div>
          </div>
          <div className="text-xs text-gray-600 space-y-1 mb-3">
            <p className="font-semibold text-gray-900">Required exams (auto-awarded, no separate exam):</p>
            <p>Platform App Builder ($200)</p>
            <p>Platform Developer I ($200) ← shared</p>
            <p>Data Architect ($400)</p>
            <p>Sharing &amp; Visibility Architect ($400)</p>
          </div>
          <Link href="/certifications/application-architect" className="block py-1 text-center text-xs font-semibold text-salesforce-blue hover:underline">Study Guide →</Link>
        </div>

        <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-bold text-gray-900">System Architect</h2>
            <span className="text-xs font-semibold bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">Take Second</span>
          </div>
          <div className="space-y-2 text-sm text-gray-700 mb-4">
            <div className="flex justify-between"><span className="text-gray-600">Required exams</span><span className="font-semibold">4 (auto-awarded)</span></div>
            <div className="flex justify-between"><span className="text-gray-600">Min cost</span><span className="font-semibold">~$1,200 additional</span></div>
            <div className="flex justify-between"><span className="text-gray-600">Est. timeline</span><span className="font-semibold">6–18 months</span></div>
            <div className="flex justify-between"><span className="text-gray-600">Entry cost</span><span className="font-semibold">$400 (each domain exam)</span></div>
          </div>
          <div className="text-xs text-gray-600 space-y-1 mb-3">
            <p className="font-semibold text-gray-900">Required exams:</p>
            <p>Platform Developer I ($200) ← shared</p>
            <p>Integration Architect ($400)</p>
            <p>IAM Architect ($400)</p>
            <p>Dev Lifecycle &amp; Deployment Architect ($400)</p>
          </div>
          <Link href="/certifications/system-architect" className="block py-1 text-center text-xs font-semibold text-salesforce-blue hover:underline">Study Guide →</Link>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Key Differences</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100">
                <th scope="col" className="text-left py-2 pr-4 text-gray-600 font-medium">Area</th>
                <th scope="col" className="text-left py-2 pr-4 text-gray-600 font-medium">Application Architect</th>
                <th scope="col" className="text-left py-2 text-gray-600 font-medium">System Architect</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50 text-sm">
              {[
                { area: 'Primary domain', app: 'Application layer design', sys: 'Infrastructure & technical architecture' },
                { area: 'Number of exams', app: '4 (auto-awarded)', sys: '4 (auto-awarded)' },
                { area: 'Min first exam cost', app: '$200 (App Builder or PD1)', sys: '$200 (PD1, shared) or $400 (domain exams)' },
                { area: 'Study material availability', app: 'Abundant (App Builder & PD1 are popular)', sys: 'Less abundant for architect-level exams' },
                { area: 'Recommended first', app: 'Yes, lower entry cost', sys: 'After Application Architect' },
                { area: 'Best background', app: 'Admin/developer professionals', sys: 'Senior architects, integration specialists' },
                { area: 'Avg Salary', app: '$130–160k (US)', sys: '$140–170k (US)' },
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

            <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Decision Matrix: Application Architect or System Architect?</h2>
        <div className="overflow-x-auto">
          <table className="min-w-[500px] w-full text-sm text-left border-collapse">
            <thead><tr className="border-b-2 border-gray-200">
              <th scope="col" className="py-2.5 pr-4 font-semibold text-gray-900">Your Situation</th>
              <th scope="col" className="py-2.5 font-semibold text-emerald-700">Choose This First</th>
            </tr></thead>
            <tbody className="text-gray-700 divide-y divide-gray-100">
              <tr><td className="py-2.5 pr-4">Your strengths are declarative development, Flows, App Builder, and data modeling</td><td className="py-2.5 font-semibold text-salesforce-blue">Application Architect</td></tr>
              <tr><td className="py-2.5 pr-4">Your work centers on integrations, identity, deployment, and multiple orgs</td><td className="py-2.5 font-semibold text-purple-700">System Architect</td></tr>
              <tr><td className="py-2.5 pr-4">You are pursuing CTA and need both credentials</td><td className="py-2.5 font-semibold text-gray-700">Application Architect first (shared exams reduce total effort)</td></tr>
              <tr><td className="py-2.5 pr-4">You design orgs and data structures as a solution architect</td><td className="py-2.5 font-semibold text-salesforce-blue">Application Architect</td></tr>
              <tr><td className="py-2.5 pr-4">You focus on SSO, APIs, and deployment pipelines as a technical architect</td><td className="py-2.5 font-semibold text-purple-700">System Architect</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <RelatedGuides links={getRelatedGuides('system-architect-vs-application-architect')} />

      <div className="bg-salesforce-blue rounded-xl p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-2">Start the Architect Path</h2>
        <p className="text-white mb-6">Practice with free questions for domain exams in both architect credentials.</p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/certifications/application-architect" className="inline-flex items-center px-5 py-3 bg-white text-salesforce-blue rounded-lg font-semibold hover:bg-blue-50 transition-colors text-sm">
            Application Architect Guide
          </Link>
          <Link href="/certifications/system-architect" className="inline-flex items-center px-5 py-3 border border-white/40 text-white rounded-lg font-semibold hover:bg-white/10 transition-colors text-sm">
            System Architect Guide
          </Link>
        </div>
      </div>
    </div>
  )
}
