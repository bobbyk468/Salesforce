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

const slug = 'integration-architect'
export async function generateMetadata() {
  return getCertMetadata(slug)
}

const sampleQuestions = [
  {
    question: "What is the primary focus of a Platform Integration Architect?",
    options: ["Only UI", "Designing sound, scalable technical solutions that meet end-to-end integration requirements", "Email only", "Slack only"],
    correctAnswer: 1,
    explanation: "Platform Integration Architects design solutions that meet end-to-end integration requirements.",
  },
  {
    question: "Which integration pattern is used for real-time, request-response integration?",
    options: ["Batch only", "Synchronous API (REST/SOAP)", "Only ETL", "Only file transfer"],
    correctAnswer: 1,
    explanation: "Synchronous REST/SOAP is used for real-time request-response integration.",
  },
  {
    question: "What is the purpose of Middleware (e.g., MuleSoft) in integration architecture?",
    options: ["To replace Salesforce", "To orchestrate, transform, and connect systems", "To send emails only", "To configure CPQ only"],
    correctAnswer: 1,
    explanation: "Middleware orchestrates, transforms, and connects multiple systems.",
  },
  {
    question: "Which consideration is critical for integration security?",
    options: ["Only passwords", "Authentication (OAuth, certificates), encryption, and least privilege", "Only HTTPS", "Only IP allowlist"],
    correctAnswer: 1,
    explanation: "Authentication, encryption, and least privilege are key for integration security.",
  },
  {
    question: "What does 'loosely coupled' integration mean?",
    options: ["No integration", "Systems communicate with minimal dependency so changes in one system don't break others", "Tight dependency", "Same database only"],
    correctAnswer: 1,
    explanation: "Loosely coupled systems reduce dependency and improve maintainability.",
  },
  {
    question: "When should asynchronous integration be chosen over synchronous?",
    options: [
      "Never",
      "When real-time response is not required and decoupling or scalability is needed",
      "Always",
      "Only for batch"
    ],
    correctAnswer: 1,
    explanation: "Asynchronous is preferred when real-time response isn't required and decoupling matters."
  },
  {
    question: "What does API versioning support?",
    options: [
      "No changes",
      "Backward compatibility and gradual client migration",
      "Breaking changes only",
      "Deprecation only"
    ],
    correctAnswer: 1,
    explanation: "Versioning allows evolution while maintaining backward compatibility."
  },
  {
    question: "Which error handling strategy supports resilience in integrations?",
    options: [
      "Fail immediately",
      "Retries with exponential backoff, dead letter queues, and graceful degradation",
      "No retries",
      "Only logging"
    ],
    correctAnswer: 1,
    explanation: "Retries, DLQs, and graceful degradation improve integration resilience."
  },
  {
    question: "What is the purpose of an integration bus or event-driven architecture?",
    options: [
      "To replace APIs",
      "To decouple producers and consumers via events or messages",
      "To sync only",
      "To batch only"
    ],
    correctAnswer: 1,
    explanation: "Event-driven architecture decouples systems through events/messages."
  },
  {
    question: "Which security standard is used for delegated user authorization?",
    options: [
      "Basic auth only",
      "OAuth 2.0 authorization code flow",
      "API key only",
      "No standard"
    ],
    correctAnswer: 1,
    explanation: "OAuth 2.0 authorization code flow supports user-delegated access."
  },
  {
    question: "What does idempotency ensure in integration?",
    options: [
      "Faster execution",
      "Duplicate requests produce the same result without side effects",
      "No retries",
      "Only logging"
    ],
    correctAnswer: 1,
    explanation: "Idempotency prevents duplicate processing from retries."
  },
  {
    question: "Which consideration applies when designing for high-volume integration?",
    options: [
      "Ignore limits",
      "Batching, rate limiting, and scalability (queues, async)",
      "Synchronous only",
      "No batching"
    ],
    correctAnswer: 1,
    explanation: "High volume requires batching, rate limiting, and async scaling."
  },
  {
    question: "What is the benefit of contract-first API design?",
    options: [
      "No benefit",
      "Clear contract, parallel development, and reduced integration errors",
      "Slower development",
      "Tight coupling"
    ],
    correctAnswer: 1,
    explanation: "Contract-first enables parallel development and fewer integration bugs."
  },
  {
    question: "Which pattern is used when multiple systems need the same data?",
    options: [
      "Point-to-point only",
      "Publish-subscribe or fan-out",
      "Request-response only",
      "Batch only"
    ],
    correctAnswer: 1,
    explanation: "Publish-subscribe allows one producer to serve multiple consumers."
  },
  {
    question: "What does integration governance include?",
    options: [
      "Only documentation",
      "Standards, security, monitoring, and change control",
      "Only coding",
      "Only deployment"
    ],
    correctAnswer: 1,
    explanation: "Governance covers standards, security, monitoring, and change control."
  },
]

export default function IntegrationArchitectPage() {
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
            code="Integration Architect"
            description="Certified Platform Integration Architects are experts at assessing architecture environments and requirements in order to design sound and scalable technical solutions on the Salesforce Platform that meet end-to-end integration requirements."
            examDetails={{ questions: 60, passingScore: '~68%', duration: '120 min', cost: '$400' }}
            topics={['Integration Patterns', 'APIs', 'Middleware', 'Security', 'Performance', 'Error Handling', 'Governance', 'Best Practices', 'Async vs Sync', 'Data Flow']}
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
