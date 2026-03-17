import type { Metadata } from 'next'
import Link from 'next/link'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import DifficultyHeatmap from '@/components/DifficultyHeatmap'
import { buildStudyGuideTitle } from '@/lib/seo-title-helpers'


const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const slug = 'mulesoft-platform-architect'
const pageTitle = buildStudyGuideTitle(slug)
const pageDescription = `MuleSoft Platform Architect study guide: Anypoint Platform, connectivity, operations, governance. Pass in 2026 Free practice questions.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/mulesoft-platform-architect-study-guide` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/mulesoft-platform-architect-study-guide`,
    images: [{ url: `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`, alt: pageTitle }],
  },
  keywords: `mulesoft platform architect study guide, mulesoft platform architect exam, anypoint platform architect certification 2026, mulesoft architect exam prep`,
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'MuleSoft Platform Architect Study Guide', url: '/mulesoft-platform-architect-study-guide' },
]

const examSections = [
  { name: 'Platform Architecture & Design', weight: 30, note: 'Anypoint Platform deployment models (CloudHub, RTF, hybrid), runtime architecture, and platform topology design.' },
  { name: 'Connectivity & API Management', weight: 25, note: 'API Manager configuration, gateway policies, API contracts, client management, and API Analytics.' },
  { name: 'Security & Access Control', weight: 20, note: 'Anypoint Platform security: encryption, OAuth 2.0, client ID enforcement, API policies, and secrets management.' },
  { name: 'Operations & Monitoring', weight: 15, note: 'Runtime Manager, application monitoring, alerts, log management, and CloudHub infrastructure operations.' },
  { name: 'Governance & Centre for Enablement', weight: 10, note: 'C4E (Centre for Enablement) setup, asset reuse strategy, API cataloguing in Exchange, and governance framework design.' },
]

const faqItems = [
  {
    question: 'What is the MuleSoft Platform Architect certification?',
    answer: 'The MuleSoft Certified Platform Architect validates expertise in designing and operating the Anypoint Platform infrastructure — deployment architecture, connectivity management, platform security, and operational monitoring. It focuses on the platform itself rather than individual integration design, distinguishing it from the Integration Architect certification which focuses on integration pattern and API design decisions.',
  },
  {
    question: 'How does Platform Architect differ from Integration Architect?',
    answer: 'MuleSoft Integration Architect focuses on integration and API design decisions — which patterns to use, how to design APIs, how to structure integrations. MuleSoft Platform Architect focuses on Anypoint Platform infrastructure — how to deploy and operate the platform, configure API Manager, manage the runtime environment, and implement platform governance. Many senior MuleSoft professionals pursue both certifications.',
  },
  {
    question: 'What is the MuleSoft Platform Architect exam format?',
    answer: 'The exam consists of 60 multiple-choice and multiple-select questions with a 120-minute time limit. The passing score is approximately 67%. The exam costs $400 for the first attempt, with a ~50% discount retake voucher after a failed attempt. It can be taken online (proctored) or at a Kryterion testing centre.',
  },
  {
    question: 'What deployment models does the exam cover?',
    answer: 'The exam covers all Anypoint Platform deployment models: CloudHub 1.0 and CloudHub 2.0 (Salesforce-managed cloud), Runtime Fabric (RTF) for customer-managed Kubernetes environments, and standalone/hybrid on-premises deployments. You need to understand the tradeoffs between each model — operational control, cost, latency, compliance requirements — and be able to select the appropriate model for given scenario requirements.',
  },
  {
    question: 'What is the Centre for Enablement (C4E) and why does it matter?',
    answer: 'The Centre for Enablement (C4E) is MuleSoft\'s recommended internal team structure for managing the Anypoint Platform at scale. A C4E governs platform usage, promotes API and integration reuse, curates assets in Anypoint Exchange, provides templates and best practices, and measures platform adoption. The Platform Architect exam tests how to design and implement a C4E model within an organisation.',
  },
]

export default function MulesoftPlatformArchitectStudyGuidePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/mulesoft-platform-architect-study-guide" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />

      <div data-lcp-header className="mb-10">
        <div className="inline-flex items-center gap-2 bg-salesforce-blue/10 text-salesforce-dark text-sm font-semibold px-3 py-1 rounded-full mb-4">
          <span>MuleSoft Architect Track</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          MuleSoft Platform Architect Study Guide ({RELEASE_CURRENT})
        </h1>
        <p className="text-lg text-gray-600">
          A complete study guide for the MuleSoft Certified Platform Architect exam — Anypoint Platform deployment models, API Manager, security, operations, and governance strategy.
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
        <h2 className="text-xl font-bold text-gray-900 mb-4">Anypoint Platform Deployment Models</h2>
        <div className="space-y-3 text-sm text-gray-700">
          {[
            { model: 'CloudHub 2.0', detail: 'Salesforce-managed fully hosted runtime. Automatic scaling, high availability, and infrastructure management. Lowest operational overhead. Best for organisations that prefer managed cloud.' },
            { model: 'Runtime Fabric (RTF)', detail: 'Customer-managed Kubernetes environment (on-premises or cloud). Full control over infrastructure. Suitable for strict data residency and compliance requirements.' },
            { model: 'Hybrid / Standalone', detail: 'On-premises Mule runtime with Anypoint Platform management. Maximum control. Suitable for air-gapped or highly regulated environments.' },
          ].map((item) => (
            <div key={item.model} className="flex gap-3">
              <span className="font-bold text-salesforce-blue min-w-[140px] flex-shrink-0 text-xs">{item.model}</span>
              <p className="text-xs">{item.detail}</p>
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

      <DifficultyHeatmap slug="mulesoft-platform-architect" />
      <div className="bg-salesforce-blue rounded-xl p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-2">Practice MuleSoft Platform Architect Questions</h2>
        <p className="text-white mb-6">Free practice questions for the MuleSoft Platform Architect exam.</p>
        <Link href="/certifications/mulesoft-platform-architect" className="inline-flex items-center px-6 py-3 bg-white text-salesforce-blue rounded-lg font-semibold hover:bg-blue-50 transition-colors">
          Start Free Practice Questions
        </Link>
      </div>
    </div>
  )
}