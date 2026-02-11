import FullQuestionBankCta from '@/components/FullQuestionBankCta'
import CertificationCard from '@/components/CertificationCard'
import ExamPrepContent from '@/components/ExamPrepContent'
import CertPageSeo, { CertPageFaq } from '@/components/CertPageSeo'
import CertPageIntro from '@/components/CertPageIntro'
import CertPageCta from '@/components/CertPageCta'
import ExamFeesSection from '@/components/ExamFeesSection'
import RelatedCertifications from '@/components/RelatedCertifications'
import CertTableOfContents from '@/components/CertTableOfContents'
import { getCertMetadata, getCertH1Text, getCertExamWeightageHeading, getCertPracticeQuestionsHeading, slugToDisplayName } from '@/lib/cert-seo-data'
import QuestionCard from '@/components/QuestionCard'
import { Metadata } from 'next'
import { getExamWeightage } from '@/lib/exam-weightage-data'

const slug = 'developer-2'
export const metadata = getCertMetadata(slug)

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
]

export default function Developer2Page() {
  const examSections = getExamWeightage(slug)
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <CertPageSeo slug={slug} certTitle={slugToDisplayName(slug)} />
      <CertPageIntro slug={slug} />
        
        {/* Prominent CTA above fold */}
        <CertPageCta slug={slug} certTitle={slugToDisplayName(slug)} />
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-3">
            {/* Exam Fees & Registration section */}
            <ExamFeesSection slug={slug} />
            
            <CertificationCard
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
              Test your knowledge with these sample questions. Click on an answer to select it, then check your answer to see if you're correct.
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