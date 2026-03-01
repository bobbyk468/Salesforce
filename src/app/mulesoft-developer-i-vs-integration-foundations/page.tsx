import type { Metadata } from 'next'
import Link from 'next/link'
import { getWebPageJsonLd, getBreadcrumbListJsonLd, getArticleJsonLd, getFaqPageJsonLd } from '@/lib/schema-data'
import { RELEASE_CURRENT } from '@/lib/release-data'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const pageTitle = `MuleSoft Developer I vs Integration Foundations (${RELEASE_CURRENT})`
const pageDescription = `MuleSoft Developer I vs MuleSoft Integration Foundations: compare fees, difficulty, skills tested, and which MuleSoft certification to take first in 2026.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/mulesoft-developer-i-vs-integration-foundations` },
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
  keywords: `mulesoft developer i vs integration foundations, mulesoft certification comparison, which mulesoft cert first, MCIA vs MCIA-Level-1`,
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'MuleSoft Developer I vs Integration Foundations', url: '/mulesoft-developer-i-vs-integration-foundations' },
]

const faqItems = [
  {
    question: 'What is the difference between MuleSoft Integration Foundations and MuleSoft Developer I?',
    answer: 'MuleSoft Integration Foundations (MCIA Associate) is an entry-level conceptual certification — it tests understanding of API-led connectivity, Anypoint Platform components, and integration concepts without requiring hands-on Anypoint Studio experience. MuleSoft Developer I (MCIA-Level-1) is a professional-level practical certification that tests building real Mule 4 flows in Anypoint Studio, writing DataWeave transformations, configuring connectors, and deploying to CloudHub.',
  },
  {
    question: 'Should I take MuleSoft Integration Foundations before Developer I?',
    answer: 'Integration Foundations is a good starting point if you have no prior MuleSoft experience. It validates conceptual understanding ($75, 40 questions, 70 minutes) and serves as a confidence builder before the more demanding Developer I exam ($200, 60 questions, 120 minutes). However, experienced developers can skip Integration Foundations and go directly to Developer I with Anypoint Studio practice.',
  },
  {
    question: 'Which MuleSoft certification has more job market value?',
    answer: 'MuleSoft Developer I has significantly more job market value. Employers hiring MuleSoft developers look for Developer I (or higher) as the baseline credential. Integration Foundations is a useful introductory credential for business analysts and non-developers who work with MuleSoft teams, but it is rarely sufficient for developer roles. For maximum career impact, target Developer I.',
  },
  {
    question: 'Is the MuleSoft Integration Foundations exam easier than Developer I?',
    answer: 'Yes — Integration Foundations is significantly easier. Integration Foundations is 40 questions, 70 minutes, and tests conceptual knowledge only (no coding required). Developer I is 60 questions, 120 minutes, requires understanding DataWeave expressions, Mule 4 flow design, and connector configuration. Both require 70% passing score, but the depth of knowledge tested is vastly different.',
  },
  {
    question: 'Does Integration Foundations count towards the Developer I exam?',
    answer: 'Integration Foundations is a standalone credential — it does not reduce the scope of the Developer I exam or waive any sections. Developer I is a separate, broader exam that builds on Integration Foundations concepts and adds hands-on Mule 4 development skills. Holding Integration Foundations does, however, demonstrate foundational knowledge that can help in Developer I preparation.',
  },
]

export default function MulesoftDeveloperIVsIntegrationFoundationsPage() {
  const webPageJsonLd = getWebPageJsonLd({ name: pageTitle, description: pageDescription, path: '/mulesoft-developer-i-vs-integration-foundations', breadcrumbItems })
  const breadcrumbJsonLd = getBreadcrumbListJsonLd(breadcrumbItems)
  const articleJsonLd = getArticleJsonLd({ headline: pageTitle, description: pageDescription, path: '/mulesoft-developer-i-vs-integration-foundations' })
  const faqJsonLd = getFaqPageJsonLd(faqItems)

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <div data-lcp-header className="mb-10">
        <div className="inline-flex items-center gap-2 bg-salesforce-blue/10 text-salesforce-blue text-sm font-semibold px-3 py-1 rounded-full mb-4">
          <span>Comparison</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          MuleSoft Developer I vs Integration Foundations ({RELEASE_CURRENT})
        </h1>
        <p className="text-lg text-gray-600">
          Two MuleSoft certifications at very different levels. One is conceptual and entry-level, the other is hands-on and professional. Here&apos;s which to choose.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
        {[
          {
            name: 'Integration Foundations',
            href: '/certifications/mulesoft-integration-foundations',
            badge: 'Entry Level',
            badgeColor: 'bg-green-100 text-green-800',
            fee: '$75', questions: '40', time: '70 min', passing: '70%',
            level: 'Conceptual — no coding required',
            best: 'Business analysts, architects, Salesforce admins new to MuleSoft',
            skills: ['API-led connectivity concepts', 'Anypoint Platform overview', 'Integration patterns (conceptual)', 'No Anypoint Studio required'],
          },
          {
            name: 'MuleSoft Developer I',
            href: '/certifications/mulesoft-developer-i',
            badge: 'Professional',
            badgeColor: 'bg-salesforce-blue/10 text-salesforce-blue',
            fee: '$200', questions: '60', time: '120 min', passing: '70%',
            level: 'Hands-on — Anypoint Studio required',
            best: 'Integration developers, Salesforce architects, API developers',
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
                  <div className="font-bold text-salesforce-blue text-xs">{s.v}</div>
                  <div className="text-xs text-gray-500">{s.l}</div>
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
              Free Practice Questions →
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
                <th className="text-left py-2 pr-4 text-gray-500 font-medium">Aspect</th>
                <th className="text-left py-2 pr-4 text-salesforce-blue font-medium">Integration Foundations</th>
                <th className="text-left py-2 text-salesforce-blue font-medium">Developer I</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {[
                { aspect: 'Fee', f: '$75', d: '$200' },
                { aspect: 'Questions', f: '40', d: '60' },
                { aspect: 'Time', f: '70 min', d: '120 min' },
                { aspect: 'Passing score', f: '70%', d: '70%' },
                { aspect: 'Anypoint Studio needed?', f: 'No', d: 'Yes — essential' },
                { aspect: 'DataWeave tested?', f: 'Conceptually only', d: 'Yes — reading & writing' },
                { aspect: 'Coding required?', f: 'No', d: 'Yes (Mule 4 flows)' },
                { aspect: 'Job market demand', f: 'Low (entry credential)', d: 'High (primary credential)' },
              ].map((row) => (
                <tr key={row.aspect}>
                  <td className="py-2 pr-4 text-gray-500">{row.aspect}</td>
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

      <div className="bg-salesforce-blue rounded-xl p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-2">Start Practising Today</h2>
        <p className="text-blue-100 mb-6">Free practice questions for both MuleSoft certifications.</p>
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
