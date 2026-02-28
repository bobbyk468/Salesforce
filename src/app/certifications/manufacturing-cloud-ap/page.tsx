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

const slug = 'manufacturing-cloud-ap'
export async function generateMetadata() {
  return getCertMetadata(slug)
}

const sampleQuestions = [
  { question: "What does Manufacturing Cloud AP validate?", options: ["Only basics", "Fundamental knowledge and skills to design, build, and deploy solutions across Manufacturing Cloud", "Only reporting", "Only Slack"], correctAnswer: 1, explanation: "Accredited Manufacturing Cloud Professionals have demonstrated the fundamental knowledge and skills to design, build, and deploy solutions across Manufacturing Cloud." },
  { question: "Which industry does Manufacturing Cloud serve?", options: ["Retail only", "Manufacturing (e.g., production, supply chain)", "Healthcare only", "Education only"], correctAnswer: 1, explanation: "Manufacturing Cloud serves manufacturing industries." },
  { question: "What is a key use case for Manufacturing Cloud?", options: ["Only email", "Production planning, supply chain, and shop floor", "Only CPQ", "Only Slack"], correctAnswer: 1, explanation: "Production planning, supply chain, and shop floor are key use cases." },
  { question: "Which role typically pursues Manufacturing Cloud AP?", options: ["Marketers", "Partners and implementers in manufacturing", "Sales only", "Designers only"], correctAnswer: 1, explanation: "Partners and implementers in manufacturing pursue this credential." },
  { question: "What does 'design, build, and deploy' mean in this context?", options: ["Only UI", "Implementing end-to-end manufacturing solutions", "Only reports", "Only dashboards"], correctAnswer: 1, explanation: "It means implementing end-to-end manufacturing solutions." },
  { question: "What does Manufacturing Cloud support for production?", options: ["Only sales", "Production planning, work orders, and shop floor execution", "Only marketing", "Only service"], correctAnswer: 1, explanation: "Manufacturing Cloud supports production planning and execution." },
  { question: "Which object represents production work in Manufacturing Cloud?", options: ["Opportunity only", "Work orders and production runs", "Lead only", "Campaign only"], correctAnswer: 1, explanation: "Work orders and production runs represent production work." },
  { question: "What does supply chain management involve in manufacturing?", options: ["Only sales", "Procurement, inventory, and planning", "Only marketing", "Only service"], correctAnswer: 1, explanation: "Supply chain covers procurement, inventory, and planning." },
  { question: "Which Salesforce product integrates with Manufacturing Cloud?", options: ["Slack only", "ERP, Field Service, and CRM", "Marketing Cloud only", "Commerce Cloud only"], correctAnswer: 1, explanation: "Manufacturing Cloud integrates with ERP and Field Service." },
  { question: "What is the purpose of shop floor management?", options: ["Only reporting", "Tracking production execution and real-time status", "Only planning", "Only procurement"], correctAnswer: 1, explanation: "Shop floor management tracks production execution." },
  { question: "Which use case supports demand planning?", options: ["Manual only", "Forecasting and demand signals for production", "Email only", "Reports only"], correctAnswer: 1, explanation: "Demand planning uses forecasts for production planning." },
  { question: "What is capacity planning in Manufacturing Cloud?", options: ["Only reporting", "Aligning production capacity with demand forecasts and work orders", "Only procurement", "Only sales"], correctAnswer: 1, explanation: "Capacity planning aligns production resources with expected demand." },
  { question: "Which object tracks material consumption in production?", options: ["Opportunity only", "Work order components and material requirements", "Lead only", "Campaign only"], correctAnswer: 1, explanation: "Work orders and component records track material usage in production." },
  { question: "What is the benefit of Manufacturing Cloud for production?", options: ["Only CRM", "End-to-end visibility from planning to shop floor", "Only marketing", "Only service"], correctAnswer: 1, explanation: "Manufacturing Cloud provides end-to-end visibility." },
  { question: "Which best practice applies to Manufacturing Cloud implementation?", options: ["Ignore processes", "Align with production and supply chain processes", "No testing", "Single product only"], correctAnswer: 1, explanation: "Align with production and supply chain processes." },
]

export default function ManufacturingCloudAPPage() {
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
            
            <CertificationCard slug={slug} title={slugToDisplayName(slug)} code="AP" description="Accredited Manufacturing Cloud Professionals have demonstrated the fundamental knowledge and skills to design, build, and deploy solutions across Manufacturing Cloud." examDetails={{ questions: 60, passingScore: '~65%', duration: '90 min', cost: '$100' }} topics={['Manufacturing Cloud', 'Production', 'Supply Chain', 'Shop Floor', 'Best Practices']}
            examSections={examSections}
            h1Text={getCertH1Text(slug)}
          examWeightageHeading={getCertExamWeightageHeading(slug)}
          />

          <div id="exam-prep">
            <ExamPrepContent slug={slug} />
          </div>


          {/* Key Concepts */}
          <div id="key-concepts" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Manufacturing Cloud AP: Key Concepts for the Exam</h2>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-1">Account-Based Forecasting & Sales Agreements</p>
                <p>Manufacturing Cloud centers on the Sales Agreement object — a negotiated contract between a manufacturer and a distributor/dealer defining expected purchase volumes and prices over a period. Sales Agreement Terms define the monthly or quarterly expected volumes and net price for each product. Actuals (from Orders or Opportunities) are compared against agreement terms to show attainment. Account Forecasts roll up agreement actuals, open opportunities, and planned volumes into a single account-level demand forecast. Forecast Adjustments allow sales managers to manually override system-generated forecasts. The AP exam tests how Sales Agreements feed Account Forecasts, how actuals are calculated from order data, and how to configure forecast windows and adjustment permissions.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Run Rate Business & Demand Planning</p>
                <p>Run Rate Business tracks recurring purchase patterns from existing customers who order the same products regularly without a formal sales agreement. Manufacturing Cloud captures this demand by analyzing historical order data and projecting forward consumption. Run Rate Accounts have predictable demand signals that feed into the aggregate forecast. Demand Planning integration connects Manufacturing Cloud forecasts to ERP or S&OP (Sales & Operations Planning) systems. Forecast Collaboration allows multiple stakeholders (sales, supply chain, finance) to view and adjust the forecast. The exam tests how run rate demand is captured, how it differs from agreement-based demand, and how combined forecasts are presented to stakeholders.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Partner Visit Management & Field Execution</p>
                <p>Manufacturing Cloud includes Partner Visit Management for field teams that visit dealer and distributor accounts. Visit Plans define visit schedules and objectives. During visits, reps review agreement attainment, discuss upcoming orders, capture competitive intelligence, and update account plans. Action Plans define repeatable activity checklists for common visit scenarios. Assessments capture structured data during visits (dealer satisfaction surveys, inventory counts). Mobile access via the Salesforce app enables reps to complete visit activities offline. The exam tests how to configure a visit plan, associate action plan templates, and surface agreement attainment data on the account page for use during dealer visits.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Pricing, Rebates & Incentive Management</p>
                <p>Rebate Management in Manufacturing Cloud handles volume-based, growth-based, and promotional rebates paid to distributors and dealers. Rebate Programs define the qualification criteria and payout rates. Rebate Tiers apply higher payout rates at higher volume thresholds. Accruals track the estimated rebate liability as transactions occur. Payouts settle the final rebate amount at the end of the program period. Price Books and contract-level pricing (Negotiated Pricing) define the net price terms in Sales Agreements. The AP exam tests how to configure a tiered rebate program, how accruals are calculated from sales data, and how payouts are processed at program end.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Integration with ERP & Supply Chain</p>
                <p>Manufacturing Cloud integrates with ERP systems (SAP, Oracle, Infor) to exchange order data, inventory levels, and financial actuals. MuleSoft is commonly used as the integration middleware for real-time or batch data exchange. Order data from ERP feeds the Sales Agreement attainment calculation. Inventory levels from ERP support demand planning accuracy. Product pricing maintained in ERP is synced to Salesforce Price Books. The AP exam tests the integration architecture for a Manufacturing Cloud + SAP scenario — which data flows in each direction, how to handle data transformation differences, and how to design for resiliency when the ERP is temporarily unavailable.</p>
              </div>
            </div>
          </div>

          {/* How to Pass Scenario Strategy */}
          <div id="scenario-tips" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Pass the Salesforce Manufacturing Cloud Accredited Professional Exam</h2>
            <p className="text-sm text-gray-600 mb-5">
              The Manufacturing Cloud AP exam tests Salesforce implementation for manufacturers. Focus on Sales Agreements, Account-Based Forecasting, and how Manufacturing Cloud bridges sales planning with operations.
            </p>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-1">Sales Agreements</p>
                <p>Know the Sales Agreement data model: Agreement Header, Agreement Terms (product-level commitments), and how actual order data flows from opportunities or orders to populate agreement actuals vs. planned quantities.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Account-Based Forecasting</p>
                <p>Know how Account-Based Forecasting works: forecast periods, forecast metrics (planned revenue, actual revenue, adjustments), and how forecasts roll up from account to regional and global levels.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Rebate Management</p>
                <p>Know how Rebate Management tracks manufacturer incentive programs: Rebate Types (volume rebate, tiered discount), Payout definitions, and how the rebate calculation engine processes eligible transactions.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Partner &amp; Channel Management</p>
                <p>Know how Manufacturing Cloud supports channel partner management: partner onboarding, partner sales agreements, PRM (Partner Relationship Management) portal configuration for dealers and distributors.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Manufacturing Analytics</p>
                <p>Know the standard Manufacturing Cloud CRM Analytics dashboards: sales agreement compliance, forecast accuracy, rebate program performance, and how these dashboards help operations teams identify supply/demand mismatches.</p>
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
