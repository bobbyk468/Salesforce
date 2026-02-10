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

const slug = 'consumer-goods-tpm-ap'
export const metadata = getCertMetadata(slug)

const sampleQuestions = [
  { question: "What does Consumer Goods Cloud TPM AP validate?", options: ["Only basics", "Knowledge, skills, and experience to discover, design, plan, and deliver product value with Consumer Goods Cloud TPM", "Only reporting", "Only Slack"], correctAnswer: 1, explanation: "Accredited Consumer Goods Cloud TPM Professionals have the knowledge, skills, and experience to discover, design, plan, and deliver product value with Consumer Goods Cloud TPM." },
  { question: "What does TPM stand for?", options: ["Total Product Management", "Trade Promotion Management", "Technical Process Model", "Task Project Manager"], correctAnswer: 1, explanation: "TPM stands for Trade Promotion Management." },
  { question: "What is Trade Promotion Management used for?", options: ["Only email", "Planning, executing, and measuring trade promotions and incentives", "Only CPQ", "Only Slack"], correctAnswer: 1, explanation: "TPM is used for planning, executing, and measuring trade promotions." },
  { question: "Which role typically pursues Consumer Goods TPM AP?", options: ["Marketers", "Partners and implementers in consumer goods trade promotion", "Sales only", "Designers only"], correctAnswer: 1, explanation: "Partners and implementers in consumer goods trade promotion pursue this credential." },
  { question: "What does 'deliver product value' mean in TPM context?", options: ["Only shipping", "Delivering business value through trade promotion programs and analytics", "Only reporting", "Only dashboards"], correctAnswer: 1, explanation: "It means delivering business value through trade promotion programs and analytics." },
]

export default function ConsumerGoodsTPMAPPage() {
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
            
            <CertificationCard title={slugToDisplayName(slug)} code="AP" description="Accredited Consumer Goods Cloud Trade Promotion Management (TPM) Professionals have the knowledge, skills, and experience to discover, design, plan, and deliver product value to customers with Consumer Goods Cloud TPM." examDetails={{ questions: 60, passingScore: '~65%', duration: '90 min', cost: '$100' }} topics={['Consumer Goods Cloud', 'TPM', 'Trade Promotion', 'Planning', 'Analytics', 'Best Practices']}
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
          
          <div id="more-questions" className="mt-12 bg-salesforce-blue/10 rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Want More Practice Questions?</h3>
            <p className="text-gray-600 mb-6">Get access to our complete question bank.</p>
            <a href="/contact" className="inline-block px-8 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-all duration-200 shadow-md hover:shadow-lg active:scale-95">Contact Us for Full Access</a>
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