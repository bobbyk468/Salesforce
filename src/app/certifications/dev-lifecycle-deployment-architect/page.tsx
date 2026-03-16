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

          {/* Key Concepts */}
          <div id="key-concepts" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Development Lifecycle and Deployment Architect: Key Concepts for the Exam</h2>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-1">Org Strategy: Sandboxes and Scratch Orgs</p>
                <p>Sandbox types: Developer (5 MB data, for development), Developer Pro (1 GB), Partial Copy (5 GB sample data, for integration testing), Full Copy (full production replica, for load and UAT testing). Scratch Orgs are temporary, source-driven orgs created from a definition file &mdash; ideal for CI/CD. The exam tests which sandbox type to use for each phase of development and when scratch orgs are preferred over traditional sandboxes.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Version Control and Source-Driven Development</p>
                <p>Salesforce DX uses a source format for metadata &mdash; different from the API (MDAPI) format used by Change Sets. .forceignore excludes files from source tracking (similar to .gitignore). Project Scratch Def files define scratch org configuration (edition, features, settings). sfdx project.json defines the package directories and plugin configuration. The exam tests source-driven development concepts, the difference between metadata formats, and how source tracking works in scratch orgs.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">CI/CD Pipelines: Salesforce CLI and Packages</p>
                <p>Salesforce CLI (sf commands) drives automated deployments. Unlocked Packages are the recommended packaging model &mdash; versioned, installable, supports dependency management. Managed Packages are for ISVs distributing on AppExchange &mdash; locked source. The exam tests the deployment tool hierarchy: Change Sets (org-based, no version control) &rarr; Salesforce CLI &amp; MDAPI (scriptable) &rarr; Unlocked Packages (modular, versioned). CI/CD tools (GitHub Actions, Jenkins, CircleCI) automate test runs and deployments on code push.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Testing in the Deployment Pipeline</p>
                <p>A minimum of 75% code coverage and all passing tests are required for production deployments. Test suites group related test classes. Run Specified Tests skips unrelated tests for faster deployments. Full test run is required for production. The exam tests how to structure test strategies &mdash; unit tests for individual classes, integration tests across objects, UAT in Partial/Full sandboxes. Test.isRunningTest() should not be used to bypass logic; instead design for testability.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Release Management and Deployment Order</p>
                <p>Destructive Changes (destructiveChanges.xml) remove components during deployment &mdash; must be planned carefully as deleted components cannot be recovered. Dependency order matters: deploy custom objects before fields, custom fields before validation rules referencing them. Rollback strategy: Salesforce does not have built-in rollback &mdash; plan with sandbox parity, feature flags, and version-controlled deployment scripts. Post-deployment verification should include running smoke tests and checking critical business processes. The exam tests deployment sequencing and risk mitigation strategies.</p>
              </div>
            </div>
          </div>


          {/* How to Pass Scenario Strategy */}
          <div id="scenario-tips" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Pass the Salesforce Development Lifecycle and Deployment Architect Exam</h2>
            <p className="text-sm text-gray-600 mb-5">
              The Dev Lifecycle Architect exam tests expertise in ALM, CI/CD, sandbox strategy, and package development. Focus on choosing the right deployment approach for complex org configurations and release management.
            </p>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-1">Sandbox Strategy</p>
                <p>Know the four sandbox types and when to use each: Developer (unit testing), Developer Pro (data load testing), Partial Copy (realistic data subset), Full (UAT with production data volume). Know refresh intervals.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Change Set Limitations</p>
                <p>Change sets have significant limitations: no delete capability, no metadata dependency resolution, no version control. Know when to move beyond change sets to source-driven development.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Source-Driven Development</p>
                <p>Understand SFDX / SF CLI source format, scratch orgs for isolated development, how to push/pull metadata, and how Salesforce DX integrates with Git version control systems.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Package Development (2GP)</p>
                <p>Know the difference between Unlocked Packages and Managed Packages. Understand how to define package boundaries, handle dependencies between packages, and version package releases.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">CI/CD Pipeline Design</p>
                <p>Know how to design a CI/CD pipeline: source → scratch org → unit tests → package version → sandbox UAT → production. Understand how tools like GitHub Actions, Copado, or Gearset automate the pipeline.</p>
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
