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

const slug = 'b2b-commerce-admin-ap'
export const metadata = getCertMetadata(slug)

const sampleQuestions = [
  { question: "What does B2B Commerce for Administrators AP validate?", options: ["Only development", "Broad knowledge of B2B Commerce and platform capabilities to troubleshoot and solve basic platform issues", "Only marketing", "Only Slack"], correctAnswer: 1, explanation: "Accredited B2B Commerce For Administrators Professionals have developed broad knowledge of the B2B Commerce discipline and platform capabilities." },
  { question: "Which Salesforce product does B2B Commerce refer to?", options: ["Marketing Cloud", "B2B Commerce (formerly CloudCraze) for B2B digital storefronts", "Service Cloud", "Slack"], correctAnswer: 1, explanation: "B2B Commerce is Salesforce's B2B digital commerce product." },
  { question: "What is a key responsibility of a B2B Commerce Administrator?", options: ["Only coding", "Configuring and troubleshooting B2B Commerce and platform", "Only reporting", "Only email"], correctAnswer: 1, explanation: "They configure and troubleshoot B2B Commerce and platform issues." },
  { question: "Which role typically pursues B2B Commerce Admin AP?", options: ["Marketers", "Partners and implementers working with B2B Commerce", "Sales only", "Designers only"], correctAnswer: 1, explanation: "Partners and implementers working with B2B Commerce pursue this credential." },
  { question: "What does B2B stand for?", options: ["Back to Back", "Business to Business", "Build to Order", "Brand to Brand"], correctAnswer: 1, explanation: "B2B stands for Business to Business." },
]

export default function B2BCommerceAdminAPPage() {
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
            
            <CertificationCard title={slugToDisplayName(slug)} code="AP" description="Accredited B2B Commerce For Administrators Professionals have developed broad knowledge of the B2B Commerce discipline and knowledge of the Salesforce platform capabilities in order to troubleshoot and solve basic platform issues." examDetails={{ questions: 60, passingScore: '~65%', duration: '90 min', cost: '$100' }} topics={['B2B Commerce', 'Administration', 'Platform', 'Troubleshooting', 'Best Practices']}
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