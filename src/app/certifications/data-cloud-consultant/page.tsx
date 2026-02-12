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

const slug = 'data-cloud-consultant'
export async function generateMetadata() {
  return getCertMetadata(slug)
}

const sampleQuestions = [
  {
    question: "What is the primary purpose of Salesforce Data Cloud?",
    options: ["Only storage", "Unifying and activating customer data across sources for a single view", "Email only", "CPQ only"],
    correctAnswer: 1,
    explanation: "Data Cloud unifies data from multiple sources to create a single, actionable view of the customer.",
  },
  {
    question: "Which concept in Data Cloud represents a unified profile of a customer?",
    options: ["Lead", "Data Model Object", "Identity Resolution", "Segment"],
    correctAnswer: 2,
    explanation: "Identity Resolution links records across sources to create a unified identity and profile.",
  },
  {
    question: "What is a Segment in Data Cloud?",
    options: ["A report", "A group of profiles that meet defined criteria for activation", "An email", "A campaign"],
    correctAnswer: 1,
    explanation: "Segments define audiences based on profile attributes and can be activated across channels.",
  },
  {
    question: "Which role does a Data Cloud Consultant typically fulfill?",
    options: ["Email marketing only", "Implementing and consulting on enterprise data platforms in a customer-facing role", "Slack configuration only", "UI design only"],
    correctAnswer: 1,
    explanation: "Data Cloud Consultants implement and consult on Data Cloud in customer-facing roles.",
  },
  {
    question: "What does activation mean in Data Cloud?",
    options: ["Deleting data", "Sending segment data to destinations (e.g., Marketing Cloud, Advertising)", "Backup only", "Reporting only"],
    correctAnswer: 1,
    explanation: "Activation sends segment and profile data to downstream systems for campaigns and personalization.",
  },
]

export default function DataCloudConsultantPage() {
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
            code="Data Cloud"
            description="Certified Data Cloud Consultants have experience implementing and consulting on enterprise data platforms in a customer-facing role."
            examDetails={{ questions: 60, passingScore: '~65%', duration: '105 min', cost: '$200' }}
            topics={['Data Cloud Basics', 'Identity Resolution', 'Data Model', 'Segments', 'Activation', 'Connectors', 'Transformations', 'Governance', 'Reporting', 'Best Practices']}
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