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

          {/* Key Concepts */}
          <div id="key-concepts" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Field Service Consultant: Key Concepts for the Exam</h2>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-1">Field Service Objects: Work Orders, Appointments, and Resources</p>
                <p>The Field Service data model centres on Work Orders (the service job), Work Order Line Items (specific tasks within the job), Service Appointments (the scheduled visit), and Service Resources (the worker, equipment, or crew). Assets track the customer equipment being serviced. Locations store physical addresses for service territories and parts inventory. The consultant must understand how these objects relate and how data flows from a Case &rarr; Work Order &rarr; Service Appointment &rarr; Resource assignment and completion.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Scheduling and the Gantt</p>
                <p>The Dispatcher Console Gantt view shows all appointments on a timeline by resource. Drag-and-drop scheduling assigns appointments to resources. The Scheduling Policy defines the rules for the scheduler — constraints (working hours, required skills, territory) and objectives (minimise travel, maximise utilisation). Appointment Booking lets customers or agents select available slots. The In-Day Optimisation automatically reschedules appointments as the day changes (cancellations, new high-priority jobs). Know the difference between manual scheduling and automated optimisation.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Service Territories, Resources, and Skills</p>
                <p>Service Territories define the geographic areas where resources operate — Primary territory (where the resource primarily works) and Secondary/Relocation territories for expanded coverage. Service Resources are linked to Salesforce users (Employee type) or equipment (Equipment type). Skills define the competencies required for a Work Order — resources must have matching skills for skills-based routing. Operating Hours define when territories and resources are available. The exam tests which combination of territory, resource, and skill configuration matches a given routing scenario.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Mobile App and Offline Capabilities</p>
                <p>The Field Service Mobile app (iOS and Android) allows field technicians to view and complete work orders, update service appointment status, log parts used, and capture signatures. Offline mode allows continued working when network connectivity is unavailable — changes sync when connectivity is restored. Mobile flows guide technicians through inspection checklists and multi-step processes. Inventory management: technicians can view van stock (Products Required), consume parts (Products Consumed), and request restocking. The exam tests mobile configuration options and offline data sync behaviour.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Parts and Inventory Management</p>
                <p>Products Required list the parts needed for a Work Order before the job. Products Consumed record actual parts used during the service visit. Return Orders handle parts returned to inventory. Locations track physical inventory (van stock, warehouse, customer site). Inventory transfers move stock between locations. The Service Report summarises the completed work, parts used, and technician notes — can be auto-generated and sent to the customer upon job completion. Know the difference between Products Required (planned) and Products Consumed (actual).</p>
              </div>
            </div>
          </div>


          {/* How to Pass Scenario Strategy */}
          <div id="scenario-tips" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Pass the Salesforce Field Service Consultant Exam</h2>
            <p className="text-sm text-gray-600 mb-5">
              The Field Service exam tests implementation of field service operations: scheduling, dispatch, mobile workers, and inventory. Focus on the Work Order data model, scheduling policy configuration, and the Field Service mobile app.
            </p>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-1">Work Order Data Model</p>
                <p>Know the hierarchy: Work Order → Work Order Line Items → Service Appointments. Understand how Service Resources, Service Territories, and Operating Hours define scheduling availability.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Scheduling Policies &amp; Optimization</p>
                <p>Scheduling Policies define how Salesforce Scheduler and the Optimization engine assign appointments. Know the rule types (Work Rule, Service Objective), how they interact, and how to configure Scheduling Policy goals.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Dispatcher Console</p>
                <p>Know how dispatchers use the Gantt view, map view, and appointment list to manage appointments. Understand how to manually schedule, unschedule, and reassign appointments, and how to use absence management.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Mobile App Configuration</p>
                <p>Know how to configure the Field Service mobile app: which records are accessible offline, how to configure the mobile flow, Required Skills, and how mobile workers complete Work Order Line Items and capture signatures.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Inventory Management</p>
                <p>Understand how Product Items (serialized/non-serialized), Product Requests, and Product Consumed track parts consumption. Know how Return Orders handle reverse logistics and how inventory levels roll up by location.</p>
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
