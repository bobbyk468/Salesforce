import type { Metadata } from 'next'
import Link from 'next/link'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import RelatedGuides from '@/components/RelatedGuides'
import { getRelatedGuides } from '@/lib/related-guides-data'
import { RELEASE_CURRENT } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const pageTitle = `UX Designer vs Strategy Designer: Which Cert to Take (${RELEASE_CURRENT})`
const pageDescription = `UX Designer vs Strategy Designer Salesforce certification comparison: exam difficulty, career use cases, content differences, and which to take first in 2026.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/ux-designer-vs-strategy-designer` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/ux-designer-vs-strategy-designer`,
    images: [{ url: `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`, alt: pageTitle }],
  },
  keywords: `ux designer vs strategy designer salesforce, ux designer or strategy designer, salesforce designer certifications comparison 2026`,
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'UX Designer vs Strategy Designer', url: '/ux-designer-vs-strategy-designer' },
]

const faqItems = [
  {
    question: 'Which should I take first: UX Designer or Strategy Designer?',
    answer: 'If you have a design or UX background, start with UX Designer — it tests familiar skills (research, wireframing, prototyping, usability testing) applied to the Salesforce platform. If you have a business analysis, consulting, or product strategy background, start with Strategy Designer — it tests design thinking methodology and business context framing that aligns better with strategic roles. Many professionals hold both certifications, as they are complementary.',
  },
  {
    question: 'Are UX Designer and Strategy Designer useful for non-designers?',
    answer: 'Yes — both certifications are valuable for Salesforce professionals who are not traditional designers. Admins who design user flows, business analysts who design processes, consultants who present solutions to clients, and project managers who oversee implementations all benefit from designer-track knowledge. The certifications are increasingly valued in consulting engagements where UX and design thinking improve Salesforce adoption.',
  },
  {
    question: 'Which certification is harder: UX Designer or Strategy Designer?',
    answer: 'Most candidates find Strategy Designer slightly harder than UX Designer — the passing score is lower (~62% vs ~65%) reflecting the difficulty. Strategy Designer requires applying abstract design thinking frameworks to complex business scenarios, which is less intuitive for candidates without strategic design exposure. UX Designer tests more concrete skills (research methods, wireframing, SLDS) that are easier to study from materials.',
  },
  {
    question: 'What jobs require UX Designer vs Strategy Designer?',
    answer: 'UX Designer is most relevant for roles like: Salesforce UX Designer, Lightning Experience Designer, CRM Adoption Specialist, and Solution Designer. Strategy Designer is most relevant for roles like: Design Strategist, Digital Transformation Consultant, Product Manager, and Customer Experience Architect. Both certifications appear in job descriptions for senior consultant and architect roles where design thinking is valued.',
  },
  {
    question: 'Can I take both UX Designer and Strategy Designer exams?',
    answer: 'Yes — you can hold both certifications. Many Salesforce designers hold both, as they cover different aspects of the design process. UX Designer covers execution (research → prototype → test), and Strategy Designer covers strategy (business context → product direction → outcome measurement). Together they demonstrate end-to-end design capability from strategic framing through tactical delivery.',
  },
]

export default function UxDesignerVsStrategyDesignerPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/ux-designer-vs-strategy-designer" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />

      <div data-lcp-header className="mb-10">
        <div className="inline-flex items-center gap-2 bg-salesforce-blue/10 text-salesforce-dark text-sm font-semibold px-3 py-1 rounded-full mb-4">
          <span>Certification Comparison</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          UX Designer vs Strategy Designer ({RELEASE_CURRENT})
        </h1>
        <p className="text-lg text-gray-600">
          Both sit in the Salesforce Designer track — but they test very different skills. Here is a full comparison to help you choose which to take first (or whether to pursue both).
        </p>
      </div>

      <ContentPageAuthor />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
        <div className="bg-white rounded-xl border-2 border-salesforce-blue p-6 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-bold text-gray-900">UX Designer</h2>
            <span className="text-xs font-semibold bg-salesforce-blue/10 text-salesforce-dark px-2 py-0.5 rounded-full">Take First (Designers)</span>
          </div>
          <div className="space-y-2 text-sm text-gray-700 mb-4">
            <div className="flex justify-between"><span className="text-gray-500">Fee</span><span className="font-semibold">$200</span></div>
            <div className="flex justify-between"><span className="text-gray-500">Questions</span><span className="font-semibold">60</span></div>
            <div className="flex justify-between"><span className="text-gray-500">Time</span><span className="font-semibold">105 min</span></div>
            <div className="flex justify-between"><span className="text-gray-500">Passing score</span><span className="font-semibold">~65%</span></div>
            <div className="flex justify-between"><span className="text-gray-500">Focus</span><span className="font-semibold">Execution</span></div>
          </div>
          <Link href="/ux-designer-study-guide" className="block text-center text-xs font-semibold text-salesforce-blue hover:underline">Study Guide →</Link>
        </div>

        <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-bold text-gray-900">Strategy Designer</h2>
            <span className="text-xs font-semibold bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">Take First (Consultants)</span>
          </div>
          <div className="space-y-2 text-sm text-gray-700 mb-4">
            <div className="flex justify-between"><span className="text-gray-500">Fee</span><span className="font-semibold">$200</span></div>
            <div className="flex justify-between"><span className="text-gray-500">Questions</span><span className="font-semibold">60</span></div>
            <div className="flex justify-between"><span className="text-gray-500">Time</span><span className="font-semibold">105 min</span></div>
            <div className="flex justify-between"><span className="text-gray-500">Passing score</span><span className="font-semibold">~62%</span></div>
            <div className="flex justify-between"><span className="text-gray-500">Focus</span><span className="font-semibold">Strategy</span></div>
          </div>
          <Link href="/strategy-designer-study-guide" className="block text-center text-xs font-semibold text-salesforce-blue hover:underline">Study Guide →</Link>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Key Differences</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100">
                <th scope="col" className="text-left py-2 pr-4 text-gray-500 font-medium">Area</th>
                <th scope="col" className="text-left py-2 pr-4 text-gray-500 font-medium">UX Designer</th>
                <th scope="col" className="text-left py-2 text-gray-500 font-medium">Strategy Designer</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50 text-sm">
              {[
                { area: 'Primary focus', ux: 'Tactical UX execution', str: 'Strategic design thinking' },
                { area: 'Phase of design', ux: 'Prototype → Test → Iterate', str: 'Discover → Define → Direction' },
                { area: 'Key frameworks', ux: 'SLDS, wireframing, usability testing', str: 'Double Diamond, design thinking, Jobs-to-be-Done' },
                { area: 'Ideal candidate', ux: 'UX designers, UI designers, devs', str: 'Consultants, BAs, product managers' },
                { area: 'Salesforce knowledge needed', ux: 'Lightning App Builder basics', str: 'Minimal platform-specific knowledge' },
                { area: 'Difficulty', ux: 'Moderate', str: 'Moderate-hard (abstract frameworks)' },
                { area: 'Career value', ux: 'Design-track roles, adoption work', str: 'Strategic consulting, transformation roles' },
                { area: 'Avg Salary', ux: '$80–115k (US)', str: '$80–115k (US)' },
              ].map((row) => (
                <tr key={row.area}>
                  <td className="py-2 pr-4 font-medium text-gray-900">{row.area}</td>
                  <td className="py-2 pr-4 text-gray-700">{row.ux}</td>
                  <td className="py-2 text-gray-700">{row.str}</td>
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
        <h2 className="text-xl font-bold text-gray-900 mb-4">Decision Matrix: UX Designer or Strategy Designer?</h2>
        <div className="overflow-x-auto">
          <table className="min-w-[500px] w-full text-sm text-left border-collapse">
            <thead><tr className="border-b-2 border-gray-200">
              <th scope="col" className="py-2.5 pr-4 font-semibold text-gray-900">Your Situation</th>
              <th scope="col" className="py-2.5 font-semibold text-emerald-700">Choose This Cert</th>
            </tr></thead>
            <tbody className="text-gray-700 divide-y divide-gray-100">
              <tr><td className="py-2.5 pr-4">Designing wireframes, prototypes, and Lightning UI components</td><td className="py-2.5 font-semibold text-salesforce-blue">UX Designer</td></tr>
              <tr><td className="py-2.5 pr-4">Facilitating service design, customer journey mapping, or CX strategy workshops</td><td className="py-2.5 font-semibold text-purple-700">Strategy Designer</td></tr>
              <tr><td className="py-2.5 pr-4">UI/UX designer with Figma, wireframing, or accessibility background</td><td className="py-2.5 font-semibold text-salesforce-blue">UX Designer — direct skill transfer</td></tr>
              <tr><td className="py-2.5 pr-4">Business analyst or consultant focused on outcomes and process redesign</td><td className="py-2.5 font-semibold text-purple-700">Strategy Designer</td></tr>
              <tr><td className="py-2.5 pr-4">Both — which first?</td><td className="py-2.5 font-semibold text-gray-700">UX Designer — more practical for Salesforce orgs; Strategy Designer is more senior/consultative</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <RelatedGuides links={getRelatedGuides('ux-designer-vs-strategy-designer')} />

      <div className="bg-salesforce-blue rounded-xl p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-2">Practice for Both Designer Exams</h2>
        <p className="text-white mb-6">Free practice questions for UX Designer and Strategy Designer — both in the Salesforce Designer track.</p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/certifications/ux-designer" className="inline-flex items-center px-5 py-3 bg-white text-salesforce-blue rounded-lg font-semibold hover:bg-blue-50 transition-colors text-sm">
            UX Designer Practice
          </Link>
          <Link href="/certifications/strategy-designer" className="inline-flex items-center px-5 py-3 border border-white/40 text-white rounded-lg font-semibold hover:bg-white/10 transition-colors text-sm">
            Strategy Designer Practice
          </Link>
        </div>
      </div>
    </div>
  )
}
