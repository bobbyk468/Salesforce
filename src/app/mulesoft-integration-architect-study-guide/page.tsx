import type { Metadata } from 'next'
import Link from 'next/link'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import DifficultyHeatmap from '@/components/DifficultyHeatmap'
import { buildStudyGuideTitle } from '@/lib/seo-title-helpers'


const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const slug = 'mulesoft-integration-architect'
const pageTitle = buildStudyGuideTitle(slug)
const pageDescription = `MuleSoft Integration Architect study guide: API-led connectivity, integration patterns, security, governance. Pass in 2026.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/mulesoft-integration-architect-study-guide` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/mulesoft-integration-architect-study-guide`,
    images: [{ url: `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`, alt: pageTitle }],
  },
  keywords: `mulesoft integration architect study guide, mulesoft integration architect exam, MuleSoft architect certification 2026, anypoint platform architect exam prep`,
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'MuleSoft Integration Architect Study Guide', url: '/mulesoft-integration-architect-study-guide' },
]

const examSections = [
  { name: 'Integration Architecture Design', weight: 30, note: 'API-led connectivity strategy, integration pattern selection, Anypoint Platform architecture, and enterprise integration design decisions.' },
  { name: 'API Design & Development', weight: 25, note: 'RAML/OAS API specifications, REST API design best practices, API versioning, and API lifecycle management.' },
  { name: 'Security & Reliability', weight: 20, note: 'API security policies, OAuth 2.0, JWT, TLS, circuit breakers, error handling strategies, and high availability design.' },
  { name: 'Performance & Scalability', weight: 15, note: 'Load balancing, caching strategies, batch processing, message queue design, and performance testing approaches.' },
  { name: 'Governance & Best Practices', weight: 10, note: 'API governance frameworks, MuleSoft Centre for Enablement (C4E), reuse strategies, and API cataloguing.' },
]

const faqItems = [
  {
    question: 'What is the MuleSoft Integration Architect certification?',
    answer: 'The MuleSoft Certified Integration Architect validates expertise in designing enterprise-scale integration architectures using MuleSoft\'s Anypoint Platform. It covers API-led connectivity strategy, integration pattern selection, security architecture, performance design, and governance frameworks. It is positioned as the senior-level MuleSoft architecture credential, requiring deep platform experience and architectural thinking skills.',
  },
  {
    question: 'What are the prerequisites for the MuleSoft Integration Architect exam?',
    answer: 'Salesforce recommends holding the MuleSoft Certified Developer I certification before attempting Integration Architect. The exam assumes solid hands-on experience building integration flows, designing APIs, and working with Anypoint Platform — typically 3–5 years of MuleSoft development experience. The Integration Architect exam tests design decisions and tradeoffs, not basic implementation, so practical architecture experience is essential.',
  },
  {
    question: 'What is the MuleSoft Integration Architect exam format?',
    answer: 'The exam consists of 60 multiple-choice and multiple-select questions with a 120-minute time limit. The passing score is approximately 67%. The exam costs $400 for the first attempt, with a ~50% discount retake voucher after a failed attempt. It can be taken online (proctored) or at a Kryterion testing centre.',
  },
  {
    question: 'What is API-led connectivity and why is it central to this exam?',
    answer: 'API-led connectivity is MuleSoft\'s architectural approach that organises integrations into three layers: System APIs (direct system access), Process APIs (business logic orchestration), and Experience APIs (consumer-specific interfaces). It is the foundational design pattern for all enterprise MuleSoft architecture. The Integration Architect exam heavily tests when and how to apply API-led connectivity, including the tradeoffs compared to other integration patterns.',
  },
  {
    question: 'How is Integration Architect different from MuleSoft Developer certifications?',
    answer: 'MuleSoft Developer I and II test hands-on implementation skills — building flows, writing DataWeave, configuring connectors. MuleSoft Integration Architect tests architecture and design skills — which patterns to choose, how to design for scale and security, governance strategy, and how to present architectural decisions to stakeholders. The Architect exam requires less code knowledge and more strategic design thinking.',
  },
]

export default function MulesoftIntegrationArchitectStudyGuidePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/mulesoft-integration-architect-study-guide" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />

      <div data-lcp-header className="mb-10">
        <div className="inline-flex items-center gap-2 bg-salesforce-blue/10 text-salesforce-dark text-sm font-semibold px-3 py-1 rounded-full mb-4">
          <span>MuleSoft Architect Track</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          MuleSoft Integration Architect Study Guide ({RELEASE_CURRENT})
        </h1>
        <p className="text-lg text-gray-600">
          A complete study guide for the MuleSoft Certified Integration Architect exam — API-led connectivity, integration patterns, security architecture, and governance strategy.
        </p>
      </div>

      <ContentPageAuthor />

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
        {[
          { label: 'Questions', value: '60' },
          { label: 'Time Limit', value: '120 min' },
          { label: 'Passing Score', value: '~67%' },
          { label: 'Exam Fee', value: '$400' },
        ].map((stat) => (
          <div key={stat.label} className="bg-white rounded-xl border border-gray-100 p-4 text-center shadow-sm">
            <div className="text-2xl font-bold text-salesforce-blue">{stat.value}</div>
            <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Exam Sections &amp; Weightings</h2>
        <div className="space-y-4">
          {examSections.map((section) => (
            <div key={section.name}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-semibold text-gray-900">{section.name}</span>
                <span className="text-sm font-bold text-salesforce-blue">{section.weight}%</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2 mb-1">
                <div className="bg-salesforce-blue h-2 rounded-full" style={{ width: `${section.weight * 3.3}%` }} />
              </div>
              <p className="text-xs text-gray-500">{section.note}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">API-Led Connectivity Layers</h2>
        <div className="space-y-4">
          {[
            { layer: 'Experience APIs', colour: 'bg-blue-100 text-blue-800', desc: 'Consumer-specific interfaces tailored to each channel (mobile app, web app, partner). Shield consumers from system complexity. Change frequently as consumer needs evolve.' },
            { layer: 'Process APIs', colour: 'bg-purple-100 text-purple-800', desc: 'Business logic and orchestration layer. Combine data from multiple System APIs to implement business processes. Reusable across multiple Experience APIs.' },
            { layer: 'System APIs', colour: 'bg-green-100 text-green-800', desc: 'Direct access to systems of record (Salesforce, SAP, databases). Encapsulate system-specific details. Abstract backend changes from upper layers.' },
          ].map((item) => (
            <div key={item.layer} className="flex gap-4">
              <div className={`flex-shrink-0 px-3 py-1 rounded-lg text-xs font-bold h-fit ${item.colour}`}>{item.layer}</div>
              <p className="text-sm text-gray-700">{item.desc}</p>
            </div>
          ))}
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
        <h2 className="text-xl font-bold text-gray-900 mb-3">What Comes After This Certification?</h2>
        <p className="text-sm text-gray-700">
          After this certification, consider: <Link href="/certifications/application-architect" className="text-salesforce-blue font-medium hover:underline">Application Architect</Link>, <Link href="/certifications/system-architect" className="text-salesforce-blue font-medium hover:underline">System Architect</Link>, or <Link href="/certifications/technical-architect" className="text-salesforce-blue font-medium hover:underline">Technical Architect (CTA)</Link>.
        </p>
      </section>

      <DifficultyHeatmap slug="mulesoft-integration-architect" />
      <div className="bg-salesforce-blue rounded-xl p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-2">Practice MuleSoft Integration Architect Questions</h2>
        <p className="text-white mb-6">Free practice questions for the MuleSoft Integration Architect exam.</p>
        <Link href="/certifications/mulesoft-integration-architect" className="inline-flex items-center px-6 py-3 bg-white text-salesforce-blue rounded-lg font-semibold hover:bg-blue-50 transition-colors">
          Start Free Practice Questions
        </Link>
      </div>
    </div>
  )
}