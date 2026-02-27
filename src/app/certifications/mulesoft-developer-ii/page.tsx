import FullQuestionBankCta from '@/components/FullQuestionBankCta'
import CertificationCard from '@/components/CertificationCard'
import CertIntroParagraph from '@/components/CertIntroParagraph'
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

const slug = 'mulesoft-developer-ii'
export async function generateMetadata() {
  return getCertMetadata(slug)
}

const sampleQuestions = [
  {
    question: "What is the focus of MuleSoft Developer II certification?",
    options: ["Basic APIs only", "Independently working on production-ready Mule applications in a DevOps environment", "Email development", "UI design"],
    correctAnswer: 1,
    explanation: "MuleSoft Developer II validates ability to work on production-ready Mule applications and DevOps practices.",
  },
  {
    question: "Which MuleSoft capability is used for complex data transformations?",
    options: ["Apex", "DataWeave", "AMPscript", "Visualforce"],
    correctAnswer: 1,
    explanation: "DataWeave is MuleSoft's transformation language for mapping and transforming data.",
  },
  {
    question: "What is a best practice for error handling in Mule flows?",
    options: ["Ignore errors", "Use error handling scope and global error handler with appropriate strategies", "Delete the flow", "Use only try/catch in Apex"],
    correctAnswer: 1,
    explanation: "Error handling scope and global error handlers provide consistent error handling and recovery.",
  },
  {
    question: "Which deployment target is commonly used for Mule applications in production?",
    options: ["Email Studio", "CloudHub or Runtime Manager", "Slack", "CPQ"],
    correctAnswer: 1,
    explanation: "CloudHub and Runtime Manager (on-prem / hybrid) are used to deploy and manage Mule applications.",
  },
  {
    question: "What does reusable asset mean in API-led connectivity?",
    options: ["One-time use", "APIs designed to be reused across multiple projects and consumers", "Physical hardware", "Single consumer only"],
    correctAnswer: 1,
    explanation: "Reusable assets are APIs and integrations designed for reuse across the organization.",
  },
  {
    question: "Which on-error strategy continues flow execution after an error?",
    options: [
      "on-error-propagate only",
      "on-error-continue",
      "No strategy",
      "on-error-delete"
    ],
    correctAnswer: 1,
    explanation: "on-error-continue allows flow to continue after handling the error."
  },
  {
    question: "What is the purpose of batch processing in Mule?",
    options: [
      "To replace flows",
      "To process large datasets in chunks",
      "To send emails only",
      "To create APIs only"
    ],
    correctAnswer: 1,
    explanation: "Batch processing handles large datasets in manageable chunks."
  },
  {
    question: "Which DataWeave function transforms an array?",
    options: [
      "map only",
      "map, filter, pluck, and reduce",
      "get only",
      "set only"
    ],
    correctAnswer: 1,
    explanation: "map, filter, pluck, and reduce transform arrays in DataWeave."
  },
  {
    question: "What does API versioning support in MuleSoft?",
    options: [
      "No support",
      "Backward compatibility and gradual client migration",
      "Breaking changes only",
      "Deprecation only"
    ],
    correctAnswer: 1,
    explanation: "Versioning supports backward compatibility and migration."
  },
  {
    question: "Which Mule component supports scheduled execution?",
    options: [
      "HTTP Listener only",
      "Scheduler",
      "On Error only",
      "Logger only"
    ],
    correctAnswer: 1,
    explanation: "Scheduler triggers flows on a schedule."
  },
  {
    question: "What is the purpose of a custom policy in API Manager?",
    options: [
      "To replace APIs",
      "To enforce custom logic (e.g., rate limiting, validation)",
      "To delete only",
      "To create only"
    ],
    correctAnswer: 1,
    explanation: "Custom policies enforce custom logic on API requests."
  },
  {
    question: "Which Mule scope supports transactions?",
    options: [
      "Try only",
      "Transactional scope",
      "Flow only",
      "No scope"
    ],
    correctAnswer: 1,
    explanation: "Transactional scope ensures atomic processing."
  },
  {
    question: "What does idempotency support in integration?",
    options: [
      "No support",
      "Preventing duplicate processing from retries",
      "Faster only",
      "Slower only"
    ],
    correctAnswer: 1,
    explanation: "Idempotency prevents duplicate processing on retries."
  },
  {
    question: "Which deployment strategy supports zero-downtime on CloudHub?",
    options: [
      "No strategy",
      "Blue-green or rolling deployment",
      "Full restart only",
      "Manual only"
    ],
    correctAnswer: 1,
    explanation: "Blue-green and rolling deployments support zero-downtime."
  },
  {
    question: "What is the purpose of MUnit?",
    options: [
      "To replace Mule",
      "To unit test Mule flows and applications",
      "To deploy only",
      "To monitor only"
    ],
    correctAnswer: 1,
    explanation: "MUnit is the testing framework for Mule applications."
  },
]

export default function MuleSoftDeveloperIIPage() {
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
            code="MuleSoft Developer II"
            description="Certified MuleSoft Developers II are seasoned developers who have proven knowledge and skills to independently work on production-ready Mule applications in a DevOps environment."
            examDetails={{ questions: 60, passingScore: '~70%', duration: '120 min', cost: '$200' }}
            topics={['Advanced Mule', 'DataWeave', 'Error Handling', 'CloudHub', 'DevOps', 'Security', 'Performance', 'Testing', 'Reusability', 'Production Patterns']}
            examSections={examSections}
            h1Text={getCertH1Text(slug)}
          examWeightageHeading={getCertExamWeightageHeading(slug)}
          />

          <div id="exam-prep">
            <ExamPrepContent slug={slug} />
          </div>

          <div id="practice-questions" className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{getCertPracticeQuestionsHeading(slug)}</h2>
            <p className="text-gray-600 mb-8">{getPracticeQuestionsIntro(sampleQuestions.length)}</p>
            {sampleQuestions.map((q, index) => (
              <QuestionCard key={index} questionNumber={index + 1} question={q.question} options={q.options} correctAnswer={q.correctAnswer} explanation={q.explanation} />
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
