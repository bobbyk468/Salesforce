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

const slug = 'energy-utilities-ap'
export async function generateMetadata() {
  return getCertMetadata(slug)
}

const sampleQuestions = [
  { question: "What does Energy and Utilities Cloud AP validate?", options: ["Only basics", "Fundamental knowledge, skills, and experience to deliver business value through Energy and Utilities Cloud", "Only reporting", "Only Slack"], correctAnswer: 1, explanation: "Accredited Energy and Utilities Cloud Professionals have fundamental knowledge, skills, and experience to deliver business value through Energy and Utilities Cloud." },
  { question: "Which industry does Energy and Utilities Cloud serve?", options: ["Retail only", "Energy and utilities (e.g., electric, gas, water)", "Healthcare only", "Financial services only"], correctAnswer: 1, explanation: "Energy and Utilities Cloud serves energy and utilities industries." },
  { question: "What is a key use case for Energy and Utilities Cloud?", options: ["Only email", "Metering, billing, and customer engagement for utilities", "Only CPQ", "Only Slack"], correctAnswer: 1, explanation: "Metering, billing, and customer engagement are key use cases." },
  { question: "Which role typically pursues Energy and Utilities AP?", options: ["Marketers", "Partners and implementers in energy and utilities", "Sales only", "Designers only"], correctAnswer: 1, explanation: "Partners and implementers in energy and utilities pursue this credential." },
  { question: "What does 'deliver business value' mean in this context?", options: ["Only shipping", "Implementing solutions that drive outcomes for energy and utilities customers", "Only reporting", "Only dashboards"], correctAnswer: 1, explanation: "It means implementing solutions that drive outcomes for energy and utilities customers." },
  { question: "What does meter-to-cash represent in utilities?", options: ["Only metering", "End-to-end process from meter reading through billing and collection", "Only billing", "Only service"], correctAnswer: 1, explanation: "Meter-to-cash spans metering, billing, and revenue collection." },
  { question: "Which Energy and Utilities Cloud object supports customer engagement?", options: ["Lead only", "Service points, accounts, and cases", "Opportunity only", "Campaign only"], correctAnswer: 1, explanation: "Service points, accounts, and cases support customer engagement." },
  { question: "What does outage management involve?", options: ["Only billing", "Tracking and resolving service outages", "Only metering", "Only marketing"], correctAnswer: 1, explanation: "Outage management tracks and resolves service interruptions." },
  { question: "Which Salesforce product integrates with Energy and Utilities Cloud?", options: ["Slack only", "Billing, Field Service, and CRM", "Marketing Cloud only", "Commerce Cloud only"], correctAnswer: 1, explanation: "Billing, Field Service, and CRM integrate with Energy and Utilities." },
  { question: "What is a service territory in utilities?", options: ["A report", "Geographic area for service delivery and metering", "A lead", "A campaign"], correctAnswer: 1, explanation: "Service territories define geographic service areas." },
  { question: "Which use case supports customer self-service for utilities?", options: ["Manual only", "Experience Cloud and mobile for bill pay and outage reporting", "Email only", "Phone only"], correctAnswer: 1, explanation: "Experience Cloud supports self-service portals." },
  { question: "What does energy consumption data support?", options: ["Only billing", "Billing, demand response, and analytics", "Only reports", "Only dashboards"], correctAnswer: 1, explanation: "Consumption data drives billing and analytics." },
  { question: "Which best practice applies to Energy and Utilities implementation?", options: ["Ignore compliance", "Align with regulatory and meter-to-cash processes", "No testing", "Single product only"], correctAnswer: 1, explanation: "Regulatory alignment and meter-to-cash are key." },
  { question: "What is the purpose of Energy and Utilities Cloud?", options: ["Only CRM", "Unify customer data, metering, and billing for utilities", "Only marketing", "Only service"], correctAnswer: 1, explanation: "Energy and Utilities Cloud unifies customer, metering, and billing." },
  { question: "What is AMI (Advanced Metering Infrastructure) in utilities?", options: ["A report", "Smart meters and systems that collect detailed consumption data", "A billing object only", "An outage tool only"], correctAnswer: 1, explanation: "AMI enables automated meter reading and detailed consumption data for billing and analytics." },
]

export default function EnergyUtilitiesAPPage() {
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
            
            <CertificationCard slug={slug} title={slugToDisplayName(slug)} code="AP" description="Accredited Energy and Utilities Cloud Professionals have fundamental knowledge, skills, and experience to deliver business value to customers through Energy and Utilities Cloud." examDetails={{ questions: 60, passingScore: '~65%', duration: '90 min', cost: '$100' }} topics={['Energy and Utilities Cloud', 'Metering', 'Billing', 'Customer Engagement', 'Best Practices']}
            examSections={examSections}
            h1Text={getCertH1Text(slug)}
          examWeightageHeading={getCertExamWeightageHeading(slug)}
          />

          <div id="exam-prep">
            <ExamPrepContent slug={slug} />
          </div>

          {/* Key Concepts */}
          <div id="key-concepts" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Energy and Utilities Cloud: Key Concepts for the Exam</h2>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-1">Energy &amp; Utilities Cloud Data Model</p>
                <p>Energy &amp; Utilities Cloud (EUC) provides an industry-specific data model for energy providers. Core objects: Account (residential or commercial customer), Premise (the physical service location — address where energy is delivered), Service Point (the meter connection at a premise), Asset (the meter or equipment), Service Order (a field work request — connect, disconnect, meter reading). The consultant understands how customer billing accounts relate to premises and service points in a one-to-many hierarchy, as a single customer may have multiple premises.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">OmniStudio-Powered Customer Journeys</p>
                <p>Energy &amp; Utilities Cloud uses OmniStudio (FlexCards and OmniScripts) extensively for customer-facing and agent-facing processes. Common OmniScripts: Start Service (new customer onboarding with service point activation), Move In/Move Out (transfer service to a new address), Outage Reporting (customer self-service outage notification). FlexCards surface account balance, recent bills, and active service orders in the customer and agent consoles. The consultant configures pre-built industry OmniStudio components and extends them to match the utility&apos;s specific business rules.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Field Service Integration</p>
                <p>Energy &amp; Utilities Cloud integrates with Field Service to manage field crew dispatch for service orders (meter installation, disconnect, connect, fault repair). Work Orders created from Service Orders are scheduled and dispatched to field crews using FSL&apos;s scheduling optimisation. Mobile field workers use the FSL Mobile app to complete work orders and update service point status. The consultant designs the integration between EUC service order management and FSL scheduling, ensuring data flows correctly between the customer service and field operations processes.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Customer Portal and Self-Service</p>
                <p>Experience Cloud provides the customer-facing portal for energy utility customers. Self-service capabilities: view bills and payment history, make payments, report outages, start/stop/transfer service, manage account preferences. Knowledge articles address common questions (how to read your meter, what to do during an outage). The consultant configures the Experience Cloud site for utility customers — balancing self-service capabilities with the utility&apos;s compliance requirements around data access and service request validation.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Billing Integration and Account Management</p>
                <p>Utility billing systems (SAP IS-U, Oracle CC&amp;B, Avertra) are external to Salesforce — Energy &amp; Utilities Cloud serves as the CRM and customer engagement layer, not the billing system of record. Integration patterns: billing data (current balance, payment history, usage) syncs from the billing system to Salesforce via API or batch. Service requests flow from Salesforce to the billing system to activate or terminate service. The consultant designs the integration architecture — which data to sync, how frequently, and how to handle sync conflicts between systems.</p>
              </div>
            </div>
          </div>


          {/* How to Pass Scenario Strategy */}
          <div id="scenario-tips" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Pass the Salesforce Energy &amp; Utilities Accredited Professional Exam</h2>
            <p className="text-sm text-gray-600 mb-5">
              The Energy &amp; Utilities AP exam tests Salesforce implementation for utility companies. Focus on the Energy &amp; Utilities data model, service point management, and how the Industries platform addresses utility-specific business processes.
            </p>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-1">Energy &amp; Utilities Data Model</p>
                <p>Know the key objects: Service Point (physical connection), Service Account (billing relationship), Premise (physical address), Meter, and how they relate to standard Account and Contact records.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Customer Service for Utilities</p>
                <p>Know how to configure utility-specific service requests: start/stop service, high bill inquiries, outage reporting, and how these map to Case types in Service Cloud with utility-specific case processes.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Asset Management</p>
                <p>Know how Salesforce Assets track utility infrastructure: meters, transformers, poles, and how the asset maintenance schedule integrates with Field Service for preventive maintenance work orders.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Billing &amp; Revenue</p>
                <p>Know how utility billing integrates with Salesforce: smart meter data ingestion, usage-based billing calculations, time-of-use rate plans, and how Salesforce Revenue Cloud handles utility billing scenarios.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Industry-Specific Analytics</p>
                <p>Know the utility KPIs tracked in CRM Analytics: customer satisfaction, outage metrics, service request volumes, energy efficiency program adoption, and how predictive analytics identifies at-risk customers.</p>
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
