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

const slug = 'dev-lifecycle-deployment-architect'
export const metadata = getCertMetadata(slug)

const sampleQuestions = [
  {
    question: "What is the primary focus of a Development Lifecycle and Deployment Architect?",
    options: ["Only coding", "Assessing architecture environments and requirements to implement management solutions for deployment on the Salesforce Platform", "Email only", "Slack only"],
    correctAnswer: 1,
    explanation: "They assess environments and implement management solutions for deployment.",
  },
  {
    question: "Which tool is used for source-driven deployments in Salesforce?",
    options: ["Only Change Sets", "Salesforce CLI and source tracking (e.g., Salesforce DX)", "Only Data Loader", "Only Workbench"],
    correctAnswer: 1,
    explanation: "Salesforce CLI and source tracking (e.g., Salesforce DX) support source-driven deployments.",
  },
  {
    question: "What is the purpose of Change Sets?",
    options: ["Only backup", "Moving metadata between orgs (e.g., sandbox to production)", "Only reports", "Only dashboards"],
    correctAnswer: 1,
    explanation: "Change Sets move metadata between orgs in deployment pipelines.",
  },
  {
    question: "Which environment is typically used for production-like testing?",
    options: ["Developer org only", "Full Copy or Partial Copy sandbox", "Production only", "Scratch org only"],
    correctAnswer: 1,
    explanation: "Full Copy or Partial Copy sandboxes provide production-like environments for testing.",
  },
  {
    question: "What does CI/CD mean in the context of Salesforce deployment?",
    options: ["Only manual", "Continuous Integration and Continuous Deployment (automated build and release)", "Only integration", "Only deployment"],
    correctAnswer: 1,
    explanation: "CI/CD automates build, test, and release for Salesforce metadata.",
  },
]

export default function DevLifecycleDeploymentArchitectPage() {
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
            code="Dev Lifecycle & Deployment"
            description="Certified Platform Development Lifecycle and Deployment Architects are experts at assessing architecture environments and requirements in order to implement management solutions on the Salesforce Platform."
            examDetails={{ questions: 60, passingScore: '~68%', duration: '120 min', cost: '$400' }}
            topics={['Deployment', 'Change Sets', 'Salesforce CLI', 'Sandboxes', 'CI/CD', 'Release Management', 'Governance', 'Testing', 'Best Practices', 'Source Control']}
            examSections={examSections}
            h1Text={getCertH1Text(slug)}
          examWeightageHeading={getCertExamWeightageHeading(slug)}
          />

          <div id="exam-prep">
            <ExamPrepContent slug={slug} />
          </div>

          <div id="practice-questions" className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{getCertPracticeQuestionsHeading(slug)}</h2>
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
              { id: 'faq', title: 'Exam FAQs' }]}
          />
        </aside>
      </div>
    </div>
  )
}