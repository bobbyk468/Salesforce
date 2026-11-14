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

const metadataTitle = 'ADM-201 vs App Builder: Compare Salesforce Exam Paths'
const pageTitle = 'ADM-201 vs App Builder: Which Cert to Take First?'
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(metadataTitle)}`
const pageDescription =
  'Compare ADM-201 and DEV-402 by exam focus, difficulty, study time, and career fit to choose a Salesforce certification.'

export const metadata: Metadata = {
  title: { absolute: metadataTitle },
  description: pageDescription,
  alternates: {
    canonical: `${siteUrl}/adm-201-vs-app-builder`,
    languages: { 'en-US': `${siteUrl}/adm-201-vs-app-builder`, 'x-default': `${siteUrl}/adm-201-vs-app-builder` },
  },
  openGraph: {
    title: metadataTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/adm-201-vs-app-builder`,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: metadataTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: metadataTitle,
    description: pageDescription,
    images: [{ url: ogImageUrl, alt: metadataTitle }],
  },
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Certification Comparison', url: '/certification-comparison' },
  { name: 'ADM-201 vs App Builder', url: '/adm-201-vs-app-builder' },
]

const faqItems = [
  {
    question: 'Should you take ADM-201 or App Builder first?',
    answer: 'Start with ADM-201. Platform App Builder builds on admin knowledge, and the exams share topics such as custom objects, validation rules, and automation. ADM-201 gives you the platform foundation for App Builder.',
  },
  {
    question: 'Is ADM-201 harder than Platform App Builder?',
    answer: 'ADM-201 covers more areas and is often considered harder because it has 65 questions across 7 topic areas. App Builder focuses on declarative development. If you have development experience, you may find App Builder easier.',
  },
  {
    question: 'Do ADM-201 and App Builder share exam content?',
    answer: 'Yes. About 30% of the topics overlap, including automation (Flows and Process Builder), data modeling (custom objects and fields), and Lightning App Builder. Some candidates prepare for both exams during the same study period.',
  },
  {
    question: 'Which certification is more valuable: ADM-201 or App Builder?',
    answer: 'ADM-201 is more widely recognized for Salesforce admin roles and is often listed by employers. App Builder can help with roles focused on building Salesforce apps and supports the System Architect certification path.',
  },
]

export default function Adm201VsAppBuilderPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/adm-201-vs-app-builder" breadcrumbItems={breadcrumbItems} faqItems={faqItems} aboutEntities={['/certifications/administrator', '/certifications/app-builder']} />

      <header data-lcp-header className="mb-10">
        <p className="inline-flex items-center rounded-full bg-salesforce-blue/10 px-3 py-1 text-sm font-medium text-salesforce-dark mb-4">
          Certification Comparison
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          ADM-201 vs App Builder (DEV-402): Which Salesforce Cert Should You Take First?
        </h1>
        <LastUpdated />
        <p className="text-lg text-gray-600">
          Both certifications focus on Salesforce configuration, but they cover different skills.
          Compare their focus areas and choose a starting point that fits your role and goals.
        </p>
      </header>

      <ContentPageAuthor />
      <WhichFirstBlock
        certA={{
          name: "Salesforce Administrator",
          certSlug: "administrator",
          examTipsSlug: "certifications/administrator",
          conditions: [
          "You are new to Salesforce",
          "Your work involves users, data, security, or reports",
          "You want a credential commonly requested for admin roles",
          "You want a foundation for other Salesforce certifications",
          ],
        }}
        certB={{
          name: "Platform App Builder",
          certSlug: "app-builder",
          examTipsSlug: "certifications/app-builder",
          conditions: [
          "You already have the Administrator certification",
          "You regularly build Lightning pages, flows, or custom apps",
          "You want a second certification that builds on your current knowledge",
          "You are working toward the Architect certification path",
          ],
        }}
        recommendation={{
          certName: "Salesforce Administrator",
          certSlug: "administrator",
          examTipsSlug: "certifications/administrator",
          reason: "Take Administrator first to build your knowledge of Salesforce setup, security, automation, and data. App Builder uses many of the same platform concepts, so this foundation can make the next exam easier to prepare for.",
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
                <th scope="col" className="py-2.5 pr-4 font-semibold text-salesforce-blue">ADM-201 (Administrator)</th>
                <th scope="col" className="py-2.5 font-semibold text-purple-700">DEV-402 (App Builder)</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr className="border-b border-gray-100">
                <td className="py-2.5 pr-4 font-medium">Primary Focus</td>
                <td className="py-2.5 pr-4">Core admin operations, security, automation, reports</td>
                <td className="py-2.5">Data modeling, app design, declarative build patterns</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2.5 pr-4 font-medium">Difficulty</td>
                <td className="py-2.5 pr-4">Moderate (broad coverage)</td>
                <td className="py-2.5">Moderate-to-harder (deeper configuration depth)</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2.5 pr-4 font-medium">Best For</td>
                <td className="py-2.5 pr-4">New admins, support/admin roles, career switchers</td>
                <td className="py-2.5">Admins moving toward solution design/custom apps</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2.5 pr-4 font-medium">Exam Style</td>
                <td className="py-2.5 pr-4">Operational scenarios across many topics</td>
                <td className="py-2.5">Design/build scenarios with object and app patterns</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2.5 pr-4 font-medium">Avg Salary</td>
                <td className="py-2.5 pr-4">$70–100k (US)</td>
                <td className="py-2.5">$75–105k (US)</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-medium">Recommended Order</td>
                <td className="py-2.5 pr-4" colSpan={2}>Start with ADM-201, then move to DEV-402 for a stronger progression.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Which One Should You Take First?</h2>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" />Start with <strong>ADM-201</strong> if you are new to Salesforce or want an admin-focused role.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" />Take <strong>DEV-402 next</strong> if you want to build custom apps using declarative tools.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" />A common sequence is ADM-201, then DEV-402, followed by an Advanced Administrator or Consultant path.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Career Outcome &amp; Salary Differences</h2>
        <p className="text-sm text-gray-700 mb-4">
          ADM-201 covers day-to-day Salesforce administration, including user setup, access controls, automation, data quality, and reporting.
          App Builder focuses on designing and creating custom apps with declarative tools.
        </p>
        <div className="grid sm:grid-cols-2 gap-4 mb-4">
          <div className="rounded-lg border border-salesforce-blue/20 bg-salesforce-blue/5 p-4">
            <p className="text-sm font-semibold text-salesforce-dark mb-2">ADM-201 (Administrator)</p>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>Salesforce Admin: $70–95k</li>
              <li>Senior Admin: $90–125k</li>
              <li>Most job postings require this cert first</li>
              <li>Faster path to employment</li>
            </ul>
          </div>
          <div className="rounded-lg border border-purple-200 bg-purple-50/50 p-4">
            <p className="text-sm font-semibold text-purple-700 mb-2">DEV-402 (App Builder), added to ADM-201</p>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>Solution Designer / Functional Consultant: $95–130k</li>
              <li>Opens Consultant &amp; Architect certification paths</li>
              <li>Valued for custom app delivery roles</li>
              <li>App Builder alone (without Admin) is less common</li>
            </ul>
          </div>
        </div>
        <p className="text-sm text-gray-700">
          If you are aiming for a Salesforce operations role, ADM-201 may be the more relevant first credential.
          Adding DEV-402 can show that you also know how to design and build custom apps, and it supports Consultant-track options.
        </p>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Decision Matrix: Which Certification Fits You?</h2>
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
                <td className="py-2.5 pr-4">New to Salesforce, no prior admin experience</td>
                <td className="py-2.5 font-semibold text-salesforce-blue">ADM-201 first</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4">Already working as a Salesforce Admin (6+ months)</td>
                <td className="py-2.5 font-semibold text-purple-700">DEV-402 (App Builder)</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4">Want to build custom apps without writing code</td>
                <td className="py-2.5 font-semibold text-purple-700">DEV-402 (App Builder)</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4">Targeting Salesforce Admin or Business Analyst roles</td>
                <td className="py-2.5 font-semibold text-salesforce-blue">ADM-201 first</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4">Pursuing the Architect certification path later</td>
                <td className="py-2.5 font-semibold text-purple-700">DEV-402; it is an Architect path prerequisite</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4">Career switcher with no Salesforce background</td>
                <td className="py-2.5 font-semibold text-salesforce-blue">ADM-201 first, broadest job-market entry point</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="rounded-xl border border-salesforce-blue/20 bg-salesforce-blue/5 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Recommended Next Step</h2>
        <p className="text-sm text-gray-700 mb-4">
          Start with ADM-201 and use section-wise exam weightage + practice questions to prepare efficiently.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/certifications/administrator"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-colors"
          >
            Go to ADM-201 Study Guide
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/certifications/role/administrator"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            Browse Administrator Certification Path
          </Link>
          <Link
            href="/certifications/administrator"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            Read ADM-201 Exam Tips {RELEASE_CURRENT}
          </Link>
        </div>
      </section>
      <RelatedComparisons
        links={[
          { slug: "administrator-vs-advanced-administrator", label: "Admin vs Advanced Admin" },
          { slug: "app-builder-vs-developer-i", label: "App Builder vs Platform Developer I" },
          { slug: "salesforce-admin-vs-developer-career", label: "Admin vs Developer Career" },
        ]}
      />
    </div>
  )
}
