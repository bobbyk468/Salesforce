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

const slug = 'revenue-cloud-consultant'
export async function generateMetadata() {
  return getCertMetadata(slug)
}

const sampleQuestions = [
  {
    question: "What is the Product-to-Cash lifecycle?",
    options: ["Only marketing", "Quote-to-cash: configure, price, quote, contract, order, billing, revenue recognition", "Only sales", "Only service"],
    correctAnswer: 1,
    explanation: "Product-to-Cash (P2C) covers the full cycle from quote through contract, order, billing, and revenue recognition.",
  },
  {
    question: "Which role does a Revenue Cloud Consultant typically fulfill?",
    options: ["Email marketing only", "Designing and implementing Revenue Cloud on core with extensive knowledge of P2C", "Slack configuration only", "UI design only"],
    correctAnswer: 1,
    explanation: "They have hands-on experience designing and implementing Revenue Cloud and extensive P2C knowledge.",
  },
  {
    question: "What does Revenue Cloud typically include?",
    options: ["Only CPQ", "CPQ, Billing, Revenue Recognition, and related products", "Only Marketing Cloud", "Only Service Cloud"],
    correctAnswer: 1,
    explanation: "Revenue Cloud encompasses CPQ, Billing, Revenue Recognition, and the P2C lifecycle.",
  },
  {
    question: "Which Salesforce product handles subscription billing?",
    options: ["Only Sales Cloud", "Revenue Cloud / Billing", "Marketing Cloud only", "Slack only"],
    correctAnswer: 1,
    explanation: "Revenue Cloud Billing handles subscription and usage-based billing.",
  },
  {
    question: "What is revenue recognition in the context of Revenue Cloud?",
    options: ["Only invoicing", "Allocating revenue to accounting periods per ASC 606 / IFRS 15", "Only quotes", "Only orders"],
    correctAnswer: 1,
    explanation: "Revenue recognition allocates revenue to periods according to accounting standards (e.g., ASC 606).",
  },
]

export default function RevenueCloudConsultantPage() {
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
            code="Revenue Cloud"
            description="Certified Revenue Cloud Consultants have hands-on experience designing and implementing the Revenue Cloud product on core, and have extensive knowledge of the Product-to-Cash lifecycle."
            examDetails={{ questions: 60, passingScore: '~65%', duration: '105 min', cost: '$200' }}
            topics={['Revenue Cloud', 'CPQ', 'Billing', 'Revenue Recognition', 'Product-to-Cash', 'Contracts', 'Orders', 'Best Practices', 'Integration', 'Governance']}
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