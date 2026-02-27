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

const slug = 'process-automation-ap'
export async function generateMetadata() {
  return getCertMetadata(slug)
}

const sampleQuestions = [
  { question: "What does Process Automation AP validate?", options: ["Only basics", "Skills and knowledge in designing, configuring, building, and implementing Process Automation", "Only reporting", "Only Slack"], correctAnswer: 1, explanation: "Accredited Process Automation Professionals have skills and knowledge in designing, configuring, building, and implementing Process Automation." },
  { question: "Which Salesforce products are often part of Process Automation?", options: ["Only Marketing Cloud", "Flow, Process Builder (legacy), and automation tools on the platform", "Only Service Cloud", "Only Slack"], correctAnswer: 1, explanation: "Flow and automation tools on the platform are part of Process Automation." },
  { question: "What is a key activity for a Process Automation Professional?", options: ["Only coding", "Designing, configuring, building, and implementing automation solutions", "Only reporting", "Only lists"], correctAnswer: 1, explanation: "They design, configure, build, and implement automation solutions." },
  { question: "Which role typically pursues Process Automation AP?", options: ["Marketers", "Partners and implementers working with platform automation", "Sales only", "Designers only"], correctAnswer: 1, explanation: "Partners and implementers working with platform automation pursue this credential." },
  { question: "What does Process Automation often automate?", options: ["Only email", "Business processes, approvals, and record-triggered actions", "Only CPQ", "Only Slack"], correctAnswer: 1, explanation: "Process Automation automates business processes, approvals, and record-triggered actions." },
  { question: "What is a Record-Triggered Flow?", options: ["A report", "A Flow that runs when a record is created or updated", "A dashboard", "An email template"], correctAnswer: 1, explanation: "Record-Triggered Flows respond to record create/update events." },
  { question: "Which tool replaced Workflow Rules and Process Builder?", options: ["Apex only", "Flow (the recommended automation tool)", "Validation rules only", "Triggers only"], correctAnswer: 1, explanation: "Flow is the recommended replacement for legacy automation." },
  { question: "What does an Approval Process do?", options: ["Sends email only", "Routes records for multi-step human approval", "Creates reports only", "Updates fields only"], correctAnswer: 1, explanation: "Approval Processes route records for approval." },
  { question: "When should you use Flow vs Apex for automation?", options: ["Always Apex", "Flow for declarative; Apex when Flow cannot meet the requirement", "Always Flow", "Never Flow"], correctAnswer: 1, explanation: "Prefer Flow; use Apex when declarative is insufficient." },
  { question: "What is a Screen Flow?", options: ["A report", "A Flow that presents screens to users for input", "A triggered Flow only", "An approval only"], correctAnswer: 1, explanation: "Screen Flows display UI for user interaction." },
  { question: "What does 'build' mean for Process Automation?", options: ["Only coding", "Configuring the automation (Flow, approval, etc.)", "Only design", "Only deployment"], correctAnswer: 1, explanation: "Build = configure the automation." },
  { question: "Which Flow type runs on a schedule?", options: ["Record-Triggered only", "Scheduled Flow", "Screen Flow only", "Autolaunched Flow only"], correctAnswer: 1, explanation: "Scheduled Flows run on a time-based schedule." },
  { question: "What is a Flow trigger context?", options: ["A report", "When the Flow runs (e.g., before save, after save, scheduled)", "A dashboard", "An object"], correctAnswer: 1, explanation: "Trigger context defines when the Flow executes." },
  { question: "Why is Process Automation important on the platform?", options: ["Not important", "Enables automation without code; core to many implementations", "Only for admins", "Only for developers"], correctAnswer: 1, explanation: "Process Automation enables no-code automation." },
  { question: "What does implement mean for Process Automation AP?", options: ["Only coding", "Deploying and testing the automation in the customer org", "Only design", "Only documentation"], correctAnswer: 1, explanation: "Implement = deploy and validate." },
]

export default function ProcessAutomationAPPage() {
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
            
            <CertificationCard slug={slug} title={slugToDisplayName(slug)} code="AP" description="Accredited Process Automation Professionals have skills and knowledge in designing, configuring, building, and implementing Process Automation." examDetails={{ questions: 60, passingScore: '~65%', duration: '90 min', cost: '$100' }} topics={['Process Automation', 'Flow', 'Automation', 'Approvals', 'Best Practices']}
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
