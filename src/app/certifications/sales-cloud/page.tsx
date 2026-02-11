import FullQuestionBankCta from '@/components/FullQuestionBankCta'
import CertificationCard from '@/components/CertificationCard'
import ExamPrepContent from '@/components/ExamPrepContent'
import CertPageSeo, { CertPageFaq } from '@/components/CertPageSeo'
import CertPageIntro from '@/components/CertPageIntro'
import CertPageCta from '@/components/CertPageCta'
import ExamFeesSection from '@/components/ExamFeesSection'
import RelatedCertifications from '@/components/RelatedCertifications'
import CertTableOfContents from '@/components/CertTableOfContents'
import { getCertMetadata, getCertH1Text, getCertExamWeightageHeading, getCertPracticeQuestionsHeading, slugToDisplayName } from '@/lib/cert-seo-data'
import QuestionCard from '@/components/QuestionCard'
import { Metadata } from 'next'
import { getExamWeightage } from '@/lib/exam-weightage-data'

const slug = 'sales-cloud'
export const metadata = getCertMetadata(slug)

const sampleQuestions = [
  {
    question: "A company wants to automatically assign leads to sales reps based on geographic region. What feature should be implemented?",
    options: [
      "Workflow Rules",
      "Lead Assignment Rules",
      "Process Builder",
      "Apex Triggers"
    ],
    correctAnswer: 1,
    explanation: "Lead Assignment Rules automatically assign leads to users or queues based on criteria you define, such as geographic region, industry, or lead source."
  },
  {
    question: "What is the purpose of Opportunity Splits?",
    options: [
      "To divide an opportunity into multiple stages",
      "To share revenue credit among multiple team members",
      "To create child opportunities",
      "To track competing opportunities"
    ],
    correctAnswer: 1,
    explanation: "Opportunity Splits allow you to share credit for an opportunity among multiple team members, with each member receiving a percentage of the revenue credit."
  },
  {
    question: "A sales manager wants to see a forecast that includes opportunities from their direct reports and all subordinates. Which forecast type provides this?",
    options: [
      "Individual Forecast",
      "Role Hierarchy Forecast",
      "Territory Forecast",
      "Collaborative Forecast"
    ],
    correctAnswer: 3,
    explanation: "Collaborative Forecasts allow managers to see forecasts from their team, adjust amounts, and roll up forecasts through the hierarchy."
  },
  {
    question: "Which feature allows sales reps to track competitor information on an Opportunity?",
    options: [
      "Competitors Related List",
      "Custom Object",
      "Path",
      "Big Deal Alert"
    ],
    correctAnswer: 0,
    explanation: "The Competitors related list on Opportunities allows sales reps to track which competitors they are up against on each deal."
  },
  {
    question: "What is the benefit of using Path on the Opportunity object?",
    options: [
      "Automatic stage progression",
      "Visual guidance through sales stages with key fields and tips",
      "Automated email notifications",
      "Revenue forecasting"
    ],
    correctAnswer: 1,
    explanation: "Path provides visual guidance through each stage of a record, highlighting key fields to complete and offering tips for success at each stage."
  },
  {
    question: "A company wants to track products and their prices on Opportunities. Which feature should be configured?",
    options: [
      "Products",
      "Price Books",
      "Opportunity Products",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "Products define what you sell, Price Books define pricing, and Opportunity Products link products to opportunities with specific quantities and prices."
  },
  {
    question: "What is the purpose of Sales Processes in Sales Cloud?",
    options: [
      "To automate opportunity creation",
      "To define different sales stages and record types for different sales methodologies",
      "To calculate revenue",
      "To assign opportunities to sales reps"
    ],
    correctAnswer: 1,
    explanation: "Sales Processes allow you to define different sales stages and associate them with record types, enabling different sales methodologies for different types of opportunities."
  },
  {
    question: "A sales manager wants to see which sales reps are performing best this quarter. Which report type should be used?",
    options: [
      "Opportunities by Owner",
      "Opportunities by Stage",
      "Opportunities by Account",
      "Opportunities by Product"
    ],
    correctAnswer: 0,
    explanation: "An Opportunities by Owner report shows opportunities grouped by the sales rep (owner), allowing managers to see performance metrics per rep."
  },
  {
    question: "Which feature allows sales reps to see recommended next steps based on opportunity stage?",
    options: [
      "Path",
      "Salesforce Inbox",
      "Einstein Opportunity Insights",
      "Opportunity Teams"
    ],
    correctAnswer: 0,
    explanation: "Path provides visual guidance and recommended actions at each opportunity stage, helping sales reps know what to do next."
  },
  {
    question: "A company wants to automatically assign leads to sales reps based on round-robin distribution. What should be configured?",
    options: [
      "Lead Assignment Rules with Round-Robin",
      "Workflow Rules",
      "Process Builder",
      "Apex Triggers"
    ],
    correctAnswer: 0,
    explanation: "Lead Assignment Rules support round-robin distribution, automatically distributing leads evenly among assigned users or queues."
  },
  {
    question: "What is the benefit of using Collaborative Forecasts?",
    options: [
      "Automatic opportunity creation",
      "Managers can adjust forecasts and see team roll-ups",
      "Automatic email notifications",
      "Integration with external systems"
    ],
    correctAnswer: 1,
    explanation: "Collaborative Forecasts allow managers to see forecasts from their team, make adjustments, and roll up forecasts through the role hierarchy."
  },
  {
    question: "Which feature allows sales reps to track activities related to opportunities?",
    options: [
      "Tasks",
      "Events",
      "Activities",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "Activities include both Tasks (to-dos) and Events (calendar items) that can be associated with opportunities, accounts, contacts, and leads."
  },
  {
    question: "A company wants to ensure sales reps follow a specific sales methodology. Which feature should be used?",
    options: [
      "Sales Processes",
      "Validation Rules",
      "Workflow Rules",
      "Sharing Rules"
    ],
    correctAnswer: 0,
    explanation: "Sales Processes define the stages and record types for different sales methodologies, ensuring consistency across the sales team."
  },
  {
    question: "What is the purpose of Territory Management in Sales Cloud?",
    options: [
      "To assign leads to sales reps",
      "To organize sales teams by geographic or account-based territories",
      "To track competitor information",
      "To calculate commissions"
    ],
    correctAnswer: 1,
    explanation: "Territory Management allows you to organize sales teams by geographic regions, account types, or other criteria, and automatically assign accounts and opportunities to territories."
  },
]

export default function SalesCloudPage() {
  const examSections = getExamWeightage(slug)
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <CertPageSeo slug={slug} certTitle={slugToDisplayName(slug)} />
      <CertPageIntro slug={slug} />
        
        {/* Prominent CTA above fold */}
        <CertPageCta slug={slug} certTitle={slugToDisplayName(slug)} />
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-3">
            {/* Exam Fees & Registration section */}
            <ExamFeesSection slug={slug} />
            
            <CertificationCard
            title={slugToDisplayName(slug)}
            code="SCC"
            description="The Sales Cloud Consultant certification validates your expertise in designing and implementing Sales Cloud solutions to meet business requirements."
            examDetails={{
              questions: 60,
              passingScore: "68%",
              duration: "105 min",
              cost: "$200",
            }}
            topics={[
              "Sales Cloud Solution Design",
              "Implementation Strategies",
              "Lead Management",
              "Account & Contact Management",
              "Opportunity Management",
              "Sales Productivity",
              "Sales Forecasting",
              "Territory Management",
              "Sales Analytics",
              "Integration"
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
              Test your knowledge with these sample questions. Click on an answer to select it, then check your answer to see if you're correct.
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
              { id: 'faq', title: 'Exam FAQs' },
            ]}
          />
        </aside>
      </div>
    </div>
  )
}