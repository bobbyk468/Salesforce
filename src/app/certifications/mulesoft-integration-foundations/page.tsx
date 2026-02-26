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
import QuestionCard from '@/components/QuestionCard'
import { Metadata } from 'next'
import Link from 'next/link'
import { getExamWeightage } from '@/lib/exam-weightage-data'

const slug = 'mulesoft-integration-foundations'
export async function generateMetadata() {
  return getCertMetadata(slug)
}

const sampleQuestions = [
  {
    question: "Who is the MuleSoft Integration Foundations certification designed for?",
    options: ["Senior architects only", "Individuals who know core integration and API-led connectivity terminology and can work as informed members of a MuleSoft project team", "Developers only", "Marketers only"],
    correctAnswer: 1,
    explanation: "It is designed for individuals who know core integration and API-led connectivity and can work as informed team members.",
  },
  {
    question: "What is API-led connectivity?",
    options: ["Only REST", "An approach that organizes APIs in layers (System, Process, Experience) for reusable integration", "Only SOAP", "Only file transfer"],
    correctAnswer: 1,
    explanation: "API-led connectivity organizes APIs in System, Process, and Experience layers.",
  },
  {
    question: "Which layer in API-led connectivity exposes data from systems of record?",
    options: ["Experience API only", "System API", "Process API only", "No layers"],
    correctAnswer: 1,
    explanation: "System APIs expose data from systems of record.",
  },
  {
    question: "What is Anypoint Platform?",
    options: ["A CRM", "MuleSoft's platform for designing, building, and managing APIs and integrations", "An email tool", "A database"],
    correctAnswer: 1,
    explanation: "Anypoint Platform is MuleSoft's unified platform for APIs and integrations.",
  },
  {
    question: "Which term describes a reusable, composable integration asset?",
    options: ["Monolith", "API or connector", "Legacy system", "Silo"],
    correctAnswer: 1,
    explanation: "APIs and connectors are reusable, composable integration assets.",
  },
  {
    question: "Which API-led connectivity layer orchestrates calls to multiple System APIs and prepares data for Experience APIs?",
    options: ["System API", "Experience API", "Process API", "Gateway API"],
    correctAnswer: 2,
    explanation: "Process APIs combine and transform data from multiple System APIs before passing it to Experience APIs for consumption.",
  },
  {
    question: "What does the Experience API layer provide?",
    options: ["Direct connection to backend databases", "Data tailored to the needs of a specific consumer channel such as mobile, web, or partner portal", "Caching for System APIs", "API usage monitoring"],
    correctAnswer: 1,
    explanation: "Experience APIs expose data in a format optimised for a specific consumer — mobile app, web portal, or third-party partner.",
  },
  {
    question: "What is DataWeave used for in MuleSoft?",
    options: ["Database schema design", "Transforming and mapping data between formats such as JSON, XML, and CSV within Mule flows", "API security policy enforcement", "Runtime performance monitoring"],
    correctAnswer: 1,
    explanation: "DataWeave is MuleSoft's functional data transformation language used to convert and map data formats within integration flows.",
  },
  {
    question: "Which Anypoint Platform component applies security policies and manages client application access to APIs?",
    options: ["Runtime Manager", "API Manager", "Anypoint Exchange", "Design Center"],
    correctAnswer: 1,
    explanation: "API Manager allows teams to apply SLA tiers, rate limiting, OAuth policies, and client application management to deployed APIs.",
  },
  {
    question: "What is Anypoint Exchange?",
    options: ["An email marketing tool", "A marketplace for publishing and discovering reusable APIs, connectors, templates, and integration examples", "A Mule runtime environment", "A log monitoring dashboard"],
    correctAnswer: 1,
    explanation: "Anypoint Exchange is MuleSoft's asset marketplace where teams share and consume APIs, connectors, and pre-built integration templates.",
  },
  {
    question: "What is a Mule Event in the context of a Mule application?",
    options: ["An error alert sent to the operations team", "A unit of data flowing through a Mule flow, consisting of a message (payload and attributes) and variables", "A scheduled deployment trigger", "An API audit log entry"],
    correctAnswer: 1,
    explanation: "A Mule Event carries the message payload, message attributes (metadata), and flow variables through the integration flow.",
  },
  {
    question: "Which Anypoint Platform tool allows teams to design APIs using RAML or OpenAPI Specification before building them?",
    options: ["Runtime Manager", "Design Center", "Anypoint Studio", "API Manager"],
    correctAnswer: 1,
    explanation: "Design Center's API Designer provides a visual and code editor for creating API specifications in RAML or OAS (OpenAPI).",
  },
  {
    question: "What is the primary purpose of MuleSoft Connectors?",
    options: ["Writing custom integration code from scratch for every system", "Providing pre-built, reusable components that connect Mule applications to external systems, databases, and SaaS apps", "Monitoring API performance dashboards", "Executing DataWeave transformations"],
    correctAnswer: 1,
    explanation: "Connectors provide out-of-the-box connectivity to systems like Salesforce, SAP, databases, and message queues — eliminating repetitive custom integration code.",
  },
  {
    question: "Which Anypoint Platform tool monitors deployed Mule application health, performance, and logs in real time?",
    options: ["Design Center", "Anypoint Studio", "Runtime Manager", "Exchange"],
    correctAnswer: 2,
    explanation: "Runtime Manager provides visibility into deployed Mule apps including deployment status, CPU/memory metrics, and log streaming.",
  },
  {
    question: "What is the core business value of adopting API-led connectivity over point-to-point integration?",
    options: ["Reduced licensing costs alone", "Reusable, composable APIs that reduce integration complexity, accelerate delivery, and enable cross-team self-service", "Faster initial implementation of the first integration", "Fewer API management tools required"],
    correctAnswer: 1,
    explanation: "API-led connectivity enables teams to self-serve reusable APIs, reduces duplicated effort, and reduces integration sprawl across the enterprise.",
  },
]

export default function MuleSoftIntegrationFoundationsPage() {
  const examSections = getExamWeightage(slug)
  return (
    <div data-critical-content className="max-w-7xl mx-auto px-4 py-12">
      <CertPageSeo slug={slug} certTitle={slugToDisplayName(slug)} />
        <p className="text-sm text-gray-600 mb-6">
          Looking for exam strategy before you start practising? Read our{' '}
          <Link href="/mulesoft-integration-foundations-exam-tips" className="text-salesforce-blue font-medium hover:underline">MuleSoft Integration Foundations exam tips and 3-week study plan</Link>.
        </p>
        <ExamLogisticsSection
          slug={slug}
          examCodeNote={
            <>
              Book via the official{' '}
              <a href="https://trailhead.salesforce.com/credentials/verification" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Salesforce credential verification</a>
              {' '}and Webassessor. No separate alpha-numeric exam code; the exam is listed as MuleSoft Integration Foundations.
            </>
          }
        />
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
            code="MuleSoft Associate"
            description="The Certified MuleSoft Integrations Foundations certification is designed for individuals who have knowledge of core integration and API-led connectivity terminology and can work as an informed member of a MuleSoft project team."
            examDetails={{ questions: 40, passingScore: '70%', duration: '70 min', cost: '$75' }}
            topics={['API-led Connectivity', 'Anypoint Platform', 'APIs', 'Integration Basics', 'System/Process/Experience APIs', 'Terminology', 'Best Practices', 'Team Role']}
            examSections={examSections}
            h1Text={getCertH1Text(slug)}
          examWeightageHeading={getCertExamWeightageHeading(slug)}
          />

          <div id="exam-prep">
            <ExamPrepContent slug={slug} />
          </div>

          <div id="practice-questions" className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{getCertPracticeQuestionsHeading(slug)}</h2>
            <p className="text-gray-600 mb-8">Test your knowledge with these sample questions.</p>
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
