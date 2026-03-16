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

const slug = 'consumer-goods-cloud-ap'
export async function generateMetadata() {
  return getCertMetadata(slug)
}

const sampleQuestions = [
  { question: "What does Consumer Goods Cloud AP validate?", options: ["Only basics", "Fundamental knowledge and skills to design, build, and deploy solutions for Consumer Goods outlets", "Only reporting", "Only Slack"], correctAnswer: 1, explanation: "Accredited Consumer Goods Cloud Professionals have demonstrated the fundamental knowledge and skills to design, build, and deploy solutions for Consumer Goods outlets." },
  { question: "Which industry does Consumer Goods Cloud serve?", options: ["Telecom only", "Consumer goods manufacturers and distributors (e.g., retail execution)", "Healthcare only", "Financial services only"], correctAnswer: 1, explanation: "Consumer Goods Cloud serves consumer goods manufacturers and distributors." },
  { question: "What is a key use case for Consumer Goods Cloud?", options: ["Only email", "Retail execution, trade promotion, and outlet management", "Only CPQ", "Only Slack"], correctAnswer: 1, explanation: "Retail execution, trade promotion, and outlet management are key use cases." },
  { question: "Which role typically pursues Consumer Goods Cloud AP?", options: ["Marketers", "Partners and implementers in consumer goods", "Sales only", "Designers only"], correctAnswer: 1, explanation: "Partners and implementers in consumer goods pursue this credential." },
  { question: "What does 'outlet' refer to in Consumer Goods Cloud?", options: ["Email only", "Retail or distribution points (stores, distributors)", "Only reports", "Only dashboards"], correctAnswer: 1, explanation: "Outlet refers to retail or distribution points." },
  { question: "What is retail execution?", options: ["Email campaigns only", "Field reps visiting outlets to execute promotions, audits, and merchandising", "Online sales only", "Warehouse only"], correctAnswer: 1, explanation: "Retail execution involves field activities at retail outlets." },
  { question: "What is trade promotion management?", options: ["Only discounts", "Planning, executing, and tracking promotional activities and spend", "Only pricing", "Only reports"], correctAnswer: 1, explanation: "Trade promotion covers planning, execution, and spend tracking." },
  { question: "Which role visits outlets in Consumer Goods Cloud?", options: ["Sales reps only", "Retail execution reps (e.g., merchandisers, field reps)", "Marketers only", "Developers only"], correctAnswer: 1, explanation: "Retail execution reps visit outlets for audits and merchandising." },
  { question: "What does 'design and build' mean for Consumer Goods Cloud?", options: ["Only coding", "Designing the solution architecture and configuring the platform", "Only reporting", "Only deployment"], correctAnswer: 1, explanation: "Design = architecture; build = configuration." },
  { question: "Which data is often tracked at the outlet level?", options: ["Only sales", "Inventory, compliance, promotions, and outlet attributes", "Only marketing", "Only finance"], correctAnswer: 1, explanation: "Outlet-level data includes inventory, compliance, and promotions." },
  { question: "What is outlet management in Consumer Goods Cloud?", options: ["Email only", "Managing outlet records, hierarchies, and visit planning", "Only reports", "Only dashboards"], correctAnswer: 1, explanation: "Outlet management covers outlet data and visit planning." },
  { question: "Which industry segment uses Consumer Goods Cloud?", options: ["Healthcare only", "CPG manufacturers and distributors (e.g., beverages, packaged goods)", "Financial services only", "Education only"], correctAnswer: 1, explanation: "CPG (Consumer Packaged Goods) is the primary segment." },
  { question: "What does deploy mean for Consumer Goods Cloud?", options: ["Only coding", "Implementing the solution and going live with the customer", "Only design", "Only training"], correctAnswer: 1, explanation: "Deploy = implement and go-live." },
  { question: "Why is visit planning important for retail execution?", options: ["Not important", "Optimizing field rep routes and outlet visit schedules", "Only for HQ", "Only for marketing"], correctAnswer: 1, explanation: "Visit planning optimizes field rep coverage of outlets." },
  { question: "Which Salesforce product does Consumer Goods Cloud extend?", options: ["Marketing Cloud only", "Sales Cloud and Service Cloud for retail execution workflows", "Commerce Cloud only", "Slack only"], correctAnswer: 1, explanation: "Consumer Goods Cloud extends Sales Cloud and Service Cloud." },
]

export default function ConsumerGoodsCloudAPPage() {
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
            
            <CertificationCard slug={slug} title={slugToDisplayName(slug)} code="AP" description="Accredited Consumer Goods Cloud Professionals have demonstrated the fundamental knowledge and skills to design, build, and deploy solutions for Consumer Goods outlets." examDetails={{ questions: 60, passingScore: '~65%', duration: '90 min', cost: '$100' }} topics={['Consumer Goods Cloud', 'Retail Execution', 'Outlets', 'Trade Promotion', 'Best Practices']}
            examSections={examSections}
            h1Text={getCertH1Text(slug)}
          examWeightageHeading={getCertExamWeightageHeading(slug)}
          />

          <div id="exam-prep">
            <ExamPrepContent slug={slug} />
          </div>


          {/* Key Concepts */}
          <div id="key-concepts" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Consumer Goods Cloud AP: Key Concepts for the Exam</h2>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-1">Visit Planning & Route Optimization</p>
                <p>Consumer Goods Cloud supports field sales and merchandising teams that visit retail stores. Visit Plans define which stores to visit, visit frequency, and visit activities. Route Optimization calculates the most efficient travel sequence for a sales rep&apos;s daily visits. Visit Templates specify which tasks (surveys, order taking, shelf audits) are required at each store type. Priority scoring ranks stores for visit scheduling based on sales volume or compliance risk. The AP exam tests how to configure visit plans, assign them to field teams, and set up route optimization rules — know the difference between manual route assignment and automated optimization.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">In-Store Execution & Retail Audits</p>
                <p>During a store visit, the field rep uses the Salesforce mobile app to complete Activities: shelf audits (planogram compliance), order capture, promotions execution, and competitive data collection. Surveys capture structured data — product availability, shelf position, facing count. Photos attached to visit records document compliance issues. Einstein Vision can analyze shelf images for planogram compliance. Key Performance Indicators (KPIs) measure execution quality per store and rep. The exam tests how to configure survey questions, how photos are attached and surfaced in reports, and how to set up KPI targets for field team performance management.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Order Management & Direct Store Delivery</p>
                <p>Van Sales (Direct Store Delivery) orders are captured in the field and fulfilled from a delivery vehicle. The order workflow: create cart → confirm order → generate invoice → collect payment → update inventory. Price Books and Price Rules support store-specific and account-specific pricing. Promotions and trade deals apply discounts at the line item level. Inventory management tracks on-hand stock in the delivery vehicle. Returns are processed on-site with inventory adjustments. The exam tests the end-to-end DSD order flow, how pricing rules stack, and how inventory is tracked at the vehicle location level.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Account & Store Management</p>
                <p>Retail accounts (stores, chains, distributors) are managed as Account records with consumer goods-specific fields (store type, chain affiliation, territory). Store Clusters group similar accounts for targeted promotional strategies. Assortment Plans define which products should be available at each store or cluster. Planogram compliance measures whether the right products are shelved in the right positions. Account plans and joint business plans track collaborative goals with key retail partners. The exam tests how to configure assortment plans, how to link planograms to store accounts, and how to set up account plan templates for key account management.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Analytics & Field Performance Reporting</p>
                <p>Consumer Goods Cloud reports and dashboards measure field execution quality, sell-in vs. sell-out performance, and promotional effectiveness. Visit Completion Rate, OSA (On-Shelf Availability), and planogram compliance are key metrics. Einstein Analytics (CRM Analytics) apps for Consumer Goods provide pre-built dashboards for territory managers. Scorecards aggregate KPIs at the rep, territory, and national levels. Alerts notify managers when execution falls below threshold. The exam tests which standard reports are available, how to configure custom KPI scorecards, and how CRM Analytics datasets are populated from visit activity data.</p>
              </div>
            </div>
          </div>

          {/* How to Pass Scenario Strategy */}
          <div id="scenario-tips" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Pass the Salesforce Consumer Goods Cloud Accredited Professional Exam</h2>
            <p className="text-sm text-gray-600 mb-5">
              The Consumer Goods Cloud AP exam tests configuration of field execution solutions for CPG companies. Focus on visit planning, in-store execution, retail audits, and the Consumer Goods data model.
            </p>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-1">Consumer Goods Data Model</p>
                <p>Know the CG Cloud objects: Retail Store, Account (retailer), Product, Planogram, Assessment, and Visit. Understand how these objects relate and how the data model supports field rep execution.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Visit Planning &amp; Scheduling</p>
                <p>Know how to configure visit plans: route planning, call cycle rules, visit frequency by store tier, and how the route management optimization engine assigns visits to reps efficiently.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">In-Store Execution &amp; Audits</p>
                <p>Know how to configure Assessment Tasks (shelf audits, compliance checks) within visits. Understand how tasks are assigned, how survey responses are captured, and how photos are attached via the mobile app.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Einstein Vision for Shelf Recognition</p>
                <p>Know how Einstein Vision (image recognition) is used in Consumer Goods Cloud for shelf compliance: training the model with planogram data, capturing shelf photos, and how compliance scores are calculated.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Analytics &amp; Reporting</p>
                <p>Know the standard CG Cloud reports and dashboards: visit compliance rates, distribution KPIs, survey response trends, and how CRM Analytics is used for advanced territory and account performance analysis.</p>
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
