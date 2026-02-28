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

const slug = 'media-cloud-ap'
export async function generateMetadata() {
  return getCertMetadata(slug)
}

const sampleQuestions = [
  { question: "What does Media Cloud AP validate?", options: ["Only basics", "Knowledge, skills, and experience to plan, design, and implement business value through Media Cloud", "Only reporting", "Only Slack"], correctAnswer: 1, explanation: "Accredited Media Cloud Professionals have knowledge, skills, and experience to plan, design, and implement business value to customers through Media Cloud." },
  { question: "Which industry does Media Cloud serve?", options: ["Retail only", "Media and entertainment (e.g., ad sales, content, rights)", "Healthcare only", "Education only"], correctAnswer: 1, explanation: "Media Cloud serves media and entertainment industries." },
  { question: "What is a key use case for Media Cloud?", options: ["Only email", "Ad sales, rights management, and campaign management", "Only CPQ", "Only Slack"], correctAnswer: 1, explanation: "Ad sales, rights management, and campaign management are key use cases." },
  { question: "Which role typically pursues Media Cloud AP?", options: ["Marketers", "Partners and implementers in media and entertainment", "Sales only", "Designers only"], correctAnswer: 1, explanation: "Partners and implementers in media pursue this credential." },
  { question: "What does 'implement business value' mean in Media Cloud context?", options: ["Only shipping", "Delivering solutions that drive outcomes for media customers", "Only reporting", "Only dashboards"], correctAnswer: 1, explanation: "It means delivering solutions that drive outcomes for media customers." },
  { question: "What is ad sales management in Media Cloud?", options: ["Email only", "Managing ad inventory, proposals, and sales workflows for media", "Only reports", "Only dashboards"], correctAnswer: 1, explanation: "Ad sales covers inventory, proposals, and sales processes." },
  { question: "What is rights management in media?", options: ["Only legal", "Managing content rights, licensing, and distribution terms", "Only marketing", "Only sales"], correctAnswer: 1, explanation: "Rights management tracks content rights and licensing." },
  { question: "Which Salesforce products does Media Cloud often integrate with?", options: ["Slack only", "Industries CPQ, Billing, and CRM for media workflows", "Marketing Cloud only", "Commerce Cloud only"], correctAnswer: 1, explanation: "Media Cloud integrates with CPQ, Billing, and CRM." },
  { question: "What does campaign management mean in media context?", options: ["Email campaigns only", "Managing ad campaigns, flight dates, and delivery", "Only social", "Only SEO"], correctAnswer: 1, explanation: "Campaign management covers ad campaigns and delivery." },
  { question: "Why is the media industry unique for CRM?", options: ["It isn't", "Complex rights, inventory, and multi-party workflows", "Only standard objects", "Only simple pricing"], correctAnswer: 1, explanation: "Media has complex rights, inventory, and workflows." },
  { question: "What does 'plan and design' mean for Media Cloud?", options: ["Only coding", "Planning the solution architecture and designing the implementation", "Only reporting", "Only deployment"], correctAnswer: 1, explanation: "Plan = roadmap; design = solution architecture." },
  { question: "What is a rate card in media ad sales?", options: ["A report only", "Pricing structure for ad inventory (CPM, CPC, packages)", "A workflow only", "An email list"], correctAnswer: 1, explanation: "Rate cards define ad pricing and package structures for media sales." },
  { question: "What is ad inventory?", options: ["A report", "Available ad slots or units that can be sold", "A workflow only", "An email list"], correctAnswer: 1, explanation: "Ad inventory is the sellable ad space or units." },
  { question: "Which use case does Media Cloud support for content?", options: ["Only email", "Content rights, licensing, and distribution tracking", "Only CPQ", "Only Slack"], correctAnswer: 1, explanation: "Content rights and distribution are key use cases." },
  { question: "What does implement mean for Media Cloud AP?", options: ["Only coding", "Configuring and deploying the solution for the customer", "Only design", "Only training"], correctAnswer: 1, explanation: "Implement = configure and deploy." },
]

export default function MediaCloudAPPage() {
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
            
            <CertificationCard slug={slug} title={slugToDisplayName(slug)} code="AP" description="Accredited Media Cloud Professionals have knowledge, skills, and experience to plan, design, and implement business value to customers through Media Cloud." examDetails={{ questions: 60, passingScore: '~65%', duration: '90 min', cost: '$100' }} topics={['Media Cloud', 'Ad Sales', 'Rights', 'Campaign Management', 'Best Practices']}
            examSections={examSections}
            h1Text={getCertH1Text(slug)}
          examWeightageHeading={getCertExamWeightageHeading(slug)}
          />

          <div id="exam-prep">
            <ExamPrepContent slug={slug} />
          </div>


          {/* Key Concepts */}
          <div id="key-concepts" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Media Cloud AP: Key Concepts for the Exam</h2>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-1">Advertising Sales & Order Management</p>
                <p>Media Cloud provides a purpose-built Advertising Sales Management solution for broadcasters, publishers, and digital media companies. Advertising Orders capture the commitment to deliver a campaign — specifying advertiser, agency, flight dates, placements, and rates. Rate Cards define standard pricing for ad inventory (CPM, flat rate, sponsorship). Avails Management shows available inventory for a given time period and placement. The AP exam tests how to configure an advertising order workflow, how rate cards interact with order line pricing, and how avails are checked during the proposal process.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Rights & Entitlements Management</p>
                <p>Media companies manage complex rights hierarchies — who has licensed what content, for which territories, channels, and time windows. Rights Records capture the license terms: content asset, licensee, territory, channel type (linear, digital, streaming), exclusivity, and validity period. Rights Conflicts detection flags when proposed usage violates an existing exclusive license. Rights Availabilities show what rights are free for a given asset, territory, and window. The exam tests how to configure rights records, how conflict detection rules work, and how rights availability feeds into proposal and ordering workflows.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Revenue Management & Billing</p>
                <p>Media Cloud integrates with Revenue Cloud (CPQ Billing) for subscription and ad revenue management. Recurring subscription billing handles streaming services and digital subscriptions — with proration for mid-period changes. Advertising revenue uses milestone billing tied to campaign delivery and performance. Revenue Recognition (ASC 606) distributes subscription revenue ratably over the service period. Credit and adjustment workflows handle make-goods (compensation for under-delivery of ad campaigns). The exam tests how media-specific billing scenarios map to Revenue Cloud configuration and how make-good credits are processed.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Partner & Agency Management</p>
                <p>Media companies work through advertising agencies and content distribution partners. Partner portals (Experience Cloud) give agencies self-service access to propose, book, and track campaigns. Agency hierarchies model holding companies and their subsidiary agencies. Partner Accounts and Contact roles define the relationship between the media company, agency, and end advertiser. Commission structures track agency fees. The AP exam tests how to configure the agency portal for campaign proposal and booking, how agency commission is calculated and tracked, and how partner visibility into campaign performance data is controlled.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Analytics & Campaign Performance</p>
                <p>Media Cloud reporting tracks advertising campaign delivery, pacing, and performance. Delivery Reports compare contracted impressions/spots against actual delivered figures. Pacing dashboards alert sales ops when a campaign is at risk of under-delivery. Post-Campaign Analysis reports provide the final performance summary for advertiser billing and make-good decisions. CRM Analytics Media Cloud apps provide pre-built revenue and inventory dashboards. Integration with ad servers (DFP, FreeWheel, Operative) pulls in actual delivery data. The exam tests how campaign performance data flows from ad servers into Media Cloud, which standard reports are available, and how under-delivery triggers a make-good workflow.</p>
              </div>
            </div>
          </div>


          {/* How to Pass Scenario Strategy */}
          <div id="scenario-tips" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Pass the Salesforce Media Cloud Accredited Professional Exam</h2>
            <p className="text-sm text-gray-600 mb-5">
              The Media Cloud AP exam tests Salesforce implementation for media and advertising companies. Focus on deal management, campaign execution, revenue management, and the media-specific data model.
            </p>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-1">Media Cloud Data Model</p>
                <p>Know media-specific objects: Advertising Deals (linear and digital), Ad Products (ad slots, digital placements), Campaign Budgets, and how they relate to standard Opportunity and Order objects.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Deal Management</p>
                <p>Know how to configure the deal lifecycle in Media Cloud: proposal generation, rate card pricing for media inventory, deal approval workflows, and how deals activate into campaign execution.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Campaign Execution</p>
                <p>Know how campaigns are activated: trafficking (sending orders to ad servers), pacing management, and how delivery data flows back from ad servers to update actuals against booked inventory.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Revenue Management &amp; Billing</p>
                <p>Know how Media Cloud integrates with Revenue Cloud for billing: invoice generation from delivered campaign data, makegoods for underdelivery, and how revenue recognition handles media-specific scenarios.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Programmatic &amp; Digital Integration</p>
                <p>Know how Media Cloud handles programmatic advertising: integration with DSPs/SSPs, private marketplace deals, and how digital campaign data from Google Ad Manager or FreeWheel integrates with Media Cloud.</p>
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
