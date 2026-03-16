import type { Metadata } from 'next'
import Link from 'next/link'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const pageTitle = `Integration Architect Study Guide (${RELEASE_CURRENT})`
const pageDescription = `Integration Architect study guide: 5 sections, 10-week plan, API patterns, async vs sync. $400, ~68% pass Free practice questions.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/integration-architect-study-guide` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/integration-architect-study-guide`,
    images: [{ url: `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`, alt: pageTitle }],
  },
  keywords: `salesforce integration architect study guide, integration architect certification 2026, salesforce integration exam prep, MCIA architect certification`,
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Integration Architect Study Guide', url: '/integration-architect-study-guide' },
]

const examSections = [
  { name: 'Translating Business Requirements', weight: 25, note: 'Converting integration requirements into architectural decisions. Identify integration patterns (point-to-point, hub-and-spoke, ESB, API-led) appropriate for each business scenario. Evaluate trade-offs between real-time and batch integration. Assess non-functional requirements: latency, throughput, availability, error tolerance.' },
  { name: 'Architecting Integration Solutions', weight: 25, note: 'Designing REST and SOAP APIs on Salesforce, Apex callouts, Platform Events, Change Data Capture (CDC), and Streaming API. Understanding the Salesforce Integration Patterns: remote process invocation (sync/async), data replication, UI update, batch data sync. Middleware and API gateway design.' },
  { name: 'Understanding Integration Protocols & Patterns', weight: 25, note: 'REST vs SOAP trade-offs, OAuth 2.0 flows, named credentials, remote site settings, certificate management. Salesforce Platform Events and event-driven architecture. Bulk API vs REST API vs SOAP API for data volume decisions. Salesforce Connect and external objects.' },
  { name: 'Performance, Scalability & Error Handling', weight: 15, note: 'Governor limits impact on integration design (callout limits, heap size, CPU timeout). Async Apex patterns for callout scalability: Queueable vs Future vs Batch. Idempotency, retry logic, dead-letter queues. Monitoring integrations with Platform Event replay IDs.' },
  { name: 'Governance & Monitoring', weight: 10, note: 'API versioning strategy, deprecation planning, integration documentation standards. API Management tools: Salesforce API Manager, MuleSoft Anypoint, Apigee. Monitoring callout failures, Platform Event delivery guarantees, and alerting strategy.' },
]

const faqItems = [
  {
    question: 'What is the Salesforce Integration Architect certification?',
    answer: 'The Salesforce Integration Architect certification validates ability to design and architect enterprise integration solutions on the Salesforce platform. The exam covers integration patterns (REST, SOAP, streaming, event-driven), error handling, scalability, and governance. It has 60 questions, 110-minute time limit, ~68% passing score, and a $400 fee. It is part of the Application Architect credential path.',
  },
  {
    question: 'What are the prerequisites for Integration Architect?',
    answer: 'No formal prerequisites are listed, but Salesforce strongly recommends holding ADM-201 and Platform Developer I before attempting Integration Architect. Candidates typically have 3–5 years of Salesforce integration experience. The exam assumes deep knowledge of Salesforce APIs, Apex callouts, Platform Events, and external authentication patterns.',
  },
  {
    question: 'What integration patterns are tested on the exam?',
    answer: 'The exam tests all major Salesforce integration patterns: Remote Process Invocation (sync and async), Data Replication (inbound and outbound), UI Update via Salesforce, and Batch Data Synchronisation. For each pattern, you must know when to apply it, what Salesforce features implement it (Platform Events, CDC, Bulk API, Apex callouts), and the trade-offs involved.',
  },
  {
    question: 'How hard is the Integration Architect exam?',
    answer: 'Integration Architect is considered one of the more challenging Salesforce exams. It tests deep technical knowledge and scenario-based architecture decisions, not just feature recall. Candidates must understand governor limits, async patterns, API design trade-offs, and error handling strategies. Most candidates have 3–5 years of integration experience and still spend 10–12 weeks preparing.',
  },
  {
    question: 'What is the difference between Platform Events and CDC?',
    answer: 'Platform Events are custom event messages you define and publish to the Salesforce event bus — used for near-real-time notifications between systems. Change Data Capture (CDC) automatically publishes change events whenever Salesforce records are created, updated, deleted, or undeleted — used for data replication to external systems. Both use the CometD streaming protocol and replay IDs for guaranteed delivery.',
  },
]

export default function IntegrationArchitectStudyGuidePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/integration-architect-study-guide" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />

      <div data-lcp-header className="mb-10">
        <div className="inline-flex items-center gap-2 bg-salesforce-blue/10 text-salesforce-dark text-sm font-semibold px-3 py-1 rounded-full mb-4">
          <span>Study Guide</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          Salesforce Integration Architect Study Guide ({RELEASE_CURRENT})
        </h1>
        <p className="text-lg text-gray-600">
          Your complete guide to passing the Salesforce Integration Architect exam — integration patterns, API design, async strategies, error handling, and governance.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
        {[
          { label: 'Questions', value: '60' },
          { label: 'Time Limit', value: '110 min' },
          { label: 'Passing Score', value: '~68%' },
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
              <div className="flex justify-between text-sm mb-1">
                <span className="font-medium text-gray-800">{section.name}</span>
                <span className="text-salesforce-blue font-semibold">{section.weight}%</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div className="bg-salesforce-blue h-2 rounded-full" style={{ width: `${section.weight * 3.3}%` }} />
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
        <h2 className="text-xl font-bold text-gray-900 mb-4">10-Week Study Plan</h2>
        <div className="space-y-3 text-sm">
          {[
            { week: 'Week 1', focus: 'Integration fundamentals — review all Salesforce API types (REST, SOAP, Bulk, Streaming, Metadata, Tooling, Connect). Understand when to use each.' },
            { week: 'Week 2', focus: 'Integration Patterns — study all 5 Salesforce integration patterns. Map each pattern to the Salesforce features that implement it.' },
            { week: 'Week 3', focus: 'Platform Events &amp; CDC — set up Platform Events in a dev org, publish and subscribe. Configure Change Data Capture for a custom object.' },
            { week: 'Week 4', focus: 'Apex Callouts — build REST and SOAP callouts in Apex. Configure named credentials and remote site settings. Understand callout governor limits.' },
            { week: 'Week 5', focus: 'Async Apex for integration — Queueable Apex with callouts, Batch Apex for data sync, Future methods. When to use each pattern.' },
            { week: 'Week 6', focus: 'OAuth flows and authentication — Web Server, User-Agent, JWT Bearer, Username-Password, Device flows. Connected Apps and named credentials.' },
            { week: 'Week 7', focus: 'Error handling and idempotency — dead-letter queues, retry patterns, Platform Event replay, idempotency keys in REST APIs.' },
            { week: 'Week 8', focus: 'MuleSoft &amp; middleware — API-led connectivity concepts (system, process, experience APIs), Anypoint Platform role in enterprise integration.' },
            { week: 'Week 9', focus: 'Performance and scalability — governor limits per transaction, how async patterns bypass callout limits, monitoring and alerting.' },
            { week: 'Week 10', focus: 'Full mock exams. Focus heavily on scenario questions: which integration pattern, which API, which async mechanism. Aim for 75%+.' },
          ].map((item) => (
            <div key={item.week} className="flex gap-3">
              <span className="flex-shrink-0 font-semibold text-salesforce-blue w-16">{item.week}</span>
              <span className="text-gray-700" dangerouslySetInnerHTML={{ __html: item.focus }} />
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Scenario Strategy Tips</h2>
        <ul className="space-y-3 text-sm text-gray-700">
          <li className="flex gap-2"><span className="text-salesforce-blue font-bold flex-shrink-0">1.</span><span><strong>Know the 5 integration patterns cold:</strong> Remote Process Invocation (sync), Remote Process Invocation (async), Batch Data Sync, Remote Call-In, and UI Update. Each question&apos;s scenario will map to one — identify it before selecting an answer.</span></li>
          <li className="flex gap-2"><span className="text-salesforce-blue font-bold flex-shrink-0">2.</span><span><strong>Async beats sync for large volumes:</strong> If a scenario involves high volume, long-running external calls, or fire-and-forget notification, the answer is almost always an async pattern (Queueable, Batch, Platform Events) over a synchronous callout.</span></li>
          <li className="flex gap-2"><span className="text-salesforce-blue font-bold flex-shrink-0">3.</span><span><strong>Platform Events for event-driven:</strong> When a scenario requires near-real-time notification to multiple subscribers (decoupled architecture), Platform Events is the correct answer over direct callouts or polling.</span></li>
          <li className="flex gap-2"><span className="text-salesforce-blue font-bold flex-shrink-0">4.</span><span><strong>Named credentials for callout security:</strong> Any question about securing external HTTP callouts should point to named credentials — they abstract authentication and avoid storing credentials in Apex code.</span></li>
        </ul>
      </div>

      <div className="bg-salesforce-blue/5 rounded-xl border border-salesforce-blue/20 p-5 mb-8">
        <h2 className="text-lg font-bold text-gray-900 mb-2">Mock Exam Benchmark</h2>
        <p className="text-sm text-gray-700">Aim for <strong>75%+ on practice exams</strong> before scheduling. Integration Architect tests architecture judgement, not just feature knowledge. If you can explain <em>why</em> you chose a pattern (not just what the pattern is), you are ready. The ~68% passing score is higher than most professional certs.</p>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Top 10 Concepts to Review</h2>
        <ol className="space-y-2 text-sm text-gray-700 list-decimal list-inside">
          <li>The 5 Salesforce integration patterns and when to apply each</li>
          <li>REST vs SOAP trade-offs: when to use each for Salesforce integrations</li>
          <li>Platform Events: publish-subscribe, replay IDs, delivery guarantees</li>
          <li>Change Data Capture: what triggers events, high-volume events, supported objects</li>
          <li>Apex callout limits: 100 callouts/transaction, 120s timeout, heap impact</li>
          <li>Queueable vs Future vs Batch Apex for async integration scenarios</li>
          <li>OAuth 2.0 flows: Web Server, JWT Bearer, Username-Password — when each applies</li>
          <li>Named credentials: types (Legacy, Per-User, Named Principal), protocol support</li>
          <li>Idempotency and retry design: why it matters and how to implement it</li>
          <li>Bulk API 2.0 vs REST API for large-volume inbound data loads</li>
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

      <div className="bg-salesforce-blue rounded-xl p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-2">Ready to Practice?</h2>
        <p className="text-blue-100 mb-6">Test yourself with free Integration Architect practice questions covering all 5 exam sections.</p>
        <Link
          href="/certifications/integration-architect"
          className="inline-flex items-center px-6 py-3 bg-white text-salesforce-blue rounded-lg font-semibold hover:bg-blue-50 transition-colors"
        >
          Start Free Practice Questions
        </Link>
      </div>
    </div>
  )
}
