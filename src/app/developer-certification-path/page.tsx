import type { Metadata } from 'next'
import Link from '@/components/AppLink'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import { DeveloperCertRoadmap } from '@/components/CertRoadmapSvg'
import RoadmapWithDownload from '@/components/RoadmapWithDownload'
import LastUpdated from '@/components/LastUpdated'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'

const pageTitle = `Salesforce Developer Cert Path (${RELEASE_CURRENT}): Which First?`
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription =
  `Salesforce developer cert path (${RELEASE_CURRENT}): right order for PD1, PD2, JavaScript Dev, and beyond. Start free practice now.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: {
    canonical: `${siteUrl}/developer-certification-path`,
    languages: { 'en-US': `${siteUrl}/developer-certification-path`, 'x-default': `${siteUrl}/developer-certification-path` },
  },
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
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Certifications', url: '/certifications' },
  { name: 'Developer Certification Path', url: '/developer-certification-path' },
]

const faqItems = [
  {
    question: 'What is the Salesforce developer certification path?',
    answer: 'Start with Platform Developer I (PD1). You can also take JavaScript Developer I, then move on to Platform Developer II (PD2). If you want to pursue architecture, consider Integration Architect next.',
  },
  {
    question: 'What is the first Salesforce developer certification to get?',
    answer: 'Platform Developer I (PD1, exam code CRT-450) is the starting point for Salesforce developer certifications. It covers Apex fundamentals, SOQL, DML, governor limits, and basic LWC skills.',
  },
  {
    question: 'How long does it take to become a certified Salesforce developer?',
    answer: 'Plan for 2–3 months of study for PD1. Moving on to PD2 typically requires 12–18 months of real Apex project experience after PD1. The full path from developer to architect usually takes 3–5 years.',
  },
  {
    question: 'Is PD2 required for the Salesforce architect track?',
    answer: 'PD2 is strongly recommended and often expected for the architect track, though it is not a formal prerequisite for every architect certification. The CTA panel review effectively expects it as part of a broader certification portfolio.',
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
    why: 'PD1 is the starting point for Salesforce developer certifications. It covers Apex fundamentals, SOQL and DML, governor limits, trigger best practices, and basic LWC skills. You need PD1 before taking PD2, and many senior developer roles require it.',
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
    why: 'JavaScript Developer I covers modern JavaScript skills, including ES6+, asynchronous patterns, Jest testing, and debugging. It may be useful if you build LWC-heavy apps or want a senior UI developer role. Take it alongside or after PD1; JavaScript knowledge supports LWC study.',
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
    why: 'PD2 is a respected developer credential and a prerequisite for the architect track. It covers advanced Apex patterns, REST and SOAP integrations, performance, and enterprise design patterns such as trigger frameworks and selector, domain, and service layers. Most candidates need project experience as well as study before this exam.',
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
    why: 'Integration Architect demonstrates advanced integration skills and is part of the path toward Certified Technical Architect (CTA). It covers integration patterns, security protocols, performance, and MuleSoft and middleware decisions. It may suit developers moving into technical lead or architect roles.',
    topics: ['Integration patterns (synchronous vs asynchronous)', 'API design and security (OAuth, JWT)', 'Middleware and ESB decisions', 'Data migration architecture', 'Error handling and retry patterns'],
  },
]

export default function DeveloperCertificationPathPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/developer-certification-path" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />

      <header data-lcp-header className="mb-10">
        <p className="inline-flex items-center rounded-full bg-salesforce-blue/10 px-3 py-1 text-sm font-medium text-salesforce-dark mb-4">
          Developer Track · {RELEASE_CURRENT}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Salesforce Developer Certification Path ({RELEASE_CURRENT})
        </h1>
        <LastUpdated />
        <p className="text-lg text-gray-600">
          The Salesforce developer path starts with PD1, advances to PD2, and can lead to Integration Architect. This guide suggests a sequence based on your experience and career goal.
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
          <div className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><span><strong>New to Salesforce development:</strong> Start with PD1. Practice building a basic Apex class and trigger in a free Developer org to gain hands-on experience.</span></div>
          <div className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><span><strong>Have PD1 and build LWC apps:</strong> Consider JavaScript Developer I alongside or before PD2 study. It covers modern front-end patterns.</span></div>
          <div className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><span><strong>Have PD1 and want a senior developer role:</strong> Consider PD2 after 6–12 months of real Apex project experience. The exam tests applied design patterns as well as technical knowledge.</span></div>
          <div className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><span><strong>Want to pursue architecture:</strong> PD1, PD2, and Integration Architect form a common developer-to-architect path. Each certification also earns domain credit toward the CTA panel review.</span></div>
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
                className="inline-flex items-center gap-1 py-1 text-xs text-salesforce-blue font-medium hover:underline"
              >
                View study guide and practice questions
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
          Start with PD1 practice questions and exam weightings, or explore the full Developer certification hub:
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/certifications/developer-1"
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
            href="/certifications/developer-2"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            PD2 Exam Tips
          </Link>
        </div>
      </section>
    </div>
  )
}
