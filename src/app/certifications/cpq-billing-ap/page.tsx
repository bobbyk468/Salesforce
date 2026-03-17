import FullQuestionBankCta from '@/components/FullQuestionBankCta'
import Link from 'next/link'
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

const slug = 'cpq-billing-ap'
export async function generateMetadata() {
  return getCertMetadata(slug)
}

const sampleQuestions = [
  { question: "What does CPQ and Billing Consultant AP validate?", options: ["Only basics", "Fundamental knowledge and consulting skills to scope, design, build, and deploy Salesforce CPQ and Billing solutions", "Only reporting", "Only Slack"], correctAnswer: 1, explanation: "Accredited Salesforce CPQ and Billing Consultant Professionals have the fundamental knowledge and consulting skills to scope, design, build, and deploy Salesforce CPQ and Salesforce Billing solutions." },
  { question: "Which products does this AP cover?", options: ["Only CPQ", "Salesforce CPQ and Salesforce Billing", "Only Billing", "Only Marketing Cloud"], correctAnswer: 1, explanation: "It covers Salesforce CPQ and Salesforce Billing." },
  { question: "What is a key activity for a CPQ and Billing Consultant?", options: ["Only coding", "Scoping, designing, building, and deploying CPQ and Billing solutions", "Only reporting", "Only email"], correctAnswer: 1, explanation: "They scope, design, build, and deploy CPQ and Billing solutions." },
  { question: "Which role typically pursues CPQ and Billing AP?", options: ["Marketers", "Partners and consultants working with CPQ and Billing", "Sales only", "Designers only"], correctAnswer: 1, explanation: "Partners and consultants working with CPQ and Billing pursue this credential." },
  { question: "What does CPQ stand for?", options: ["Customer Product Quality", "Configure, Price, Quote", "Central Purchase Queue", "Contract Pricing Query"], correctAnswer: 1, explanation: "CPQ stands for Configure, Price, Quote." },
  { question: "What does Salesforce Billing handle?", options: ["Only quotes", "Revenue recognition, invoicing, and subscription billing", "Only products", "Only discounts"], correctAnswer: 1, explanation: "Billing manages invoicing, revenue recognition, and subscription lifecycle." },
  { question: "Which object is central to CPQ quote creation?", options: ["Opportunity only", "Quote with Quote Lines for products and pricing", "Account only", "Contract only"], correctAnswer: 1, explanation: "Quote and Quote Lines are the core CPQ objects for building proposals." },
  { question: "What is a Price Rule in CPQ used for?", options: ["Validation only", "Applying custom pricing logic based on conditions", "Reporting only", "Approval only"], correctAnswer: 1, explanation: "Price Rules inject values into quote line fields based on conditions." },
  { question: "What is a Product Bundle in CPQ?", options: ["A report", "A parent product with optional or required child products", "A discount type", "A quote template"], correctAnswer: 1, explanation: "Bundles group parent and child products for configuration." },
  { question: "Which activity is part of CPQ scoping?", options: ["Only deployment", "Understanding product catalog, pricing, and quote requirements", "Only coding", "Only reporting"], correctAnswer: 1, explanation: "Scoping involves gathering product, pricing, and process requirements." },
  { question: "What does a Discount Schedule do in CPQ?", options: ["Approves discounts", "Applies tiered discounts based on quantity or term", "Validates only", "Sends emails only"], correctAnswer: 1, explanation: "Discount Schedules apply volume-based or term-based tier discounts." },
  { question: "Why is Salesforce Billing often paired with CPQ?", options: ["Not related", "CPQ creates quotes/contracts; Billing handles invoicing and revenue", "Only for reporting", "Only for products"], correctAnswer: 1, explanation: "CPQ handles configure-quote-contract; Billing handles invoicing and revenue." },
  { question: "What is the Quote Line Editor (QLE)?", options: ["A report", "The interactive grid for configuring products and pricing on a quote", "An approval step", "A data import tool"], correctAnswer: 1, explanation: "QLE is the grid where reps configure products and view pricing." },
  { question: "What is a Configuration Attribute in CPQ?", options: ["A report filter", "A product option that users select when configuring a bundle (e.g., color, size)", "A discount type", "An approval rule"], correctAnswer: 1, explanation: "Configuration Attributes define selectable options for product configuration." },
  { question: "What is an Option Constraint in CPQ?", options: ["A report filter", "A rule defining dependencies between product options in a bundle", "A discount type", "An approval rule"], correctAnswer: 1, explanation: "Option Constraints control which options are required or excluded based on configuration." },
]

export default function CPQBillingAPPage() {
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
            
            <CertificationCard slug={slug} title={slugToDisplayName(slug)} code="AP" description="Accredited Salesforce CPQ and Billing Consultant Professionals have the fundamental knowledge and consulting skills to scope, design, build, and deploy Salesforce CPQ and Salesforce Billing solutions." examDetails={{ questions: 60, passingScore: '~65%', duration: '90 min', cost: '$100' }} topics={['CPQ', 'Billing', 'Consulting', 'Scoping', 'Design', 'Deployment', 'Best Practices']}
            examSections={examSections}
            h1Text={getCertH1Text(slug)}
          examWeightageHeading={getCertExamWeightageHeading(slug)}
          />

          <div id="exam-prep">
            <ExamPrepContent slug={slug} />
          </div>


          {/* Key Concepts */}
          <div id="key-concepts" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">CPQ Billing AP: Key Concepts for the Exam</h2>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-1">Quote-to-Cash Process & Billing Setup</p>
                <p>CPQ Billing extends Salesforce CPQ to handle the full Quote-to-Cash cycle: Quote → Order → Contract → Invoice → Payment. Billing must be enabled in CPQ Settings. The Order object bridges CPQ and Billing — when a Quote is contracted, an Order is created, and Billing creates invoices from Order Products. Billing Policies define the invoice generation schedule, payment terms, and invoice consolidation rules. Legal Entities represent the billing entities within a company — important for multi-national deployments. Tax Integration (Avalara, Vertex) calculates tax on invoices. The AP exam tests the configuration sequence for a new Billing setup and the object relationships in Quote-to-Cash.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Invoice Generation & Billing Rules</p>
                <p>Invoices are generated from Order Products based on Billing Rules — which define when and how charges are billed. Bill Now generates an invoice immediately. Bill in Advance bills at the start of a period. Bill in Arrears bills at the end of a period. Billing Frequency options: Monthly, Quarterly, Annually, or one-time. Invoice Run triggers invoice generation for all eligible Order Products. Invoice Lines represent individual charges. Credit Notes handle adjustments and cancellations. Billing Batches process large volumes asynchronously. The exam tests how to configure billing rules for common scenarios (annual subscription billed monthly, one-time setup fee billed immediately with first invoice).</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Usage-Based Billing</p>
                <p>Usage Billing handles variable charges based on consumption — API calls, data transfer, seat count. Usage Summaries aggregate raw usage data into billable amounts for an invoice period. Usage Rate Cards define the price per unit or tier. Rated Usage is the calculated charge ready for invoicing. Usage data can be imported via CSV, API, or custom integration. Overage billing charges usage above the included amount in a subscription. The AP exam tests how to configure usage billing for a SaaS scenario (base subscription + overage), how usage summaries feed invoice lines, and how to test the billing calculation with sample usage data.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Payment Processing & Dunning</p>
                <p>Payment Gateways in CPQ Billing connect to payment processors (Stripe, CyberSource, Adyen) to tokenize and charge payment methods. Payment Terms define when payment is due after invoice generation (Net 30, Due on Receipt). Auto-Pay automatically charges the stored payment method on the invoice due date. Dunning Processes handle failed payments — automated retry schedules, dunning emails, and account holds after N failed attempts. Payment Allocations apply payments to specific invoices. Refunds and Credit Memos reverse billed charges. The exam tests how to configure auto-pay, design a dunning workflow, and handle the scenario where a payment fails and needs to be retried.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Revenue Recognition & Reporting</p>
                <p>Revenue Recognition in CPQ Billing aligns with ASC 606 and IFRS 15 standards. Revenue Schedules distribute invoice revenue across the service period rather than recognizing it all at invoice date. Revenue Recognition Rules define when revenue is recognized (ratably over subscription term, point-in-time for one-time charges). Revenue Distribution Transactions record the recognized amounts per period. Finance Period controls define accounting period boundaries. Revenue Reporting surfaces recognized vs. deferred revenue. The exam tests how to configure revenue recognition for a subscription scenario, how to handle amendments that modify in-period revenue schedules, and key reporting objects.</p>
              </div>
            </div>
          </div>

          {/* How to Pass Scenario Strategy */}
          <div id="scenario-tips" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Pass the Salesforce CPQ and Billing Accredited Professional Exam</h2>
            <p className="text-sm text-gray-600 mb-5">
              The CPQ &amp; Billing AP exam tests the full quote-to-cash process. Focus on CPQ configuration, Billing order generation, invoice processing, and revenue recognition — the complete lifecycle from quoting to recognizing revenue.
            </p>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-1">CPQ-to-Billing Object Chain</p>
                <p>Master the object chain: Quote → Quote Line → Order → Order Product → Asset/Subscription → Contract → Invoice Line → Invoice. Know what triggers each object&apos;s creation and the key fields at each step.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Billing Order Generation</p>
                <p>Know how to configure Order generation: Order Start Date, billing frequency, and how Billing handles co-termination for amendments. Understand how Net New vs. Upgrade vs. Downgrade orders generate different billing actions.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Invoice Processing</p>
                <p>Know the Invoice Run process: how to configure run schedules, what constitutes an invoice (grouping by account, billing day), and how the Legal Entity and Invoice Status workflow controls invoice approval.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Subscription Management</p>
                <p>Know how to handle subscription changes mid-term: Cancel (immediate/end-of-term), Reduce Quantity, Add Products, and how proration is calculated for each type of change.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Revenue Recognition</p>
                <p>Know how Revenue Schedules distribute revenue across periods, how the Accounting Period configuration controls recognition timing, and how to handle ramp deals with non-linear revenue schedules.</p>
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

                    <section className="mt-8 rounded-xl border border-blue-100 bg-blue-50/40 p-5 sm:p-6" aria-labelledby="next-certs-heading">
            <h2 id="next-certs-heading" className="text-base font-semibold text-gray-900 mb-3">Next Certifications After This AP</h2>
            <p className="text-sm text-gray-700 mb-2">AP credentials pair well with core platform certifications. Consider:</p>
            <ul className="space-y-2 text-sm">
              <li><Link href="/certifications/sales-cloud" className="text-salesforce-blue font-medium hover:underline">Sales Cloud Consultant</Link></li>
              <li><Link href="/certifications/service-cloud" className="text-salesforce-blue font-medium hover:underline">Service Cloud Consultant</Link></li>
              <li><Link href="/certifications/administrator" className="text-salesforce-blue font-medium hover:underline">Platform Administrator</Link></li>
              <li><Link href="/certifications/role/administrator" className="text-salesforce-blue font-medium hover:underline">Admin certification path</Link></li>
            </ul>
          </section>

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
