import FullQuestionBankCta from '@/components/FullQuestionBankCta'
import CertificationCard from '@/components/CertificationCard'
import ExamPrepContent from '@/components/ExamPrepContent'
import CertPageSeo, { CertPageFaq } from '@/components/CertPageSeo'
import CertPageIntro from '@/components/CertPageIntro'
import CertPageCta from '@/components/CertPageCta'
import ExamFeesSection from '@/components/ExamFeesSection'
import ExamLogisticsSection from '@/components/ExamLogisticsSection'
import RelatedCertifications from '@/components/RelatedCertifications'
import CertTableOfContents from '@/components/CertTableOfContents'
import { getCertMetadata, getCertH1Text, getCertExamWeightageHeading, getCertPracticeQuestionsHeading, slugToDisplayName } from '@/lib/cert-seo-data'
import dynamic from 'next/dynamic'
import { Metadata } from 'next'

const PracticeQuestionsSection = dynamic(() => import('@/components/PracticeQuestionsSection'), { ssr: false })
import { getExamWeightage } from '@/lib/exam-weightage-data'
import Link from 'next/link'
import { RELEASE_CURRENT } from '@/lib/release-data'

const slug = 'advanced-administrator'
export async function generateMetadata() {
  return getCertMetadata(slug)
}

const sampleQuestions = [
  {
    question: "An organization wants to automatically share records with users based on criteria. Which feature should be used?",
    options: ["Manual Sharing", "Role Hierarchy", "Sharing Rules", "Public Groups"],
    correctAnswer: 2,
    explanation: "Sharing Rules allow you to automatically share records with users or groups based on record ownership or criteria.",
  },
  {
    question: "What is required before creating a roll-up summary field on a custom object?",
    options: ["A lookup relationship to the parent object", "A master-detail relationship where the custom object is the detail", "An external ID field", "A formula field"],
    correctAnswer: 1,
    explanation: "Roll-up summary fields can only be created on objects that are the master in a master-detail relationship.",
  },
  {
    question: "Which feature allows administrators to track changes to setup configuration?",
    options: ["Debug Log", "Setup Audit Trail", "Field History Tracking", "Event Monitoring"],
    correctAnswer: 1,
    explanation: "Setup Audit Trail tracks the last 180 days of setup changes made by administrators in your organization.",
  },
  {
    question: "A company needs to ensure that duplicate leads are not created. Which feature should be implemented?",
    options: ["Validation Rules", "Duplicate Rules with Matching Rules", "Unique Field", "Apex Trigger"],
    correctAnswer: 1,
    explanation: "Duplicate Rules combined with Matching Rules allow you to detect and prevent duplicate records from being created.",
  },
  {
    question: "What is the purpose of a Permission Set Group?",
    options: ["To assign multiple profiles to a user", "To bundle permission sets together for easier assignment", "To create a hierarchy of permissions", "To restrict access to objects"],
    correctAnswer: 1,
    explanation: "Permission Set Groups allow you to bundle multiple permission sets together, making it easier to assign a collection of permissions to users.",
  },
  {
    question: "Which of the following correctly describes how Salesforce record access is layered?",
    options: [
      "Sharing Rules set the baseline; profiles expand access above that",
      "Profiles set the ceiling; OWD cannot exceed profile permissions",
      "OWD sets the baseline record access, which is then expanded by role hierarchy, sharing rules, and manual sharing — never restricted below OWD",
      "OWD and profiles are evaluated simultaneously and the most restrictive setting wins"
    ],
    correctAnswer: 2,
    explanation: "OWD defines the minimum access to records. Role hierarchy, sharing rules, and manual sharing can only open access further. Object and field permissions are controlled separately by profiles and permission sets.",
  },
  {
    question: "What is the key difference between Custom Metadata Types and Custom Settings?",
    options: [
      "Custom Metadata Types can be included in packages and deployed via Change Sets; Custom Settings data records cannot be packaged",
      "Custom Settings support more field types than Custom Metadata Types",
      "Custom Metadata Types are instance-specific and not portable between orgs",
      "There is no practical difference between the two"
    ],
    correctAnswer: 0,
    explanation: "Custom Metadata Types are metadata — their records deploy with Change Sets and packages. Custom Settings data records must be recreated manually in each target org, making Custom Metadata the preferred choice for deployable, org-portable configuration.",
  },
  {
    question: "An admin wants to allow an HR manager to create and deactivate users without granting full System Administrator access. What should the admin configure?",
    options: [
      "Grant the HR manager the 'Manage Users' system permission via a permission set",
      "Assign the HR manager the System Administrator profile",
      "Set up Delegated Administration and define the HR manager as a Delegated Administrator with user management scope",
      "Add the HR manager to a Public Group with user management access"
    ],
    correctAnswer: 2,
    explanation: "Delegated Administration allows non-admin users to perform limited admin tasks — such as creating and deactivating users within defined profiles and roles — without requiring full System Administrator access.",
  },
  {
    question: "What is the purpose of Territory Management in Salesforce?",
    options: [
      "To define geographic boundaries for Experience Cloud sites",
      "To allow accounts and opportunities to be assigned to multiple sales territories based on rules, enabling flexible rep assignments across business units or regions",
      "To set OWD for accounts based on postal code",
      "To restrict lead assignment to specific regions using assignment rules"
    ],
    correctAnswer: 1,
    explanation: "Enterprise Territory Management lets admins define territory types, build territory hierarchies, and assign accounts/opportunities to multiple territories simultaneously — enabling complex, matrix-style sales coverage models.",
  },
  {
    question: "Which report type allows combining data from unrelated report types in a single view with up to 5 report blocks?",
    options: ["Summary", "Matrix", "Joined", "Tabular"],
    correctAnswer: 2,
    explanation: "Joined Reports combine up to 5 report blocks — each from a different report type — in a single view. This is useful for presenting side-by-side comparisons such as Opportunities vs. Cases for the same accounts.",
  },
  {
    question: "A company requires that any Opportunity discount greater than 30% must be approved by two different managers in sequence. Which feature handles this?",
    options: [
      "Validation Rule preventing save if discount exceeds 30%",
      "Workflow Rule with an email alert to managers",
      "Approval Process with multiple sequential approval steps and entry criteria",
      "Flow with a Pause element and record update"
    ],
    correctAnswer: 2,
    explanation: "Approval Processes support multiple sequential steps, each with its own approver, criteria, and actions. They are the correct tool for structured, multi-level sign-off workflows like discount approvals.",
  },
  {
    question: "What is the function of a Muting Permission Set in a Permission Set Group?",
    options: [
      "To silence Chatter notifications for all users in a permission set group",
      "To suppress specific permissions within a Permission Set Group without removing the entire permission set",
      "To hide custom objects from a permission set group",
      "To restrict field-level security on sensitive fields for a group of users"
    ],
    correctAnswer: 1,
    explanation: "Muting Permission Sets allow admins to selectively suppress specific permissions included in one of the permission sets within a group — without removing the entire permission set. This provides fine-grained control over bundled permissions.",
  },
  {
    question: "Data imported via Data Loader is creating duplicate Account records. Which combination of features prevents this going forward?",
    options: [
      "Validation Rules on the Account object",
      "Matching Rules and Duplicate Rules configured on the Account object",
      "Unique Field constraint on the Account Name field",
      "Process Builder set to check for existing records before inserting"
    ],
    correctAnswer: 1,
    explanation: "Matching Rules define how Salesforce identifies potential duplicates (by comparing fields like name, email, phone). Duplicate Rules then control what happens when a match is found — blocking the save, alerting the user, or logging the duplicate.",
  },
  {
    question: "An admin needs to import 200,000 records and later update them using an external system's unique identifier. Which field type should be added before the initial import?",
    options: [
      "Auto-Number field",
      "Text field with unique constraint",
      "External ID field",
      "Formula field returning the record ID"
    ],
    correctAnswer: 2,
    explanation: "External ID fields store a unique identifier from an external system. Data Loader and the API can use External IDs to upsert records — matching on the external ID to update existing records or insert new ones without knowing the Salesforce record ID.",
  },
]

export default function AdvancedAdministratorPage() {
  const examSections = getExamWeightage(slug)
  return (
    <div data-critical-content className="max-w-7xl mx-auto px-4 py-12">
      <CertPageSeo slug={slug} certTitle={slugToDisplayName(slug)} />
        <p className="text-sm text-gray-600 mb-6">
          If you haven&apos;t passed the entry-level admin exam yet, start with our{' '}
          <Link href="/certifications/administrator" className="text-salesforce-blue font-medium hover:underline">ADM-201 study guide</Link> first.
          {' '}For faster prep, use our{' '}
          <Link href="/adm-201-exam-tips-2026" className="text-salesforce-blue font-medium hover:underline">ADM-201 exam tips ({RELEASE_CURRENT})</Link>{' '}
          and{' '}
          <Link href="/adm-201-vs-app-builder" className="text-salesforce-blue font-medium hover:underline">ADM-201 vs App Builder guide</Link>.
        </p>
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
            code="ADM-211"
            description="The Advanced Administrator certification validates your advanced knowledge of Salesforce administration, including complex security models, advanced automation, and performance optimization."
            examDetails={{
              questions: 60,
              passingScore: "65%",
              duration: "105 min",
              cost: "$200",
            }}
            topics={[
              "Security & Access",
              "Advanced Automation",
              "Approval Processes",
              "Data Management",
              "Advanced Reporting",
              "Performance Optimization",
              "Change Management",
              "Auditing & Monitoring",
              "Content Management",
              "AppExchange"
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
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Advanced Administrator: Key Concepts for the Exam</h2>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-1">The Salesforce Security Model (Layered Access)</p>
                <p>Record access is built in layers: <strong>OWD</strong> sets the baseline (Private, Public Read Only, Public Read/Write). <strong>Role Hierarchy</strong> grants managers access to subordinates' records. <strong>Sharing Rules</strong> extend access to groups or roles based on ownership or criteria. <strong>Manual Sharing</strong> grants one-off access. Object and field access is controlled separately by <strong>Profiles</strong> and <strong>Permission Sets</strong>. The exam frequently tests which layer to use for a given access requirement — and that access can only be opened wider, never restricted below OWD.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Advanced Automation: Flow vs Approval Process</p>
                <p>Flows handle complex multi-step logic, branching, loops, and real-time or scheduled automation. Approval Processes handle structured human sign-off workflows with defined approvers, multi-level steps, and approval/rejection actions. The exam tests when to use each — use Approval Processes for discount or contract sign-off scenarios; use Flow for dynamic automation without human involvement. Workflow Rules are legacy and being retired in favor of Flow.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Delegated Administration and Permission Set Groups</p>
                <p>Delegated Administrators can manage users within defined profiles without full admin access — ideal for HR managers or regional admins. Permission Set Groups bundle multiple permission sets for easier assignment. Muting Permission Sets within a group suppress specific permissions without removing the entire set. The exam tests the difference between these features and when each is appropriate.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Data Management: Duplicate Rules, External IDs, and Custom Metadata</p>
                <p>Matching Rules identify duplicate records based on field comparisons. Duplicate Rules define what happens when duplicates are detected (alert, block, or log). External ID fields enable upsert operations via API and Data Loader — critical for integrations. Custom Metadata Types differ from Custom Settings in that metadata records are deployable via Change Sets and packages, while Custom Settings data must be manually recreated in each org.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Advanced Reporting: Joined Reports and Cross Filters</p>
                <p>Joined Reports combine up to 5 report blocks from different report types in a single view — useful for comparing Opportunities vs. Cases for the same account. Cross Filters let you filter report results based on the presence or absence of related records (e.g., Accounts without Open Opportunities). Both are Advanced Administrator-level reporting features the exam regularly tests, along with report subscriptions, bucket fields, and report types.</p>
              </div>
            </div>
          </div>

          <PracticeQuestionsSection
            heading={getCertPracticeQuestionsHeading(slug)}
            introText="Test your knowledge with these sample questions. Click on an answer to select it, then check your answer to see if you're correct."
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
