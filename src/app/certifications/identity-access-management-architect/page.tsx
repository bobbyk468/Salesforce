import CertificationCard from '@/components/CertificationCard'
import ExamPrepContent from '@/components/ExamPrepContent'
import CertPageSeo, { CertPageFaq } from '@/components/CertPageSeo'
import CertPageIntro from '@/components/CertPageIntro'
import RelatedCertifications from '@/components/RelatedCertifications'
import CertTableOfContents from '@/components/CertTableOfContents'
import { getCertMetadata, getCertH1Text, getCertExamWeightageHeading, getCertPracticeQuestionsHeading, slugToDisplayName } from '@/lib/cert-seo-data'
import QuestionCard from '@/components/QuestionCard'
import { Metadata } from 'next'
import { getExamWeightage } from '@/lib/exam-weightage-data'

const slug = 'identity-access-management-architect'
export const metadata = getCertMetadata(slug)

const sampleQuestions = [
  {
    question: "What is the primary focus of an Identity and Access Management Architect?",
    options: ["Only reports", "Designing solutions that meet Single Sign-On (SSO) and identity requirements on the Salesforce Platform", "Email only", "Slack only"],
    correctAnswer: 1,
    explanation: "They design solutions that meet SSO and identity requirements on the platform.",
  },
  {
    question: "Which protocol is commonly used for SSO with Salesforce?",
    options: ["Only HTTP", "SAML 2.0 and OAuth 2.0", "Only FTP", "Only SOAP"],
    correctAnswer: 1,
    explanation: "SAML 2.0 and OAuth 2.0 are used for SSO and identity with Salesforce.",
  },
  {
    question: "What does My Domain provide in Salesforce?",
    options: ["Only branding", "Custom login URL and foundation for SSO and identity", "Only reports", "Only dashboards"],
    correctAnswer: 1,
    explanation: "My Domain provides custom login URL and is required for SSO and identity features.",
  },
  {
    question: "Which feature allows users to log in once and access multiple connected apps?",
    options: ["Only profiles", "Single Sign-On (SSO)", "Only permission sets", "Only roles"],
    correctAnswer: 1,
    explanation: "SSO allows one login to access multiple connected applications.",
  },
  {
    question: "What is the purpose of Connected Apps in identity?",
    options: ["Only external apps", "OAuth-based access for external and internal apps with configurable policies", "Only internal apps", "Only email"],
    correctAnswer: 1,
    explanation: "Connected Apps provide OAuth-based access with configurable policies.",
  },
]

export default function IdentityAccessManagementArchitectPage() {
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
            code="Identity & Access Mgmt"
            description="Certified Platform Identity and Access Management Architects are experts at assessing architecture environments and requirements in order to design sound, high-performing solutions on the Salesforce Platform that meet Single Sign-On (SSO) requirements."
            examDetails={{ questions: 60, passingScore: '~68%', duration: '120 min', cost: '$400' }}
            topics={['SSO', 'SAML', 'OAuth', 'My Domain', 'Connected Apps', 'Identity Provider', 'Federation', 'Security', 'Best Practices', 'Governance']}
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