import { serializeJsonLd } from '@/lib/serialize-json-ld'
import { getPracticeQuestionsForExam } from '@/lib/git-practice-questions'
import Link from '@/components/AppLink'
import FullQuestionBankCta from '@/components/FullQuestionBankCta'
import CertificationCard from '@/components/CertificationCard'
import LastUpdated from '@/components/LastUpdated'
import CertIntroParagraph from '@/components/CertIntroParagraph'
import ExamPrepContent from '@/components/ExamPrepContent'
import CertPageSeo, { CertPageFaq } from '@/components/CertPageSeo'
import { getQuizJsonLd } from '@/lib/schema-data'
import { SLUG_TO_EXAM_CODE } from '@/lib/certification-exam-codes'
import CodeBlock from '@/components/CodeBlock'
import CertPageCta from '@/components/CertPageCta'
import CertTrustBar from '@/components/CertTrustBar'
import ExamFeesSection from '@/components/ExamFeesSection'
import ExamLogisticsSection from '@/components/ExamLogisticsSection'
import RelatedCertifications from '@/components/RelatedCertifications'
import CertTableOfContents from '@/components/CertTableOfContents'
import { getCertH1Text, getCertExamWeightageHeading, getCertPracticeQuestionsHeading, getPracticeQuestionsIntro, slugToDisplayName } from '@/lib/cert-seo-data'
import { getExamWeightage } from '@/lib/exam-weightage-data'
import { RELEASE_CURRENT } from '@/lib/release-data'

import CertReadinessSummary from '@/components/CertReadinessSummary'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import OfficialSourceRef from '@/components/OfficialSourceRef'
import ExecutionContextDiagram from '@/components/certifications/ExecutionContextDiagram'
import { getInitialPracticeQuestions, getVisiblePracticeQuestions } from '@/lib/practice-question-lite'
import PracticeQuestionsSection from '@/components/PracticeQuestionsSection'
import CiteThisPage from '@/components/CiteThisPage'
import MergedCertContent from '@/components/certifications/MergedCertContent'
import { RELEASE_YEAR } from '@/lib/release-data'
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
      "'before insert, before update' fires prior to save, when the record doesn't yet have an Id, insufficient for logic needing the saved record or related records.",
      "'after insert, before update' mixes timing incorrectly for this scenario's need to run after both operations.",
      "'isInsert, isUpdate' are trigger context variables, not trigger event names, this option misidentifies the concept being asked about."
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
      "'equals' would require no wildcards at all: LIKE with wildcards never means exact equality."
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
      "Database.insert() alone doesn't address the loop-placement issue: DML inside a loop is the problem regardless of which insert method is used.",
      "A plain insert statement inside a loop has the same governor-limit risk as any DML call inside a loop.",
      "@future methods don't solve bulkification, they move work asynchronously but don't fix DML-in-a-loop patterns."
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
      "@future methods don't solve bulkification, they simply defer execution asynchronously.",
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
      "The DML statement limit is not unlimited: Salesforce enforces a specific cap to protect the multi-tenant platform."
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
      "A plain insert statement throws an exception on any failure, it doesn't support partial success handling.",
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
      "Test.runAs() doesn't test asynchronous code, that's unrelated to its purpose of switching user context.",
      "Test.runAs() isn't specific to batch class testing, it applies to any Apex test scenario needing a different user context.",
      "Test.runAs() isn't specific to trigger testing, it's a general user-context testing mechanism usable anywhere."
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
      "JOIN is not valid SOQL syntax: SOQL uses relationship dot-notation instead of SQL-style joins.",
      "INNER JOIN is SQL syntax, not valid SOQL: Salesforce's query language doesn't support this keyword.",
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
      "'To make a method available to test classes' is too broad; @TestVisible specifically exposes private members, not general method availability.",
      "@TestVisible doesn't mark a class as a test class, that's unrelated to its actual purpose.",
      "@TestVisible doesn't enable test coverage tracking, that's a platform-level, automatic measurement, not something this annotation controls."
    ]
  },
  {
    question: "What is the maximum number of records a synchronous Apex transaction can process through DML statements?",
    options: [
      "10,000 records",
      "50,000 records",
      "100,000 records",
      "200,000 records"
    ],
    correctAnswer: 0,
    explanation: "A synchronous Apex transaction can process up to 10,000 records through DML statements. Query-row and other limits are separate.",
    whyWrong: [
      "50,000 is a common SOQL query-row limit, not the DML row limit.",
      "100,000 exceeds the synchronous DML row limit.",
      "200,000 exceeds the synchronous DML row limit."
    ]
  },
  {
    question: "A flow updates 200 records and an Apex trigger reads their parent accounts. How should the trigger retrieve the parents?",
    options: [
      "Query the parent inside each iteration",
      "Retrieve every account before filtering",
      "Schedule a separate query for each parent",
      "Collect parent IDs and query once"
    ],
    correctAnswer: 3,
    explanation: "Reading the relevant parents in one query outside the loop keeps query use bounded for bulk updates.",
    whyWrong: [
      "One query per input risks exceeding the transaction limit.",
      "Querying all accounts wastes query rows and heap space.",
      "A job per parent adds overhead and can exceed enqueue limits."
    ]
  },
  {
    question: "A child component lets users select a product. Its containing LWC needs to react to the selection. How should the child notify it?",
    options: [
      "Call a controller on the parent page",
      "Assign the parent’s tracked property",
      "Expose the selected product as a DOM ID",
      "Dispatch a custom event for selection"
    ],
    correctAnswer: 3,
    explanation: "The child dispatches an event, and the parent registers a listener to handle the selection.",
    whyWrong: [
      "A page controller is not the normal child-to-parent LWC interface.",
      "The child does not own the parent’s reactive state.",
      "A DOM ID does not notify the parent about the selection."
    ]
  },
  {
    question: "A record-triggered flow must normalize a field on the triggering record before it is written. Which configuration fits?",
    options: [
      "An after-save flow with a related record update",
      "A schedule-triggered flow run each night",
      "A screen flow launched from a record action",
      "A before-save record-triggered flow"
    ],
    correctAnswer: 3,
    explanation: "A before-save flow can set fields on the triggering record before persistence without an extra record update.",
    whyWrong: [
      "Updating after save adds an operation for a change that can occur earlier.",
      "Scheduled processing delays normalization.",
      "A screen flow depends on a user taking an action."
    ]
  },
  {
    question: "A platform developer wants to test that a retry count stays unchanged when a validation error stops an operation. What should the test assert?",
    options: [
      "The executing user has an active profile",
      "The class compiles without any warnings",
      "The stored counter equals its original value",
      "The overall test run meets a coverage goal"
    ],
    correctAnswer: 2,
    explanation: "Checking the counter after the failure verifies the business behavior at the transaction boundary.",
    whyWrong: [
      "The user’s profile does not establish whether the retry count changed.",
      "Compilation cannot establish the runtime outcome.",
      "Coverage can increase without asserting the required behavior."
    ]
  },
  {
    question: "A helper needs to find an Account through its unique external ID from an order system. How should the value enter a fixed SOQL query?",
    options: [
      "Build the field value into a SOQL fragment",
      "Pass the identifier as the object API name",
      "Query all accounts and filter in the UI",
      "Use a variable bound in the WHERE clause"
    ],
    correctAnswer: 3,
    explanation: "A bind variable keeps the fixed SOQL statement separate from the incoming match value.",
    whyWrong: [
      "String assembly can mishandle input values and is unnecessary for a fixed query.",
      "The external ID identifies a record, not the queried object.",
      "Fetching every account wastes resources and exposes unnecessary data."
    ]
  },
]

export default function Developer1CertBody({ slug }: { slug: string }) {
  const examSections = getExamWeightage(slug)
  const initialQuestions = getInitialPracticeQuestions(getPracticeQuestionsForExam(slug, sampleQuestions))
  return (
    <div data-critical-content className="max-w-7xl mx-auto px-4 py-12">
      <CertPageSeo slug={slug} certTitle={slugToDisplayName(slug)} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: serializeJsonLd(getQuizJsonLd(`${slugToDisplayName(slug)} Practice Questions`, getVisiblePracticeQuestions(initialQuestions), SLUG_TO_EXAM_CODE[slug])),
          }}
        />
        <CertIntroParagraph slug={slug} />
        <p className="text-sm text-gray-600 mb-6">
          Salesforce now calls this credential Salesforce Certified Platform Developer. It was previously known as Platform Developer I, or PD1.
        </p>
        {/* Quick Knowledge Check, above fold to signal interactive content to Google */}
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
          <p className="text-xs text-gray-600 mt-3">Sample practice questions and answers are below ↓</p>
        </div>

        {/* Trust signals + Prominent CTA above fold */}
        <CertTrustBar slug={slug} />
        <CertPageCta slug={slug} certTitle={slugToDisplayName(slug)} />
        <ContentPageAuthor />

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-3">
            {/* CertificationCard carries the H1, so it leads the main content. */}
            <CertificationCard
              slug={slug}
            title={slugToDisplayName(slug)}
            code="PD1"
            description="Platform Developer I (PD1) tests whether you can build custom applications on the Salesforce platform with Apex and Lightning Web Components: triggers and governor limits, asynchronous patterns, the data model, and test classes. The exam is 60 scored questions in 105 minutes, with a 68% pass mark, weighted towards Process Automation and Logic (28%) and Developer Fundamentals (27%)."
            examDetails={{
              questions: 60,
              passingScore: "68%",
              duration: "105 min",
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

        <LastUpdated />

            {/* Who Is This Cert For */}
            <section className="mb-8 rounded-xl border border-gray-100 bg-gray-50/50 p-5 sm:p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-3">Who is the Platform Developer I exam for?</h2>
              <ul className="space-y-2 text-sm text-gray-700">
                <li><strong className="text-gray-900">Developers new to Salesforce:</strong> You already write code and want to build Salesforce applications with Apex and Lightning Web Components.</li>
                <li><strong className="text-gray-900">Admins transitioning to development:</strong> You have admin experience and want to add Apex, triggers, and integrations to your skills.</li>
                <li><strong className="text-gray-900">Full-stack developers at SI partners:</strong> You work on Salesforce projects and want to demonstrate your platform development knowledge.</li>
              </ul>
            </section>

            {/* Exam Fees & Registration section */}
            <ExamFeesSection slug={slug} />
            <OfficialSourceRef slug={slug} />

          <div id="exam-prep">
            <ExamPrepContent slug={slug} />
          </div>

          {/* Study Timeline */}
          <details className="group mt-8 rounded-xl border border-gray-100 bg-white p-5 sm:p-6" open>
            <summary className="cursor-pointer list-none text-lg font-bold text-gray-900 lg:hidden">
              Suggested study timeline for PD1 (6–10 weeks)
            </summary>
            <div className="hidden group-open:block lg:block">
              <h2 className="hidden lg:block text-lg font-bold text-gray-900 mb-3">
                Suggested study timeline for PD1 (6–10 weeks)
              </h2>
              <p className="text-sm text-gray-600 mb-3">
                Set aside time to write Apex in a Developer Edition org as you work through the topics.
              </p>
              <ul className="text-sm text-gray-700 space-y-2 list-disc list-inside">
                <li><strong>Weeks 1–2:</strong> Developer Fundamentals (27%), objects, relationships, schema design, SOQL basics</li>
                <li><strong>Weeks 2–3:</strong> Process Automation and Logic (28%): Apex basics, governor limits, bulkification patterns</li>
                <li><strong>Weeks 3–5:</strong> Apex triggers and classes, before/after triggers, handler pattern, async Apex (future, batch, queueable)</li>
                <li><strong>Weeks 5–6:</strong> Testing, Debugging, and Deployment (20%), test class structure, mock callouts, code coverage, debug logs</li>
                <li><strong>Weeks 6–7:</strong> User Interface (25%): LWC basics, Aura, Visualforce, change sets, sandboxes</li>
                <li><strong>Weeks 7–8:</strong> Full mock exams and targeted weak-area review</li>
              </ul>
              <p className="text-xs text-gray-600 mt-3">If you already know the data model and platform basics, use the first weeks to review any gaps before moving to Apex.</p>
            </div>
          </details>

          {/* Is PD1 Hard? */}
          <details id="is-pd1-hard" className="group mt-8 rounded-xl border border-gray-100 bg-white p-5 sm:p-6" open>
            <summary className="cursor-pointer list-none text-lg font-bold text-gray-900 lg:hidden">
              Is the PD1 Exam Hard?
            </summary>
            <div className="hidden group-open:block lg:block">
              <h2 id="pd1-difficulty-heading" className="hidden lg:block text-lg font-bold text-gray-900 mb-3">
                Is the PD1 Exam Hard?
              </h2>
              <p className="text-sm text-gray-700 mb-3">
                The Salesforce Platform Developer I exam tests your ability to apply development concepts. Practise reading Apex and reasoning about governor limits, asynchronous work, and trigger behavior in realistic situations.
              </p>
              <ul className="text-sm text-gray-700 space-y-2 list-disc list-inside mb-4">
                <li><strong>60 scored questions</strong> in 105 minutes, about one minute and 45 seconds per question.</li>
                <li><strong>68% passing score</strong>: you need 41 of 60 correct, so you can miss up to 19 and still pass.</li>
                <li><strong>Code reading</strong>: be ready to interpret Apex examples and identify their results.</li>
                <li><strong>Scenarios</strong>: practise selecting an approach for a business or technical requirement.</li>
                <li><strong>Question types</strong>: check the instructions for how many answers to select.</li>
              </ul>
              <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                <p className="text-sm font-semibold text-emerald-800 mb-1">Pass Rate Guidance</p>
                <p className="text-sm text-emerald-700">
                  Use timed practice tests to find weak areas. Review governor limits and bulk processing, then try new questions and explain why each answer fits.
                </p>
              </div>
            </div>
          </details>

          {/* Exam Format Explained */}
          <details id="exam-format" className="group mt-8 rounded-xl border border-gray-100 bg-white p-5 sm:p-6" open>
            <summary className="cursor-pointer list-none text-lg font-bold text-gray-900 lg:hidden">
              PD1 Exam Format Explained
            </summary>
            <div className="hidden group-open:block lg:block">
              <h2 className="hidden lg:block text-lg font-bold text-gray-900 mb-3">PD1 Exam Format Explained</h2>
              <p className="text-sm text-gray-700 mb-3">You can take the proctored exam online or at a test centre. Here is the format:</p>
              <ExamLogisticsSection slug={slug} />
              <h3 className="text-base font-semibold text-gray-900 mb-2 mt-4">How Many Questions Are Code-Based?</h3>
              <p className="text-sm text-gray-700 mb-3">Practise reading Apex and pseudocode. Identify possible governor-limit, bulk-processing, or trigger-context issues, then explain the likely result or a suitable fix.</p>
              <h3 className="text-base font-semibold text-gray-900 mb-2">Best Way to Pass on Your First Attempt</h3>
              <ul className="text-sm text-gray-700 space-y-2 list-disc list-inside">
                <li><strong>Write Apex:</strong> Use a Developer Edition org to build triggers, batch classes, and tests. Run them and inspect the results.</li>
                <li><strong>Review governor limits:</strong> Learn the limits for queries, DML, heap, and CPU in the relevant execution context.</li>
                <li><strong>Practise trigger design:</strong> Separate trigger logic into handlers and know when before and after events run.</li>
                <li><strong>Practise reading code:</strong> Use timed questions to build confidence tracing snippets and choosing an answer.</li>
              </ul>
            </div>
          </details>

          {/* Key Concepts */}
          <div id="key-concepts" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Platform Developer I: Key Concepts for the Exam</h2>
            <div className="space-y-6 text-sm text-gray-700">
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Apex Governor Limits &amp; the Limits Class</h3>
                <p>Governor limits keep one transaction from using too many shared resources. Examples of synchronous limits include: <strong>100 SOQL queries</strong>, <strong>150 DML statements</strong>, <strong>50,000 records returned from queries</strong>, <strong>6 MB heap size</strong>, <strong>10 seconds CPU time</strong>. Some limits differ in asynchronous transactions; check the limit for the specific context. Use <code className="bg-gray-100 px-1 rounded">Limits.getQueries()</code> and <code className="bg-gray-100 px-1 rounded">Limits.getLimitQueries()</code> from the <code className="bg-gray-100 px-1 rounded">Limits</code> class to inspect usage while code runs. Practise choosing a fix for code that approaches a limit.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Bulkification: Never Put SOQL or DML Inside a Loop</h3>
                <p>A bulk-safe pattern is to query records <em>before</em> loops using SOQL with <code className="bg-gray-100 px-1 rounded">IN:triggerIdSet</code>, collect changes in a <strong>List</strong> or <strong>Map</strong> <em>inside</em> loops, then perform DML <em>after</em> loops. Map&lt;Id, SObject&gt; can connect trigger records to related records by ID. Use <code className="bg-gray-100 px-1 rounded">Database.insert(records, false)</code> for partial success (returns SaveResult array). Practise spotting queries or DML inside loops and moving the operations outside them.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Apex Triggers: Order of Execution &amp; Handler Pattern</h3>
                <p><strong>Before triggers</strong> fire before the record is saved. Use them to validate or modify field values before save (changes to <code className="bg-gray-100 px-1 rounded">Trigger.new</code> persist without extra DML). <strong>After triggers</strong> run after the record is saved but before the transaction commits. Use them when you need the record Id or to update related records. Key context variables: <code className="bg-gray-100 px-1 rounded">Trigger.new</code>, <code className="bg-gray-100 px-1 rounded">Trigger.old</code> (not available on insert), <code className="bg-gray-100 px-1 rounded">Trigger.isInsert</code>, <code className="bg-gray-100 px-1 rounded">Trigger.isUpdate</code>. Best practice: one trigger per object, all logic delegated to a handler class. Review Salesforce’s <strong>Order of Execution</strong>: before-save flows and before triggers run before the record is saved, while after triggers and after-save flows run before commit.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">SOQL: Relationships, Aggregates &amp; SOSL</h3>
                <p>A child-to-parent query uses dot notation: <code className="bg-gray-100 px-1 rounded">SELECT Id, Account.Name FROM Contact</code> . A parent-to-child query uses a subquery: <code className="bg-gray-100 px-1 rounded">SELECT Id, (SELECT Id FROM Contacts) FROM Account</code> . Aggregate functions such as COUNT(), SUM(), and AVG() summarize records; use GROUP BY when results need groups. SOSL searches multiple objects simultaneously: <code className="bg-gray-100 px-1 rounded">FIND ’term’ IN ALL FIELDS RETURNING Account, Contact</code>. Use SOSL for cross-object searches; use SOQL when you know the object.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Process Automation: Flow vs. Apex Triggers</h3>
                <p>Compare declarative automation with programmatic automation when choosing a solution. Use <strong>Flow</strong> for supported declarative processes, including record updates and guided screens. Consider <strong>Apex triggers</strong> for requirements that need programmatic behavior. Both can fire on the same record, the Order of Execution determines which runs first (before-save and after-save flows run at different points in the save sequence). Consider maintainability, platform limits, and the scenario’s constraints before choosing Flow or Apex.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Testing Framework: SeeAllData, Test.startTest &amp; HttpCalloutMock</h3>
                <p>Minimum <strong>75% code coverage</strong> required across all Apex to deploy to production. Test classes use <code className="bg-gray-100 px-1 rounded">@isTest</code>. Test data is isolated by default (<code className="bg-gray-100 px-1 rounded">SeeAllData=false</code>), create all test data explicitly using <code className="bg-gray-100 px-1 rounded">@TestSetup</code> or within each test method. <code className="bg-gray-100 px-1 rounded">Test.startTest()</code> resets governor limits and marks the start of the tested code; <code className="bg-gray-100 px-1 rounded">Test.stopTest()</code> forces async operations (future methods, batch jobs) to complete synchronously. Mock HTTP callouts with <code className="bg-gray-100 px-1 rounded">Test.setMock(HttpCalloutMock.class, mockImpl)</code>. <code className="bg-gray-100 px-1 rounded">@TestVisible</code> exposes private members to test classes without making them public.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Agentforce for Developers: Use Cases and Limits</h3>
                <p>The Developer Fundamentals section (27%) now includes an objective on the <strong>use cases and limitations of Agentforce for Developers</strong>, the AI assistant that suggests Apex and Lightning Web Component code and generates test classes inside your development tools. For the exam, know what it helps with (drafting code, explaining existing code, generating unit tests) and where it stops: generated code still has to be reviewed, bulkified, tested and deployed like any other code, and it does not relax governor limits or the 75% coverage rule. The User Interface section (25%) also expects you to know that Apex can be exposed to Agentforce, alongside Lightning components and Flow.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Lightning Web Components (LWC): Wire Service &amp; @AuraEnabled</h3>
                <p>LWC is the modern Salesforce UI framework. Key decorators: <code className="bg-gray-100 px-1 rounded">@track</code> (reactive private properties), <code className="bg-gray-100 px-1 rounded">@api</code> (public properties exposed to parent), <code className="bg-gray-100 px-1 rounded">@wire</code> (reactive Apex method calls). The <code className="bg-gray-100 px-1 rounded">@wire</code> decorator connects an LWC to an Apex method marked <code className="bg-gray-100 px-1 rounded">@AuraEnabled(cacheable=true)</code>, the <code className="bg-gray-100 px-1 rounded">cacheable</code> flag is required for @wire. Use <code className="bg-gray-100 px-1 rounded">lightning-record-form</code> for standard record CRUD without writing Apex. Communication between components uses <code className="bg-gray-100 px-1 rounded">CustomEvent</code> (child to parent) and <code className="bg-gray-100 px-1 rounded">LightningMessageService</code> (unrelated components).</p>
              </div>
            </div>
          </div>

          {/* Core Apex Code Patterns */}
          <div id="apex-code-patterns" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Core Apex Code Patterns for PD1</h2>
            <p className="text-sm text-gray-600 mb-5">
              Practise reading and explaining these Apex patterns. For each example, trace the data, identify the execution context, and consider how it behaves with multiple records.
            </p>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-2">1. Bulk-Safe Trigger with Handler Class</h3>
                <p className="text-sm text-gray-600 mb-2">This example delegates trigger logic to a handler. It queries once and updates the collected records outside the loop.</p>
                <CodeBlock code={`// AccountTrigger.trigger
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
        // Validate or set field values, no DML needed, changes persist
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
        update toUpdate; // Single DML, not inside loop
    }
}`} />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-2">2. Database Class with Partial Success &amp; Error Handling</h3>
                <p className="text-sm text-gray-600 mb-2">Use <code className="bg-gray-100 px-1 rounded text-xs">Database.insert(records, false)</code> to allow partial success. Check each SaveResult for errors.</p>
                <CodeBlock code={`List<Account> accountsToInsert = new List<Account>();
accountsToInsert.add(new Account(Name = 'Valid Account'));
accountsToInsert.add(new Account()); // Missing required field, will fail

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
}`} />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-2">3. Test Class with HttpCalloutMock</h3>
                <p className="text-sm text-gray-600 mb-2">For a test that makes an HTTP callout, implement <code className="bg-gray-100 px-1 rounded text-xs">HttpCalloutMock</code> and register it with <code className="bg-gray-100 px-1 rounded text-xs">Test.setMock()</code>.</p>
                <CodeBlock code={`// Mock implementation
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
}`} />
              </div>
            </div>
          </div>

          <ExecutionContextDiagram />

          {/* How to Pass Scenario Strategy */}
          <div id="scenario-tips" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Pass the Platform Developer I (PD1) Exam</h2>
            <p className="text-sm text-gray-600 mb-5">
              Practise applying Apex concepts to development scenarios. Read each requirement, identify the execution context and limits, and compare the proposed solutions.
            </p>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Governor Limit Questions, the Pattern to Recognise</h3>
                <p>Check whether a loop runs a query or a DML statement for each record. Collect records in a list and perform DML outside the loop, such as <code className="bg-gray-100 px-1 rounded">insert contactList;</code>. Query the data you need before the loop and use a map to find related records by ID.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Testing Questions, the Three Rules to Memorise</h3>
                <p>Review the 75% overall Apex coverage requirement and the separate rules for triggers. Create the data your tests need instead of depending on existing records. For an HTTP callout test, register a mock with <code className="bg-gray-100 px-1 rounded">Test.setMock(HttpCalloutMock.class, mockImpl)</code>, then assert the result.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Async Apex Selection: Which Method for Which Scenario</h3>
                <p>Compare the needs of the job. <strong>Batch Apex</strong> can process large collections in chunks; <strong>Queueable Apex</strong> supports chaining and complex inputs. <strong>Scheduled Apex</strong> runs work at a specified time. Future methods also run asynchronously, but have their own input and execution restrictions.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Trigger Scenarios: Before vs After</h3>
                <p>Use a before trigger to update fields on <code className="bg-gray-100 px-1 rounded">Trigger.new</code> without extra DML. An after trigger can use the saved record ID to create related records. Use <code className="bg-gray-100 px-1 rounded">addError()</code> to reject invalid records, and design queries for multiple records.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Exam Strategy</h3>
                <p>Read the requirement and trace the code before comparing choices. Check whether an option fits the execution context, such as a queueable job or the order of DML and callouts. The listed passing score is 68% (41 out of 60). Use practice results to review weak topics and consult the official Trailhead preparation resources.</p>
              </div>
            </div>
          </div>

          

          <CertReadinessSummary slug={slug} />
          <PracticeQuestionsSection
            heading={getCertPracticeQuestionsHeading(slug)}
            introText={getPracticeQuestionsIntro(initialQuestions.length, ". Select the requested number of answers, then check your selection.")}
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
                <Link href="#practice-questions" className="text-salesforce-blue font-medium hover:underline">
                  PD1 Practice Questions →
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
              <Link href="/certifications/administrator" className="text-salesforce-blue underline">
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
      <div className="max-w-7xl mx-auto px-4">
        <MergedCertContent slug={slug} />
        <CiteThisPage certName={slugToDisplayName(slug)} slug={slug} year={RELEASE_YEAR} />
      </div>
    </div>
  )
}
