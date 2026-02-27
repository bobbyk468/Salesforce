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

const slug = 'application-architect'
export async function generateMetadata() {
  return getCertMetadata(slug)
}

const sampleQuestions = [
  {
    question: "What is the focus of an Application Architect?",
    options: ["Only Apex", "Deep understanding of native Salesforce features and modeling role hierarchy, data, and sharing", "Email only", "Slack only"],
    correctAnswer: 1,
    explanation: "Application Architects have deep understanding of native Salesforce features and model role hierarchy, data, and sharing.",
  },
  {
    question: "Which sharing mechanism is used to open access based on record ownership?",
    options: ["Only OWD", "Sharing rules", "Only profiles", "Only permission sets"],
    correctAnswer: 1,
    explanation: "Sharing rules extend access based on ownership or criteria.",
  },
  {
    question: "What is the role hierarchy used for?",
    options: ["Only reporting", "Inheriting record access and roll-up for forecasts and reports", "Email only", "CPQ only"],
    correctAnswer: 1,
    explanation: "Role hierarchy controls record access inheritance and roll-up for reporting and forecasts.",
  },
  {
    question: "Which certification is typically a prerequisite for Application Architect?",
    options: ["Email Specialist", "Platform Developer I and Sharing and Visibility Architect (or equivalent knowledge)", "Slack only", "Marketing Cloud only"],
    correctAnswer: 1,
    explanation: "Application Architect builds on platform and sharing/visibility knowledge.",
  },
  {
    question: "What does 'modeling data' mean for an Application Architect?",
    options: ["Only backups", "Designing object model, relationships, and data volume strategy", "Only reports", "Only dashboards"],
    correctAnswer: 1,
    explanation: "Modeling data includes object design, relationships, and data volume strategy.",
  },
  {
    question: "What does Organization-Wide Defaults (OWD) control?",
    options: [
      "Only profiles",
      "The baseline record access for each object (Private, Public Read Only, etc.)",
      "Only permission sets",
      "Only roles"
    ],
    correctAnswer: 1,
    explanation: "OWD defines the default sharing model for each object."
  },
  {
    question: "Which mechanism extends access when OWD is Private?",
    options: [
      "OWD only",
      "Sharing rules, role hierarchy, and manual sharing",
      "Permission sets only",
      "Profiles only"
    ],
    correctAnswer: 1,
    explanation: "Sharing rules, role hierarchy, and manual sharing extend access beyond OWD."
  },
  {
    question: "What is the purpose of a criteria-based sharing rule?",
    options: [
      "To restrict access",
      "To grant access to records that match specified criteria",
      "To create reports",
      "To assign users"
    ],
    correctAnswer: 1,
    explanation: "Criteria-based sharing rules grant access based on field values."
  },
  {
    question: "Which Salesforce feature supports multi-tenant data isolation?",
    options: [
      "Only profiles",
      "Sharing model, org ID, and platform architecture",
      "Permission sets only",
      "Roles only"
    ],
    correctAnswer: 1,
    explanation: "Sharing model and org-level isolation provide multi-tenant security."
  },
  {
    question: "What does the development lifecycle for an Application Architect include?",
    options: [
      "Only coding",
      "Design, development, testing, deployment, and governance",
      "Only deployment",
      "Only documentation"
    ],
    correctAnswer: 1,
    explanation: "Lifecycle spans design through deployment with governance."
  },
  {
    question: "Which relationship affects record-level security and roll-up?",
    options: [
      "Lookup only",
      "Master-Detail (sharing inherits from parent)",
      "Junction object only",
      "External lookup only"
    ],
    correctAnswer: 1,
    explanation: "Master-Detail affects sharing; child inherits parent's access."
  },
  {
    question: "What is the purpose of a delegated admin group?",
    options: [
      "To replace sys admin",
      "To grant limited admin capabilities to specific users",
      "To create profiles",
      "To assign permission sets only"
    ],
    correctAnswer: 1,
    explanation: "Delegated admin groups provide scoped admin access."
  },
  {
    question: "Which integration consideration applies to Application Architects?",
    options: [
      "Ignore security",
      "Authentication, data ownership, and sharing for integrated data",
      "Only REST",
      "Only batch"
    ],
    correctAnswer: 1,
    explanation: "Integration must consider auth, ownership, and sharing."
  },
  {
    question: "What does visibility mean in the sharing context?",
    options: [
      "Only UI",
      "Which records a user can see based on sharing rules and permissions",
      "Only reports",
      "Only dashboards"
    ],
    correctAnswer: 1,
    explanation: "Visibility determines which records are visible to users."
  },
  {
    question: "Which best practice supports scalable role hierarchy design?",
    options: [
      "Unlimited depth",
      "Keep hierarchy flat where possible; avoid deep nesting",
      "One role only",
      "No hierarchy"
    ],
    correctAnswer: 1,
    explanation: "Flatter hierarchies simplify sharing and maintenance."
  },
]

export default function ApplicationArchitectPage() {
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
            code="Application Architect"
            description="Certified Application Architects have a deep understanding of native Salesforce features and functionality. They're also experts at modeling a role hierarchy, data, and appropriate sharing mechanisms."
            examDetails={{ questions: 60, passingScore: '~68%', duration: '120 min', cost: '$400' }}
            topics={['Data Modeling', 'Role Hierarchy', 'Sharing', 'Visibility', 'Native Features', 'Governance', 'Best Practices', 'Integration', 'Security', 'Scalability']}
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
