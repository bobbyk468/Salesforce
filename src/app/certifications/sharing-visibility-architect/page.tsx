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

          <div id="practice-questions" className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{getCertPracticeQuestionsHeading(slug)}</h2>
            <p className="text-gray-600 mb-8">{getPracticeQuestionsIntro(sampleQuestions.length)}</p>
            {sampleQuestions.map((q, index) => (
              <QuestionCard key={index} questionNumber={index + 1} question={q.question} options={q.options} correctAnswer={q.correctAnswer} explanation={q.explanation} />
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
