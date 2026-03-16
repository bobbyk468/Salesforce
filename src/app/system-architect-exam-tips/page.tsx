import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, Clock, Target, ArrowRight } from 'lucide-react'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'

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
  {
    question: 'What concepts do most System Architect candidates get wrong?',
    answer: 'The most commonly misunderstood topics for the System Architect exam are: (1) System Architect Role Credential — Requires Four Domain Exams; (2) API Rate Limits vs Concurrency Limits — Volume vs Parallelism; (3) Event-Driven Architecture — When to Use Platform Events Over Direct Integration. Candidates are most confidently wrong on these — learn the distinctions early to avoid losing marks on questions you expect to get right.',
  },
]

export default function SystemArchitectExamTipsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/system-architect-exam-tips" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />

      <header data-lcp-header className="mb-10">
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

      <ContentPageAuthor />

      <section className="rounded-xl border border-gray-100 bg-gray-50 p-5 mb-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-600 mb-3">Exam At a Glance</p>
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


            <section className="rounded-xl border border-amber-100 bg-amber-50 p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-2">3 Concepts That Fail Most System Architect Candidates</h2>
        <p className="text-sm text-gray-600 mb-5">These are not the hardest topics — they are the ones where candidates are <strong>most confidently wrong</strong>. Learn the distinction early.</p>
        <div className="space-y-5">
          <div>
            <p className="font-semibold text-gray-900 mb-1">1. System Architect Role Credential — Requires Four Domain Exams</p>
            <p className="text-sm text-gray-700">The System Architect credential requires passing all four Domain Architect exams: Data Architect, Integration Architect, Sharing &amp; Visibility Architect, and Development Lifecycle &amp; Deployment Architect. There is no separate "System Architect exam." Candidates study for System Architect as a single test — understand that each domain exam is a standalone test and all four are required before the credential is awarded.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1">2. API Rate Limits vs Concurrency Limits — Volume vs Parallelism</p>
            <p className="text-sm text-gray-700">API Rate Limits cap the total number of API calls per 24 hours (org-based). Concurrency Limits cap the number of simultaneous long-running API requests (5 for Apex REST). Candidates troubleshoot integration failures by increasing API rate limits — when errors occur under moderate volume but with complex queries, concurrency limits are more likely the cause.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1">3. Event-Driven Architecture — When to Use Platform Events Over Direct Integration</p>
            <p className="text-sm text-gray-700">Platform Events decouple publishers (senders) from subscribers (receivers) — the publisher does not need to know who is listening or whether they are available. Direct API calls couple the caller to the called system (if the external system is down, the call fails). Candidates use direct callouts for all real-time data sharing — the exam expects Platform Events when decoupling, buffering, or fan-out (one event, multiple subscribers) is needed.</p>
          </div>
        </div>
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

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Related Exam Tips</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/application-architect-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Application Architect Exam Tips</span>
          </Link>
          <Link href="/integration-architect-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Integration Architect Exam Tips</span>
          </Link>
          <Link href="/integration-architect-vs-system-architect" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Integration Architect vs System Architect</span>
          </Link>
          <Link href="/architect-certification-path" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Architect Certification Path</span>
          </Link>
        </div>
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
