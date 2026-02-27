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

const slug = 'system-architect'
export async function generateMetadata() {
  return getCertMetadata(slug)
}

const sampleQuestions = [
  {
    question: "What is the primary focus of a System Architect?",
    options: ["Only on-platform", "Off-platform systems, integration, and securing access between systems", "Email only", "Slack only"],
    correctAnswer: 1,
    explanation: "System Architects focus on off-platform systems, integration, and securing access between systems.",
  },
  {
    question: "Which area does a System Architect typically manage?",
    options: ["Only UI", "Governance and testing capabilities for deployment and ongoing Salesforce modification", "Only reports", "Only dashboards"],
    correctAnswer: 1,
    explanation: "They manage governance and testing for deployment and ongoing modifications.",
  },
  {
    question: "What does 'off-platform' mean in this context?",
    options: ["Only Salesforce", "Systems outside Salesforce (e.g., ERP, middleware) that integrate with Salesforce", "Only Apex", "Only LWC"],
    correctAnswer: 1,
    explanation: "Off-platform refers to external systems that integrate with Salesforce.",
  },
  {
    question: "Which consideration is critical for integration security?",
    options: ["Only passwords", "Authentication, encryption, and secure access between systems", "Only HTTPS", "Only IP allowlist"],
    correctAnswer: 1,
    explanation: "Authentication, encryption, and secure access are critical for integration security.",
  },
  {
    question: "What role does governance play for a System Architect?",
    options: ["None", "Ensuring change control, testing, and release management for deployments", "Only documentation", "Only coding standards"],
    correctAnswer: 1,
    explanation: "Governance includes change control, testing, and release management.",
  },
  {
    question: "Which integration pattern is suitable for real-time, request-response sync?",
    options: [
      "Batch only",
      "Point-to-point API or REST callout",
      "Event-driven only",
      "ETL only"
    ],
    correctAnswer: 1,
    explanation: "REST/API callouts support real-time, synchronous request-response integration."
  },
  {
    question: "What is the purpose of middleware in integration architecture?",
    options: [
      "To replace Salesforce",
      "To orchestrate, transform, and route data between systems",
      "To send emails only",
      "To create reports"
    ],
    correctAnswer: 1,
    explanation: "Middleware orchestrates, transforms, and routes integration traffic."
  },
  {
    question: "Which security mechanism is used for server-to-server API authentication?",
    options: [
      "User password only",
      "OAuth 2.0 client credentials or JWT bearer flow",
      "Session ID only",
      "No authentication"
    ],
    correctAnswer: 1,
    explanation: "OAuth 2.0 client credentials and JWT bearer are used for server-to-server auth."
  },
  {
    question: "What does release management include for a System Architect?",
    options: [
      "Only coding",
      "Sandbox strategy, deployment pipelines, and change sets or CI/CD",
      "Only documentation",
      "Only testing"
    ],
    correctAnswer: 1,
    explanation: "Release management covers sandbox strategy, pipelines, and deployment tools."
  },
  {
    question: "Which testing type validates integration behavior?",
    options: [
      "Unit tests only",
      "Integration tests and end-to-end tests",
      "No testing",
      "Only UAT"
    ],
    correctAnswer: 1,
    explanation: "Integration and E2E tests validate system interaction and data flow."
  },
  {
    question: "What is the benefit of API-led connectivity?",
    options: [
      "No benefits",
      "Reusable, composable APIs that reduce point-to-point dependencies",
      "Only for internal use",
      "Only for external use"
    ],
    correctAnswer: 1,
    explanation: "API-led connectivity promotes reusable, composable integrations."
  },
  {
    question: "Which consideration applies when integrating with legacy systems?",
    options: [
      "Ignore security",
      "Protocol support, data format translation, and security",
      "No translation needed",
      "Only real-time"
    ],
    correctAnswer: 1,
    explanation: "Legacy integration requires protocol support, translation, and security."
  },
  {
    question: "What does encryption in transit protect?",
    options: [
      "Data at rest only",
      "Data moving between systems (e.g., TLS/HTTPS)",
      "Passwords only",
      "No protection"
    ],
    correctAnswer: 1,
    explanation: "Encryption in transit (TLS/HTTPS) protects data during transmission."
  },
  {
    question: "Which deployment capability supports zero-downtime releases?",
    options: [
      "No capability",
      "Blue-green deployments or canary releases",
      "Direct production deploy only",
      "Manual only"
    ],
    correctAnswer: 1,
    explanation: "Blue-green and canary enable low-risk, low-downtime deployments."
  },
  {
    question: "What role does an IP allowlist play in integration security?",
    options: [
      "No role",
      "Restricting which IPs can access APIs or systems",
      "Only for users",
      "Only for reports"
    ],
    correctAnswer: 1,
    explanation: "IP allowlists restrict API and system access to trusted IP ranges."
  },
]

export default function SystemArchitectPage() {
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
            code="System Architect"
            description="Certified System Architects focus on off-platform systems, integration, and securing access between systems. They're also skilled at managing governance and testing capabilities for deployment and ongoing Salesforce modification requirements."
            examDetails={{ questions: 60, passingScore: '~68%', duration: '120 min', cost: '$400' }}
            topics={['Off-Platform Systems', 'Integration', 'Security', 'Governance', 'Testing', 'Deployment', 'Release Management', 'Best Practices', 'Middleware', 'APIs']}
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
