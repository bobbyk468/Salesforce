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

const slug = 'public-sector-solutions-ap'
export async function generateMetadata() {
  return getCertMetadata(slug)
}

const sampleQuestions = [
  { question: "What does Public Sector Solutions AP validate?", options: ["Only basics", "Driving successful outcomes by leveraging Public Sector solutions implementation considerations and best practices that align with a company's vision and business value goals", "Only reporting", "Only Slack"], correctAnswer: 1, explanation: "Accredited Public Sector Solutions Professionals drive successful outcomes by leveraging Public Sector solutions implementation considerations and best practices that best align with a company's vision and business value goals." },
  { question: "Which sector does Public Sector Solutions serve?", options: ["Retail only", "Government, public sector, and civic organizations", "Healthcare only", "Education only"], correctAnswer: 1, explanation: "Public Sector Solutions serves government and public sector organizations." },
  { question: "What is a key activity for a Public Sector Solutions Professional?", options: ["Only coding", "Implementing Public Sector solutions with best practices and alignment to business value", "Only reporting", "Only lists"], correctAnswer: 1, explanation: "They implement Public Sector solutions with best practices and alignment to business value." },
  { question: "Which role typically pursues Public Sector Solutions AP?", options: ["Marketers", "Partners and implementers working with public sector", "Sales only", "Designers only"], correctAnswer: 1, explanation: "Partners and implementers working with public sector pursue this credential." },
  { question: "What does 'business value goals' mean in Public Sector context?", options: ["Only revenue", "Outcomes that align with agency mission and citizen/customer value", "Only cost", "Only speed"], correctAnswer: 1, explanation: "It means outcomes that align with agency mission and citizen/customer value." },
]

export default function PublicSectorSolutionsAPPage() {
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
            
            <CertificationCard slug={slug} title={slugToDisplayName(slug)} code="AP" description="Accredited Public Sector Solutions Professionals drive successful outcomes by leveraging Public Sector solutions implementation considerations and best practices that best align with a company's vision and business value goals." examDetails={{ questions: 60, passingScore: '~65%', duration: '90 min', cost: '$100' }} topics={['Public Sector', 'Government', 'Implementation', 'Best Practices', 'Business Value']}
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
