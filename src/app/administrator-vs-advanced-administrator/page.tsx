import type { Metadata } from 'next'
import Link from '@/components/AppLink'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import WhichFirstBlock from '@/components/WhichFirstBlock'
import RelatedComparisons from '@/components/RelatedComparisons'
import LastUpdated from '@/components/LastUpdated'



const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'

const pageTitle = 'Administrator vs Advanced Administrator: Which Next?'
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription =
  'Compare Administrator and Advanced Administrator by exam topics, difficulty, study effort, and career fit before progressing.'

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: {
    canonical: `${siteUrl}/administrator-vs-advanced-administrator`,
    languages: { 'en-US': `${siteUrl}/administrator-vs-advanced-administrator`, 'x-default': `${siteUrl}/administrator-vs-advanced-administrator` },
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/administrator-vs-advanced-administrator`,
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
  { name: 'Administrator vs Advanced Administrator', url: '/administrator-vs-advanced-administrator' },
]

const faqItems = [
  {
    question: 'Do you need ADM-201 before taking Advanced Administrator?',
    answer: 'Yes. You must pass Salesforce Administrator (ADM-201) before taking the Advanced Administrator exam.',
  },
  {
    question: 'Is the Advanced Administrator exam harder than ADM-201?',
    answer: 'Yes. Advanced Administrator is widely considered harder. It assumes ADM-201 knowledge and tests more advanced configuration, including multi-step Flows, scheduled triggers, sharing and security, change sets, deployments, and reports with cross-object formulas. Many candidates recommend 1–2 years of hands-on admin experience before taking it.',
  },
  {
    question: 'How long should I wait between ADM-201 and Advanced Administrator?',
    answer: 'Salesforce recommends at least 1–2 years of admin experience before taking Advanced Administrator. Avoid rushing to it right after ADM-201; the exam tests practical knowledge gained from managing a real Salesforce org, not study alone.',
  },
  {
    question: 'Which certification is worth more: Administrator or Advanced Administrator?',
    answer: 'Both can be useful. Advanced Administrator may support applications for senior admin roles and is associated with higher salaries. In 2026, holding both certifications, or ADM-201 plus a specialist certification such as Sales Cloud or Service Cloud Consultant, may make you more competitive than ADM-201 alone.',
  },
]

export default function AdministratorVsAdvancedAdministratorPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/administrator-vs-advanced-administrator" breadcrumbItems={breadcrumbItems} faqItems={faqItems} aboutEntities={['/certifications/administrator', '/certifications/advanced-administrator']} />

      <header data-lcp-header className="mb-10">
        <p className="inline-flex items-center rounded-full bg-salesforce-blue/10 px-3 py-1 text-sm font-medium text-salesforce-dark mb-4">
          Certification Comparison
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Salesforce Administrator vs Advanced Administrator: When to Upgrade Your Cert
        </h1>
        <LastUpdated />
        <p className="text-lg text-gray-600">
          ADM-201 can help you qualify for Salesforce admin roles. Advanced Administrator (ADM-211) covers more advanced skills. Compare the exams and see when to consider the next credential.
        </p>
      </header>

      <ContentPageAuthor />
      <WhichFirstBlock
        certA={{
          name: "Salesforce Administrator",
          certSlug: "administrator",
          examTipsSlug: "certifications/administrator",
          conditions: [
          "You do not yet hold any Salesforce certification",
          "You are new to the platform or have less than 1 year of hands-on experience",
          "You want the most widely required credential across all Salesforce roles",
          "You are starting any Salesforce career path",
          ],
        }}
        certB={{
          name: "Advanced Administrator",
          certSlug: "advanced-administrator",
          examTipsSlug: "certifications/advanced-administrator",
          conditions: [
          "You already hold the Administrator certification",
          "You have 2+ years of hands-on Salesforce admin experience",
          "You work with advanced automation, territory management, or Salesforce Connect",
          "You are targeting senior admin or platform manager roles",
          ],
        }}
        recommendation={{
          certName: "Salesforce Administrator",
          certSlug: "administrator",
          examTipsSlug: "certifications/administrator",
          reason: "Administrator is the first step. Advanced Administrator builds on the admin concepts covered by ADM-201, so learn those topics before taking the advanced exam.",
          careerPathSlug: "admin-certification-path",
          careerPathLabel: "Admin Certification Path",
        }}
      />

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Side-by-Side Comparison</h2>
        <div className="overflow-x-auto">
          <table className="min-w-[500px] w-full text-sm text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th scope="col" className="py-2.5 pr-4 font-semibold text-gray-900">Factor</th>
                <th scope="col" className="py-2.5 pr-4 font-semibold text-salesforce-blue">Administrator (ADM-201)</th>
                <th scope="col" className="py-2.5 font-semibold text-purple-700">Advanced Administrator (ADM-211)</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr className="border-b border-gray-100">
                <td className="py-2.5 pr-4 font-medium">Prerequisite</td>
                <td className="py-2.5 pr-4">None</td>
                <td className="py-2.5">ADM-201 required</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2.5 pr-4 font-medium">Exam Questions</td>
                <td className="py-2.5 pr-4">60 questions, 105 min, 65%</td>
                <td className="py-2.5">60 questions, 105 min, 65%</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2.5 pr-4 font-medium">Core Topics</td>
                <td className="py-2.5 pr-4">User setup, security, automation basics, reports, standard objects</td>
                <td className="py-2.5">Complex automation, advanced security/sharing, deployment, change sets, advanced analytics</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2.5 pr-4 font-medium">Difficulty</td>
                <td className="py-2.5 pr-4">Moderate, broad coverage</td>
                <td className="py-2.5">Hard, deep practical knowledge required</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2.5 pr-4 font-medium">Avg Salary</td>
                <td className="py-2.5 pr-4">$70–100k (US)</td>
                <td className="py-2.5">$90–130k (US)</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2.5 pr-4 font-medium">Experience Needed</td>
                <td className="py-2.5 pr-4">6–12 months study/hands-on</td>
                <td className="py-2.5">1–2 years hands-on admin experience</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-medium">Career Outcome</td>
                <td className="py-2.5 pr-4">Entry–mid Salesforce Admin roles</td>
                <td className="py-2.5">Senior Admin, Salesforce Lead, Architect entry</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">What Advanced Administrator Tests That ADM-201 Doesn’t</h2>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Complex automation</strong>: Multi-step Flows with decisions, fault paths, loops, and scheduled triggers. ADM-201 covers basic Flow creation; Advanced Administrator covers how to design Flows for complex business processes.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Advanced sharing and security</strong>: Sharing rules, manual sharing, team access, territory management, and field-level security at scale. ADM-201 covers OWD, while Advanced Administrator tests more complex sharing scenarios.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Change sets and deployment</strong>: Move metadata between sandboxes and production with change sets. Understand dependencies and validate a deployment before it goes live.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Advanced analytics</strong>: Build reports with cross-object formulas, joined reports, and exceptions, and work with CRM Analytics (Einstein) dashboards beyond the basic report builder.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
        <dl className="space-y-4">
          {faqItems.map((item, i) => (
            <div key={i} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
              <dt className="font-semibold text-gray-900 mb-1">{item.question}</dt>
              <dd className="text-sm text-gray-700" dangerouslySetInnerHTML={{ __html: item.answer }} />
            </div>
          ))}
        </dl>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Decision Matrix: Admin or Advanced Admin?</h2>
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
                <td className="py-2.5 pr-4">You are new to Salesforce or have been an admin for less than 6 months</td>
                <td className="py-2.5 font-semibold text-salesforce-blue">ADM-201, required first</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4">You hold ADM-201 and have 2+ years of admin experience</td>
                <td className="py-2.5 font-semibold text-purple-700">Advanced Admin, natural next step</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4">You manage complex security, Territory Management, or sharing rules</td>
                <td className="py-2.5 font-semibold text-purple-700">Advanced Admin; these are core topics</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4">You want a Senior Admin or Lead Admin role</td>
                <td className="py-2.5 font-semibold text-purple-700">Advanced Admin, the credential employers look for at senior level</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4">Pursuing Consultant or Architect certification tracks</td>
                <td className="py-2.5 font-semibold text-salesforce-blue">ADM-201 first, prerequisite for most Consultant exams</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4">Work regularly with automation (Record-Triggered Flows, Scheduled Flows)</td>
                <td className="py-2.5 font-semibold text-purple-700">Advanced Admin; automation is heavily tested at this level</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="rounded-xl border border-salesforce-blue/20 bg-salesforce-blue/5 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Start Preparing</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/certifications/administrator#practice-questions" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-colors">
            ADM-201 Practice Questions <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/certifications/advanced-administrator#practice-questions" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            Advanced Admin Practice Questions
          </Link>
          <Link href="/admin-certification-path" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            Admin Cert Path {RELEASE_CURRENT}
          </Link>
        </div>
      </section>
      <RelatedComparisons
        links={[
          { slug: "adm-201-vs-app-builder", label: "ADM-201 vs App Builder" },
          { slug: "app-builder-vs-developer-i", label: "App Builder vs Platform Developer I" },
          { slug: "salesforce-admin-vs-developer-career", label: "Admin vs Developer Career" },
        ]}
      />
    </div>
  )
}
