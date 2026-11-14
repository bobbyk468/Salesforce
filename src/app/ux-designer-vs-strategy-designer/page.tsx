import type { Metadata } from 'next'
import Link from '@/components/AppLink'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import RelatedGuides from '@/components/RelatedGuides'
import { getRelatedGuides } from '@/lib/related-guides-data'
import { RELEASE_CURRENT } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import WhichFirstBlock from '@/components/WhichFirstBlock'
import RelatedComparisons from '@/components/RelatedComparisons'
import LastUpdated from '@/components/LastUpdated'



const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const pageTitle = `UX vs Strategy Designer: Which Cert to Take (${RELEASE_CURRENT})`
const pageDescription = `Compare UX Designer and Strategy Designer by difficulty, career use, content, and which Salesforce credential to take first.`
export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: {
    canonical: `${siteUrl}/ux-designer-vs-strategy-designer`,
    languages: { 'en-US': `${siteUrl}/ux-designer-vs-strategy-designer`, 'x-default': `${siteUrl}/ux-designer-vs-strategy-designer` },
  },
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
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Certification Comparison', url: '/certification-comparison' },
  { name: 'UX Designer vs Strategy Designer', url: '/ux-designer-vs-strategy-designer' },
]

const faqItems = [
  {
    question: 'Which should I take first: UX Designer or Strategy Designer?',
    answer: 'Start with UX Designer if you have a design or UX background. It applies familiar skills such as research, wireframing, prototyping, and usability testing to Salesforce. If your background is business analysis, consulting, or product strategy, consider Strategy Designer, which focuses on design thinking and framing business problems. The certifications cover different parts of the design process, so some people earn both.',
  },
  {
    question: 'Are UX Designer and Strategy Designer useful for non-designers?',
    answer: 'Yes. Admins who design user flows, business analysts who map processes, consultants who present solutions, and project managers who guide implementations can all use designer-track skills. UX and design thinking can help teams improve how people use Salesforce.',
  },
  {
    question: 'Which certification is harder: UX Designer or Strategy Designer?',
    answer: 'Candidates may find Strategy Designer more challenging because it asks them to apply abstract design frameworks to complex business situations. The passing scores are 70% for Strategy Designer and 65% for UX Designer. UX Designer focuses on practical skills such as research methods, wireframing, and SLDS, which some candidates find easier to prepare for.',
  },
  {
    question: 'What jobs require UX Designer vs Strategy Designer?',
    answer: 'UX Designer aligns with roles such as Salesforce UX Designer, Lightning Experience Designer, CRM Adoption Specialist, and Solution Designer. Strategy Designer aligns with Design Strategist, Digital Transformation Consultant, Product Manager, and Customer Experience Architect roles. Both can be relevant to senior consultant and architect roles that use design thinking.',
  },
  {
    question: 'Can I take both UX Designer and Strategy Designer exams?',
    answer: 'Yes. The certifications cover different stages of design work. UX Designer focuses on execution: research, prototyping, and testing. Strategy Designer focuses on framing the business context, setting product direction, and measuring outcomes. Together, they cover work from strategic planning through detailed design.',
  },
]

export default function UxDesignerVsStrategyDesignerPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/ux-designer-vs-strategy-designer" breadcrumbItems={breadcrumbItems} faqItems={faqItems} aboutEntities={['/certifications/system-architect', '/certifications/application-architect']} />

      <div data-lcp-header className="mb-10">
        <div className="inline-flex items-center gap-2 bg-salesforce-blue/10 text-salesforce-dark text-sm font-semibold px-3 py-1 rounded-full mb-4">
          <span>Certification Comparison</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          UX Designer vs Strategy Designer ({RELEASE_CURRENT})
        </h1>
        <LastUpdated />
        <p className="text-lg text-gray-600">
          Both certifications are in the Salesforce Designer track, but one centers on user experience and the other on business strategy. Compare their work and exam focus to choose what fits your role.
        </p>
      </div>

      <ContentPageAuthor />
      <WhichFirstBlock
        certA={{
          name: "UX Designer",
          certSlug: "ux-designer",
          examTipsSlug: "certifications/ux-designer",
          conditions: [
          "You design Salesforce interfaces, flows, or Lightning page layouts",
          "You want to show your knowledge of UX fundamentals and accessibility",
          "You collaborate with developers on components and pages",
          "You are entering the designer certification track",
          ],
        }}
        certB={{
          name: "Strategy Designer",
          certSlug: "strategy-designer",
          examTipsSlug: "certifications/strategy-designer",
          conditions: [
          "You lead discovery workshops, journey mapping, or design sprints",
          "You turn broad business problems into Salesforce solutions",
          "You work with stakeholders on strategy as well as interface decisions",
          "You want to focus on strategy and design thinking",
          ],
        }}
        recommendation={{
          certName: "UX Designer",
          certSlug: "ux-designer",
          examTipsSlug: "certifications/ux-designer",
          reason: "Choose UX Designer if you want to apply research and interface design in Salesforce. Choose Strategy Designer if your work starts earlier, with discovery, business goals, and product direction. The order depends on whether your current work is hands-on design or strategic planning.",
          
        }}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
        <div className="bg-white rounded-xl border-2 border-salesforce-blue p-6 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-bold text-gray-900">UX Designer</h2>
            <span className="text-xs font-semibold bg-salesforce-blue/10 text-salesforce-dark px-2 py-0.5 rounded-full">Take First (Designers)</span>
          </div>
          <div className="space-y-2 text-sm text-gray-700 mb-4">
            <div className="flex justify-between"><span className="text-gray-600">Fee</span><span className="font-semibold">$200</span></div>
            <div className="flex justify-between"><span className="text-gray-600">Questions</span><span className="font-semibold">60</span></div>
            <div className="flex justify-between"><span className="text-gray-600">Time</span><span className="font-semibold">105 min</span></div>
            <div className="flex justify-between"><span className="text-gray-600">Passing score</span><span className="font-semibold">65%</span></div>
            <div className="flex justify-between"><span className="text-gray-600">Focus</span><span className="font-semibold">Execution</span></div>
          </div>
          <Link href="/certifications/ux-designer" className="block py-1 text-center text-xs font-semibold text-salesforce-blue hover:underline">Study Guide →</Link>
        </div>

        <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-bold text-gray-900">Strategy Designer</h2>
            <span className="text-xs font-semibold bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">Take First (Consultants)</span>
          </div>
          <div className="space-y-2 text-sm text-gray-700 mb-4">
            <div className="flex justify-between"><span className="text-gray-600">Fee</span><span className="font-semibold">$200</span></div>
            <div className="flex justify-between"><span className="text-gray-600">Questions</span><span className="font-semibold">60</span></div>
            <div className="flex justify-between"><span className="text-gray-600">Time</span><span className="font-semibold">105 min</span></div>
            <div className="flex justify-between"><span className="text-gray-600">Passing score</span><span className="font-semibold">70%</span></div>
            <div className="flex justify-between"><span className="text-gray-600">Focus</span><span className="font-semibold">Strategy</span></div>
          </div>
          <Link href="/certifications/strategy-designer" className="block py-1 text-center text-xs font-semibold text-salesforce-blue hover:underline">Study Guide →</Link>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Key Differences</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100">
                <th scope="col" className="text-left py-2 pr-4 text-gray-600 font-medium">Area</th>
                <th scope="col" className="text-left py-2 pr-4 text-gray-600 font-medium">UX Designer</th>
                <th scope="col" className="text-left py-2 text-gray-600 font-medium">Strategy Designer</th>
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
              <tr><td className="py-2.5 pr-4">You design wireframes, prototypes, or Lightning UI components</td><td className="py-2.5 font-semibold text-salesforce-blue">UX Designer</td></tr>
              <tr><td className="py-2.5 pr-4">You facilitate service design, journey mapping, or customer experience workshops</td><td className="py-2.5 font-semibold text-purple-700">Strategy Designer</td></tr>
              <tr><td className="py-2.5 pr-4">You have a UI/UX background in Figma, wireframing, or accessibility</td><td className="py-2.5 font-semibold text-salesforce-blue">UX Designer, direct skill transfer</td></tr>
              <tr><td className="py-2.5 pr-4">You work as an analyst or consultant focused on outcomes and process change</td><td className="py-2.5 font-semibold text-purple-700">Strategy Designer</td></tr>
              <tr><td className="py-2.5 pr-4">You plan to earn both and need an order</td><td className="py-2.5 font-semibold text-gray-700">Choose by your current focus: UX execution or strategy and discovery</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <RelatedGuides links={getRelatedGuides('ux-designer-vs-strategy-designer')} />

      <div className="bg-salesforce-blue rounded-xl p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-2">Practice for Both Designer Exams</h2>
        <p className="text-white mb-6">Try free practice questions for both Salesforce Designer track exams.</p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/certifications/ux-designer" className="inline-flex items-center px-5 py-3 bg-white text-salesforce-blue rounded-lg font-semibold hover:bg-blue-50 transition-colors text-sm">
            UX Designer Practice
          </Link>
          <Link href="/certifications/strategy-designer" className="inline-flex items-center px-5 py-3 border border-white/40 text-white rounded-lg font-semibold hover:bg-white/10 transition-colors text-sm">
            Strategy Designer Practice
          </Link>
        </div>
      </div>
      <RelatedComparisons
        links={[
          { slug: "business-analyst-vs-strategy-designer", label: "Business Analyst vs Strategy Designer" },
          { slug: "salesforce-admin-vs-developer-career", label: "Admin vs Developer Career" },
          { slug: "adm-201-vs-app-builder", label: "ADM-201 vs App Builder" },
        ]}
      />
    </div>
  )
}
