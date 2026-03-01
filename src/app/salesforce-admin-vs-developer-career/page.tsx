import type { Metadata } from 'next'
import Link from 'next/link'
import { getWebPageJsonLd, getBreadcrumbListJsonLd, getArticleJsonLd, getFaqPageJsonLd } from '@/lib/schema-data'
import { RELEASE_CURRENT } from '@/lib/release-data'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const pageTitle = `Salesforce Admin vs Developer Career Paths (${RELEASE_CURRENT})`
const pageDescription = `Salesforce Admin vs Developer career paths: day-to-day work, salary, progression, certs, and which path suits different backgrounds.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/salesforce-admin-vs-developer-career` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/salesforce-admin-vs-developer-career`,
    images: [{ url: `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`, alt: pageTitle }],
  },
  keywords: `salesforce admin vs developer career, salesforce administrator career path, salesforce developer career path, admin vs developer salary salesforce`,
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Salesforce Admin vs Developer Career', url: '/salesforce-admin-vs-developer-career' },
]

const faqItems = [
  {
    question: 'Is it better to be a Salesforce Admin or Developer?',
    answer: 'Neither path is objectively better — it depends on your strengths and interests. Admins focus on configuration, process design, and user adoption; they work more with business stakeholders. Developers focus on custom code (Apex, LWC), integrations, and complex automations; they work more with technical architecture. Developers typically earn 10–20% more at equivalent experience levels, but admin roles are more abundant and often easier to enter without a programming background.',
  },
  {
    question: 'What does a Salesforce Administrator do day to day?',
    answer: 'A Salesforce Administrator typically manages user access, customizes objects and page layouts, builds automation (flows, process builder), creates reports and dashboards, troubleshoots user issues, and implements change requests from the business. Day-to-day work is a mix of configuration in Setup, building declarative solutions, training users, and documenting processes. Most time is spent in the Salesforce UI rather than writing code.',
  },
  {
    question: 'What does a Salesforce Developer do day to day?',
    answer: 'A Salesforce Developer writes and maintains Apex code, builds Lightning Web Components (LWC), integrates Salesforce with external systems via APIs, performs code reviews, and debugs complex technical issues. Day-to-day work involves an IDE (VS Code), the Developer Console, sandbox deployments, and working with version control. Developers typically spend 60–70% of their time coding or reviewing code.',
  },
  {
    question: 'Can I switch from Salesforce Admin to Developer?',
    answer: 'Yes. Many Salesforce Developers start as Admins. The transition path: earn Platform Developer I certification after Administrator, build hands-on Apex and LWC projects in a sandbox, and seek roles that blend admin and developer work (e.g. &quot;Salesforce Consultant&quot; or &quot;Platform Developer&quot; at smaller firms). Strong admin knowledge makes you a better developer — you understand what you are building for.',
  },
  {
    question: 'Which certifications do I need for Admin vs Developer careers?',
    answer: 'Admin path: Salesforce Administrator (ADM-201) is the foundation; Advanced Administrator and specialist certs (CPQ, Service Cloud) follow. Developer path: Administrator first, then Platform Developer I (PD1), then Platform Developer II (PD2). Do not skip Administrator for the developer path — platform knowledge from the Admin cert is essential for good development work.',
  },
]

export default function SalesforceAdminVsDeveloperCareerPage() {
  const webPageJsonLd = getWebPageJsonLd({ name: pageTitle, description: pageDescription, path: '/salesforce-admin-vs-developer-career', breadcrumbItems })
  const breadcrumbJsonLd = getBreadcrumbListJsonLd(breadcrumbItems)
  const articleJsonLd = getArticleJsonLd({ headline: pageTitle, description: pageDescription, path: '/salesforce-admin-vs-developer-career' })
  const faqJsonLd = getFaqPageJsonLd(faqItems)

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <div data-lcp-header className="mb-10">
        <div className="inline-flex items-center gap-2 bg-salesforce-blue/10 text-salesforce-blue text-sm font-semibold px-3 py-1 rounded-full mb-4">
          <span>Career Guide</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          Salesforce Admin vs Developer Career Paths ({RELEASE_CURRENT})
        </h1>
        <p className="text-lg text-gray-600">
          Admin and Developer are two of the most common Salesforce career paths. Here is how they differ in day-to-day work, salary, progression, and who each path suits.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
        <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
          <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="text-2xl">⚙️</span> Salesforce Administrator
          </h2>
          <ul className="space-y-2 text-sm text-gray-700">
            <li><strong>Day-to-day:</strong> Configuration, flows, reports, user support, change requests</li>
            <li><strong>Tools:</strong> Salesforce Setup, Flow Builder, Report Builder, Excel</li>
            <li><strong>Salary range:</strong> $70K–$120K (US, varies by location)</li>
            <li><strong>Progression:</strong> Junior Admin → Admin → Senior Admin → Admin Lead or Consultant</li>
            <li><strong>Best for:</strong> People who enjoy process design, business analysis, and working with stakeholders</li>
          </ul>
          <Link href="/adm-201-study-guide" className="inline-block mt-4 text-sm font-semibold text-salesforce-blue hover:underline">Administrator Study Guide →</Link>
        </div>
        <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
          <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="text-2xl">💻</span> Salesforce Developer
          </h2>
          <ul className="space-y-2 text-sm text-gray-700">
            <li><strong>Day-to-day:</strong> Apex, LWC, integrations, deployments, code reviews</li>
            <li><strong>Tools:</strong> VS Code, Developer Console, Git, Salesforce CLI</li>
            <li><strong>Salary range:</strong> $85K–$140K (US, varies by location)</li>
            <li><strong>Progression:</strong> Junior Dev → Developer → Senior Dev → Tech Lead or Architect</li>
            <li><strong>Best for:</strong> People with programming interest who enjoy solving technical challenges</li>
          </ul>
          <Link href="/pd2-study-guide" className="inline-block mt-4 text-sm font-semibold text-salesforce-blue hover:underline">Developer Study Guide →</Link>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Key Differences</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left py-2 pr-4 text-gray-500 font-medium">Aspect</th>
                <th className="text-left py-2 pr-4 text-gray-500 font-medium">Administrator</th>
                <th className="text-left py-2 text-gray-500 font-medium">Developer</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {[
                { aspect: 'Primary output', admin: 'Config, flows, reports', dev: 'Code (Apex, LWC), integrations' },
                { aspect: 'Coding required', admin: 'Minimal or none', dev: 'Yes — Apex, JavaScript, SOQL' },
                { aspect: 'Entry barrier', admin: 'Lower — declarative focus', dev: 'Higher — programming background helps' },
                { aspect: 'Stakeholder contact', admin: 'High — business users, analysts', dev: 'Moderate — PMs, architects' },
                { aspect: 'Certification path', admin: 'Admin → Advanced Admin → specialist', dev: 'Admin → PD1 → PD2' },
              ].map((row) => (
                <tr key={row.aspect}>
                  <td className="py-2 pr-4 text-gray-900 font-medium">{row.aspect}</td>
                  <td className="py-2 pr-4 text-gray-700">{row.admin}</td>
                  <td className="py-2 text-gray-700">{row.dev}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-salesforce-blue/5 border border-salesforce-blue/20 rounded-xl p-5 mb-8">
        <h2 className="text-base font-bold text-gray-900 mb-3">Hybrid Roles</h2>
        <p className="text-sm text-gray-700 mb-2">Many roles blend admin and developer work — &quot;Salesforce Consultant,&quot; &quot;Technical Consultant,&quot; or &quot;Platform Developer&quot; at consultancies and mid-size firms. These roles often require both Administrator and Platform Developer I certifications. Starting as an Admin and adding PD1 is a common path into these hybrid positions.</p>
        <Link href="/certification-path" className="text-sm font-semibold text-salesforce-blue hover:underline">View Certification Paths →</Link>
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
        <h2 className="text-2xl font-bold mb-2">Practice for Your Path</h2>
        <p className="text-blue-100 mb-6">Free practice questions for Administrator and Platform Developer certifications.</p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/certifications/administrator" className="inline-flex items-center px-5 py-3 bg-white text-salesforce-blue rounded-lg font-semibold hover:bg-blue-50 transition-colors text-sm">
            Administrator Practice
          </Link>
          <Link href="/certifications" className="inline-flex items-center px-5 py-3 border border-white/40 text-white rounded-lg font-semibold hover:bg-white/10 transition-colors text-sm">
            All Certifications
          </Link>
        </div>
      </div>
    </div>
  )
}
