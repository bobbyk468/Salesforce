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

const slug = 'advanced-field-service-ap'
export async function generateMetadata() {
  return getCertMetadata(slug)
}

const sampleQuestions = [
  { question: "What does Advanced Field Service AP validate?", options: ["Only basics", "Designing, configuring, building, and implementing Advanced Field Service", "Only reporting", "Only Slack"], correctAnswer: 1, explanation: "Accredited Advanced Field Service Professionals have demonstrated skills in designing, configuring, building, and implementing Advanced Field Service." },
  { question: "Which product does Advanced Field Service extend?", options: ["Marketing Cloud", "Service Cloud and Field Service", "Commerce Cloud", "Slack"], correctAnswer: 1, explanation: "Advanced Field Service extends Service Cloud and Field Service capabilities." },
  { question: "What is a key capability of Advanced Field Service?", options: ["Email only", "Scheduling, optimization, and mobile workforce management", "CPQ only", "Reporting only"], correctAnswer: 1, explanation: "Scheduling, optimization, and mobile workforce management are key capabilities." },
  { question: "Which role typically pursues Advanced Field Service AP?", options: ["Marketers", "Partners and implementers working with Field Service", "Sales only", "Developers only"], correctAnswer: 1, explanation: "Partners and implementers working with Field Service pursue this credential." },
  { question: "What does AP stand for in Accredited Professional?", options: ["Application", "Accredited Professional", "Advanced Platform", "Automation Process"], correctAnswer: 1, explanation: "AP stands for Accredited Professional—product/industry credentials for partners." },
  { question: "What is scheduling optimization in Field Service?", options: ["Manual assignment only", "Automated assignment of work orders to technicians based on skills, location, and availability", "Email scheduling only", "Report scheduling only"], correctAnswer: 1, explanation: "Optimization assigns work to the right technician based on criteria." },
  { question: "Which object represents a work order in Field Service?", options: ["Case only", "Service Appointment and Work Order", "Task only", "Event only"], correctAnswer: 1, explanation: "Work Order and Service Appointment track field service work." },
  { question: "What is mobile workforce management?", options: ["Desktop only", "Enabling technicians to view schedules, update work, and capture data on mobile devices", "Email only", "Reporting only"], correctAnswer: 1, explanation: "Mobile tools let technicians access schedules and update work in the field." },
  { question: "Which capability helps optimize technician routes?", options: ["Manual routing only", "Scheduling policies and optimization consider travel time and location", "Email only", "Chat only"], correctAnswer: 1, explanation: "Optimization considers travel time and location for efficient routing." },
  { question: "What does 'build and implement' mean for Advanced Field Service?", options: ["Only coding", "Configuring the solution and deploying it for the customer", "Only reporting", "Only training"], correctAnswer: 1, explanation: "Build = configure; implement = deploy and go-live." },
  { question: "What is a work type in Field Service?", options: ["A report", "A template defining the skills, duration, and parts needed for a job type", "A case type", "An email template"], correctAnswer: 1, explanation: "Work types standardize job definitions for scheduling and resource planning." },
  { question: "What is a Service Territory in Field Service?", options: ["A report", "A geographic or logical area for assigning and optimizing work", "A case type", "An email template"], correctAnswer: 1, explanation: "Service Territories define areas for work assignment." },
  { question: "Why is capacity planning important for Field Service?", options: ["Not important", "Ensuring enough technician capacity for forecasted work volume", "Only for sales", "Only for marketing"], correctAnswer: 1, explanation: "Capacity planning aligns technician availability with demand." },
  { question: "What does resource optimization consider?", options: ["Only skills", "Skills, location, availability, and business rules", "Only location", "Only time"], correctAnswer: 1, explanation: "Optimization uses multiple factors for optimal assignment." },
  { question: "Which mobile feature helps technicians complete work?", options: ["Email only", "Field Service Mobile app for schedules, check-in, and work completion", "Chat only", "Reports only"], correctAnswer: 1, explanation: "Field Service Mobile provides the technician's field interface." },
]

export default function AdvancedFieldServiceAPPage() {
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
            
            <CertificationCard slug={slug} title={slugToDisplayName(slug)} code="AP" description="Accredited Advanced Field Service Professionals have demonstrated skills and knowledge in designing, configuring, building, and implementing Advanced Field Service." examDetails={{ questions: 60, passingScore: '~65%', duration: '90 min', cost: '$100' }} topics={['Advanced Field Service', 'Scheduling', 'Optimization', 'Mobile', 'Service Cloud', 'Best Practices']}
            examSections={examSections}
            h1Text={getCertH1Text(slug)}
          examWeightageHeading={getCertExamWeightageHeading(slug)}
          />

          <div id="exam-prep">
            <ExamPrepContent slug={slug} />
          </div>


          {/* Key Concepts */}
          <div id="key-concepts" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Advanced Field Service AP: Key Concepts for the Exam</h2>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-1">Scheduling & Optimization Engine</p>
                <p>The Field Service Scheduling Optimization Engine (Enhanced Scheduling and Optimization, or ESO) automatically schedules and optimizes work orders across a workforce. Scheduling Policies define rules, objectives, and constraints — balance travel time, skill matching, SLA compliance, and customer time preferences. Work Rules include availability, skills, territories, and travel limits. Optimization Objectives specify what to optimize (minimize travel, maximize utilization). Drip Feed Scheduling releases appointments incrementally to field workers. The Advanced FSL exam tests deep configuration of scheduling policies and understanding of how ESO decisions are made — know which rule types govern which behavior.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Work Orders, Work Types & Service Appointments</p>
                <p>Work Orders are the central record for field service jobs. Work Types define templates — they set default skills, estimated duration, and required products. Service Appointments are the scheduled instances linked to Work Orders (or Account, Asset, Opportunity, or Work Order Line Items). Appointment Bundles group multiple appointments for efficient scheduling. Service Resources are workers or crews. Resource Absences block scheduling during PTO or non-working periods. Service Territories define geographic or operational coverage areas, with Operating Hours. The exam tests complex scenarios with multi-visit work orders, bundled appointments, and nested territories.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Asset Management & Maintenance Plans</p>
                <p>Assets represent physical equipment or products owned by customers. Asset Relationships model complex asset hierarchies (parent-child, component-of). Maintenance Plans define recurring service schedules — set work type, frequency, and generation horizon. Work Order Generation automatically creates future work orders from the maintenance plan. Asset Warranties track coverage periods and terms. Service Contracts define the scope and duration of a service agreement. Entitlements within Service Cloud FSL determine response time SLAs. Advanced FSL exam questions often involve configuring proactive maintenance and linking warranty coverage to auto-generated work orders.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Inventory & Parts Management</p>
                <p>Products Required on Work Order Line Items specify the parts needed for a job. Field technicians consume parts from their truck stock (Location Type: Vehicle). Return Orders handle defective or unused parts returned to a depot. Inventory Transfers move parts between locations (warehouse to van, van to van). Serialized Products track individual items; non-serialized track quantities. Price Books set part costs. The exam tests end-to-end parts flows: requesting parts, transferring from depot to van, consuming on job, and returning unused items. Know the difference between a Product Consumed (used on site) and a Product Requested (pre-job planning).</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Mobile Worker Experience & Offline</p>
                <p>The Salesforce Field Service mobile app provides technicians with work order details, navigation, inventory, and signature capture. Offline mode caches assigned appointments and allows data entry without network connectivity — changes sync when connectivity is restored. Flow for Field Service delivers guided on-site workflows through the mobile app. The Gantt chart in the dispatcher console visualizes all scheduled work across the workforce. Global Actions add quick actions to the mobile app. The exam tests the configuration of mobile settings, what data is available offline, and how to build guided mobile workflows using Flow.</p>
              </div>
            </div>
          </div>
          <div id="practice-questions" className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{getCertPracticeQuestionsHeading(slug)}</h2>
            <p className="text-gray-600 mb-8">{getPracticeQuestionsIntro(sampleQuestions.length)}</p>
            {sampleQuestions.map((q, i) => (<QuestionCard key={i} questionNumber={i + 1} question={q.question} options={q.options} correctAnswer={q.correctAnswer} explanation={q.explanation} />))}
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
              { id: 'key-concepts', title: 'Key Concepts' },
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
