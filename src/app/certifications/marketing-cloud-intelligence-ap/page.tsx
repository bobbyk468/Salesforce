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

const slug = 'marketing-cloud-intelligence-ap'
export async function generateMetadata() {
  return getCertMetadata(slug)
}

const sampleQuestions = [
  { question: "What does Marketing Cloud Intelligence AP validate?", options: ["Only basics", "Skills and knowledge in technical implementation to effectively deliver Marketing Cloud Intelligence projects for customers", "Only reporting", "Only Slack"], correctAnswer: 1, explanation: "Accredited Marketing Cloud Intelligence Professionals have demonstrated skills and knowledge in technical implementation to effectively deliver Marketing Cloud Intelligence projects for customers." },
  { question: "What is Marketing Cloud Intelligence?", options: ["Only reports", "Analytics and intelligence capabilities within Marketing Cloud (e.g., CDP, analytics)", "Only email", "Only journeys"], correctAnswer: 1, explanation: "Marketing Cloud Intelligence includes analytics and intelligence capabilities." },
  { question: "What is a key activity for a Marketing Cloud Intelligence Professional?", options: ["Only coding", "Technical implementation of Marketing Cloud Intelligence solutions", "Only reporting", "Only lists"], correctAnswer: 1, explanation: "They implement Marketing Cloud Intelligence solutions technically." },
  { question: "Which role typically pursues Marketing Cloud Intelligence AP?", options: ["Sales only", "Partners and implementers working with Marketing Cloud Intelligence", "Designers only", "Marketers only"], correctAnswer: 1, explanation: "Partners and implementers working with Marketing Cloud Intelligence pursue this credential." },
  { question: "What does 'deliver projects' mean in this context?", options: ["Only shipping", "Implementing and delivering Marketing Cloud Intelligence solutions for customers", "Only reporting", "Only dashboards"], correctAnswer: 1, explanation: "It means implementing and delivering solutions for customers." },
  { question: "What does CDP (Customer Data Platform) provide for Marketing Cloud?", options: ["Only email", "Unified customer data for activation and analytics", "Only journeys", "Only SMS"], correctAnswer: 1, explanation: "CDP unifies customer data for activation and analytics." },
  { question: "Which Marketing Cloud Intelligence capability supports analytics?", options: ["Slack only", "Datorama, analytics studios, and reporting", "Email only", "Journey Builder only"], correctAnswer: 1, explanation: "Datorama and analytics studios support analytics." },
  { question: "What does technical implementation of Marketing Cloud Intelligence include?", options: ["Only design", "Data connections, transformations, and activation setup", "Only reports", "Only dashboards"], correctAnswer: 1, explanation: "Implementation includes connections, transformations, and activation." },
  { question: "Which data source can feed Marketing Cloud Intelligence?", options: ["Slack only", "CRM, advertising, and engagement data", "Email only", "No data"], correctAnswer: 1, explanation: "CRM, advertising, and engagement data feed intelligence." },
  { question: "What is the purpose of Marketing Cloud Intelligence?", options: ["Only reporting", "Unified analytics and intelligence across marketing touchpoints", "Only email", "Only journeys"], correctAnswer: 1, explanation: "Intelligence unifies analytics across touchpoints." },
  { question: "Which integration supports Marketing Cloud Intelligence?", options: ["Manual only", "Salesforce, advertising platforms, and data warehouses", "Slack only", "Service Cloud only"], correctAnswer: 1, explanation: "Intelligence integrates with Salesforce and ad platforms." },
  { question: "What does delivering Marketing Cloud Intelligence projects require?", options: ["Only design", "Technical setup, data modeling, and activation", "Only coding", "Only reports"], correctAnswer: 1, explanation: "Delivery requires technical setup and activation." },
  { question: "Which best practice applies to Marketing Cloud Intelligence?", options: ["Ignore data", "Data quality, governance, and attribution modeling", "No governance", "Static only"], correctAnswer: 1, explanation: "Data quality and governance support intelligence." },
  { question: "What is the benefit of Marketing Cloud Intelligence?", options: ["No benefit", "Unified view and actionable insights across marketing", "Siloed only", "Manual only"], correctAnswer: 1, explanation: "Intelligence provides unified insights." },
  { question: "What is attribution modeling in Marketing Cloud Intelligence?", options: ["A report type only", "Assigning credit for conversions to marketing touchpoints (first-touch, last-touch, multi-touch)", "An email metric", "A journey type"], correctAnswer: 1, explanation: "Attribution modeling assigns conversion credit across touchpoints for optimization." },
]

export default function MarketingCloudIntelligenceAPPage() {
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
            
            <CertificationCard slug={slug} title={slugToDisplayName(slug)} code="AP" description="Accredited Marketing Cloud Intelligence Professional have demonstrated skills and knowledge in technical implementation to effectively deliver Marketing Cloud Intelligence projects for customers." examDetails={{ questions: 60, passingScore: '~65%', duration: '90 min', cost: '$100' }} topics={['Marketing Cloud Intelligence', 'Analytics', 'CDP', 'Technical Implementation', 'Best Practices']}
            examSections={examSections}
            h1Text={getCertH1Text(slug)}
          examWeightageHeading={getCertExamWeightageHeading(slug)}
          />

          <div id="exam-prep">
            <ExamPrepContent slug={slug} />
          </div>

          {/* Key Concepts */}
          <div id="key-concepts" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Marketing Cloud Intelligence: Key Concepts for the Exam</h2>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-1">Intelligence Platform Architecture</p>
                <p>Marketing Cloud Intelligence (formerly Datorama) is the marketing analytics and reporting platform. Core concepts: Workspaces contain all data, dashboards, and configuration. Data Streams are the connections bringing data in (API connectors, file uploads, Marketing Cloud connector). The Unified Data Model harmonises data from multiple sources into a common dimension hierarchy: Campaign &rarr; Ad Set &rarr; Ad. All data is mapped to this model for cross-channel reporting.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Data Streams and Harmonisation</p>
                <p>Data Streams ingest data from: Marketing Cloud Connector (email, journeys, social), API connectors (Facebook Ads, Google Ads, Salesforce CRM), file-based streams (CSV, FTP), custom streams. Each stream maps source fields to Intelligence dimensions (Campaign, Ad, Date) and metrics (Impressions, Clicks, Spend, Conversions). Harmonisation rules standardise naming and categorisation across sources. The exam tests how to configure a new data stream and resolve mapping conflicts.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Insights, KPIs, and Custom Metrics</p>
                <p>Intelligence uses pre-built KPIs (Cost Per Click, Click-Through Rate, ROAS) and supports custom calculated metrics. Fusion Widgets combine metrics from different streams in a single chart. Anomaly Detection flags unusual metric movements. Goals allow planned vs actual comparison for budgets and KPIs. The exam tests how to create custom metrics using formulas, how fusion widgets work, and how to configure goal tracking.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Dashboards and Data Visualisation</p>
                <p>Dashboards display widgets (charts, tables, scorecards, media widgets) in configurable layouts. Global Date Controls apply a shared date range to all widgets. Audience and dimension filters narrow dashboard scope. Widget-level filters override global filters. Sharing dashboards with external users uses the Public URL or embedded iFrame. The exam tests how to build a dashboard, configure cross-widget filtering, and share reports with stakeholders.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">API Integration and Automation</p>
                <p>Intelligence REST API allows external systems to push data, retrieve insights, and manage streams programmatically. Scheduled exports can push Intelligence data to external data warehouses. Zapier integration enables no-code triggers from Intelligence events. The exam tests basic API concepts — authentication, stream management via API, and how to automate data flows between Intelligence and other marketing systems.</p>
              </div>
            </div>
          </div>


          {/* How to Pass Scenario Strategy */}
          <div id="scenario-tips" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Pass the Salesforce Marketing Cloud Intelligence Accredited Professional Exam</h2>
            <p className="text-sm text-gray-600 mb-5">
              The Marketing Cloud Intelligence (Datorama) AP exam tests data ingestion, model building, and dashboard creation in the Intelligence platform. Focus on the harmonization framework and how to connect and unify multi-source marketing data.
            </p>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-1">Data Streams &amp; Connectors</p>
                <p>Know how to connect data sources using native connectors (Google Analytics, Facebook Ads, Marketing Cloud), API connectors, and file-based imports (CSV). Understand scheduled refresh and incremental load options.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Data Model &amp; Harmonization</p>
                <p>Understand the Intelligence data model: Streams, Total Metrics, Dimensions, and how to harmonize disparate data by mapping vendor-specific fields to a unified dimension (e.g., mapping &apos;Campaign&apos; across platforms).</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Model Builder</p>
                <p>Know how to use the Model Builder to create calculated metrics (formulas), cross-stream joins, and custom dimensions. Understand the difference between Stream metrics and Total metrics.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Dashboard Design</p>
                <p>Know how to create boards, widgets (bar charts, line charts, scorecards, pivot tables), and how to configure filters and date controls. Understand how to share dashboards with internal and external stakeholders.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Einstein Integration</p>
                <p>Know how Einstein features in Intelligence (Einstein Insights, Anomaly Detection) analyze marketing performance data and how to configure alerts for KPI deviations.</p>
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
