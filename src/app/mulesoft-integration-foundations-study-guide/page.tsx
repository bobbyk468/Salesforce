import type { Metadata } from 'next'
import Link from 'next/link'
import { getWebPageJsonLd, getBreadcrumbListJsonLd, getArticleJsonLd, getFaqPageJsonLd } from '@/lib/schema-data'
import RelatedGuides from '@/components/RelatedGuides'
import { getRelatedGuides } from '@/lib/related-guides-data'
import { RELEASE_CURRENT } from '@/lib/release-data'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const pageTitle = `MuleSoft Integration Foundations Study Guide (${RELEASE_CURRENT})`
const pageDescription = `MuleSoft Integration Foundations study guide: API-led connectivity, Anypoint Platform. $75, 40 questions, 70% pass Free practice questions.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/mulesoft-integration-foundations-study-guide` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/mulesoft-integration-foundations-study-guide`,
    images: [{ url: `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`, alt: pageTitle }],
  },
  keywords: `mulesoft integration foundations study guide, MCIA associate certification 2026, anypoint platform exam prep, API-led connectivity certification`,
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'MuleSoft Integration Foundations Study Guide', url: '/mulesoft-integration-foundations-study-guide' },
]

const examSections = [
  { name: 'API-Led Connectivity Concepts', weight: 30, note: 'The API-led connectivity approach: System APIs (access underlying data sources), Process APIs (orchestrate business logic), Experience APIs (deliver data to specific channels). Understanding why API-led is preferred over point-to-point integration. Benefits: reusability, composability, discoverability. How a real enterprise integration scenario maps to the three API layers.' },
  { name: 'Anypoint Platform Overview', weight: 30, note: 'Anypoint Platform components: Design Center (API design with RAML/OAS), Exchange (API and integration asset repository), Runtime Manager (deploy and monitor), API Manager (API gateway, policies), Anypoint Studio (IDE for Mule app development). CloudHub vs on-premise Mule Runtime vs hybrid deployment. MuleSoft Government Cloud and regional deployment options.' },
  { name: 'Integration Patterns & Concepts', weight: 25, note: 'Common integration patterns: point-to-point, hub-and-spoke, ESB, microservices. Synchronous vs asynchronous integration trade-offs. REST vs SOAP basics: when to use each. Message formats: JSON, XML, CSV — and when each is used in integration scenarios. Error handling concepts: retry, circuit breaker, dead-letter queue. Event-driven architecture basics.' },
  { name: 'MuleSoft Fundamentals', weight: 15, note: 'Mule 4 application basics: flows, sub-flows, event sources (listeners), event processors (transforms, filters, connectors). Anypoint Connectors: purpose and types (community, MuleSoft, certified). DataWeave language: purpose and basic syntax (no coding required for this exam, but conceptual understanding). Deployment lifecycle: develop → test → deploy → monitor.' },
]

const faqItems = [
  {
    question: 'What is the MuleSoft Integration Foundations certification?',
    answer: 'The MuleSoft Integration Foundations certification (MCIA Associate) is an entry-level conceptual certification that validates understanding of API-led connectivity principles, the Anypoint Platform, and integration concepts — without requiring hands-on Anypoint Studio experience. The exam has 40 questions, 70-minute time limit, 70% passing score, and a $75 fee. It is the starting point of the MuleSoft certification path.',
  },
  {
    question: 'Do I need Anypoint Studio experience for Integration Foundations?',
    answer: 'No — Integration Foundations is a conceptual exam. It does not test hands-on Anypoint Studio skills, DataWeave coding, or Mule 4 flow configuration. It tests understanding of integration principles, API-led connectivity layers, and the purpose of Anypoint Platform components. This makes it accessible to business analysts, architects, and Salesforce professionals who work alongside MuleSoft teams but are not developers.',
  },
  {
    question: 'What is the difference between Integration Foundations and MuleSoft Developer I?',
    answer: 'Integration Foundations ($75, 40 questions) is conceptual — no coding required. MuleSoft Developer I ($200, 60 questions) is hands-on — it tests building real Mule 4 flows in Anypoint Studio, writing DataWeave transformations, configuring connectors, and deploying to CloudHub. Integration Foundations is significantly easier and serves as an introduction. Developers should target Developer I for job market value.',
  },
  {
    question: 'What are the three layers of API-led connectivity?',
    answer: 'System APIs access underlying data sources (databases, ERP systems, Salesforce) and abstract their complexity behind a standard API. Process APIs implement business logic by orchestrating System APIs — combining data from multiple sources to perform a business operation. Experience APIs deliver data in the format and channel required by specific consumers (mobile apps, web portals, external partners). Each layer is independently reusable and composable.',
  },
  {
    question: 'How long should I study for MuleSoft Integration Foundations?',
    answer: 'Plan for 3–4 weeks with 8–10 hours per week. Integration Foundations is the most accessible MuleSoft certification. Complete the MuleSoft Fundamentals Trailhead trail, review the Anypoint Platform overview documentation, and practise with sample questions. The 70% passing score is higher than most Salesforce exams, but the conceptual nature of the questions makes it achievable without hands-on experience.',
  },
]

export default function MulesoftIntegrationFoundationsStudyGuidePage() {
  const webPageJsonLd = getWebPageJsonLd({ name: pageTitle, description: pageDescription, path: '/mulesoft-integration-foundations-study-guide', breadcrumbItems })
  const breadcrumbJsonLd = getBreadcrumbListJsonLd(breadcrumbItems)
  const articleJsonLd = getArticleJsonLd({ headline: pageTitle, description: pageDescription, path: '/mulesoft-integration-foundations-study-guide' })
  const faqJsonLd = getFaqPageJsonLd(faqItems)

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <div data-lcp-header className="mb-10">
        <div className="inline-flex items-center gap-2 bg-salesforce-blue/10 text-salesforce-blue text-sm font-semibold px-3 py-1 rounded-full mb-4">
          <span>Study Guide</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          MuleSoft Integration Foundations Study Guide ({RELEASE_CURRENT})
        </h1>
        <p className="text-lg text-gray-600">
          Your complete guide to passing the MuleSoft Integration Foundations exam — API-led connectivity, Anypoint Platform components, and integration concepts. No coding required.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
        {[
          { label: 'Questions', value: '40' },
          { label: 'Time Limit', value: '70 min' },
          { label: 'Passing Score', value: '70%' },
          { label: 'Exam Fee', value: '$75' },
        ].map((stat) => (
          <div key={stat.label} className="bg-white rounded-xl border border-gray-100 p-4 text-center shadow-sm">
            <div className="text-2xl font-bold text-salesforce-blue">{stat.value}</div>
            <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-8">
        <p className="text-sm text-green-800"><strong>Entry-level certification:</strong> No Anypoint Studio experience required. Integration Foundations tests conceptual understanding only — it is accessible to business analysts, architects, and Salesforce professionals who work with MuleSoft teams.</p>
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
                <span className="flex-shrink-0 mt-0.5 inline-flex items-center justify-center w-7 h-7 rounded-full bg-salesforce-blue/10 text-salesforce-blue text-xs font-bold">{section.weight}%</span>
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
        <h2 className="text-xl font-bold text-gray-900 mb-4">4-Week Study Plan</h2>
        <div className="space-y-3 text-sm">
          {[
            { week: 'Week 1', focus: 'API-led connectivity — understand the three-layer model (System, Process, Experience APIs) deeply. Draw diagrams mapping a real business scenario (e.g., order processing) to the three layers.' },
            { week: 'Week 2', focus: 'Anypoint Platform components — learn the purpose of Design Center, Exchange, Runtime Manager, API Manager, and Anypoint Studio. Understand CloudHub vs on-premise deployment and when to use each.' },
            { week: 'Week 3', focus: 'Integration patterns and concepts — study point-to-point vs hub-and-spoke vs ESB vs API-led. Review REST vs SOAP trade-offs. Understand async vs sync integration and when each applies.' },
            { week: 'Week 4', focus: 'Mule 4 fundamentals + mock exams. Review flow, sub-flow, event source, event processor concepts. The 70% passing score requires solid coverage of all 4 sections. Aim for 80%+ on practice questions before booking.' },
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
          <li className="flex gap-2"><span className="text-salesforce-blue font-bold flex-shrink-0">1.</span><span><strong>Map every scenario to an API layer:</strong> If a question describes accessing a backend SAP system, that&apos;s a System API. If it describes combining data from multiple System APIs for a business process, that&apos;s a Process API. If it describes delivering data to a mobile app, that&apos;s an Experience API.</span></li>
          <li className="flex gap-2"><span className="text-salesforce-blue font-bold flex-shrink-0">2.</span><span><strong>Anypoint Exchange is the API marketplace:</strong> When a question asks where developers discover and share reusable APIs and connectors within an organisation, the answer is Anypoint Exchange — not Design Center (which is for designing) or Runtime Manager (which is for deployment).</span></li>
          <li className="flex gap-2"><span className="text-salesforce-blue font-bold flex-shrink-0">3.</span><span><strong>API Manager enforces policies:</strong> Rate limiting, client ID enforcement, OAuth token validation, and logging policies are applied through API Manager — it acts as the API gateway layer. Runtime Manager is for deployment and monitoring of Mule applications.</span></li>
          <li className="flex gap-2"><span className="text-salesforce-blue font-bold flex-shrink-0">4.</span><span><strong>70% is required — do not underestimate:</strong> The higher passing score means you need stronger preparation than for typical Salesforce 65% exams. Aim for 80%+ on practice tests before scheduling.</span></li>
        </ul>
      </div>

      <div className="bg-salesforce-blue/5 rounded-xl border border-salesforce-blue/20 p-5 mb-8">
        <h2 className="text-lg font-bold text-gray-900 mb-2">Mock Exam Benchmark</h2>
        <p className="text-sm text-gray-700">Aim for <strong>80%+ on practice exams</strong> before scheduling — the 70% passing score leaves less margin than most Salesforce exams. The exam is entirely conceptual; if you can explain all three API-led layers and the purpose of each Anypoint Platform component without looking them up, you are ready.</p>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Top 10 Concepts to Review</h2>
        <ol className="space-y-2 text-sm text-gray-700 list-decimal list-inside">
          <li>Three API-led connectivity layers: System, Process, Experience — definition and examples of each</li>
          <li>API-led benefits: reusability, composability, discoverability, agility</li>
          <li>Anypoint Platform: Design Center, Exchange, Runtime Manager, API Manager, Studio</li>
          <li>CloudHub vs on-premise Mule Runtime vs hybrid deployment — trade-offs</li>
          <li>REST vs SOAP: key differences, when to use each</li>
          <li>Sync vs async integration: use cases for each pattern</li>
          <li>Integration patterns: point-to-point, hub-and-spoke, ESB, API-led — trade-offs</li>
          <li>Mule 4 flow: event source → event processors → output (conceptual level)</li>
          <li>Anypoint Connectors: purpose, connector types (community, MuleSoft, certified)</li>
          <li>DataWeave: purpose (data transformation language) — no coding required for this exam</li>
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

      <RelatedGuides links={getRelatedGuides('mulesoft-integration-foundations-study-guide')} />

      <div className="bg-salesforce-blue rounded-xl p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-2">Ready to Practice?</h2>
        <p className="text-blue-100 mb-6">Free MuleSoft Integration Foundations practice questions covering all 4 exam sections.</p>
        <Link
          href="/certifications/mulesoft-integration-foundations"
          className="inline-flex items-center px-6 py-3 bg-white text-salesforce-blue rounded-lg font-semibold hover:bg-blue-50 transition-colors"
        >
          Start Free Practice Questions
        </Link>
      </div>
    </div>
  )
}
