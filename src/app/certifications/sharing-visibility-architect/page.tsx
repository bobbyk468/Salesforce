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

const slug = 'sharing-visibility-architect'
export async function generateMetadata() {
  return getCertMetadata(slug)
}

const sampleQuestions = [
  {
    question: "What is the primary focus of a Sharing and Visibility Architect?",
    options: ["Only reports", "Designing sound, scalable solutions that meet sharing and visibility security requirements", "Email only", "Slack only"],
    correctAnswer: 1,
    explanation: "They design solutions that meet sharing and visibility security requirements.",
  },
  {
    question: "Which layer determines the baseline record access in Salesforce?",
    options: ["Sharing rules only", "Organization-Wide Defaults (OWD)", "Permission sets only", "Profiles only"],
    correctAnswer: 1,
    explanation: "OWD defines the baseline access level for each object (Private, Public Read Only, etc.).",
  },
  {
    question: "What is the purpose of a Sharing Rule?",
    options: ["To restrict access", "To extend access to records based on ownership or criteria", "To delete records", "To send emails"],
    correctAnswer: 1,
    explanation: "Sharing rules open access to records that OWD would otherwise restrict.",
  },
  {
    question: "Which sharing mechanism is used for criteria-based sharing?",
    options: ["Only role hierarchy", "Criteria-Based Sharing Rules", "Only manual share", "Only OWD"],
    correctAnswer: 1,
    explanation: "Criteria-Based Sharing Rules grant access based on record field values.",
  },
  {
    question: "What does 'visibility' mean in the context of this certification?",
    options: ["Only UI", "What data a user can see based on sharing, OWD, and permissions", "Only reports", "Only dashboards"],
    correctAnswer: 1,
    explanation: "Visibility is what data a user can see, governed by sharing and permissions.",
  },
  {
    question: "What does the role hierarchy contribute to sharing?",
    options: [
      "Nothing",
      "Inherited record access for users above in the hierarchy",
      "Only reports",
      "Only dashboards"
    ],
    correctAnswer: 1,
    explanation: "Role hierarchy grants access to records owned by users below."
  },
  {
    question: "Which sharing rule type uses ownership?",
    options: [
      "Criteria-based only",
      "Owner-based (e.g., share with role, group, or territory)",
      "Manual only",
      "OWD only"
    ],
    correctAnswer: 1,
    explanation: "Owner-based sharing rules grant access by role, group, or territory."
  },
  {
    question: "What is manual sharing used for?",
    options: [
      "To replace sharing rules",
      "One-off or exceptional access to specific records",
      "All access",
      "No access"
    ],
    correctAnswer: 1,
    explanation: "Manual sharing grants one-off access to specific records."
  },
  {
    question: "Which consideration applies when designing for large numbers of sharing rules?",
    options: [
      "No limit",
      "Performance: rule count, criteria complexity, and recalculation",
      "Only security",
      "Only OWD"
    ],
    correctAnswer: 1,
    explanation: "Many rules and complex criteria can affect performance."
  },
  {
    question: "What does Grant Access Using Hierarchies control?",
    options: [
      "Only profiles",
      "Whether users above in role hierarchy can access subordinates' records",
      "Only OWD",
      "Only permission sets"
    ],
    correctAnswer: 1,
    explanation: "This setting controls role hierarchy-based record access."
  },
  {
    question: "Which object supports Territory Management sharing?",
    options: [
      "Account only",
      "Territory and Territory Model",
      "Opportunity only",
      "Lead only"
    ],
    correctAnswer: 1,
    explanation: "Territory and Territory Model enable territory-based sharing."
  },
  {
    question: "What is the purpose of a Permission Set Group?",
    options: [
      "To replace profiles",
      "To bundle permission sets and simplify assignment",
      "To replace sharing rules",
      "To create OWD"
    ],
    correctAnswer: 1,
    explanation: "Permission Set Groups bundle permission sets for easier assignment."
  },
  {
    question: "Which data access pattern can impact performance?",
    options: [
      "No impact",
      "Sharing rule recalculation, report filters, and list view limits",
      "Only OWD",
      "Only manual share"
    ],
    correctAnswer: 1,
    explanation: "Recalculation, report filters, and limits affect performance."
  },
  {
    question: "What does Public Read Only OWD mean?",
    options: [
      "No access",
      "All users can read all records; only owners can edit",
      "All can edit",
      "Private"
    ],
    correctAnswer: 1,
    explanation: "Public Read Only allows read for all; only owners can edit."
  },
  {
    question: "Which best practice supports maintainable sharing design?",
    options: [
      "Unlimited rules",
      "Minimize rules, use criteria wisely, and document design",
      "Manual share only",
      "No documentation"
    ],
    correctAnswer: 1,
    explanation: "Fewer rules, clear criteria, and documentation support maintainability."
  },
]

export default function SharingVisibilityArchitectPage() {
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
            code="Sharing & Visibility"
            description="Certified Platform Sharing and Visibility Architects are fluent in designing sound, scalable, and high-performing technical solutions on the Salesforce Platform that meet sharing and visibility security requirements."
            examDetails={{ questions: 60, passingScore: '~68%', duration: '120 min', cost: '$400' }}
            topics={['OWD', 'Sharing Rules', 'Role Hierarchy', 'Permission Sets', 'Profiles', 'Criteria-Based Sharing', 'Performance', 'Governance', 'Best Practices', 'Security']}
            examSections={examSections}
            h1Text={getCertH1Text(slug)}
          examWeightageHeading={getCertExamWeightageHeading(slug)}
          />

          <div id="exam-prep">
            <ExamPrepContent slug={slug} />
          </div>

          {/* Key Concepts */}
          <div id="key-concepts" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Sharing and Visibility Architect: Key Concepts for the Exam</h2>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-1">OWD and the Security Baseline</p>
                <p>Organisation-Wide Defaults set the baseline record access: Private (only owner and above in role hierarchy), Public Read Only (all users read, only owner writes), Public Read/Write (all users read and write), Controlled by Parent (detail records follow master). OWD is the minimum &mdash; it can only be opened wider by other mechanisms, never restricted further. The exam tests which OWD setting applies to a given scenario and what the downstream implications are for sharing mechanisms.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Record Sharing: Role Hierarchy, Rules, and Manual Sharing</p>
                <p>Role Hierarchy automatically grants managers access to their subordinates&apos; records &mdash; this is implicit sharing. Sharing Rules extend access beyond OWD to specific roles, groups, or territories &mdash; either ownership-based or criteria-based. Manual Sharing allows record owners to grant access to specific users for individual records &mdash; not scalable. Apex Sharing (using Share objects) enables programmatic sharing for complex business rules. The exam tests which sharing mechanism is appropriate for each access requirement.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">External User Sharing: Communities and Partner Portals</p>
                <p>External users follow a different sharing model. Sharing Sets grant external users (Customer Community licence) access to records related to their Account or Contact &mdash; without roles or sharing rules. External Account Hierarchy enables partner users to see records owned by users below them in the partner account hierarchy. Guest User sharing rules grant unauthenticated visitors access to specific records. Know the licence-to-sharing mechanism mapping: Customer Community &rarr; Sharing Sets, Customer Community Plus &rarr; Sharing Rules &amp; Roles, Partner Community &rarr; External Account Hierarchy.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Field and Object Security: Profiles vs Permission Sets</p>
                <p>Object permissions (CRED: Create, Read, Edit, Delete) are set on Profiles and Permission Sets. Field-Level Security controls which fields a user can see and edit &mdash; also set on Profiles and Permission Sets. The effective permissions are the union of the profile and all assigned permission sets. View All and Modify All object permissions bypass the sharing model for that object. The exam tests layered permission evaluation and when to use Profiles vs Permission Sets for access management.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Sharing Performance and Audit</p>
                <p>Sharing recalculation runs automatically when OWD or sharing rules change &mdash; this can be a long-running operation for large orgs. Sharing recalculation can be deferred using the Defer Sharing Recalculation feature. The Sharing Hierarchy viewer shows which mechanisms grant access to a specific record. Shield Platform Encryption encrypts data at rest for fields configured with encryption &mdash; this interacts with sharing and SOQL performance. The exam tests when to use audit tools (Setup Audit Trail, Field History Tracking) and the performance implications of sharing configurations.</p>
              </div>
            </div>
          </div>


          {/* How to Pass Scenario Strategy */}
          <div id="scenario-tips" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Pass the Salesforce Sharing and Visibility Architect Exam</h2>
            <p className="text-sm text-gray-600 mb-5">
              The Sharing &amp; Visibility Architect exam focuses entirely on Salesforce&apos;s record access model. Every question tests your ability to design and troubleshoot complex sharing configurations — from OWDs to Apex Managed Sharing.
            </p>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-1">Access Evaluation Order</p>
                <p>Understand the exact order in which access is evaluated: OWD → Role Hierarchy → Sharing Rules → Manual Sharing → Teams → Apex Managed Sharing → Profile/PermSet object permissions. Know which layers are additive.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Criteria-Based Sharing Rules</p>
                <p>Know the difference between Owner-Based and Criteria-Based Sharing Rules. Understand when criteria-based rules fire, their limits (300 per object), and how they interact with other sharing mechanisms.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">External Sharing Model</p>
                <p>The external sharing model (OWD for portal users) is separate from the internal model. Know how to configure Sharing Sets for portal users and how Account Teams extend access to Experience Cloud contacts.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Performance Considerations</p>
                <p>Complex sharing configurations (large sharing rule counts, deep role hierarchies) cause sharing recalculation performance issues. Know how to use defer sharing calculation and design for recalculation efficiency.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Apex Managed Sharing</p>
                <p>Apex Managed Sharing uses Share objects (AccountShare, etc.) with a specific Cause value. Know how to grant, revoke, and maintain programmatic shares and how they persist through OWD changes.</p>
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
