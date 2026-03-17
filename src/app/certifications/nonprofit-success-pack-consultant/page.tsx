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

const slug = 'nonprofit-success-pack-consultant'
export async function generateMetadata() {
  return getCertMetadata(slug)
}

const sampleQuestions = [
  {
    question: "What is the Nonprofit Success Pack (NPSP)?",
    options: ["A CRM product for retail", "A managed package that extends Salesforce for nonprofits (donations, households, etc.)", "A Marketing Cloud product", "A CPQ product"],
    correctAnswer: 1,
    explanation: "NPSP is a managed package that provides donation management, households, and nonprofit-specific features on Salesforce.",
  },
  {
    question: "How does NPSP differ from Nonprofit Cloud (NPC)?",
    options: ["They are identical", "NPSP is the managed package; NPC is the industry solution that may include NPSP and more", "NPC is only for K-12", "NPSP is for B2B only"],
    correctAnswer: 1,
    explanation: "NPSP is the managed package; Nonprofit Cloud is the broader industry solution that can include NPSP.",
  },
  {
    question: "Which role does an NPSP Consultant typically fulfill?",
    options: ["Email marketing only", "Designing and implementing nonprofit managed package solutions in a customer-facing role", "Slack configuration only", "UI design only"],
    correctAnswer: 1,
    explanation: "They design and implement NPSP and nonprofit package solutions in a customer-facing role.",
  },
  {
    question: "What is a Household in NPSP?",
    options: ["A report", "A grouping of related contacts (e.g., family) for giving and communications", "An email list", "A campaign"],
    correctAnswer: 1,
    explanation: "Households group related contacts for household-level giving and communication.",
  },
  {
    question: "Which NPSP feature supports recurring donations?",
    options: ["Only one-time gifts", "Recurring Donations object with installment opportunities", "Campaigns only", "Leads only"],
    correctAnswer: 1,
    explanation: "The Recurring Donations object creates installment opportunities based on the donation schedule.",
  },
  {
    question: "What is the Gift Entry feature in NPSP?",
    options: [
      "A report",
      "A streamlined interface for entering and processing donations",
      "An email template",
      "A campaign"
    ],
    correctAnswer: 1,
    explanation: "Gift Entry provides a streamlined interface for donation entry."
  },
  {
    question: "Which NPSP setting controls soft credit behavior?",
    options: [
      "No setting",
      "Household settings and soft credit allocation",
      "Campaign only",
      "Opportunity only"
    ],
    correctAnswer: 1,
    explanation: "Household settings control soft credit allocation."
  },
  {
    question: "What does NPSP data model support for nonprofits?",
    options: [
      "Standard objects only",
      "Donations, households, affiliations, and engagements",
      "Leads only",
      "Campaigns only"
    ],
    correctAnswer: 1,
    explanation: "NPSP supports donations, households, affiliations, and engagements."
  },
  {
    question: "Which NPSP feature supports payment processing?",
    options: [
      "Manual only",
      "Payment object and payment gateway integration",
      "Opportunity only",
      "Campaign only"
    ],
    correctAnswer: 1,
    explanation: "Payment object and gateways support payment processing."
  },
  {
    question: "What is the purpose of NPSP migration?",
    options: [
      "To replace NPSP",
      "To move data from legacy systems or customize NPSP",
      "To delete only",
      "To backup only"
    ],
    correctAnswer: 1,
    explanation: "Migration moves data from legacy or custom implementations."
  },
  {
    question: "Which reporting need is common for NPSP?",
    options: [
      "Only sales pipeline",
      "Donor retention, campaign ROI, and gift summary",
      "Only support cases",
      "Only product sales"
    ],
    correctAnswer: 1,
    explanation: "NPSP reporting covers donor retention and gift summary."
  },
  {
    question: "What does the Engagement Plan support?",
    options: [
      "Only marketing",
      "Templated task sequences for stewardship",
      "Only email",
      "Only events"
    ],
    correctAnswer: 1,
    explanation: "Engagement Plans create stewardship task sequences."
  },
  {
    question: "Which integration is common for NPSP?",
    options: [
      "CPQ only",
      "Payment processors, fundraising platforms, and accounting",
      "Marketing Cloud only",
      "Slack only"
    ],
    correctAnswer: 1,
    explanation: "NPSP integrates with payment and fundraising platforms."
  },
  {
    question: "What does an NPSP Consultant need to understand?",
    options: [
      "Only UI",
      "NPSP data model, nonprofit processes, and configuration",
      "Only CRM",
      "Only Marketing Cloud"
    ],
    correctAnswer: 1,
    explanation: "Consultants need NPSP data model and nonprofit process knowledge."
  },
  {
    question: "Which best practice applies to NPSP implementation?",
    options: [
      "Ignore data",
      "Clean data, align with nonprofit processes, and train users",
      "No training",
      "Single user only"
    ],
    correctAnswer: 1,
    explanation: "Clean data, process alignment, and training support success."
  },
]

export default function NonprofitSuccessPackConsultantPage() {
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
            
            <CertificationCard
              slug={slug}
            title={slugToDisplayName(slug)}
            code="NPSP"
            description="Certified Nonprofit Success Pack Consultants have experience designing and implementing nonprofit managed package solutions in a customer-facing role."
            examDetails={{ questions: 60, passingScore: '~65%', duration: '105 min', cost: '$200' }}
            topics={['NPSP', 'Donations', 'Households', 'Recurring Giving', 'Data Model', 'Reports', 'Best Practices', 'Migration', 'Integration', 'Governance']}
            examSections={examSections}
            h1Text={getCertH1Text(slug)}
          examWeightageHeading={getCertExamWeightageHeading(slug)}
          />

          <div id="exam-prep">
            <ExamPrepContent slug={slug} />
          </div>

          {/* Key Concepts */}
          <div id="key-concepts" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Nonprofit Success Pack Consultant: Key Concepts for the Exam</h2>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-1">NPSP Installation and Configuration</p>
                <p>NPSP is a managed package installed from AppExchange. The NPSP Settings page (in Setup or via the NPSP tile) controls all key configurations: Account model (Household vs Individual vs Organisation), relationship settings, payment behaviour, and rollup configuration. The Household Account model creates one Account per person (their household) — not the same as a standard person account. The 1-to-1 Account model creates one Account per Contact. The consultant selects and documents the correct model before implementation and understands that switching models after data entry is complex.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Donation Processing and Gift Entry</p>
                <p>NPSP Batch Gift Entry enables high-volume gift processing with a grid-style interface optimised for data entry staff. Gift commitments (pledges with instalment schedules) are different from Recurring Donations (which auto-generate future Opportunities). Payment processing integrations (Stripe, PayPal, Elevate) handle online donations. The Gift Entry process typically includes: data entry, payment capture, acknowledgement letter generation, and tax receipt production. The consultant configures the Batch Gift Entry templates, defines required fields, and sets up payment matching rules.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Customisable Rollups (CRLP)</p>
                <p>Customisable Rollups (CRLP) replaces the legacy NPSP rollup system with a flexible, admin-configurable framework. Rollup types: Soft Credit rollups, Opportunity rollups to Contact/Account/GAU. Each rollup definition specifies: the source object and field, the rollup operation (SUM, COUNT, AVERAGE, FIRST/LAST DATE), filter criteria (e.g., only Closed Won Opportunities), and the target field on the Contact or Account. CRLP calculates totals like Total Given, Largest Gift, Most Recent Gift Date. The consultant configures CRLP to match the organisation&apos;s donor KPI requirements.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Engagement Plans and Levels</p>
                <p>Engagement Plans create task-based workflows for stewardship and donor cultivation. An Engagement Plan Template defines a sequence of tasks assigned to roles over time — e.g., 3 days after a major gift: send thank you note (task 1); 30 days: handwritten letter from ED (task 2); 60 days: phone call from program staff (task 3). Levels assign donors to stewardship tiers based on giving amounts — Bronze, Silver, Gold, Platinum. Level Assignment rules automatically categorise donors and can trigger Engagement Plans. The consultant configures Levels and Plans to match the organisation&apos;s major donor stewardship strategy.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Data Quality and Migration</p>
                <p>NPSP Data Importer is a tool specifically designed for importing constituent and donation data into NPSP — handling the household model logic, matching existing records, and creating correct relationships. It is preferred over Data Loader for initial NPSP data migration. Deduplication: NPSP includes merge tools for duplicate Contact and Account records. Data quality validation: using NPSP&apos;s built-in validation plus custom Validation Rules to enforce data completeness. The consultant designs the data migration strategy — mapping source system fields to NPSP objects, testing in sandbox, and validating results before production migration.</p>
              </div>
            </div>
          </div>


          {/* How to Pass Scenario Strategy */}
          <div id="scenario-tips" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Pass the Salesforce Nonprofit Success Pack Consultant Exam</h2>
            <p className="text-sm text-gray-600 mb-5">
              The NPSP Consultant exam focuses specifically on configuring NPSP features for fundraising, constituent management, and reporting. The exam emphasizes practical configuration knowledge over architectural design.
            </p>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-1">Recurring Donations Configuration</p>
                <p>Know how to configure open-ended vs. fixed-length recurring donations, pause rules, and how recurring donation schedules generate Opportunities. Understand how Elevate (payment processor) integrates with recurring donations.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Soft Credits &amp; Household Rollups</p>
                <p>Soft Credits track secondary donor credit (spouse, board member influence). Household Rollups aggregate giving totals at the household level. Know the rollup fields, their definitions, and how to customize them.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Data Import Wizard for NPSP</p>
                <p>Understand how to use the NPSP Data Import Wizard vs. standard Data Import Wizard for migrating constituent and gift data. Know field mappings and how to handle duplicate matching.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Engagement Plans</p>
                <p>Engagement Plans automate constituent stewardship tasks (thank-you calls, acknowledgment letters) triggered by donation milestones. Know how to configure Engagement Plan Templates and the task assignment rules.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Reports &amp; Dashboards for Nonprofits</p>
                <p>Know key NPSP report types (NPSP Households, NPSP Soft Credits) and how to build fundraising dashboards tracking year-to-date giving, LYBUNT/SYBUNT donors, and retention rates.</p>
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
            <h2 id="next-certs-heading" className="text-base font-semibold text-gray-900 mb-3">Next Consultant Certifications</h2>
            <p className="text-sm text-gray-700 mb-2">After this consultant certification, you can add adjacent clouds or deepen your specialisation:</p>
            <ul className="space-y-2 text-sm">
              <li><Link href="/certifications/sales-cloud" className="text-salesforce-blue font-medium hover:underline">Sales Cloud Consultant</Link></li>
              <li><Link href="/certifications/service-cloud" className="text-salesforce-blue font-medium hover:underline">Service Cloud Consultant</Link></li>
              <li><Link href="/certifications/experience-cloud" className="text-salesforce-blue font-medium hover:underline">Experience Cloud Consultant</Link></li>
              <li><Link href="/certifications/role/consultant" className="text-salesforce-blue font-medium hover:underline">Consultant certification path</Link></li>
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
