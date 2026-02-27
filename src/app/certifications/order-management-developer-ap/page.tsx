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
import QuestionCard from '@/components/QuestionCard'
import { Metadata } from 'next'
import { getExamWeightage } from '@/lib/exam-weightage-data'

const slug = 'order-management-developer-ap'
export async function generateMetadata() {
  return getCertMetadata(slug)
}

const sampleQuestions = [
  { question: "What does Order Management Developer AP validate?", options: ["Only basics", "Skills and knowledge in configuring and customizing Salesforce Order Management", "Only reporting", "Only Slack"], correctAnswer: 1, explanation: "Accredited Order Management Developer Professionals have demonstrated skills and knowledge in configuring and customizing Salesforce Order Management." },
  { question: "What is a key activity for an Order Management Developer?", options: ["Only administration", "Configuring and customizing Order Management", "Only reporting", "Only lists"], correctAnswer: 1, explanation: "They configure and customize Order Management." },
  { question: "Which role typically pursues Order Management Developer AP?", options: ["Marketers", "Partners and developers working with Order Management", "Sales only", "Designers only"], correctAnswer: 1, explanation: "Partners and developers working with Order Management pursue this credential." },
  { question: "What does customization in Order Management often involve?", options: ["Only UI", "Fulfillment flows, integrations, and extensions", "Only reports", "Only dashboards"], correctAnswer: 1, explanation: "Customization involves fulfillment flows, integrations, and extensions." },
  { question: "Which product does Order Management often integrate with?", options: ["Only Marketing Cloud", "CPQ, Commerce, and fulfillment systems", "Only Service Cloud", "Only Slack"], correctAnswer: 1, explanation: "Order Management integrates with CPQ, Commerce, and fulfillment systems." },
  { question: "What does fulfillment flow customization involve?", options: ["Only UI", "Defining steps, actions, and routing for order fulfillment", "Only reports", "Only dashboards"], correctAnswer: 1, explanation: "Fulfillment flows define steps, actions, and routing logic." },
  { question: "Which technology is used to extend Order Management?", options: ["Only clicks", "Apex, Platform Events, and APIs", "Only reports", "Only lists"], correctAnswer: 1, explanation: "Developers use Apex, Platform Events, and APIs for customization." },
  { question: "What is an Order Summary in Order Management?", options: ["A report", "The consolidated order record that drives orchestration and fulfillment", "A lead", "An email"], correctAnswer: 1, explanation: "Order Summary is the central record for order lifecycle." },
  { question: "Which integration pattern supports real-time order updates?", options: ["Batch only", "Platform Events, callouts, or APIs", "Manual only", "Email only"], correctAnswer: 1, explanation: "Platform Events, callouts, and APIs enable real-time integration." },
  { question: "What does Fulfillment Order represent?", options: ["A quote", "A unit of work for fulfillment (e.g., ship-to location)", "A lead", "A campaign"], correctAnswer: 1, explanation: "Fulfillment Orders represent work units for fulfillment execution." },
  { question: "Which best practice applies to Order Management development?", options: ["Ignore error handling", "Implement error handling, logging, and idempotency for integrations", "No testing", "Single system only"], correctAnswer: 1, explanation: "Error handling, logging, and idempotency are critical for reliability." },
  { question: "What does custom allocation logic enable?", options: ["Only reporting", "Custom rules for inventory or fulfillment allocation", "Only UI", "Only dashboards"], correctAnswer: 1, explanation: "Custom allocation logic extends default fulfillment behavior." },
  { question: "Which Order Management API supports order creation?", options: ["REST only", "Order Management APIs for order and fulfillment lifecycle", "SOAP only", "Bulk API only"], correctAnswer: 1, explanation: "Order Management exposes APIs for order and fulfillment operations." },
  { question: "What is the purpose of fulfillment group configuration?", options: ["Only reports", "Defining how orders split and route to fulfillment locations", "Only UI", "Only dashboards"], correctAnswer: 1, explanation: "Fulfillment groups define order splitting and routing logic." },
  { question: "Which testing approach is important for Order Management customizations?", options: ["No testing", "Unit tests, integration tests, and end-to-end fulfillment tests", "Manual only", "UAT only"], correctAnswer: 1, explanation: "Testing should cover unit, integration, and E2E scenarios." },
]

export default function OrderManagementDeveloperAPPage() {
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
            
            <CertificationCard slug={slug} title={slugToDisplayName(slug)} code="AP" description="Accredited Order Management Developer Professionals have demonstrated skills and knowledge in configuring and customizing Salesforce Order Management." examDetails={{ questions: 60, passingScore: '~65%', duration: '90 min', cost: '$100' }} topics={['Order Management', 'Development', 'Customization', 'Fulfillment', 'Integrations', 'Best Practices']}
            examSections={examSections}
            h1Text={getCertH1Text(slug)}
          examWeightageHeading={getCertExamWeightageHeading(slug)}
          />

          <div id="exam-prep">
            <ExamPrepContent slug={slug} />
          </div>


          {/* Key Concepts */}
          <div id="key-concepts" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Order Management Developer AP: Key Concepts for the Exam</h2>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-1">OMS APIs & Customization</p>
                <p>Salesforce Order Management exposes a rich set of REST and Apex APIs for order lifecycle management. The `ConnectApi.OrderSummary` class provides Apex access to create, modify, and fulfill orders programmatically. REST APIs support headless integration for external storefronts. Key API operations: Create Order Summary, Adjust Order Product Summaries (price changes, cancellations), Create Fulfillment Order, Create Return Order, Ensure Funds (payment capture). Invocable Apex methods expose OMS operations to Flow and external callers. The developer exam tests how to write Apex that calls OMS Connect APIs, how to handle API exceptions, and how to expose a custom OMS operation as an Invocable Action.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Order Orchestration with Flow</p>
                <p>OMS uses Salesforce Flow for order orchestration — automating the sequence of fulfillment, payment, notification, and return steps. Flow Orchestration (multi-stage orchestration) coordinates parallel and sequential work across teams and systems. Record-Triggered Flows respond to order state changes (e.g., when a Fulfillment Order is marked Fulfilled, trigger invoicing). Subflows modularize complex orchestration logic. Platform Events integrate OMS with external systems asynchronously — publish an event when an order state changes, subscribe in MuleSoft or an external ESB. The developer exam tests how to design an order orchestration flow, how to implement a re-try mechanism for failed API calls in a flow, and how to use Platform Events for async integration.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Custom Fulfillment & External Integration</p>
                <p>External Fulfillment Providers receive Fulfillment Orders via outbound REST calls or Platform Events. The External Fulfillment Provider framework allows developers to register custom adapters that translate Salesforce Fulfillment Orders into 3PL-specific formats. Order callbacks update Salesforce when the 3PL ships or cancels — implemented as inbound REST endpoints in Salesforce (Experience Cloud, Salesforce Sites, or Functions). Error handling: when an external call fails, the flow must log the error, alert ops, and optionally retry. Idempotency keys prevent duplicate fulfillment on retry. The developer exam tests how to implement a custom fulfillment adapter, how to expose an inbound callback endpoint, and how to handle idempotent retries.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Testing OMS Customizations</p>
                <p>Testing Order Management Apex requires creating test data for the full order hierarchy: Order Summary → Order Product Summary → Fulfillment Order → Fulfillment Order Line Item. OMS test utilities (ConnectApi mock classes) simulate API responses in test context. Use `Test.setMock(HttpCalloutMock.class, ...)` for external HTTP callouts. Test coverage must cover both happy path and error scenarios (insufficient inventory, payment failure, external system timeout). Integration tests against a Developer Edition or scratch org with OMS enabled validate end-to-end flows. The exam tests how to write a complete unit test for an OMS Apex method, how to mock OMS Connect API calls, and how to achieve &gt;75% coverage on OMS trigger logic.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Performance & Scalability Considerations</p>
                <p>High-volume order management requires careful attention to governor limits. Bulk order processing uses Apex Batch jobs rather than synchronous Apex. SOQL queries on Order Summary and child objects must use selective filters — add custom indexes on frequently queried fields (external order ID, status, created date). Platform Event subscriptions use CometD for streaming — design for at-least-once delivery and idempotent consumers. Large Return Order batches should be processed asynchronously to avoid CPU time limits. The OCI inventory check API has rate limits — design a caching layer for high-frequency availability checks. The developer exam tests how to design an OMS customization that handles 10,000+ daily orders without hitting governor limits.</p>
              </div>
            </div>
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
              { id: 'key-concepts', title: 'Key Concepts' },
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
