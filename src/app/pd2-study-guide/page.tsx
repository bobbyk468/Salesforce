import type { Metadata } from 'next'
import Link from 'next/link'
import { Clock, Target, ArrowRight, BookOpen } from 'lucide-react'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import DifficultyHeatmap from '@/components/DifficultyHeatmap'
import { buildStudyGuideTitle } from '@/lib/seo-title-helpers'
import ExamTipsCrossLink from '@/components/ExamTipsCrossLink'
import CertInsightBlock from '@/components/CertInsightBlock'
import CredentialSchema from '@/components/CredentialSchema'




const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const slug = 'developer-2'

const pageTitle = buildStudyGuideTitle(slug)
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription =
  `Platform Developer II (PD2) study guide (${RELEASE_CURRENT}): design patterns, async Apex, integration, performance, testing. Pass one of Salesforce's hardest exams.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/pd2-study-guide` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/pd2-study-guide`,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: ogImageUrl, alt: pageTitle }],
  },
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Platform Developer II', url: '/certifications/developer-2' },
  { name: 'Platform Developer II Study Guide', url: '/pd2-study-guide' },
]

const faqItems = [
  {
    question: 'What is the Platform Developer II exam format?',
    answer: 'The Platform Developer II (PD2) exam has 60 multiple-choice questions, a 120-minute time limit, a 65% passing score, and a $200 fee ($100 retake). It is one of the most technically demanding Salesforce certifications — it requires PD1 as a prerequisite and tests advanced Apex design patterns, async processing, integration patterns, performance optimisation, and complex trigger logic.',
  },
  {
    question: 'How hard is the PD2 exam compared to PD1?',
    answer: 'PD2 is significantly harder than PD1. While PD1 tests whether you can write correct Apex code, PD2 tests whether you can architect scalable, performant, and well-designed Apex solutions. PD2 candidates need to understand design patterns (Apex Enterprise Patterns — Selector, Service, Domain layers), complex async processing chains, REST/SOAP integration, and performance analysis using debug logs and query plans.',
  },
  {
    question: 'What are the highest-weight PD2 exam sections?',
    answer: 'Design Patterns (25%) and Testing &amp; Debugging (25%) together account for 50% of the exam. Mastering Apex Enterprise Patterns (Selector, Service, Domain, Unit of Work) and the full Salesforce testing framework (test isolation, mocking HTTP callouts, testing async Apex) is the foundation for passing PD2.',
  },
  {
    question: 'What is the Apex Enterprise Patterns (AEP) framework?',
    answer: 'Apex Enterprise Patterns (also called Force.com Enterprise Architecture patterns) is a layered Apex architecture: the Selector layer handles all SOQL queries (centralises query logic, enforces FLS), the Domain layer contains business logic on SObject types (similar to an Active Record pattern), the Service layer orchestrates cross-object business processes, and the Unit of Work layer manages DML operations in bulk. PD2 expects you to recognise when and how to apply each layer — not necessarily implement the full framework from scratch.',
  },
]

const examSections = [
  { name: 'Design Patterns', weight: 25, note: 'Apex Enterprise Patterns (Selector, Service, Domain, Unit of Work), Singleton, Strategy, Decorator patterns applied to Apex, separation of concerns' },
  { name: 'Testing and Debugging', weight: 25, note: 'Advanced test isolation, mocking HTTP callouts (HttpCalloutMock), testing async Apex (Test.startTest/stopTest), testing mixed DML, debug log analysis, query plan tool' },
  { name: 'Integration', weight: 23, note: 'REST and SOAP callouts from Apex, Named Credentials, platform events, streaming API, external services, inbound REST API (Apex REST)' },
  { name: 'Performance', weight: 17, note: 'SOQL query optimisation, selective queries and indexes, heap size management, CPU limit optimisation, Async Apex for long-running operations' },
  { name: 'Developer Experience', weight: 10, note: 'Source-driven development (SFDX), scratch orgs, unlocked packages, second-generation packaging, CI/CD pipeline concepts' },
]

export default function Pd2StudyGuidePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas
        headline={pageTitle}
        description={pageDescription}
        path="/pd2-study-guide"
        breadcrumbItems={breadcrumbItems}
        faqItems={faqItems}
      />
      <CredentialSchema
        certSlug="pd2"
        certName="Platform Developer II"
        description={pageDescription}
        pageUrl="/pd2-study-guide"
      />

      <header data-lcp-header className="mb-10">
        <p className="inline-flex items-center rounded-full bg-salesforce-blue/10 px-3 py-1 text-sm font-medium text-salesforce-dark mb-4">
          Updated for {RELEASE_CURRENT}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Salesforce Platform Developer II Study Guide ({RELEASE_CURRENT}): Complete PD2 Exam Prep
        </h1>
        <p className="text-lg text-gray-600">
          Platform Developer II is one of the most challenging Salesforce certifications. It goes beyond
          writing correct Apex — it tests your ability to architect scalable, performant solutions
          using design patterns, advanced async processing, integration patterns, and developer tooling.
          This guide covers every section with the depth needed to pass.
        </p>
      </header>

      <ContentPageAuthor />
      <ExamTipsCrossLink examTipsSlug="pd2-exam-tips" certName="Platform Developer II" />
      <CertInsightBlock certSlug="pd2" />

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">PD2 Exam at a Glance</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { label: 'Questions', value: '60' },
            { label: 'Time Limit', value: '120 min' },
            { label: 'Passing Score', value: '65%' },
            { label: 'Exam Fee', value: '$200' },
          ].map(({ label, value }) => (
            <div key={label} className="rounded-lg bg-gray-50 border border-gray-100 p-3 text-center">
              <p className="text-xl font-bold text-salesforce-blue">{value}</p>
              <p className="text-xs text-gray-600 mt-1">{label}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-600 mt-4">
          PD1 certification required. 120-minute time limit (longer than most Salesforce exams — code-reading questions take more time). Retake fee: $100.
        </p>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">PD2 Exam Sections and Weightage</h2>
        <p className="text-sm text-gray-600 mb-4">
          Design Patterns (25%) + Testing &amp; Debugging (25%) = 50% of the exam. These two sections are where PD2 candidates most often fail — they are purely advanced technical topics not covered in PD1.
        </p>
        <div className="space-y-3">
          {examSections.map(({ name, weight, note }) => (
            <div key={name}>
              <div className="flex justify-between text-sm mb-1">
                <span className="font-medium text-gray-800">{name}</span>
                <span className="text-salesforce-blue font-semibold">{weight}%</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2 mb-1">
                <div className="bg-salesforce-blue h-2 rounded-full" style={{ width: `${weight}%` }} />
              </div>
              <p className="text-xs text-gray-600">{note}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">What Each Section Actually Tests</h2>
        <div className="space-y-5 text-sm text-gray-700">
          <div>
            <p className="font-semibold text-gray-900 mb-1 flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-salesforce-blue" />
              Design Patterns (25%)
            </p>
            <p>The foundation of PD2. <strong>Apex Enterprise Patterns (AEP):</strong> Selector layer (all SOQL queries — centralises data access, enforces field-level security checks), Domain layer (business logic tied to an SObject type — validates, defaults, and enriches records), Service layer (orchestrates business processes across multiple objects), Unit of Work (manages all DML in bulk at the end of a transaction to prevent partial commits and governor limit issues). <strong>Other patterns:</strong> Singleton (prevent duplicate initialisation of expensive objects — e.g., a configuration class loaded once per transaction), Strategy (interchangeable algorithm implementations behind a common interface), Decorator (wrap an existing class to add behaviour). Know how to identify which pattern solves a given architectural problem — the exam presents a scenario and asks which pattern is most appropriate.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1 flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-salesforce-blue" />
              Testing and Debugging (25%)
            </p>
            <p><strong>Advanced testing:</strong> Test isolation with <code>@TestSetup</code> (runs once, shares data across all test methods), <code>Test.loadData()</code> for CSV-based test data. <strong>HTTP callout mocking:</strong> <code>HttpCalloutMock</code> interface — implement <code>respond()</code> and register with <code>Test.setMock(HttpCalloutMock.class, mock)</code>. <strong>Testing async Apex:</strong> wrap the enqueue call between <code>Test.startTest()</code> and <code>Test.stopTest()</code> — <code>stopTest()</code> forces async execution to run synchronously so you can assert results. <strong>Mixed DML errors:</strong> cannot insert setup objects (User, Group) and non-setup objects (Account, Contact) in the same transaction — wrap setup DML in a <code>System.runAs()</code> block. <strong>Debug log analysis:</strong> read EXECUTION_STARTED → SOQL queries (with row counts) → DML statements → EXCEPTION events to diagnose runtime issues.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1 flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-salesforce-blue" />
              Integration (23%)
            </p>
            <p><strong>Apex callouts:</strong> <code>Http</code>, <code>HttpRequest</code>, <code>HttpResponse</code> for REST; <code>WebServiceCallout.invoke()</code> for SOAP. Cannot make callouts from triggers (they are synchronous DML context) — use a future method or queueable. <strong>Named Credentials:</strong> store endpoint URL and authentication credentials securely — use <code>callout:NamedCredentialName/path</code> in the endpoint URL. <strong>Platform Events:</strong> define fields on a Platform Event object, publish with <code>EventBus.publish()</code>, subscribe with triggers or flows. High-volume platform events have at-least-once delivery. <strong>Apex REST:</strong> expose Apex as a REST API using <code>@RestResource(urlMapping=&apos;/v1/myEndpoint/*&apos;)</code> and <code>@HttpGet</code>, <code>@HttpPost</code>, etc. annotations.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1 flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-salesforce-blue" />
              Performance (17%)
            </p>
            <p><strong>SOQL selectivity:</strong> queries are selective when the WHERE clause uses indexed fields (Id, Name, ExternalId, unique fields, or custom indexed fields) and filters enough records (generally &lt;10% of the object&apos;s records or &lt;200k records). Non-selective queries on large objects cause timeouts. <strong>Query Plan tool:</strong> shows whether Salesforce will use an index (low cost) or a full table scan (high cost) for a query. <strong>Heap size:</strong> 6 MB synchronous / 12 MB async — avoid storing large collections in static variables across transaction boundaries. <strong>CPU limit:</strong> 10,000 ms synchronous — avoid nested loops over large collections; prefer Maps over repeated list iteration. <strong>Async for long-running work:</strong> Queueable (chaining, passing complex state), Batch Apex (process millions of records), Scheduled Apex (time-based execution).</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1 flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-salesforce-blue" />
              Developer Experience (10%)
            </p>
            <p><strong>SFDX / Salesforce CLI:</strong> source-driven development using <code>sf project retrieve</code> and <code>sf project deploy</code>. <strong>Scratch orgs:</strong> temporary, configurable orgs for development and testing — created from a project definition file, last 1–30 days. <strong>Unlocked Packages:</strong> 2nd-generation packages that are modular, versionable, and source-tracked. Unlike managed packages (ISV), unlocked packages are for org-specific development. Know the difference between 1GP (first-generation, subscriber-opaque), 2GP unlocked (org-internal, source-trackable), and 2GP managed (ISV distribution with namespace). <strong>CI/CD:</strong> understand the concept of automated pipeline: pull request → scratch org → run tests → deploy to sandbox → promote to production.</p>
          </div>
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">8-Week PD2 Study Plan</h2>
        <div className="space-y-4 text-sm text-gray-700">
          <p><strong>Week 1–2 — Design Patterns (25%):</strong> Study the Apex Enterprise Patterns framework. Read the Force.com Enterprise Architecture book chapters on Selector, Domain, Service, and Unit of Work. Implement the full AEP stack for one object (Opportunity) in a Developer Edition org. Study Singleton, Strategy, and Decorator patterns with Apex code examples.</p>
          <p><strong>Week 3–4 — Testing &amp; Debugging (25%):</strong> Write tests for HTTP callouts using <code>HttpCalloutMock</code>. Write tests for async Apex (Queueable, Batch) using <code>Test.startTest/stopTest</code>. Practice resolving mixed DML errors. Analyse 3 different debug logs to identify performance bottlenecks and exceptions.</p>
          <p><strong>Week 5 — Integration (23%):</strong> Build a REST callout to an external API using Named Credentials. Create a Platform Event and subscribe to it with a trigger. Expose an Apex REST endpoint and test it with Workbench. Study streaming API concepts.</p>
          <p><strong>Week 6 — Performance (17%):</strong> Use the Query Plan tool to analyse 5 different SOQL queries. Refactor a nested loop pattern to use Maps. Write a Batch Apex class that processes 1M records. Profile a Queueable chain using debug logs.</p>
          <p><strong>Week 7 — Developer Experience (10%):</strong> Create a scratch org from a project definition file. Deploy metadata using SFDX CLI commands. Study unlocked package versioning concepts. Review CI/CD pipeline concepts.</p>
          <p><strong>Week 8:</strong> Full timed mock exams (60 Q / 120 min). Score 75%+ consistently. PD2 questions often present code snippets — practice reading Apex code quickly and identifying the specific issue.</p>
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">How to Approach PD2 Scenario Questions</h2>
        <ul className="space-y-3 text-sm text-gray-700">
          <li className="flex gap-2">
            <Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />
            <span><strong>Design pattern questions:</strong> Questions describe an architectural problem and ask which pattern to apply. Selector = centralise SOQL. Domain = object-level business logic. Service = cross-object process orchestration. Unit of Work = bulk DML. When a scenario says &ldquo;reduce code duplication in queries across multiple classes,&rdquo; the answer is Selector. When it says &ldquo;ensure all DML for a transaction runs together or not at all,&rdquo; the answer is Unit of Work.</span>
          </li>
          <li className="flex gap-2">
            <Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />
            <span><strong>Async Apex selection questions:</strong> Future method = simple fire-and-forget, no chaining, primitive parameters only. Queueable = complex state (objects as parameters), chainable, one chain at a time. Batch = process large datasets (up to 50M records), configurable batch size. Scheduled = time-based execution. When a scenario needs to process 5M records nightly, the answer is Batch + Scheduled. When it needs to make a callout after a trigger, the answer is Future (or Queueable if state is needed).</span>
          </li>
          <li className="flex gap-2">
            <Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />
            <span><strong>Performance questions:</strong> When a query is timing out on a large object, the first diagnostic step is the Query Plan tool — check if the query is selective. If not selective: add an index to the filter field, or restructure the query to use indexed fields. CPU limit violations: look for nested loops over large collections — refactor to Maps. Heap limit: avoid storing large SObject lists in static variables or Queueable instance variables that persist between chain links.</span>
          </li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Mock-Test Benchmark Before Booking</h2>
        <p className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2">
          <Clock className="h-4 w-4" />
          75%+ on 3 timed full mocks (60 Q / 120 min) before booking
        </p>
        <p className="text-sm text-gray-700 mt-3">
          PD2 has a higher failure rate than most Salesforce certifications. The most common failure modes
          are: (1) insufficient hands-on design pattern implementation — studying AEP conceptually is
          not enough, you must implement it; (2) underestimating the integration section — callout
          mocking, Named Credentials, and Platform Events require practical experience; (3) skipping
          the Query Plan tool — performance questions are consistently missed by candidates who
          have never used it.
        </p>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Top 10 Topics to Review the Day Before</h2>
        <ol className="space-y-1 text-sm text-gray-700 list-decimal list-inside">
          <li>AEP layers: Selector (SOQL), Domain (business logic), Service (orchestration), Unit of Work (DML)</li>
          <li>HttpCalloutMock: implement respond(), register with Test.setMock() in test methods</li>
          <li>Testing async Apex: wrap in Test.startTest/stopTest to force synchronous execution</li>
          <li>Mixed DML: User + Account in same transaction = error; fix with System.runAs()</li>
          <li>Named Credentials: secure endpoint + auth storage; use callout:Name/path in endpoint</li>
          <li>Future vs Queueable vs Batch: fire-and-forget vs chainable+complex-state vs large-dataset</li>
          <li>Platform Events: publish with EventBus.publish(), subscribe with trigger on EventName__e</li>
          <li>SOQL selectivity: use indexed fields in WHERE clause; check with Query Plan tool</li>
          <li>Unlocked packages vs managed packages: internal org use vs ISV distribution</li>
          <li>Apex REST: @RestResource(urlMapping) + @HttpGet/@HttpPost on global static methods</li>
        </ol>
      </section>

      <section className="rounded-xl border border-salesforce-blue/20 bg-salesforce-blue/5 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Practice With Real Exam-Style Questions</h2>
        <p className="text-sm text-gray-700 mb-4">
          Apply this study guide with free PD2 practice questions:
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/certifications/developer-2" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-colors">
            PD2 Practice Questions <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/pd2-exam-tips" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            PD2 Exam Tips
          </Link>
          <Link href="/pd1-study-guide" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            PD1 Study Guide
          </Link>
        </div>
        <p className="text-xs text-gray-600 mt-4">
          <Link href="/pd1-vs-pd2" className="text-salesforce-blue underline">
            PD1 vs PD2 — how they differ and which to take next →
          </Link>
        </p>
      </section>

      
            <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">What Comes After This Certification?</h2>
        <p className="text-sm text-gray-700">
          After this certification, consider: <Link href="/certifications/developer-2" className="text-salesforce-blue font-medium hover:underline">Platform Developer II</Link>, <Link href="/certifications/app-builder" className="text-salesforce-blue font-medium hover:underline">Platform App Builder</Link>, or <Link href="/certifications/javascript-developer-i" className="text-salesforce-blue font-medium hover:underline">JavaScript Developer I</Link>.
        </p>
      </section>

      <DifficultyHeatmap slug="developer-2" />
      {/* Hub CTA */}
      <div className="bg-salesforce-blue rounded-xl p-8 text-center text-white mt-10">
        <h2 className="text-2xl font-bold mb-2">Ready to Test Your Knowledge?</h2>
        <p className="text-white mb-6">Try the Platform Developer II (PD2) free practice exam — scored with full explanations.</p>
        <Link
          href="/certifications/developer-2"
          className="inline-flex items-center px-6 py-3 bg-white text-salesforce-blue rounded-lg font-semibold hover:bg-blue-50 transition-colors"
        >
          Platform Developer II (PD2) Free Practice Exam &rarr;
        </Link>
      </div>
    </div>
  )
}