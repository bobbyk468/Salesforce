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

const slug = 'b2c-commerce-developer'
export async function generateMetadata() {
  return getCertMetadata(slug)
}

const sampleQuestions = [
  {
    question: "What does SFRA stand for in B2C Commerce?",
    options: ["Salesforce Retail Application", "Storefront Reference Architecture", "Secure File Resource Access", "Script Framework Runtime API"],
    correctAnswer: 1,
    explanation: "Storefront Reference Architecture (SFRA) is the standard reference implementation for B2C Commerce storefronts.",
  },
  {
    question: "Which API is used for headless or custom front-end integrations with B2C Commerce?",
    options: ["REST only", "OCAPI (Open Commerce API) / SCAPI", "SOAP only", "Apex"],
    correctAnswer: 1,
    explanation: "OCAPI/SCAPI (Shop API) is used for headless and custom integrations with B2C Commerce.",
  },
  {
    question: "What is a cartridge in B2C Commerce?",
    options: ["A physical product", "A modular unit of code that extends storefront functionality", "A payment method", "A shipping box"],
    correctAnswer: 1,
    explanation: "Cartridges contain scripts, templates, and assets that extend or customize the storefront.",
  },
  {
    question: "Which scripting language is primarily used in B2C Commerce storefront development?",
    options: ["Apex", "JavaScript (Node.js and ISML)", "Python", "Ruby"],
    correctAnswer: 1,
    explanation: "B2C Commerce uses JavaScript (Node.js) and ISML (template language) for storefront logic and rendering.",
  },
  {
    question: "What is the purpose of the Business Manager in B2C Commerce?",
    options: ["To write code", "To manage catalogs, campaigns, and storefront settings", "To deploy to Heroku", "To configure Sales Cloud"],
    correctAnswer: 1,
    explanation: "Business Manager is the admin console for managing B2C Commerce sites, catalogs, and operations.",
  },
  {
    question: "What is a pipeline in B2C Commerce?",
    options: [
      "A database",
      "A server-side script that processes a request through sequential steps",
      "An email",
      "A report"
    ],
    correctAnswer: 1,
    explanation: "Pipelines process requests through sequential script steps."
  },
  {
    question: "Which B2C Commerce template language renders HTML?",
    options: [
      "AMPscript",
      "ISML (Internet Store Markup Language)",
      "Visualforce",
      "LWC"
    ],
    correctAnswer: 1,
    explanation: "ISML is the template language for B2C Commerce storefronts."
  },
  {
    question: "What does OCAPI support?",
    options: [
      "Only reads",
      "Headless commerce, custom storefronts, and mobile apps",
      "Only writes",
      "Only admin"
    ],
    correctAnswer: 1,
    explanation: "OCAPI enables headless and custom storefront development."
  },
  {
    question: "Which B2C Commerce object represents a product?",
    options: [
      "Account",
      "Product and Product Variant",
      "Opportunity",
      "Lead"
    ],
    correctAnswer: 1,
    explanation: "Product and Product Variant represent catalog items."
  },
  {
    question: "What is the purpose of a custom cartridge?",
    options: [
      "To replace SFRA",
      "To extend or override storefront functionality",
      "To create reports only",
      "To send emails only"
    ],
    correctAnswer: 1,
    explanation: "Custom cartridges extend or override storefront behavior."
  },
  {
    question: "Which B2C Commerce feature supports A/B testing?",
    options: [
      "No support",
      "Business Manager experiments and activities",
      "Code only",
      "Manual only"
    ],
    correctAnswer: 1,
    explanation: "Business Manager supports experiments for A/B testing."
  },
  {
    question: "What does the Script Debugger support?",
    options: [
      "Only logs",
      "Breakpoints, step-through, and variable inspection",
      "Only deployment",
      "Only builds"
    ],
    correctAnswer: 1,
    explanation: "Script Debugger supports breakpoints and variable inspection."
  },
  {
    question: "Which deployment method is used for B2C Commerce code?",
    options: [
      "Change Sets only",
      "Code deployment via Business Manager or CI/CD",
      "Data Loader only",
      "Workbench only"
    ],
    correctAnswer: 1,
    explanation: "Code deploys via Business Manager or CI/CD pipelines."
  },
  {
    question: "What is the purpose of the hook mechanism in B2C Commerce?",
    options: [
      "To replace pipelines",
      "To extend or override pipeline behavior without modifying base code",
      "To delete only",
      "To create only"
    ],
    correctAnswer: 1,
    explanation: "Hooks allow extension without modifying base cartridges."
  },
  {
    question: "Which best practice applies to B2C Commerce performance?",
    options: [
      "Ignore caching",
      "Use caching, optimize ISML, and minimize API calls",
      "No caching",
      "No optimization"
    ],
    correctAnswer: 1,
    explanation: "Caching and optimization support storefront performance."
  },
]

export default function B2CCommerceDeveloperPage() {
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
            
            <CertificationCard
              slug={slug}
            title={slugToDisplayName(slug)}
            code="B2C Commerce Developer"
            description="Certified B2C Commerce Cloud Developers have experience as full-stack developers for Salesforce B2C Commerce Digital."
            examDetails={{ questions: 60, passingScore: '~65%', duration: '105 min', cost: '$200' }}
            topics={['SFRA', 'Cartridges', 'OCAPI/SCAPI', 'Business Manager', 'Scripting', 'Pipelines', 'Data Model', 'Performance', 'Security', 'Deployment']}
            examSections={examSections}
            h1Text={getCertH1Text(slug)}
          examWeightageHeading={getCertExamWeightageHeading(slug)}
          />

          <div id="exam-prep">
            <ExamPrepContent slug={slug} />
          </div>


          {/* Key Concepts */}
          <div id="key-concepts" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">B2C Commerce Developer: Key Concepts for the Exam</h2>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-1">SFRA Architecture: Cartridges & Override Pattern</p>
                <p>SFRA is the Salesforce B2C Commerce reference architecture built on a cartridge system. Cartridges are modular packages containing controllers, templates, models, and static assets. The cartridge path (configured in Business Manager) defines override priority — the leftmost cartridge wins. To customize, create a custom cartridge that overrides specific controllers or templates without editing base cartridges. This keeps base cartridge upgrades non-destructive. The `server.extend` and `server.replace` patterns in controllers allow adding before/after steps or completely replacing a route. The developer exam tests the correct use of the override pattern and common mistakes that break cartridge path resolution.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Controllers, Scripts & Server-Side Logic</p>
                <p>SFRA controllers are JavaScript modules using the `server` framework. Routes handle GET and POST requests and render templates or return JSON. Middleware functions (authentication, CSRF, consent) can be prepended to any route. Models and helpers contain business logic separated from controllers. `dw.system`, `dw.order`, `dw.catalog` — the Digital SDK — provides access to Commerce Cloud server-side APIs. Custom scripts (`.js` files in `cartridge/scripts/`) encapsulate reusable logic. The exam tests how to add a middleware step to an existing controller route, how to call a custom script from a controller, and common governor limit considerations in server-side scripts.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Templates (ISML) & Client-Side Assets</p>
                <p>ISML (Internet Store Markup Language) is the server-side templating language. `&lt;isinclude&gt;` embeds sub-templates. `&lt;isloop&gt;` iterates collections. `&lt;isset&gt;` assigns variables. `&lt;isif&gt;` handles conditionals. Resource bundles (properties files) provide localized strings. Static assets (JS, CSS, images) are organized in `cartridge/static/` and referenced via `URLUtils.staticURL()`. Webpack compiles and bundles client-side JS in SFRA. SASS is compiled to CSS. Client-side JavaScript uses jQuery and Bootstrap in SFRA. The exam tests ISML syntax, how to pass data from controller to template via `pdict`, and how to add a new client-side component.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Jobs, Feeds & Business Manager Configuration</p>
                <p>Commerce Cloud Jobs run server-side scripts on a schedule or on-demand. Jobs process product feeds (import/export), order exports, and inventory updates. The Job Framework uses steps configured in Business Manager. IMPEX (Import/Export) handles large data loads via XML or CSV files placed in the IMPEX directory. Site Preferences store admin-configurable settings accessible in code via `dw.system.Site.current.preferences`. Custom Attributes extend standard objects (products, orders, customers) in Business Manager. The exam tests Job configuration, IMPEX file formats, and how to read custom site preferences in controller logic.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Testing, Debugging & Deployment</p>
                <p>Commerce Cloud development uses the `sgmf-scripts` (SFRA build tools) and Salesforce Commerce Cloud CLI (`sfcc-ci`) for deployment. Code deployment uploads cartridges to a code version, which is then activated. The Request Log and Custom Log APIs (`dw.system.Logger`) support debugging. The Pipeline Profiler identifies slow controller routes. Functional tests use `mochawesome` reports. Unit testing is done with jest and `dw-api-types` mocks for Digital SDK. The exam tests the deployment sequence (cartridge upload → code version activation), how to write a testable controller with mocked dependencies, and how to diagnose errors using Business Manager logs.</p>
              </div>
            </div>
          </div>

          {/* How to Pass Scenario Strategy */}
          <div id="scenario-tips" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Pass the Salesforce B2C Commerce Developer Exam</h2>
            <p className="text-sm text-gray-600 mb-5">
              The B2C Commerce Developer exam tests hands-on SFCC development: ISML templates, controller development (SFRA), and script development. Focus on the SFRA architecture and how to implement common storefront customizations.
            </p>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-1">SFRA Architecture</p>
                <p>Know the Storefront Reference Architecture (SFRA) MVC pattern: Routes (controllers), Models (data layer), Templates (ISML views), and how cartridges layer on top of SFRA using the cartridge path.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Controller Development</p>
                <p>Know how to create custom routes (server.get/post/append/prepend/replace), use middleware for authentication/CSRF protection, and how to return JSON responses or render ISML templates from controllers.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">ISML Templates</p>
                <p>Know ISML syntax: &lt;isset&gt;, &lt;isif&gt;, &lt;isloop&gt;, &lt;isinclude&gt;, &lt;isreplace&gt;, and how to use locale, currency, and content asset tags. Understand how template caching affects dynamic content rendering.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Script Development</p>
                <p>Know how to write CommonJS-style scripts in SFCC, use the dw.* API (dw.catalog, dw.order, dw.customer), and how to call web services from scripts using the dw.net.HTTPClient.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Business Manager Configuration</p>
                <p>Know key Business Manager configurations: catalog setup, pricebook management, promotion configuration, storefront configuration (site preferences), and how to use the UX Studio for cartridge management.</p>
              </div>
            </div>
          </div>

          <div id="practice-questions" className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{getCertPracticeQuestionsHeading(slug)}</h2>
            <p className="text-gray-600 mb-8">{getPracticeQuestionsIntro(sampleQuestions.length)}</p>
            {sampleQuestions.map((q, index) => (
              <QuestionCard key={index} questionNumber={index + 1} question={q.question} options={q.options} correctAnswer={q.correctAnswer} explanation={q.explanation} />
            ))}
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
