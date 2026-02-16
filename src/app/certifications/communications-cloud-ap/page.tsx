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

const slug = 'communications-cloud-ap'
export async function generateMetadata() {
  return getCertMetadata(slug)
}

const sampleQuestions = [
  { question: "What does Communications Cloud AP validate?", options: ["Only basics", "Knowledge, skills, and experience to discover, design, plan, and deliver business value through Communications Cloud", "Only reporting", "Only Slack"], correctAnswer: 1, explanation: "Accredited Communications Cloud Professionals have knowledge, skills, and experience to discover, design, plan, and deliver business value through Communications Cloud." },
  { question: "Which industry does Communications Cloud serve?", options: ["Retail only", "Telecommunications and media (e.g., telecom operators)", "Manufacturing only", "Healthcare only"], correctAnswer: 1, explanation: "Communications Cloud serves telecommunications and media industries." },
  { question: "What is a key activity for a Communications Cloud Professional?", options: ["Only coding", "Discovering, designing, planning, and delivering business value", "Only reporting", "Only email"], correctAnswer: 1, explanation: "They discover, design, plan, and deliver business value." },
  { question: "Which role typically pursues Communications Cloud AP?", options: ["Marketers", "Partners and implementers in telecom/media", "Sales only", "Designers only"], correctAnswer: 1, explanation: "Partners and implementers in telecom/media pursue this credential." },
  { question: "What does Communications Cloud often integrate with?", options: ["Only Marketing Cloud", "Industries CPQ, Billing, and telecom systems", "Only Service Cloud", "Only Slack"], correctAnswer: 1, explanation: "It integrates with Industries CPQ, Billing, and telecom systems." },
]

export default function CommunicationsCloudAPPage() {
  const examSections = getExamWeightage(slug)
  return (
    <div data-critical-content className="max-w-7xl mx-auto px-4 py-12">
      <CertPageSeo slug={slug} certTitle={slugToDisplayName(slug)} />
      <CertPageIntro slug={slug} />
        
        {/* Prominent CTA above fold */}
        <CertPageCta slug={slug} certTitle={slugToDisplayName(slug)} />
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-3">
            {/* Exam Fees & Registration section */}
            <ExamFeesSection slug={slug} />
            
            <CertificationCard title={slugToDisplayName(slug)} code="AP" description="Accredited Communications Cloud Professionals have knowledge, skills, and experience to discover, design, plan, and deliver business value to customers through Communications Cloud." examDetails={{ questions: 60, passingScore: '~65%', duration: '90 min', cost: '$100' }} topics={['Communications Cloud', 'Telecom', 'Discovery', 'Design', 'Delivery', 'Best Practices']}
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