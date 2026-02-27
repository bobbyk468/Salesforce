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

const slug = 'dev-lifecycle-deployment-architect'
export async function generateMetadata() {
  return getCertMetadata(slug)
}

const sampleQuestions = [
  {
    question: "What is the primary focus of a Development Lifecycle and Deployment Architect?",
    options: ["Only coding", "Assessing architecture environments and requirements to implement management solutions for deployment on the Salesforce Platform", "Email only", "Slack only"],
    correctAnswer: 1,
    explanation: "They assess environments and implement management solutions for deployment.",
  },
  {
    question: "Which tool is used for source-driven deployments in Salesforce?",
    options: ["Only Change Sets", "Salesforce CLI and source tracking (e.g., Salesforce DX)", "Only Data Loader", "Only Workbench"],
    correctAnswer: 1,
    explanation: "Salesforce CLI and source tracking (e.g., Salesforce DX) support source-driven deployments.",
  },
  {
    question: "What is the purpose of Change Sets?",
    options: ["Only backup", "Moving metadata between orgs (e.g., sandbox to production)", "Only reports", "Only dashboards"],
    correctAnswer: 1,
    explanation: "Change Sets move metadata between orgs in deployment pipelines.",
  },
  {
    question: "Which environment is typically used for production-like testing?",
    options: ["Developer org only", "Full Copy or Partial Copy sandbox", "Production only", "Scratch org only"],
    correctAnswer: 1,
    explanation: "Full Copy or Partial Copy sandboxes provide production-like environments for testing.",
  },
  {
    question: "What does CI/CD mean in the context of Salesforce deployment?",
    options: ["Only manual", "Continuous Integration and Continuous Deployment (automated build and release)", "Only integration", "Only deployment"],
    correctAnswer: 1,
    explanation: "CI/CD automates build, test, and release for Salesforce metadata.",
  },
  {
    question: "What is a scratch org used for?",
    options: [
      "Production deployment",
      "Temporary, configurable orgs for development and testing",
      "Full copy sandbox only",
      "Data load only"
    ],
    correctAnswer: 1,
    explanation: "Scratch orgs are temporary, configurable orgs for dev and testing."
  },
  {
    question: "Which source control system integrates with Salesforce DX?",
    options: [
      "None",
      "Git (and GitHub, GitLab, etc.)",
      "Only SVN",
      "Only TFVC"
    ],
    correctAnswer: 1,
    explanation: "Salesforce DX is designed to work with Git and related tools."
  },
  {
    question: "What does destructive change handling require?",
    options: [
      "No handling",
      "destructiveChanges.xml or equivalent for metadata removal",
      "Only add",
      "Only update"
    ],
    correctAnswer: 1,
    explanation: "destructiveChanges.xml specifies metadata to be removed."
  },
  {
    question: "Which sandbox type best supports integration testing?",
    options: [
      "Developer only",
      "Partial Copy or Full Copy for data and integration testing",
      "Scratch org only",
      "Production only"
    ],
    correctAnswer: 1,
    explanation: "Partial/Full Copy sandboxes provide data for integration testing."
  },
  {
    question: "What is the purpose of a release branch in CI/CD?",
    options: [
      "To replace main",
      "To isolate release-specific changes and promote to production",
      "Only for development",
      "Only for testing"
    ],
    correctAnswer: 1,
    explanation: "Release branches isolate and promote release-specific changes."
  },
  {
    question: "Which governance practice supports deployment quality?",
    options: [
      "No governance",
      "Peer review, automated tests, and approval gates",
      "Manual only",
      "No approval"
    ],
    correctAnswer: 1,
    explanation: "Peer review, tests, and approval gates ensure quality."
  },
  {
    question: "What does sf project deploy start do?",
    options: [
      "Nothing",
      "Deploys source from project to target org",
      "Only retrieves",
      "Only creates scratch org"
    ],
    correctAnswer: 1,
    explanation: "sf project deploy start deploys source to target org."
  },
  {
    question: "Which deployment tool supports unlocked packages?",
    options: [
      "Change Sets only",
      "Salesforce CLI and unlocked packages",
      "Data Loader only",
      "Workbench only"
    ],
    correctAnswer: 1,
    explanation: "Salesforce CLI supports unlocked package development."
  },
  {
    question: "What is the benefit of metadata API for deployment?",
    options: [
      "No benefit",
      "Programmatic, scriptable deployment and retrieval",
      "Manual only",
      "UI only"
    ],
    correctAnswer: 1,
    explanation: "Metadata API enables programmatic deployment and retrieval."
  },
  {
    question: "Which best practice applies to release management?",
    options: [
      "Deploy directly to production",
      "Use sandbox promotion path and validate before production",
      "No testing",
      "Single environment only"
    ],
    correctAnswer: 1,
    explanation: "Promote through sandboxes and validate before production."
  },
]

export default function DevLifecycleDeploymentArchitectPage() {
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
            code="Dev Lifecycle & Deployment"
            description="Certified Platform Development Lifecycle and Deployment Architects are experts at assessing architecture environments and requirements in order to implement management solutions on the Salesforce Platform."
            examDetails={{ questions: 60, passingScore: '~68%', duration: '120 min', cost: '$400' }}
            topics={['Deployment', 'Change Sets', 'Salesforce CLI', 'Sandboxes', 'CI/CD', 'Release Management', 'Governance', 'Testing', 'Best Practices', 'Source Control']}
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
