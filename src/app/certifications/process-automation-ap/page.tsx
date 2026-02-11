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

const slug = 'process-automation-ap'
export const metadata = getCertMetadata(slug)

const sampleQuestions = [
  { question: "What does Process Automation AP validate?", options: ["Only basics", "Skills and knowledge in designing, configuring, building, and implementing Process Automation", "Only reporting", "Only Slack"], correctAnswer: 1, explanation: "Accredited Process Automation Professionals have skills and knowledge in designing, configuring, building, and implementing Process Automation." },
  { question: "Which Salesforce products are often part of Process Automation?", options: ["Only Marketing Cloud", "Flow, Process Builder (legacy), and automation tools on the platform", "Only Service Cloud", "Only Slack"], correctAnswer: 1, explanation: "Flow and automation tools on the platform are part of Process Automation." },
  { question: "What is a key activity for a Process Automation Professional?", options: ["Only coding", "Designing, configuring, building, and implementing automation solutions", "Only reporting", "Only lists"], correctAnswer: 1, explanation: "They design, configure, build, and implement automation solutions." },
  { question: "Which role typically pursues Process Automation AP?", options: ["Marketers", "Partners and implementers working with platform automation", "Sales only", "Designers only"], correctAnswer: 1, explanation: "Partners and implementers working with platform automation pursue this credential." },
  { question: "What does Process Automation often automate?", options: ["Only email", "Business processes, approvals, and record-triggered actions", "Only CPQ", "Only Slack"], correctAnswer: 1, explanation: "Process Automation automates business processes, approvals, and record-triggered actions." },
]

export default function ProcessAutomationAPPage() {
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
            
            <CertificationCard title={slugToDisplayName(slug)} code="AP" description="Accredited Process Automation Professionals have skills and knowledge in designing, configuring, building, and implementing Process Automation." examDetails={{ questions: 60, passingScore: '~65%', duration: '90 min', cost: '$100' }} topics={['Process Automation', 'Flow', 'Automation', 'Approvals', 'Best Practices']}
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