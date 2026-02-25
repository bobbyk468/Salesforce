import FullQuestionBankCta from '@/components/FullQuestionBankCta'
import CertificationCard from '@/components/CertificationCard'
import ExamPrepContent from '@/components/ExamPrepContent'
import CertPageSeo, { CertPageFaq } from '@/components/CertPageSeo'
import CertPageIntro from '@/components/CertPageIntro'
import CertPageCta from '@/components/CertPageCta'
import ExamLogisticsSection from '@/components/ExamLogisticsSection'
import ExamFeesSection from '@/components/ExamFeesSection'
import RelatedCertifications from '@/components/RelatedCertifications'
import CertTableOfContents from '@/components/CertTableOfContents'
import { getCertMetadata, getCertH1Text, getCertExamWeightageHeading, getCertPracticeQuestionsHeading, slugToDisplayName } from '@/lib/cert-seo-data'
import QuestionCard from '@/components/QuestionCard'
import { Metadata } from 'next'
import { getExamWeightage } from '@/lib/exam-weightage-data'

const slug = 'manufacturing-cloud-ap'
export async function generateMetadata() {
  return getCertMetadata(slug)
}

const sampleQuestions = [
  { question: "What does Manufacturing Cloud AP validate?", options: ["Only basics", "Fundamental knowledge and skills to design, build, and deploy solutions across several Marketing Cloud products", "Only reporting", "Only Slack"], correctAnswer: 1, explanation: "Accredited Manufacturing Cloud Professionals have demonstrated the fundamental knowledge and skills to design, build, and deploy solutions across several Marketing Cloud products." },
  { question: "Which industry does Manufacturing Cloud serve?", options: ["Retail only", "Manufacturing (e.g., production, supply chain)", "Healthcare only", "Education only"], correctAnswer: 1, explanation: "Manufacturing Cloud serves manufacturing industries." },
  { question: "What is a key use case for Manufacturing Cloud?", options: ["Only email", "Production planning, supply chain, and shop floor", "Only CPQ", "Only Slack"], correctAnswer: 1, explanation: "Production planning, supply chain, and shop floor are key use cases." },
  { question: "Which role typically pursues Manufacturing Cloud AP?", options: ["Marketers", "Partners and implementers in manufacturing", "Sales only", "Designers only"], correctAnswer: 1, explanation: "Partners and implementers in manufacturing pursue this credential." },
  { question: "What does 'design, build, and deploy' mean in this context?", options: ["Only UI", "Implementing end-to-end manufacturing solutions", "Only reports", "Only dashboards"], correctAnswer: 1, explanation: "It means implementing end-to-end manufacturing solutions." },
]

export default function ManufacturingCloudAPPage() {
  const examSections = getExamWeightage(slug)
  return (
    <div data-critical-content className="max-w-7xl mx-auto px-4 py-12">
      <CertPageSeo slug={slug} certTitle={slugToDisplayName(slug)} />
        
        {/* Prominent CTA above fold */}
        <CertPageCta slug={slug} certTitle={slugToDisplayName(slug)} />
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-3">
            {/* Exam Fees & Registration section */}
            <ExamFeesSection slug={slug} />
            
            <CertificationCard slug={slug} title={slugToDisplayName(slug)} code="AP" description="Accredited Manufacturing Cloud Professionals have demonstrated the fundamental knowledge and skills to design, build, and deploy solutions across several Marketing Cloud products." examDetails={{ questions: 60, passingScore: '~65%', duration: '90 min', cost: '$100' }} topics={['Manufacturing Cloud', 'Production', 'Supply Chain', 'Shop Floor', 'Best Practices']}
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
