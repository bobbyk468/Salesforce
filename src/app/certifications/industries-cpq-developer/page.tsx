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

const slug = 'industries-cpq-developer'
export async function generateMetadata() {
  return getCertMetadata(slug)
}

const sampleQuestions = [
  {
    question: "Which industries does the Industries CPQ certification focus on?",
    options: ["Retail only", "Communications, Media, and Energy & Utilities", "Healthcare only", "Financial Services only"],
    correctAnswer: 1,
    explanation: "Industries CPQ covers Configure, Price, Quote solutions for Communications, Media, and Energy & Utilities clouds.",
  },
  {
    question: "What is a key difference between standard CPQ and Industries CPQ?",
    options: ["No difference", "Industry-specific product and pricing models (e.g., subscriptions, usage)", "Industries CPQ is for B2C only", "Industries CPQ does not support quotes"],
    correctAnswer: 1,
    explanation: "Industries CPQ extends CPQ with industry-specific models for subscriptions, usage-based pricing, and complex product structures.",
  },
  {
    question: "Which Salesforce product is often used with Industries CPQ for telecom?",
    options: ["Marketing Cloud only", "Communications Cloud", "Heroku only", "Commerce Cloud only"],
    correctAnswer: 1,
    explanation: "Communications Cloud (part of Industries) works with CPQ for telecom use cases.",
  },
  {
    question: "What role does a Industries CPQ Developer typically fulfill?",
    options: ["Email marketing", "Developing and customizing CPQ applications for industry verticals", "Slack configuration", "Data migration only"],
    correctAnswer: 1,
    explanation: "They develop Industries CPQ applications for Communications, Media, and Energy & Utilities.",
  },
  {
    question: "Which type of pricing is commonly modeled in Energy & Utilities CPQ?",
    options: ["One-time only", "Usage-based, tiered, and time-of-use pricing", "Fixed fee only", "No pricing"],
    correctAnswer: 1,
    explanation: "Energy & Utilities often require usage-based, tiered, and time-of-use pricing models.",
  },
  {
    question: "Which Industries CPQ product model supports subscriptions?",
    options: [
      "One-time only",
      "Subscription and usage-based product modeling",
      "Fixed only",
      "No modeling"
    ],
    correctAnswer: 1,
    explanation: "Industries CPQ supports subscription and usage-based models."
  },
  {
    question: "What does Industries CPQ scripting extend?",
    options: [
      "Only UI",
      "Product configuration, pricing, and quote logic",
      "Only reports",
      "Only dashboards"
    ],
    correctAnswer: 1,
    explanation: "Scripting extends configuration, pricing, and quote logic."
  },
  {
    question: "Which Communications Cloud object supports CPQ?",
    options: [
      "Lead only",
      "Product, offer, and service catalog",
      "Opportunity only",
      "Campaign only"
    ],
    correctAnswer: 1,
    explanation: "Product, offer, and catalog support Communications CPQ."
  },
  {
    question: "What does Media Cloud CPQ support?",
    options: [
      "Only print",
      "Ad inventory, rights, and campaign pricing",
      "Only email",
      "Only social"
    ],
    correctAnswer: 1,
    explanation: "Media Cloud CPQ supports ad inventory and rights pricing."
  },
  {
    question: "Which integration is common for Industries CPQ?",
    options: [
      "Slack only",
      "Billing, ERP, and industry-specific systems",
      "Marketing Cloud only",
      "Service Cloud only"
    ],
    correctAnswer: 1,
    explanation: "Industries CPQ integrates with billing and ERP."
  },
  {
    question: "What does Industries CPQ customization involve?",
    options: [
      "Only UI",
      "Product model, pricing rules, and configuration attributes",
      "Only reports",
      "Only dashboards"
    ],
    correctAnswer: 1,
    explanation: "Customization involves product model and pricing rules."
  },
  {
    question: "Which pricing type does Energy & Utilities CPQ support?",
    options: [
      "Fixed only",
      "Time-of-use, demand charges, and tiered rates",
      "One-time only",
      "No pricing"
    ],
    correctAnswer: 1,
    explanation: "Energy & Utilities supports time-of-use and tiered pricing."
  },
  {
    question: "What is the purpose of Industries CPQ product modeling?",
    options: [
      "To replace CPQ",
      "To represent industry-specific products and bundles",
      "To send emails",
      "To create reports"
    ],
    correctAnswer: 1,
    explanation: "Product modeling represents industry-specific products."
  },
  {
    question: "Which best practice applies to Industries CPQ development?",
    options: [
      "Ignore industry",
      "Align with industry processes and test configuration flows",
      "No testing",
      "Single product only"
    ],
    correctAnswer: 1,
    explanation: "Align with industry processes and test flows."
  },
  {
    question: "What does Industries CPQ Developer need to understand?",
    options: [
      "Only Apex",
      "Industry CPQ data model, pricing, and scripting",
      "Only UI",
      "Only reports"
    ],
    correctAnswer: 1,
    explanation: "Developers need industry CPQ data model and scripting knowledge."
  },
]

export default function IndustriesCPQDeveloperPage() {
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
            code="Industries CPQ"
            description="Certified Industries CPQ Developers understand how to develop Industries CPQ (Configure, Price, Quote) applications for the Salesforce Communications, Media, and Energy & Utilities Clouds."
            examDetails={{ questions: 60, passingScore: '~65%', duration: '105 min', cost: '$200' }}
            topics={['Industries CPQ', 'Communications Cloud', 'Media Cloud', 'Energy & Utilities', 'Product Modeling', 'Pricing', 'Quoting', 'Integrations', 'Customization', 'Best Practices']}
            examSections={examSections}
            h1Text={getCertH1Text(slug)}
          examWeightageHeading={getCertExamWeightageHeading(slug)}
          />

          <div id="exam-prep">
            <ExamPrepContent slug={slug} />
          </div>


          {/* Key Concepts */}
          <div id="key-concepts" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Industries CPQ Developer: Key Concepts for the Exam</h2>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-1">Product Catalog & Configuration</p>
                <p>Industries CPQ (formerly Vlocity CPQ) uses a TM Forum-aligned product catalog. Product Specifications define the attributes and structure of a product. Product Offerings are the sellable versions with pricing. Product Bundles group related offerings (e.g., a broadband + voice + TV bundle). Attributes define configurable options — data cap, contract term, device color. Configuration Rules enforce valid attribute combinations and auto-set dependent attributes. Context Rules make product availability conditional on account type, geography, or existing products. The developer exam tests how to configure attribute rules, implement context rules in declarative logic, and extend configuration behavior with custom Apex when rules are insufficient.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Pricing Rules & Calculation Framework</p>
                <p>Pricing in Industries CPQ uses a layered calculation framework. Price Lists define base prices for products and attributes. Pricing Procedures define the sequence of pricing steps — list price → adjustments → promotions → taxes → total. Pricing Elements are individual steps in the procedure (e.g., apply 10% loyalty discount). Pricing Variables store intermediate calculation results. Custom Pricing Apex classes implement complex pricing logic not achievable declaratively. Price Waterfall shows the full breakdown of how the final price was calculated. The developer exam tests how to implement a custom pricing step, how to debug a price calculation using the price waterfall, and how pricing procedures interact with multi-product bundles.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Quote & Order Lifecycle</p>
                <p>The Industries CPQ quote lifecycle: Product Selection → Configuration → Pricing → Quote → Order → Fulfillment. Decomposition breaks complex bundled products into fulfillable line items for downstream provisioning systems. Order Items map to fulfillment line items with action codes (Add, Change, Remove, Suspend). Contract integration manages subscription amendments — when a customer changes an in-force service, a Change Order is created with the correct action codes. Quote versioning supports multiple concurrent scenarios. The developer exam tests the decomposition logic, how to configure action codes for amendments, and how to implement custom validation before order submission.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Integration & API Patterns</p>
                <p>Industries CPQ exposes REST APIs for catalog queries, configuration, pricing, and order submission. The CPQ API is used by external systems (self-service portals, partner tools) to perform quoting and ordering programmatically. Asset-Based Ordering (ABO) APIs query existing customer assets to determine available change operations. Integration with OSS/BSS systems (provisioning, billing) uses the fulfillment API to push decomposed order items. The developer exam tests the correct API endpoint for a given operation, how to authenticate and call the CPQ API from an external system, and how to handle API error responses for failed configuration or pricing requests.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Customization: Apex, LWC & OmniStudio</p>
                <p>Industries CPQ customization uses: Custom Apex for complex business logic (configuration rules, pricing steps, order validation), LWC components for custom UI within the CPQ cart or checkout, and OmniStudio (FlexCards, OmniScripts) for guided selling experiences. Integration Procedures (OmniStudio) handle multi-step API orchestration. DataRaptors transform data between Salesforce and external systems within CPQ flows. The developer exam tests which customization tool to use for a given requirement — declarative rules first, Apex for complex logic, LWC for custom UI, and OmniStudio for guided workflows. Know the OmniStudio activation sequence: DataRaptor → Integration Procedure → OmniScript.</p>
              </div>
            </div>
          </div>
          <div id="practice-questions" className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{getCertPracticeQuestionsHeading(slug)}</h2>
            <p className="text-gray-600 mb-8">{getPracticeQuestionsIntro(sampleQuestions.length)}</p>
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
