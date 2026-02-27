import FullQuestionBankCta from '@/components/FullQuestionBankCta'
import CertificationCard from '@/components/CertificationCard'
import CertIntroParagraph from '@/components/CertIntroParagraph'
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

const slug = 'b2c-solution-architect'
export async function generateMetadata() {
  return getCertMetadata(slug)
}

const sampleQuestions = [
  { question: "What does a B2C Solution Architect do?", options: ["Only coding", "Architect and drive multi-cloud solutions that deliver business value for the customer (B2C focus)", "Only reporting", "Only Slack"], correctAnswer: 1, explanation: "Certified B2C Solution Architects have knowledge, skills, and experience architecting and driving multi-cloud solutions that deliver business value for the customer." },
  { question: "What does B2C stand for?", options: ["Back to Customer", "Business to Consumer", "Build to Order", "Brand to Consumer"], correctAnswer: 1, explanation: "B2C stands for Business to Consumer." },
  { question: "Which Salesforce products are often part of B2C solutions?", options: ["Only Marketing Cloud", "B2C Commerce, Marketing Cloud, Service Cloud, and more", "Only Service Cloud", "Only Slack"], correctAnswer: 1, explanation: "B2C solutions often include B2C Commerce, Marketing Cloud, Service Cloud, and more." },
  { question: "What does 'drive multi-cloud solutions' mean?", options: ["Only one product", "Leading and architecting solutions across multiple Salesforce products", "Only Heroku", "Only MuleSoft"], correctAnswer: 1, explanation: "It means leading and architecting solutions across multiple Salesforce products." },
  { question: "Which role typically pursues B2C Solution Architect?", options: ["Marketers", "Architects and senior consultants designing B2C solutions", "Sales only", "Designers only"], correctAnswer: 1, explanation: "Architects and senior consultants designing B2C solutions pursue this credential." },
  { question: "What does B2C Commerce storefront provide?", options: ["B2B only", "Consumer-facing storefront for e-commerce", "Service portal only", "Partner portal only"], correctAnswer: 1, explanation: "B2C Commerce provides consumer-facing e-commerce storefronts." },
  { question: "Which integration connects B2C Commerce to Marketing Cloud?", options: ["No integration", "Einstein Personalization, Email, and CDP", "Slack only", "Service Cloud only"], correctAnswer: 1, explanation: "B2C integrates with Marketing Cloud for personalization and email." },
  { question: "What does headless commerce enable for B2C?", options: ["Only full-stack", "API-driven storefront with flexible front-end (e.g., PWA)", "Only monolith", "Only backend"], correctAnswer: 1, explanation: "Headless commerce separates front-end from commerce APIs." },
  { question: "Which B2C Commerce feature supports product recommendations?", options: ["Manual only", "Einstein Personalization and rules-based recommendations", "No recommendations", "Static only"], correctAnswer: 1, explanation: "Einstein and rules support product recommendations." },
  { question: "What is the purpose of B2C Commerce order management integration?", options: ["Only capture", "Fulfillment, inventory, and order status sync", "Only display", "Only email"], correctAnswer: 1, explanation: "Order management integration handles fulfillment and sync." },
  { question: "Which consideration applies to B2C multi-cloud architecture?", options: ["Single product only", "Customer data flow, identity, and experience consistency", "Ignore identity", "No consistency"], correctAnswer: 1, explanation: "Multi-cloud requires data flow, identity, and experience consistency." },
  { question: "What does B2C Solution Architect drive?", options: ["Only development", "End-to-end B2C solution design across Commerce, Marketing, Service", "Only UI", "Only reports"], correctAnswer: 1, explanation: "Architects drive end-to-end B2C solution design." },
  { question: "Which B2C Commerce deployment model supports scalability?", options: ["Single instance only", "Cloud-hosted with auto-scaling", "On-prem only", "No scaling"], correctAnswer: 1, explanation: "B2C Commerce cloud supports auto-scaling." },
  { question: "What is the role of Service Cloud in B2C solutions?", options: ["No role", "Customer service, case management, and order support", "Marketing only", "Commerce only"], correctAnswer: 1, explanation: "Service Cloud supports post-purchase service and support." },
  { question: "Which best practice applies to B2C solution design?", options: ["Ignore performance", "Customer journey alignment, performance, and mobile-first", "Desktop only", "No mobile"], correctAnswer: 1, explanation: "Design for customer journey, performance, and mobile." },
]

export default function B2CSolutionArchitectPage() {
  const examSections = getExamWeightage(slug)
  return (
    <div data-critical-content className="max-w-7xl mx-auto px-4 py-12">
      <CertPageSeo slug={slug} certTitle={slugToDisplayName(slug)} />
        <CertIntroParagraph slug={slug} />
        {/* Prominent CTA above fold */}
        <CertPageCta slug={slug} certTitle={slugToDisplayName(slug)} />
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-3">
            {/* Exam Fees & Registration section */}
            <ExamFeesSection slug={slug} />
            
            <CertificationCard slug={slug} title={slugToDisplayName(slug)} code="B2C Solution Architect" description="Certified B2C Solution Architects have knowledge, skills, and experience architecting and driving multi-cloud solutions that deliver business value for the customer." examDetails={{ questions: 60, passingScore: '~68%', duration: '120 min', cost: '$400' }} topics={['B2C Commerce', 'Multi-Cloud', 'Solution Design', 'Marketing Cloud', 'Best Practices']}
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
