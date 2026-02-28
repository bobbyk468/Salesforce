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

const slug = 'b2c-commerce-architect'
export async function generateMetadata() {
  return getCertMetadata(slug)
}

const sampleQuestions = [
  { question: "What does a B2C Commerce Architect do?", options: ["Only coding", "Design global sites that support multiple brands and channels using standard design patterns", "Only reporting", "Only Slack"], correctAnswer: 1, explanation: "Certified B2C Commerce Architects are skilled in designing global sites that support multiple brands and channels using standard design patterns." },
  { question: "What does B2C stand for?", options: ["Back to Customer", "Business to Consumer", "Build to Order", "Brand to Consumer"], correctAnswer: 1, explanation: "B2C stands for Business to Consumer." },
  { question: "Which Salesforce product does B2C Commerce Architect focus on?", options: ["Marketing Cloud", "B2C Commerce (formerly Demandware) for B2C storefronts", "Service Cloud", "Slack"], correctAnswer: 1, explanation: "B2C Commerce Architect focuses on B2C Commerce for B2C storefronts." },
  { question: "What is a key consideration for global B2C sites?", options: ["Only language", "Multiple brands, channels, and locales", "Only currency", "Only shipping"], correctAnswer: 1, explanation: "Multiple brands, channels, and locales are key considerations." },
  { question: "Which role typically pursues B2C Commerce Architect?", options: ["Marketers", "Architects and senior consultants designing B2C commerce solutions", "Sales only", "Designers only"], correctAnswer: 1, explanation: "Architects and senior consultants designing B2C commerce solutions pursue this credential." },
  { question: "What does multi-brand B2C architecture support?", options: ["Single brand only", "Multiple brands with shared or separate catalogs and experiences", "B2B only", "No branding"], correctAnswer: 1, explanation: "Multi-brand supports multiple brands with shared or separate catalogs." },
  { question: "Which B2C Commerce design pattern supports scalability?", options: ["Monolith only", "SFRA, cartridge architecture, and headless", "Static only", "No patterns"], correctAnswer: 1, explanation: "SFRA, cartridges, and headless support scalability." },
  { question: "What does locale support in B2C Commerce include?", options: ["Language only", "Language, currency, and regional preferences", "Currency only", "No locale"], correctAnswer: 1, explanation: "Locale includes language, currency, and regional preferences." },
  { question: "Which B2C Commerce channel can be designed?", options: ["Web only", "Web, mobile, and omnichannel", "Mobile only", "No channels"], correctAnswer: 1, explanation: "B2C Commerce supports web, mobile, and omnichannel." },
  { question: "What is the purpose of B2C Commerce architecture?", options: ["Only coding", "Global, scalable, and maintainable B2C experiences", "Only reports", "Only dashboards"], correctAnswer: 1, explanation: "Architecture supports global, scalable B2C experiences." },
  { question: "Which integration does B2C Commerce Architect consider?", options: ["Slack only", "Order Management, Marketing Cloud, and payment", "Marketing Cloud only", "Service Cloud only"], correctAnswer: 1, explanation: "Architects consider Order Management and Marketing Cloud integration." },
  { question: "What does standard design patterns mean for B2C?", options: ["Proprietary only", "Proven patterns for catalog, cart, and checkout", "No patterns", "Ad-hoc only"], correctAnswer: 1, explanation: "Standard patterns cover catalog, cart, and checkout." },
  { question: "Which best practice applies to B2C Commerce architecture?", options: ["Ignore performance", "Performance, SEO, and mobile-first design", "Desktop only", "No SEO"], correctAnswer: 1, explanation: "Performance, SEO, and mobile-first support B2C." },
  { question: "What does global site design encompass?", options: ["Single locale only", "Multi-locale, multi-currency, and regional fulfillment", "Single currency only", "No fulfillment"], correctAnswer: 1, explanation: "Global design encompasses multi-locale and fulfillment." },
  { question: "Which B2C Commerce capability supports headless?", options: ["Full-stack only", "OCAPI/SCAPI for headless storefronts", "No headless", "Slack only"], correctAnswer: 1, explanation: "OCAPI/SCAPI enables headless B2C Commerce." },
]

export default function B2CCommerceArchitectPage() {
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
            
            <CertificationCard slug={slug} title={slugToDisplayName(slug)} code="B2C Architect" description="Certified B2C Commerce Architects are skilled in designing global sites that support multiple brands and channels using standard design patterns." examDetails={{ questions: 60, passingScore: '~68%', duration: '120 min', cost: '$400' }} topics={['B2C Commerce', 'Global Sites', 'Multi-Brand', 'Channels', 'Design Patterns', 'Best Practices']}
            examSections={examSections}
            h1Text={getCertH1Text(slug)}
          examWeightageHeading={getCertExamWeightageHeading(slug)}
          />

          <div id="exam-prep">
            <ExamPrepContent slug={slug} />
          </div>


          {/* Key Concepts */}
          <div id="key-concepts" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">B2C Commerce Architect: Key Concepts for the Exam</h2>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-1">Architecture Patterns & Scalability</p>
                <p>B2C Commerce (Salesforce Commerce Cloud) uses a multi-tenant SaaS architecture for high-volume retail. The SFRA (Storefront Reference Architecture) is the recommended development baseline — it provides a cartridge-based override pattern, MVC structure, and responsive templates. Architects must design for Black Friday-level traffic: CDN caching strategy, page cache TTLs, and product recommendation service integration. Instance types (PIG for production, SIG/ATIG for non-prod) differ in capacity and SLA. The exam tests architecture decisions for scalability, caching hierarchy (browser → CDN → application), and when to use headless vs. SFRA approaches.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Storefront Architecture & Headless Commerce</p>
                <p>SFRA cartridges implement the Controller → Template → Model pattern. Custom cartridges extend base cartridges via the cartridge path (left-to-right override). Headless architecture decouples the front-end from Commerce Cloud, using the OCAPI (Open Commerce API) or SCAPI (Salesforce Commerce API) for data. PWA Kit provides a React-based headless starter with Managed Runtime hosting. The architect must decide between SFRA (monolithic, faster to stand up) and headless (more flexibility, higher development cost). The exam tests the trade-offs between these approaches and how the cartridge override pattern enables maintainable customization.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Integration Architecture: OCAPI, SCAPI & Connectors</p>
                <p>OCAPI (Open Commerce API) is the REST API for Shop (storefront), Data (admin), and Meta endpoints — used by SFRA and third-party integrations. SCAPI (Salesforce Commerce API) is the newer, more secure API replacing OCAPI for front-end use. Connectors integrate Commerce Cloud with Service Cloud, Marketing Cloud, and Order Management. The Salesforce Connector for Order Management syncs orders to Salesforce OMS. Einstein Recommendations API surfaces personalized product recommendations. B2C Connect (now Commerce to Service Cloud Connector) links shopper profiles to Service Cloud cases. The exam tests the correct API for each use case and the security model (PKCE flow for SCAPI).</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Performance, Caching & CDN Strategy</p>
                <p>B2C Commerce uses a CDN (Akamai) for global delivery. Page cache rules define what can be cached, for how long, and with what cache key variations (country, currency, login state). Dynamic content (personalized recommendations, cart) bypasses the page cache. Pipeline profiler and Log Center are key tools for identifying performance bottlenecks. SFRA uses server-side rendering — minimize business logic in templates. Einstein Recommendations and A/B testing (content experiments) add external dependencies that affect page load time. The exam tests cache hierarchy decisions, how to diagnose slow pages using profiler data, and CDN configuration best practices.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Security, Compliance & Site Operations</p>
                <p>B2C Commerce security includes PCI DSS compliance for payment flows — use a certified payment integration (Stripe, Adyen, CyberSource) and never log card data. SLAs, disaster recovery, and business continuity are Salesforce-managed at the platform level but architects must design for graceful degradation when external services (tax, recommendations) are unavailable. Site Genesis and SFRA include CSRF tokens, input validation, and secure cookies. GDPR compliance requires cookie consent management and data deletion capabilities. The exam tests the architect&apos;s responsibility boundary: what Salesforce manages vs. what the customer and SI partner must configure and maintain.</p>
              </div>
            </div>
          </div>

          {/* How to Pass Scenario Strategy */}
          <div id="scenario-tips" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Pass the Salesforce B2C Commerce Architect Exam</h2>
            <p className="text-sm text-gray-600 mb-5">
              The B2C Commerce (SFCC) Architect exam tests enterprise-scale Salesforce Commerce Cloud architecture. Focus on multi-site design, performance optimization, integration patterns, and the cartridge development model.
            </p>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-1">SFCC Architecture &amp; Multi-Site</p>
                <p>Know how SFCC organizes deployments: Business Manager, Organizations, Sites, and how to share catalogs and price books across sites. Understand the multi-site configuration for different brands, regions, and locales.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Cartridge Architecture</p>
                <p>Know the cartridge layering model: base cartridges (Commerce Cloud Storefront Reference Architecture — SFRA), site cartridges, and custom cartridges. Understand cartridge path override and module resolution.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Performance Optimization</p>
                <p>Know SFCC performance levers: page caching (full-page, partial), lazy loading for product tiles, CDN configuration for static assets, and how to use the Business Manager performance reports.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Integration Patterns</p>
                <p>Know SFCC integration approaches: REST/SOAP web services from cartridges, Job Frameworks for batch data exchange, and how SFCC integrates with Salesforce CRM via Marketing Cloud Connector and Order Management.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Security Architecture</p>
                <p>Know SFCC security: PCI compliance requirements, tokenization for payment data, account locking policies, and how to configure access control lists (ACLs) for Business Manager roles.</p>
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
