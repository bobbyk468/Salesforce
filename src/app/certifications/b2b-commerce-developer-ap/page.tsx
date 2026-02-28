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
import { Metadata } from 'next'
import { getExamWeightage } from '@/lib/exam-weightage-data'

import dynamic from 'next/dynamic'
const PracticeQuestionsSection = dynamic(
  () => import('@/components/PracticeQuestionsSection'),
  {
    ssr: false,
    loading: () => (
      <div id="practice-questions" className="mt-12 min-h-[440px] w-full" aria-hidden="true" />
    ),
  }
)

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
        <CertIntroParagraph slug={slug} />
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


          {/* Key Concepts */}
          <div id="key-concepts" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">B2B Commerce Developer AP: Key Concepts for the Exam</h2>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-1">LWC Commerce Components & Override Pattern</p>
                <p>B2B Commerce storefronts use Lightning Web Components. The Component Override pattern allows developers to replace default checkout or product detail components with custom implementations — registered in the Community Builder component map. Custom LWCs use the `@salesforce/commerce` scoped modules to access cart, product, and checkout data. The `NavigationMixin` handles in-store navigation. Wire adapters for commerce provide reactive data binding to store context. The AP exam tests how to implement component overrides, wire data into custom components, and handle error states without breaking the checkout flow.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Commerce APIs & Storefront REST APIs</p>
                <p>The Commerce Connect API (Connect in Apex) provides programmatic access to storefront operations. REST APIs power all storefront interactions — search, product detail, cart, checkout, and order history. The Product Search API supports faceted search with category and attribute filters. Custom price calculators can be implemented via the Commerce Extension framework. The B2C and B2B APIs share similar patterns but differ in auth context (buyer session vs. guest). The exam tests which API to use for a given scenario, how to authenticate as a buyer, and how to extend standard behavior using the extension framework.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Checkout Integrations & Tax/Payment</p>
                <p>Custom checkout integrations implement the `CartExtension` or `CheckoutExtension` Apex interfaces. Tax calculation extensions receive a cart and return line-item tax amounts. Shipping calculation extensions provide shipping options and costs. Payment integrations use the Payment Gateway framework — implement `commercepayments.PaymentGatewayAdapter`. Test classes for commerce extensions must mock the cart and checkout context. The exam tests how to implement and register each extension type, how to handle exceptions gracefully, and how to write unit tests for commerce Apex extensions.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Search Configuration & Merchandising</p>
                <p>B2B Commerce search uses the Salesforce Search Index — products are indexed when published. Search configuration allows field boosts, synonym groups, and exclusion rules. Facets are configured from product attributes and category fields. Sorting options are configurable. Merchandising Rules let admins pin, boost, or bury specific products in search results. CMS-managed banners can appear in search result pages. The developer exam tests how to configure search tuning, how to add custom product attributes to the search index, and how to implement custom search result handling in LWC.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Testing, Deployment & Performance</p>
                <p>B2B Commerce deployments use standard Salesforce metadata tooling — Salesforce CLI, change sets, or CI/CD pipelines. Commerce metadata types include StoreIntegratedService, CommerceSettings, and custom LWC components. Integration tests for commerce extensions use Apex test utilities to simulate cart operations. Page performance is governed by LWC best practices: avoid unnecessary re-renders, use lazy loading for images, minimize wire adapter calls. CDN configuration for Experience Cloud handles static asset caching. The exam tests the correct deployment sequence for a store update and how to diagnose checkout performance issues.</p>
              </div>
            </div>
          </div>

          {/* How to Pass Scenario Strategy */}
          <div id="scenario-tips" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Pass the Salesforce B2B Commerce Developer Accredited Professional Exam</h2>
            <p className="text-sm text-gray-600 mb-5">
              The B2B Commerce Developer AP exam tests custom development for B2B Commerce stores. Focus on the B2B Commerce extensibility framework, LWC development, and integration patterns.
            </p>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-1">B2B Commerce Extensibility Framework</p>
                <p>Know the key extension points: Custom LWC components in the storefront, Cart Extension Apex classes for custom cart logic, Integration APIs for external catalog and pricing, and checkout step overrides.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Storefront LWC Development</p>
                <p>Know how to create custom LWC components for the B2B storefront: using the ConnectApi in JavaScript, styling with the B2B CSS framework, and deploying components to the Experience Cloud site.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Apex Extension Points</p>
                <p>Know how to implement CartExtension.CartCalculate for custom pricing/promotions, CartExtension.CartOrchestrator for cart validation, and how to register extensions in the Cart Lifecycle class.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">External Catalog Integration</p>
                <p>Know how to integrate an external PIM or catalog system: using the Integration APIs to sync product data, configuring data feeds, and how real-time pricing calls from external systems work.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Order Fulfillment Integration</p>
                <p>Know how to integrate B2B Commerce orders with external ERP systems: order creation events, custom order processing logic, and how to implement order status updates from external systems.</p>
              </div>
            </div>
          </div>

          <PracticeQuestionsSection
            heading={getCertPracticeQuestionsHeading(slug)}
            introText={getPracticeQuestionsIntro(sampleQuestions.length)}
            questions={sampleQuestions}
          />

          
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
              { id: 'scenario-tips', title: 'How to Pass' },
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
