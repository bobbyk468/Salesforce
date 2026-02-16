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
]

export default function AdvancedFieldServiceAPPage() {
  const examSections = getExamWeightage(slug)
  return (
    <div data-critical-content className="max-w-7xl mx-auto px-4 py-12">
      <CertPageSeo slug={slug} certTitle={slugToDisplayName(slug)} />
      <CertPageIntro slug={slug} />
        <ExamLogisticsSection slug={slug} />
        
        {/* Prominent CTA above fold */}
        <CertPageCta slug={slug} certTitle={slugToDisplayName(slug)} />
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-3">
            {/* Exam Fees & Registration section */}
            <ExamFeesSection slug={slug} />
            
            <CertificationCard title={slugToDisplayName(slug)} code="AP" description="Accredited Advanced Field Service Professionals have demonstrated skills and knowledge in designing, configuring, building, and implementing Advanced Field Service." examDetails={{ questions: 60, passingScore: '~65%', duration: '90 min', cost: '$100' }} topics={['Advanced Field Service', 'Scheduling', 'Optimization', 'Mobile', 'Service Cloud', 'Best Practices']}
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