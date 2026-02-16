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

const slug = 'data-architect'
export async function generateMetadata() {
  return getCertMetadata(slug)
}

const sampleQuestions = [
  {
    question: "What is the primary focus of a Platform Data Architect?",
    options: ["Only UI", "Designing sound, scalable, high-performing solutions for enterprise data management on the Salesforce Platform", "Email only", "Slack only"],
    correctAnswer: 1,
    explanation: "Platform Data Architects design scalable, high-performing data solutions on the Salesforce Platform.",
  },
  {
    question: "Which consideration is critical when designing for large data volumes?",
    options: ["Only field count", "Governor limits, indexing, and query optimization", "Only page layout", "Only reports"],
    correctAnswer: 1,
    explanation: "Large data volumes require attention to governor limits, indexing, and query optimization.",
  },
  {
    question: "What is the purpose of skinny tables in Salesforce?",
    options: ["To store images", "To optimize reporting by reducing joins for large datasets", "To send emails", "To configure CPQ"],
    correctAnswer: 1,
    explanation: "Skinny tables are denormalized tables that can improve report performance.",
  },
  {
    question: "Which relationship type should be used when the child must always belong to a parent?",
    options: ["Lookup", "Master-Detail", "External Lookup", "Indirect Lookup"],
    correctAnswer: 1,
    explanation: "Master-Detail enforces ownership and cascade delete; child cannot exist without parent.",
  },
  {
    question: "What does data archiving strategy involve?",
    options: ["Only backup", "Moving historical data off-platform or to Big Objects while keeping access patterns in mind", "Only delete", "Only export"],
    correctAnswer: 1,
    explanation: "Archiving involves moving historical data while preserving access and compliance.",
  },
]

export default function DataArchitectPage() {
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
            code="Data Architect"
            description="Certified Platform Data Architects are experts at designing sound, scalable, high-performing solutions on the Salesforce Platform that are tailored for enterprise data management."
            examDetails={{ questions: 60, passingScore: '~68%', duration: '120 min', cost: '$400' }}
            topics={['Data Modeling', 'Large Data Volumes', 'Governor Limits', 'Big Objects', 'Indexing', 'Archiving', 'Migration', 'Integration', 'Performance', 'Governance']}
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