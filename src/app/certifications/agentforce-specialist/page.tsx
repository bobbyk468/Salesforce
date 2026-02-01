import CertificationCard from '@/components/CertificationCard'
import ExamPrepContent from '@/components/ExamPrepContent'
import CertPageSeo, { CertPageFaq } from '@/components/CertPageSeo'
import CertPageIntro from '@/components/CertPageIntro'
import RelatedCertifications from '@/components/RelatedCertifications'
import CertTableOfContents from '@/components/CertTableOfContents'
import { getCertMetadata, getCertH1Text, getCertExamWeightageHeading, getCertPracticeQuestionsHeading, slugToDisplayName } from '@/lib/cert-seo-data'
import QuestionCard from '@/components/QuestionCard'
import { Metadata } from 'next'
import { getExamWeightage } from '@/lib/exam-weightage-data'

const slug = 'agentforce-specialist'
export const metadata = getCertMetadata(slug)

const sampleQuestions = [
  {
    question: "What is the primary responsibility of an Agentforce Specialist?",
    options: [
      "Developing Apex code for agents",
      "Managing and optimizing Agentforce with deep platform and Agentforce knowledge",
      "Designing marketing campaigns",
      "Configuring CPQ products"
    ],
    correctAnswer: 1,
    explanation: "Certified Agentforce Specialists manage and optimize Agentforce and have deep understanding of both Salesforce platform configuration and Agentforce capabilities."
  },
  {
    question: "Which component is used to build AI-powered agent interfaces in Agentforce?",
    options: [
      "Visualforce",
      "Prompt Builder",
      "Process Builder",
      "Flow"
    ],
    correctAnswer: 1,
    explanation: "Prompt Builder is used to create and manage prompts for AI agents in the Salesforce ecosystem."
  },
  {
    question: "Agentforce integrates with which Salesforce capability for data context?",
    options: [
      "Marketing Cloud",
      "Data Cloud",
      "Commerce Cloud",
      "Slack"
    ],
    correctAnswer: 1,
    explanation: "Data Cloud provides unified customer data that can power Agentforce with relevant context for conversations."
  },
  {
    question: "What should an Agentforce Specialist optimize for better agent performance?",
    options: [
      "Only UI layout",
      "Prompts, data access, and conversation flows",
      "Email templates only",
      "Report filters"
    ],
    correctAnswer: 1,
    explanation: "Specialists optimize prompts, ensure proper data access for agents, and refine conversation flows for better outcomes."
  },
  {
    question: "Which Salesforce product does Agentforce extend for AI agents?",
    options: [
      "Heroku",
      "Service Cloud and the Customer 360 Platform",
      "Pardot only",
      "Commerce Cloud only"
    ],
    correctAnswer: 1,
    explanation: "Agentforce extends Service Cloud and the Customer 360 Platform with AI-powered agent capabilities."
  },
]

export default function AgentforceSpecialistPage() {
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
            code="Agentforce"
            description="Certified Agentforce Specialists are responsible for managing and optimizing Agentforce and have deep understanding of both Salesforce platform configuration and Agentforce capabilities."
            examDetails={{
              questions: 60,
              passingScore: "~65%",
              duration: "105 min",
              cost: "$200",
            }}
            topics={[
              "Agentforce Configuration",
              "Prompt Builder",
              "AI Agents",
              "Data Cloud Integration",
              "Service Cloud",
              "Conversation Flows",
              "Platform Configuration",
              "Optimization",
              "Best Practices",
              "Troubleshooting"
            ]}
            examSections={examSections}
            h1Text={getCertH1Text(slug)}
          examWeightageHeading={getCertExamWeightageHeading(slug)}
          />

          <div id="exam-prep">
            <ExamPrepContent slug={slug} />
          </div>

          <div id="practice-questions" className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{getCertPracticeQuestionsHeading(slug)}</h2>
            <p className="text-gray-600 mb-8">
              Test your knowledge with these sample questions.
            </p>
            
            {sampleQuestions.map((q, index) => (
              <QuestionCard
                key={index}
                questionNumber={index + 1}
                question={q.question}
                options={q.options}
                correctAnswer={q.correctAnswer}
                explanation={q.explanation}
              />
            ))}
          </div>

          <div id="more-questions" className="mt-12 bg-salesforce-blue/10 rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Want More Practice Questions?</h3>
            <p className="text-gray-600 mb-6">
              Get access to our complete question bank with detailed explanations.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-all duration-200 shadow-md hover:shadow-lg active:scale-95"
            >
              Contact Us for Full Access
            </a>
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
              { id: 'faq', title: 'Exam FAQs' }]}
          />
        </aside>
      </div>
    </div>
  )
}