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

          <div id="practice-questions" className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{getCertPracticeQuestionsHeading(slug)}</h2>
            <p className="text-gray-600 mb-8">{getPracticeQuestionsIntro(sampleQuestions.length, 'aligned to the Administrator exam.')}</p>
            {sampleQuestions.map((q, index) => (
              <QuestionCard
                key={index}
                questionNumber={index + 1}
                question={q.question}
                options={q.options}
                correctAnswer={q.correctAnswer}
                explanation={q.explanation}
              />
            ))}
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
