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

const slug = 'platform-foundations'
export async function generateMetadata() {
  return getCertMetadata(slug)
}

const sampleQuestions = [
  {
    question: "Who is the Salesforce Associate certification designed for?",
    options: ["Developers only", "Individuals with up to 6 months of user experience on Salesforce", "Architects only", "Marketers only"],
    correctAnswer: 1,
    explanation: "The Associate certification is designed for individuals who may have up to 6 months of user experience.",
  },
  {
    question: "What does the Customer 360 Platform refer to?",
    options: ["Only Sales Cloud", "The integrated set of Salesforce products that connect customer data across the organization", "Only Marketing Cloud", "Only Service Cloud"],
    correctAnswer: 1,
    explanation: "Customer 360 is Salesforce's integrated platform connecting customer data across products.",
  },
  {
    question: "Which object is central to the Salesforce CRM data model?",
    options: ["Report", "Account", "Dashboard", "Email Template"],
    correctAnswer: 1,
    explanation: "Account is a core object representing companies or people you do business with.",
  },
  {
    question: "What is a Record in Salesforce?",
    options: ["A report type", "A single row of data in an object (e.g., one Account)", "A dashboard", "A permission set"],
    correctAnswer: 1,
    explanation: "A record is a single row of data in an object.",
  },
  {
    question: "Which feature allows users to see their tasks and calendar?",
    options: ["Reports only", "Home page and Activity components", "Only dashboards", "Only list views"],
    correctAnswer: 1,
    explanation: "The Home page and Activity components show tasks and calendar.",
  },
  {
    question: "What is a Dashboard in Salesforce?",
    options: [
      "A single report",
      "A collection of report components displayed together for at-a-glance visibility",
      "A list view only",
      "An email template"
    ],
    correctAnswer: 1,
    explanation: "Dashboards display multiple report charts and metrics in a single view."
  },
  {
    question: "Which Salesforce feature enables real-time collaboration on records?",
    options: [
      "Reports only",
      "Chatter and Activity",
      "Validation rules only",
      "Workflow rules"
    ],
    correctAnswer: 1,
    explanation: "Chatter and Activity enable comments, mentions, and collaboration on records."
  },
  {
    question: "What does the Lightning Experience refer to?",
    options: [
      "A mobile app only",
      "The modern Salesforce user interface with responsive design and enhanced features",
      "Classic only",
      "An API"
    ],
    correctAnswer: 1,
    explanation: "Lightning Experience is the modern, responsive Salesforce UI."
  },
  {
    question: "Which object typically represents a person or company you do business with?",
    options: [
      "Opportunity",
      "Account",
      "Task",
      "Report"
    ],
    correctAnswer: 1,
    explanation: "Account represents companies or people you do business with."
  },
  {
    question: "What is a List View in Salesforce?",
    options: [
      "A report type",
      "A filtered list of records from an object displayed in a table format",
      "A dashboard only",
      "A permission set"
    ],
    correctAnswer: 1,
    explanation: "List views show filtered records in a tabular layout for quick access."
  },
  {
    question: "Which navigation element helps users find records and apps in Salesforce?",
    options: [
      "Report Builder only",
      "App Launcher and global search",
      "Validation rules only",
      "Workflow"
    ],
    correctAnswer: 1,
    explanation: "App Launcher and global search help users navigate and find content."
  },
  {
    question: "What does the Customer 360 Platform aim to achieve?",
    options: [
      "Only sales automation",
      "A single, unified view of the customer across all touchpoints and systems",
      "Only service cloud",
      "Only marketing"
    ],
    correctAnswer: 1,
    explanation: "Customer 360 unifies customer data across sales, service, marketing, and more."
  },
  {
    question: "Which feature allows users to access Salesforce on mobile devices?",
    options: [
      "Desktop only",
      "Salesforce Mobile App",
      "Email only",
      "Reports only"
    ],
    correctAnswer: 1,
    explanation: "The Salesforce Mobile App provides full CRM access on phones and tablets."
  },
  {
    question: "What is the purpose of Reports in Salesforce?",
    options: [
      "To send emails only",
      "To organize, filter, and display data from your Salesforce records",
      "To create dashboards only",
      "To assign tasks"
    ],
    correctAnswer: 1,
    explanation: "Reports query and display data from your org's objects and records."
  },
  {
    question: "Which Salesforce concept represents a potential sale?",
    options: [
      "Account",
      "Opportunity",
      "Contact",
      "Lead"
    ],
    correctAnswer: 1,
    explanation: "Opportunity represents a potential sale or deal being pursued."
  },
]

export default function PlatformFoundationsPage() {
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
            code="Associate"
            description="The Salesforce Associate Certification is designed for individuals who may have up to 6 months of user experience. It validates foundational knowledge and understanding of the Customer 360 Platform."
            examDetails={{ questions: 40, passingScore: '~65%', duration: '75 min', cost: '$75' }}
            topics={['Customer 360', 'Objects & Records', 'Navigation', 'Reports & Dashboards', 'Collaboration', 'Mobile', 'Security Basics', 'Data Model']}
            examSections={examSections}
            h1Text={getCertH1Text(slug)}
          examWeightageHeading={getCertExamWeightageHeading(slug)}
          />

          <div id="exam-prep">
            <ExamPrepContent slug={slug} />
          </div>


          {/* Key Concepts */}
          <div id="key-concepts" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Salesforce Platform Foundations: Key Concepts for the Exam</h2>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-1">Salesforce Platform Architecture</p>
                <p>Salesforce is a multi-tenant cloud platform — all customers share the same infrastructure but data is logically isolated. The platform provides automatic upgrades (3 major releases per year: Spring, Summer, Winter), managed scalability, and built-in high availability. The metadata-driven architecture means that customizations (objects, fields, layouts, code) are stored as metadata rather than application code changes. The Lightning Platform delivers Force.com (declarative + code), Experience Cloud (portals), and Einstein (AI) on a common foundation. The Foundations exam tests understanding of the multi-tenant model, what the metadata layer controls, and how Salesforce manages upgrades without breaking customer customizations.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Data Modeling Basics</p>
                <p>Salesforce organizes data into Objects (equivalent to database tables) and Records (rows). Standard Objects (Account, Contact, Lead, Opportunity, Case) are pre-built. Custom Objects store business-specific data. Fields define the data types stored in an object. Record Types allow different page layouts and picklist values per user group on the same object. Relationships connect objects: Lookup (loose coupling, optional parent), Master-Detail (tight coupling, cascade delete, roll-up summary). External Objects connect to external data via Salesforce Connect. The exam tests field type selection (Formula, Roll-Up Summary, Picklist, Text, Currency), when to use Lookup vs. Master-Detail, and how Record Types enable different business processes on the same object.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Security Model Overview</p>
                <p>Salesforce security operates at four levels: Org (login, network access), Object (CRUD via profiles/permission sets), Field (read/edit via profiles/permission sets), and Record (OWD + Role Hierarchy + Sharing). Profiles assign baseline permissions to every user of a type. Permission Sets grant additional permissions to specific users without changing the profile. Permission Set Groups bundle multiple Permission Sets. Org-Wide Defaults (OWD) set the most restrictive baseline access for records. Role Hierarchy and Sharing Rules extend record visibility beyond OWD. The exam tests which security layer to modify to solve a given access problem — know that you always configure the most restrictive layer first, then open up selectively.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Automation Overview: Declarative Tools</p>
                <p>Salesforce provides a suite of declarative automation tools. Validation Rules prevent records from being saved if data doesn&apos;t meet criteria — fires before save. Formula Fields calculate values automatically from other field values — read-only. Default Field Values pre-fill fields on new records. Record-Triggered Flows execute automation before or after a record save — replaces Process Builder and Workflow Rules. Approval Processes route records through human reviewers. Scheduled Flows process batches of records at a scheduled time. The Foundations exam tests which tool to use for: enforcing data quality (Validation Rule), calculating a derived value (Formula Field), automating a multi-step process (Flow), or requiring manager sign-off (Approval Process).</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">AppExchange, Ecosystem & Trailhead</p>
                <p>AppExchange is Salesforce&apos;s marketplace for third-party applications, components, Flows, and Lightning Bolts. Managed Packages are ISV-published solutions that are upgradeable and have protected code. Unmanaged Packages are open-source and not upgradeable. Security Review ensures AppExchange listings meet Salesforce security standards. Partner Ecosystem includes consulting SIs, ISVs, and Salesforce-trained professionals (Trailblazers). Trailhead is the free learning platform — modules, trails, superbadges, and certifications. Trailblazer Community provides forums and user groups. The Foundations exam tests the difference between managed and unmanaged packages, how to evaluate an AppExchange listing, and the role of the Salesforce ecosystem in extending the platform.</p>
              </div>
            </div>
          </div>

          {/* How to Pass Scenario Strategy */}
          <div id="scenario-tips" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Pass the Salesforce Platform App Builder Foundations Exam</h2>
            <p className="text-sm text-gray-600 mb-5">
              This associate-level exam tests foundational knowledge of the Salesforce platform. Questions focus on what Salesforce can do, how core features work together, and basic configuration — ideal for those new to the ecosystem.
            </p>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-1">Understand the Core Data Model</p>
                <p>Know standard vs. custom objects, field types, and relationship types (lookup vs. master-detail). Understand how the App Builder uses these building blocks to create business applications.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Core Automation Features</p>
                <p>Know Flow Builder for automation, validation rules for data quality, formula fields for calculated values, and approval processes for multi-step reviews. No deep configuration details required — focus on use cases.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">User Management Basics</p>
                <p>Profiles control what users can do; Roles control what data they can see via the role hierarchy. Permission Sets add access beyond a profile. These three work together to govern user access.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Reports &amp; Dashboards Overview</p>
                <p>Know that reports query Salesforce data and dashboards visualize report data. Understand the four report types at a high level and that dashboards require a running user for data access.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">The Salesforce Ecosystem</p>
                <p>Understand AppExchange for third-party apps, Trailhead for learning, and the main Salesforce clouds (Sales, Service, Marketing, Experience, Platform) at a high level — what each cloud solves and when it&apos;s appropriate.</p>
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
            <h2 id="next-certs-heading" className="text-base font-semibold text-gray-900 mb-3">Next Certifications After Associate</h2>
            <p className="text-sm text-gray-700 mb-2">After earning an associate credential, many candidates move to role-based certifications:</p>
            <ul className="space-y-2 text-sm">
              <li><Link href="/certifications/administrator" className="text-salesforce-blue font-medium hover:underline">Platform Administrator (ADM-201)</Link></li>
              <li><Link href="/certifications/developer-1" className="text-salesforce-blue font-medium hover:underline">Platform Developer I</Link></li>
              <li><Link href="/certifications/ai-associate" className="text-salesforce-blue font-medium hover:underline">AI Associate</Link></li>
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
