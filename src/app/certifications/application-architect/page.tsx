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

const slug = 'application-architect'
export const metadata = getCertMetadata(slug)

const sampleQuestions = [
  {
    question: "What is the focus of an Application Architect?",
    options: ["Only Apex", "Deep understanding of native Salesforce features and modeling role hierarchy, data, and sharing", "Email only", "Slack only"],
    correctAnswer: 1,
    explanation: "Application Architects have deep understanding of native Salesforce features and model role hierarchy, data, and sharing.",
  },
  {
    question: "Which sharing mechanism is used to open access based on record ownership?",
    options: ["Only OWD", "Sharing rules", "Only profiles", "Only permission sets"],
    correctAnswer: 1,
    explanation: "Sharing rules extend access based on ownership or criteria.",
  },
  {
    question: "What is the role hierarchy used for?",
    options: ["Only reporting", "Inheriting record access and roll-up for forecasts and reports", "Email only", "CPQ only"],
    correctAnswer: 1,
    explanation: "Role hierarchy controls record access inheritance and roll-up for reporting and forecasts.",
  },
  {
    question: "Which certification is typically a prerequisite for Application Architect?",
    options: ["Email Specialist", "Platform Developer I and Sharing and Visibility Architect (or equivalent knowledge)", "Slack only", "Marketing Cloud only"],
    correctAnswer: 1,
    explanation: "Application Architect builds on platform and sharing/visibility knowledge.",
  },
  {
    question: "What does 'modeling data' mean for an Application Architect?",
    options: ["Only backups", "Designing object model, relationships, and data volume strategy", "Only reports", "Only dashboards"],
    correctAnswer: 1,
    explanation: "Modeling data includes object design, relationships, and data volume strategy.",
  },
]

export default function ApplicationArchitectPage() {
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
            code="Application Architect"
            description="Certified Application Architects have a deep understanding of native Salesforce features and functionality. They're also experts at modeling a role hierarchy, data, and appropriate sharing mechanisms."
            examDetails={{ questions: 60, passingScore: '~68%', duration: '120 min', cost: '$400' }}
            topics={['Data Modeling', 'Role Hierarchy', 'Sharing', 'Visibility', 'Native Features', 'Governance', 'Best Practices', 'Integration', 'Security', 'Scalability']}
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