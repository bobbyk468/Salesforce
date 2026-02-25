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

const slug = 'cpq-administrator'
export async function generateMetadata() {
  return getCertMetadata(slug)
}

const sampleQuestions = [
  {
    question: "What does CPQ stand for in Salesforce CPQ?",
    options: [
      "Customer Product Quality",
      "Configure, Price, Quote",
      "Centralized Purchase Queue",
      "Contract Pricing Query"
    ],
    correctAnswer: 1,
    explanation: "CPQ stands for Configure, Price, Quote - the core capabilities for building and managing product quotes."
  },
  {
    question: "Which object is the primary entry point for building a quote in Salesforce CPQ?",
    options: [
      "Opportunity",
      "Quote",
      "Contract",
      "Order"
    ],
    correctAnswer: 1,
    explanation: "The Quote object is the primary CPQ object used to build, price, and present quotes to customers."
  },
  {
    question: "What is the purpose of Product Rules in CPQ?",
    options: [
      "To set list prices",
      "To automatically add, remove, or configure products based on conditions",
      "To assign products to price books",
      "To track discount approval"
    ],
    correctAnswer: 1,
    explanation: "Product Rules automatically add, remove, or configure products on a quote based on conditions you define."
  },
  {
    question: "Which CPQ feature allows different pricing based on customer or contract?",
    options: [
      "Price Rules",
      "Product Options",
      "Quote Templates",
      "Contract Terms"
    ],
    correctAnswer: 0,
    explanation: "Price Rules apply custom pricing logic based on conditions such as customer, product, quantity, or contract."
  },
  {
    question: "What is a Bundle in Salesforce CPQ?",
    options: [
      "A report type",
      "A parent product with optional or required child products",
      "A discount schedule",
      "A quote template"
    ],
    correctAnswer: 1,
    explanation: "A Bundle is a product that contains optional or required child products (product options) that can be configured together."
  },
]

export default function CPQAdministratorPage() {
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
            code="CPQ"
            description="Certified CPQ Administrators are skilled at implementing Salesforce CPQ (Configure, Price, Quote) and can expertly design, build, and implement quoting flows."
            examDetails={{
              questions: 60,
              passingScore: "~65%",
              duration: "105 min",
              cost: "$200",
            }}
            topics={[
              "CPQ Fundamentals",
              "Products & Price Books",
              "Quoting Process",
              "Product Rules",
              "Price Rules",
              "Discounting",
              "Bundles & Options",
              "Contract Management",
              "Approval Flows",
              "Integration"
            ]}
            examSections={examSections}
            h1Text={getCertH1Text(slug)}
          examWeightageHeading={getCertExamWeightageHeading(slug)}
          />

          <div id="exam-prep">
            <ExamPrepContent slug={slug} />
          </div>

          <div id="practice-questions" className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{getCertPracticeQuestionsHeading(slug)}</h2>
            <p className="text-gray-600 mb-8">
              Test your knowledge with these sample questions.
            </p>
            
            {sampleQuestions.map((q, index) => (
              <QuestionCard
                key={index}
                questionNumber={index + 1}
                question={q.question}
                options={q.options}
                correctAnswer={q.correctAnswer}
                explanation={q.explanation}
              />
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
