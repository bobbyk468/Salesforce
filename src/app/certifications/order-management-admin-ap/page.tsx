import FullQuestionBankCta from '@/components/FullQuestionBankCta'
import CertificationCard from '@/components/CertificationCard'
import CertIntroParagraph from '@/components/CertIntroParagraph'
import ExamPrepContent from '@/components/ExamPrepContent'
import CertPageSeo, { CertPageFaq } from '@/components/CertPageSeo'
import CertPageIntro from '@/components/CertPageIntro'
import CertPageCta from '@/components/CertPageCta'
import ExamLogisticsSection from '@/components/ExamLogisticsSection'
import ExamFeesSection from '@/components/ExamFeesSection'
import RelatedCertifications from '@/components/RelatedCertifications'
import CertTableOfContents from '@/components/CertTableOfContents'
import { getCertMetadata, getCertH1Text, getCertExamWeightageHeading, getCertPracticeQuestionsHeading, getPracticeQuestionsIntro, slugToDisplayName } from '@/lib/cert-seo-data'
import { Metadata } from 'next'
import { getExamWeightage } from '@/lib/exam-weightage-data'

import dynamic from 'next/dynamic'
import DifficultyHeatmap from '@/components/DifficultyHeatmap'
const PracticeQuestionsSection = dynamic(
  () => import('@/components/PracticeQuestionsSection'),
  {
    ssr: false,
    loading: () => (
      <div id="practice-questions" className="mt-12 min-h-[440px] w-full" aria-hidden="true" />
    ),
  }
)

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
        <CertIntroParagraph slug={slug} />
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


          {/* Key Concepts */}
          <div id="key-concepts" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Order Management Admin AP: Key Concepts for the Exam</h2>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-1">Order Lifecycle & Order Summary</p>
                <p>Salesforce Order Management (SOM) tracks the post-purchase lifecycle from order capture through fulfillment and return. The Order Summary is the central object — it holds the canonical state of an order and aggregates Order Product Summaries (line items), Fulfillment Orders, Invoices, and Payment Summaries. Order states: Draft → Activated → Fulfilled → Cancelled. Order Product Summary states: Ordered → Allocated → Fulfilled → Returned. Change Orders handle post-capture modifications (address change, item cancellation, add-on). The AP exam tests the Order Summary data model, how state transitions are triggered, and the relationship between Order Summary and its child objects.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Fulfillment & Inventory Allocation</p>
                <p>Fulfillment Orders represent the instruction to a fulfillment location to pick, pack, and ship items. Distributed Order Management (DOM) determines which fulfillment location handles each item based on inventory availability, proximity, and business rules. Fulfillment Location represents a warehouse, store, or 3PL partner. Inventory Availability is checked in real time via OCI (Omnichannel Inventory) API. Partial Fulfillment splits an order across multiple locations or shipments. Fulfillment Order Line Items map to specific order products and quantities. The exam tests how to configure fulfillment rules, how DOM selects locations, and how partial fulfillment is handled when one location has insufficient stock.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Returns, Refunds & Return Merchandise Authorization</p>
                <p>Return Orders represent a customer&apos;s request to return one or more items. Return Merchandise Authorization (RMA) is the approval to accept a return. Return Order Line Items reference the original Order Product Summaries. Upon receipt of the returned item, a Return Receipt is created and inventory is restocked. Refunds are processed through the original payment method — partial refunds are supported. Credit Memos document the financial adjustment. Exchange workflows replace a returned item with a new one in a single transaction. The AP exam tests the configuration of a return policy, the sequence of return → receipt → refund → inventory restock, and how to set up an exchange flow.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Pricing, Promotions & Tax</p>
                <p>Order Management uses Price Adjustments to apply discounts at the order level (coupon codes, loyalty discounts) or the line level (product-specific promotions). Price Book Entries set base prices. Tax Policies and Tax Treatments configure tax calculation — either Salesforce Tax or a third-party integration (Avalara, Vertex). Tax is calculated at order capture and re-calculated if the order is modified. Shipping Charges are added as a separate order product. The AP exam tests how to configure a promotion that applies a percentage discount to an entire order, how tax is recalculated on a change order, and how shipping charges are represented in the Order Summary data model.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Integration & OCI (Omnichannel Inventory)</p>
                <p>OCI (Omnichannel Inventory) is the Salesforce API layer for real-time inventory availability checks across fulfillment locations. External systems (e-commerce platforms, ERP, WMS) integrate with SOM via the Order Management APIs. Webhooks and Platform Events notify external systems of order state changes. External Fulfillment Provider integration sends Fulfillment Orders to 3PL partners. The External Catalog and Pricing APIs support headless commerce scenarios where the storefront is not Salesforce B2B/B2C Commerce. The AP exam tests how to design the integration between a Salesforce-native Commerce Cloud storefront and SOM, how OCI responds to an availability check, and how to handle an external fulfillment partner that cannot receive Salesforce webhooks.</p>
              </div>
            </div>
          </div>

          {/* How to Pass Scenario Strategy */}
          <div id="scenario-tips" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Pass the Salesforce Order Management Administrator Accredited Professional Exam</h2>
            <p className="text-sm text-gray-600 mb-5">
              The Order Management Admin AP exam tests administration of Salesforce Order Management for omnichannel fulfillment. Focus on order lifecycle configuration, fulfillment routing, and inventory allocation.
            </p>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-1">Order Management Data Model</p>
                <p>Know the OM data model: Order Summary (master order record), Fulfillment Order (fulfillment unit), Fulfillment Order Line Item, Order Delivery Group (ship-to address), and how these relate to standard Order objects.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Order Routing &amp; Allocation</p>
                <p>Know how to configure routing rules: Order Routing Rule Sets, Inventory allocation logic (allocate from nearest location), and how the routing engine selects fulfillment locations based on inventory availability.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Order Lifecycle Configuration</p>
                <p>Know the standard OM order statuses and the actions that transition between them: Activated → Fulfillment → Shipped → Delivered → Return/Refund. Know how Process Builders or Flows automate status transitions.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Return &amp; Refund Processing</p>
                <p>Know how to configure return orders: Return Merchandise Authorizations (RMA), return reason codes, refund payment processing, and how restocking updates inventory counts.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">OM Integration with Commerce</p>
                <p>Know how Salesforce Order Management integrates with B2B Commerce and B2C Commerce (SFCC): order creation via API, order status sync back to the storefront, and how the customer order history portal works.</p>
              </div>
            </div>
          </div>

          

          <DifficultyHeatmap slug={slug} />

          <PracticeQuestionsSection
            heading={getCertPracticeQuestionsHeading(slug)}
            introText={getPracticeQuestionsIntro(sampleQuestions.length)}
            questions={sampleQuestions}
          />

          
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
              { id: 'key-concepts', title: 'Key Concepts' },
              { id: 'scenario-tips', title: 'How to Pass' },
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
