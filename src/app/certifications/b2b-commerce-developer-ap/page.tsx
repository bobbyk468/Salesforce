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
import { getCertMetadata, getCertH1Text, getCertExamWeightageHeading, getCertPracticeQuestionsHeading, getPracticeQuestionsIntro, slugToDisplayName } from '@/lib/cert-seo-data'
import QuestionCard from '@/components/QuestionCard'
import { Metadata } from 'next'
import { getExamWeightage } from '@/lib/exam-weightage-data'

const slug = 'b2b-commerce-developer-ap'
export async function generateMetadata() {
  return getCertMetadata(slug)
}

const sampleQuestions = [
  { question: "What does B2B Commerce for Developers AP validate?", options: ["Only administration", "Configuring and customizing B2B Commerce in the context of sample apps and real-world implementations", "Only marketing", "Only Slack"], correctAnswer: 1, explanation: "Accredited B2B Commerce For Developers Professionals have demonstrated skill and knowledge in configuring and customizing B2B Commerce." },
  { question: "Which type of implementations do B2B Commerce Developers work with?", options: ["Only sample apps", "Sample apps and real-world implementations", "Only reporting", "Only email"], correctAnswer: 1, explanation: "They work with sample apps and real-world implementations." },
  { question: "What is a key activity for a B2B Commerce Developer?", options: ["Only reporting", "Configuring and customizing B2B Commerce storefronts and integrations", "Only dashboards", "Only lists"], correctAnswer: 1, explanation: "They configure and customize B2B Commerce storefronts and integrations." },
  { question: "Which role typically pursues B2B Commerce Developer AP?", options: ["Marketers", "Partners and developers working with B2B Commerce", "Sales only", "Designers only"], correctAnswer: 1, explanation: "Partners and developers working with B2B Commerce pursue this credential." },
  { question: "What does customization in B2B Commerce often involve?", options: ["Only UI", "Storefront themes, cart, checkout, and APIs", "Only reports", "Only emails"], correctAnswer: 1, explanation: "Customization involves storefront, cart, checkout, and APIs." },
  { question: "Which B2B Commerce component can developers customize?", options: ["Slack only", "Storefront templates, cart, and checkout flow", "Marketing Cloud only", "Service Cloud only"], correctAnswer: 1, explanation: "Developers customize templates, cart, and checkout." },
  { question: "What does B2B Commerce run on?", options: ["Heroku only", "Experience Cloud", "Marketing Cloud only", "Slack only"], correctAnswer: 1, explanation: "B2B Commerce runs on Experience Cloud." },
  { question: "Which API supports B2B Commerce customization?", options: ["Apex only", "B2B Commerce APIs and Connector", "Slack API only", "No API"], correctAnswer: 1, explanation: "B2B Commerce APIs and Connector support customization." },
  { question: "What is a B2B Commerce buyer group?", options: ["A report", "A group with shared catalog and pricing", "A lead", "A campaign"], correctAnswer: 1, explanation: "Buyer groups define shared catalog and pricing." },
  { question: "Which integration does B2B Commerce Developer work with?", options: ["Slack only", "CPQ, Order Management, and CRM", "Marketing Cloud only", "Service Cloud only"], correctAnswer: 1, explanation: "B2B Commerce integrates with CPQ and Order Management." },
  { question: "What does storefront customization include?", options: ["Only colors", "Themes, layouts, and components", "Only reports", "Only dashboards"], correctAnswer: 1, explanation: "Customization includes themes, layouts, and components." },
  { question: "Which best practice applies to B2B Commerce development?", options: ["Ignore cart", "Test cart, checkout, and integration flows", "No testing", "Single product only"], correctAnswer: 1, explanation: "Test cart, checkout, and integration flows." },
  { question: "What is the purpose of B2B Commerce Connector?", options: ["To replace B2B Commerce", "To sync catalog and order data with Salesforce", "To send emails", "To create reports"], correctAnswer: 1, explanation: "Connector syncs catalog and order data." },
  { question: "Which sample app helps B2B Commerce Developers?", options: ["No sample", "B2B Commerce sample store and codebase", "Slack only", "Marketing Cloud only"], correctAnswer: 1, explanation: "Sample store provides reference implementation." },
  { question: "What is a price list in B2B Commerce?", options: ["A report", "A set of prices assigned to a buyer group or account for catalog products", "A workflow only", "An email template"], correctAnswer: 1, explanation: "Price lists define product pricing per buyer group or account." },
]

export default function B2BCommerceDeveloperAPPage() {
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
            
            <CertificationCard slug={slug} title={slugToDisplayName(slug)} code="AP" description="Accredited B2B Commerce For Developers Professionals have demonstrated skill and knowledge in configuring and customizing B2B Commerce in the context of sample apps and real world implementations." examDetails={{ questions: 60, passingScore: '~65%', duration: '90 min', cost: '$100' }} topics={['B2B Commerce', 'Development', 'Customization', 'Storefront', 'APIs', 'Best Practices']}
            examSections={examSections}
            h1Text={getCertH1Text(slug)}
          examWeightageHeading={getCertExamWeightageHeading(slug)}
          />

          <div id="exam-prep">
            <ExamPrepContent slug={slug} />
          </div>

          <div id="practice-questions" className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{getCertPracticeQuestionsHeading(slug)}</h2>
            <p className="text-gray-600 mb-8">{getPracticeQuestionsIntro(sampleQuestions.length)}</p>
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
