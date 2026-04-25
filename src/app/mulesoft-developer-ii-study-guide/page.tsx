import type { Metadata } from 'next'
import Link from 'next/link'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import DifficultyHeatmap from '@/components/DifficultyHeatmap'
import { buildStudyGuideTitle } from '@/lib/seo-title-helpers'
import ExamTipsCrossLink from '@/components/ExamTipsCrossLink'
import CertInsightBlock from '@/components/CertInsightBlock'



const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const slug = 'mulesoft-developer-ii'
const pageTitle = buildStudyGuideTitle(slug)
const pageDescription = `MuleSoft Developer II study guide: 5 sections, DataWeave, batch, security, deployment. $200. Free practice questions. Pass first attempt.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/mulesoft-developer-ii-study-guide` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/mulesoft-developer-ii-study-guide`,
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
  { name: 'MuleSoft Developer II Study Guide', url: '/mulesoft-developer-ii-study-guide' },
]

const examSections = [
  { name: 'Advanced Application Development', weight: 35, note: 'Advanced Mule 4 patterns: idempotent message filter, reliable messaging patterns, watermarking for batch processing. Advanced connectors (VM, Object Store, Anypoint MQ). Custom error handling strategies and global error handlers.' },
  { name: 'Advanced API Design & Governance', weight: 23, note: 'API governance with Anypoint Exchange, API versioning strategies, API Notebooks for documentation, custom policy development with PDK (Policy Development Kit), applying custom policies in API Manager.' },
  { name: 'Advanced DataWeave', weight: 20, note: 'Complex DataWeave transformations: recursive functions, type system, custom modules, output formats (multipart, binary), streaming large payloads, and performance optimisation of DataWeave scripts.' },
  { name: 'Security', weight: 12, note: 'Securing APIs with custom policies, OAuth 2.0 implementation, TLS/HTTPS configuration, secure properties encryption, Anypoint Secret Manager integration, and applying security best practices across environments.' },
  { name: 'Batch Processing & Performance', weight: 10, note: 'Batch job phases (Process Records, On Complete), batch processing for large datasets, watermarking for incremental processing, performance tuning for high-throughput integrations, and memory management.' },
]

const faqItems = [
  {
    question: 'What is the MuleSoft Developer II certification?',
    answer: 'The MuleSoft Developer II (MCIA-Level-2) certification validates advanced MuleSoft Anypoint Platform skills beyond Developer I. It covers advanced DataWeave, custom API policy development, batch processing, reliable messaging, security, and API governance. The exam has 60 questions, 120 minutes, ~70% passing score, and a $200 fee. MuleSoft Developer I is a required prerequisite.',
  },
  {
    question: 'What prerequisites are required for MuleSoft Developer II?',
    answer: 'MuleSoft Developer I (MCIA-Level-1) is a formal prerequisite — you must hold Developer I before you can sit Developer II. Beyond the formal requirement, strong real-world Mule 4 project experience is essential. Developer II tests advanced patterns that typically require 1–2 years of hands-on Anypoint Platform development experience after Developer I.',
  },
  {
    question: 'What is watermarking in MuleSoft and why is it tested?',
    answer: 'Watermarking is a pattern for incremental data processing — tracking which records have already been processed so subsequent runs only process new or updated records. In MuleSoft, watermarking is implemented using the Object Store connector to persist the last processed timestamp or ID between flow executions. It is commonly combined with batch processing for large dataset integrations and is directly tested on Developer II.',
  },
  {
    question: 'What is a custom policy in MuleSoft API Manager?',
    answer: 'Custom policies are reusable API governance rules applied to APIs via API Manager. They are built using the MuleSoft Policy Development Kit (PDK) — writing policy logic in DataWeave and configuring policy metadata. Custom policies can enforce authentication, rate limiting, data transformation, logging, or any custom requirement that the out-of-the-box policies do not cover. Building and applying custom policies is a key Developer II topic.',
  },
  {
    question: 'How long should I study for the MuleSoft Developer II exam?',
    answer: 'Plan for 8–10 weeks after MuleSoft Developer I, with 10–15 hours per week. Focus on the areas Developer I did not cover deeply: custom policies, advanced DataWeave (recursive functions, custom modules), batch job phases, Anypoint MQ reliable messaging, and the Object Store connector. All topics require hands-on sandbox practice in Anypoint Studio.',
  },
]

export default function MulesoftDeveloperIiStudyGuidePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/mulesoft-developer-ii-study-guide" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />

      <div data-lcp-header className="mb-10">
        <div className="inline-flex items-center gap-2 bg-salesforce-blue/10 text-salesforce-dark text-sm font-semibold px-3 py-1 rounded-full mb-4">
          <span>Study Guide</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          MuleSoft Developer II Study Guide ({RELEASE_CURRENT})
        </h1>
        <p className="text-lg text-gray-600">
          Your complete guide to passing MuleSoft Developer II — advanced DataWeave, custom policies, batch processing, reliable messaging, and security.
        </p>
      </div>

      <ContentPageAuthor />
      <ExamTipsCrossLink examTipsSlug="mulesoft-developer-ii-exam-tips" certName="MuleSoft Developer II" />
      <CertInsightBlock certSlug="mulesoft-developer-ii" />

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
        {[
          { label: 'Questions', value: '60' },
          { label: 'Time Limit', value: '120 min' },
          { label: 'Passing Score', value: '~70%' },
          { label: 'Exam Fee', value: '$200' },
        ].map((stat) => (
          <div key={stat.label} className="bg-white rounded-xl border border-gray-100 p-4 text-center shadow-sm">
            <div className="text-2xl font-bold text-salesforce-blue">{stat.value}</div>
            <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Exam Sections &amp; Weightings</h2>
        <div className="space-y-4">
          {examSections.map((section) => (
            <div key={section.name}>
              <div className="flex justify-between text-sm mb-1">
                <span className="font-medium text-gray-800">{section.name}</span>
                <span className="text-salesforce-blue font-semibold">{section.weight}%</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div className="bg-salesforce-blue h-2 rounded-full" style={{ width: `${section.weight * 2.8}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">What Each Section Tests</h2>
        <div className="space-y-4">
          {examSections.map((section) => (
            <div key={section.name} className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 mt-0.5 inline-flex items-center justify-center w-7 h-7 rounded-full bg-salesforce-blue/10 text-salesforce-dark text-xs font-bold">{section.weight}%</span>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{section.name}</h3>
                  <p className="text-sm text-gray-600">{section.note}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">8-Week Study Plan</h2>
        <div className="space-y-3 text-sm">
          {[
            { week: 'Week 1', focus: 'Review Developer I foundations — ensure solid knowledge of flow design, DataWeave basics, connectors, and error handling before advancing to Level II content.' },
            { week: 'Week 2', focus: 'Advanced DataWeave — recursive functions, custom DataWeave modules, streaming large payloads, multipart and binary output formats, and performance optimisation.' },
            { week: 'Week 3', focus: 'Reliable messaging — idempotent message filter, Anypoint MQ publish/consume, message acknowledgement, dead-letter queues, and the VM connector for in-memory messaging.' },
            { week: 'Week 4', focus: 'Batch processing — batch job phases (Process Records, On Complete), batch size tuning, watermarking with Object Store for incremental processing, error handling in batch.' },
            { week: 'Week 5', focus: 'Security — TLS/HTTPS configuration, secure properties encryption, Anypoint Secret Manager, OAuth 2.0 enforcement, and applying out-of-the-box API policies.' },
            { week: 'Week 6', focus: 'Custom policies — Policy Development Kit (PDK), writing DataWeave policy logic, policy YAML metadata, deploying custom policies to API Manager, and applying to APIs.' },
            { week: 'Week 7', focus: 'API governance — Anypoint Exchange organisation, API versioning strategies (URI versioning, header versioning), API Notebooks for documentation.' },
            { week: 'Week 8', focus: 'Full mock exams under 120-minute time pressure. Focus on advanced DataWeave scenarios and batch/watermarking questions — these are most commonly tested and missed.' },
          ].map((item) => (
            <div key={item.week} className="flex gap-3">
              <span className="flex-shrink-0 font-semibold text-salesforce-blue w-16">{item.week}</span>
              <span className="text-gray-700">{item.focus}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Scenario Strategy Tips</h2>
        <ul className="space-y-3 text-sm text-gray-700">
          <li className="flex gap-2"><span className="text-salesforce-blue font-bold flex-shrink-0">1.</span><span><strong>Reliable messaging pattern:</strong> Use Anypoint MQ for durable, asynchronous message passing between Mule applications or to external systems. Use the VM connector for in-memory, within-application messaging (no external MQ required). Idempotent message filter prevents duplicate processing — use with a correlation ID and Object Store.</span></li>
          <li className="flex gap-2"><span className="text-salesforce-blue font-bold flex-shrink-0">2.</span><span><strong>Batch job phases:</strong> Process Records phase processes each record in parallel (configurable batch size). On Complete phase runs once after all records are processed — use it for post-processing summaries, notifications, or cleanup. Error handling in batch is per-record — failed records go to failed records and do not stop successful records.</span></li>
          <li className="flex gap-2"><span className="text-salesforce-blue font-bold flex-shrink-0">3.</span><span><strong>Watermarking implementation:</strong> On each run, retrieve the last watermark from Object Store → use it to query only new/updated records → process records → update the watermark in Object Store with the new max value. This ensures each run only processes incremental data.</span></li>
          <li className="flex gap-2"><span className="text-salesforce-blue font-bold flex-shrink-0">4.</span><span><strong>Custom policy vs built-in policy:</strong> Use built-in policies (Rate Limiting, OAuth 2.0, IP Allowlist) when available — they are maintained by MuleSoft and require no code. Build a custom policy only when the requirement cannot be met by any built-in policy. The exam tests knowing when a custom policy is the right tool.</span></li>
        </ul>
      </div>

      <div className="bg-salesforce-blue/5 rounded-xl border border-salesforce-blue/20 p-5 mb-8">
        <h2 className="text-lg font-bold text-gray-900 mb-2">Mock Exam Benchmark</h2>
        <p className="text-sm text-gray-700">Aim for <strong>80%+ on practice exams</strong> given the 70% passing score. Advanced Application Development (35%) is the heaviest section — master reliable messaging, Object Store, and Anypoint MQ before test day. Advanced DataWeave (20%) requires writing and reading complex expressions fluently.</p>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Top 10 Concepts to Review</h2>
        <ol className="space-y-2 text-sm text-gray-700 list-decimal list-inside">
          <li>Reliable messaging: Anypoint MQ publish/subscribe, message acknowledgement, dead-letter queues</li>
          <li>Idempotent message filter: duplicate detection with correlation ID and Object Store</li>
          <li>Batch job phases: Process Records (parallel), On Complete (sequential post-processing)</li>
          <li>Watermarking: Object Store + Scheduler + incremental query pattern</li>
          <li>Advanced DataWeave: recursive functions, custom modules, streaming large payloads</li>
          <li>Secure properties encryption and Anypoint Secret Manager integration</li>
          <li>OAuth 2.0 enforcement via API Manager policies</li>
          <li>Custom policy development: PDK, DataWeave policy logic, policy YAML metadata</li>
          <li>TLS/HTTPS configuration in Mule 4 HTTP Listener</li>
          <li>API versioning strategies: URI versioning (/v1/api) vs header versioning</li>
        </ol>
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
          After this certification, consider: <Link href="/certifications/developer-2" className="text-salesforce-blue font-medium hover:underline">Platform Developer II</Link>, <Link href="/certifications/app-builder" className="text-salesforce-blue font-medium hover:underline">Platform App Builder</Link>, or <Link href="/certifications/javascript-developer-i" className="text-salesforce-blue font-medium hover:underline">JavaScript Developer I</Link>.
        </p>
      </section>

      <DifficultyHeatmap slug="mulesoft-developer-ii" />
      <div className="bg-salesforce-blue rounded-xl p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-2">Ready to Practice?</h2>
        <p className="text-white mb-6">Test yourself with free MuleSoft Developer II practice questions.</p>
        <Link href="/certifications/mulesoft-developer-ii" className="inline-flex items-center px-6 py-3 bg-white text-salesforce-blue rounded-lg font-semibold hover:bg-blue-50 transition-colors">
          Start Free Practice Questions
        </Link>
      </div>
    </div>
  )
}