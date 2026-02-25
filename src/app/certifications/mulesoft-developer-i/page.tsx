import FullQuestionBankCta from '@/components/FullQuestionBankCta'
import CertificationCard from '@/components/CertificationCard'
import ExamPrepContent from '@/components/ExamPrepContent'
import CertPageSeo, { CertPageFaq } from '@/components/CertPageSeo'
import CertPageIntro from '@/components/CertPageIntro'
import CertPageCta from '@/components/CertPageCta'
import ExamLogisticsSection from '@/components/ExamLogisticsSection'
import ExamFeesSection from '@/components/ExamFeesSection'
import RelatedCertifications from '@/components/RelatedCertifications'
import CertTableOfContents from '@/components/CertTableOfContents'
import { getCertMetadata, getCertH1Text, getCertExamWeightageHeading, getCertPracticeQuestionsHeading, slugToDisplayName } from '@/lib/cert-seo-data'
import QuestionCard from '@/components/QuestionCard'
import { Metadata } from 'next'
import { getExamWeightage } from '@/lib/exam-weightage-data'

const slug = 'mulesoft-developer-i'
export async function generateMetadata() {
  return getCertMetadata(slug)
}

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
    <div data-critical-content className="max-w-7xl mx-auto px-4 py-12">
      <CertPageSeo slug={slug} certTitle={slugToDisplayName(slug)} />
        
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
            code="MuleSoft Developer I"
            description="Certified MuleSoft Developers have proven knowledge and skills to design, build, test and debug, deploy and manage basic APIs and integrations."
            examDetails={{ questions: 60, passingScore: '~70%', duration: '120 min', cost: '$200' }}
            topics={['Anypoint Platform', 'Mule Runtime', 'Flows', 'Connectors', 'DataWeave', 'API Design', 'RAML/OAS', 'Testing', 'Deployment', 'Security']}
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
