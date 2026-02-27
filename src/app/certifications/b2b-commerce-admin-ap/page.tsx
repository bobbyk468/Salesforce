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

const slug = 'b2b-commerce-admin-ap'
export async function generateMetadata() {
  return getCertMetadata(slug)
}

const sampleQuestions = [
  { question: "What does B2B Commerce for Administrators AP validate?", options: ["Only development", "Broad knowledge of B2B Commerce and platform capabilities to troubleshoot and solve basic platform issues", "Only marketing", "Only Slack"], correctAnswer: 1, explanation: "Accredited B2B Commerce For Administrators Professionals have developed broad knowledge of the B2B Commerce discipline and platform capabilities." },
  { question: "Which Salesforce product does B2B Commerce refer to?", options: ["Marketing Cloud", "B2B Commerce (formerly CloudCraze) for B2B digital storefronts", "Service Cloud", "Slack"], correctAnswer: 1, explanation: "B2B Commerce is Salesforce's B2B digital commerce product." },
  { question: "What is a key responsibility of a B2B Commerce Administrator?", options: ["Only coding", "Configuring and troubleshooting B2B Commerce and platform", "Only reporting", "Only email"], correctAnswer: 1, explanation: "They configure and troubleshoot B2B Commerce and platform issues." },
  { question: "Which role typically pursues B2B Commerce Admin AP?", options: ["Marketers", "Partners and implementers working with B2B Commerce", "Sales only", "Designers only"], correctAnswer: 1, explanation: "Partners and implementers working with B2B Commerce pursue this credential." },
  { question: "What does B2B stand for?", options: ["Back to Back", "Business to Business", "Build to Order", "Brand to Brand"], correctAnswer: 1, explanation: "B2B stands for Business to Business." },
  { question: "What does B2B Commerce catalog management involve?", options: ["Email only", "Products, categories, and pricing for B2B buyers", "Slack only", "Service Cloud only"], correctAnswer: 1, explanation: "Catalog management covers products, categories, and pricing." },
  { question: "Which B2B Commerce feature supports buyer-specific pricing?", options: ["List price only", "Customer-specific prices and contract pricing", "Standard only", "No pricing"], correctAnswer: 1, explanation: "B2B Commerce supports customer-specific pricing." },
  { question: "What does B2B Commerce Administrator configure?", options: ["Only Apex", "Storefront settings, catalog, and buyer groups", "Only reports", "Only dashboards"], correctAnswer: 1, explanation: "Administrators configure storefront, catalog, and buyer groups." },
  { question: "Which platform does B2B Commerce run on?", options: ["Heroku only", "Experience Cloud (formerly Community Cloud)", "Marketing Cloud only", "Slack only"], correctAnswer: 1, explanation: "B2B Commerce runs on Experience Cloud." },
  { question: "What is a buyer group in B2B Commerce?", options: ["A report", "A group of buyers with shared catalog and pricing", "A lead", "A campaign"], correctAnswer: 1, explanation: "Buyer groups define shared catalog and pricing." },
  { question: "Which integration connects B2B Commerce to Salesforce?", options: ["Manual only", "Native integration with CRM, CPQ, and Order Management", "Email only", "Slack only"], correctAnswer: 1, explanation: "B2B Commerce integrates natively with CRM and CPQ." },
  { question: "What does checkout configuration include?", options: ["Only payment", "Payment, shipping, tax, and approval workflows", "Only shipping", "Only tax"], correctAnswer: 1, explanation: "Checkout includes payment, shipping, tax, and approvals." },
  { question: "Which troubleshooting skill does B2B Commerce Admin need?", options: ["Only coding", "Catalog, pricing, and order flow debugging", "Only reports", "Only email"], correctAnswer: 1, explanation: "Admins need catalog, pricing, and order flow debugging skills." },
  { question: "What is the purpose of B2B Commerce administration?", options: ["Only development", "Configuring and maintaining B2B storefront and buyer experience", "Only marketing", "Only service"], correctAnswer: 1, explanation: "Administration configures and maintains the B2B storefront." },
  { question: "Which best practice applies to B2B Commerce Admin?", options: ["Ignore platform", "Understand platform capabilities and catalog best practices", "No catalog", "Single product only"], correctAnswer: 1, explanation: "Understand platform and catalog best practices." },
]

export default function B2BCommerceAdminAPPage() {
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
            
            <CertificationCard slug={slug} title={slugToDisplayName(slug)} code="AP" description="Accredited B2B Commerce For Administrators Professionals have developed broad knowledge of the B2B Commerce discipline and knowledge of the Salesforce platform capabilities in order to troubleshoot and solve basic platform issues." examDetails={{ questions: 60, passingScore: '~65%', duration: '90 min', cost: '$100' }} topics={['B2B Commerce', 'Administration', 'Platform', 'Troubleshooting', 'Best Practices']}
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
