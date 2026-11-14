import type { Metadata } from 'next'
import Link from '@/components/AppLink'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import RelatedGuides from '@/components/RelatedGuides'
import { getRelatedGuides } from '@/lib/related-guides-data'
import { RELEASE_CURRENT } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import LastUpdated from '@/components/LastUpdated'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const pageTitle = `MuleSoft Developer I vs Integration Foundations (${RELEASE_CURRENT})`
const pageDescription = 'Compare MuleSoft Developer I and Integration Foundations by cost, difficulty, tested skills, and which credential to take first.'

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: {
    canonical: `${siteUrl}/mulesoft-developer-i-vs-integration-foundations`,
    languages: { 'en-US': `${siteUrl}/mulesoft-developer-i-vs-integration-foundations`, 'x-default': `${siteUrl}/mulesoft-developer-i-vs-integration-foundations` },
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/mulesoft-developer-i-vs-integration-foundations`,
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
  { name: 'Certification Comparison', url: '/certification-comparison' },
  { name: 'MuleSoft Developer I vs Integration Foundations', url: '/mulesoft-developer-i-vs-integration-foundations' },
]

const faqItems = [
  {
    question: 'What is the difference between MuleSoft Integration Foundations and MuleSoft Developer I?',
    answer: 'MuleSoft Integration Foundations (MCIA Associate) is an entry-level, conceptual certification. It covers API-led connectivity, Anypoint Platform components, and integration concepts. You do not need hands-on Anypoint Studio experience. MuleSoft Developer I (MCIA-Level-1) is a professional certification that tests how you build Mule 4 flows in Anypoint Studio, write DataWeave transformations, configure connectors, and deploy to CloudHub.',
  },
  {
    question: 'Should I take MuleSoft Integration Foundations before Developer I?',
    answer: 'Integration Foundations can be a good first step if you are new to MuleSoft. It tests conceptual knowledge ($75, 40 questions, 70 minutes) before the more hands-on Developer I exam ($200, 60 questions, 120 minutes). Experienced developers can skip it and prepare directly for Developer I with Anypoint Studio practice.',
  },
  {
    question: 'Which MuleSoft certification has more job market value?',
    answer: 'MuleSoft Developer I is more valuable for developer roles. Employers often look for Developer I or higher as a baseline credential. Integration Foundations can help business analysts and other non-developers who work with MuleSoft teams, but it may not be enough for a developer role.',
  },
  {
    question: 'Is the MuleSoft Integration Foundations exam easier than Developer I?',
    answer: 'Yes. Integration Foundations is easier: it has 40 questions, takes 70 minutes, and tests concepts without coding. Developer I has 60 questions, takes 120 minutes, and covers DataWeave, Mule 4 flow design, and connector configuration. Both have a 70% passing score, but Developer I tests more advanced skills.',
  },
  {
    question: 'Does Integration Foundations count towards the Developer I exam?',
    answer: 'Integration Foundations is a standalone credential. It does not reduce the scope of Developer I or waive any exam sections. Developer I is a separate, broader exam that builds on integration concepts and adds hands-on Mule 4 development skills. Foundations can still help you prepare by introducing core concepts.',
  },
]

export default function MulesoftDeveloperIVsIntegrationFoundationsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/mulesoft-developer-i-vs-integration-foundations" breadcrumbItems={breadcrumbItems} faqItems={faqItems} aboutEntities={['/certifications/mulesoft-developer-i', '/certifications/mulesoft-integration-foundations']} />

      <div data-lcp-header className="mb-10">
        <div className="inline-flex items-center gap-2 bg-salesforce-blue/10 text-salesforce-dark text-sm font-semibold px-3 py-1 rounded-full mb-4">
          <span>Comparison</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          MuleSoft Developer I vs Integration Foundations ({RELEASE_CURRENT})
        </h1>
        <LastUpdated />
        <p className="text-lg text-gray-600">
          Compare two MuleSoft certifications at different levels: one covers entry-level concepts, while the other tests hands-on development. Use the guide to choose which one fits your goals.
        </p>
      </div>

      <ContentPageAuthor />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
        {[
          {
            name: 'Integration Foundations',
            href: '/certifications/mulesoft-integration-foundations',
            badge: 'Entry Level',
            badgeColor: 'bg-green-100 text-green-800',
            fee: '$75', questions: '40', time: '70 min', passing: '70%',
            level: 'Covers concepts; no coding required',
            best: 'Business analysts, architects, and Salesforce admins who are new to MuleSoft',
            skills: ['API-led connectivity concepts', 'Anypoint Platform overview', 'Integration patterns (conceptual)', 'No Anypoint Studio required'],
          },
          {
            name: 'MuleSoft Developer I',
            href: '/certifications/mulesoft-developer-i',
            badge: 'Professional',
            badgeColor: 'bg-salesforce-blue/10 text-salesforce-dark',
            fee: '$200', questions: '60', time: '120 min', passing: '70%',
            level: 'Hands-on development in Anypoint Studio',
            best: 'Integration developers, Salesforce architects, and API developers',
            skills: ['Building Mule 4 flows', 'DataWeave transformations', 'Anypoint Connectors', 'Error handling & deployment'],
          },
        ].map((cert) => (
          <div key={cert.name} className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <h2 className="text-lg font-bold text-gray-900">{cert.name}</h2>
              <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${cert.badgeColor}`}>{cert.badge}</span>
            </div>
            <div className="grid grid-cols-4 gap-2 mb-4">
              {[{ l: 'Fee', v: cert.fee }, { l: 'Questions', v: cert.questions }, { l: 'Time', v: cert.time }, { l: 'Pass', v: cert.passing }].map((s) => (
                <div key={s.l} className="text-center bg-gray-50 rounded-lg p-2">
                  <div className="font-bold text-salesforce-dark text-xs">{s.v}</div>
                  <div className="text-xs text-gray-600">{s.l}</div>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-600 mb-1"><strong>Level:</strong> {cert.level}</p>
            <p className="text-sm text-gray-600 mb-3"><strong>Best for:</strong> {cert.best}</p>
            <ul className="space-y-1 mb-4">
              {cert.skills.map((s) => (
                <li key={s} className="text-sm text-gray-700 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-salesforce-blue flex-shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
            <Link href={cert.href} className="inline-flex items-center text-salesforce-blue font-medium text-sm hover:underline">
              Try free practice questions →
            </Link>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Key Differences</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100">
                <th scope="col" className="text-left py-2 pr-4 text-gray-600 font-medium">Aspect</th>
                <th scope="col" className="text-left py-2 pr-4 text-salesforce-blue font-medium">Integration Foundations</th>
                <th scope="col" className="text-left py-2 text-salesforce-blue font-medium">Developer I</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {[
                { aspect: 'Fee', f: '$75', d: '$200' },
                { aspect: 'Questions', f: '40', d: '60' },
                { aspect: 'Time', f: '70 min', d: '120 min' },
                { aspect: 'Passing score', f: '70%', d: '70%' },
                { aspect: 'Anypoint Studio needed?', f: 'No', d: 'Yes, essential' },
                { aspect: 'DataWeave tested?', f: 'Conceptually only', d: 'Yes, reading & writing' },
                { aspect: 'Coding required?', f: 'No', d: 'Yes (Mule 4 flows)' },
                { aspect: 'Job market demand', f: 'Low (entry credential)', d: 'High (primary credential)' },
                { aspect: 'Avg Salary', f: '$55–80k (US)', d: '$95–130k (US)' },
              ].map((row) => (
                <tr key={row.aspect}>
                  <td className="py-2 pr-4 text-gray-600">{row.aspect}</td>
                  <td className="py-2 pr-4 text-gray-900">{row.f}</td>
                  <td className="py-2 text-gray-900">{row.d}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
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
        <h2 className="text-xl font-bold text-gray-900 mb-4">Decision Matrix: MuleSoft Dev I or Integration Foundations?</h2>
        <div className="overflow-x-auto">
          <table className="min-w-[500px] w-full text-sm text-left border-collapse">
            <thead><tr className="border-b-2 border-gray-200">
              <th scope="col" className="py-2.5 pr-4 font-semibold text-gray-900">Your Situation</th>
              <th scope="col" className="py-2.5 font-semibold text-emerald-700">Choose This Cert</th>
            </tr></thead>
            <tbody className="text-gray-700 divide-y divide-gray-100">
              <tr><td className="py-2.5 pr-4">You are a non-technical stakeholder or project manager on a MuleSoft project</td><td className="py-2.5 font-semibold text-salesforce-blue">Integration Foundations for an overview, with no coding</td></tr>
              <tr><td className="py-2.5 pr-4">You build Mule flows, DataWeave transformations, or connector configurations</td><td className="py-2.5 font-semibold text-purple-700">MuleSoft Developer I for hands-on development</td></tr>
              <tr><td className="py-2.5 pr-4">You want to check your integration knowledge without Anypoint Studio experience</td><td className="py-2.5 font-semibold text-salesforce-blue">Integration Foundations ($75, 40 questions, 70 min)</td></tr>
              <tr><td className="py-2.5 pr-4">You want an integration developer or API developer role</td><td className="py-2.5 font-semibold text-purple-700">MuleSoft Developer I, a recognized developer credential</td></tr>
              <tr><td className="py-2.5 pr-4">You are new to MuleSoft and integration</td><td className="py-2.5 font-semibold text-gray-700">Start with Foundations to learn API-led concepts, then consider Developer I</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <RelatedGuides links={getRelatedGuides('mulesoft-developer-i-vs-integration-foundations')} />

      <div className="bg-salesforce-blue rounded-xl p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-2">Start Practicing</h2>
        <p className="text-white mb-6">Try free practice questions for either MuleSoft certification.</p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/certifications/mulesoft-developer-i" className="inline-flex items-center px-5 py-3 bg-white text-salesforce-blue rounded-lg font-semibold hover:bg-blue-50 transition-colors text-sm">
            Developer I Practice
          </Link>
          <Link href="/certifications/mulesoft-integration-foundations" className="inline-flex items-center px-5 py-3 border border-white/40 text-white rounded-lg font-semibold hover:bg-white/10 transition-colors text-sm">
            Foundations Practice
          </Link>
        </div>
      </div>
    </div>
  )
}
