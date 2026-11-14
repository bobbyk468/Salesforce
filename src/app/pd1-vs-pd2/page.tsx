import Link from '@/components/AppLink'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import type { Metadata } from 'next'
import { buildVsTitle } from '@/lib/seo-title-helpers'
import WhichFirstBlock from '@/components/WhichFirstBlock'
import RelatedComparisons from '@/components/RelatedComparisons'
import LastUpdated from '@/components/LastUpdated'



const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'

const pageTitle = buildVsTitle('developer-1', 'developer-2')
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription = `Compare Platform Developer I and II by difficulty, content, and career impact to choose the Salesforce credential for your goals.`
export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: {
    canonical: `${siteUrl}/pd1-vs-pd2`,
    languages: { 'en-US': `${siteUrl}/pd1-vs-pd2`, 'x-default': `${siteUrl}/pd1-vs-pd2` },
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/pd1-vs-pd2`,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: ogImageUrl, alt: pageTitle }],
  },
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Certification Comparison', url: '/certification-comparison' },
  { name: 'PD1 vs PD2', url: '/pd1-vs-pd2' },
]

const faqItems = [
  {
    question: 'Can you take PD2 without PD1?',
    answer: 'No. You must hold an active Platform Developer I (PD1) credential before you can register for Platform Developer II (PD2).',
  },
  {
    question: 'Which is harder, PD1 or PD2?',
    answer: 'PD2 is significantly harder. PD1 covers Apex fundamentals and governor limits, while PD2 covers advanced design patterns, complex REST and SOAP integrations, and performance optimization. Many candidates need 6–12 months of project experience after PD1.',
  },
  {
    question: 'How long after PD1 should you wait before taking PD2?',
    answer: 'Many candidates wait 12–18 months after PD1 to gain more project experience. Study alone may not be enough: PD2 expects you to apply trigger frameworks, selector/domain/service layers, and enterprise integration patterns.',
  },
  {
    question: 'Are PD1 and PD2 both needed for the architect track?',
    answer: 'PD1 and PD2 are both typically part of the path to Certified Technical Architect (CTA). PD2 is also recommended, though not always required, before Integration Architect and Application Architect.',
  },
]

export default function Pd1VsPd2Page() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/pd1-vs-pd2" breadcrumbItems={breadcrumbItems} faqItems={faqItems} aboutEntities={['/certifications/developer-1', '/certifications/developer-2']} />

      <header data-lcp-header className="mb-10">
        <p className="inline-flex items-center rounded-full bg-salesforce-blue/10 px-3 py-1 text-sm font-medium text-salesforce-dark mb-4">
          Certification Comparison · {RELEASE_CURRENT}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Salesforce PD1 vs PD2: Which Developer Certification Should You Take First?
        </h1>
        <LastUpdated />
        <p className="text-lg text-gray-600">
          Platform Developer I and II are sequential Salesforce developer credentials. PD1 is required for PD2,
          which expects stronger design, integration, and performance skills. Compare the exams and use the readiness signs below to plan your next step.
        </p>
      </header>

      <ContentPageAuthor />
      <WhichFirstBlock
        certA={{
          name: "Platform Developer I",
          certSlug: "developer-1",
          examTipsSlug: "certifications/developer-1",
          conditions: [
          "You have not earned PD1 yet",
          "You are developing your core Apex and LWC skills",
          "You have 0–2 years of Salesforce development experience",
          "You need the foundation for later developer credentials",
          ],
        }}
        certB={{
          name: "Platform Developer II",
          certSlug: "developer-2",
          examTipsSlug: "certifications/developer-2",
          conditions: [
          "You already hold Platform Developer I",
          "You use Apex patterns, asynchronous jobs, or performance tuning at work",
          "You are aiming for a senior developer or tech lead role",
          "You have 3+ years of Salesforce development experience",
          ],
        }}
        recommendation={{
          certName: "Platform Developer I",
          certSlug: "developer-1",
          examTipsSlug: "certifications/developer-1",
          reason: "PD1 is a formal prerequisite for PD2. After earning it, give yourself time to apply its concepts in projects before moving to advanced design patterns and integrations. Many developers spend 6–12 months between the exams.",
          careerPathSlug: "developer-certification-path",
          careerPathLabel: "Developer Certification Path",
        }}
      />

      {/* Side-by-side table */}
      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Side-by-Side Comparison</h2>
        <div className="overflow-x-auto">
          <table className="min-w-[500px] w-full text-sm text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th scope="col" className="py-2.5 pr-4 font-semibold text-gray-900 w-1/3">Factor</th>
                <th scope="col" className="py-2.5 pr-4 font-semibold text-salesforce-blue">PD1: Platform Developer I</th>
                <th scope="col" className="py-2.5 font-semibold text-purple-700">PD2: Platform Developer II</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 divide-y divide-gray-100">
              <tr>
                <td className="py-2.5 pr-4 font-medium">Exam Code</td>
                <td className="py-2.5 pr-4">PD1</td>
                <td className="py-2.5">PD2</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-medium">Questions / Time</td>
                <td className="py-2.5 pr-4">60 questions · 110 min</td>
                <td className="py-2.5">60 questions · 120 min</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-medium">Passing Score</td>
                <td className="py-2.5 pr-4">68%</td>
                <td className="py-2.5">65%</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-medium">Exam Fee</td>
                <td className="py-2.5 pr-4">$200 (retake $100)</td>
                <td className="py-2.5">$200 (retake $100)</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-medium">Prerequisites</td>
                <td className="py-2.5 pr-4">None (recommended: ADM-201)</td>
                <td className="py-2.5 font-medium text-red-600">PD1 certification required</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-medium">Primary Focus</td>
                <td className="py-2.5 pr-4">Apex basics, SOQL/DML, governor limits, triggers, LWC fundamentals, testing</td>
                <td className="py-2.5">Advanced Apex patterns, complex integrations (REST/SOAP), performance, MVC architecture, callouts</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-medium">Difficulty</td>
                <td className="py-2.5 pr-4">Moderate, heavy on memorisation of limits and testing rules</td>
                <td className="py-2.5">Harder, requires applied design pattern experience</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-medium">Exam Style</td>
                <td className="py-2.5 pr-4">Identify bugs, select correct Apex patterns, testing scenarios</td>
                <td className="py-2.5">Architecture and design decisions, complex multi-system integration scenarios</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-medium">Best For</td>
                <td className="py-2.5 pr-4">Developers starting on Salesforce, career switchers, admins adding code skills</td>
                <td className="py-2.5">Experienced Apex devs moving toward senior or architect tracks</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-medium">Avg Salary</td>
                <td className="py-2.5 pr-4">$90–125k (US)</td>
                <td className="py-2.5">$120–155k (US)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* What changes PD1 → PD2 */}
      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">What Gets Harder in PD2?</h2>
        <p className="text-sm text-gray-700 mb-4">
          PD1 checks your understanding of Apex and the Salesforce data model. PD2 asks you to apply that knowledge
          when designing solutions with more complex requirements. The main areas that require deeper practice are:
        </p>
        <ul className="space-y-2.5 text-sm text-gray-700">
          <li className="flex gap-2">
            <CheckCircle2 className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />
            <span><strong>Integration depth:</strong> PD2 covers REST and SOAP callouts, Named Credentials, Platform Events, and streaming API in greater depth than PD1.</span>
          </li>
          <li className="flex gap-2">
            <CheckCircle2 className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />
            <span><strong>Design patterns:</strong> Study trigger framework approaches, Selector/Domain/Service layer architecture (FFLib), and how to choose asynchronous methods at scale.</span>
          </li>
          <li className="flex gap-2">
            <CheckCircle2 className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />
            <span><strong>Performance:</strong> Practice query optimization, SOSL vs SOQL choices, efficient collections, and heap/CPU management in complex transactions.</span>
          </li>
          <li className="flex gap-2">
            <CheckCircle2 className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />
            <span><strong>Testing:</strong> PD2 expects broader test strategies, mocked callouts (HttpCalloutMock, WebServiceMock), isolated test data, and detailed assertions.</span>
          </li>
        </ul>
      </section>

      {/* Who should take PD2 and when */}
      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">When Are You Ready for PD2?</h2>
        <p className="text-sm text-gray-700 mb-3">
          Project experience helps prepare you for PD2's design and troubleshooting scenarios.
          Use these signs to check whether you are ready to move beyond PD1 fundamentals.
        </p>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" />You have built integrations using REST callouts, Platform Events, or external systems.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" />You can explain when to use trigger patterns, such as one trigger per object or a handler pattern.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" />You can mock HTTP callouts in tests and write meaningful assertions.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" />You consistently score 80%+ on PD1 practice exams and can apply the fundamentals without hesitation.</li>
        </ul>
      </section>

      {/* Career outcomes */}
      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Career Impact: PD1 vs PD1 + PD2</h2>
        <p className="text-sm text-gray-700 mb-3">
          PD1 can support applications for Salesforce developer roles. PD2 shows deeper development experience and may be preferred or required for some architect-track positions.
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="rounded-lg border border-salesforce-blue/20 bg-salesforce-blue/5 p-4">
            <p className="text-sm font-semibold text-salesforce-dark mb-2">With PD1</p>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>Salesforce Developer (junior–mid): $85–110k</li>
              <li>Admin + developer hybrid roles</li>
              <li>LWC and Flow-heavy development positions</li>
              <li>Most common Apex developer entry credential</li>
            </ul>
          </div>
          <div className="rounded-lg border border-purple-200 bg-purple-50/50 p-4">
            <p className="text-sm font-semibold text-purple-700 mb-2">With PD1 + PD2</p>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>Senior Salesforce Developer: $110–145k</li>
              <li>Technical Lead / Solution Architect path</li>
              <li>Integration Developer (REST/SOAP/MuleSoft) roles</li>
              <li>Required for CTA (Certified Technical Architect) track</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Decision Matrix */}
      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Decision Matrix: PD1 or PD2?</h2>
        <div className="overflow-x-auto">
          <table className="min-w-[500px] w-full text-sm text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th scope="col" className="py-2.5 pr-4 font-semibold text-gray-900">Your Situation</th>
                <th scope="col" className="py-2.5 font-semibold text-emerald-700">Choose This Cert</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 divide-y divide-gray-100">
              <tr>
                <td className="py-2.5 pr-4">You are new to Salesforce development or moving from administration</td>
                <td className="py-2.5 font-semibold text-salesforce-blue">PD1, start here</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4">You have 1–2 years of Apex experience and delivered projects</td>
                <td className="py-2.5 font-semibold text-purple-700">PD2; you are likely ready</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4">You are moving from Java, Python, or backend development to Salesforce</td>
                <td className="py-2.5 font-semibold text-salesforce-blue">PD1: Apex fundamentals first, then PD2 in 6–12 months</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4">You plan to pursue the CTA (Certified Technical Architect) track</td>
                <td className="py-2.5 font-semibold text-purple-700">PD1 + PD2 both required</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4">You want a senior developer or tech lead role</td>
                <td className="py-2.5 font-semibold text-purple-700">PD2, separates mid from senior on CVs</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4">You regularly score below 75% on PD1 practice exams</td>
                <td className="py-2.5 font-semibold text-salesforce-blue">PD1, strengthen PD1 fundamentals before attempting PD2</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-xl border border-salesforce-blue/20 bg-salesforce-blue/5 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Start With PD1 Practice</h2>
        <p className="text-sm text-gray-700 mb-4">
          Review free practice questions, exam weights, and governor limit references for both certifications.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/certifications/developer-1#practice-questions"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-colors"
          >
            PD1 Practice Questions
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/certifications/developer-2"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            PD2 Study Guide
          </Link>
          <Link
            href="/certifications/developer-1"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            PD1 Exam Tips {RELEASE_CURRENT}
          </Link>
          <Link
            href="/certifications/developer-2"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            PD2 Exam Tips {RELEASE_CURRENT}
          </Link>
          <Link
            href="/developer-certification-path"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            Full Developer Cert Path
          </Link>
        </div>
      </section>
      <RelatedComparisons
        links={[
          { slug: "app-builder-vs-developer-i", label: "App Builder vs Platform Developer I" },
          { slug: "javascript-developer-i-vs-pd1", label: "JavaScript Developer I vs PD1" },
          { slug: "mulesoft-developer-i-vs-ii", label: "MuleSoft Developer I vs II" },
        ]}
      />
    </div>
  )
}
