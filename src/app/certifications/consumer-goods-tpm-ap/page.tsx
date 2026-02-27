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

const slug = 'consumer-goods-tpm-ap'
export async function generateMetadata() {
  return getCertMetadata(slug)
}

const sampleQuestions = [
  { question: "What does Consumer Goods Cloud TPM AP validate?", options: ["Only basics", "Knowledge, skills, and experience to discover, design, plan, and deliver product value with Consumer Goods Cloud TPM", "Only reporting", "Only Slack"], correctAnswer: 1, explanation: "Accredited Consumer Goods Cloud TPM Professionals have the knowledge, skills, and experience to discover, design, plan, and deliver product value with Consumer Goods Cloud TPM." },
  { question: "What does TPM stand for?", options: ["Total Product Management", "Trade Promotion Management", "Technical Process Model", "Task Project Manager"], correctAnswer: 1, explanation: "TPM stands for Trade Promotion Management." },
  { question: "What is Trade Promotion Management used for?", options: ["Only email", "Planning, executing, and measuring trade promotions and incentives", "Only CPQ", "Only Slack"], correctAnswer: 1, explanation: "TPM is used for planning, executing, and measuring trade promotions." },
  { question: "Which role typically pursues Consumer Goods TPM AP?", options: ["Marketers", "Partners and implementers in consumer goods trade promotion", "Sales only", "Designers only"], correctAnswer: 1, explanation: "Partners and implementers in consumer goods trade promotion pursue this credential." },
  { question: "What does 'deliver product value' mean in TPM context?", options: ["Only shipping", "Delivering business value through trade promotion programs and analytics", "Only reporting", "Only dashboards"], correctAnswer: 1, explanation: "It means delivering business value through trade promotion programs and analytics." },
  { question: "What does trade promotion planning involve?", options: ["Only execution", "Budget allocation, calendar, and promotion design", "Only reporting", "Only dashboards"], correctAnswer: 1, explanation: "Planning covers budget, calendar, and promotion design." },
  { question: "Which Consumer Goods Cloud object supports TPM?", options: ["Lead only", "Promotion, plan, and budget objects", "Opportunity only", "Campaign only"], correctAnswer: 1, explanation: "Promotion, plan, and budget objects support TPM." },
  { question: "What does trade promotion analytics measure?", options: ["Only spend", "ROI, lift, and promotion effectiveness", "Only volume", "Only discounts"], correctAnswer: 1, explanation: "Analytics measures ROI, lift, and effectiveness." },
  { question: "Which integration supports TPM?", options: ["Slack only", "ERP, syndicated data, and retail systems", "Marketing Cloud only", "Service Cloud only"], correctAnswer: 1, explanation: "TPM integrates with ERP and syndicated data." },
  { question: "What is the purpose of trade promotion management?", options: ["Only discounts", "Plan, execute, and measure promotions with retailers", "Only reporting", "Only lists"], correctAnswer: 1, explanation: "TPM plans, executes, and measures trade promotions." },
  { question: "Which industry uses Consumer Goods Cloud TPM?", options: ["Healthcare only", "CPG, retail, and consumer goods", "Financial services only", "Education only"], correctAnswer: 1, explanation: "CPG and consumer goods use TPM." },
  { question: "What does TPM discover phase include?", options: ["Only coding", "Requirements and opportunity assessment", "Only deployment", "Only reporting"], correctAnswer: 1, explanation: "Discover phase includes requirements and assessment." },
  { question: "Which best practice applies to TPM implementation?", options: ["Ignore analytics", "Align with trade calendar and measure ROI", "No measurement", "Single promotion only"], correctAnswer: 1, explanation: "Align with trade calendar and measure ROI." },
  { question: "What does TPM design phase cover?", options: ["Only UI", "Promotion structure, workflows, and data model", "Only reports", "Only dashboards"], correctAnswer: 1, explanation: "Design covers structure, workflows, and data model." },
  { question: "What is promotion lift in TPM analytics?", options: ["Only spend", "The incremental sales or volume attributed to a promotion vs baseline", "Only discount %", "Only distribution"], correctAnswer: 1, explanation: "Lift measures incremental performance caused by the promotion." },
]

export default function ConsumerGoodsTPMAPPage() {
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
            
            <CertificationCard slug={slug} title={slugToDisplayName(slug)} code="AP" description="Accredited Consumer Goods Cloud Trade Promotion Management (TPM) Professionals have the knowledge, skills, and experience to discover, design, plan, and deliver product value to customers with Consumer Goods Cloud TPM." examDetails={{ questions: 60, passingScore: '~65%', duration: '90 min', cost: '$100' }} topics={['Consumer Goods Cloud', 'TPM', 'Trade Promotion', 'Planning', 'Analytics', 'Best Practices']}
            examSections={examSections}
            h1Text={getCertH1Text(slug)}
          examWeightageHeading={getCertExamWeightageHeading(slug)}
          />

          <div id="exam-prep">
            <ExamPrepContent slug={slug} />
          </div>


          {/* Key Concepts */}
          <div id="key-concepts" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Consumer Goods TPM AP: Key Concepts for the Exam</h2>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-1">Trade Promotion Planning & Fund Management</p>
                <p>Trade Promotion Management (TPM) in Consumer Goods Cloud helps CPG companies plan, execute, and settle promotional spend with retail partners. Trade Funds define the budget available for promotions — split by account, territory, or brand. Fund Commitments allocate budget to planned promotions. Promotion Templates define the type of promotional activity (off-invoice discount, lump sum, scan data deal). Volume Planning forecasts the expected sales lift from a promotion. Baseline Volume represents the expected sales without promotion. The AP exam tests how to configure trade funds, allocate fund commitments to promotions, and calculate expected ROI from volume lift vs. promotional spend.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Promotion Execution & Tactics</p>
                <p>A Trade Promotion consists of a header (account, time period, objectives) and one or more Tactics (specific activities: feature, display, temporary price reduction). Each Tactic has its own funding, targets, and conditions. Conditional Deal Logic applies different payout rates based on achieved performance tiers. Calendar views show overlapping promotions for a customer to prevent conflicts. Promotion Approval workflows route high-value or unusual promotions to managers. The exam tests how to configure a multi-tactic promotion, how conditional deals work, and how the calendar tool prevents promotional cannibalization.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Settlement & Claims Processing</p>
                <p>Trade Promotion settlements reconcile the planned spend against actual retailer claims. Proof of Performance (POP) — scan data, invoices, photos — is required to validate claims. Deductions are amounts the retailer takes off payment; they must be matched to a promotion or flagged as unauthorized. Claim Management workflows route deductions for approval or dispute. Auto-settlement rules can automatically approve claims that match within a tolerance of the plan. Overpayment recovery processes handle situations where the retailer claims more than the agreed amount. The exam tests the settlement lifecycle, how to configure auto-settlement rules, and the deduction-to-promotion matching process.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Forecasting & Baseline Analytics</p>
                <p>Accurate baselines are critical for measuring promotion ROI. Baseline models use historical scan data to project what sales would have been without the promotion. Lift measurement compares actual sell-out to baseline during the promotional period. Post-promotion dip analysis identifies forward-buying behavior that depresses post-promo sales. CRM Analytics TPM dashboards provide pre-built analysis for fund utilization, promotional effectiveness, and customer P&L. The exam tests how to configure baseline generation, how to interpret lift analysis, and how to use analytics insights to optimize future promotional spend allocation.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Integration with ERP & Retailer Data</p>
                <p>TPM data flows to and from external systems: ERP (SAP, Oracle) for financial settlement and accrual accounting, retailer portals for scan data feeds, and demand planning systems for volume forecasts. Integration patterns: scheduled batch (daily scan data imports via SFTP), near-real-time (API-based deduction feeds), and event-driven (settlement approval triggers ERP accrual). Data quality is critical — duplicate promotions or mismatched scan data lead to over/under-accruals. The exam tests how to design data integration for a TPM scenario, what data must flow in vs. out of Salesforce TPM, and how to handle data validation errors in incoming scan data feeds.</p>
              </div>
            </div>
          </div>
          <div id="practice-questions" className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{getCertPracticeQuestionsHeading(slug)}</h2>
            <p className="text-gray-600 mb-8">{getPracticeQuestionsIntro(sampleQuestions.length)}</p>
            {sampleQuestions.map((q, i) => (<QuestionCard key={i} questionNumber={i + 1} question={q.question} options={q.options} correctAnswer={q.correctAnswer} explanation={q.explanation} />))}
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
