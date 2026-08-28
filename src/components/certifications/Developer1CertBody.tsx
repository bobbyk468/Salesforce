import Link from 'next/link'
import FullQuestionBankCta from '@/components/FullQuestionBankCta'
import CertificationCard from '@/components/CertificationCard'
import CertIntroParagraph from '@/components/CertIntroParagraph'
import ExamPrepContent from '@/components/ExamPrepContent'
import CertPageSeo, { CertPageFaq } from '@/components/CertPageSeo'
import CertPageCta from '@/components/CertPageCta'
import CertTrustBar from '@/components/CertTrustBar'
import ExamFeesSection from '@/components/ExamFeesSection'
import ExamLogisticsSection from '@/components/ExamLogisticsSection'
import RelatedCertifications from '@/components/RelatedCertifications'
import CertTableOfContents from '@/components/CertTableOfContents'
import { getCertH1Text, getCertExamWeightageHeading, getCertPracticeQuestionsHeading, getPracticeQuestionsIntro, slugToDisplayName } from '@/lib/cert-seo-data'
import { getExamWeightage } from '@/lib/exam-weightage-data'
import { RELEASE_CURRENT } from '@/lib/release-data'

import dynamic from 'next/dynamic'
import CertReadinessSummary from '@/components/CertReadinessSummary'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import OfficialSourceRef from '@/components/OfficialSourceRef'
import ExecutionContextDiagram from '@/components/certifications/ExecutionContextDiagram'
import { getInitialPracticeQuestions } from '@/lib/practice-question-lite'
const PracticeQuestionsSection = dynamic(
  () => import('@/components/PracticeQuestionsSection'),
  {
    ssr: false,
    loading: () => (
      <div id="practice-questions" className="mt-12 min-h-[440px] w-full" aria-hidden="true" />
    ),
  }
)

const sampleQuestions = [
  {
    question: "A developer needs to create a trigger that fires after a record is inserted and updated. Which trigger events should be used?",
    options: [
      "after insert, after update",
      "before insert, before update",
      "after insert, before update",
      "isInsert, isUpdate"
    ],
    correctAnswer: 0,
    explanation: "The 'after insert' and 'after update' trigger events fire after the record is saved to the database, which is required when you need to access the record Id or related records.",
    whyWrong: [
      "'before insert, before update' fires prior to save, when the record doesn't yet have an Id — insufficient for logic needing the saved record or related records.",
      "'after insert, before update' mixes timing incorrectly for this scenario's need to run after both operations.",
      "'isInsert, isUpdate' are trigger context variables, not trigger event names — this option misidentifies the concept being asked about."
    ]
  },
  {
    question: "What is the governor limit for the maximum number of SOQL queries in a single transaction?",
    options: [
      "50 queries",
      "100 queries",
      "150 queries",
      "200 queries"
    ],
    correctAnswer: 1,
    explanation: "The synchronous governor limit for SOQL queries is 100 per transaction. For asynchronous contexts, the limit is 200.",
    whyWrong: [
      "50 understates the actual synchronous SOQL limit of 100.",
      "150 overstates the actual synchronous SOQL limit of 100.",
      "200 is the asynchronous limit, not the synchronous limit this question asks about."
    ]
  },
  {
    question: "Which annotation is used to expose an Apex method as a REST web service?",
    options: [
      "@RestResource",
      "@HttpGet",
      "@RemoteAction",
      "@AuraEnabled"
    ],
    correctAnswer: 0,
    explanation: "The @RestResource annotation is used at the class level to expose an Apex class as a REST resource. Individual methods use @HttpGet, @HttpPost, etc.",
    whyWrong: [
      "@HttpGet is a method-level annotation for REST verbs, not the class-level annotation that exposes the class itself as a REST resource.",
      "@RemoteAction exposes Apex to Visualforce remoting, unrelated to REST web services.",
      "@AuraEnabled exposes methods to Lightning components, not REST API consumers."
    ]
  },
  {
    question: "A developer writes a SOQL query: SELECT Id, Name FROM Account WHERE Name LIKE '%tech%'. What will this query return?",
    options: [
      "Accounts where Name starts with 'tech'",
      "Accounts where Name ends with 'tech'",
      "Accounts where Name contains 'tech'",
      "Accounts where Name equals 'tech'"
    ],
    correctAnswer: 2,
    explanation: "The % wildcard matches any number of characters. Using %tech% matches any Account where the Name contains 'tech' anywhere in the string.",
    whyWrong: [
      "'starts with' would require the pattern 'tech%' (no leading wildcard), not '%tech%'.",
      "'ends with' would require the pattern '%tech' (no trailing wildcard), not '%tech%'.",
      "'equals' would require no wildcards at all — LIKE with wildcards never means exact equality."
    ]
  },
  {
    question: "Which method should be used to perform DML operations inside a for loop safely?",
    options: [
      "Database.insert()",
      "insert statement",
      "Collect records in a list and perform DML outside the loop",
      "Use @future method"
    ],
    correctAnswer: 2,
    explanation: "To avoid hitting governor limits, you should always collect records in a list during the loop and perform DML operations outside the loop (bulk processing).",
    whyWrong: [
      "Database.insert() alone doesn't address the loop-placement issue — DML inside a loop is the problem regardless of which insert method is used.",
      "A plain insert statement inside a loop has the same governor-limit risk as any DML call inside a loop.",
      "@future methods don't solve bulkification — they move work asynchronously but don't fix DML-in-a-loop patterns."
    ]
  },
  {
    question: "What is the minimum code coverage required for Apex classes and triggers to be deployed to production?",
    options: [
      "60%",
      "75%",
      "80%",
      "100%"
    ],
    correctAnswer: 1,
    explanation: "Salesforce requires at least 75% code coverage for Apex classes and triggers to be deployed to production. This ensures code quality and reliability.",
    whyWrong: [
      "60% is below Salesforce's actual required threshold of 75%.",
      "80% overstates the actual required minimum, though it's often recommended as a safety margin.",
      "100% is not required by Salesforce, though desirable in some rigorous engineering practices."
    ]
  },
  {
    question: "Which annotation is used to make an Apex method available to Lightning Web Components?",
    options: [
      "@AuraEnabled",
      "@RemoteAction",
      "@RestResource",
      "@InvocableMethod"
    ],
    correctAnswer: 0,
    explanation: "The @AuraEnabled annotation makes an Apex method available to Lightning Web Components (LWC) and Aura components, allowing them to call server-side logic.",
    whyWrong: [
      "@RemoteAction exposes methods to Visualforce remoting, not modern LWC/Aura components.",
      "@RestResource exposes a class as a REST API endpoint, unrelated to LWC method calls.",
      "@InvocableMethod exposes Apex to Flow and Process Builder, not LWC."
    ]
  },
  {
    question: "A developer wants to create a trigger that processes records in bulk. What is the best practice?",
    options: [
      "Process records one at a time in a for loop",
      "Collect records in a list and process outside the loop",
      "Use @future methods for all processing",
      "Use synchronous methods only"
    ],
    correctAnswer: 1,
    explanation: "Best practice is to collect records in a list during iteration and process them in bulk outside the loop to avoid hitting governor limits.",
    whyWrong: [
      "Processing one record at a time in a loop is the anti-pattern that causes governor limit issues, not the best practice.",
      "@future methods don't solve bulkification — they simply defer execution asynchronously.",
      "'Synchronous methods only' doesn't address the bulk-processing requirement at all."
    ]
  },
  {
    question: "What is the governor limit for DML statements in a single transaction?",
    options: [
      "100 DML statements",
      "150 DML statements",
      "200 DML statements",
      "Unlimited"
    ],
    correctAnswer: 1,
    explanation: "The synchronous governor limit for DML statements (insert, update, delete, upsert, etc.) is 150 per transaction.",
    whyWrong: [
      "100 DML statements understates the actual synchronous limit of 150.",
      "200 DML statements overstates the actual synchronous limit of 150.",
      "The DML statement limit is not unlimited — Salesforce enforces a specific cap to protect the multi-tenant platform."
    ]
  },
  {
    question: "Which method is used to handle partial success in DML operations?",
    options: [
      "Database.insert()",
      "insert statement",
      "Database.insert() with allOrNone parameter",
      "All of the above"
    ],
    correctAnswer: 0,
    explanation: "Database.insert() returns a Database.SaveResult array, allowing you to handle partial success. The insert statement throws an exception if any record fails.",
    whyWrong: [
      "A plain insert statement throws an exception on any failure — it doesn't support partial success handling.",
      "'Database.insert() with allOrNone parameter' set to true behaves like the plain insert statement (all-or-nothing); it's the default false setting on Database.insert() that enables partial success.",
      "'All of the above' is incorrect since the plain insert statement specifically does NOT support partial success."
    ]
  },
  {
    question: "What is the purpose of Test.runAs() in Apex test classes?",
    options: [
      "To test with different user permissions",
      "To test asynchronous code",
      "To test batch classes",
      "To test triggers"
    ],
    correctAnswer: 0,
    explanation: "Test.runAs() allows you to execute test code in the context of a specific user, enabling you to test with different user permissions and sharing rules.",
    whyWrong: [
      "Test.runAs() doesn't test asynchronous code — that's unrelated to its purpose of switching user context.",
      "Test.runAs() isn't specific to batch class testing — it applies to any Apex test scenario needing a different user context.",
      "Test.runAs() isn't specific to trigger testing — it's a general user-context testing mechanism usable anywhere."
    ]
  },
  {
    question: "Which exception type should be thrown when validation fails in Apex?",
    options: [
      "Exception",
      "DmlException",
      "AuraHandledException",
      "Custom exception class"
    ],
    correctAnswer: 1,
    explanation: "DmlException is thrown when DML operations fail. For custom validation errors, you can throw DmlException with a custom message.",
    whyWrong: [
      "A generic Exception doesn't carry the DML-specific context that DmlException provides for failed database operations.",
      "AuraHandledException is specifically for surfacing errors to Lightning components, not general DML failure handling.",
      "A custom exception class can be used, but DmlException is the standard, built-in type specifically for DML failures."
    ]
  },
  {
    question: "A developer wants to query related records in a single SOQL query. Which clause should be used?",
    options: [
      "JOIN",
      "INNER JOIN",
      "Relationship query (dot notation)",
      "Subquery"
    ],
    correctAnswer: 2,
    explanation: "SOQL uses relationship queries (dot notation) to query related records, such as 'SELECT Id, Account.Name FROM Contact' to get the Account name for each Contact.",
    whyWrong: [
      "JOIN is not valid SOQL syntax — SOQL uses relationship dot-notation instead of SQL-style joins.",
      "INNER JOIN is SQL syntax, not valid SOQL — Salesforce's query language doesn't support this keyword.",
      "A subquery (parent-to-child) is a different SOQL technique for retrieving child records, not the dot-notation syntax used for the parent-to-child scenario described here."
    ]
  },
  {
    question: "What is the purpose of the @TestVisible annotation?",
    options: [
      "To make a method available to test classes",
      "To make a private method or variable accessible to test classes",
      "To mark a class as a test class",
      "To enable test coverage"
    ],
    correctAnswer: 1,
    explanation: "@TestVisible allows test classes to access private methods and variables, enabling better test coverage without making them public.",
    whyWrong: [
      "'To make a method available to test classes' is too broad — @TestVisible specifically exposes private members, not general method availability.",
      "@TestVisible doesn't mark a class as a test class — that's unrelated to its actual purpose.",
      "@TestVisible doesn't enable test coverage tracking — that's a platform-level, automatic measurement, not something this annotation controls."
    ]
  },
  {
    question: "Which governor limit applies to the number of records processed in a single transaction?",
    options: [
      "10,000 records",
      "50,000 records",
      "100,000 records",
      "200,000 records"
    ],
    correctAnswer: 3,
    explanation: "The governor limit for the number of records processed in a single transaction is 200,000 records for synchronous contexts and 1,000,000 for asynchronous contexts.",
    whyWrong: [
      "10,000 records understates the actual synchronous governor limit of 200,000.",
      "50,000 records understates the actual synchronous governor limit of 200,000.",
      "100,000 records understates the actual synchronous governor limit of 200,000."
    ]
  },
]

export default function Developer1CertBody({ slug }: { slug: string }) {
  const examSections = getExamWeightage(slug)
  const initialQuestions = getInitialPracticeQuestions(sampleQuestions)
  return (
    <div data-critical-content className="max-w-7xl mx-auto px-4 py-12">
      <CertPageSeo slug={slug} certTitle={slugToDisplayName(slug)} />
        <CertIntroParagraph slug={slug} />
        {/* Quick Knowledge Check — above fold to signal interactive content to Google */}
        <div className="mt-4 mb-2 rounded-xl border border-blue-100 bg-blue-50/50 p-4 sm:p-5">
          <p className="text-xs font-semibold uppercase tracking-widest text-salesforce-blue mb-2">Quick Knowledge Check</p>
          <p className="text-sm font-medium text-gray-900 mb-3">A developer writes a trigger that runs a SOQL query inside a <code className="bg-white px-1 rounded border border-gray-200">for</code> loop. What governor limit risk does this create?</p>
          <details className="group">
            <summary className="cursor-pointer text-sm text-salesforce-blue font-medium hover:underline list-none">
              ▶ Reveal answer
            </summary>
            <p className="mt-2 text-sm text-gray-700">
              <strong>SOQL inside a loop</strong> will hit the <strong>100 SOQL query limit</strong> if the loop iterates over more than 100 records. Fix: run one SOQL query before the loop using <code className="bg-white px-1 rounded border border-gray-200">WHERE Id IN :idSet</code>, store results in a <code className="bg-white px-1 rounded border border-gray-200">Map&lt;Id, SObject&gt;</code>, and look up records inside the loop with no additional queries.
            </p>
          </details>
          <p className="text-xs text-gray-600 mt-3">15 full practice questions with explanations are below ↓</p>
        </div>

        {/* Trust signals + Prominent CTA above fold */}
        <CertTrustBar slug={slug} />
        <CertPageCta slug={slug} certTitle={slugToDisplayName(slug)} />
        <ContentPageAuthor />

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-3">
            {/* Who Is This Cert For */}
            <section className="mb-8 rounded-xl border border-gray-100 bg-gray-50/50 p-5 sm:p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-3">Who is the Platform Developer I exam for?</h2>
              <ul className="space-y-2 text-sm text-gray-700">
                <li><strong className="text-gray-900">Developers new to Salesforce:</strong> You have programming experience in Java, JavaScript, or another language and want to build on the Salesforce platform using Apex and LWC.</li>
                <li><strong className="text-gray-900">Admins transitioning to development:</strong> You passed ADM-201 and want to move beyond declarative tools into custom code, triggers, and integrations.</li>
                <li><strong className="text-gray-900">Full-stack developers at SI partners:</strong> Your firm requires PD1 certification for project staffing, and you need to validate Salesforce-specific development skills.</li>
              </ul>
            </section>

            {/* Exam Fees & Registration section */}
            <ExamFeesSection slug={slug} />
            <OfficialSourceRef slug={slug} />

            <CertificationCard
              slug={slug}
            title={slugToDisplayName(slug)}
            code="PD1"
            description="The Platform Developer I certification validates your skills in developing custom applications on the Salesforce platform using Apex and Visualforce."
            examDetails={{
              questions: 60,
              passingScore: "68%",
              duration: "110 min",
              cost: "$200",
            }}
            topics={[
              "Apex Fundamentals",
              "Data Modeling",
              "SOQL & SOSL",
              "DML Operations",
              "Triggers",
              "Visualforce",
              "Lightning Components",
              "Testing",
              "Debug & Deployment",
              "Integration"
            ]}
            examSections={examSections}
            h1Text={getCertH1Text(slug)}
          examWeightageHeading={getCertExamWeightageHeading(slug)}
          />

          <div id="exam-prep">
            <ExamPrepContent slug={slug} />
          </div>

          {/* Study Timeline */}
          <details className="group mt-8 rounded-xl border border-gray-100 bg-white p-5 sm:p-6 [content-visibility:auto] [contain-intrinsic-size:1px_380px]">
            <summary className="cursor-pointer list-none text-lg font-bold text-gray-900 lg:hidden">
              Suggested study timeline for PD1 (6–10 weeks)
            </summary>
            <div className="hidden group-open:block lg:block">
              <h2 className="hidden lg:block text-lg font-bold text-gray-900 mb-3">
                Suggested study timeline for PD1 (6–10 weeks)
              </h2>
              <p className="text-sm text-gray-600 mb-3">
                PD1 requires hands-on coding practice — not just reading. Budget time for Apex exercises in a Developer Edition org alongside study.
              </p>
              <ul className="text-sm text-gray-700 space-y-2 list-disc list-inside">
                <li><strong>Weeks 1–2:</strong> Salesforce Fundamentals &amp; Data Modelling (20%) — objects, relationships, schema design, SOQL basics</li>
                <li><strong>Weeks 2–3:</strong> Logic &amp; Process Automation (23%) — Apex basics, governor limits, bulkification patterns</li>
                <li><strong>Weeks 3–5:</strong> Apex Triggers &amp; Classes (24%) — before/after triggers, handler pattern, async Apex (future, batch, queueable)</li>
                <li><strong>Weeks 5–6:</strong> Testing &amp; Debugging (22%) — test class structure, mock callouts, code coverage, debug logs</li>
                <li><strong>Weeks 6–7:</strong> UI &amp; Deployment (11%) — LWC basics, Aura, Visualforce, change sets, sandboxes</li>
                <li><strong>Weeks 7–8:</strong> Full mock exams and targeted weak-area review</li>
              </ul>
              <p className="text-xs text-gray-600 mt-3">Already an admin? Reduce Weeks 1–2 to 3–4 days — you already know the data model and platform fundamentals.</p>
            </div>
          </details>

          {/* Is PD1 Hard? */}
          <details id="is-pd1-hard" className="group mt-8 rounded-xl border border-gray-100 bg-white p-5 sm:p-6 [content-visibility:auto] [contain-intrinsic-size:1px_460px]">
            <summary className="cursor-pointer list-none text-lg font-bold text-gray-900 lg:hidden">
              Is the PD1 Exam Hard?
            </summary>
            <div className="hidden group-open:block lg:block">
              <h2 id="pd1-difficulty-heading" className="hidden lg:block text-lg font-bold text-gray-900 mb-3">
                Is the PD1 Exam Hard?
              </h2>
              <p className="text-sm text-gray-700 mb-3">
                The Salesforce Platform Developer I exam is considered <strong className="text-gray-900">moderately difficult</strong> — harder than ADM-201, but accessible to candidates with 3–6 months of real Apex development experience. The challenge is that most questions present actual code and require you to reason about governor limits, async patterns, and trigger behaviour under realistic conditions.
              </p>
              <ul className="text-sm text-gray-700 space-y-2 list-disc list-inside mb-4">
                <li><strong>60 scored questions</strong> in 110 minutes — roughly 1.8 minutes per question.</li>
                <li><strong>68% passing score</strong> — you can miss up to 19 questions and still pass.</li>
                <li><strong>Code-heavy</strong> — expect 30–40% of questions to include Apex code snippets.</li>
                <li><strong>Scenario-based</strong> — most questions describe a business or technical requirement and ask for the right approach.</li>
                <li><strong>No multiple-select trick</strong> — PD1 uses single-best-answer format (unlike ADM-201 which has some multiple-select).</li>
              </ul>
              <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                <p className="text-sm font-semibold text-emerald-800 mb-1">Pass Rate Guidance</p>
                <p className="text-sm text-emerald-700">
                  Candidates who pass PD1 typically score <strong>78%+</strong> on at least 3 full-length mock exams before booking. If you’re scoring below 70% on mocks, focus on governor limits and bulkification — those two topics cover over 30% of the exam combined.
                </p>
              </div>
            </div>
          </details>

          {/* Exam Format Explained */}
          <details id="exam-format" className="group mt-8 rounded-xl border border-gray-100 bg-white p-5 sm:p-6 [content-visibility:auto] [contain-intrinsic-size:1px_680px]">
            <summary className="cursor-pointer list-none text-lg font-bold text-gray-900 lg:hidden">
              PD1 Exam Format Explained
            </summary>
            <div className="hidden group-open:block lg:block">
              <h2 className="hidden lg:block text-lg font-bold text-gray-900 mb-3">PD1 Exam Format Explained</h2>
              <p className="text-sm text-gray-700 mb-3">The exam is proctored online or at a test centre through Webassessor. Here is the format:</p>
              <ExamLogisticsSection slug={slug} />
              <h3 className="text-base font-semibold text-gray-900 mb-2 mt-4">How Many Questions Are Code-Based?</h3>
              <p className="text-sm text-gray-700 mb-3">About 30-40% of questions include Apex code snippets or pseudocode. You need to read the code, identify issues (governor limit violations, bulkification failures, incorrect trigger context), and select the correct fix or outcome. Another 30-40% are scenario-based without code, describing a business requirement and asking which approach is best.</p>
              <h3 className="text-base font-semibold text-gray-900 mb-2">Best Way to Pass on Your First Attempt</h3>
              <ul className="text-sm text-gray-700 space-y-2 list-disc list-inside">
                <li><strong>Write real Apex code:</strong> Set up a Developer Edition org and build triggers, batch classes, and test classes. Reading alone is not sufficient for PD1.</li>
                <li><strong>Memorise governor limits:</strong> 100 SOQL queries, 150 DML statements, 50K query rows, 6MB heap, 10s CPU. These numbers appear in nearly every mock and the real exam.</li>
                <li><strong>Master the trigger handler pattern:</strong> One trigger per object, all logic in a handler class. Know when to use before vs after triggers and the full order of execution.</li>
                <li><strong>Practice reading code under time pressure:</strong> At 1.8 minutes per question, you need to parse code snippets quickly. Time yourself on practice exams.</li>
              </ul>
            </div>
          </details>

          {/* Key Concepts */}
          <div id="key-concepts" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Platform Developer I: Key Concepts for the Exam</h2>
            <div className="space-y-6 text-sm text-gray-700">
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Apex Governor Limits &amp; the Limits Class</h3>
                <p>Governor limits prevent any one transaction from monopolising shared platform resources. Key synchronous limits: <strong>100 SOQL queries</strong>, <strong>150 DML statements</strong>, <strong>50,000 records returned from queries</strong>, <strong>6 MB heap size</strong>, <strong>10 seconds CPU time</strong>. Asynchronous limits are generally 2× the synchronous limits. Use <code className="bg-gray-100 px-1 rounded">Limits.getQueries()</code> and <code className="bg-gray-100 px-1 rounded">Limits.getLimitQueries()</code> from the <strong>Apex Common Classes</strong> (the <code className="bg-gray-100 px-1 rounded">Limits</code> class) to check usage at runtime. The exam tests which limit applies to a given code scenario and what to change.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Bulkification: Never Put SOQL or DML Inside a Loop</h3>
                <p>The core Apex pattern: query records <em>before</em> loops using a single SOQL with <code className="bg-gray-100 px-1 rounded">IN :triggerIdSet</code>, collect changes in a <strong>List</strong> or <strong>Map</strong> <em>inside</em> loops, then perform DML <em>after</em> loops. Map&lt;Id, SObject&gt; is the workhorse — used to relate trigger records to queried related records by Id. Use <code className="bg-gray-100 px-1 rounded">Database.insert(records, false)</code> for partial success (returns SaveResult array). The exam presents code with SOQL/DML in a loop and asks you to identify the issue or fix it.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Apex Triggers: Order of Execution &amp; Handler Pattern</h3>
                <p><strong>Before triggers</strong> fire before the record is saved — use them to validate or modify field values before save (changes to <code className="bg-gray-100 px-1 rounded">Trigger.new</code> persist without extra DML). <strong>After triggers</strong> fire after the record is committed — use them when you need the record Id or to update related records. Key context variables: <code className="bg-gray-100 px-1 rounded">Trigger.new</code>, <code className="bg-gray-100 px-1 rounded">Trigger.old</code> (not available on insert), <code className="bg-gray-100 px-1 rounded">Trigger.isInsert</code>, <code className="bg-gray-100 px-1 rounded">Trigger.isUpdate</code>. Best practice: one trigger per object, all logic delegated to a handler class. The <strong>Order of Execution</strong> for a save: validation rules → before triggers → system validation → after triggers → workflow rules → DML commit → flows (record-triggered).</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">SOQL: Relationships, Aggregates &amp; SOSL</h3>
                <p>Child-to-parent query: <code className="bg-gray-100 px-1 rounded">SELECT Id, Account.Name FROM Contact</code> (dot notation). Parent-to-child: <code className="bg-gray-100 px-1 rounded">SELECT Id, (SELECT Id FROM Contacts) FROM Account</code> (subquery). Aggregate functions: COUNT(), SUM(), AVG() — require GROUP BY. SOSL searches multiple objects simultaneously: <code className="bg-gray-100 px-1 rounded">FIND ’term’ IN ALL FIELDS RETURNING Account, Contact</code>. Use SOSL for cross-object searches; use SOQL when you know the object.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Process Automation: Flow vs. Apex Triggers</h3>
                <p>The exam tests when to use declarative automation (Flow) vs. programmatic automation (Apex Triggers). Use <strong>Flow</strong> for standard CRUD operations, approval automation, and complex UI flows without code. Use <strong>Apex Triggers</strong> when you need cross-object logic beyond Flow’s capabilities, governor limit control, or callout scheduling. Both can fire on the same record — the Order of Execution determines which runs first (Flow runs before After Triggers in record-triggered contexts). Key PD1 topic: if Flow can do it declaratively, prefer Flow; if it needs Apex Classes, Limits, or Database class methods, use Apex.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Testing Framework: SeeAllData, Test.startTest &amp; HttpCalloutMock</h3>
                <p>Minimum <strong>75% code coverage</strong> required across all Apex to deploy to production. Test classes use <code className="bg-gray-100 px-1 rounded">@isTest</code>. Test data is isolated by default (<code className="bg-gray-100 px-1 rounded">SeeAllData=false</code>) — create all test data explicitly using <code className="bg-gray-100 px-1 rounded">@TestSetup</code> or within each test method. <code className="bg-gray-100 px-1 rounded">Test.startTest()</code> resets governor limits and marks the start of the tested code; <code className="bg-gray-100 px-1 rounded">Test.stopTest()</code> forces async operations (future methods, batch jobs) to complete synchronously. Mock HTTP callouts with <code className="bg-gray-100 px-1 rounded">Test.setMock(HttpCalloutMock.class, mockImpl)</code>. <code className="bg-gray-100 px-1 rounded">@TestVisible</code> exposes private members to test classes without making them public.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Lightning Web Components (LWC): Wire Service &amp; @AuraEnabled</h3>
                <p>LWC is the modern Salesforce UI framework. Key decorators: <code className="bg-gray-100 px-1 rounded">@track</code> (reactive private properties), <code className="bg-gray-100 px-1 rounded">@api</code> (public properties exposed to parent), <code className="bg-gray-100 px-1 rounded">@wire</code> (reactive Apex method calls). The <code className="bg-gray-100 px-1 rounded">@wire</code> decorator connects an LWC to an Apex method marked <code className="bg-gray-100 px-1 rounded">@AuraEnabled(cacheable=true)</code> — the <code className="bg-gray-100 px-1 rounded">cacheable</code> flag is required for @wire. Use <code className="bg-gray-100 px-1 rounded">lightning-record-form</code> for standard record CRUD without writing Apex. Communication between components uses <code className="bg-gray-100 px-1 rounded">CustomEvent</code> (child to parent) and <code className="bg-gray-100 px-1 rounded">LightningMessageService</code> (unrelated components).</p>
              </div>
            </div>
          </div>

          {/* Core Apex Code Patterns */}
          <div id="apex-code-patterns" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Core Apex Code Patterns for PD1</h2>
            <p className="text-sm text-gray-600 mb-5">
              The PD1 exam presents real Apex code in 30–40% of questions. These three patterns appear most frequently — understand them at a read-and-reason level, not just from a definition.
            </p>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-2">1. Bulk-Safe Trigger with Handler Class</h3>
                <p className="text-sm text-gray-600 mb-2">One trigger per object, all logic in a handler class. SOQL runs once outside the loop; DML runs once after the loop.</p>
                <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 text-xs overflow-x-auto leading-relaxed"><code>{`// AccountTrigger.trigger
trigger AccountTrigger on Account (before insert, after insert) {
    AccountTriggerHandler handler = new AccountTriggerHandler();
    if (Trigger.isBefore && Trigger.isInsert) {
        handler.onBeforeInsert(Trigger.new);
    }
    if (Trigger.isAfter && Trigger.isInsert) {
        handler.onAfterInsert(Trigger.new);
    }
}

// AccountTriggerHandler.cls
public class AccountTriggerHandler {
    public void onBeforeInsert(List<Account> newAccounts) {
        // Validate or set field values — no DML needed, changes persist
        for (Account acc : newAccounts) {
            if (acc.Industry == null) {
                acc.Industry = 'Technology';
            }
        }
    }

    public void onAfterInsert(List<Account> newAccounts) {
        // Collect Ids, run one SOQL, perform one DML outside loop
        Set<Id> accountIds = new Map<Id, Account>(newAccounts).keySet();
        List<Contact> contacts = [SELECT Id, AccountId FROM Contact
                                   WHERE AccountId IN :accountIds];
        List<Contact> toUpdate = new List<Contact>();
        for (Contact c : contacts) {
            c.Description = 'Processed';
            toUpdate.add(c);
        }
        update toUpdate; // Single DML — not inside loop
    }
}`}</code></pre>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-2">2. Database Class with Partial Success &amp; Error Handling</h3>
                <p className="text-sm text-gray-600 mb-2">Use <code className="bg-gray-100 px-1 rounded text-xs">Database.insert(records, false)</code> to allow partial success; inspect the SaveResult array for errors.</p>
                <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 text-xs overflow-x-auto leading-relaxed"><code>{`List<Account> accountsToInsert = new List<Account>();
accountsToInsert.add(new Account(Name = 'Valid Account'));
accountsToInsert.add(new Account()); // Missing required field — will fail

// allOrNone = false → partial success allowed
Database.SaveResult[] results = Database.insert(accountsToInsert, false);

for (Database.SaveResult sr : results) {
    if (sr.isSuccess()) {
        System.debug('Inserted: ' + sr.getId());
    } else {
        for (Database.Error err : sr.getErrors()) {
            System.debug('Error: ' + err.getMessage()
                       + ' Fields: ' + err.getFields());
        }
    }
}`}</code></pre>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-2">3. Test Class with HttpCalloutMock</h3>
                <p className="text-sm text-gray-600 mb-2">HTTP callouts cannot run in tests — implement <code className="bg-gray-100 px-1 rounded text-xs">HttpCalloutMock</code> and register it with <code className="bg-gray-100 px-1 rounded text-xs">Test.setMock()</code>.</p>
                <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 text-xs overflow-x-auto leading-relaxed"><code>{`// Mock implementation
@isTest
global class MockHttpCallout implements HttpCalloutMock {
    global HTTPResponse respond(HTTPRequest req) {
        HttpResponse res = new HttpResponse();
        res.setHeader('Content-Type', 'application/json');
        res.setBody('{"status":"success"}');
        res.setStatusCode(200);
        return res;
    }
}

// Test class
@isTest
private class CalloutServiceTest {
    @isTest
    static void testCalloutSuccess() {
        Test.setMock(HttpCalloutMock.class, new MockHttpCallout());
        Test.startTest();
        String result = CalloutService.makeCallout('https://api.example.com');
        Test.stopTest(); // Forces async to complete
        System.assertEquals('success', result, 'Expected success status');
    }
}`}</code></pre>
              </div>
            </div>
          </div>

          <ExecutionContextDiagram />

          {/* How to Pass Scenario Strategy */}
          <div id="scenario-tips" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Pass the Platform Developer I (PD1) Exam</h2>
            <p className="text-sm text-gray-600 mb-5">
              PD1 is a code-heavy exam where most questions present Apex code or describe a development scenario and ask you to identify the issue, fix, or best practice. Understanding governor limits, bulkification patterns, and test methodology at a deep practical level is what separates passing candidates from failing ones.
            </p>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-1">Governor Limit Questions — the Pattern to Recognise</p>
                <p>The exam will show you Apex code and ask &ldquo;what is wrong with this code?&rdquo; The answer is almost always SOQL or DML inside a for loop. Look for <code className="bg-gray-100 px-1 rounded">for (Account a : accounts) &#123; insert contact; &#125;</code> — that’s DML in a loop, and it will hit the 150 DML statement limit. The fix: collect records in a List inside the loop, then call <code className="bg-gray-100 px-1 rounded">insert contactList;</code> after the loop. For SOQL: use Maps populated with a single query before the loop, not a query inside the loop.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Testing Questions — the Three Rules to Memorise</p>
                <p>(1) Minimum 75% code coverage across the entire org (not per class) to deploy. (2) Test data must be created in the test method — do not rely on org data (<code className="bg-gray-100 px-1 rounded">@isTest(SeeAllData=false)</code> is the default). (3) HTTP callout tests require a mock implementation — use <code className="bg-gray-100 px-1 rounded">Test.setMock(HttpCalloutMock.class, mockImpl)</code>. Questions often say &ldquo;a developer’s test class fails when calling an external API&rdquo; — the answer is always to implement <code className="bg-gray-100 px-1 rounded">HttpCalloutMock</code>.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Async Apex Selection — Which Method for Which Scenario</p>
                <p>Use <strong>Future methods</strong> for simple one-off async operations (HTTP callouts from triggers, mixed DML). Use <strong>Batch Apex</strong> when processing more than 10,000 records (up to 50 million). Use <strong>Queueable Apex</strong> when you need chaining (one job triggers another) or need to pass complex objects between async contexts. Use <strong>Scheduled Apex</strong> for time-based execution. Exam tip: if the question says &ldquo;millions of records&rdquo; or &ldquo;process in chunks&rdquo; — the answer is Batch Apex. If it says &ldquo;chain jobs&rdquo; — Queueable.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Trigger Scenarios — Before vs After</p>
                <p>When the question says &ldquo;set a field value before the record is saved&rdquo; — use a before trigger (changes to <code className="bg-gray-100 px-1 rounded">Trigger.new</code> persist without a DML call). When the question says &ldquo;create a related record after an account is created&rdquo; — use an after trigger (the account Id exists after save). When the question says &ldquo;prevent a record from being saved if a condition is not met&rdquo; — use <code className="bg-gray-100 px-1 rounded">addError()</code> in a before trigger. Never call a SOQL query in a trigger without first checking bulkification patterns.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Exam Strategy</p>
                <p>PD1 questions often include realistic-looking Apex code snippets. Read code carefully — the &ldquo;wrong answer&rdquo; in the options often uses the right method name but in the wrong context (e.g., using a future method where a queueable is needed, or using DML before a callout). Passing score is 68% (41/60 questions). Aim for 78%+ on full mock exams — the additional buffer accounts for exam-day stress and unfamiliar question phrasing. Complete the official Trailhead PD1 Trailmix before booking.</p>
              </div>
            </div>
          </div>

          

          <CertReadinessSummary slug={slug} />
          <PracticeQuestionsSection
            heading={getCertPracticeQuestionsHeading(slug)}
            introText={getPracticeQuestionsIntro(sampleQuestions.length, ". Click on an answer to select it, then check your answer to see if you're correct.")}
            questions={initialQuestions}
          />


                    <FullQuestionBankCta slug={slug} certTitle={slugToDisplayName(slug)} />

          <div id="related-certs">
            <RelatedCertifications currentSlug={slug} />
          </div>

          {/* PD1 study resources */}
          <section className="mt-8 rounded-xl border border-blue-100 bg-blue-50/40 p-5 sm:p-6" aria-labelledby="pd1-guides-heading">
            <h2 id="pd1-guides-heading" className="text-base font-semibold text-gray-900 mb-3">PD1 Study Resources</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/pd1-exam-tips" className="text-salesforce-blue font-medium hover:underline">
                  PD1 Exam Tips ({RELEASE_CURRENT}) →
                </Link>
                <span className="text-gray-600 ml-2">Governor limits, bulkification, 75% coverage rule, and a mock-test benchmark to pass first attempt.</span>
              </li>
              <li>
                <Link href="/pd1-vs-pd2" className="text-salesforce-blue font-medium hover:underline">
                  PD1 vs PD2: Which Should You Take First? →
                </Link>
                <span className="text-gray-600 ml-2">Difficulty comparison, what changes between the two exams, and when you are ready for PD2.</span>
              </li>
              <li>
                <Link href="/certifications/developer-2" className="text-salesforce-blue font-medium hover:underline">
                  What comes after PD1? Platform Developer II →
                </Link>
                <span className="text-gray-600 ml-2">Advanced Apex, integrations, and design patterns. Requires PD1 certification.</span>
              </li>
              <li>
                <Link href="/developer-certification-path" className="text-salesforce-blue font-medium hover:underline">
                  Full Salesforce Developer Certification Path →
                </Link>
                <span className="text-gray-600 ml-2">Step-by-step guide: PD1 → JavaScript Developer I → PD2 → Integration Architect.</span>
              </li>
            </ul>
            <p className="text-xs text-gray-600 mt-3">
              Coming from the admin track?{' '}
              <Link href="/adm-201-exam-tips" className="text-salesforce-blue underline">
                ADM-201 exam tips ({RELEASE_CURRENT})
              </Link>
              {' '}covers the Salesforce fundamentals that overlap with PD1.
            </p>
          </section>

          <CertPageFaq slug={slug} certTitle={slugToDisplayName(slug)} />
        </div>

        {/* Sidebar - Table of Contents */}
        <aside className="lg:col-span-1">
          <CertTableOfContents
            sections={[
              { id: 'exam-prep', title: 'Exam Prep Content' },
              { id: 'is-pd1-hard', title: 'Is PD1 Hard?' },
              { id: 'exam-format', title: 'Exam Format' },
              { id: 'key-concepts', title: 'Key Concepts' },
              { id: 'apex-code-patterns', title: 'Apex Code Patterns' },
              { id: 'scenario-tips', title: 'How to Pass PD1' },
              { id: 'practice-questions', title: 'Practice Questions' },
              { id: 'more-questions', title: 'Get More Questions' },
              { id: 'related-certs', title: 'Related Certifications' },
            ]}
          />
        </aside>
      </div>
    </div>
  )
}
