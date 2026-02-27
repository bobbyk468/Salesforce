import Link from 'next/link'
import FullQuestionBankCta from '@/components/FullQuestionBankCta'
import CertificationCard from '@/components/CertificationCard'
import ExamPrepContent from '@/components/ExamPrepContent'
import CertPageSeo, { CertPageFaq } from '@/components/CertPageSeo'
import CertPageIntro from '@/components/CertPageIntro'
import CertPageCta from '@/components/CertPageCta'
import ExamLogisticsSection from '@/components/ExamLogisticsSection'
import ExamFeesSection from '@/components/ExamFeesSection'
import RelatedCertifications from '@/components/RelatedCertifications'
import CertTableOfContents from '@/components/CertTableOfContents'
import { getCertMetadata, getCertH1Text, getCertExamWeightageHeading, getCertPracticeQuestionsHeading, getPracticeQuestionsIntro, slugToDisplayName } from '@/lib/cert-seo-data'
import QuestionCard from '@/components/QuestionCard'
import { Metadata } from 'next'
import { getExamWeightage } from '@/lib/exam-weightage-data'

const slug = 'developer-2'
export async function generateMetadata() {
  return getCertMetadata(slug)
}

const sampleQuestions = [
  {
    question: "Which design pattern is recommended for creating a single instance of a class that can be reused throughout the transaction?",
    options: [
      "Factory Pattern",
      "Singleton Pattern",
      "Strategy Pattern",
      "Decorator Pattern"
    ],
    correctAnswer: 1,
    explanation: "The Singleton Pattern ensures only one instance of a class is created and provides a global point of access to it."
  },
  {
    question: "What is the purpose of the @TestSetup annotation?",
    options: [
      "To run tests in parallel",
      "To create test data once that can be used by all test methods in the class",
      "To mock external services",
      "To bypass governor limits in tests"
    ],
    correctAnswer: 1,
    explanation: "@TestSetup creates test data once at the beginning of the test class, and that data is available to all test methods, improving test performance."
  },
  {
    question: "Which approach should be used to make callouts from a trigger?",
    options: [
      "Make the callout directly in the trigger",
      "Use @future(callout=true) method",
      "Use Database.executeBatch",
      "Use Platform Events"
    ],
    correctAnswer: 1,
    explanation: "Callouts cannot be made directly from triggers. Use @future(callout=true) or Queueable with Database.AllowsCallouts to make asynchronous callouts."
  },
  {
    question: "What is the benefit of using Platform Events over traditional triggers for integration?",
    options: [
      "Lower governor limits",
      "Loosely coupled, asynchronous communication",
      "Better error handling",
      "Faster execution"
    ],
    correctAnswer: 1,
    explanation: "Platform Events provide loosely coupled, asynchronous communication between systems, making integrations more scalable and maintainable."
  },
  {
    question: "Which interface should be implemented to allow a batch job to be chained?",
    options: [
      "Database.Batchable",
      "Database.Stateful",
      "Database.AllowsCallouts",
      "Finish method with Database.executeBatch"
    ],
    correctAnswer: 3,
    explanation: "To chain batch jobs, you call Database.executeBatch in the finish method of the current batch job to start the next batch."
  },
  {
    question: "What is the purpose of the Database.Stateful interface in batch Apex?",
    options: [
      "To run faster",
      "To retain instance variable values between batch executions",
      "To make callouts",
      "To bypass governor limits"
    ],
    correctAnswer: 1,
    explanation: "Database.Stateful preserves instance variable values across batch iterations."
  },
  {
    question: "Which design pattern helps decouple trigger logic from business logic?",
    options: [
      "Singleton only",
      "Trigger Handler pattern with service classes",
      "Factory only",
      "Decorator only"
    ],
    correctAnswer: 1,
    explanation: "Trigger Handler pattern separates trigger logic from business logic for maintainability."
  },
  {
    question: "What is the benefit of using Queueable Apex over @future?",
    options: [
      "Lower limits",
      "Chaining jobs, passing complex types, and getting job IDs",
      "Faster execution",
      "Synchronous execution"
    ],
    correctAnswer: 1,
    explanation: "Queueable supports chaining, complex parameters, and job ID tracking."
  },
  {
    question: "Which security consideration applies when exposing Apex to LWC?",
    options: [
      "No security needed",
      "Use @AuraEnabled with proper FLS and sharing checks",
      "Only FLS",
      "Only sharing"
    ],
    correctAnswer: 1,
    explanation: "Apex exposed to LWC must enforce FLS and sharing rules."
  },
  {
    question: "What does the Strategy pattern enable?",
    options: [
      "Single instance",
      "Interchangeable algorithms encapsulated in separate classes",
      "Object creation only",
      "Event handling only"
    ],
    correctAnswer: 1,
    explanation: "Strategy pattern allows swapping algorithms at runtime."
  },
  {
    question: "Which governor limit applies to heap size in Apex?",
    options: [
      "6 MB for sync",
      "6 MB for synchronous, 12 MB for asynchronous",
      "Unlimited",
      "1 MB"
    ],
    correctAnswer: 1,
    explanation: "Heap: 6 MB sync, 12 MB async (approximate)."
  },
  {
    question: "What is the purpose of Test.isRunningTest()?",
    options: [
      "To skip tests",
      "To conditionally alter logic when code runs in test context",
      "To run faster",
      "To bypass limits"
    ],
    correctAnswer: 1,
    explanation: "Test.isRunningTest() detects test context for mock responses or conditional logic."
  },
  {
    question: "Which interface allows Apex to be invoked by Process Builder or Flow?",
    options: [
      "@AuraEnabled",
      "InvocableMethod",
      "@RestResource",
      "Trigger"
    ],
    correctAnswer: 1,
    explanation: "InvocableMethod exposes Apex to Flow and Process Builder."
  },
  {
    question: "What is a common use case for Platform Events?",
    options: [
      "Synchronous triggers only",
      "Decoupling integrations, logging, and cross-org messaging",
      "Batch processing only",
      "Scheduled jobs only"
    ],
    correctAnswer: 1,
    explanation: "Platform Events enable loosely coupled, event-driven architectures."
  },
  {
    question: "Which approach improves Apex test performance?",
    options: [
      "Create data in every test method",
      "Use @TestSetup for shared data",
      "Use SeeAllData=true",
      "Create minimal assertions"
    ],
    correctAnswer: 1,
    explanation: "@TestSetup creates data once for all test methods, improving performance."
  },
]

export default function Developer2Page() {
  const examSections = getExamWeightage(slug)
  return (
    <div data-critical-content className="max-w-7xl mx-auto px-4 py-12">
      <CertPageSeo slug={slug} certTitle={slugToDisplayName(slug)} />
        
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
            code="PD2"
            description="The Platform Developer II certification validates your advanced development skills including design patterns, testing strategies, and integration techniques."
            examDetails={{
              questions: 60,
              passingScore: "70%",
              duration: "120 min",
              cost: "$400",
            }}
            topics={[
              "Advanced Apex",
              "Design Patterns",
              "Testing Strategies",
              "Asynchronous Processing",
              "Integration",
              "Performance Optimization",
              "Security",
              "Lightning Components",
              "Debugging",
              "Deployment"
            ]}
            examSections={examSections}
            h1Text={getCertH1Text(slug)}
          examWeightageHeading={getCertExamWeightageHeading(slug)}
          />

          <div id="exam-prep">
            <ExamPrepContent slug={slug} />
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

          {/* PD2 study resources */}
          <section className="mt-8 rounded-xl border border-blue-100 bg-blue-50/40 p-5 sm:p-6" aria-labelledby="pd2-guides-heading">
            <h2 id="pd2-guides-heading" className="text-base font-semibold text-gray-900 mb-3">Developer Track Resources</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/pd1-vs-pd2" className="text-salesforce-blue font-medium hover:underline">
                  PD1 vs PD2: Key Differences →
                </Link>
                <span className="text-gray-600 ml-2">What gets harder in PD2 and when you are ready to attempt it.</span>
              </li>
              <li>
                <Link href="/pd1-exam-tips-2026" className="text-salesforce-blue font-medium hover:underline">
                  PD1 Exam Tips →
                </Link>
                <span className="text-gray-600 ml-2">Governor limits, bulkification, and mock-test benchmarks. Still relevant as PD2 prerequisite review.</span>
              </li>
            </ul>
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
              { id: 'practice-questions', title: 'Practice Questions' },
              { id: 'more-questions', title: 'Get More Questions' },
              { id: 'related-certs', title: 'Related Certifications' },
              { id: 'faq', title: 'Exam FAQs' }]}
          />
        </aside>
      </div>
    </div>
  )
}
