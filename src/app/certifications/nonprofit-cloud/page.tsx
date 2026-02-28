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

const slug = 'nonprofit-cloud'
export async function generateMetadata() {
  return getCertMetadata(slug)
}

const sampleQuestions = [
  {
    question: "Which data model is recommended for tracking donations in Nonprofit Cloud?",
    options: [
      "Standard Opportunity object only",
      "NPSP (Nonprofit Success Pack) data model",
      "Custom objects",
      "Standard Account object"
    ],
    correctAnswer: 1,
    explanation: "NPSP provides a specialized data model for tracking donations, with features like recurring donations, soft credits, and gift entry."
  },
  {
    question: "What is the purpose of Household Accounts in NPSP?",
    options: [
      "To track corporate donors",
      "To group related individual contacts into family units",
      "To manage foundation grants",
      "To track volunteer activities"
    ],
    correctAnswer: 1,
    explanation: "Household Accounts group related individual contacts (family members) together, allowing you to track household giving and communications."
  },
  {
    question: "Which feature allows nonprofits to track in-kind donations?",
    options: [
      "Standard Opportunity",
      "Gift Entry",
      "In-Kind Gift fields on Opportunity",
      "Campaign"
    ],
    correctAnswer: 2,
    explanation: "NPSP includes In-Kind Gift fields on the Opportunity object to track non-monetary donations like goods and services."
  },
  {
    question: "What is the Engagement Plan feature used for?",
    options: [
      "Marketing automation",
      "Creating task templates for donor stewardship",
      "Email campaigns",
      "Event management"
    ],
    correctAnswer: 1,
    explanation: "Engagement Plans create templated task sequences for donor stewardship, ensuring consistent follow-up and cultivation activities."
  },
  {
    question: "How does NPSP handle recurring donations?",
    options: [
      "Through standard Salesforce scheduling",
      "Using Recurring Donation objects with installment Opportunities",
      "Manual entry each month",
      "External payment processor only"
    ],
    correctAnswer: 1,
    explanation: "NPSP uses Recurring Donation objects that automatically create installment Opportunities based on the donation schedule."
  },
  {
    question: "What is a Soft Credit in NPSP?",
    options: [
      "A refund",
      "Attributing a gift to a contact who influenced the donation (e.g., peer-to-peer)",
      "A pledge only",
      "An in-kind gift"
    ],
    correctAnswer: 1,
    explanation: "Soft credits attribute influence to contacts who helped secure the gift."
  },
  {
    question: "Which NPSP feature supports tribute and memorial giving?",
    options: [
      "Standard Opportunity only",
      "Tribute and memorial fields and related processing",
      "Campaign only",
      "Household only"
    ],
    correctAnswer: 1,
    explanation: "NPSP supports tribute and memorial giving with dedicated fields."
  },
  {
    question: "What does the Affiliations object track?",
    options: [
      "Only donations",
      "Relationships between contacts and accounts (e.g., employment, education)",
      "Only households",
      "Only campaigns"
    ],
    correctAnswer: 1,
    explanation: "Affiliations track contact-to-account relationships."
  },
  {
    question: "Which NPSP feature helps manage volunteer hours?",
    options: [
      "Opportunity only",
      "Volunteer Jobs and Volunteer Hours",
      "Campaign only",
      "Household only"
    ],
    correctAnswer: 1,
    explanation: "Volunteer Jobs and Volunteer Hours track volunteer engagement."
  },
  {
    question: "What is the purpose of Payment records in NPSP?",
    options: [
      "To replace Opportunities",
      "To track individual payments against an Opportunity (e.g., pledge installments)",
      "To create campaigns",
      "To manage households"
    ],
    correctAnswer: 1,
    explanation: "Payment records track individual payments against Opportunities."
  },
  {
    question: "Which feature supports grant management in Nonprofit Cloud?",
    options: [
      "Standard Opportunity only",
      "Grant applications, requirements, and reporting",
      "Campaign only",
      "Household only"
    ],
    correctAnswer: 1,
    explanation: "Grant management features support applications and reporting."
  },
  {
    question: "What does the Forecast object support in NPSP?",
    options: [
      "Sales forecasting only",
      "Budget and revenue forecasting for fundraising",
      "Inventory only",
      "Campaign only"
    ],
    correctAnswer: 1,
    explanation: "Forecast supports budget and revenue planning for nonprofits."
  },
  {
    question: "Which reporting need is common for nonprofits?",
    options: [
      "Only sales pipeline",
      "Donor retention, campaign ROI, and gift summary",
      "Only product sales",
      "Only support cases"
    ],
    correctAnswer: 1,
    explanation: "Nonprofits need donor retention, campaign ROI, and gift reports."
  },
  {
    question: "What is the purpose of the Primary Affiliation in NPSP?",
    options: [
      "To replace Household",
      "To designate the primary account (e.g., employer) for a contact",
      "To track donations only",
      "To manage campaigns"
    ],
    correctAnswer: 1,
    explanation: "Primary Affiliation designates the main account for a contact."
  },
  {
    question: "Which integration is common for Nonprofit Cloud?",
    options: [
      "CPQ only",
      "Payment processors, fundraising platforms, and accounting",
      "Marketing Cloud only",
      "Slack only"
    ],
    correctAnswer: 1,
    explanation: "Nonprofits integrate with payment processors and fundraising tools."
  },
]

export default function NonprofitCloudPage() {
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
            code="NPC"
            description="The Nonprofit Cloud Consultant certification validates your expertise in implementing Salesforce solutions for nonprofit organizations."
            examDetails={{
              questions: 60,
              passingScore: "65%",
              duration: "105 min",
              cost: "$200",
            }}
            topics={[
              "Nonprofit Data Model",
              "NPSP Configuration",
              "Donation Management",
              "Recurring Giving",
              "Constituent Management",
              "Volunteer Management",
              "Program Management",
              "Grant Management",
              "Reporting & Dashboards",
              "Integration"
            ]}
            examSections={examSections}
            h1Text={getCertH1Text(slug)}
          examWeightageHeading={getCertExamWeightageHeading(slug)}
          />

          <div id="exam-prep">
            <ExamPrepContent slug={slug} />
          </div>

          {/* Key Concepts */}
          <div id="key-concepts" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Nonprofit Cloud Consultant: Key Concepts for the Exam</h2>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-1">NPSP Core Data Model: Households and Affiliations</p>
                <p>Nonprofit Success Pack (NPSP) is the data model foundation for Nonprofit Cloud. The Household Account Model creates an Account for each individual Contact (their household), automatically named &quot;[Last Name] Household.&quot; This differs from the standard B2B account model. Affiliations link Contacts to organisational Accounts (employer, chapter, board membership) — distinguishing where someone lives (Household) from where they work or serve (Organisation). The consultant configures the NPSP settings to match the nonprofit&apos;s engagement model and explains the household model to clients who are new to NPSP.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Fundraising: Opportunities, Payments, and Recurring Donations</p>
                <p>In NPSP, Opportunities represent donations and grants. Payment objects track actual received payments against an Opportunity — a single donation can have multiple scheduled payments. Recurring Donations create a series of Opportunities automatically on a schedule (monthly, quarterly, annual). Soft Credits allow non-donors (spouses, organisations that encouraged a gift) to receive credit for a donation without being the primary donor. The consultant configures NPSP payment settings, recurring donation schedules, and soft credit relationships to match the organisation&apos;s fundraising model.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Program Management: Services and Deliveries</p>
                <p>Program Management Module (PMM) tracks services delivered to beneficiaries. Key objects: Program (a service offering — food bank, job training), Program Engagement (a specific client&apos;s ongoing participation in a program), Service (a type of service — food box delivery, coaching session), Service Delivery (a specific instance of a service delivered to a client on a date). The consultant configures PMM to match the organisation&apos;s service model, sets up program-specific fields, and designs reports to measure program outcomes and client outcomes over time.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Grant Management: Funds and Allocations</p>
                <p>NPSP uses General Accounting Units (GAUs) to track restricted funds and allocations. A GAU represents a fund, grant, or project that donors and grantors restrict their gifts to. GAU Allocations split a donation between multiple GAUs (e.g., 60% to the education programme, 40% to general operations). The Award object (in Grants Management package) tracks grant applications, awards, and reporting requirements from funders. The consultant configures the fund management structure to support the organisation&apos;s grant reporting and restricted fund accounting needs.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Reporting and Impact Measurement</p>
                <p>Nonprofits need to demonstrate impact to funders and stakeholders. NPSP provides built-in reports for fundraising KPIs: donor retention rate, average gift size, year-over-year giving comparison, LYBUNT/SYBUNT analysis (Lapsed/Some Year But Unfortunately Not This year donors). Program impact reports track service delivery volume and client outcomes. CRM Analytics for Nonprofits provides pre-built dashboards for major donor portfolio analysis, campaign performance, and program impact measurement. The consultant designs the reporting strategy to support annual reports, grant reporting, and board presentations.</p>
              </div>
            </div>
          </div>


          {/* How to Pass Scenario Strategy */}
          <div id="scenario-tips" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Pass the Salesforce Nonprofit Cloud Consultant Exam</h2>
            <p className="text-sm text-gray-600 mb-5">
              The Nonprofit Cloud exam tests implementation of NPSP (Nonprofit Success Pack) and Nonprofit Cloud features for mission-driven organizations. Focus on the data model differences from commercial Salesforce and the fundraising/program management features.
            </p>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-1">NPSP Household Account Model</p>
                <p>NPSP uses Household Accounts (one per family/household) with Contacts as household members. Understand how this differs from the standard B2B account model and implications for duplicate management and household giving.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Gift Entry &amp; Payment Processing</p>
                <p>Know Nonprofit Cloud Gift Entry with its batch entry templates, gift commitments, and partial soft credits. Understand how payment processors integrate and how gift records relate to Opportunities.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Relationships &amp; Affiliations</p>
                <p>NPSP Relationships track personal connections between Contacts (e.g., spouse, board member). Affiliations track organizational connections between Contacts and Accounts. Know when to use each and how reciprocal relationships work.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Program Management</p>
                <p>Program Management Module (PMM) tracks services, programs, service schedules, and service deliveries. Know the PMM object model and how service delivery data rolls up to program reporting.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">TDTM (Table-Driven Trigger Management)</p>
                <p>NPSP uses TDTM to manage its trigger logic through configuration records rather than code. Understand how TDTM Handler records control trigger behavior and how to troubleshoot TDTM-related issues.</p>
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
