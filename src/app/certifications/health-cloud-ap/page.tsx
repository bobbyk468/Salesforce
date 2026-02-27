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

const slug = 'health-cloud-ap'
export async function generateMetadata() {
  return getCertMetadata(slug)
}

const sampleQuestions = [
  { question: "What does Health Cloud AP validate?", options: ["Only basics", "Skills and knowledge to implement Salesforce Health Cloud with industry-specific data models", "Only reporting", "Only Slack"], correctAnswer: 1, explanation: "Accredited Health Cloud Professionals have demonstrated the skills and knowledge to implement the Salesforce Health Cloud solution with industry-specific data models." },
  { question: "Which industry does Health Cloud serve?", options: ["Retail only", "Healthcare (e.g., providers, payers, life sciences)", "Manufacturing only", "Education only"], correctAnswer: 1, explanation: "Health Cloud serves healthcare organizations." },
  { question: "What is a key use case for Health Cloud?", options: ["Only email", "Patient engagement, care coordination, and healthcare workflows", "Only CPQ", "Only Slack"], correctAnswer: 1, explanation: "Patient engagement, care coordination, and healthcare workflows are key use cases." },
  { question: "Which role typically pursues Health Cloud AP?", options: ["Marketers", "Partners and implementers in healthcare", "Sales only", "Designers only"], correctAnswer: 1, explanation: "Partners and implementers in healthcare pursue this credential." },
  { question: "What does 'industry-specific data model' mean for Health Cloud?", options: ["Only standard objects", "Data model tailored for healthcare (e.g., patients, care plans, encounters)", "Only custom objects", "Only reports"], correctAnswer: 1, explanation: "It refers to a data model tailored for healthcare." },
  { question: "Which Health Cloud object represents a patient?", options: ["Account only", "Account with Person record type or Health Cloud's Individual/Patient model", "Contact only", "Lead only"], correctAnswer: 1, explanation: "Health Cloud uses patient-centric data models (Account-based or Individual)." },
  { question: "What is a Care Plan in Health Cloud?", options: ["A report", "A structured plan for patient care with goals and interventions", "A case type only", "An email template"], correctAnswer: 1, explanation: "Care Plans define care goals and interventions for patients." },
  { question: "What is an encounter in Health Cloud?", options: ["A report", "A documented interaction between a patient and provider (visit, call, etc.)", "A case type only", "An email template"], correctAnswer: 1, explanation: "Encounters record patient-provider interactions for care history." },
  { question: "What does EHR integration refer to in Health Cloud?", options: ["Slack only", "Connecting to Electronic Health Record systems for patient data", "Marketing Cloud only", "Commerce Cloud only"], correctAnswer: 1, explanation: "EHR integration brings patient data from health record systems into Salesforce." },
  { question: "Which industry segments use Health Cloud?", options: ["Retail only", "Providers, payers, life sciences, and healthcare technology", "Manufacturing only", "Government only"], correctAnswer: 1, explanation: "Providers, payers, and life sciences are primary segments." },
  { question: "What is patient engagement in Health Cloud context?", options: ["Only email", "Omnichannel interactions (portal, chat, outreach) to keep patients informed", "Only voice", "Only in-person"], correctAnswer: 1, explanation: "Patient engagement includes portals, messaging, and outreach." },
  { question: "Why is compliance important for Health Cloud implementations?", options: ["Not important", "Healthcare is regulated (HIPAA, etc.); data handling must comply", "Only for billing", "Only for marketing"], correctAnswer: 1, explanation: "HIPAA and healthcare regulations govern data and processes." },
  { question: "What does 'implement' mean for Health Cloud AP?", options: ["Only coding", "Configuring the solution, data model, and workflows for the customer", "Only reporting", "Only deployment"], correctAnswer: 1, explanation: "Implementation includes configuration, data model, and workflow setup." },
  { question: "Which Salesforce product does Health Cloud extend?", options: ["Commerce Cloud", "Service Cloud and Sales Cloud with healthcare-specific features", "Marketing Cloud only", "Slack only"], correctAnswer: 1, explanation: "Health Cloud extends Service Cloud and Sales Cloud for healthcare." },
  { question: "What is care coordination?", options: ["Only scheduling", "Coordinating care across providers, settings, and care team members", "Only billing", "Only marketing"], correctAnswer: 1, explanation: "Care coordination aligns providers and care plans for the patient." },
]

export default function HealthCloudAPPage() {
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
            
            <CertificationCard slug={slug} title={slugToDisplayName(slug)} code="AP" description="Accredited Health Cloud Professionals have demonstrated the skills and knowledge to implement the Salesforce Health Cloud solution with industry-specific data models." examDetails={{ questions: 60, passingScore: '~65%', duration: '90 min', cost: '$100' }} topics={['Health Cloud', 'Patient Engagement', 'Care Coordination', 'Data Model', 'Healthcare', 'Best Practices']}
            examSections={examSections}
            h1Text={getCertH1Text(slug)}
          examWeightageHeading={getCertExamWeightageHeading(slug)}
          />

          <div id="exam-prep">
            <ExamPrepContent slug={slug} />
          </div>

          {/* Key Concepts */}
          <div id="key-concepts" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Health Cloud: Key Concepts for the Exam</h2>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-1">Health Cloud Data Model: Patients, Providers, and Care Plans</p>
                <p>Health Cloud extends Salesforce for healthcare and life sciences. Key objects: Contact (Patient or Healthcare Provider), Account (Healthcare Provider Organisation), CarePlan (the patient&apos;s treatment plan), Care Plan Problem (a diagnosis or health condition), Care Plan Goal (measurable outcome), Care Plan Task (an action item). HealthcareFacility tracks provider locations. ClinicalEncounter records patient-provider interactions. The consultant designs the Health Cloud data model to match the organisation&apos;s care coordination model — whether focused on payer, provider, or life sciences workflows.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Care Plan Management and Coordination</p>
                <p>Care Plans are the core of Health Cloud — they organise all the clinical and social determinant information for a patient. Care Plan Templates pre-define the standard problems, goals, and tasks for common conditions (diabetes management, post-surgical recovery). Care Team members are assigned roles (primary care manager, specialist, community worker) and have visibility into the plan. The consultant configures Care Plan Templates for the organisation&apos;s common care pathways and designs the Care Team structure to match the clinical care model.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Intelligent Appointment Management (IAM)</p>
                <p>Intelligent Appointment Management (IAM) is Health Cloud&apos;s scheduling module for patient appointments. It enables patient self-scheduling via Experience Cloud portals, agent-assisted scheduling via the Health Console, and provider availability management. Slot management defines available appointment slots by provider, specialty, and location. The system matches patient needs (reason for visit, insurance, location preference) to available providers. The consultant configures IAM for the organisation&apos;s scheduling requirements — walk-in, scheduled, and telemedicine appointment types.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">FHIR Integration and EHR Connectivity</p>
                <p>Health Cloud supports HL7 FHIR R4 (Fast Healthcare Interoperability Resources) for exchanging clinical data with Electronic Health Record (EHR) systems. Salesforce Health Cloud includes a FHIR API connector for mapping FHIR resources (Patient, Encounter, Condition, Observation) to Salesforce Health Cloud objects. Bi-directional integration enables both reading from the EHR (importing patient records, encounters) and writing back (care plan updates, appointment status). The consultant assesses the integration pattern — what data to sync, at what frequency, and how to handle data conflicts between systems.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Analytics and Population Health Management</p>
                <p>Health Cloud analytics use CRM Analytics (Einstein Analytics) with pre-built Health Cloud datasets and dashboards. Population Health dashboards segment patients by condition, risk score, engagement level, or care gap. Risk stratification identifies high-risk patients who need proactive outreach. Care gap analysis identifies patients overdue for preventive care (annual wellness visits, screenings). Patient lists (list views of patients meeting specific criteria) drive targeted outreach campaigns. The consultant designs the analytics strategy to support value-based care performance measurement.</p>
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
