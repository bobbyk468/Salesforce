import type { Metadata } from 'next'
import Link from 'next/link'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import DifficultyHeatmap from '@/components/DifficultyHeatmap'
import { buildStudyGuideTitle } from '@/lib/seo-title-helpers'


const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const slug = 'b2c-commerce-developer'
const pageTitle = buildStudyGuideTitle(slug)
const pageDescription = `Salesforce B2C Commerce Developer (SFCC) study guide (${RELEASE_CURRENT}): SFRA, cartridges, ISML, OCAPI, Business Manager. $200 fee, 60 questions, ~65% passing score.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/b2c-commerce-developer-study-guide` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/b2c-commerce-developer-study-guide`,
    images: [{ url: `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`, alt: pageTitle }],
  },
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'B2C Commerce Developer Study Guide', url: '/b2c-commerce-developer-study-guide' },
]

const examSections = [
  { name: 'SFRA Architecture & Cartridges', weight: 30, note: 'Storefront Reference Architecture (SFRA): MVC pattern in SFCC, cartridge types (storefront, plugin, link), cartridge path order and inheritance. Creating a custom cartridge, extending SFRA controller and template. Cartridge path priority: how SFCC resolves which cartridge\'s files to use when multiple cartridges override the same file. Base storefront cartridge (app_storefront_base).' },
  { name: 'ISML Templates & Controllers', weight: 22, note: 'ISML (Internet Store Markup Language): template syntax, ISML tags (<isif>, <isloop>, <isinclude>, <ismodule>, <isset>), accessing server-side variables. Controllers: server.get/post/append/prepend for route handling, middleware chain, res.render, req.querystring, pdict. Script includes. Job scheduling and script execution. Logging and debugging in Business Manager.' },
  { name: 'Commerce API & Business Manager', weight: 20, note: 'OCAPI (Open Commerce API): Data API and Shop API endpoints, authentication (client credentials, JWT), rate limits. SCAPI (Salesforce Commerce API): newer REST API replacing OCAPI for headless commerce. Business Manager: site configuration, catalog management, pricing (pricebooks), promotions, shipping methods, payment methods. Content slots and content assets.' },
  { name: 'Performance & Debugging', weight: 15, note: 'Performance best practices: minimising server-side script execution time, caching strategies (page-level, object-level), CDN configuration. Request pipeline analysis. Business Manager logs: error log, custom log, report log. Sandbox Performance Monitor. Code profiling. Common performance anti-patterns: N+1 queries, excessive custom script in templates.' },
  { name: 'Integration & Order Management', weight: 13, note: 'Order Management: order lifecycle (New → Open → Failed → Cancelled → Completed), order export and import. Payment integration: payment gateway configuration, credit card tokenisation, PayPal integration pattern. Tax integration: internal vs external tax calculation. SFCC Job framework: job steps, job types, custom job steps in Script modules. ERP integration patterns for order fulfilment.' },
]

const faqItems = [
  {
    question: 'What is the Salesforce B2C Commerce Developer certification?',
    answer: 'The B2C Commerce Developer (formerly Demandware Developer) certification validates skills in developing and customising Salesforce B2C Commerce Cloud (SFCC) storefronts — including SFRA architecture, cartridge development, ISML templates, controllers, Business Manager configuration, and OCAPI integrations. The exam has 60 questions, 90-minute time limit, ~65% passing score, and a $200 fee.',
  },
  {
    question: 'What is SFRA in Salesforce Commerce Cloud?',
    answer: 'SFRA (Storefront Reference Architecture) is the modern recommended storefront framework for Salesforce B2C Commerce Cloud. It follows an MVC pattern: controllers handle routes and business logic, ISML templates handle presentation, and models represent data. SFRA replaced the older SiteGenesis architecture. Customisations are made by creating custom cartridges that override or extend SFRA\'s base cartridge (app_storefront_base), preserving upgrade compatibility.',
  },
  {
    question: 'What is a cartridge in B2C Commerce?',
    answer: 'A cartridge is a deployable module in Salesforce B2C Commerce that contains controllers, templates, models, scripts, and static assets. Cartridges are stacked in a cartridge path — when a file is requested, SFCC searches cartridges in path order and uses the first match found. This enables customisation: a custom cartridge placed first in the path overrides SFRA\'s base cartridge files without modifying the originals, making future upgrades easier.',
  },
  {
    question: 'What is OCAPI in B2C Commerce?',
    answer: 'OCAPI (Open Commerce API) is the REST API layer for Salesforce B2C Commerce. It has two main API groups: Shop API (for storefront operations: product browsing, cart, checkout, order creation) and Data API (for Business Manager operations: catalog management, pricing, order management). OCAPI is used for headless commerce implementations and third-party integrations. Salesforce is transitioning to SCAPI (Salesforce Commerce API) as the modern replacement for OCAPI.',
  },
  {
    question: 'What background is needed for B2C Commerce Developer?',
    answer: 'B2C Commerce Developer requires JavaScript development experience (Node.js-style server-side scripting, though SFCC uses its own Rhino-based JavaScript engine). Familiarity with MVC patterns, template languages, and REST APIs is essential. Candidates typically have 1–3 years of B2C Commerce development experience. The exam is not accessible to Salesforce admins without prior commerce development experience.',
  },
]

export default function B2cCommerceDeveloperStudyGuidePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/b2c-commerce-developer-study-guide" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />

      <div data-lcp-header className="mb-10">
        <div className="inline-flex items-center gap-2 bg-salesforce-blue/10 text-salesforce-dark text-sm font-semibold px-3 py-1 rounded-full mb-4">
          <span>Study Guide</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          Salesforce B2C Commerce Developer Study Guide ({RELEASE_CURRENT})
        </h1>
        <p className="text-lg text-gray-600">
          Your complete guide to passing the B2C Commerce Developer exam — SFRA architecture, cartridge development, ISML templates, OCAPI, Business Manager, and order management.
        </p>
      </div>

      <ContentPageAuthor />

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
        {[
          { label: 'Questions', value: '60' },
          { label: 'Time Limit', value: '90 min' },
          { label: 'Passing Score', value: '~65%' },
          { label: 'Exam Fee', value: '$200' },
        ].map((stat) => (
          <div key={stat.label} className="bg-white rounded-xl border border-gray-100 p-4 text-center shadow-sm">
            <div className="text-2xl font-bold text-salesforce-blue">{stat.value}</div>
            <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Exam Sections &amp; Weightings</h2>
        <div className="space-y-4">
          {examSections.map((section) => (
            <div key={section.name}>
              <div className="flex justify-between text-sm mb-1">
                <span className="font-medium text-gray-800">{section.name}</span>
                <span className="text-salesforce-blue font-semibold">{section.weight}%</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div className="bg-salesforce-blue h-2 rounded-full" style={{ width: `${section.weight * 3.3}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">What Each Section Tests</h2>
        <div className="space-y-4">
          {examSections.map((section) => (
            <div key={section.name} className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 mt-0.5 inline-flex items-center justify-center w-7 h-7 rounded-full bg-salesforce-blue/10 text-salesforce-dark text-xs font-bold">{section.weight}%</span>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{section.name}</h3>
                  <p className="text-sm text-gray-600">{section.note}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">8-Week Study Plan</h2>
        <div className="space-y-3 text-sm">
          {[
            { week: 'Week 1', focus: 'SFCC environment — set up a Business Manager sandbox, navigate the admin interface, configure a site. Explore the SFRA repository on GitHub and understand the folder structure.' },
            { week: 'Week 2', focus: 'Cartridge architecture — create a custom cartridge, add it to the cartridge path, override an SFRA template. Understand cartridge inheritance by modifying a product detail page template.' },
            { week: 'Week 3', focus: 'ISML templates — practise all ISML tags: <isif>, <isloop>, <isset>, <isinclude>, <isprint>. Build a custom template component that renders dynamic product data from a controller.' },
            { week: 'Week 4', focus: 'Controllers — create custom routes using server.get and server.post. Work with req, res, and pdict. Implement a middleware function. Test controller output in a browser.' },
            { week: 'Week 5', focus: 'Business Manager configuration — set up a product catalog, configure pricing (pricebooks), create a promotion, set up shipping methods and payment methods.' },
            { week: 'Week 6', focus: 'OCAPI — make REST calls to the Shop API (browse products, add to cart) and Data API (export orders). Configure OCAPI settings in Business Manager. Understand authentication.' },
            { week: 'Week 7', focus: 'Order management and integrations — trace the order lifecycle in Business Manager. Set up a job for order export. Review payment integration patterns and tax calculation options.' },
            { week: 'Week 8', focus: 'Full mock exams. SFRA Architecture (30%) and ISML/Controllers (22%) = 52% of the exam. Master cartridge path resolution and controller middleware chain. Aim for 75%+ before booking.' },
          ].map((item) => (
            <div key={item.week} className="flex gap-3">
              <span className="flex-shrink-0 font-semibold text-salesforce-blue w-16">{item.week}</span>
              <span className="text-gray-700">{item.focus}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Scenario Strategy Tips</h2>
        <ul className="space-y-3 text-sm text-gray-700">
          <li className="flex gap-2"><span className="text-salesforce-blue font-bold flex-shrink-0">1.</span><span><strong>Cartridge path order is critical:</strong> The first cartridge in the path wins when multiple cartridges have the same file. Custom cartridges should be placed before SFRA&apos;s base cartridge (app_storefront_base) in the path. Any question about overriding default behaviour should mention adding a custom cartridge at the front of the path.</span></li>
          <li className="flex gap-2"><span className="text-salesforce-blue font-bold flex-shrink-0">2.</span><span><strong>server.append vs server.prepend:</strong> Use server.append to add middleware after the default route handler (e.g., add data to an existing response). Use server.prepend to add middleware before (e.g., authentication check). Use server.replace to completely override the route. Know which to use for a given customisation requirement.</span></li>
          <li className="flex gap-2"><span className="text-salesforce-blue font-bold flex-shrink-0">3.</span><span><strong>OCAPI Data API for backend, Shop API for storefront:</strong> The Data API handles merchant operations (catalog, orders, pricing management) and requires Business Manager OAuth. The Shop API handles shopper operations (browse, cart, checkout) and can use anonymous or JWT-authenticated sessions.</span></li>
          <li className="flex gap-2"><span className="text-salesforce-blue font-bold flex-shrink-0">4.</span><span><strong>Jobs for batch operations:</strong> Any scenario involving scheduled or batch processing (order export, inventory import, price updates) should use the SFCC Job framework — not ad-hoc API calls. Jobs run in Business Manager and can execute script modules on a schedule.</span></li>
        </ul>
      </div>

      <div className="bg-salesforce-blue/5 rounded-xl border border-salesforce-blue/20 p-5 mb-8">
        <h2 className="text-lg font-bold text-gray-900 mb-2">Mock Exam Benchmark</h2>
        <p className="text-sm text-gray-700">Aim for <strong>75%+ on practice exams</strong> before scheduling. B2C Commerce Developer is very hands-on — most questions describe a specific development scenario (override a template, extend a controller, configure OCAPI) and test exact implementation knowledge. There is no substitute for hands-on SFRA development experience.</p>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Top 10 Concepts to Review</h2>
        <ol className="space-y-2 text-sm text-gray-700 list-decimal list-inside">
          <li>SFRA cartridge hierarchy: cartridge path, inheritance, base cartridge (app_storefront_base)</li>
          <li>Creating a custom cartridge and adding it to the cartridge path</li>
          <li>ISML syntax: isif, isloop, isset, isinclude, isprint — and when to use each</li>
          <li>Controllers: server.get, server.post, server.append, server.prepend, server.replace</li>
          <li>Middleware chain: how middleware functions execute, next() pattern</li>
          <li>pdict: what it is, how controllers pass data to templates</li>
          <li>OCAPI: Shop API vs Data API, authentication methods, rate limits</li>
          <li>Business Manager: catalog, pricebooks, promotions, content slots</li>
          <li>Job framework: job steps, scheduling, custom Script job steps</li>
          <li>Order lifecycle: New → Open → Failed → Cancelled → Completed — what triggers each transition</li>
        </ol>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
        <dl className="space-y-4">
          {faqItems.map((item) => (
            <div key={item.question} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
              <dt className="font-semibold text-gray-900 mb-1">{item.question}</dt>
              <dd className="text-sm text-gray-700">{item.answer}</dd>
            </div>
          ))}
        </dl>
      </div>

            <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">What Comes After This Certification?</h2>
        <p className="text-sm text-gray-700">
          After this certification, consider: <Link href="/certifications/developer-2" className="text-salesforce-blue font-medium hover:underline">Platform Developer II</Link>, <Link href="/certifications/app-builder" className="text-salesforce-blue font-medium hover:underline">Platform App Builder</Link>, or <Link href="/certifications/javascript-developer-i" className="text-salesforce-blue font-medium hover:underline">JavaScript Developer I</Link>.
        </p>
      </section>

      <DifficultyHeatmap slug="b2c-commerce-developer" />
      <div className="bg-salesforce-blue rounded-xl p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-2">Ready to Practice?</h2>
        <p className="text-white mb-6">Free B2C Commerce Developer practice questions covering all 5 exam sections.</p>
        <Link
          href="/certifications/b2c-commerce-developer"
          className="inline-flex items-center px-6 py-3 bg-white text-salesforce-blue rounded-lg font-semibold hover:bg-blue-50 transition-colors"
        >
          Start Free Practice Questions
        </Link>
      </div>
    </div>
  )
}