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
const PracticeQuestionsSection = dynamic(
  () => import('@/components/PracticeQuestionsSection'),
  {
    ssr: false,
    loading: () => (
      <div id="practice-questions" className="mt-12 min-h-[440px] w-full" aria-hidden="true" />
    ),
  }
)

const slug = 'mulesoft-hyperautomation-developer'
export async function generateMetadata() {
  return getCertMetadata(slug)
}

const sampleQuestions = [
  {
    question: "What does hyperautomation typically involve?",
    options: ["Only RPA", "Combining RPA, integration, AI, and process automation across systems", "Only email", "Only Slack"],
    correctAnswer: 1,
    explanation: "Hyperautomation combines RPA, integration (e.g., MuleSoft), AI, and process automation for end-to-end automation.",
  },
  {
    question: "Which MuleSoft product supports automation and integration in hyperautomation solutions?",
    options: ["Email Studio", "Anypoint Platform and Mule runtime", "CPQ only", "Commerce Cloud only"],
    correctAnswer: 1,
    explanation: "Anypoint Platform and Mule provide the integration layer for connecting systems in hyperautomation.",
  },
  {
    question: "What is the role of a MuleSoft Hyperautomation Developer?",
    options: ["Only UI design", "Developing hyperautomation solutions across Salesforce and MuleSoft products", "Only data entry", "Only reporting"],
    correctAnswer: 1,
    explanation: "They develop hyperautomation solutions that span Salesforce and MuleSoft products.",
  },
  {
    question: "Which capability is often part of a hyperautomation architecture?",
    options: ["Static spreadsheets only", "APIs, workflows, and event-driven integration", "Manual processes only", "Single system only"],
    correctAnswer: 1,
    explanation: "Hyperautomation uses APIs, workflows, and event-driven integration to connect and automate processes.",
  },
  {
    question: "What benefit does hyperautomation aim to deliver?",
    options: ["More manual work", "End-to-end process automation and reduced manual effort", "Fewer integrations", "Slower delivery"],
    correctAnswer: 1,
    explanation: "Hyperautomation aims to automate end-to-end processes and reduce manual effort across the enterprise.",
  },
  {
    question: "What role does RPA play in hyperautomation?",
    options: [
      "No role",
      "Automating repetitive UI and manual tasks that integrate with APIs",
      "Replacing APIs only",
      "Replacing MuleSoft only"
    ],
    correctAnswer: 1,
    explanation: "RPA automates repetitive tasks and works alongside API integration."
  },
  {
    question: "Which MuleSoft capability supports event-driven automation?",
    options: [
      "Only REST",
      "Anypoint MQ, Kafka connector, or event-driven flows",
      "Only SOAP",
      "Only batch"
    ],
    correctAnswer: 1,
    explanation: "Anypoint MQ and event-driven flows support event-based automation."
  },
  {
    question: "What does end-to-end process automation require?",
    options: [
      "Single system only",
      "Orchestration across multiple systems via APIs and workflows",
      "Manual steps only",
      "Email only"
    ],
    correctAnswer: 1,
    explanation: "End-to-end automation requires orchestration across systems."
  },
  {
    question: "Which Salesforce product can be part of hyperautomation?",
    options: [
      "Marketing Cloud only",
      "Flow, Process Builder, and Platform Events",
      "Slack only",
      "Tableau only"
    ],
    correctAnswer: 1,
    explanation: "Flow, Process Builder, and Platform Events support automation."
  },
  {
    question: "What is the purpose of workflow orchestration in hyperautomation?",
    options: [
      "To replace APIs",
      "To coordinate steps across systems and handle exceptions",
      "To send emails only",
      "To create reports only"
    ],
    correctAnswer: 1,
    explanation: "Orchestration coordinates steps and handles exceptions."
  },
  {
    question: "Which best practice applies to hyperautomation development?",
    options: [
      "Ignore error handling",
      "Design for resilience, logging, and human-in-the-loop where needed",
      "No logging",
      "Manual only"
    ],
    correctAnswer: 1,
    explanation: "Resilience, logging, and human-in-the-loop support reliability."
  },
  {
    question: "What does AI add to hyperautomation?",
    options: [
      "Nothing",
      "Intelligent decision-making, document processing, or prediction",
      "Only RPA",
      "Only APIs"
    ],
    correctAnswer: 1,
    explanation: "AI enables intelligent decisions and document processing."
  },
  {
    question: "Which deployment model supports hyperautomation?",
    options: [
      "On-prem only",
      "CloudHub, hybrid, or on-prem Mule runtime",
      "Salesforce only",
      "No deployment"
    ],
    correctAnswer: 1,
    explanation: "CloudHub and hybrid support Mule-based hyperautomation."
  },
  {
    question: "What is the benefit of combining RPA and API integration?",
    options: [
      "No benefit",
      "Automate legacy systems without APIs plus modern API integration",
      "Replace APIs",
      "Replace RPA"
    ],
    correctAnswer: 1,
    explanation: "RPA handles legacy UI; APIs handle modern integrations."
  },
  {
    question: "Which MuleSoft product supports design and deployment?",
    options: [
      "Email only",
      "Anypoint Studio, Flow Designer, and CloudHub",
      "Slack only",
      "CPQ only"
    ],
    correctAnswer: 1,
    explanation: "Anypoint Studio, Flow Designer, and CloudHub support design and deployment."
  },
]

export default function MuleSoftHyperautomationDeveloperPage() {
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
            code="Hyperautomation"
            description="Certified MuleSoft Hyperautomation Developers develop hyperautomation solutions across the Salesforce and MuleSoft products."
            examDetails={{ questions: 60, passingScore: '~68%', duration: '105 min', cost: '$200' }}
            topics={['Hyperautomation', 'MuleSoft Integration', 'RPA', 'Workflows', 'APIs', 'Events', 'Salesforce Integration', 'Best Practices', 'Architecture', 'Deployment']}
            examSections={examSections}
            h1Text={getCertH1Text(slug)}
          examWeightageHeading={getCertExamWeightageHeading(slug)}
          />

          <div id="exam-prep">
            <ExamPrepContent slug={slug} />
          </div>

          {/* Key Concepts */}
          <div id="key-concepts" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">MuleSoft Hyperautomation Developer: Key Concepts for the Exam</h2>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-1">Hyperautomation Architecture</p>
                <p>Hyperautomation combines multiple automation technologies to automate complex, end-to-end business processes. Key components: MuleSoft (API integration), MuleSoft RPA (robotic process automation for UI-based tasks), MuleSoft Composer (no-code point-click integration), and Salesforce Flow (business process automation). The Hyperautomation Developer designs orchestrated workflows that span these tools — using APIs where possible (preferred) and RPA for legacy UI-only systems where APIs are unavailable.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">MuleSoft RPA: Builder and Manager</p>
                <p>RPA Builder creates automation bots by recording and editing UI interactions — it captures mouse clicks, keystrokes, and screen regions from Windows desktop applications or web browsers. Bots run as attended (requires user presence) or unattended (runs autonomously on a schedule or trigger). RPA Manager orchestrates bot deployment — managing which bots run where, monitoring execution, handling errors, and managing credentials (secure storage). The exam tests bot design principles and when RPA is appropriate vs API integration.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">MuleSoft Composer</p>
                <p>Composer provides no-code, point-and-click integration between cloud applications — Salesforce, Slack, NetSuite, Stripe, Google Sheets. Composer Flows are triggered by events (record created, webhook, schedule) and execute actions (create/update records, send messages). Composer is designed for business users, not developers — it requires no Anypoint Studio. The developer exam tests when to recommend Composer vs Anypoint Studio for a given integration scenario (Composer for simple cloud-to-cloud; Studio for complex transformations or on-premise systems).</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Orchestrating Automation with Salesforce Flow</p>
                <p>Salesforce Flow orchestrates the human-facing process steps — approvals, guided data entry, notifications. MuleSoft handles the system integration behind the Flow. In Hyperautomation scenarios: a Flow captures user input, triggers a MuleSoft API via an Apex callout or Platform Event, MuleSoft calls external systems, and returns results to update Salesforce records. RPA handles legacy system interaction that cannot be API-ified. The developer designs the orchestration layer — deciding which tool owns each step of the process.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Governance and Security for Bots</p>
                <p>Bot credentials must be stored securely — RPA Manager&apos;s credential vault stores usernames, passwords, and API keys encrypted. Bot activity is audited in RPA Manager — execution logs, error reports, and performance metrics. Access control: which users can trigger attended bots, which processes can run unattended. In regulated industries, bot activity must be auditable for compliance. The exam tests credential management best practices and how to design bots that maintain auditability and security without storing credentials in the automation script.</p>
              </div>
            </div>
          </div>


          {/* How to Pass Scenario Strategy */}
          <div id="scenario-tips" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Pass the MuleSoft Hyperautomation Developer Exam</h2>
            <p className="text-sm text-gray-600 mb-5">
              The MuleSoft Hyperautomation Developer exam tests integration of MuleSoft with RPA (Robotic Process Automation) and IDP (Intelligent Document Processing) capabilities. Focus on designing end-to-end automation solutions.
            </p>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-1">Hyperautomation Concepts</p>
                <p>Know what hyperautomation means: combining API-led integration (MuleSoft), RPA (MuleSoft RPA), IDP (Intelligent Document Processing), and AI/ML to automate complex end-to-end business processes.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">MuleSoft RPA Architecture</p>
                <p>Understand how MuleSoft RPA uses bots to automate UI-based tasks that lack APIs. Know how to trigger RPA bots from Mule flows via the RPA API and how to handle bot execution results.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Intelligent Document Processing</p>
                <p>Know how IDP extracts structured data from unstructured documents (invoices, contracts, forms) using OCR and ML models. Understand how to integrate IDP results back into Mule flows.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Process Orchestration</p>
                <p>Know how to orchestrate multi-step automations combining API calls, RPA bots, and IDP processes within a single Mule flow. Understand how to handle errors and exceptions in orchestrated automation flows.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Automation Selection Framework</p>
                <p>Know when to use each automation approach: APIs for systems with integration interfaces, RPA for legacy UI-only systems, IDP for document-heavy processes, and AI/ML for pattern recognition tasks.</p>
              </div>
            </div>
          </div>

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
