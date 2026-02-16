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

const slug = 'energy-utilities-ap'
export async function generateMetadata() {
  return getCertMetadata(slug)
}

const sampleQuestions = [
  { question: "What does Energy and Utilities Cloud AP validate?", options: ["Only basics", "Fundamental knowledge, skills, and experience to deliver business value through Energy and Utilities Cloud", "Only reporting", "Only Slack"], correctAnswer: 1, explanation: "Accredited Energy and Utilities Cloud Professionals have fundamental knowledge, skills, and experience to deliver business value through Energy and Utilities Cloud." },
  { question: "Which industry does Energy and Utilities Cloud serve?", options: ["Retail only", "Energy and utilities (e.g., electric, gas, water)", "Healthcare only", "Financial services only"], correctAnswer: 1, explanation: "Energy and Utilities Cloud serves energy and utilities industries." },
  { question: "What is a key use case for Energy and Utilities Cloud?", options: ["Only email", "Metering, billing, and customer engagement for utilities", "Only CPQ", "Only Slack"], correctAnswer: 1, explanation: "Metering, billing, and customer engagement are key use cases." },
  { question: "Which role typically pursues Energy and Utilities AP?", options: ["Marketers", "Partners and implementers in energy and utilities", "Sales only", "Designers only"], correctAnswer: 1, explanation: "Partners and implementers in energy and utilities pursue this credential." },
  { question: "What does 'deliver business value' mean in this context?", options: ["Only shipping", "Implementing solutions that drive outcomes for energy and utilities customers", "Only reporting", "Only dashboards"], correctAnswer: 1, explanation: "It means implementing solutions that drive outcomes for energy and utilities customers." },
]

export default function EnergyUtilitiesAPPage() {
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
            
            <CertificationCard title={slugToDisplayName(slug)} code="AP" description="Accredited Energy and Utilities Cloud Professionals have fundamental knowledge, skills, and experience to deliver business value to customers through Energy and Utilities Cloud." examDetails={{ questions: 60, passingScore: '~65%', duration: '90 min', cost: '$100' }} topics={['Energy and Utilities Cloud', 'Metering', 'Billing', 'Customer Engagement', 'Best Practices']}
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