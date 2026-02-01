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

const slug = 'cpq-administrator'
export const metadata = getCertMetadata(slug)

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
    <div className="max-w-7xl mx-auto px-4 py-12">
      <CertPageSeo slug={slug} certTitle={slugToDisplayName(slug)} />
      <CertPageIntro slug={slug} />
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-3">
          <CertificationCard
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

          <div id="more-questions" className="mt-12 bg-salesforce-blue/10 rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Want More Practice Questions?</h3>
            <p className="text-gray-600 mb-6">
              Get access to our complete question bank with detailed explanations.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-all duration-200 shadow-md hover:shadow-lg active:scale-95"
            >
              Contact Us for Full Access
            </a>
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