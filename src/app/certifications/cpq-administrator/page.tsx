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
      "To set list prices across all price books",
      "To automatically add, remove, hide, or validate products on a quote based on defined conditions",
      "To assign products to price books and account groups",
      "To track discount approval workflows for the sales manager"
    ],
    correctAnswer: 1,
    explanation: "Product Rules automatically add, remove, or configure products on a quote based on conditions you define — including Alert, Validation, Selection, and Filter rule types."
  },
  {
    question: "Which CPQ feature applies custom pricing logic to override list prices based on conditions?",
    options: [
      "Price Rules",
      "Product Options",
      "Quote Templates",
      "Discount Schedules"
    ],
    correctAnswer: 0,
    explanation: "Price Rules evaluate conditions and inject values into quote line fields — enabling dynamic pricing based on customer segment, product combination, quantity, or contract terms."
  },
  {
    question: "What is a Bundle in Salesforce CPQ?",
    options: [
      "A report type that groups quote lines by product family",
      "A parent product with optional or required child products (product options) that are configured and priced together",
      "A discount schedule that applies volume-based pricing to a product",
      "A quote template that combines multiple document sections"
    ],
    correctAnswer: 1,
    explanation: "A Bundle is a product that contains optional or required child products (product options) that can be configured together. Bundles are used for complex product configurations such as hardware + software + services."
  },
  {
    question: "What is a Discount Schedule in Salesforce CPQ?",
    options: [
      "An approval process that routes large discounts to the sales director for authorisation",
      "A tiered pricing table that automatically applies volume-based or term-based discounts based on quantity ranges",
      "A quote template section that displays discount terms in the PDF output",
      "A Price Rule that overrides list price with a fixed promotional price"
    ],
    correctAnswer: 1,
    explanation: "Discount Schedules apply tier-based discounts as quantity or term increases — for example, 5% off for 1–10 units, 10% off for 11–50 units. They are associated with a product and applied automatically when the quote meets threshold criteria.",
  },
  {
    question: "What is the Salesforce CPQ Quote Line Editor (QLE)?",
    options: [
      "An Apex class that validates quote line totals before a quote is submitted for approval",
      "The interactive grid within the CPQ Quote record where reps configure products, set quantities, apply discounts, and view pricing in real time before generating the document",
      "A Visualforce page used to override the standard Quote PDF template with custom branding",
      "An admin tool for defining the field layout of the Quote object detail page"
    ],
    correctAnswer: 1,
    explanation: "The Quote Line Editor is the central CPQ workspace for sales reps — it presents products, bundles, quantities, pricing, and discount controls in a grid, and recalculates totals in real time as changes are made.",
  },
  {
    question: "How does Salesforce CPQ handle subscription products at renewal time?",
    options: [
      "Subscription products must be manually re-added to a new quote each renewal period",
      "CPQ automatically generates a Renewal Opportunity and Renewal Quote pre-populated with the subscribed products, quantities, and terms from the original contract",
      "Renewals are managed exclusively in Salesforce Billing and are not a CPQ function",
      "CPQ sends an email notification to the account manager who must manually clone the original quote"
    ],
    correctAnswer: 1,
    explanation: "When a CPQ Contract is activated, CPQ tracks subscription terms and automatically creates a Renewal Opportunity and Quote at the end of the term — pre-populated with the existing products, enabling seamless renewal management.",
  },
  {
    question: "What is the purpose of a Quote Template in Salesforce CPQ?",
    options: [
      "To define the pricing calculation order for Price Rules on a quote",
      "To control the layout, branding, and sections of the generated CPQ quote PDF document sent to customers",
      "To set default field values when a new Quote record is created from an Opportunity",
      "To define which products are available to a specific sales team based on their profile"
    ],
    correctAnswer: 1,
    explanation: "Quote Templates define the visual structure of the generated CPQ document — including header/footer, product line columns, terms and conditions, and custom branded sections. Multiple templates can be configured for different markets or product lines.",
  },
  {
    question: "What is an Advanced Approval in Salesforce CPQ?",
    options: [
      "A standard Salesforce Approval Process adapted to work with CPQ Quote records",
      "A CPQ-native approval framework that supports complex routing — including multi-level approvals, approval chains based on discount thresholds, delegated approvers, and auto-approval rules",
      "An Einstein AI feature that predicts whether a discount will be approved based on historical data",
      "A Quote Template section that displays a signature block for customer approval"
    ],
    correctAnswer: 1,
    explanation: "CPQ Advanced Approvals provides more sophisticated approval routing than standard Salesforce approvals — supporting threshold-based triggers (e.g., discount > 20%), approval chains, delegated approvers, and automatic approval for within-policy quotes.",
  },
  {
    question: "What is the relationship between an Opportunity and a CPQ Contract?",
    options: [
      "Contracts are created automatically when an Opportunity reaches the Prospecting stage",
      "After a quote is marked as Primary and the Opportunity is Closed Won, CPQ can generate a Contract from the Opportunity to track subscription terms, renewals, and amendments",
      "CPQ Contracts replace Opportunities in the sales process and are used for all deal tracking",
      "Contracts are only created when Salesforce Billing is installed alongside CPQ"
    ],
    correctAnswer: 1,
    explanation: "CPQ Contracts are created from Closed Won Opportunities to track active subscriptions. The Contract records the products, quantities, start/end dates, and pricing — forming the basis for renewals and amendments.",
  },
  {
    question: "What is a Lookup Query in Salesforce CPQ Price Rules?",
    options: [
      "A SOQL query written in Apex that retrieves discounts from an external pricing database",
      "A CPQ feature that queries a custom Price Lookup object table to inject a value (such as a discount percentage or price override) into a Price Rule action field based on matching criteria",
      "A Flow element that looks up a related account's contract terms before applying a price",
      "An API call to an external ERP system to retrieve real-time product costs"
    ],
    correctAnswer: 1,
    explanation: "Lookup Queries allow Price Rules to retrieve values from CPQ's custom Price Lookup Tables — enabling complex pricing scenarios such as matrix pricing based on customer tier and product family without custom code.",
  },
  {
    question: "Which CPQ object tracks the products and quantities from a closed-won deal for subscription management?",
    options: [
      "Quote Line Group",
      "Contracted Price",
      "Subscription",
      "Asset"
    ],
    correctAnswer: 2,
    explanation: "Subscription records are created from CPQ Quote Lines when a Contract is activated — tracking each subscribed product, quantity, pricing, and term dates for ongoing lifecycle management and renewal generation.",
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

          {/* Key Concepts */}
          <div id="key-concepts" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">CPQ Administrator: Key Concepts for the Exam</h2>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-1">Product Rules vs Price Rules</p>
                <p><strong>Product Rules</strong> control which products appear on a quote — they add, remove, hide, validate, or alert based on product combinations. Types: Alert, Validation, Selection, Filter. <strong>Price Rules</strong> control how products are priced — they evaluate conditions and inject values into quote line fields. The exam frequently tests which rule type applies to a given quoting scenario.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Bundles and Product Options</p>
                <p>A Bundle is a parent product with child Product Options. Options can be required, optional, or pre-selected. Option types control visibility and selectability in the Quote Line Editor. Feature groups organise options within a bundle (e.g., Software, Hardware, Support). Know how option types (Component, Optional, Required, Recommended) affect the configuration experience.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Discounting: Schedules, Contracted Prices, and Approvals</p>
                <p><strong>Discount Schedules</strong> apply volume or term-based tiered discounts automatically. <strong>Contracted Prices</strong> lock negotiated prices for specific products per account, overriding list price on subsequent quotes. <strong>Advanced Approvals</strong> route discount requests through configurable chains — with threshold-based triggers (e.g., any discount &gt;20% requires manager approval) and automatic approval for within-policy quotes.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">CPQ and the Quote-to-Cash Lifecycle</p>
                <p>CPQ fits into the Quote-to-Cash process: Opportunity → Quote (built in QLE) → Quote Document (PDF via Quote Template) → Contract (created when Opportunity is Closed Won) → Subscription records (track active products and terms) → Renewal Opportunity (auto-generated at term end). Know which object stores which information at each stage.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Subscription Products and Renewals</p>
                <p>Products can be set as Subscription or One-Time. Subscription products create Subscription records when a Contract is activated. At term end, CPQ generates a Renewal Opportunity and Quote populated with existing subscriptions. Amendments create a new Quote from the active Contract to add, remove, or change products mid-term. Understand the difference between Renewal and Amendment flows.</p>
              </div>
            </div>
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
