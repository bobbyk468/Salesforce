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

const slug = 'omnistudio-developer'
export async function generateMetadata() {
  return getCertMetadata(slug)
}

const sampleQuestions = [
  {
    question: "Which OmniStudio tool is used to create guided, step-by-step digital experiences?",
    options: ["Apex only", "OmniScript", "Visualforce", "LWC only"],
    correctAnswer: 1,
    explanation: "OmniScript provides declarative, step-by-step guided experiences without code.",
  },
  {
    question: "What is DataRaptor used for in OmniStudio?",
    options: ["Sending emails", "Data extraction, load, and transform (DET, DLT, DTT)", "Slack messages", "CPQ configuration"],
    correctAnswer: 1,
    explanation: "DataRaptors handle data extraction (DET), load (DLT), and transform (DTT) for OmniStudio.",
  },
  {
    question: "Which component displays a compact, card-based view of record data?",
    options: ["OmniScript", "FlexCard", "DataRaptor", "Integration Procedure"],
    correctAnswer: 1,
    explanation: "FlexCards display compact, card-based views of data with declarative layout.",
  },
  {
    question: "What is an Integration Procedure in OmniStudio?",
    options: ["A report", "A reusable server-side flow that orchestrates APIs and DataRaptors", "An email template", "A dashboard"],
    correctAnswer: 1,
    explanation: "Integration Procedures orchestrate server-side logic, APIs, and DataRaptors.",
  },
  {
    question: "Which industry solution commonly uses OmniStudio?",
    options: ["Retail only", "Financial Services, Insurance, and other industries for digital flows", "Manufacturing only", "Education only"],
    correctAnswer: 1,
    explanation: "OmniStudio is used across Financial Services, Insurance, and other industries for digital experiences.",
  },
  {
    question: "What is DET (DataRaptor Extract) used for?",
    options: [
      "To load only",
      "To extract data from Salesforce or external sources",
      "To transform only",
      "To send emails"
    ],
    correctAnswer: 1,
    explanation: "DET extracts data from Salesforce or external sources."
  },
  {
    question: "Which OmniScript element type defines a step?",
    options: [
      "DataRaptor only",
      "Step or Type element",
      "FlexCard only",
      "Integration Procedure only"
    ],
    correctAnswer: 1,
    explanation: "Step and Type elements define OmniScript structure."
  },
  {
    question: "What does FlexCard data source support?",
    options: [
      "No data",
      "Apex, DataRaptor, or Integration Procedure",
      "OmniScript only",
      "Email only"
    ],
    correctAnswer: 1,
    explanation: "FlexCards can use Apex, DataRaptor, or Integration Procedure."
  },
  {
    question: "Which OmniStudio feature supports conditional navigation?",
    options: [
      "No support",
      "conditional branching and navigation rules",
      "Static only",
      "Linear only"
    ],
    correctAnswer: 1,
    explanation: "Conditional branching controls OmniScript flow."
  },
  {
    question: "What is the purpose of an Integration Procedure output?",
    options: [
      "To replace input",
      "To return data to the caller (OmniScript, FlexCard)",
      "To delete only",
      "To log only"
    ],
    correctAnswer: 1,
    explanation: "Integration Procedure outputs return data to callers."
  },
  {
    question: "Which deployment tool is used for OmniStudio?",
    options: [
      "Change Sets only",
      "FlexDeploy or source-driven deployment",
      "Data Loader only",
      "Workbench only"
    ],
    correctAnswer: 1,
    explanation: "FlexDeploy and source-driven deployment manage OmniStudio."
  },
  {
    question: "What does OmniScript Save behavior control?",
    options: [
      "Nothing",
      "When and how OmniScript state is persisted",
      "Only navigation",
      "Only validation"
    ],
    correctAnswer: 1,
    explanation: "Save behavior controls state persistence."
  },
  {
    question: "Which OmniStudio component can invoke Apex?",
    options: [
      "DataRaptor only",
      "Integration Procedure",
      "FlexCard only",
      "OmniScript only"
    ],
    correctAnswer: 1,
    explanation: "Integration Procedures can invoke Apex."
  },
  {
    question: "What is the purpose of FlexCard merge fields?",
    options: [
      "To replace DataRaptor",
      "To display dynamic data from the data source",
      "To send emails",
      "To create reports"
    ],
    correctAnswer: 1,
    explanation: "Merge fields display dynamic data in FlexCards."
  },
  {
    question: "Which best practice applies to OmniStudio development?",
    options: [
      "Ignore testing",
      "Reusable elements, error handling, and user testing",
      "Single use only",
      "No reuse"
    ],
    correctAnswer: 1,
    explanation: "Reusable design, error handling, and testing support quality."
  },
]

export default function OmniStudioDeveloperPage() {
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
            code="OmniStudio Developer"
            description="Certified OmniStudio Developers have hands-on experience designing and configuring cloud applications using various OmniStudio declarative development tools."
            examDetails={{ questions: 60, passingScore: '~65%', duration: '105 min', cost: '$200' }}
            topics={['OmniScript', 'DataRaptor', 'FlexCards', 'Integration Procedures', 'Digital Experience', 'Industries', 'Best Practices', 'Testing', 'Deployment', 'Integration']}
            examSections={examSections}
            h1Text={getCertH1Text(slug)}
          examWeightageHeading={getCertExamWeightageHeading(slug)}
          />

          <div id="exam-prep">
            <ExamPrepContent slug={slug} />
          </div>

          {/* Key Concepts */}
          <div id="key-concepts" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">OmniStudio Developer: Key Concepts for the Exam</h2>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-1">Custom LWC Integration with OmniStudio</p>
                <p>OmniStudio Developer extends the platform with custom Lightning Web Components (LWC) embedded within OmniScripts and FlexCards. Custom LWC elements in OmniScripts receive and pass data via the OmniScript SDK methods (omniApplyCallResp, omniUpdateDataJson). Custom FlexCard actions can trigger custom LWC components. The developer creates reusable custom components that follow OmniStudio data contracts — understanding the JSON data model that flows through OmniStudio is critical. The exam tests how to integrate custom LWC with OmniScript data binding.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">DataRaptor Architecture: Extract, Load, Transform</p>
                <p>DataRaptor Extract queries Salesforce data using SOQL within a structured configuration — supports parent-child relationships and field mapping. DataRaptor Load creates or updates records using a structured JSON input — supports multi-object transactions (parent + children in one call). DataRaptor Transform maps and reshapes JSON data between two structures — no Salesforce DML involved. Turbo Extract is a simplified, high-performance version of Extract that runs a direct SOQL query. The developer exam tests DataRaptor configuration for complex data transformation scenarios and when each type is appropriate.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Integration Procedures: Advanced Patterns</p>
                <p>Advanced IP design: chaining Integration Procedures (calling a sub-IP from a parent IP), conditional branching (If Block, Filter Block), and looping (Loop Block to iterate over arrays). Error handling: Set Error action captures exceptions from HTTP actions or Apex. Response mapping transforms the action response into the IP&apos;s output structure. Combining multiple data sources in one IP — e.g., call DataRaptor Extract for Salesforce data, HTTP Action for external pricing API, then Transform to merge results. The developer designs IPs that are efficient, maintainable, and handle errors gracefully.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Debugging OmniStudio Components</p>
                <p>OmniScript debug mode activates the step-by-step data viewer — showing the JSON data model at each step. DataRaptor preview allows testing Extract, Load, and Transform configurations with sample inputs without running through a full OmniScript. Integration Procedure test console sends test payloads and inspects responses. FlexCard preview shows the rendered card with sample data. Browser developer tools (Network tab, Console) help debug HTTP Action calls and LWC component errors. The developer uses these tools systematically to isolate issues — checking data, mapping, and API calls independently.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">OmniStudio Deployment and Packaging</p>
                <p>OmniStudio components are deployed as metadata via Salesforce CLI (sfdx or sf commands). OmniScript and FlexCard definitions export as JSON — they can be version-controlled in Git. DataRaptors and Integration Procedures also export as JSON. Import/Export in the OmniStudio UI allows moving components between orgs. For managed packages (ISV deployment), OmniStudio components follow standard Salesforce packaging rules. The developer understands the deployment sequence — DataRaptors and IPs must be deployed before the OmniScripts that reference them.</p>
              </div>
            </div>
          </div>


          {/* How to Pass Scenario Strategy */}
          <div id="scenario-tips" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Pass the Salesforce OmniStudio Developer Exam</h2>
            <p className="text-sm text-gray-600 mb-5">
              The OmniStudio Developer exam tests technical development of OmniStudio components: FlexCards, OmniScripts, DataRaptors, and Integration Procedures. Focus on configuration logic and custom development extensions.
            </p>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-1">OmniScript Design</p>
                <p>Know how to configure OmniScript elements: Text/Number/Date inputs, Select (picklist/multi-select), File Upload, Validation, Set Values, and Navigate. Understand Step navigation, conditional visibility, and error handling patterns.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">DataRaptor Transforms</p>
                <p>Know the four DataRaptor types: Extract (reads Salesforce data), Load (writes to Salesforce), Transform (reformats data without CRM access), and Turbo Extract (simplified read). Know input/output JSON mapping configuration.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Integration Procedures</p>
                <p>Know how to build Integration Procedures for server-side data orchestration: HTTP Action (external API calls), DataRaptor Turbo Action, Loop Action, Conditional Action, and Set Values. Understand how they differ from DataRaptors.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">FlexCard Development</p>
                <p>Know how to configure FlexCard elements (field blocks, action blocks, state management) and how to embed FlexCards in Lightning pages and OmniScripts. Understand datasource configuration and card state transitions.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Custom LWC in OmniStudio</p>
                <p>Know how to create custom LWC components that extend OmniStudio: OmniscriptBaseMixin for accessing OmniScript context, custom components in FlexCards, and how to register custom components as OmniStudio elements.</p>
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
            <h2 id="next-certs-heading" className="text-base font-semibold text-gray-900 mb-3">Next Certifications After Developer</h2>
            <p className="text-sm text-gray-700 mb-2">After this certification, common next steps in the developer track:</p>
            <ul className="space-y-2 text-sm">
              <li><Link href="/certifications/developer-2" className="text-salesforce-blue font-medium hover:underline">Platform Developer II</Link></li>
              <li><Link href="/certifications/app-builder" className="text-salesforce-blue font-medium hover:underline">Platform App Builder</Link></li>
              <li><Link href="/certifications/javascript-developer-i" className="text-salesforce-blue font-medium hover:underline">JavaScript Developer I</Link></li>
              <li><Link href="/certifications/role/developer" className="text-salesforce-blue font-medium hover:underline">Developer certification path</Link></li>
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
