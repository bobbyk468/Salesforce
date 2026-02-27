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

const slug = 'order-management-admin-ap'
export async function generateMetadata() {
  return getCertMetadata(slug)
}

const sampleQuestions = [
  { question: "What does Order Management Administrator AP validate?", options: ["Only basics", "Experience implementing and consulting on Order Management projects in a customer-facing role", "Only reporting", "Only Slack"], correctAnswer: 1, explanation: "Accredited Order Management Administrator Professionals have experience implementing and consulting on Order Management projects in a customer-facing role." },
  { question: "Which Salesforce product does Order Management refer to?", options: ["Marketing Cloud", "Order Management for order orchestration and fulfillment", "Service Cloud", "Slack"], correctAnswer: 1, explanation: "Order Management is Salesforce's order orchestration and fulfillment product." },
  { question: "What is a key activity for an Order Management Administrator?", options: ["Only coding", "Implementing and consulting on Order Management projects", "Only reporting", "Only lists"], correctAnswer: 1, explanation: "They implement and consult on Order Management projects." },
  { question: "Which role typically pursues Order Management Admin AP?", options: ["Marketers", "Partners and implementers working with Order Management", "Sales only", "Designers only"], correctAnswer: 1, explanation: "Partners and implementers working with Order Management pursue this credential." },
  { question: "What does order orchestration often involve?", options: ["Only email", "Fulfillment, inventory, and shipping coordination", "Only CPQ", "Only Slack"], correctAnswer: 1, explanation: "Order orchestration involves fulfillment, inventory, and shipping coordination." },
  { question: "Which Order Management concept refers to splitting an order into multiple fulfillment groups?", options: ["Order capture only", "Order orchestration and fulfillment groups", "CPQ only", "Lead routing"], correctAnswer: 1, explanation: "Order orchestration can split orders into fulfillment groups for different locations or methods." },
  { question: "What does fulfillment coordination typically include?", options: ["Email only", "Inventory allocation, picking, packing, and shipping", "Reports only", "CPQ quotes"], correctAnswer: 1, explanation: "Fulfillment coordination covers inventory, picking, packing, and shipping steps." },
  { question: "Which Salesforce product often integrates with Order Management?", options: ["Marketing Cloud only", "Commerce Cloud, CPQ, and Billing", "Slack only", "Tableau only"], correctAnswer: 1, explanation: "Order Management integrates with Commerce Cloud, CPQ, and Billing." },
  { question: "What is a fulfillment order in Order Management?", options: ["A CPQ quote", "A unit of work that drives fulfillment (e.g., ship-to-location)", "A lead", "An email"], correctAnswer: 1, explanation: "Fulfillment orders represent units of work for fulfillment execution." },
  { question: "What is an order summary in Order Management?", options: ["A CPQ quote", "The consolidated view of order details, orchestration status, and fulfillment progress", "A lead", "An email"], correctAnswer: 1, explanation: "Order summary provides a single view of order state and fulfillment progress." },
  { question: "What does inventory allocation mean in Order Management?", options: ["Only reporting", "Reserving inventory for specific order lines", "Email routing", "CPQ configuration"], correctAnswer: 1, explanation: "Inventory allocation reserves stock for order lines." },
  { question: "Which concept helps route orders to the right fulfillment location?", options: ["Lead assignment only", "Fulfillment group rules and location logic", "Campaigns only", "Case queues"], correctAnswer: 1, explanation: "Fulfillment group rules route orders to appropriate locations." },
  { question: "What is the purpose of Order Management administration?", options: ["Only coding", "Configuring orchestration, fulfillment, and integration settings", "Marketing only", "Slack setup only"], correctAnswer: 1, explanation: "Administration covers orchestration, fulfillment, and integration configuration." },
  { question: "Which best practice applies to Order Management implementation?", options: ["Ignore integration", "Align orchestration with business processes and fulfillment capabilities", "No testing needed", "Single location only"], correctAnswer: 1, explanation: "Orchestration should align with business processes and fulfillment capabilities." },
  { question: "What does order lifecycle management involve?", options: ["Email only", "Order creation, orchestration, fulfillment, and completion tracking", "CPQ only", "Slack messages"], correctAnswer: 1, explanation: "Order lifecycle spans creation through orchestration to fulfillment and completion." },
]

export default function OrderManagementAdminAPPage() {
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
            
            <CertificationCard slug={slug} title={slugToDisplayName(slug)} code="AP" description="Accredited Order Management Administrator Professionals have experience implementing and consulting on Order Management projects in a customer-facing role." examDetails={{ questions: 60, passingScore: '~65%', duration: '90 min', cost: '$100' }} topics={['Order Management', 'Orchestration', 'Fulfillment', 'Administration', 'Best Practices']}
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
