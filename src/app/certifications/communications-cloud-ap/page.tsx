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

const slug = 'communications-cloud-ap'
export async function generateMetadata() {
  return getCertMetadata(slug)
}

const sampleQuestions = [
  { question: "What does Communications Cloud AP validate?", options: ["Only basics", "Knowledge, skills, and experience to discover, design, plan, and deliver business value through Communications Cloud", "Only reporting", "Only Slack"], correctAnswer: 1, explanation: "Accredited Communications Cloud Professionals have knowledge, skills, and experience to discover, design, plan, and deliver business value through Communications Cloud." },
  { question: "Which industry does Communications Cloud serve?", options: ["Retail only", "Telecommunications and media (e.g., telecom operators)", "Manufacturing only", "Healthcare only"], correctAnswer: 1, explanation: "Communications Cloud serves telecommunications and media industries." },
  { question: "What is a key activity for a Communications Cloud Professional?", options: ["Only coding", "Discovering, designing, planning, and delivering business value", "Only reporting", "Only email"], correctAnswer: 1, explanation: "They discover, design, plan, and deliver business value." },
  { question: "Which role typically pursues Communications Cloud AP?", options: ["Marketers", "Partners and implementers in telecom/media", "Sales only", "Designers only"], correctAnswer: 1, explanation: "Partners and implementers in telecom/media pursue this credential." },
  { question: "What does Communications Cloud often integrate with?", options: ["Only Marketing Cloud", "Industries CPQ, Billing, and telecom systems", "Only Service Cloud", "Only Slack"], correctAnswer: 1, explanation: "It integrates with Industries CPQ, Billing, and telecom systems." },
  { question: "What is Industries CPQ in telecom context?", options: ["Standard CPQ only", "CPQ tailored for telecom (products, bundles, pricing for telecom)", "Marketing Cloud", "Slack"], correctAnswer: 1, explanation: "Industries CPQ extends CPQ for telecom product catalogs." },
  { question: "Which activity is part of 'discover' for Communications Cloud?", options: ["Only deployment", "Gathering requirements and understanding telecom workflows", "Only coding", "Only reporting"], correctAnswer: 1, explanation: "Discover = requirements gathering and workflow analysis." },
  { question: "What does 'deliver business value' mean for Communications Cloud?", options: ["Only shipping", "Implementing solutions that drive outcomes for telecom customers", "Only reports", "Only dashboards"], correctAnswer: 1, explanation: "Deliver = implement solutions that achieve customer outcomes." },
  { question: "Which Salesforce product supports telecom billing?", options: ["Marketing Cloud only", "Salesforce Billing and Industries Billing", "Service Cloud only", "Slack only"], correctAnswer: 1, explanation: "Industries Billing supports telecom billing workflows." },
  { question: "What is a key consideration when designing Communications Cloud solutions?", options: ["Colors only", "Product catalog complexity, rating, and billing integration", "Only UI", "Only reports"], correctAnswer: 1, explanation: "Catalog, rating, and billing are core telecom design considerations." },
  { question: "Why is the telecom industry unique for CRM?", options: ["It isn't", "Complex products, subscriptions, and regulatory requirements", "Only standard objects", "Only simple pricing"], correctAnswer: 1, explanation: "Telecom has complex products, subscriptions, and regulations." },
  { question: "What does 'plan' mean in Communications Cloud context?", options: ["Only schedules", "Planning the implementation approach and solution roadmap", "Only coding", "Only deployment"], correctAnswer: 1, explanation: "Plan = implementation approach and roadmap." },
  { question: "What does charging mean in telecom billing?", options: ["Only invoicing", "Calculating and applying charges for usage and products based on rating", "Only payment collection", "Only refunds"], correctAnswer: 1, explanation: "Charging applies rated amounts to customer accounts; rating calculates the charge." },
  { question: "What is rating in telecom?", options: ["A report", "Calculating charges for usage and products", "A workflow only", "An object only"], correctAnswer: 1, explanation: "Rating calculates charges for telecom products and usage." },
  { question: "Which industries does Communications Cloud serve beyond telecom?", options: ["None", "Media and other communication-intensive industries", "Retail only", "Manufacturing only"], correctAnswer: 1, explanation: "Communications Cloud also serves media and similar industries." },
]

export default function CommunicationsCloudAPPage() {
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
            
            <CertificationCard slug={slug} title={slugToDisplayName(slug)} code="AP" description="Accredited Communications Cloud Professionals have knowledge, skills, and experience to discover, design, plan, and deliver business value to customers through Communications Cloud." examDetails={{ questions: 60, passingScore: '~65%', duration: '90 min', cost: '$100' }} topics={['Communications Cloud', 'Telecom', 'Discovery', 'Design', 'Delivery', 'Best Practices']}
            examSections={examSections}
            h1Text={getCertH1Text(slug)}
          examWeightageHeading={getCertExamWeightageHeading(slug)}
          />

          <div id="exam-prep">
            <ExamPrepContent slug={slug} />
          </div>


          {/* Key Concepts */}
          <div id="key-concepts" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Communications Cloud AP: Key Concepts for the Exam</h2>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-1">Product Catalog & Offer Management</p>
                <p>Communications Cloud uses TM Forum-aligned data models. The Product Catalog manages the hierarchy: Product Specification → Product Offering → Bundled Offering. Product Attributes define configurable options (plan type, data cap, contract term). Qualification Rules control which offerings are available to a customer based on account type, location, or existing subscriptions. Pricing Tiers apply usage-based or tiered pricing to product offerings. The AP exam tests how to configure a product offering for a telecommunications use case, including bundling mobile, broadband, and TV services into a single offer.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Industries CPQ for Telco</p>
                <p>Industries CPQ (Configure, Price, Quote) in Communications Cloud handles complex telco quoting. Configuration Rules enforce product compatibility (e.g., a 5G plan requires a compatible device). Pricing Procedures calculate the total price including promotions, discounts, and one-time vs. recurring charges. Promotions apply time-limited discounts at the order or line level. Decomposition breaks complex product bundles into fulfillable line items for downstream systems. The exam tests how to configure CPQ for a scenario with bundled products, promotional pricing, and device+plan combinations — know the difference between attribute-based configuration and separate product selection.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Order Management & Orchestration</p>
                <p>Orders in Communications Cloud follow the TM Forum order lifecycle: Order Received → Feasibility → Order Accepted → Provisioning → Order Completed. Order Orchestration uses Flow Orchestration or a BPM tool to coordinate provisioning steps across fulfillment systems. Fallout Management handles failed provisioning steps — the exam tests retry logic and manual intervention workflows. Change Orders handle service modifications (upgrades, downgrades, add-ons). Cancellation management flows handle both pre-provisioning and post-provisioning cancellations. The exam tests the complete order lifecycle and how to design an orchestration that handles common telco provisioning failure scenarios.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Contract & Subscription Lifecycle</p>
                <p>Contracts in Communications Cloud manage the term commitment for services — start date, end date, and early termination fees. Auto-Renewal rules trigger renewal or renegotiation workflows before contract expiry. Contract amendments modify in-force services and generate change orders. Asset-Based Ordering (ABO) tracks each active service as an asset on the customer account. The Asset Object in Communications Cloud records the current state of a provisioned service. The exam tests how contract terms flow into billing, how ABO manages the lifecycle of a service from provisioning through cancellation, and how to design amendment workflows.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Partner Ecosystem & Channel Management</p>
                <p>Communications Cloud supports indirect sales through a partner channel — resellers and agents sell services on behalf of the operator. Partner Community provides the sales and ordering interface for channel partners. Partner Accounts and Partner Users manage access and visibility. Revenue sharing and commission tracking are handled through channel management capabilities. The exam tests how to configure a partner order flow, what data the partner can see vs. what is hidden (margin, cost), and how to design the security model so that partners can only access their own customers and orders.</p>
              </div>
            </div>
          </div>

          {/* How to Pass Scenario Strategy */}
          <div id="scenario-tips" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Pass the Salesforce Communications Cloud Accredited Professional Exam</h2>
            <p className="text-sm text-gray-600 mb-5">
              The Communications Cloud AP exam tests configuration of Vlocity/Industries solutions for communications service providers (CSPs). Focus on product catalog, CPQ, order management, and the CSP-specific data model.
            </p>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-1">Communications Cloud Data Model</p>
                <p>Know the CSP-specific objects: Account (residential/business), Service Account, Service Point, Subscription, Product (service plans), and how they map to standard Salesforce objects.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Industries CPQ for Telecom</p>
                <p>Know how Industries CPQ manages telecom product configuration: voice, data, and value-added services as products with attributes (data allowance, speeds). Understand bundled plan configuration.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Order Management for CSPs</p>
                <p>Know the telecom order lifecycle: order capture, decomposition (splitting into work items), fallout management, and order tracking. Understand how service activation triggers downstream provisioning.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Customer 360 for Telecom</p>
                <p>Know how to configure the Communications Cloud customer view: account hierarchy for business customers, service account billing, usage data display, and churn prediction with Einstein.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">OmniStudio in Communications Cloud</p>
                <p>Know how Communications Cloud uses OmniStudio (FlexCards, OmniScripts) for agent desktop and self-service portal experiences. Understand standard Communication Cloud OmniScripts like &apos;Add a Line.&apos;</p>
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
