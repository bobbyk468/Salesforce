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

const slug = 'field-service'
export const metadata = getCertMetadata(slug)

const sampleQuestions = [
  {
    question: "Which object is used to represent a technician's availability for scheduling?",
    options: [
      "Service Resource",
      "Service Appointment",
      "Service Territory",
      "Operating Hours"
    ],
    correctAnswer: 0,
    explanation: "Service Resource represents a technician or field worker and includes their skills, availability, and territory assignments."
  },
  {
    question: "What is the purpose of a Scheduling Policy in Field Service?",
    options: [
      "To define work rules and objectives for the optimizer",
      "To assign resources to territories",
      "To track service appointments",
      "To manage parts inventory"
    ],
    correctAnswer: 0,
    explanation: "Scheduling Policies define work rules (constraints) and objectives that the scheduling optimizer uses when assigning appointments."
  },
  {
    question: "Which feature allows field technicians to access their schedule and update work orders offline?",
    options: [
      "Service Console",
      "Field Service Mobile App",
      "Lightning Experience",
      "Dispatcher Console"
    ],
    correctAnswer: 1,
    explanation: "The Field Service Mobile App allows technicians to access schedules, update work orders, and capture signatures even without internet connectivity."
  },
  {
    question: "What determines which technicians are eligible to be scheduled for a service appointment?",
    options: [
      "User Profile",
      "Permission Sets",
      "Skill Requirements and Territory Membership",
      "Role Hierarchy"
    ],
    correctAnswer: 2,
    explanation: "Skill Requirements on the Work Type and Service Territory membership determine which Service Resources are eligible for scheduling."
  },
  {
    question: "Which component shows dispatchers a visual timeline of scheduled appointments?",
    options: [
      "Dispatcher Console Gantt",
      "Calendar View",
      "List View",
      "Map View"
    ],
    correctAnswer: 0,
    explanation: "The Dispatcher Console Gantt shows a visual timeline of scheduled appointments across service resources."
  },
]

export default function FieldServicePage() {
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
            code="Field Service"
            description="The Field Service Consultant certification validates your expertise in implementing Salesforce Field Service solutions for mobile workforce management."
            examDetails={{
              questions: 60,
              passingScore: "63%",
              duration: "105 min",
              cost: "$200",
            }}
            topics={[
              "Field Service Setup",
              "Service Resources",
              "Service Territories",
              "Scheduling & Optimization",
              "Dispatcher Console",
              "Mobile App",
              "Work Orders",
              "Parts Management",
              "Contracts & SLAs",
              "Reporting"
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