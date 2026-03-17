import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, Clock, Target, ArrowRight } from 'lucide-react'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import { getConceptFaqs } from '@/lib/exam-tips-concept-faqs'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'

const pageTitle = `MuleSoft Developer II Exam Tips (${RELEASE_CURRENT}): Study Guide`
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription =
  `MuleSoft Developer II exam tips for ${RELEASE_CURRENT}: API-led connectivity, Anypoint MQ, batch processing, custom policies Free practice questions.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/mulesoft-developer-ii-exam-tips` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/mulesoft-developer-ii-exam-tips`,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: ogImageUrl, alt: pageTitle }],
  },
  keywords:
    `MuleSoft Developer II exam tips ${RELEASE_CURRENT}, how to pass MuleSoft Developer II, advanced MuleSoft certification study guide, MuleSoft MCPA-Level-2`,
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'MuleSoft Developer II Exam Tips', url: '/mulesoft-developer-ii-exam-tips' },
]

const faqItems = [
  {
    question: 'What is the MuleSoft Developer II exam format?',
    answer: 'The MuleSoft Developer II exam has 60 multiple-choice questions, a 120-minute time limit, a 70% passing score, and a $200 fee ($100 retake). It tests advanced Mule 4 development: API-led connectivity, Anypoint MQ messaging, batch processing, custom API policies, and advanced DataWeave.',
  },
  {
    question: 'What are the highest-weight MuleSoft Developer II exam sections?',
    answer: 'API-Led Connectivity (28%) and Anypoint Platform Management (22%) together account for 50% of the exam. Designing three-tier API-led architectures (Experience, Process, System), deploying to CloudHub, using Anypoint MQ for async messaging, and implementing API policies are the most heavily tested topics.',
  },
  {
    question: 'What is API-led connectivity and why is it tested so heavily?',
    answer: 'API-led connectivity is MuleSoft&apos;s recommended integration architecture pattern. It organises integrations into three layers: System APIs (connect to core systems like SAP, Salesforce), Process APIs (orchestrate business logic combining system APIs), and Experience APIs (tailored for specific consumer channels like mobile or web). The exam tests when to place logic at each layer.',
  },
  {
    question: 'Do I need MuleSoft Developer I before Developer II?',
    answer: 'MuleSoft Developer I is the recommended (and effectively required) prerequisite for Developer II. Developer II assumes complete knowledge of Developer I content — flows, connectors, DataWeave, error handling — and builds advanced patterns on top. Candidates without Developer I knowledge will struggle significantly with Developer II material.',
  },
  {
    question: 'What concepts do most MuleSoft Developer II candidates get wrong?',
    answer: 'The most commonly misunderstood topics for the MuleSoft Developer II exam are: (1) Batch Processing — Batch Job Phases and Error Handling; (2) Async vs Sync Flow Execution — When Flow Runs Are Detached; (3) Watermark in Polling — Tracking Processed Records Across Runs. Candidates are most confidently wrong on these — learn the distinctions early to avoid losing marks on questions you expect to get right.',
  },
  ...getConceptFaqs('mulesoft-developer-ii-exam-tips'),
]

export default function MuleSoftDeveloperIIExamTipsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/mulesoft-developer-ii-exam-tips" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />

      <header data-lcp-header className="mb-10">
        <p className="inline-flex items-center rounded-full bg-salesforce-blue/10 px-3 py-1 text-sm font-medium text-salesforce-blue mb-4">
          Updated for {RELEASE_CURRENT}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          MuleSoft Developer II Exam Tips ({RELEASE_CURRENT}): How to Pass
        </h1>
        <p className="text-lg text-gray-600">
          The MuleSoft Developer II exam tests advanced Mule 4 development skills including API-led connectivity
          architecture, Anypoint Platform management, and async messaging. These tips focus on the three-layer
          API architecture, deployment patterns, and Anypoint MQ that dominate the exam.
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
            <p className="text-2xl font-bold text-salesforce-blue">120 min</p>
            <p className="text-xs text-gray-500 mt-0.5">Time Limit</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-salesforce-blue">70%</p>
            <p className="text-xs text-gray-500 mt-0.5">Passing Score</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-salesforce-blue">$200</p>
            <p className="text-xs text-gray-500 mt-0.5">Exam Fee</p>
          </div>
        </div>
      </section>


      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Quick Answer: What MuleSoft Developer II Tests</h2>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>API-led connectivity</strong> — Three-tier architecture (Experience, Process, System APIs), how to correctly layer business logic, API specifications with RAML, and the trade-offs of each architecture decision.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Anypoint Platform management</strong> — CloudHub deployment, API Manager, API policies (rate limiting, client ID enforcement, OAuth), API Analytics, and environment management across development, staging, and production.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Async messaging and batch</strong> — Anypoint MQ (queues, exchanges, message acknowledgement), batch processing (batch jobs, batch steps, on-complete phase), and when to use async patterns vs. synchronous flows.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Highest-Weight Exam Sections</h2>
        <div className="space-y-3 text-sm text-gray-700">
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">API-Led Connectivity Design</span>
            <span className="font-bold text-salesforce-blue ml-4">28%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Anypoint Platform Management</span>
            <span className="font-bold text-salesforce-blue ml-4">22%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Anypoint MQ and Async Patterns</span>
            <span className="font-bold text-salesforce-blue ml-4">20%</span>
          </div>
          <div className="flex justify-between items-start">
            <span className="font-medium text-gray-900">Batch Processing</span>
            <span className="font-bold text-salesforce-blue ml-4">16%</span>
          </div>
          <p className="text-xs text-gray-500 pt-1">API-led + Platform Management + Anypoint MQ = 70%. Three-tier architecture design is the highest-value study area.</p>
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Scenario Strategy: How to Approach MuleSoft Developer II Questions</h2>
        <p className="text-sm text-gray-700 mb-3">
          Questions describe an enterprise integration requirement and ask which architecture pattern, Anypoint
          component, or deployment approach is correct. Think about the three-layer API model first —
          which layer should own the logic described in the scenario?
        </p>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For API-led architecture questions: System APIs connect to core backends (SAP, databases, legacy systems) — no business logic here. Process APIs orchestrate data from multiple System APIs and implement business logic. Experience APIs tailor output for a specific channel (mobile, web portal). Logic in the wrong layer = wrong answer.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For Anypoint MQ questions: queues deliver to one consumer; exchanges (topic/fifo) can fan out to multiple subscribers. Acknowledgement modes: AUTO (ack on receive), MANUAL (ack after processing), NONE (no ack). Use MANUAL when you need guaranteed processing before acknowledging.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For API policy questions: Rate Limiting throttles by request count per time window. Client ID Enforcement requires consumers to pass a client ID. OAuth 2.0 policy validates access tokens. Apply policies in API Manager — they attach to an API instance, not the Mule application code directly.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Mock-Test Benchmark Before Booking</h2>
        <p className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2">
          <Clock className="h-4 w-4" />
          78%+ on 3 timed full mocks before booking (70% passing score)
        </p>
        <p className="text-sm text-gray-700 mt-3">
          Developer II has a 70% passing score — the same as Developer I but with more complex architectural
          content. Real API-led project experience is important: candidates who have designed and implemented
          a three-tier MuleSoft architecture perform significantly better on the architecture design questions.
        </p>
      </section>


            <section className="rounded-xl border border-amber-100 bg-amber-50 p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-2">3 Concepts That Fail Most MuleSoft Developer II Candidates</h2>
        <p className="text-sm text-gray-600 mb-5">These are not the hardest topics — they are the ones where candidates are <strong>most confidently wrong</strong>. Learn the distinction early.</p>
        <div className="space-y-5">
          <div>
            <p className="font-semibold text-gray-900 mb-1">1. Batch Processing — Batch Job Phases and Error Handling</p>
            <p className="text-sm text-gray-700">Mule Batch Jobs have three phases: Input (record collection), Process (on-record parallel processing), and On Complete (summary handling after all records are processed). Errors in the Process phase are per-record — a failed record does not stop other records from processing. Candidates design Batch Jobs expecting a single error to halt processing — the exam expects per-record error handling and the acceptPolicy setting that controls how failures affect the batch.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1">2. Async vs Sync Flow Execution — When Flow Runs Are Detached</p>
            <p className="text-sm text-gray-700">By default, flows called via Flow Reference execute synchronously (in the same thread as the caller). Async scopes run a sub-flow asynchronously in a new thread, and the caller does not wait for the result. Candidates use Async scope expecting the caller to receive the async response — Async is fire-and-forget. Know when to use each based on whether the caller needs the processing result.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1">3. Watermark in Polling — Tracking Processed Records Across Runs</p>
            <p className="text-sm text-gray-700">A Watermark in a Scheduler-triggered polling flow tracks the last-processed record (e.g., last timestamp) so subsequent runs only retrieve new or updated records. Without Watermark, every run re-processes all records. Candidates implement custom tracking variables for incremental polling — the exam expects the built-in Watermark feature with an Object Store for persistence across Mule runtime restarts.</p>
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
          <Link href="/mulesoft-developer-i-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">MuleSoft Developer I Exam Tips</span>
          </Link>
          <Link href="/mulesoft-integration-architect-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">MuleSoft Integration Architect Exam Tips</span>
          </Link>
          <Link href="/mulesoft-developer-i-vs-ii" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">MuleSoft Developer I vs II</span>
          </Link>
          <Link href="/developer-certification-path" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Developer Certification Path</span>
          </Link>
        </div>
      </section>


      <section className="rounded-xl border border-salesforce-blue/20 bg-salesforce-blue/5 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Start MuleSoft Developer II Prep</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/certifications/mulesoft-developer-ii" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-colors">
            MuleSoft Developer II Practice Questions <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/mulesoft-developer-i-exam-tips" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            MuleSoft Developer I Tips
          </Link>
          <Link href="/developer-certification-path" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            Developer Certification Path
          </Link>
        </div>
      </section>
    </div>
  )
}
