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
const PracticeQuestionsSection = dynamic(
  () => import('@/components/PracticeQuestionsSection'),
  {
    ssr: false,
    loading: () => (
      <div id="practice-questions" className="mt-12 min-h-[440px] w-full" aria-hidden="true" />
    ),
  }
)

const slug = 'b2c-solution-architect'
export async function generateMetadata() {
  return getCertMetadata(slug)
}

const sampleQuestions = [
  { question: "What does a B2C Solution Architect do?", options: ["Only coding", "Architect and drive multi-cloud solutions that deliver business value for the customer (B2C focus)", "Only reporting", "Only Slack"], correctAnswer: 1, explanation: "Certified B2C Solution Architects have knowledge, skills, and experience architecting and driving multi-cloud solutions that deliver business value for the customer." },
  { question: "What does B2C stand for?", options: ["Back to Customer", "Business to Consumer", "Build to Order", "Brand to Consumer"], correctAnswer: 1, explanation: "B2C stands for Business to Consumer." },
  { question: "Which Salesforce products are often part of B2C solutions?", options: ["Only Marketing Cloud", "B2C Commerce, Marketing Cloud, Service Cloud, and more", "Only Service Cloud", "Only Slack"], correctAnswer: 1, explanation: "B2C solutions often include B2C Commerce, Marketing Cloud, Service Cloud, and more." },
  { question: "What does 'drive multi-cloud solutions' mean?", options: ["Only one product", "Leading and architecting solutions across multiple Salesforce products", "Only Heroku", "Only MuleSoft"], correctAnswer: 1, explanation: "It means leading and architecting solutions across multiple Salesforce products." },
  { question: "Which role typically pursues B2C Solution Architect?", options: ["Marketers", "Architects and senior consultants designing B2C solutions", "Sales only", "Designers only"], correctAnswer: 1, explanation: "Architects and senior consultants designing B2C solutions pursue this credential." },
  { question: "What does B2C Commerce storefront provide?", options: ["B2B only", "Consumer-facing storefront for e-commerce", "Service portal only", "Partner portal only"], correctAnswer: 1, explanation: "B2C Commerce provides consumer-facing e-commerce storefronts." },
  { question: "Which integration connects B2C Commerce to Marketing Cloud?", options: ["No integration", "Einstein Personalization, Email, and CDP", "Slack only", "Service Cloud only"], correctAnswer: 1, explanation: "B2C integrates with Marketing Cloud for personalization and email." },
  { question: "What does headless commerce enable for B2C?", options: ["Only full-stack", "API-driven storefront with flexible front-end (e.g., PWA)", "Only monolith", "Only backend"], correctAnswer: 1, explanation: "Headless commerce separates front-end from commerce APIs." },
  { question: "Which B2C Commerce feature supports product recommendations?", options: ["Manual only", "Einstein Personalization and rules-based recommendations", "No recommendations", "Static only"], correctAnswer: 1, explanation: "Einstein and rules support product recommendations." },
  { question: "What is the purpose of B2C Commerce order management integration?", options: ["Only capture", "Fulfillment, inventory, and order status sync", "Only display", "Only email"], correctAnswer: 1, explanation: "Order management integration handles fulfillment and sync." },
  { question: "Which consideration applies to B2C multi-cloud architecture?", options: ["Single product only", "Customer data flow, identity, and experience consistency", "Ignore identity", "No consistency"], correctAnswer: 1, explanation: "Multi-cloud requires data flow, identity, and experience consistency." },
  { question: "What does B2C Solution Architect drive?", options: ["Only development", "End-to-end B2C solution design across Commerce, Marketing, Service", "Only UI", "Only reports"], correctAnswer: 1, explanation: "Architects drive end-to-end B2C solution design." },
  { question: "Which B2C Commerce deployment model supports scalability?", options: ["Single instance only", "Cloud-hosted with auto-scaling", "On-prem only", "No scaling"], correctAnswer: 1, explanation: "B2C Commerce cloud supports auto-scaling." },
  { question: "What is the role of Service Cloud in B2C solutions?", options: ["No role", "Customer service, case management, and order support", "Marketing only", "Commerce only"], correctAnswer: 1, explanation: "Service Cloud supports post-purchase service and support." },
  { question: "Which best practice applies to B2C solution design?", options: ["Ignore performance", "Customer journey alignment, performance, and mobile-first", "Desktop only", "No mobile"], correctAnswer: 1, explanation: "Design for customer journey, performance, and mobile." },
]

export default function B2CSolutionArchitectPage() {
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
            
            <CertificationCard slug={slug} title={slugToDisplayName(slug)} code="B2C Solution Architect" description="Certified B2C Solution Architects have knowledge, skills, and experience architecting and driving multi-cloud solutions that deliver business value for the customer." examDetails={{ questions: 60, passingScore: '~68%', duration: '120 min', cost: '$400' }} topics={['B2C Commerce', 'Multi-Cloud', 'Solution Design', 'Marketing Cloud', 'Best Practices']}
            examSections={examSections}
            h1Text={getCertH1Text(slug)}
          examWeightageHeading={getCertExamWeightageHeading(slug)}
          />

          <div id="exam-prep">
            <ExamPrepContent slug={slug} />
          </div>


          {/* Key Concepts */}
          <div id="key-concepts" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">B2C Solution Architect: Key Concepts for the Exam</h2>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-1">Solution Design for B2C Retail</p>
                <p>B2C Solution Architects design solutions spanning Commerce Cloud (storefront), Marketing Cloud (email/journey), Service Cloud (support), and Order Management (fulfillment). The architect balances business requirements (conversion, retention, support cost) against technical constraints (API limits, data residency, licensing). Salesforce Customer 360 provides a unified identity across clouds via Marketing Cloud Personalization and Data Cloud. The exam presents complex multi-cloud business scenarios and tests which combination of products, connectors, and configuration choices best meets the requirements — know the capabilities and limits of each cloud.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Multi-Cloud Integration Patterns</p>
                <p>Key B2C connectors: Commerce to Marketing Cloud Connector (syncs shopper data and triggers journeys), Commerce to Service Cloud Connector (links shopper profiles to cases), Order Management Connector (syncs orders to Salesforce OMS). Data flows: purchase events → Marketing Cloud → re-engagement journeys; support cases → Service Cloud → order lookup. Marketing Cloud Connect links core Salesforce objects to Marketing Cloud data extensions. Salesforce CDP/Data Cloud unifies identity across all clouds. The architect must know which connector to use, its data latency, and what to do when a connector doesn&apos;t support a required use case (custom integration via API).</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Data Architecture & Customer Identity</p>
                <p>B2C data architecture centers on the shopper profile: anonymous browser → registered account → unified customer identity. Commerce Cloud Customer record (online profile) maps to Marketing Cloud subscriber and Service Cloud Contact. Duplicate management prevents fragmented profiles when the same customer shops across channels. External ID fields align records across systems. Data Cloud resolves identity using deterministic (email match) and probabilistic rules. GDPR and CCPA compliance requires consent management, preference centers, and Right to Be Forgotten across all connected clouds. The exam tests how identity flows across clouds and what an architect designs to ensure a single coherent customer view.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Order Management & Fulfillment Architecture</p>
                <p>Salesforce Order Management (SOM) handles post-purchase orchestration: order capture, payment settlement, fulfillment routing, returns, and refunds. The Order Summary object is the central record in SOM. Fulfillment flows route orders to the correct warehouse or drop-shipper based on inventory availability and shipping cost. Change Orders handle post-purchase modifications. Distributed Order Management (DOM) optimizes fulfillment location selection. Integration with WMS (Warehouse Management Systems) and ERP happens via API or MuleSoft. The exam tests how an architect designs the order-to-fulfillment flow, handles partial fulfillment scenarios, and integrates SOM with external warehouse systems.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Non-Functional Requirements & Governance</p>
                <p>B2C solutions must be designed for scale: peak traffic (Black Friday), global reach (multi-language, multi-currency, multi-region), and high availability (99.99% uptime SLA). Caching strategy across CDN, application, and browser layers reduces load time and infrastructure cost. Disaster recovery design defines RPO (Recovery Point Objective) and RTO (Recovery Time Objective). Release management for B2C spans multiple clouds — changes must be coordinated across Commerce Cloud code deployments, Marketing Cloud journey updates, and Salesforce metadata deployments. The exam tests how an architect balances speed to market against risk, and how to structure a release governance model for a multi-cloud B2C platform.</p>
              </div>
            </div>
          </div>

          {/* How to Pass Scenario Strategy */}
          <div id="scenario-tips" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Pass the Salesforce B2C Solution Architect Exam</h2>
            <p className="text-sm text-gray-600 mb-5">
              The B2C Solution Architect exam tests multi-cloud architecture for B2C customer experiences. Focus on designing solutions spanning Commerce Cloud, Marketing Cloud, Service Cloud, and CDP/Data Cloud for seamless customer journeys.
            </p>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-1">Multi-Cloud B2C Journeys</p>
                <p>Know how to design customer journeys that span SFCC (shopping), Marketing Cloud (engagement), Service Cloud (support), and Data Cloud (unified profile). Understand the data flows and integration touchpoints between each cloud.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Identity &amp; Profile Unification</p>
                <p>Know how Customer 360 identity unification works across B2C channels: matching on email, mobile, cookie, and loyalty ID. Understand how Data Cloud resolves identity across SFCC, Marketing Cloud, and Service Cloud.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Commerce-to-Marketing Integration</p>
                <p>Know the integration between SFCC and Marketing Cloud: abandoned cart triggers, post-purchase confirmation emails, and how SFCC transaction data flows to Marketing Cloud for segmentation and retargeting.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Order Management Integration</p>
                <p>Know how SFCC orders integrate with Salesforce Order Management: the Order On Behalf Of (OBO) pattern, order status sync, return/refund flows, and how Service Cloud agents access order data.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Architecture Trade-off Decisions</p>
                <p>Solution Architect questions test trade-off reasoning: when to use a shared Salesforce org vs. separate, when to use Data Cloud vs. Marketing Cloud audiences for segmentation, and how to balance performance vs. data freshness.</p>
              </div>
            </div>
          </div>

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
