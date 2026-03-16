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

const slug = 'loyalty-management-ap'
export async function generateMetadata() {
  return getCertMetadata(slug)
}

const sampleQuestions = [
  { question: "What does Loyalty Management AP validate?", options: ["Only basics", "2-3 years experience designing solutions using Loyalty Management and leading implementation within customer organizations", "Only reporting", "Only Slack"], correctAnswer: 1, explanation: "Accredited Loyalty Management Professionals have 2-3 years' experience designing solutions using Loyalty Management and can lead implementation within customer organizations." },
  { question: "Which Salesforce product does Loyalty Management refer to?", options: ["Marketing Cloud only", "Loyalty Management for customer loyalty programs and engagement", "Service Cloud", "Slack"], correctAnswer: 1, explanation: "Loyalty Management is Salesforce's product for loyalty programs." },
  { question: "What is a key activity for a Loyalty Management Professional?", options: ["Only coding", "Designing and leading implementation of loyalty solutions", "Only reporting", "Only email"], correctAnswer: 1, explanation: "They design and lead implementation of loyalty solutions." },
  { question: "Which role typically pursues Loyalty Management AP?", options: ["Marketers", "Partners and implementers with 2-3 years loyalty experience", "Sales only", "Designers only"], correctAnswer: 1, explanation: "Partners and implementers with loyalty experience pursue this credential." },
  { question: "What does loyalty program implementation often involve?", options: ["Only UI", "Points, tiers, rewards, and engagement flows", "Only reports", "Only dashboards"], correctAnswer: 1, explanation: "Implementation involves points, tiers, rewards, and engagement flows." },
  { question: "What is a loyalty tier?", options: ["A report", "A membership level (e.g., Silver, Gold) with associated benefits", "A workflow only", "An email segment"], correctAnswer: 1, explanation: "Tiers define membership levels and benefits." },
  { question: "What are loyalty points used for?", options: ["Only tracking", "Earning, redeeming, and tracking customer engagement", "Only reporting", "Only marketing"], correctAnswer: 1, explanation: "Points are earned and redeemed in loyalty programs." },
  { question: "Which capability does Loyalty Management provide for rewards?", options: ["Email only", "Configuring and managing rewards, redemptions, and fulfillment", "Only reports", "Only dashboards"], correctAnswer: 1, explanation: "Loyalty Management configures rewards and redemptions." },
  { question: "Why is 2-3 years experience required for Loyalty Management AP?", options: ["Arbitrary", "Designing and leading implementation requires depth of experience", "Only for coding", "Only for reporting"], correctAnswer: 1, explanation: "Leading implementation requires proven experience." },
  { question: "What does 'design solutions' mean for Loyalty Management?", options: ["Only UI design", "Architecting the loyalty program (tiers, points, rewards, flows)", "Only reports", "Only dashboards"], correctAnswer: 1, explanation: "Design = architecting the program structure." },
  { question: "Which Salesforce product does Loyalty Management integrate with?", options: ["Slack only", "Sales Cloud, Service Cloud, and Marketing Cloud for customer data", "Commerce Cloud only", "Net Zero only"], correctAnswer: 1, explanation: "Loyalty integrates with CRM and Marketing Cloud." },
  { question: "What is engagement flow in loyalty context?", options: ["Email only", "The journey of earn, redeem, and engage touchpoints", "Only signup", "Only reporting"], correctAnswer: 1, explanation: "Engagement flows define the customer journey." },
  { question: "What does 'lead implementation' mean for Loyalty Management AP?", options: ["Only coding", "Leading the project: scope, design, build, deploy", "Only reporting", "Only training"], correctAnswer: 1, explanation: "Lead = own the implementation project." },
  { question: "Which industry often uses Loyalty Management?", options: ["Manufacturing only", "Retail, travel, hospitality, and consumer brands", "Healthcare only", "Education only"], correctAnswer: 1, explanation: "Retail, travel, and hospitality commonly use loyalty." },
  { question: "What is reward fulfillment?", options: ["Only points", "Delivering the reward (e.g., discount, gift) to the customer", "Only reporting", "Only marketing"], correctAnswer: 1, explanation: "Fulfillment delivers the actual reward to the customer." },
]

export default function LoyaltyManagementAPPage() {
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
            
            <CertificationCard slug={slug} title={slugToDisplayName(slug)} code="AP" description="Accredited Loyalty Management Professionals has 2-3 years' experience designing solutions using the Loyalty Management functionality and can lead the implementation of these solutions within a customer organization." examDetails={{ questions: 60, passingScore: '~65%', duration: '90 min', cost: '$100' }} topics={['Loyalty Management', 'Loyalty Programs', 'Points', 'Rewards', 'Engagement', 'Best Practices']}
            examSections={examSections}
            h1Text={getCertH1Text(slug)}
          examWeightageHeading={getCertExamWeightageHeading(slug)}
          />

          <div id="exam-prep">
            <ExamPrepContent slug={slug} />
          </div>


          {/* Key Concepts */}
          <div id="key-concepts" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Loyalty Management AP: Key Concepts for the Exam</h2>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-1">Program Design: Tiers & Points</p>
                <p>Salesforce Loyalty Management structures programs around a Loyalty Program with one or more Tiers (e.g., Silver, Gold, Platinum) and a Currency (points, miles, cashback). Tier Groups define the criteria for tier qualification — spending thresholds, visit counts, or points earned. Tier Period determines how long earned status lasts and when it resets (anniversary, calendar year). The Loyalty Member object tracks each enrolled customer&apos;s current tier, points balance, and program history. Qualifying vs. Non-Qualifying Points: qualifying points count toward tier status; non-qualifying points are bonus awards that don&apos;t affect tier. The AP exam tests how to configure a tier structure with custom qualification rules and how tier periods interact with reset logic.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Points Accrual & Redemption Rules</p>
                <p>Accrual Rules define how members earn points — by transaction amount, product category, channel, or event. Accrual Rate can be a fixed amount or a percentage of spend. Partner Accruals allow members to earn points at non-Salesforce partner businesses via API. Redemption Rules define how points are spent — minimum redemption threshold, redemption value (100 points = $1), and eligible products. Vouchers are generated upon redemption and tracked as Loyalty Vouchers. Point Expiry Rules define when dormant points expire and send pre-expiry notifications. The exam tests how to configure an accrual rule for a partner scenario, how to set a redemption rule with a minimum threshold, and how expiry notifications are triggered.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Promotions & Member Engagement</p>
                <p>Loyalty Promotions offer bonus points or tier benefits for specific activities during a promotional period. Promotion Eligibility Rules restrict which members can participate (by tier, segment, or geography). Benefit Types include points multipliers, free products, and discount vouchers. Promotions are linked to a Loyalty Program and activated for a date range. Member Engagement events (birthday, milestone, referral) trigger automatic point awards or benefit grants. Engagement Attributes store program-specific data on the member profile. The exam tests how to configure a time-limited promotion with eligibility rules, how to award bonus points for a lifecycle event, and how to use member attributes to personalize promotions.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Partner Integration & Ecosystem</p>
                <p>Loyalty programs often partner with airlines, hotels, retailers, and financial services to allow cross-brand earning and redemption. Partner Accounts represent participating businesses in Salesforce. Partner Accrual/Redemption endpoints expose REST APIs that partners call to post transactions. Loyalty Connect provides a pre-built API gateway for partner integrations. Transaction Journals record every point earn and burn event with full audit trail. The AP exam tests how to configure a partner-facing API for an earn scenario, how transactions are posted and validated, and how to design the security model so that a partner can only post transactions for their own members.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Analytics & Program Reporting</p>
                <p>Key Loyalty KPIs: Active Member Rate, Redemption Rate, Point Liability (total outstanding points × redemption value), Tier Attainment Distribution, and Program ROI. CRM Analytics Loyalty apps provide pre-built dashboards for program performance, member engagement, and financial liability. Member 360 views surface all loyalty activity alongside CRM data. Churn prediction identifies at-risk members for proactive re-engagement. Cohort analysis tracks how engagement changes as members progress through tiers. The exam tests which CRM Analytics datasets are populated by Loyalty data, how to measure point liability from journal records, and how to configure a member churn alert.</p>
              </div>
            </div>
          </div>

          {/* How to Pass Scenario Strategy */}
          <div id="scenario-tips" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Pass the Salesforce Loyalty Management Accredited Professional Exam</h2>
            <p className="text-sm text-gray-600 mb-5">
              The Loyalty Management AP exam tests configuration of Salesforce Loyalty Management for customer loyalty programs. Focus on program setup, tier management, points accrual, and partner integration.
            </p>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-1">Loyalty Program Setup</p>
                <p>Know how to configure a loyalty program: Program Currency (points, miles), Tier Groups with qualifying criteria (points threshold, transaction count), and Member Portal configuration for self-service member management.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Accrual &amp; Redemption Rules</p>
                <p>Know how to configure Transaction Journal rules: earning rules (fixed points, multipliers, bonus events) and redemption rules (points-to-currency conversion, minimum redemption threshold). Understand how rule conditions restrict eligibility.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Member Enrollment &amp; Lifecycle</p>
                <p>Know how members enroll (self-service, agent-assisted, bulk import), how tier assignment is calculated at the program period end, and how expiry rules manage points and tier status requalification.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Partner Management</p>
                <p>Know how to configure partner programs in Loyalty Management: Partner Accounts, Partner Promotions (earn miles at partner merchants), and how partner transaction data is imported and processed.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Loyalty Analytics</p>
                <p>Know key loyalty KPIs: member acquisition rate, tier distribution, redemption rate, points liability, and how to use CRM Analytics dashboards to track program health and identify at-risk members.</p>
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
