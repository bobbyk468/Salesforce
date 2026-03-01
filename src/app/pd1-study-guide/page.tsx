import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, Clock, Target, ArrowRight, BookOpen } from 'lucide-react'
import { getWebPageJsonLd, getBreadcrumbListJsonLd, getArticleJsonLd, getFaqPageJsonLd } from '@/lib/schema-data'
import { RELEASE_CURRENT } from '@/lib/release-data'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'

const pageTitle = `PD1 Study Guide (${RELEASE_CURRENT}): Pass Platform Developer I`
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription =
  `PD1 study guide (${RELEASE_CURRENT}): all 5 exam sections, Apex governor limits, testing rules, async patterns, and exam scenario strategy. Start free practice today.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/pd1-study-guide` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/pd1-study-guide`,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: ogImageUrl, alt: pageTitle }],
  },
  keywords:
    `PD1 study guide ${RELEASE_CURRENT}, Platform Developer I exam prep, how to pass Salesforce PD1, Salesforce developer certification study guide, Apex governor limits exam, PD1 topics`,
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'PD1 Study Guide', url: '/pd1-study-guide' },
]

const faqItems = [
  {
    question: 'How many sections does the PD1 exam have?',
    answer: 'The Platform Developer I exam covers 5 sections: Process Automation and Logic (30%), Testing, Debugging, and Deployment (25%), User Interface (23%), Integration (15%), and Salesforce Fundamentals (7%). Process Automation and Testing together account for 55% — focus here first.',
  },
  {
    question: 'What is the passing score for the PD1 exam?',
    answer: 'The PD1 passing score is 68%. The exam has 60 scored multiple-choice questions plus 5 unscored pilot questions (you cannot tell which is which), a 110-minute time limit, and a $200 exam fee. Retakes cost $100.',
  },
  {
    question: 'Do I need to know Java or another language before studying PD1?',
    answer: 'No prior programming language experience is required, but PD1 tests real Apex code. You need to read Apex class syntax, understand governor limits in context, and identify correct vs incorrect code patterns. The exam does NOT require you to write code from memory — but you must understand what code does and spot errors.',
  },
  {
    question: 'What Apex governor limits are tested on PD1?',
    answer: 'The most commonly tested governor limits are: 100 SOQL queries per synchronous transaction, 150 DML statements per transaction, 50,000 records returned by a single SOQL query, 10 callouts per transaction, and 60,000ms total CPU time. Bulkification is the exam&apos;s primary governor limit scenario — you need to explain why SOQL/DML inside for-loops is wrong and how to fix it.',
  },
]

const examSections = [
  { name: 'Process Automation and Logic', weight: 30, note: 'Apex classes, triggers, governor limits, bulkification, async Apex (Future, Batch, Queueable, Scheduled)' },
  { name: 'Testing, Debugging, and Deployment', weight: 25, note: 'Test classes, @isTest, Test.startTest/stopTest, code coverage (75% minimum), debugging tools, change sets, metadata API' },
  { name: 'User Interface', weight: 23, note: 'Lightning Web Components (LWC), Aura components, Visualforce basics, @wire service, lightning-record-form, JavaScript in LWC' },
  { name: 'Integration', weight: 15, note: 'REST vs SOAP callouts, HttpRequest, HTTP methods (GET/POST/PUT/DELETE), JSON parsing, Named Credentials, external services' },
  { name: 'Salesforce Fundamentals', weight: 7, note: 'Platform basics, MVC pattern, declarative vs programmatic, object relationships, sharing model fundamentals' },
]

export default function Pd1StudyGuidePage() {
  const webPageJsonLd = getWebPageJsonLd({
    name: pageTitle,
    description: pageDescription,
    path: '/pd1-study-guide',
    breadcrumbItems,
  })
  const breadcrumbJsonLd = getBreadcrumbListJsonLd(breadcrumbItems)
  const articleJsonLd = getArticleJsonLd({
    headline: pageTitle,
    description: pageDescription,
    path: '/pd1-study-guide',
  })
  const faqJsonLd = getFaqPageJsonLd(faqItems)

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <header data-lcp-header className="mb-10">
        <p className="inline-flex items-center rounded-full bg-salesforce-blue/10 px-3 py-1 text-sm font-medium text-salesforce-blue mb-4">
          Updated for {RELEASE_CURRENT}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          PD1 Study Guide ({RELEASE_CURRENT}): Complete Platform Developer I Exam Prep
        </h1>
        <p className="text-lg text-gray-600">
          The Salesforce Platform Developer I (PD1) certification is the primary developer credential on the Salesforce platform.
          This study guide covers every exam section with the Apex patterns, testing rules, and LWC concepts you need to pass —
          not just the topic list.
        </p>
      </header>

      {/* Exam snapshot */}
      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">PD1 Exam at a Glance</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { label: 'Questions', value: '60' },
            { label: 'Time Limit', value: '110 min' },
            { label: 'Passing Score', value: '68%' },
            { label: 'Exam Fee', value: '$200' },
          ].map(({ label, value }) => (
            <div key={label} className="rounded-lg bg-gray-50 border border-gray-100 p-3 text-center">
              <p className="text-xl font-bold text-salesforce-blue">{value}</p>
              <p className="text-xs text-gray-500 mt-1">{label}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-500 mt-4">
          Retake fee: $100. No hard prerequisites required (ADM-201 knowledge assumed). 5 unscored pilot questions included — you cannot identify them.
        </p>
      </section>

      {/* Exam weightage */}
      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">PD1 Exam Sections and Weightage</h2>
        <p className="text-sm text-gray-600 mb-4">
          Process Automation and Testing together account for 55% of the exam. Master Apex and test classes first.
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
              <p className="text-xs text-gray-500">{note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section deep-dives */}
      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">What Each Section Actually Tests</h2>
        <div className="space-y-5 text-sm text-gray-700">
          <div>
            <p className="font-semibold text-gray-900 mb-1 flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-salesforce-blue" />
              Process Automation and Logic (30%)
            </p>
            <p>The heart of the PD1 exam. <strong>Governor limits</strong> are the single most tested concept: 100 SOQL queries, 150 DML statements, 50,000 rows returned per query. <strong>Bulkification</strong> is a specific governor limit scenario — you must know why SOQL or DML inside a for-loop violates limits and how to fix it using List/Map patterns. <strong>Async Apex</strong>: Future methods (simple callouts, @future(callout=true), cannot be monitored); Batch Apex (Database.Batchable interface, 3 methods: start/execute/finish, up to 50M records in batches of 200 default); Queueable (can be chained, accepts non-primitive types); Scheduled (Schedulable interface, cron expression). <strong>Most common mistake:</strong> confusing when to use Future vs Queueable — Queueable is preferred when you need chaining or non-primitive parameters.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1 flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-salesforce-blue" />
              Testing, Debugging, and Deployment (25%)
            </p>
            <p><strong>Test class rules the exam enforces:</strong> 75% code coverage minimum for deployment (not per-class, across the org), @isTest annotation on class and methods, Test.startTest() / Test.stopTest() resets governor limits and forces async execution, System.assert/assertEquals/assertNotEquals for assertions. <strong>Test data isolation:</strong> @isTest(SeeAllData=false) is the default — test classes cannot see real org data unless SeeAllData=true (avoid this). Use Test.getStandardPricebookId() for price book in tests. <strong>Deployment:</strong> sandbox → production via change sets or metadata API. SFDX/SF CLI: sfdx force:source:push (scratch org), force:source:retrieve, force:mdapi:deploy. <strong>Debugging:</strong> Developer Console, Debug Logs, SOQL Query Plan, anonymous Apex for testing.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1 flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-salesforce-blue" />
              User Interface (23%)
            </p>
            <p><strong>Lightning Web Components (LWC)</strong> dominate this section. Key concepts: @api (public property, passed from parent), @track (reactive private property — deprecated in newer versions, all properties reactive now), @wire (calls Apex or standard library functions declaratively). Component lifecycle hooks: constructor(), connectedCallback(), renderedCallback(), disconnectedCallback(). <strong>LWC to Apex:</strong> @AuraEnabled on Apex methods, cacheable=true for wire, without cacheable for imperative calls. <strong>LWC events:</strong> custom events bubble with composed+bubbles options. <strong>Aura:</strong> still tested at lower depth — know component lifecycle, Aura events vs LWC custom events, and that Aura can contain LWC but not vice versa.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1 flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-salesforce-blue" />
              Integration (15%)
            </p>
            <p><strong>REST vs SOAP:</strong> REST uses JSON, lightweight, stateless, simpler to implement; SOAP uses WSDL/XML, stricter contract, legacy systems. <strong>Callouts:</strong> HttpRequest object, HttpRequest.setEndpoint(), HttpRequest.setMethod('GET'), Http.send(). Named Credentials store endpoint + authentication — use them for credentials security. Callouts cannot be made from Apex triggers without @future(callout=true) or Queueable. <strong>Inbound:</strong> REST API (standard /services/data/vXX.0/ endpoints), SOAP API (WSDL import), Bulk API (CSV-based, high-volume). Know that callouts count against the 10 callouts per transaction limit.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1 flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-salesforce-blue" />
              Salesforce Fundamentals (7%)
            </p>
            <p>MVC pattern (Model = objects/fields, View = Visualforce/LWC, Controller = Apex), declarative vs programmatic development, when to choose each. Object relationships (master-detail, lookup, many-to-many via junction object), sharing model basics (OWD, role hierarchy, sharing rules, with sharing / without sharing in Apex). Know that <code>with sharing</code> enforces the running user&apos;s sharing rules; <code>without sharing</code> ignores them (admin context).</p>
          </div>
        </div>
      </section>

      {/* Apex patterns cheat sheet */}
      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Critical Apex Patterns for the Exam</h2>
        <div className="space-y-4 text-sm text-gray-700">
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="font-semibold text-gray-900 mb-2">Bulkified Trigger Pattern (always correct):</p>
            <pre className="text-xs font-mono text-gray-700 overflow-x-auto">{`trigger AccountTrigger on Account (before insert, before update) {
  List<Id> accountIds = new List<Id>();
  for (Account acc : Trigger.new) {
    accountIds.add(acc.Id);       // collect IDs
  }
  // SOQL OUTSIDE the loop — queries all at once
  Map<Id, Contact> contacts = new Map<Id, Contact>(
    [SELECT Id, AccountId FROM Contact WHERE AccountId IN :accountIds]
  );
}`}</pre>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1">Async Apex Decision Tree:</p>
            <ul className="space-y-1">
              <li className="flex gap-2"><CheckCircle2 className="h-3.5 w-3.5 mt-0.5 text-emerald-600 flex-shrink-0" /><span>Need a callout from a trigger? → @future(callout=true)</span></li>
              <li className="flex gap-2"><CheckCircle2 className="h-3.5 w-3.5 mt-0.5 text-emerald-600 flex-shrink-0" /><span>Need to chain jobs or pass non-primitive data? → Queueable</span></li>
              <li className="flex gap-2"><CheckCircle2 className="h-3.5 w-3.5 mt-0.5 text-emerald-600 flex-shrink-0" /><span>Need to process millions of records? → Batch Apex (Database.Batchable)</span></li>
              <li className="flex gap-2"><CheckCircle2 className="h-3.5 w-3.5 mt-0.5 text-emerald-600 flex-shrink-0" /><span>Need to run daily/weekly automatically? → Schedulable (implements Schedulable)</span></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1">Trigger context variables (must memorise):</p>
            <ul className="space-y-1">
              <li className="flex gap-2"><CheckCircle2 className="h-3.5 w-3.5 mt-0.5 text-emerald-600 flex-shrink-0" /><span>Trigger.new — new record values (insert, update, undelete)</span></li>
              <li className="flex gap-2"><CheckCircle2 className="h-3.5 w-3.5 mt-0.5 text-emerald-600 flex-shrink-0" /><span>Trigger.old — old record values (update, delete)</span></li>
              <li className="flex gap-2"><CheckCircle2 className="h-3.5 w-3.5 mt-0.5 text-emerald-600 flex-shrink-0" /><span>Trigger.newMap / Trigger.oldMap — Maps of Id to record</span></li>
              <li className="flex gap-2"><CheckCircle2 className="h-3.5 w-3.5 mt-0.5 text-emerald-600 flex-shrink-0" /><span>Trigger.isBefore / Trigger.isAfter — when in the execution order</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* Study plan */}
      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">6-Week PD1 Study Plan</h2>
        <div className="space-y-4 text-sm text-gray-700">
          <p><strong>Week 1 — Apex Fundamentals and Governor Limits (30%):</strong> Apex syntax, data types, SOQL, SOSL, DML operations, governor limits. Practice in Developer Edition org: write a simple trigger with SOQL outside the loop. Complete Trailhead &ldquo;Apex Basics &amp; Database&rdquo; and &ldquo;Apex Triggers&rdquo; modules.</p>
          <p><strong>Week 2 — Async Apex (part of 30%):</strong> Future methods, Batch Apex, Queueable, Schedulable. Learn the interfaces and method signatures by writing each type. Practice: write a batch class that updates all Contacts missing an email. Run it in anonymous Apex. Verify with System.debug logs.</p>
          <p><strong>Week 3 — Testing and Deployment (25%):</strong> Test class structure, @isTest annotations, Test.startTest/stopTest, code coverage, mock callouts (HttpCalloutMock), and static resources for test data. Practice: write a test class for your batch Apex that achieves 100% coverage.</p>
          <p><strong>Week 4 — LWC and User Interface (23%):</strong> LWC component anatomy (HTML/JS/CSS/XML), @api, @wire, @track, component communication (events, pubsub), lightning-record-form, lightning-datatable. Practice: build a simple LWC that displays accounts using @wire(getRecord).</p>
          <p><strong>Week 5 — Integration and Fundamentals (22%):</strong> REST/SOAP callouts, HttpRequest, Named Credentials, inbound REST API, Bulk API overview. Review MVC, sharing model (with sharing / without sharing). Study integration patterns: outbound (Apex callouts) and inbound (custom REST endpoints with @RestResource).</p>
          <p><strong>Week 6:</strong> Full timed mock exams (60 Q / 110 min), weak-area targeted revision. Score 78%+ consistently (PD1 passing is 68% — aim 10 points above) before booking.</p>
        </div>
      </section>

      {/* Scenario tips */}
      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">How to Approach PD1 Scenario Questions</h2>
        <ul className="space-y-3 text-sm text-gray-700">
          <li className="flex gap-2">
            <Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />
            <span><strong>Governor limit questions:</strong> If you see SOQL or DML inside a for-loop in the code — that is wrong. The fix is always to collect IDs in a list, query outside the loop, and store results in a Map. Eliminate all answers that put SOQL/DML inside loops.</span>
          </li>
          <li className="flex gap-2">
            <Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />
            <span><strong>Test class questions:</strong> If the scenario mentions &ldquo;code coverage&rdquo; below 75%, you need to add test methods. If it mentions tests passing locally but failing on deployment, the issue is usually SeeAllData=true (test relies on org data). System.assert is required — inserting a record without asserting is insufficient coverage.</span>
          </li>
          <li className="flex gap-2">
            <Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />
            <span><strong>Async Apex questions:</strong> Identify the constraint: needs a callout from a trigger → Future. Needs chaining or SObject parameter → Queueable. Processes large datasets → Batch. Needs to run on a schedule → Scheduled. Needs to be monitored with status → Batch (has System.scheduleBatch and Apex Jobs UI).</span>
          </li>
          <li className="flex gap-2">
            <Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />
            <span><strong>LWC questions:</strong> If a parent component needs to pass data to a child, use @api. If a child needs to notify a parent, fire a custom event with this.dispatchEvent(new CustomEvent(&apos;eventname&apos;, &#123; detail: data &#125;)). If you need to call Apex imperatively, import the method and call it in connectedCallback() or a click handler.</span>
          </li>
        </ul>
      </section>

      {/* Mock benchmark */}
      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Mock-Test Benchmark Before Booking</h2>
        <p className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2">
          <Clock className="h-4 w-4" />
          78%+ on 3 timed full mocks (60 Q / 110 min) before booking
        </p>
        <p className="text-sm text-gray-700 mt-3">
          PD1 passing score is 68%. The code-reading questions are designed to look ambiguous — a candidate who understands
          governor limits and bulkification can eliminate 2 of 4 answers immediately on most questions. If you are
          consistently failing governor limit questions, spend another week writing Apex in a Developer Edition org.
          Hands-on writing is the fastest way to internalise these patterns.
        </p>
      </section>

      {/* Top topics */}
      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Top 10 Topics to Review the Day Before</h2>
        <ol className="space-y-1 text-sm text-gray-700 list-decimal list-inside">
          <li>Governor limits: 100 SOQL, 150 DML, 50,000 rows, 10 callouts per synchronous transaction</li>
          <li>Bulkification pattern — SOQL/DML outside loops, use Collections and Maps</li>
          <li>Trigger.new vs Trigger.old vs Trigger.newMap/oldMap and when each is available</li>
          <li>Before trigger vs After trigger — before is used to set field values (no DML needed), after is used to query related records</li>
          <li>@isTest, Test.startTest/stopTest purpose — resets limits, forces async execution</li>
          <li>75% code coverage minimum for deployment — calculated across org, not per class</li>
          <li>Future vs Queueable vs Batch vs Scheduled — constraints and use cases</li>
          <li>@AuraEnabled(cacheable=true) for @wire, @AuraEnabled for imperative calls</li>
          <li>with sharing vs without sharing — sharing rules enforcement on Apex classes</li>
          <li>REST callout pattern: HttpRequest, Http.send(), getStatusCode(), getBody()</li>
        </ol>
      </section>

      {/* Related links */}
      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Related Guides</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/pd1-exam-tips-2026" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">PD1 Exam Tips {RELEASE_CURRENT}</span>
          </Link>
          <Link href="/pd1-vs-pd2" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">PD1 vs PD2 Comparison</span>
          </Link>
          <Link href="/app-builder-study-guide" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">App Builder Study Guide</span>
          </Link>
          <Link href="/developer-certification-path" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Developer Certification Path</span>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-xl border border-salesforce-blue/20 bg-salesforce-blue/5 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Practice With Real Exam-Style Questions</h2>
        <p className="text-sm text-gray-700 mb-4">
          Apply this study guide with free PD1 practice questions, exam weightage breakdown, and prep tips:
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/certifications/developer-1"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-colors"
          >
            PD1 Practice Questions
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/pd1-exam-tips-2026"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            PD1 Exam Tips {RELEASE_CURRENT}
          </Link>
          <Link
            href="/developer-certification-path"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            Developer Cert Path
          </Link>
        </div>
      </section>
    </div>
  )
}
