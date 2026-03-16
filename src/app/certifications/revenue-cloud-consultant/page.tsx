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
  {
    question: "What does CPQ (Configure, Price, Quote) handle?",
    options: [
      "Only billing",
      "Product configuration, pricing, discounting, and quote generation",
      "Only orders",
      "Only contracts"
    ],
    correctAnswer: 1,
    explanation: "CPQ handles configuration, pricing, and quote generation."
  },
  {
    question: "Which Revenue Cloud object represents a signed agreement?",
    options: [
      "Quote only",
      "Contract",
      "Opportunity only",
      "Order only"
    ],
    correctAnswer: 1,
    explanation: "Contract represents the signed agreement and drives billing/revenue."
  },
  {
    question: "What is usage-based billing?",
    options: [
      "Fixed fee only",
      "Billing based on consumption or usage metrics",
      "One-time only",
      "Quote only"
    ],
    correctAnswer: 1,
    explanation: "Usage-based billing charges based on consumption metrics."
  },
  {
    question: "Which standard governs revenue recognition for subscriptions?",
    options: [
      "SOX only",
      "ASC 606 / IFRS 15",
      "GDPR only",
      "No standard"
    ],
    correctAnswer: 1,
    explanation: "ASC 606 and IFRS 15 govern revenue recognition."
  },
  {
    question: "What does the P2C lifecycle begin with?",
    options: [
      "Billing",
      "Configuration and quote",
      "Revenue recognition only",
      "Contract only"
    ],
    correctAnswer: 1,
    explanation: "P2C begins with configuration and quote, then contract, order, billing, and revenue."
  },
  {
    question: "Which Revenue Cloud feature supports amendment handling?",
    options: [
      "Quote only",
      "Contract amendments (add, change, renew)",
      "Order only",
      "Invoice only"
    ],
    correctAnswer: 1,
    explanation: "Contract amendments support add, change, and renew scenarios."
  },
  {
    question: "What is the purpose of a Price Book in CPQ?",
    options: [
      "To store contacts",
      "To define products and prices for quoting",
      "To create orders only",
      "To send invoices"
    ],
    correctAnswer: 1,
    explanation: "Price Books define products and list prices for CPQ quotes."
  },
  {
    question: "Which integration is common for Revenue Cloud?",
    options: [
      "Marketing Cloud only",
      "ERP, billing systems, and accounting (e.g., NetSuite)",
      "Slack only",
      "Tableau only"
    ],
    correctAnswer: 1,
    explanation: "Revenue Cloud integrates with ERP and accounting systems."
  },
  {
    question: "What does a Revenue Cloud Consultant need to understand?",
    options: [
      "Only UI",
      "P2C business processes, accounting implications, and product capabilities",
      "Only CPQ",
      "Only Billing"
    ],
    correctAnswer: 1,
    explanation: "Consultants need P2C process, accounting, and product knowledge."
  },
  {
    question: "Which best practice applies to Revenue Cloud implementation?",
    options: [
      "Ignore accounting",
      "Align with accounting policies, test revenue scenarios, and validate reporting",
      "No testing",
      "Single product only"
    ],
    correctAnswer: 1,
    explanation: "Align with accounting, test revenue scenarios, and validate reporting."
  },
]

export default function RevenueCloudConsultantPage() {
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
            
            <CertificationCard
              slug={slug}
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


          {/* Key Concepts */}
          <div id="key-concepts" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Revenue Cloud Consultant: Key Concepts for the Exam</h2>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-1">CPQ Configuration & Product Rules</p>
                <p>Salesforce Revenue Cloud (CPQ + Billing) starts with product configuration. Product Features group options within a bundle. Configuration Attributes set product-level settings. Product Rules enforce valid configurations: Validation Rules (block invalid combos), Selection Rules (auto-add/remove products), Alert Rules (warn users), Filter Rules (hide irrelevant options). Option Constraints define which options are mutually exclusive or required together. Price Rules execute pricing logic at specific stages of the quote calculation. The consultant exam tests how to design a product bundle for a complex SaaS offering, which rule type handles a given scenario, and how to troubleshoot a rule that isn&apos;t firing as expected.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Pricing, Discounting & Approvals</p>
                <p>CPQ pricing layers: List Price (Price Book) → Cost + Markup → Contracted Price → Block Pricing (volume tiers) → Percent of Total → Subscription Pricing. Discount Schedules define tier-based discounts. Price Waterfalls show how the final price is calculated step by step. Discount approval thresholds trigger Approval Processes when reps exceed authorized discount limits. Special Pricing Requests allow reps to request non-standard pricing from management. Quote-Level Discounts apply a single percentage across all lines. The consultant exam tests how to configure a tiered discount schedule, how price rules interact with manual discounts, and how approval thresholds are configured to route high-discount quotes.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Subscription Billing & Contract Management</p>
                <p>CPQ Billing manages the billing lifecycle for subscription products. Products with a Subscription Type (Renewable, Evergreen) generate subscription records on order. Billing Frequency and Billing Timing settings determine when invoices are generated (in advance/in arrears). Contract Start/End Dates govern the subscription period. Contract Amendments handle upgrades, downgrades, and add-ons to in-force subscriptions — generating proration credit for the remaining contract period. Renewal Quotes are automatically generated before contract expiry. The consultant exam tests how to configure a subscription product for monthly billing, how proration is calculated on a mid-term amendment, and how renewal automation is configured.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Revenue Recognition & ASC 606</p>
                <p>Revenue Cloud Revenue Recognition aligns with ASC 606 (IFRS 15) — revenue is recognized as performance obligations are satisfied. Revenue Schedules distribute invoice revenue across the service period. Recognition Methods: Ratable (even distribution over term), Event-Based (milestone-triggered), and one-time. Revenue Recognition Rules define the method for each product type. Finance Periods control accounting period boundaries. The Revenue Waterfall report shows deferred vs. recognized revenue by period. Adjustments and Credit Memos create correcting Revenue Recognition Transactions. The consultant exam tests how to configure revenue recognition for a scenario involving a mix of one-time professional services and recurring SaaS subscription revenue.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Quote-to-Cash Integration & CPQ Object Model</p>
                <p>The CPQ data model: Quote → Quote Lines → Orders → Order Products → Contracts → Subscriptions → Assets. The Generate Order action converts a contracted quote into an Order. The Order Products generate Subscriptions (if configured). Billing picks up Order Products to generate Invoices. Contracts store the term, auto-renew settings, and list of subscription records. The Asset object tracks active products on an account for amendment and renewal. Integration with ERP: invoices and payment data flow to finance systems via API or MuleSoft. The consultant exam tests the full Quote-to-Cash flow, how to troubleshoot a quote that isn&apos;t generating the correct order, and how assets feed back into renewal quotes.</p>
              </div>
            </div>
          </div>

          {/* How to Pass Scenario Strategy */}
          <div id="scenario-tips" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Pass the Salesforce Revenue Cloud Consultant Exam</h2>
            <p className="text-sm text-gray-600 mb-5">
              The Revenue Cloud Consultant exam tests your ability to design end-to-end quote-to-revenue solutions spanning CPQ and Billing. Focus on the contract lifecycle, amendment logic, revenue recognition triggers, and the interaction between CPQ and Billing objects.
            </p>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-1">CPQ-to-Billing Object Flow</p>
                <p>Know how a closed Opportunity activates a CPQ Contract, how the Contract generates Subscriptions and Assets, and how Billing Orders are created from Contracts. Understand the object relationship chain thoroughly.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Amendment &amp; Renewal Scenarios</p>
                <p>Amendments add, remove, or change products mid-term and create co-terminated subscriptions. Renewals auto-generate from contracts at term end. Know how proration is calculated for each scenario.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Revenue Recognition Options</p>
                <p>Understand Salesforce Billing revenue recognition rules: Revenue Schedules, how rev-rec triggers (billing date, order product date), and the accounting period configuration. Know how to handle ramp deals.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Invoice Generation &amp; Payment Processing</p>
                <p>Know how Invoice Runs generate invoices, how payment methods and terms are configured, and how the dunning process handles failed payments. Understand partial payments and credit notes.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Reporting &amp; Forecasting for Revenue</p>
                <p>Know how Revenue Cloud extends Sales Cloud forecasting with subscription revenue, ARR/MRR metrics, and churn reporting. Understand how CRM Analytics (Tableau CRM) is used for revenue analytics.</p>
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
