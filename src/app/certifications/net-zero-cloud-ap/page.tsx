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

const slug = 'net-zero-cloud-ap'
export async function generateMetadata() {
  return getCertMetadata(slug)
}

const sampleQuestions = [
  { question: "What does Net Zero Cloud AP validate?", options: ["Only basics", "Knowledge, skills, and experience with managing and collecting key sustainability data", "Only reporting", "Only Slack"], correctAnswer: 1, explanation: "Accredited Net Zero Cloud Professionals have demonstrated knowledge, skills, and experience with managing and collecting key sustainability data." },
  { question: "What is Net Zero Cloud used for?", options: ["Only email", "Sustainability and carbon footprint management", "Only CPQ", "Only Slack"], correctAnswer: 1, explanation: "Net Zero Cloud is used for sustainability and carbon footprint management." },
  { question: "What is a key activity for a Net Zero Cloud Professional?", options: ["Only coding", "Managing and collecting sustainability data", "Only reporting", "Only lists"], correctAnswer: 1, explanation: "They manage and collect sustainability data." },
  { question: "Which role typically pursues Net Zero Cloud AP?", options: ["Marketers", "Partners and implementers working with sustainability and Net Zero Cloud", "Sales only", "Designers only"], correctAnswer: 1, explanation: "Partners and implementers working with sustainability pursue this credential." },
  { question: "What does 'sustainability data' often include?", options: ["Only sales data", "Carbon emissions, energy usage, and environmental metrics", "Only marketing data", "Only financial data"], correctAnswer: 1, explanation: "Sustainability data includes carbon emissions, energy usage, and environmental metrics." },
]

export default function NetZeroCloudAPPage() {
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
            
            <CertificationCard title={slugToDisplayName(slug)} code="AP" description="Accredited Net Zero Cloud Professionals have demonstrated knowledge, skills, and experience with managing and collecting key sustainability data." examDetails={{ questions: 60, passingScore: '~65%', duration: '90 min', cost: '$100' }} topics={['Net Zero Cloud', 'Sustainability', 'Carbon', 'Emissions', 'Data Collection', 'Best Practices']}
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