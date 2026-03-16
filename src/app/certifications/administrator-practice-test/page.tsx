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

const slug = 'administrator-practice-test'
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
// Canonical → main administrator guide to avoid CTR dilution; this page is sub-intent (practice test only).
export async function generateMetadata(): Promise<Metadata> {
  const baseMetadata = getCertMetadata(slug)
  const canonical = `${baseUrl}/certifications/administrator`
  return {
    ...baseMetadata,
    alternates: { canonical },
    openGraph: {
      ...baseMetadata.openGraph,
      url: canonical,
    },
  }
}

const sampleQuestions = [
  {
    question: "A sales manager wants to see which reps have logged the most calls this month. Which report type should they use?",
    options: ["Activities with Accounts", "Tasks and Events", "Accounts with Activities", "Activity History"],
    correctAnswer: 1,
    explanation: "Tasks and Events report type lets you report on activities including calls, meetings, and tasks.",
  },
  {
    question: "What is the maximum number of fields that can be tracked for field history on a custom object?",
    options: ["10 fields", "15 fields", "20 fields", "25 fields"],
    correctAnswer: 2,
    explanation: "You can track up to 20 fields per object for field history tracking.",
  },
  {
    question: "Which permission allows a user to transfer records they don't own?",
    options: ["Modify All", "Transfer Records", "Edit", "View All"],
    correctAnswer: 1,
    explanation: "The 'Transfer Records' permission allows users to transfer records they don't own to other users.",
  },
  {
    question: "What does Organization-Wide Defaults (OWD) control?",
    options: ["Only field visibility", "The baseline record-level access for each object (Private, Public Read Only, Public Read/Write)", "Only profiles", "Only permission sets"],
    correctAnswer: 1,
    explanation: "OWD sets the baseline access. Role hierarchy, sharing rules, and manual sharing grant additional access."
  },
  {
    question: "Which automation tool is recommended for updating a field when a record is created or edited?",
    options: ["Workflow Rule", "Record-Triggered Flow", "Process Builder", "Apex only"],
    correctAnswer: 1,
    explanation: "Record-Triggered Flow is the recommended declarative tool for record-triggered automation."
  },
  {
    question: "What is a validation rule used for?",
    options: ["Sending emails", "Preventing invalid data from being saved based on criteria", "Assigning records", "Creating reports"],
    correctAnswer: 1,
    explanation: "Validation rules enforce data quality by blocking saves that don't meet the criteria."
  },
  {
    question: "Which report format shows data in a spreadsheet-like layout?",
    options: ["Summary only", "Tabular", "Matrix", "Joined"],
    correctAnswer: 1,
    explanation: "Tabular reports display data in rows and columns, similar to a spreadsheet."
  },
  {
    question: "What is the purpose of a roll-up summary field?",
    options: ["To link objects", "To aggregate values from child records on a master-detail parent", "To create formulas", "To track history"],
    correctAnswer: 1,
    explanation: "Roll-up summary fields aggregate (SUM, COUNT, MIN, MAX) child records on a master object."
  },
  {
    question: "Which feature restricts access to specific fields regardless of record access?",
    options: ["Sharing Rules", "Field-Level Security", "Role Hierarchy", "OWD"],
    correctAnswer: 1,
    explanation: "Field-Level Security controls view and edit access to fields at the profile or permission set level."
  },
  {
    question: "What does a Master-Detail relationship provide that a Lookup does not?",
    options: ["Nothing different", "Cascade delete and roll-up summary fields", "Only roll-up summary", "Only cascade delete"],
    correctAnswer: 1,
    explanation: "Master-Detail supports cascade delete and roll-up summaries. Lookup is more flexible but doesn't support these."
  },
  {
    question: "Which dashboard component displays a single value (e.g., total pipeline)?",
    options: ["Bar chart", "Gauge", "Table", "Metric"],
    correctAnswer: 3,
    explanation: "The Metric component shows a single KPI or aggregated value prominently."
  },
  {
    question: "What is a record type used for?",
    options: ["Only security", "Offering different picklist values, page layouts, and processes for the same object", "Only page layouts", "Only workflows"],
    correctAnswer: 1,
    explanation: "Record types let you tailor picklists, page layouts, and business processes by record type."
  },
  {
    question: "Which feature helps prevent duplicate accounts or contacts?",
    options: ["Validation rules only", "Duplicate Rules with Matching Rules", "Workflow rules only", "Process Builder only"],
    correctAnswer: 1,
    explanation: "Duplicate Rules use Matching Rules to detect and prevent or warn about duplicates."
  },
  {
    question: "What does the Lightning App Builder allow you to customize?",
    options: ["Only reports", "App pages, record pages, and home pages with drag-and-drop components", "Only dashboards", "Only list views"],
    correctAnswer: 1,
    explanation: "Lightning App Builder customizes app, record, and home pages with declarative components."
  },
  {
    question: "Which sharing option grants access to records owned by users in a role or group?",
    options: ["OWD only", "Sharing Rules", "Manual sharing only", "Public groups only"],
    correctAnswer: 1,
    explanation: "Sharing Rules grant access based on ownership (e.g., share with a role or group)."
  },
]

export default function AdministratorPracticeTestPage() {
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
            code="Practice Test"
            description="Official-style practice test for the Platform Administrator (ADM-201) certification. Use this to gauge readiness and practice under exam-like conditions before taking the real exam."
            examDetails={{
              questions: 60,
              passingScore: "~65%",
              duration: "105 min",
              cost: "Practice only",
            }}
            topics={[
              "Configuration & Setup",
              "Object Manager & Fields",
              "Reports & Dashboards",
              "Security & Access",
              "Automation",
              "Sales & Service Cloud",
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
            <h2 className="text-2xl font-bold text-gray-900 mb-4">ADM-201 Practice Test: Key Concepts to Review</h2>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-1">Data Model & Object Relationships</p>
                <p>The ADM-201 practice exam heavily tests data modeling. Know the difference between Master-Detail (cascade delete, roll-up summaries, child shares parent OWD) and Lookup (no cascade delete, independent sharing, no roll-up summaries). External IDs mark a text field for upsert operations and external system matching. Schema Builder provides a visual canvas to view and create objects and relationships. Junction Objects enable many-to-many. Compound fields (Address, Geolocation) store multiple components in one field. Expect 3–5 data model questions in every practice set.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Security & Access Control</p>
                <p>Object-level security: set via Profiles and Permission Sets (CRUD). Field-level security: set via Profiles and Permission Sets per field. Record-level security: OWDs, Role Hierarchy, Sharing Rules, Manual Sharing, Teams. The principle of least privilege applies — start restrictive, open up selectively. Login Hours and Login IP Ranges restrict when and where users can log in. Connected Apps and OAuth govern API access. Delegated Administration lets non-sysadmin users manage specific user groups. Practice questions often present a user who can/cannot see something and ask what setting to change.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Automation & Process Logic</p>
                <p>Flows are the primary answer for most automation questions in ADM-201. Record-Triggered (before/after save), Screen Flows (guided UI), Scheduled Flows (time-based), and Autolaunched Flows (called from other automation). Validation Rules fire before the record saves — use them to enforce data quality. Formula fields are read-only calculated fields that update automatically. Roll-Up Summary fields aggregate child data on the parent. Default field values pre-fill fields on new records. Cross-Object Formulas reference parent object fields (up to 5 levels for Lookup, 1 level for Master-Detail from child to parent in roll-up direction).</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Reports & Dashboards for Practice Questions</p>
                <p>Exam practice questions frequently test who can see what on a dashboard. The Running User setting on a standard dashboard means everyone sees data as that user. Dynamic Dashboards (up to 5) let viewers see their own data — requires "Run Reports" permission. Dashboard components (charts, gauges, tables, metrics, Visualforce) each point to a source report. Report Schedules can be set to run reports and email results on a schedule. Custom Report Types define the objects and join conditions available to report builders. Bucket fields in reports let you group values without a formula field.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">AppExchange & Change Management</p>
                <p>AppExchange packages come in Managed (ISV, upgradeable, code protected) and Unmanaged (source editable, no upgrades) varieties. Always install AppExchange packages in a sandbox first and review required permissions before production install. Change Sets move metadata between orgs in the same Salesforce environment (e.g., sandbox to production). Sandboxes: Developer (small data), Developer Pro (more storage), Partial Copy (subset of data), Full (full copy). The deployment cycle is: develop in sandbox → test → deploy via Change Set, Metadata API, or Salesforce CLI.</p>
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
