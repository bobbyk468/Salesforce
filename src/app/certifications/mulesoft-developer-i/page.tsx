import CertificationCard from '@/components/CertificationCard'
import ExamPrepContent from '@/components/ExamPrepContent'
import CertPageSeo, { CertPageFaq } from '@/components/CertPageSeo'
import CertPageIntro from '@/components/CertPageIntro'
import RelatedCertifications from '@/components/RelatedCertifications'
import CertTableOfContents from '@/components/CertTableOfContents'
import { getCertMetadata, getCertH1Text, slugToDisplayName } from '@/lib/cert-seo-data'
import QuestionCard from '@/components/QuestionCard'
import { Metadata } from 'next'
import { getExamWeightage } from '@/lib/exam-weightage-data'

const slug = 'mulesoft-developer-i'
export const metadata = getCertMetadata(slug)

const sampleQuestions = [
  {
    question: "What is the primary purpose of Anypoint Platform?",
    options: ["To run Apex", "To design, build, and manage APIs and integrations", "To send marketing emails", "To configure CPQ"],
    correctAnswer: 1,
    explanation: "Anypoint Platform is MuleSoft's unified platform for designing, building, and managing APIs and integrations.",
  },
  {
    question: "Which Mule runtime component processes messages in a flow?",
    options: ["Apex Class", "Flow", "Trigger", "Visualforce"],
    correctAnswer: 1,
    explanation: "In Mule, a Flow contains the sequence of components that process messages.",
  },
  {
    question: "What does API-led connectivity emphasize?",
    options: ["Only system APIs", "Reusable APIs organized in layers: System, Process, Experience", "No APIs", "Only Experience APIs"],
    correctAnswer: 1,
    explanation: "API-led connectivity uses System, Process, and Experience API layers for reusable, composable integrations.",
  },
  {
    question: "Which format is commonly used for API specifications in MuleSoft?",
    options: ["Apex", "RAML or OAS (OpenAPI)", "AMPscript", "Visualforce"],
    correctAnswer: 1,
    explanation: "RAML and OpenAPI (OAS) are used to design and document APIs in Anypoint.",
  },
  {
    question: "What is a Connector in Mule?",
    options: ["A database", "A pre-built module that connects to an external system or protocol", "A Slack channel", "An email template"],
    correctAnswer: 1,
    explanation: "Connectors are pre-built modules that provide connectivity to systems like Salesforce, SAP, HTTP, etc.",
  },
]

export default function MuleSoftDeveloperIPage() {
  const examSections = getExamWeightage(slug)
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <CertPageSeo slug={slug} certTitle={slugToDisplayName(slug)} />
      <CertPageIntro slug={slug} />
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-3">
          <CertificationCard
            title={slugToDisplayName(slug)}
            code="MuleSoft Developer I"
            description="Certified MuleSoft Developers have proven knowledge and skills to design, build, test and debug, deploy and manage basic APIs and integrations."
            examDetails={{ questions: 60, passingScore: '~70%', duration: '120 min', cost: '$200' }}
            topics={['Anypoint Platform', 'Mule Runtime', 'Flows', 'Connectors', 'DataWeave', 'API Design', 'RAML/OAS', 'Testing', 'Deployment', 'Security']}
            examSections={examSections}
            h1Text={getCertH1Text(slug)}
          />

          <div id="exam-prep">
            <ExamPrepContent slug={slug} />
          </div>

          <div id="practice-questions" className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Sample Practice Questions</h2>
            <p className="text-gray-600 mb-8">Test your knowledge with these sample questions.</p>
            {sampleQuestions.map((q, index) => (
              <QuestionCard key={index} questionNumber={index + 1} question={q.question} options={q.options} correctAnswer={q.correctAnswer} explanation={q.explanation} />
            ))}
          </div>
          
          <div id="more-questions" className="mt-12 bg-salesforce-blue/10 rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Want More Practice Questions?</h3>
            <p className="text-gray-600 mb-6">Get access to our complete question bank with detailed explanations.</p>
            <a href="/contact" className="inline-block px-8 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-all duration-200 shadow-md hover:shadow-lg active:scale-95">Contact Us for Full Access</a>
          </div>

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
              { id: 'faq', title: 'Frequently Asked Questions' }]}
          />
        </aside>
      </div>
    </div>
  )
}