import type { Metadata } from 'next'
import Link from 'next/link'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import DifficultyHeatmap from '@/components/DifficultyHeatmap'
import { buildStudyGuideTitle } from '@/lib/seo-title-helpers'
import ExamTipsCrossLink from '@/components/ExamTipsCrossLink'
import CertInsightBlock from '@/components/CertInsightBlock'
import CredentialSchema from '@/components/CredentialSchema'




const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const slug = 'mulesoft-developer-i'
const pageTitle = buildStudyGuideTitle(slug)
const pageDescription = `MuleSoft Developer I study guide: exam sections, DataWeave, connectors, error handling, 8-week plan. $200, 60 questions.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/mulesoft-developer-i-study-guide` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/mulesoft-developer-i-study-guide`,
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
  { name: 'MuleSoft Developer I', url: '/certifications/mulesoft-developer-i' },
  { name: 'MuleSoft Developer I Study Guide', url: '/mulesoft-developer-i-study-guide' },
]

const examSections = [
  { name: 'Anypoint Platform Overview & API Design', weight: 23, note: 'API-led connectivity (system, process, experience layers). Anypoint Platform components: Anypoint Studio, Design Center, Exchange, Runtime Manager, API Manager. RAML and OAS API specification design.' },
  { name: 'Building Mule Applications', weight: 25, note: 'Mule 4 application structure: flows, sub-flows, private flows. Core components: Logger, Set Variable, Transform Message (DataWeave), HTTP Listener/Request, Scheduler, Choice/Scatter-Gather routers.' },
  { name: 'DataWeave 2.0', weight: 22, note: 'Transforming data between JSON, XML, CSV, and Java with DataWeave 2.0 expressions. Map, filter, reduce, groupBy, pluck, flatten functions. Using variables, type coercion, and inline scripts.' },
  { name: 'Connecting to Systems', weight: 17, note: 'Anypoint Connectors for databases (DB connector), Salesforce, HTTP, FTP, SFTP, and message queues (Anypoint MQ). Configuring connection settings, operations, and error handling per connector.' },
  { name: 'Error Handling & Debugging', weight: 8, note: 'Error handling strategies: On Error Propagate vs On Error Continue. Error types hierarchy (MULE, HTTP, CONNECTIVITY). Logging, debugging in Anypoint Studio, DataWeave playground, and MUnit basics.' },
  { name: 'Deployment & Management', weight: 5, note: 'Deploying to CloudHub, Runtime Fabric, and customer-hosted Mule. Anypoint Runtime Manager basics, application monitoring, alerts, and environment management (dev, test, prod).' },
]

const faqItems = [
  {
    question: 'What is the MuleSoft Developer I certification?',
    answer: 'The MuleSoft Developer I (MCIA-Level-1) certification validates foundational skills in building integrations with MuleSoft Anypoint Platform. It covers API design with RAML, building Mule 4 flows, DataWeave data transformation, Anypoint Connectors, error handling, and deployment. The exam has 60 questions, 120 minutes, ~70% passing score, and a $200 fee.',
  },
  {
    question: 'Do I need Salesforce experience before MuleSoft Developer I?',
    answer: 'No Salesforce experience is required for MuleSoft Developer I. The exam is focused on Anypoint Platform and integration development skills. However, understanding REST APIs, JSON/XML data formats, and basic programming concepts is very helpful. Many candidates come from non-Salesforce integration backgrounds.',
  },
  {
    question: 'What is DataWeave and why is it important for this exam?',
    answer: 'DataWeave is MuleSoft\'s native data transformation language used to map, transform, and process data between systems in Mule flows. It accounts for ~22% of the exam and is one of the most commonly tested areas. DataWeave 2.0 uses functional programming patterns (map, filter, reduce) and supports JSON, XML, CSV, and Java formats natively.',
  },
  {
    question: 'What is API-led connectivity in MuleSoft?',
    answer: 'API-led connectivity is MuleSoft\'s recommended architecture pattern using three layers: System APIs (connect to backend systems like Salesforce, SAP, databases), Process APIs (orchestrate business logic using System API data), and Experience APIs (deliver data formatted for specific consumers — mobile, web, Salesforce). This layered approach improves reusability and reduces point-to-point integrations.',
  },
  {
    question: 'How long should I study for the MuleSoft Developer I exam?',
    answer: 'Plan for 8–10 weeks with 10–15 hours per week. Anypoint Studio hands-on practice is essential — the exam tests practical DataWeave expressions, flow configuration, and connector setup. Download Anypoint Studio for free, follow the MuleSoft Developer Fundamentals course on Trailhead/MuleSoft training, and build several integrations from scratch before sitting the exam.',
  },
]

export default function MulesoftDeveloperIStudyGuidePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/mulesoft-developer-i-study-guide" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />
      <CredentialSchema
        certSlug="mulesoft-developer-i"
        certName="MuleSoft Developer I"
        description={pageDescription}
        pageUrl="/mulesoft-developer-i-study-guide"
      />

      {/* Header */}
      <div data-lcp-header className="mb-10">
        <div className="inline-flex items-center gap-2 bg-salesforce-blue/10 text-salesforce-dark text-sm font-semibold px-3 py-1 rounded-full mb-4">
          <span>Study Guide</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          MuleSoft Developer I Study Guide ({RELEASE_CURRENT})
        </h1>
        <p className="text-lg text-gray-600">
          Your complete guide to passing the MuleSoft Certified Integration Associate (MCIA-Level-1) exam — API design, DataWeave, connectors, and error handling.
        </p>
      </div>

      <ContentPageAuthor />
      <ExamTipsCrossLink examTipsSlug="mulesoft-developer-i-exam-tips" certName="MuleSoft Developer I" />
      <CertInsightBlock certSlug="mulesoft-developer-i" />

      {/* Exam At a Glance */}
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

      {/* Exam Sections */}
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
                <div className="bg-salesforce-blue h-2 rounded-full" style={{ width: `${section.weight * 4}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* What Each Section Tests */}
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

      {/* 8-Week Study Plan */}
      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">8-Week Study Plan</h2>
        <div className="space-y-3 text-sm">
          {[
            { week: 'Week 1', focus: 'Anypoint Platform overview — API-led connectivity, platform components (Studio, Design Center, Exchange, Runtime Manager). Install Anypoint Studio.' },
            { week: 'Week 2', focus: 'RAML & API Design — design a RAML 1.0 API spec in Design Center. Define resources, methods, data types, examples, and traits.' },
            { week: 'Week 3', focus: 'Building Mule 4 flows — HTTP Listener, Logger, Set Variable, Scatter-Gather, Choice router. Build your first REST API with Mule 4.' },
            { week: 'Week 4', focus: 'DataWeave 2.0 — transform JSON to XML and back, use map, filter, reduce, groupBy, pluck. Practice in the DataWeave Playground before moving to Studio.' },
            { week: 'Week 5', focus: 'Connectors — configure Database connector (SELECT/INSERT), Salesforce connector, Anypoint MQ. Build a flow that reads from a DB and publishes to a queue.' },
            { week: 'Week 6', focus: 'Error handling — On Error Propagate vs On Error Continue, error type hierarchy, global vs local error handling. Test error scenarios in Studio.' },
            { week: 'Week 7', focus: 'Sub-flows, private flows, and flow references. Deployment to CloudHub via Studio and Runtime Manager. MUnit basics for testing a simple flow.' },
            { week: 'Week 8', focus: 'Full mock exams under 120-minute time pressure. Review DataWeave questions carefully — read the data payload closely before choosing the output format.' },
          ].map((item) => (
            <div key={item.week} className="flex gap-3">
              <span className="flex-shrink-0 font-semibold text-salesforce-blue w-16">{item.week}</span>
              <span className="text-gray-700">{item.focus}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scenario Tips */}
      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Scenario Strategy Tips</h2>
        <ul className="space-y-3 text-sm text-gray-700">
          <li className="flex gap-2"><span className="text-salesforce-blue font-bold flex-shrink-0">1.</span><span><strong>API layer selection:</strong> System API → connects to a backend (database, Salesforce, ERP). Process API → orchestrates business logic using multiple System APIs. Experience API → formats data for a specific consumer (mobile app, portal). The exam presents a requirement and asks which API layer to implement.</span></li>
          <li className="flex gap-2"><span className="text-salesforce-blue font-bold flex-shrink-0">2.</span><span><strong>Error handling — Propagate vs Continue:</strong> On Error Propagate rethrows the error (transaction is rolled back, calling flow receives the error). On Error Continue swallows the error (flow continues to the next message processor). Use Propagate when failures must surface; use Continue when errors are expected and should be handled gracefully.</span></li>
          <li className="flex gap-2"><span className="text-salesforce-blue font-bold flex-shrink-0">3.</span><span><strong>DataWeave output format:</strong> Always read the question carefully for the required output type (JSON vs XML vs CSV). The syntax for map, filter, and reduce is the same regardless of format — the output directive changes the serialisation.</span></li>
          <li className="flex gap-2"><span className="text-salesforce-blue font-bold flex-shrink-0">4.</span><span><strong>Scatter-Gather vs Choice:</strong> Scatter-Gather runs routes in parallel and aggregates all results. Choice router is a conditional branch — only one route runs. Use Scatter-Gather when you need data from multiple sources simultaneously; use Choice when you need one path based on a condition.</span></li>
        </ul>
      </div>

      {/* Mock Benchmark */}
      <div className="bg-salesforce-blue/5 rounded-xl border border-salesforce-blue/20 p-5 mb-8">
        <h2 className="text-lg font-bold text-gray-900 mb-2">Mock Exam Benchmark</h2>
        <p className="text-sm text-gray-700">Aim for <strong>80%+ on practice exams</strong> before scheduling — the passing score is ~70%, higher than most Salesforce exams. Building Mule Applications (25%) and DataWeave (22%) together account for nearly half the exam. Make sure you can write and read basic DataWeave transformations without reference documentation.</p>
      </div>

      {/* Top 10 Review */}
      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Top 10 Concepts to Review</h2>
        <ol className="space-y-2 text-sm text-gray-700 list-decimal list-inside">
          <li>API-led connectivity: System, Process, and Experience layers and what each contains</li>
          <li>Mule 4 flow components: sources (Listener), processors (Transform, Logger), and targets</li>
          <li>DataWeave map, filter, reduce, groupBy, pluck, and flatten functions</li>
          <li>Scatter-Gather (parallel) vs Choice (conditional) routers</li>
          <li>Sub-flows vs private flows — differences and use cases</li>
          <li>On Error Propagate vs On Error Continue and when to use each</li>
          <li>Mule error type hierarchy: MULE, HTTP, CONNECTIVITY, TRANSFORMATION</li>
          <li>Database connector: SELECT, INSERT, UPDATE, DELETE operations and result streaming</li>
          <li>CloudHub deployment: workers, vCore sizes, environment management</li>
          <li>RAML 1.0: resource types, traits, data types, and examples</li>
        </ol>
      </div>

      {/* FAQ */}
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

      {/* CTA */}
      <div className="bg-gray-50 rounded-xl border border-gray-100 p-5 mb-8">
        <h2 className="text-base font-bold text-gray-900 mb-3">Compare Certifications</h2>
        <ul className="space-y-2">
          <li><Link href="/mulesoft-developer-i-vs-integration-foundations" className="text-sm text-salesforce-dark hover:underline font-medium">→ MuleSoft Developer I vs Integration Foundations comparison</Link></li>
        </ul>
      </div>

            <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">What Comes After This Certification?</h2>
        <p className="text-sm text-gray-700">
          After this certification, consider: <Link href="/certifications/developer-2" className="text-salesforce-blue font-medium hover:underline">Platform Developer II</Link>, <Link href="/certifications/app-builder" className="text-salesforce-blue font-medium hover:underline">Platform App Builder</Link>, or <Link href="/certifications/javascript-developer-i" className="text-salesforce-blue font-medium hover:underline">JavaScript Developer I</Link>.
        </p>
      </section>

      <DifficultyHeatmap slug="mulesoft-developer-i" />
      <div className="bg-salesforce-blue rounded-xl p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-2">Ready to Practice?</h2>
        <p className="text-white mb-6">Test yourself with free MuleSoft Developer I practice questions covering all exam sections.</p>
        <Link
          href="/certifications/mulesoft-developer-i"
          className="inline-flex items-center px-6 py-3 bg-white text-salesforce-blue rounded-lg font-semibold hover:bg-blue-50 transition-colors"
        >
          Start Free Practice Questions
        </Link>
      </div>
    </div>
  )
}