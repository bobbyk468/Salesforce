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
import { getCertMetadata, getCertH1Text, getCertExamWeightageHeading, getCertPracticeQuestionsHeading, slugToDisplayName } from '@/lib/cert-seo-data'
import QuestionCard from '@/components/QuestionCard'
import { Metadata } from 'next'
import { getExamWeightage } from '@/lib/exam-weightage-data'

const slug = 'identity-access-management-architect'
export async function generateMetadata() {
  return getCertMetadata(slug)
}

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
    <div data-critical-content className="max-w-7xl mx-auto px-4 py-12">
      <CertPageSeo slug={slug} certTitle={slugToDisplayName(slug)} />
      <CertPageIntro slug={slug} />
        <ExamLogisticsSection slug={slug} />
        
        {/* Prominent CTA above fold */}
        <CertPageCta slug={slug} certTitle={slugToDisplayName(slug)} />
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-3">
            {/* Exam Fees & Registration section */}
            <ExamFeesSection slug={slug} />
            
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