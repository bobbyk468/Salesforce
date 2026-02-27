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


          {/* Key Concepts */}
          <div id="key-concepts" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">B2B Commerce Admin AP: Key Concepts for the Exam</h2>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-1">Store Setup & Storefront Configuration</p>
                <p>B2B Commerce stores are built on Experience Cloud sites. The Commerce Setup Assistant guides the initial configuration of a store, including currency, tax, and locale settings. Storefronts use LWC (Lightning Web Components) for the buyer-facing UI. Store Context defines which products, pricebooks, and catalogs are available to buyers. Buyer Groups link accounts to specific catalogs and price books. Guest Browse allows unauthenticated users to view products but not purchase. The AP exam tests how to configure a store for a specific business model — know which settings live in the store vs. the Experience Cloud site.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Product Catalog & Pricing</p>
                <p>Entitlement Policies define which products a buyer group can see and purchase. Price Books in B2B Commerce work similarly to standard Salesforce Price Books — assign products with list and negotiated prices. Price Adjustments apply tier-based or account-specific discounts. Product media (images, documents) is managed through CMS (Content Management System) connected to the store. Product variations (color, size) use Variation Parents and Child Products. Category hierarchies organize products for navigation. The exam focuses on catalog entitlements, pricing logic order of operations, and how to configure account-specific pricing without custom development.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Buyer Account & Contact Management</p>
                <p>Buyer accounts in B2B Commerce are standard Salesforce Accounts with a Buyer Account record associating them to the store. Buyer users are Experience Cloud community users. Buyer Group membership determines catalog and price access. Delegated admin users in the buyer organization can manage their own users. Checkout configuration controls which buyer roles can place orders and set shipping addresses. The exam tests the relationship between Accounts, Contacts, Buyer Accounts, and Buyer Groups — understand how adding a new buyer contact and granting access flows through these objects.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Order Management & Checkout</p>
                <p>The B2B Commerce checkout flow is configurable — admins can add, remove, or reorder checkout steps. Cart-to-Order conversion creates a Salesforce Order record. Order Delivery Groups define shipping destinations and methods. Tax integration (Avalara or custom) calculates tax during checkout. Payment Gateway integration handles credit card and purchase order payments. Order History is surfaced back to the buyer in the storefront. The exam tests checkout configuration steps, how to enable purchase order payments, and how the cart-to-order process maps to standard Salesforce order objects.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Integration with Salesforce CRM</p>
                <p>B2B Commerce is natively integrated with Salesforce CRM — buyer accounts map to Account records, orders become Order records, and product data uses the standard Product2 and PricebookEntry objects. Reorder functionality uses order history stored in Salesforce. External data (ERP inventory, pricing) is integrated via OCI (Order Management) or custom APIs. The Commerce Storefront uses Connect REST APIs for all front-end data operations. The exam tests the data flow between the storefront, Experience Cloud, and core CRM — know which objects store what and how standard Salesforce security applies to buyer data.</p>
              </div>
            </div>
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
              { id: 'key-concepts', title: 'Key Concepts' },
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
