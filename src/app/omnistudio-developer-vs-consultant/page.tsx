import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'

const pageTitle = 'OmniStudio Developer vs Consultant: Which Cert?'
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription =
  'Compare OmniStudio Developer and OmniStudio Consultant certifications: exam focus, career paths, difficulty, and which to take first based on your role.'

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/omnistudio-developer-vs-consultant` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/omnistudio-developer-vs-consultant`,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: ogImageUrl, alt: pageTitle }],
  },
  keywords:
    'OmniStudio Developer vs Consultant, which OmniStudio certification, OmniStudio cert comparison, Salesforce OmniStudio career path',
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'OmniStudio Developer vs Consultant', url: '/omnistudio-developer-vs-consultant' },
]

const faqItems = [
  {
    question: 'Should I take OmniStudio Developer or Consultant first?',
    answer: 'There is no official prerequisite, but most candidates take OmniStudio Consultant first. The Consultant exam covers the full OmniStudio toolset (OmniScripts, DataRaptors, FlexCards, Integration Procedures) from a solution design perspective — it is the foundation for understanding what each component does and when to use it. The Developer exam then goes deeper into customisation, Apex extension patterns, and LWC overrides.',
  },
  {
    question: 'What is the difference between OmniStudio Developer and Consultant exams?',
    answer: 'OmniStudio Consultant validates that you can design and configure OmniStudio solutions using the declarative toolset — selecting the right component for a business requirement, building DataRaptors, configuring Integration Procedures, and designing FlexCards. OmniStudio Developer validates that you can extend OmniStudio with code: LWC custom components, Apex methods, TypeScript overrides in OmniScripts, and advanced Integration Procedure performance patterns.',
  },
  {
    question: 'Is OmniStudio Developer harder than OmniStudio Consultant?',
    answer: 'OmniStudio Developer is generally considered harder because it requires both declarative OmniStudio knowledge AND coding skills (LWC, Apex, TypeScript). OmniStudio Consultant focuses on configuration and design — it is accessible to consultants without deep coding backgrounds. Developer requires hands-on development experience with the OmniStudio SDK.',
  },
  {
    question: 'Which industries use OmniStudio certifications most?',
    answer: 'OmniStudio is used across all Salesforce Industry Cloud implementations: Communications Cloud, Energy &amp; Utilities Cloud, Health Cloud, Financial Services Cloud, Public Sector Solutions, Manufacturing Cloud, and Media Cloud. Professionals working on any Industry Cloud project benefit from OmniStudio certification, as OmniStudio is the underlying technology layer for guided processes and complex integrations in all these clouds.',
  },
]

export default function OmnistudioDeveloperVsConsultantPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/omnistudio-developer-vs-consultant" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />

      <header data-lcp-header className="mb-10">
        <p className="inline-flex items-center rounded-full bg-salesforce-blue/10 px-3 py-1 text-sm font-medium text-salesforce-blue mb-4">
          Certification Comparison
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          OmniStudio Developer vs Consultant: Which Certification Should You Take?
        </h1>
        <p className="text-lg text-gray-600">
          Both OmniStudio certifications validate expertise in Salesforce&apos;s Industry Cloud toolset, but they serve
          different roles. Consultant focuses on configuration and design; Developer adds code-level customisation skills.
        </p>
      </header>

      <ContentPageAuthor />

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Side-by-Side Comparison</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th scope="col" className="py-2.5 pr-4 font-semibold text-gray-900">Factor</th>
                <th scope="col" className="py-2.5 pr-4 font-semibold text-salesforce-blue">OmniStudio Consultant</th>
                <th scope="col" className="py-2.5 font-semibold text-purple-700">OmniStudio Developer</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr className="border-b border-gray-100">
                <td className="py-2.5 pr-4 font-medium">Primary Focus</td>
                <td className="py-2.5 pr-4">Declarative configuration, component selection, solution design</td>
                <td className="py-2.5">Code extensions: LWC, Apex, TypeScript overrides, SDK</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2.5 pr-4 font-medium">Exam Format</td>
                <td className="py-2.5 pr-4">60 questions, 105 min, 65%, $200</td>
                <td className="py-2.5">60 questions, 105 min, 65%, $200</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2.5 pr-4 font-medium">Coding Required</td>
                <td className="py-2.5 pr-4">No (declarative only)</td>
                <td className="py-2.5">Yes (LWC, Apex, TypeScript)</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2.5 pr-4 font-medium">Best For</td>
                <td className="py-2.5 pr-4">Functional consultants, BA-adjacent roles, Industry Cloud implementers</td>
                <td className="py-2.5">Developers extending Industry Cloud with custom code</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2.5 pr-4 font-medium">Difficulty</td>
                <td className="py-2.5 pr-4">Moderate — learn all 4 core components deeply</td>
                <td className="py-2.5">Hard — requires coding depth plus full Consultant knowledge</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-medium">Recommended Order</td>
                <td className="py-2.5 pr-4" colSpan={2}>Take Consultant first, then Developer if your role requires code-level customisation.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">The 4 Core OmniStudio Components (Both Exams)</h2>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>OmniScripts</strong> — Guided multi-step processes (e.g., customer onboarding, quote creation). Developer exam adds TypeScript overrides and custom LWC steps.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>DataRaptors</strong> — Data extraction, transformation, and loading without code. Developer exam adds custom Apex integration patterns for DataRaptors.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Integration Procedures</strong> — Server-side, multi-step data orchestration. Developer exam tests Apex-callable Integration Procedures and performance optimisation.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>FlexCards</strong> — Contextual data display cards on Lightning pages. Developer exam adds custom LWC child actions and complex data binding patterns.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
        <dl className="space-y-4">
          {faqItems.map((item, i) => (
            <div key={i} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
              <dt className="font-semibold text-gray-900 mb-1">{item.question}</dt>
              <dd className="text-sm text-gray-700" dangerouslySetInnerHTML={{ __html: item.answer }} />
            </div>
          ))}
        </dl>
      </section>

      <section className="rounded-xl border border-salesforce-blue/20 bg-salesforce-blue/5 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Start Preparing</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/certifications/omnistudio-consultant" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-colors">
            OmniStudio Consultant Practice Questions <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/certifications/omnistudio-developer" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            OmniStudio Developer Practice Questions
          </Link>
          <Link href="/certification-path" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            All Cert Paths {RELEASE_CURRENT}
          </Link>
        </div>
      </section>
    </div>
  )
}
