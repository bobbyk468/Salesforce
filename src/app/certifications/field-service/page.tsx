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
import QuestionCard from '@/components/QuestionCard'
import { Metadata } from 'next'
import { getExamWeightage } from '@/lib/exam-weightage-data'

const slug = 'field-service'
export async function generateMetadata() {
  return getCertMetadata(slug)
}

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
  {
    question: "What is the purpose of Work Type in Field Service?",
    options: [
      "To track inventory only",
      "To define the template for work orders including duration, skills, and parts",
      "To assign territories",
      "To create reports"
    ],
    correctAnswer: 1,
    explanation: "Work Type defines the template for work orders including duration and skill requirements."
  },
  {
    question: "Which object links a Service Appointment to a Work Order?",
    options: [
      "Service Resource",
      "Service Appointment (child of Work Order)",
      "Operating Hours",
      "Service Territory"
    ],
    correctAnswer: 1,
    explanation: "Service Appointments are child records of Work Orders."
  },
  {
    question: "What does the scheduling optimizer consider when assigning appointments?",
    options: [
      "Only territory",
      "Skills, availability, travel time, and scheduling policies",
      "Only skills",
      "Only travel time"
    ],
    correctAnswer: 1,
    explanation: "The optimizer considers skills, availability, travel, and policies."
  },
  {
    question: "Which feature allows dispatchers to manually drag and drop appointments?",
    options: [
      "List View only",
      "Dispatcher Console Gantt",
      "Map View only",
      "Reports"
    ],
    correctAnswer: 1,
    explanation: "The Gantt allows manual drag-and-drop scheduling."
  },
  {
    question: "What is the purpose of Operating Hours in Field Service?",
    options: [
      "To define skills only",
      "To define when resources and locations are available",
      "To track parts only",
      "To create work orders"
    ],
    correctAnswer: 1,
    explanation: "Operating Hours define availability windows for resources and locations."
  },
  {
    question: "Which object is used to track consumable or returnable parts for work orders?",
    options: [
      "Service Resource",
      "Product Required or Product Consumed",
      "Work Type",
      "Service Territory"
    ],
    correctAnswer: 1,
    explanation: "Product Required and Product Consumed track parts on work orders."
  },
  {
    question: "What does the Field Service Mobile app support for technicians?",
    options: [
      "Online only",
      "Offline access, capture signatures, and photo attachments",
      "Reports only",
      "Dashboards only"
    ],
    correctAnswer: 1,
    explanation: "The mobile app supports offline work, signatures, and photos."
  },
  {
    question: "Which feature enables automatic scheduling based on optimization rules?",
    options: [
      "Manual assignment only",
      "Optimization service with scheduling policies",
      "Gantt only",
      "Map only"
    ],
    correctAnswer: 1,
    explanation: "The optimization service runs with scheduling policies for automatic assignment."
  },
  {
    question: "What is a Service Territory used for?",
    options: [
      "To track parts only",
      "To define geographic or logical areas for resource assignment",
      "To create work types only",
      "To manage contracts only"
    ],
    correctAnswer: 1,
    explanation: "Service Territories define areas for resource assignment and routing."
  },
  {
    question: "Which Field Service feature supports contract-based entitlements and SLAs?",
    options: [
      "Work Type only",
      "Service Contracts and Entitlements",
      "Operating Hours only",
      "Service Resource only"
    ],
    correctAnswer: 1,
    explanation: "Service Contracts and Entitlements define SLAs and covered services."
  },
]

export default function FieldServicePage() {
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
            <p className="text-gray-600 mb-8">{getPracticeQuestionsIntro(sampleQuestions.length)}</p>
            
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
              { id: 'faq', title: 'Exam FAQs' }]}
          />
        </aside>
      </div>
    </div>
  )
}
