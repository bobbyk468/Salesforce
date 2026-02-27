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
import { getCertMetadata, getCertH1Text, getCertExamWeightageHeading, getCertPracticeQuestionsHeading, getPracticeQuestionsIntro, slugToDisplayName } from '@/lib/cert-seo-data'
import QuestionCard from '@/components/QuestionCard'
import { Metadata } from 'next'
import { getExamWeightage } from '@/lib/exam-weightage-data'

const slug = 'b2b-solution-architect'
export async function generateMetadata() {
  return getCertMetadata(slug)
}

const sampleQuestions = [
  { question: "What does a B2B Solution Architect do?", options: ["Only coding", "Design and build multi-cloud B2B solutions that deliver business value across Salesforce products", "Only reporting", "Only Slack"], correctAnswer: 1, explanation: "Certified B2B Solution Architects design and build multi-cloud B2B solutions that deliver business value for the customer across Salesforce products." },
  { question: "What does B2B stand for?", options: ["Back to Back", "Business to Business", "Build to Order", "Brand to Brand"], correctAnswer: 1, explanation: "B2B stands for Business to Business." },
  { question: "Which Salesforce products are often part of B2B solutions?", options: ["Only Marketing Cloud", "B2B Commerce, CPQ, Order Management, and more", "Only Service Cloud", "Only Slack"], correctAnswer: 1, explanation: "B2B solutions often include B2B Commerce, CPQ, Order Management, and more." },
  { question: "What does 'multi-cloud' mean in this context?", options: ["Only one product", "Multiple Salesforce products working together", "Only Heroku", "Only MuleSoft"], correctAnswer: 1, explanation: "Multi-cloud means multiple Salesforce products working together." },
  { question: "Which role typically pursues B2B Solution Architect?", options: ["Marketers", "Architects and senior consultants designing B2B solutions", "Sales only", "Designers only"], correctAnswer: 1, explanation: "Architects and senior consultants designing B2B solutions pursue this credential." },
  { question: "What does B2B Commerce catalog management involve?", options: ["Email only", "Products, categories, and pricing for B2B buyers", "Slack only", "CPQ only"], correctAnswer: 1, explanation: "Catalog management covers products, categories, and pricing." },
  { question: "Which B2B Commerce feature supports buyer-specific pricing?", options: ["Standard Price Book only", "Customer-specific prices and contract pricing", "List price only", "No pricing"], correctAnswer: 1, explanation: "B2B Commerce supports customer-specific and contract pricing." },
  { question: "What does checkout customization in B2B involve?", options: ["Only default flow", "Payment, shipping, and approval workflows", "Email only", "Reports only"], correctAnswer: 1, explanation: "Checkout includes payment, shipping, and approval workflows." },
  { question: "Which integration connects B2B Commerce to ERP?", options: ["Slack only", "Order Management, middleware, or direct APIs", "Marketing Cloud only", "Service Cloud only"], correctAnswer: 1, explanation: "Order Management and APIs connect B2B Commerce to ERP." },
  { question: "What is a buyer account in B2B Commerce?", options: ["A lead", "The company/account that purchases through the storefront", "A contact only", "A campaign"], correctAnswer: 1, explanation: "Buyer accounts represent purchasing organizations." },
  { question: "Which B2B Commerce feature supports approval workflows?", options: ["No approvals", "Cart approval rules and multi-step approvals", "Email only", "CPQ only"], correctAnswer: 1, explanation: "Cart approval rules support multi-step approval workflows." },
  { question: "What does B2B solution design typically include?", options: ["Only UI", "Catalog, pricing, checkout, and integration architecture", "Only reports", "Only dashboards"], correctAnswer: 1, explanation: "Solution design covers catalog, pricing, checkout, and integration." },
  { question: "Which Salesforce product handles B2B storefront experience?", options: ["Service Cloud only", "B2B Commerce on Experience Cloud", "Marketing Cloud only", "Slack only"], correctAnswer: 1, explanation: "B2B Commerce runs on Experience Cloud for storefront." },
  { question: "What is the purpose of B2B Commerce order orchestration?", options: ["Only capture", "Fulfillment, inventory, and shipping coordination", "Only CPQ", "Only reports"], correctAnswer: 1, explanation: "Order orchestration handles fulfillment and shipping." },
  { question: "Which best practice applies to B2B multi-cloud design?", options: ["Single product only", "Align catalog, pricing, and order flow across Commerce, CPQ, and Order Management", "Ignore integration", "No testing"], correctAnswer: 1, explanation: "Align catalog, pricing, and order flow across products." },
]

export default function B2BSolutionArchitectPage() {
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
            
            <CertificationCard slug={slug} title={slugToDisplayName(slug)} code="B2B Architect" description="Certified B2B Solution Architects design and build multi-cloud B2B solutions that deliver business value for the customer across Salesforce products." examDetails={{ questions: 60, passingScore: '~68%', duration: '120 min', cost: '$400' }} topics={['B2B Commerce', 'Multi-Cloud', 'CPQ', 'Order Management', 'Solution Design', 'Best Practices']}
            examSections={examSections}
            h1Text={getCertH1Text(slug)}
          examWeightageHeading={getCertExamWeightageHeading(slug)}
          />

          <div id="exam-prep">
            <ExamPrepContent slug={slug} />
          </div>

          <div id="practice-questions" className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{getCertPracticeQuestionsHeading(slug)}</h2>
            <p className="text-gray-600 mb-8">{getPracticeQuestionsIntro(sampleQuestions.length)}</p>
            {sampleQuestions.map((q, i) => (<QuestionCard key={i} questionNumber={i + 1} question={q.question} options={q.options} correctAnswer={q.correctAnswer} explanation={q.explanation} />))}
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
