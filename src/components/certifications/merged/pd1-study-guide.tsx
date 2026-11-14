/* Ported from /pd1-study-guide, merged into /certifications/developer-1 in November 2026.
 * Content is the original page copy. Page chrome (metadata, JSON-LD, H1
 * header) was dropped because the hub page already provides it. */
import Link from '@/components/AppLink'
import { CheckCircle2, Clock, Target, ArrowRight, BookOpen } from 'lucide-react'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import DifficultyHeatmap from '@/components/DifficultyHeatmap'
import { buildStudyGuideTitle } from '@/lib/seo-title-helpers'
import ExamTipsCrossLink from '@/components/ExamTipsCrossLink'
import CertInsightBlock from '@/components/CertInsightBlock'
import CredentialSchema from '@/components/CredentialSchema'
import ExamPricingCard from '@/components/ExamPricingCard'
import LastUpdated from '@/components/LastUpdated'




const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const slug = 'developer-1'

const pageTitle = buildStudyGuideTitle(slug)
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription = `Platform Developer I study guide for ${RELEASE_CURRENT}: review four exam sections on Apex limits, testing, async patterns, and scenarios.`

export const faqItems = [
  {
    question: 'How many sections does the PD1 exam have?',
    answer: 'The exam has four sections: Process Automation and Logic (28%), Developer Fundamentals (27%), User Interface (25%), and Testing, Debugging, and Deployment (20%). The first two sections make up 55% together.',
  },
  {
    question: 'What is the passing score for the PD1 exam?',
    answer: 'The listed passing score is 68%. The exam has 60 questions, up to five additional unscored questions, and 105 minutes. The fee is $200 and a retake is $100, plus applicable taxes.',
  },
  {
    question: 'Do I need to know Java or another language before studying PD1?',
    answer: 'You can study Apex without knowing a particular language first. Practise reading class syntax, tracing code, and identifying how governor limits apply.',
  },
  {
    question: 'What Apex governor limits are tested on PD1?',
    answer: 'Key per-transaction Apex limits include 100 SOQL queries synchronously (200 asynchronously), 150 DML statements, 50,000 records retrieved by SOQL queries, and 100 callouts. The CPU-time limit is 10,000ms synchronously and 60,000ms asynchronously. Limits are enforced by execution context; special contexts and other documented exceptions can differ, and exceeding a governor limit can cause an unhandled runtime exception.',
  },
]

export default function Pd1StudyGuideContent() {
  return (
    <div className="mt-12">


      <CertInsightBlock certSlug="pd1" />

      {/* Section deep-dives */}
      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">What Each Section Actually Tests</h2>
        <div className="space-y-5 text-sm text-gray-700">
          <div>
            <p className="font-semibold text-gray-900 mb-1 flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-salesforce-blue" />
              Process Automation and Logic (28%)
            </p>
            <p><strong>Governor limits</strong> apply per transaction. For example, the general SOQL query limit is 100 synchronously and 200 asynchronously; the DML statement limit is 150. CPU and other limits vary by context. Collect records and perform queries and DML in bulk. Compare Future, Batch, Queueable, and Scheduled Apex by the work they can handle, and consult the official limits reference for exceptions.</p>
            <p className="mt-2 text-xs text-gray-600">Verify current values and context-specific exceptions in Salesforce&apos;s <a className="underline text-salesforce-blue" href="https://developer.salesforce.com/docs/platform/salesforce-app-limits-cheatsheet/guide/salesforce-app-limits-platform-apexgov.html" target="_blank" rel="noreferrer nofollow noopener">Apex Governor Limits quick reference</a> and <a className="underline text-salesforce-blue" href="https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_gov_limits.htm" target="_blank" rel="noreferrer nofollow noopener">Execution Governors and Limits</a>.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1 flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-salesforce-blue" />
              Testing, Debugging, and Deployment (20%)
            </p>
            <p><strong>Testing:</strong> Review the overall 75% Apex coverage requirement and trigger coverage rules. Create test data, run the code, and assert the result. Use Test.startTest() and Test.stopTest() when appropriate, and mock external callouts. For deployment and troubleshooting, practise using sandboxes, deployment tools, debug logs, and the Developer Console.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1 flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-salesforce-blue" />
              User Interface (25%)
            </p>
            <p><strong>Lightning Web Components:</strong> Review public properties and methods with @api, data provision with @wire, and the use of @track for supported object and array changes. Understand lifecycle hooks, Apex calls, and custom events. Compare Lightning Web Components with Aura and Visualforce.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1 flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-salesforce-blue" />
              Integration (tested within Process Automation and Logic)
            </p>
            <p><strong>Integrations:</strong> Compare REST and SOAP, then practise making an Apex HTTP callout. Review endpoints, authentication with Named Credentials, response handling, and callout limits. For inbound work, understand the roles of Salesforce APIs and custom Apex REST endpoints.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1 flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-salesforce-blue" />
              Developer Fundamentals (27%)
            </p>
            <p>Review the model, view, and controller roles and when to use declarative or programmatic features. Practise choosing object relationships and explaining record access through org-wide defaults, roles, and sharing rules. In Apex, understand what <code>with sharing</code> and <code>without sharing</code> mean for record-level access.</p>
          </div>
        </div>
      </section>

      {/* Apex patterns cheat sheet */}
      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Critical Apex Patterns for the Exam</h2>
        <div className="space-y-4 text-sm text-gray-700">
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="font-semibold text-gray-900 mb-2">Bulk processing example:</p>
            <pre className="text-xs font-mono text-gray-700 overflow-x-auto">{`trigger AccountTrigger on Account (before update) {
  List<Id> accountIds = new List<Id>();
  for (Account acc : Trigger.new) {
    accountIds.add(acc.Id);       // collect IDs
  }
  // SOQL OUTSIDE the loop, queries all at once
  Map<Id, Contact> contacts = new Map<Id, Contact>(
    [SELECT Id, AccountId FROM Contact WHERE AccountId IN :accountIds]
  );
}`}</pre>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Async Apex Decision Tree:</h3>
            <ul className="space-y-1">
              <li className="flex gap-2"><CheckCircle2 className="h-3.5 w-3.5 mt-0.5 text-emerald-600 flex-shrink-0" /><span>Need a callout from a trigger? → Consider asynchronous Apex with callout support</span></li>
              <li className="flex gap-2"><CheckCircle2 className="h-3.5 w-3.5 mt-0.5 text-emerald-600 flex-shrink-0" /><span>Need to chain jobs or pass non-primitive data? → Queueable</span></li>
              <li className="flex gap-2"><CheckCircle2 className="h-3.5 w-3.5 mt-0.5 text-emerald-600 flex-shrink-0" /><span>Need to process millions of records? → Batch Apex (Database.Batchable)</span></li>
              <li className="flex gap-2"><CheckCircle2 className="h-3.5 w-3.5 mt-0.5 text-emerald-600 flex-shrink-0" /><span>Need to run daily/weekly automatically? → Schedulable (implements Schedulable)</span></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Trigger context variables (must memorise):</h3>
            <ul className="space-y-1">
              <li className="flex gap-2"><CheckCircle2 className="h-3.5 w-3.5 mt-0.5 text-emerald-600 flex-shrink-0" /><span>Trigger.new, new record values (insert, update, undelete)</span></li>
              <li className="flex gap-2"><CheckCircle2 className="h-3.5 w-3.5 mt-0.5 text-emerald-600 flex-shrink-0" /><span>Trigger.old, old record values (update, delete)</span></li>
              <li className="flex gap-2"><CheckCircle2 className="h-3.5 w-3.5 mt-0.5 text-emerald-600 flex-shrink-0" /><span>Trigger.newMap / Trigger.oldMap: Maps of Id to record</span></li>
              <li className="flex gap-2"><CheckCircle2 className="h-3.5 w-3.5 mt-0.5 text-emerald-600 flex-shrink-0" /><span>Trigger.isBefore / Trigger.isAfter, when in the execution order</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* Study plan */}
      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">6-Week PD1 Study Plan</h2>
        <div className="space-y-4 text-sm text-gray-700">
          <p><strong>Week 1: Apex Fundamentals and Governor Limits:</strong> Review Apex syntax, SOQL, SOSL, DML, and governor limits. In a Developer Edition org, write a trigger that processes a collection without querying inside a loop.</p>
          <p><strong>Week 2: Async Apex:</strong> Compare Future, Batch, Queueable, and Scheduled Apex. Write a small batch job, run it, and inspect the results and debug logs.</p>
          <p><strong>Week 3: Testing and Deployment (20%):</strong> Practise test data setup, assertions, coverage, and callout mocks. Write tests for your batch job and review the results.</p>
          <p><strong>Week 4: LWC and User Interface (25%):</strong> Build a simple Lightning Web Component. Review its files, public properties, data access, and events.</p>
          <p><strong>Week 5: Integration and Fundamentals:</strong> Review callouts, Named Credentials, Salesforce APIs, sharing, and the model-view-controller pattern. Compare inbound and outbound integrations.</p>
          <p><strong>Week 6:</strong> Take timed practice tests and review the topics you missed. Use the official exam guide to check the current format before booking.</p>
        </div>
      </section>

      {/* Scenario tips */}
      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">How to Approach PD1 Scenario Questions</h2>
        <ul className="space-y-3 text-sm text-gray-700">
          <li className="flex gap-2">
            <Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />
            <span><strong>Governor limit questions:</strong> Check whether SOQL or DML runs repeatedly inside a loop. Consider collecting IDs, querying once, and using a map to find results.</span>
          </li>
          <li className="flex gap-2">
            <Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />
            <span><strong>Test class questions:</strong> Review the deployment coverage requirement and any test-data dependencies. Write assertions that check the intended behavior, and investigate failures instead of assuming one cause.</span>
          </li>
          <li className="flex gap-2">
            <Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />
            <span><strong>Async Apex questions:</strong> Match the work to the tool: consider asynchronous Apex for trigger callouts, Queueable for chaining or complex inputs, Batch for large datasets, and Scheduled Apex for timed work.</span>
          </li>
          <li className="flex gap-2">
            <Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />
            <span><strong>LWC questions:</strong> Use @api to expose a child component property or method. Use a custom event when a child needs to notify its parent. Review when to call Apex imperatively and when to use @wire.</span>
          </li>
        </ul>
      </section>

      {/* Mock benchmark */}
      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">How to Know You’re Ready</h2>
        <p className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2">
          <Clock className="h-4 w-4" />
          Use timed practice tests to find topics to revisit
        </p>
        <p className="text-sm text-gray-700 mt-3">
          The listed passing score is 68%. Use your practice results to choose what to review. If limits or bulk processing remain difficult, write and test examples in a Developer Edition org.
        </p>
      </section>

      {/* Top topics */}
      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Top 10 Topics to Review the Day Before</h2>
        <ol className="space-y-1 text-sm text-gray-700 list-decimal list-inside">
          <li>Governor limits per transaction: SOQL 100 synchronous / 200 asynchronous; DML 150; SOQL-retrieved rows 50,000; callouts 100; CPU 10,000ms synchronous / 60,000ms asynchronous</li>
          <li>Bulkification pattern: SOQL/DML outside loops, use Collections and Maps</li>
          <li>Trigger.new vs Trigger.old vs Trigger.newMap/oldMap and when each is available</li>
          <li>Before trigger vs After trigger; before is used to set field values (no DML needed), after is used to query related records</li>
          <li>@isTest, Test.startTest/stopTest purpose, resets limits, forces async execution</li>
          <li>75% code coverage minimum for deployment, calculated across org, not per class</li>
          <li>Future vs Queueable vs Batch vs Scheduled, constraints and use cases</li>
          <li>@AuraEnabled(cacheable=true) for @wire, @AuraEnabled for imperative calls</li>
          <li>with sharing vs without sharing, sharing rules enforcement on Apex classes</li>
          <li>REST callout pattern: HttpRequest, Http.send(), getStatusCode(), getBody()</li>
        </ol>
      </section>

      {/* Related links */}
      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Related Guides</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <span className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">PD1 Exam Tips {RELEASE_CURRENT}</span>
          </span>
          <Link href="/pd1-vs-pd2" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">PD1 vs PD2 Comparison</span>
          </Link>
          <Link href="/certifications/app-builder" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
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
          Check your understanding with the practice questions and review the topics you missed:
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="#practice-questions"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-colors"
          >
            PD1 Practice Questions
            <ArrowRight className="h-4 w-4" />
          </Link>
          <span className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            PD1 Exam Tips {RELEASE_CURRENT}
          </span>
          <Link
            href="/developer-certification-path"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            Developer Cert Path
          </Link>
        </div>
      </section>

      
            <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Your Next Certification Step</h2>
        <p className="text-sm text-gray-700">
          After this certification, consider: <Link href="/certifications/developer-2" className="text-salesforce-blue font-medium hover:underline">Platform Developer II</Link>, <Link href="/certifications/app-builder" className="text-salesforce-blue font-medium hover:underline">Platform App Builder</Link>, or <Link href="/certifications/javascript-developer-i" className="text-salesforce-blue font-medium hover:underline">JavaScript Developer I</Link>.
        </p>
      </section>

      <DifficultyHeatmap slug="developer-1" />
      {/* Hub CTA */}
      <div className="bg-salesforce-blue rounded-xl p-8 text-center text-white mt-10">
        <h2 className="text-2xl font-bold mb-2">Ready to Test Your Knowledge?</h2>
        <p className="text-white mb-6">Try the Platform Developer I (PD1) free practice exam, scored with full explanations.</p>
        <Link href="#practice-questions"
          className="inline-flex items-center px-6 py-3 bg-white text-salesforce-blue rounded-lg font-semibold hover:bg-blue-50 transition-colors"
        >
          Platform Developer I (PD1) Free Practice Exam &rarr;
        </Link>
      </div>
    </div>
  )
}
