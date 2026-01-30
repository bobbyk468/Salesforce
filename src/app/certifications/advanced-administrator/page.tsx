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

const slug = 'advanced-administrator'
export const metadata = getCertMetadata(slug)

const sampleQuestions = [
  {
    question: "An organization wants to automatically share records with users based on criteria. Which feature should be used?",
    options: [
      "Manual Sharing",
      "Role Hierarchy",
      "Sharing Rules",
      "Public Groups"
    ],
    correctAnswer: 2,
    explanation: "Sharing Rules allow you to automatically share records with users or groups based on record ownership or criteria."
  },
  {
    question: "What is required before creating a roll-up summary field on a custom object?",
    options: [
      "A lookup relationship to the parent object",
      "A master-detail relationship where the custom object is the detail",
      "An external ID field",
      "A formula field"
    ],
    correctAnswer: 1,
    explanation: "Roll-up summary fields can only be created on objects that are the master in a master-detail relationship."
  },
  {
    question: "Which feature allows administrators to track changes to setup configuration?",
    options: [
      "Debug Log",
      "Setup Audit Trail",
      "Field History Tracking",
      "Event Monitoring"
    ],
    correctAnswer: 1,
    explanation: "Setup Audit Trail tracks the last 180 days of setup changes made by administrators in your organization."
  },
  {
    question: "A company needs to ensure that duplicate leads are not created. Which feature should be implemented?",
    options: [
      "Validation Rules",
      "Duplicate Rules with Matching Rules",
      "Unique Field",
      "Apex Trigger"
    ],
    correctAnswer: 1,
    explanation: "Duplicate Rules combined with Matching Rules allow you to detect and prevent duplicate records from being created."
  },
  {
    question: "What is the purpose of a Permission Set Group?",
    options: [
      "To assign multiple profiles to a user",
      "To bundle permission sets together for easier assignment",
      "To create a hierarchy of permissions",
      "To restrict access to objects"
    ],
    correctAnswer: 1,
    explanation: "Permission Set Groups allow you to bundle multiple permission sets together, making it easier to assign a collection of permissions to users."
  },
]

export default function AdvancedAdministratorPage() {
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
            code="ADM-211"
            description="The Advanced Administrator certification validates your advanced knowledge of Salesforce administration, including complex security models, advanced automation, and performance optimization."
            examDetails={{
              questions: 60,
              passingScore: "65%",
              duration: "105 min",
              cost: "$200",
            }}
            topics={[
              "Security & Access",
              "Advanced Automation",
              "Approval Processes",
              "Data Management",
              "Advanced Reporting",
              "Performance Optimization",
              "Change Management",
              "Auditing & Monitoring",
              "Content Management",
              "AppExchange"
            ]}
            examSections={examSections}
            h1Text={getCertH1Text(slug)}
          />

          <div id="exam-prep">
            <ExamPrepContent slug={slug} />
          </div>

          <div id="practice-questions" className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Sample Practice Questions</h2>
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

          <div id="more-questions" className="mt-12 bg-salesforce-blue/10 rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Want More Practice Questions?</h3>
            <p className="text-gray-600 mb-6">
              Get access to our complete question bank with 500+ questions and detailed explanations.
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
              { id: 'faq', title: 'Frequently Asked Questions' }]}
          />
        </aside>
      </div>
    </div>
  )
}