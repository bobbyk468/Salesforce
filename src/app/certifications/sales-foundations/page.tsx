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

const slug = 'sales-foundations'
export const metadata = getCertMetadata(slug)

const sampleQuestions = [
  {
    question: "What is the Certified Sales Foundations certification designed for?",
    options: ["Developers only", "Individuals who exemplify sales excellence using a customer-centric methodology", "Admins only", "Marketers only"],
    correctAnswer: 1,
    explanation: "The certification is designed for individuals who exemplify sales excellence using a customer-centric methodology.",
  },
  {
    question: "Which Salesforce product do Sales Professionals typically use daily?",
    options: ["Marketing Cloud only", "Sales Cloud (or Revenue Cloud) for pipeline and activities", "Slack only", "Heroku only"],
    correctAnswer: 1,
    explanation: "Sales professionals use Sales Cloud (or Revenue Cloud) for pipeline, activities, and forecasting.",
  },
  {
    question: "What does a customer-centric sales methodology emphasize?",
    options: ["Product features only", "Understanding customer problems and delivering value-aligned solutions", "Discounts only", "Volume only"],
    correctAnswer: 1,
    explanation: "Customer-centric selling focuses on customer problems and value-aligned solutions.",
  },
  {
    question: "Which activity is key for sales excellence?",
    options: ["Only cold calling", "Research, product knowledge, and team selling to drive success", "Only email", "Only demos"],
    correctAnswer: 1,
    explanation: "Research, product knowledge, and team selling are key to sales success.",
  },
  {
    question: "What role do Sales Professionals play in the organization?",
    options: ["Only support", "Bringing in revenue by sharing valuable product and service solutions that address customer problems", "Only marketing", "Only implementation"],
    correctAnswer: 1,
    explanation: "Sales professionals drive revenue by connecting solutions to customer problems.",
  },
]

export default function SalesFoundationsPage() {
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
            code="Sales Foundations"
            description="The Certified Sales Foundations certification is designed for individuals who exemplify sales excellence using a customer-centric methodology."
            examDetails={{ questions: 60, passingScore: '~65%', duration: '90 min', cost: '$200' }}
            topics={['Sales Cloud', 'Pipeline', 'Customer-Centric Selling', 'Discovery', 'Value Proposition', 'Team Selling', 'Forecasting', 'Best Practices', 'Ethics', 'Adoption']}
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