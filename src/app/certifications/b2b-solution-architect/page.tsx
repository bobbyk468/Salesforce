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
        <CertIntroParagraph slug={slug} />
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


          {/* Key Concepts */}
          <div id="key-concepts" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">B2B Solution Architect: Key Concepts for the Exam</h2>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-1">Solution Architecture Fundamentals</p>
                <p>B2B Solution Architects design end-to-end solutions spanning Sales Cloud, Service Cloud, Experience Cloud, B2B Commerce, and external systems. Architecture decisions must balance functional requirements, non-functional requirements (scalability, performance, security), and total cost of ownership. The Salesforce Well-Architected framework (Trusted, Easy, Adaptable) guides design trade-offs. Architects produce solution design documents, data models, integration diagrams, and governance plans. The exam presents business scenarios and tests which combination of Salesforce products and configuration approaches best meets the requirements — always favor declarative over code unless code is clearly necessary.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Multi-Cloud Data Architecture</p>
                <p>B2B scenarios frequently involve Account, Contact, Opportunity, Order, and custom product data shared across Sales, Service, and Commerce clouds. Data governance decisions include: which cloud is the system of record for each object, how to maintain data consistency, and how to handle conflicts. External Data Sources and Salesforce Connect allow external data to appear in Salesforce without ETL. Data Cloud unifies customer data across channels. Master Data Management (MDM) principles prevent duplicate records. The exam tests scenarios where data must flow between clouds — know the object model for each cloud and how standard sharing applies across Salesforce applications.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Integration Architecture Patterns</p>
                <p>Common B2B integration patterns: Point-to-Point (simple but brittle), Hub-and-Spoke (MuleSoft as integration hub), Event-Driven (Platform Events, Change Data Capture). MuleSoft API-led connectivity uses System, Process, and Experience API layers. Salesforce Connect enables OData-based external object integration. REST/SOAP callouts from Apex require Named Credentials and remote site settings. Bulk API handles high-volume data loads. Idempotent design prevents duplicate processing on retry. The exam tests which integration pattern fits a given latency, volume, and error-handling requirement — know the trade-offs between synchronous and asynchronous patterns.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Security & Compliance Design</p>
                <p>B2B solutions must address data residency, access control, and audit requirements. Shield Platform Encryption encrypts data at rest. Event Monitoring captures detailed user activity logs. Field Audit Trail retains field history beyond the standard 18 months. Customer-Managed Keys (Bring Your Own Key) give enterprises control over encryption keys. GDPR and CCPA compliance require Right to Be Forgotten capabilities and data retention policies. Health Check and Security Center provide org-level security scoring. The exam tests how to design security controls that meet enterprise compliance requirements without breaking Salesforce native functionality or Apex logic.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Governance, Change Management & Scalability</p>
                <p>Governance frameworks define how changes move from concept to production — org strategy (single org vs. multi-org), release management (change sets, CLI, CI/CD), and team structure (center of excellence). Sandbox strategy: scratch orgs for development, full sandboxes for UAT. Governor limits must be designed around — particularly SOQL limits in triggers, callout limits in async processes, and heap size in batch jobs. Scalability considerations include: large data volumes (skinny tables, custom indexes), high API throughput (Bulk API, async), and global deployments (multi-currency, multi-language). The exam tests the right governance approach for a given enterprise scale and deployment cadence.</p>
              </div>
            </div>
          </div>

          {/* How to Pass Scenario Strategy */}
          <div id="scenario-tips" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Pass the Salesforce B2B Solution Architect Exam</h2>
            <p className="text-sm text-gray-600 mb-5">
              The B2B Solution Architect exam tests multi-cloud architecture design for B2B scenarios. Focus on designing solutions that span Sales Cloud, Service Cloud, B2B Commerce, and CPQ for complex B2B customer experiences.
            </p>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-1">Multi-Cloud B2B Architecture</p>
                <p>Know how to design end-to-end B2B solutions spanning Sales Cloud (opportunity management), Service Cloud (support), B2B Commerce (self-service purchasing), and CPQ (complex configuration). Understand data flow between clouds.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">B2B Data Model Design</p>
                <p>Know how to model complex B2B relationships: Account hierarchies (parent/subsidiary), multiple contacts per account, multiple ship-to addresses, and how the B2B Commerce buyer/account model maps to Sales Cloud.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Integration Architecture for B2B</p>
                <p>Know common B2B integration scenarios: ERP integration for order fulfillment (SAP, Oracle), PIM integration for product data, and how Platform Events or MuleSoft orchestrate these integrations.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">CPQ for B2B Commerce</p>
                <p>Know how CPQ and B2B Commerce complement each other: CPQ for complex configured products (bundles, rules) vs. B2B Commerce for catalog-driven self-service purchasing. Know when to recommend each.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Customer 360 for B2B</p>
                <p>Know how to design a unified customer view for B2B: Account 360 dashboards, Relationship Maps, Account hierarchies, and how Data Cloud unifies B2B customer data from multiple systems.</p>
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
            <h2 id="next-certs-heading" className="text-base font-semibold text-gray-900 mb-3">Next Architect Certifications</h2>
            <p className="text-sm text-gray-700 mb-2">After this architect certification, progress toward CTA or other architect domains:</p>
            <ul className="space-y-2 text-sm">
              <li><Link href="/certifications/application-architect" className="text-salesforce-blue font-medium hover:underline">Application Architect</Link></li>
              <li><Link href="/certifications/system-architect" className="text-salesforce-blue font-medium hover:underline">System Architect</Link></li>
              <li><Link href="/certifications/technical-architect" className="text-salesforce-blue font-medium hover:underline">Technical Architect (CTA)</Link></li>
              <li><Link href="/architect-certification-path" className="text-salesforce-blue font-medium hover:underline">Architect certification path</Link></li>
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
