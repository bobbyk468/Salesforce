import CertificationCard from '@/components/CertificationCard'
import ExamPrepContent from '@/components/ExamPrepContent'
import CertPageSeo, { CertPageFaq } from '@/components/CertPageSeo'
import CertPageIntro from '@/components/CertPageIntro'
import RelatedCertifications from '@/components/RelatedCertifications'
import CertTableOfContents from '@/components/CertTableOfContents'
import { getCertMetadata, getCertH1Text, slugToDisplayName } from '@/lib/cert-seo-data'
import QuestionCard from '@/components/QuestionCard'
import { Metadata } from 'next'
import { getExamWeightage } from '@/lib/exam-weightage-data'

const slug = 'system-architect'
export const metadata = getCertMetadata(slug)

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
]

export default function SystemArchitectPage() {
  const examSections = getExamWeightage(slug)
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <CertPageSeo slug={slug} certTitle={slugToDisplayName(slug)} />
      <CertPageIntro slug={slug} />
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-3">
          <CertificationCard
            title={slugToDisplayName(slug)}
            code="System Architect"
            description="Certified System Architects focus on off-platform systems, integration, and securing access between systems. They're also skilled at managing governance and testing capabilities for deployment and ongoing Salesforce modification requirements."
            examDetails={{ questions: 60, passingScore: '~68%', duration: '120 min', cost: '$400' }}
            topics={['Off-Platform Systems', 'Integration', 'Security', 'Governance', 'Testing', 'Deployment', 'Release Management', 'Best Practices', 'Middleware', 'APIs']}
            examSections={examSections}
            h1Text={getCertH1Text(slug)}
          />

          <div id="exam-prep">
            <ExamPrepContent slug={slug} />
          </div>

          <div id="practice-questions" className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Sample Practice Questions</h2>
            <p className="text-gray-600 mb-8">Test your knowledge with these sample questions.</p>
            {sampleQuestions.map((q, index) => (
              <QuestionCard key={index} questionNumber={index + 1} question={q.question} options={q.options} correctAnswer={q.correctAnswer} explanation={q.explanation} />
            ))}
          </div>
          
          <div id="more-questions" className="mt-12 bg-salesforce-blue/10 rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Want More Practice Questions?</h3>
            <p className="text-gray-600 mb-6">Get access to our complete question bank with detailed explanations.</p>
            <a href="/contact" className="inline-block px-8 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-all duration-200 shadow-md hover:shadow-lg active:scale-95">Contact Us for Full Access</a>
          </div>

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
              { id: 'faq', title: 'Frequently Asked Questions' }]}
          />
        </aside>
      </div>
    </div>
  )
}