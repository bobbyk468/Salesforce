import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import { DeveloperCertRoadmap } from '@/components/CertRoadmapSvg'
import RoadmapWithDownload from '@/components/RoadmapWithDownload'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'

const pageTitle = `Salesforce Developer Cert Path (${RELEASE_CURRENT}): Which First?`
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription =
  `Salesforce developer cert path (${RELEASE_CURRENT}): right order for PD1, PD2, JavaScript Dev, and beyond. Start free practice now.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/developer-certification-path` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/developer-certification-path`,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: ogImageUrl, alt: pageTitle }],
  },
  keywords:
    `Salesforce developer certification path ${RELEASE_CURRENT}, how to become Salesforce developer, Salesforce developer career path, PD1 PD2 path, Salesforce JavaScript Developer cert order`,
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Salesforce Developer Certification Path', url: '/developer-certification-path' },
]

const faqItems = [
  {
    question: 'What is the Salesforce developer certification path?',
    answer: 'The developer path starts with Platform Developer I (PD1), optionally includes JavaScript Developer I, then advances to Platform Developer II (PD2), and finally Integration Architect for candidates pursuing the architect track.',
  },
  {
    question: 'What is the first Salesforce developer certification to get?',
    answer: 'Platform Developer I (PD1, exam code CRT-450) is the entry point for all Salesforce developer certifications. It validates Apex fundamentals, SOQL, DML, governor limits, and LWC basics.',
  },
  {
    question: 'How long does it take to become a certified Salesforce developer?',
    answer: 'PD1 takes 2–3 months of study. Progressing to PD2 typically requires 12–18 months of real Apex project experience after PD1. The full developer-to-architect path usually takes 3–5 years.',
  },
  {
    question: 'Is PD2 required for the Salesforce architect track?',
    answer: 'PD2 is strongly recommended and often expected for the architect track, though it is not always a hard prerequisite for every architect cert. The CTA panel review effectively requires it as part of a broader cert portfolio.',
  },
]

const pathSteps = [
  {
    step: 1,
    title: 'Salesforce Platform Developer I (PD1)',
    slug: 'developer-1',
    badge: 'Start Here',
    badgeColor: 'bg-emerald-100 text-emerald-800',
    fee: '$200',
    passingScore: '68%',
    prereq: 'None (ADM-201 recommended)',
    timeEstimate: '6–8 weeks',
    why: 'PD1 is the entry point for all Salesforce developer certifications. It validates Apex fundamentals, SOQL/DML, governor limits, trigger best practices, and LWC basics. Without PD1, you cannot sit PD2 and most senior developer roles list it as a requirement.',
    topics: ['Apex triggers and classes', 'SOQL and DML', 'Governor limits', 'LWC basics (@AuraEnabled)', '75% code coverage requirement'],
  },
  {
    step: 2,
    title: 'Salesforce JavaScript Developer I',
    slug: 'javascript-developer-i',
    badge: 'Optional',
    badgeColor: 'bg-purple-100 text-purple-800',
    fee: '$200',
    passingScore: '65%',
    prereq: 'None (takes well alongside PD1)',
    timeEstimate: '4–6 weeks',
    why: 'The JavaScript Developer I cert validates modern JS skills: ES6+, async patterns, testing with Jest, and debugging. It is most valuable if you are building LWC-heavy applications or targeting senior UI developer roles. Take this alongside or after PD1 — JavaScript knowledge reinforces LWC study.',
    topics: ['ES6+ features (const/let, arrow functions, destructuring)', 'Promises and async/await', 'DOM manipulation', 'Jest unit testing', 'Module patterns'],
  },
  {
    step: 3,
    title: 'Salesforce Platform Developer II (PD2)',
    slug: 'developer-2',
    badge: 'Requires PD1',
    badgeColor: 'bg-red-100 text-red-800',
    fee: '$200',
    passingScore: '65%',
    prereq: 'PD1 certification required',
    timeEstimate: '3–6 months real experience + 4 weeks study',
    why: 'PD2 is the most respected developer credential and a prerequisite for the architect track. It tests advanced Apex patterns, complex REST/SOAP integrations, performance optimisation, and enterprise design patterns (trigger frameworks, selector/domain/service layer). Most candidates need real project experience before this exam — not just study.',
    topics: ['Advanced Apex design patterns', 'REST and SOAP callouts', 'Platform Events and streaming', 'Named Credentials', 'HttpCalloutMock and WebServiceMock testing'],
  },
  {
    step: 4,
    title: 'Integration Architect',
    slug: 'integration-architect',
    badge: 'Advanced',
    badgeColor: 'bg-orange-100 text-orange-800',
    fee: '$400',
    passingScore: '63%',
    prereq: 'PD2 recommended (not required)',
    timeEstimate: '3–4 months',
    why: 'The Integration Architecture Designer credential signals senior integration expertise and is on the path toward the Certified Technical Architect (CTA). It covers integration patterns (point-to-point vs hub-and-spoke vs ESB), security protocols, performance considerations, and MuleSoft/middleware decisions. Most relevant for developers moving to technical lead or architect tracks.',
    topics: ['Integration patterns (synchronous vs asynchronous)', 'API design and security (OAuth, JWT)', 'Middleware and ESB decisions', 'Data migration architecture', 'Error handling and retry patterns'],
  },
]

export default function DeveloperCertificationPathPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/developer-certification-path" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />

      <header data-lcp-header className="mb-10">
        <p className="inline-flex items-center rounded-full bg-salesforce-blue/10 px-3 py-1 text-sm font-medium text-salesforce-blue mb-4">
          Developer Track · {RELEASE_CURRENT}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Salesforce Developer Certification Path ({RELEASE_CURRENT})
        </h1>
        <p className="text-lg text-gray-600">
          The Salesforce developer certification path runs from PD1 (entry-level) through PD2 (senior) to Integration
          Architecture Designer (architect track). This guide maps the right sequence based on your current
          experience and career goal.
        </p>
      </header>

      <ContentPageAuthor />

      <RoadmapWithDownload downloadFilename="salesforce-developer-cert-roadmap.png">
        <DeveloperCertRoadmap />
      </RoadmapWithDownload>

      {/* Quick guidance */}
      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Start Here: Which Cert Based on Your Experience</h2>
        <div className="space-y-2 text-sm text-gray-700">
          <div className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><span><strong>New to Salesforce development:</strong> Start with PD1. Build a basic Apex class and trigger first on a free Developer org — hands-on experience makes PD1 significantly easier.</span></div>
          <div className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><span><strong>Have PD1, building LWC apps:</strong> Take JavaScript Developer I alongside or just before PD2 prep. The JS cert reinforces modern front-end patterns.</span></div>
          <div className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><span><strong>Have PD1, targeting senior dev roles:</strong> Move to PD2 after 6–12 months of real Apex project experience. Do not rush PD2 — it requires applied design pattern knowledge, not just study.</span></div>
          <div className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><span><strong>Targeting architect track:</strong> PD1 + PD2 + Integration Architecture Designer is the standard developer-to-architect progression. Each cert also earns domain credit toward the CTA panel review.</span></div>
        </div>
      </section>

      {/* Path steps */}
      <div className="space-y-8 mb-10">
        {pathSteps.map((item) => (
          <section key={item.step} className="rounded-xl border border-gray-100 bg-white p-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-salesforce-blue text-white flex items-center justify-center text-sm font-bold">
                {item.step}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <h2 className="text-lg font-bold text-gray-900">
                    <Link href={`/certifications/${item.slug}`} className="hover:text-salesforce-blue transition-colors">
                      {item.title}
                    </Link>
                  </h2>
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${item.badgeColor}`}>
                    {item.badge}
                  </span>
                </div>
                <div className="flex flex-wrap gap-4 text-xs text-gray-600">
                  <span>Fee: <strong className="text-gray-700">{item.fee}</strong></span>
                  <span>Pass: <strong className="text-gray-700">{item.passingScore}</strong></span>
                  <span>Prereq: <strong className="text-gray-700">{item.prereq}</strong></span>
                  <span>Study time: <strong className="text-gray-700">{item.timeEstimate}</strong></span>
                </div>
              </div>
            </div>

            <p className="text-sm text-gray-700 mb-3">{item.why}</p>

            <div className="flex flex-wrap gap-2">
              {item.topics.map((topic) => (
                <span key={topic} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                  {topic}
                </span>
              ))}
            </div>

            <div className="mt-4">
              <Link
                href={`/certifications/${item.slug}`}
                className="inline-flex items-center gap-1 text-xs text-salesforce-blue font-medium hover:underline"
              >
                View study guide + practice questions
                <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </section>
        ))}
      </div>

      {/* Time to complete */}
      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">How Long Does the Full Developer Path Take?</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th scope="col" className="text-left py-2 pr-4 font-semibold text-gray-700">Goal</th>
                <th scope="col" className="text-left py-2 pr-4 font-semibold text-gray-700">Certs Needed</th>
                <th scope="col" className="text-left py-2 font-semibold text-gray-700">Realistic Timeline</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-gray-600">
              <tr>
                <td className="py-2 pr-4">Junior / mid-level developer role</td>
                <td className="py-2 pr-4">PD1</td>
                <td className="py-2">2–3 months with dedicated study</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">Senior Salesforce developer role</td>
                <td className="py-2 pr-4">PD1 + PD2</td>
                <td className="py-2">12–18 months (project experience required)</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">Technical lead / integration specialist</td>
                <td className="py-2 pr-4">PD1 + PD2 + Integration Arch</td>
                <td className="py-2">2–3 years total</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">Architect track (CTA preparation)</td>
                <td className="py-2 pr-4">PD1 + PD2 + Integration Arch + others</td>
                <td className="py-2">4–6 years (CTA requires broad cert portfolio)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-xl border border-salesforce-blue/20 bg-salesforce-blue/5 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Start the Developer Path</h2>
        <p className="text-sm text-gray-700 mb-4">
          Begin with PD1 practice questions and exam weightage, or browse the full developer certification hub:
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/pd1-study-guide"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-colors"
          >
            PD1 Study Guide
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/certifications/role/developer"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            Browse All Developer Certs
          </Link>
          <Link
            href="/pd1-vs-pd2"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            PD1 vs PD2 Comparison
          </Link>
          <Link
            href="/pd2-exam-tips-2026"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            PD2 Exam Tips
          </Link>
        </div>
      </section>
    </div>
  )
}
