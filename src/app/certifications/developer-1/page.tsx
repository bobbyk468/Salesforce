import Link from 'next/link'
import FullQuestionBankCta from '@/components/FullQuestionBankCta'
import CertificationCard from '@/components/CertificationCard'
import CertIntroParagraph from '@/components/CertIntroParagraph'
import ExamPrepContent from '@/components/ExamPrepContent'
import CertPageSeo, { CertPageFaq } from '@/components/CertPageSeo'
import CertPageIntro from '@/components/CertPageIntro'
import CertPageCta from '@/components/CertPageCta'
import ExamFeesSection from '@/components/ExamFeesSection'
import ExamLogisticsSection from '@/components/ExamLogisticsSection'
import RelatedCertifications from '@/components/RelatedCertifications'
import CertTableOfContents from '@/components/CertTableOfContents'
import { getCertMetadata, getCertH1Text, getCertExamWeightageHeading, getCertPracticeQuestionsHeading, getPracticeQuestionsIntro, slugToDisplayName } from '@/lib/cert-seo-data'
import QuestionCard from '@/components/QuestionCard'
import type { Metadata } from 'next'
import { getExamWeightage } from '@/lib/exam-weightage-data'
import { RELEASE_CURRENT } from '@/lib/release-data'

const slug = 'developer-1'

const descriptionText =
  `PD1 (${RELEASE_CURRENT}) prep: $200 fee, 60 questions, Apex, triggers, SOQL, and Lightning Web Components, with free practice questions and exam-weightage guidance.`

export async function generateMetadata(): Promise<Metadata> {
  const baseMetadata = getCertMetadata(slug)

  return {
    ...baseMetadata,
    description: descriptionText,
    openGraph: {
      ...baseMetadata.openGraph,
      description: descriptionText,
    },
    twitter: {
      ...baseMetadata.twitter,
      description: descriptionText,
    },
  }
}

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
    explanation: "The 'after insert' and 'after update' trigger events fire after the record is saved to the database, which is required when you need to access the record Id or related records."
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
    explanation: "The synchronous governor limit for SOQL queries is 100 per transaction. For asynchronous contexts, the limit is 200."
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
    explanation: "The @RestResource annotation is used at the class level to expose an Apex class as a REST resource. Individual methods use @HttpGet, @HttpPost, etc."
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
    explanation: "The % wildcard matches any number of characters. Using %tech% matches any Account where the Name contains 'tech' anywhere in the string."
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
    explanation: "To avoid hitting governor limits, you should always collect records in a list during the loop and perform DML operations outside the loop (bulk processing)."
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
    explanation: "Salesforce requires at least 75% code coverage for Apex classes and triggers to be deployed to production. This ensures code quality and reliability."
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
    explanation: "The @AuraEnabled annotation makes an Apex method available to Lightning Web Components (LWC) and Aura components, allowing them to call server-side logic."
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
    explanation: "Best practice is to collect records in a list during iteration and process them in bulk outside the loop to avoid hitting governor limits."
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
    explanation: "The synchronous governor limit for DML statements (insert, update, delete, upsert, etc.) is 150 per transaction."
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
    explanation: "Database.insert() returns a Database.SaveResult array, allowing you to handle partial success. The insert statement throws an exception if any record fails."
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
    explanation: "Test.runAs() allows you to execute test code in the context of a specific user, enabling you to test with different user permissions and sharing rules."
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
    explanation: "DmlException is thrown when DML operations fail. For custom validation errors, you can throw DmlException with a custom message."
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
    explanation: "SOQL uses relationship queries (dot notation) to query related records, such as 'SELECT Id, Account.Name FROM Contact' to get the Account name for each Contact."
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
    explanation: "@TestVisible allows test classes to access private methods and variables, enabling better test coverage without making them public."
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
    explanation: "The governor limit for the number of records processed in a single transaction is 200,000 records for synchronous contexts and 1,000,000 for asynchronous contexts."
  },
]

export default function Developer1Page() {
  const examSections = getExamWeightage(slug)
  return (
    <div data-critical-content className="max-w-7xl mx-auto px-4 py-12">
      <CertPageSeo slug={slug} certTitle={slugToDisplayName(slug)} />
        <CertIntroParagraph slug={slug} />
        {/* Prominent CTA above fold */}
        <CertPageCta slug={slug} certTitle={slugToDisplayName(slug)} />
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-3">
            {/* Exam Fees & Registration section */}
            <ExamFeesSection slug={slug} />
            
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

          {/* Key Concepts */}
          <div id="key-concepts" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Platform Developer I: Key Concepts for the Exam</h2>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-1">Governor Limits: The Non-Negotiables</p>
                <p>Governor limits prevent any one transaction from monopolising shared platform resources. Key synchronous limits to know: <strong>100 SOQL queries</strong>, <strong>150 DML statements</strong>, <strong>50,000 records returned from queries</strong>, <strong>6 MB heap size</strong>, <strong>10 seconds CPU time</strong>. Asynchronous limits are generally 2× the synchronous limits (e.g., 200 SOQL). Batch Apex can process up to 50 million records by splitting work into chunks. The exam tests which limit applies to a given code scenario and what to change.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Bulkification: Never Put SOQL or DML Inside a Loop</p>
                <p>The core Apex pattern: query records <em>before</em> loops, collect changes in a <strong>List</strong> or <strong>Map</strong> <em>inside</em> loops, then perform DML <em>after</em> loops. Map&lt;Id, SObject&gt; is the workhorse — used to relate trigger records to queried related records by Id. Use <strong>Database.insert(records, false)</strong> for partial success (returns SaveResult array). The exam presents code with SOQL/DML in a loop and asks you to identify the issue or fix it.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">SOQL: Relationships, Aggregates, and SOSL</p>
                <p>Child-to-parent query: <code className="bg-gray-100 px-1 rounded">SELECT Id, Account.Name FROM Contact</code> (dot notation). Parent-to-child query: <code className="bg-gray-100 px-1 rounded">SELECT Id, (SELECT Id FROM Contacts) FROM Account</code> (subquery). Aggregate functions: COUNT(), SUM(), AVG(), MIN(), MAX() — require GROUP BY. SOSL searches across multiple objects simultaneously using <code className="bg-gray-100 px-1 rounded">FIND &apos;term&apos; IN ALL FIELDS RETURNING Account, Contact</code>. Use SOSL when you need to search across object types; use SOQL when you know the object.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Triggers: Before vs After, Context Variables</p>
                <p><strong>Before triggers</strong> fire before the record is saved — use them to validate or modify values before save (changes persist without an extra DML call). <strong>After triggers</strong> fire after the record is committed — use them when you need the record Id or to update related records. Key context variables: <code className="bg-gray-100 px-1 rounded">Trigger.new</code> (new values), <code className="bg-gray-100 px-1 rounded">Trigger.old</code> (old values, not available on insert), <code className="bg-gray-100 px-1 rounded">Trigger.isInsert</code>, <code className="bg-gray-100 px-1 rounded">Trigger.isUpdate</code>. Best practice: one trigger per object, logic in handler class.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Testing: Coverage, Isolation, and Mock Callouts</p>
                <p>Minimum <strong>75% code coverage</strong> required across all Apex (not per class) to deploy to production. Test classes use <code className="bg-gray-100 px-1 rounded">@isTest</code> annotation. Test data is isolated by default (<code className="bg-gray-100 px-1 rounded">SeeAllData=false</code>) — create all data explicitly. <code className="bg-gray-100 px-1 rounded">Test.startTest()</code> resets governor limits; <code className="bg-gray-100 px-1 rounded">Test.stopTest()</code> forces async operations to complete. Mock callouts using <code className="bg-gray-100 px-1 rounded">HttpCalloutMock</code>. <code className="bg-gray-100 px-1 rounded">Test.runAs(user)</code> changes the running user context. <code className="bg-gray-100 px-1 rounded">@TestVisible</code> exposes private members to test classes.</p>
              </div>
            </div>
          </div>

          <div id="practice-questions" className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{getCertPracticeQuestionsHeading(slug)}</h2>
            <p className="text-gray-600 mb-8">
              {getPracticeQuestionsIntro(sampleQuestions.length, ". Click on an answer to select it, then check your answer to see if you're correct.")}
            </p>
            
            {sampleQuestions.map((q, index) => (
              <QuestionCard
                key={index}
                questionNumber={index + 1}
                question={q.question}
                options={q.options}
                correctAnswer={q.correctAnswer}
                explanation={q.explanation}
              />
            ))}
          </div>

                    <FullQuestionBankCta slug={slug} certTitle={slugToDisplayName(slug)} />

          <div id="related-certs">
            <RelatedCertifications currentSlug={slug} />
          </div>

          {/* PD1 study resources */}
          <section className="mt-8 rounded-xl border border-blue-100 bg-blue-50/40 p-5 sm:p-6" aria-labelledby="pd1-guides-heading">
            <h2 id="pd1-guides-heading" className="text-base font-semibold text-gray-900 mb-3">PD1 Study Resources</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/pd1-exam-tips-2026" className="text-salesforce-blue font-medium hover:underline">
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
            <p className="text-xs text-gray-500 mt-3">
              Coming from the admin track?{' '}
              <Link href="/adm-201-exam-tips-2026" className="text-salesforce-blue hover:underline">
                ADM-201 exam tips ({RELEASE_CURRENT})
              </Link>
              {' '}covers the Salesforce fundamentals that overlap with PD1.
            </p>
          </section>

          {/* FAQ section - rendered after H1 for proper SEO structure */}
          <div id="faq">
            <CertPageFaq slug={slug} certTitle={slugToDisplayName(slug)} />
          </div>
        </div>

        {/* Sidebar - Table of Contents */}
        <aside className="lg:col-span-1">
          <CertTableOfContents
            sections={[
              { id: 'exam-prep', title: 'Exam Prep Content' },
              { id: 'key-concepts', title: 'Key Concepts' },
              { id: 'practice-questions', title: 'Practice Questions' },
              { id: 'more-questions', title: 'Get More Questions' },
              { id: 'related-certs', title: 'Related Certifications' },
              { id: 'faq', title: 'Exam FAQs' },
            ]}
          />
        </aside>
      </div>
    </div>
  )
}
