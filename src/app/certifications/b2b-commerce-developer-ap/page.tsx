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

const slug = 'b2b-commerce-developer-ap'
export const metadata = getCertMetadata(slug)

const sampleQuestions = [
  { question: "What does B2B Commerce for Developers AP validate?", options: ["Only administration", "Configuring and customizing B2B Commerce in the context of sample apps and real-world implementations", "Only marketing", "Only Slack"], correctAnswer: 1, explanation: "Accredited B2B Commerce For Developers Professionals have demonstrated skill and knowledge in configuring and customizing B2B Commerce." },
  { question: "Which type of implementations do B2B Commerce Developers work with?", options: ["Only sample apps", "Sample apps and real-world implementations", "Only reporting", "Only email"], correctAnswer: 1, explanation: "They work with sample apps and real-world implementations." },
  { question: "What is a key activity for a B2B Commerce Developer?", options: ["Only reporting", "Configuring and customizing B2B Commerce storefronts and integrations", "Only dashboards", "Only lists"], correctAnswer: 1, explanation: "They configure and customize B2B Commerce storefronts and integrations." },
  { question: "Which role typically pursues B2B Commerce Developer AP?", options: ["Marketers", "Partners and developers working with B2B Commerce", "Sales only", "Designers only"], correctAnswer: 1, explanation: "Partners and developers working with B2B Commerce pursue this credential." },
  { question: "What does customization in B2B Commerce often involve?", options: ["Only UI", "Storefront themes, cart, checkout, and APIs", "Only reports", "Only emails"], correctAnswer: 1, explanation: "Customization involves storefront, cart, checkout, and APIs." },
]

export default function B2BCommerceDeveloperAPPage() {
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
            
            <CertificationCard title={slugToDisplayName(slug)} code="AP" description="Accredited B2B Commerce For Developers Professionals have demonstrated skill and knowledge in configuring and customizing B2B Commerce in the context of sample apps and real world implementations." examDetails={{ questions: 60, passingScore: '~65%', duration: '90 min', cost: '$100' }} topics={['B2B Commerce', 'Development', 'Customization', 'Storefront', 'APIs', 'Best Practices']}
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