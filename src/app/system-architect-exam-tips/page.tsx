import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, Clock, Target, ArrowRight } from 'lucide-react'
import { getWebPageJsonLd, getBreadcrumbListJsonLd, getArticleJsonLd, getFaqPageJsonLd } from '@/lib/schema-data'
import { RELEASE_CURRENT } from '@/lib/release-data'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'

const pageTitle = `System Architect Exam Tips (${RELEASE_CURRENT}): Study Guide`
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription =
  `Salesforce System Architect exam tips for ${RELEASE_CURRENT}: identity, integrations, deployment architecture, and governance to pass first attempt.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/system-architect-exam-tips` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/system-architect-exam-tips`,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: ogImageUrl, alt: pageTitle }],
  },
  keywords:
    `Salesforce System Architect exam tips ${RELEASE_CURRENT}, how to pass System Architect, System Architect study guide, Salesforce architect certification tips, System Architect first attempt`,
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'System Architect Exam Tips', url: '/system-architect-exam-tips' },
]

const faqItems = [
  {
    question: 'What is the Salesforce System Architect credential?',
    answer: 'The Salesforce Certified System Architect credential is an architect-level certification that validates knowledge of identity and access management, integrations, environment management, and governance. It is one of the two credentials (with Application Architect) required to earn the broader System and Application Architect designation on the path to CTA.',
  },
  {
    question: 'What are the highest-weight System Architect exam sections?',
    answer: 'Governance and Development Lifecycle (34%) and Integrations and Identity (28%) together account for 62% of the System Architect exam. These two sections are the most critical to master before attempting the exam.',
  },
  {
    question: 'What certifications feed into the System Architect credential?',
    answer: 'The System Architect credential is earned by completing: Identity and Access Management Architect, Development Lifecycle and Deployment Architect, and Heroku Architect (or equivalent). Each can be studied and sat independently before earning the combined credential.',
  },
  {
    question: 'How hard is the Salesforce System Architect exam?',
    answer: 'The System Architect exam is very challenging. It tests cross-domain knowledge spanning Salesforce security model, OAuth flows, CI/CD pipelines, and multi-cloud architecture. Most successful candidates have 5+ years of Salesforce experience and multiple domain certifications before attempting it.',
  },
]

export default function SystemArchitectExamTipsPage() {
  const webPageJsonLd = getWebPageJsonLd({
    name: pageTitle,
    description: pageDescription,
    path: '/system-architect-exam-tips',
    breadcrumbItems,
  })
  const breadcrumbJsonLd = getBreadcrumbListJsonLd(breadcrumbItems)
  const articleJsonLd = getArticleJsonLd({
    headline: pageTitle,
    description: pageDescription,
    path: '/system-architect-exam-tips',
  })
  const faqJsonLd = getFaqPageJsonLd(faqItems)

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <header className="mb-10">
        <p className="inline-flex items-center rounded-full bg-salesforce-blue/10 px-3 py-1 text-sm font-medium text-salesforce-blue mb-4">
          Updated for {RELEASE_CURRENT}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          System Architect Exam Tips ({RELEASE_CURRENT}): How to Pass
        </h1>
        <p className="text-lg text-gray-600">
          The Salesforce System Architect credential is an architect-track exam testing identity,
          integrations, environment management, and governance. These tips help you focus on the
          cross-domain knowledge that distinguishes System Architect from domain-specific certs.
        </p>
      </header>

      <section className="rounded-xl border border-gray-100 bg-gray-50 p-5 mb-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">Exam At a Glance</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div>
            <p className="text-2xl font-bold text-salesforce-blue">60</p>
            <p className="text-xs text-gray-500 mt-0.5">Questions</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-salesforce-blue">105 min</p>
            <p className="text-xs text-gray-500 mt-0.5">Time Limit</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-salesforce-blue">65%</p>
            <p className="text-xs text-gray-500 mt-0.5">Passing Score</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-salesforce-blue">$200</p>
            <p className="text-xs text-gray-500 mt-0.5">Exam Fee</p>
          </div>
        </div>
      </section>


      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Quick Answer: What System Architect Actually Tests</h2>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Cross-domain thinking:</strong> The exam tests how identity, integrations, and deployment decisions interact — not each in isolation.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Governance at scale:</strong> Org strategy, sandboxes, release management, and DevOps processes across large enterprise Salesforce implementations.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Security architecture:</strong> OAuth flows, SAML, SSO, Named Credentials, and connected app permissions — not just configuration, but architectural trade-offs.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">High-Weight Exam Sections to Prioritise</h2>
        <div className="space-y-3 text-sm text-gray-700">
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Governance and Development Lifecycle</span>
            <span className="font-bold text-salesforce-blue ml-4">34%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Integrations and Identity</span>
            <span className="font-bold text-salesforce-blue ml-4">28%</span>
          </div>
          <div className="flex justify-between items-start">
            <span className="font-medium text-gray-900">Platform and Heroku Architecture</span>
            <span className="font-bold text-salesforce-blue ml-4">38%</span>
          </div>
          <p className="text-xs text-gray-500 pt-1">Governance and Integrations/Identity together account for 62% — prioritise these first.</p>
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Core Topics You Must Master</h2>
        <p className="text-sm text-gray-700 mb-3">
          For each topic, understand not just <em>what</em> it is but <em>when</em> to recommend it vs alternatives.
        </p>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" /><strong>OAuth and SAML flows:</strong> Web Server, User-Agent, JWT Bearer Token, SAML Assertion — know which to recommend based on scenario constraints.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" /><strong>CI/CD and DevOps:</strong> Sandbox strategy, scratch orgs, change sets vs SFDX vs metadata API deployments, release management governance.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" /><strong>Heroku architecture:</strong> When to use Heroku vs Salesforce platform, data residency decisions, Heroku Connect sync strategy.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" /><strong>Multi-org strategy:</strong> When to use one org vs multiple, sharing data across orgs, connected apps and external objects.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Mock-Test Benchmark Before Booking</h2>
        <p className="text-sm text-gray-700 mb-2">
          The System Architect exam tests broad architectural judgement under time pressure:
        </p>
        <p className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2">
          <Clock className="h-4 w-4" />
          75%+ on 3 timed full mocks, each covering all domains
        </p>
        <p className="text-sm text-gray-700 mt-3">
          Scenario questions will combine identity + integration + governance in a single question.
          If you can only answer each topic in isolation, you are not yet ready.
        </p>
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
        <h2 className="text-xl font-bold text-gray-900 mb-3">Start System Architect Prep</h2>
        <p className="text-sm text-gray-700 mb-4">
          Apply these tips with real exam-style practice:
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/certifications/system-architect"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-colors"
          >
            System Architect Practice Questions
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/become-cta"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            Full CTA Path Guide
          </Link>
          <Link
            href="/certifications/role/architect"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            All Architect Certifications
          </Link>
        </div>
      </section>
    </div>
  )
}
