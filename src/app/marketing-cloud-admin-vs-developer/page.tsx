import type { Metadata } from 'next'
import Link from '@/components/AppLink'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import RelatedGuides from '@/components/RelatedGuides'
import { getRelatedGuides } from '@/lib/related-guides-data'
import { RELEASE_CURRENT } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import WhichFirstBlock from '@/components/WhichFirstBlock'
import RelatedComparisons from '@/components/RelatedComparisons'
import LastUpdated from '@/components/LastUpdated'



const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'

const pageTitle = 'MC Engagement Admin vs Developer: Which Cert to Take?'
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription =
  'Compare Marketing Cloud Administrator and Developer exam topics and role fit to choose which certification to pursue first.'

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: {
    canonical: `${siteUrl}/marketing-cloud-admin-vs-developer`,
    languages: { 'en-US': `${siteUrl}/marketing-cloud-admin-vs-developer`, 'x-default': `${siteUrl}/marketing-cloud-admin-vs-developer` },
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/marketing-cloud-admin-vs-developer`,
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
  { name: 'MC Engagement Admin vs Developer', url: '/marketing-cloud-admin-vs-developer' },
]

const faqItems = [
  {
    question: 'What is the difference between Marketing Cloud Engagement Admin and Developer?',
    answer: 'Marketing Cloud Engagement Administrator covers configuring an SFMC account, including data extensions, subscribers, email deliverability, sendable relationships, automations, and account settings. Marketing Cloud Engagement Developer focuses on custom solutions built with AMPscript, SSJS (Server-Side JavaScript), REST API, and custom landing pages. The first exam is for platform operators; the second is for people who build on the platform.',
  },
  {
    question: 'Do you need Marketing Cloud Admin before taking MC Developer?',
    answer: 'There is no formal prerequisite, but Admin is a useful first step. It covers platform basics that support Developer topics, including data extensions, sendable relationships, subscriber management, automation, and account configuration. The Developer exam expects you to understand the platform before applying code.',
  },
  {
    question: 'Is Marketing Cloud Developer harder than MC Admin?',
    answer: 'Marketing Cloud Developer may be harder if you have not coded for marketing technology. It covers AMPscript for personalization, SSJS for server-side logic, REST/SOAP API integrations, and Guide Template Language (GTL) for dynamic content. Admin may feel harder if you have a development background but little marketing operations experience, because it tests configuration, deliverability, and data management.',
  },
  {
    question: 'What is AMPscript and is it tested heavily in MC Developer?',
    answer: 'AMPscript is Salesforce Marketing Cloud’s scripting language for creating dynamic, personalized email, landing page, and SMS content. It is a major technical topic in the Developer exam. Study its syntax, lookuprows functions, IF/ELSE logic, FOR loops, and SET/OUTPUT patterns for rendering personalized email content.',
  },
]

export default function MarketingCloudAdminVsDeveloperPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/marketing-cloud-admin-vs-developer" breadcrumbItems={breadcrumbItems} faqItems={faqItems} aboutEntities={['/certifications/marketing-cloud-engagement-admin', '/certifications/marketing-cloud-engagement-developer']} />

      <header data-lcp-header className="mb-10">
        <p className="inline-flex items-center rounded-full bg-salesforce-blue/10 px-3 py-1 text-sm font-medium text-salesforce-dark mb-4">
          Certification Comparison
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Marketing Cloud Engagement Admin vs Developer: Which Certification to Take?
        </h1>
        <LastUpdated />
        <p className="text-lg text-gray-600">
          These Marketing Cloud credentials cover different kinds of work. Admin focuses on account configuration and
          operations; Developer focuses on code and API integrations. Use your day-to-day tasks to decide which matches you.
        </p>
      </header>

      <ContentPageAuthor />
      <WhichFirstBlock
        certA={{
          name: "Marketing Cloud Engagement Admin",
          certSlug: "marketing-cloud-engagement-admin",
          examTipsSlug: "certifications/marketing-cloud-engagement-admin",
          conditions: [
          "You configure Marketing Cloud business units, users, or deliverability",
          "Your role covers platform administration or marketing operations",
          "You do not write AMPscript or SSJS at work",
          "You want to build a foundation in Marketing Cloud",
          ],
        }}
        certB={{
          name: "Marketing Cloud Engagement Developer",
          certSlug: "marketing-cloud-engagement-developer",
          examTipsSlug: "certifications/marketing-cloud-engagement-developer",
          conditions: [
          "You write AMPscript, SSJS, or custom content blocks",
          "You create API integrations with Marketing Cloud",
          "You work as a developer or technical consultant",
          "You want to focus on technical Marketing Cloud solutions",
          ],
        }}
        recommendation={{
          certName: "Marketing Cloud Engagement Admin",
          certSlug: "marketing-cloud-engagement-admin",
          examTipsSlug: "certifications/marketing-cloud-engagement-admin",
          reason: "Admin covers the account and data concepts behind many Marketing Cloud tasks. Take it first if you are new to the platform. If you already write AMPscript and build integrations, the Developer exam may better match your experience.",
          
        }}
      />

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Side-by-Side Comparison</h2>
        <div className="overflow-x-auto">
          <table className="min-w-[500px] w-full text-sm text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th scope="col" className="py-2.5 pr-4 font-semibold text-gray-900">Factor</th>
                <th scope="col" className="py-2.5 pr-4 font-semibold text-salesforce-blue">MC Engagement Administrator</th>
                <th scope="col" className="py-2.5 font-semibold text-purple-700">MC Engagement Developer</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr className="border-b border-gray-100">
                <td className="py-2.5 pr-4 font-medium">Primary Focus</td>
                <td className="py-2.5 pr-4">Account config, data management, automations, deliverability</td>
                <td className="py-2.5">AMPscript, SSJS, REST API, custom pages, dynamic content</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2.5 pr-4 font-medium">Coding Required</td>
                <td className="py-2.5 pr-4">No (declarative platform admin)</td>
                <td className="py-2.5">Yes (AMPscript, SSJS, REST/SOAP)</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2.5 pr-4 font-medium">Exam Format</td>
                <td className="py-2.5 pr-4">60 questions, 105 min, 67%, $200</td>
                <td className="py-2.5">60 questions, 105 min, 65%, $200</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2.5 pr-4 font-medium">Recommended Order</td>
                <td className="py-2.5 pr-4" colSpan={2}>Take Admin first, then Developer: Admin knowledge underlies all Developer scenarios.</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-medium">Best For</td>
                <td className="py-2.5 pr-4">Marketing ops teams, email campaign managers, SFMC admins</td>
                <td className="py-2.5">Front-end/MarTech developers building custom SFMC solutions</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-medium">Avg Salary</td>
                <td className="py-2.5 pr-4">$75–105k (US)</td>
                <td className="py-2.5">$85–120k (US)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Key Technical Skills: Developer Exam Focus</h2>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>AMPscript</strong>: Review variable declaration (VAR, SET), data retrieval (LOOKUP, LOOKUPROWS), conditional logic (IF/ELSEIF/ENDIF), loops (FOR/NEXT), and output functions (OUTPUT). These functions can personalize email bodies, subject lines, and landing pages.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>SSJS (Server-Side JavaScript)</strong>: Use it to work with Marketing Cloud APIs and data extensions on the server. It can handle complex logic, such as multi-step data changes when a landing page is submitted.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>REST API</strong>: Learn how to trigger sends, manage subscribers, and send campaign data to external systems. Key endpoints: /messaging/v1/messageDefinitionSends, /contacts/v1/contacts, /data/v1/async.</li>
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

      <RelatedGuides links={getRelatedGuides('marketing-cloud-admin-vs-developer')} />

            <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Decision Matrix: MC Admin or MC Developer?</h2>
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
                <td className="py-2.5 pr-4">Business user managing journeys, data extensions, and automations in Marketing Cloud</td>
                <td className="py-2.5 font-semibold text-salesforce-blue">MC Admin, platform configuration focus</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4">Writing AMPscript, SSJS, or building custom API integrations for Marketing Cloud</td>
                <td className="py-2.5 font-semibold text-purple-700">MC Developer, technical implementation credential</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4">Managing users, roles, security, and account configuration</td>
                <td className="py-2.5 font-semibold text-salesforce-blue">MC Admin</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4">Building dynamic content, custom preference centres, or API-triggered sends</td>
                <td className="py-2.5 font-semibold text-purple-700">MC Developer</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4">Both; which is more in demand in the job market?</td>
                <td className="py-2.5 font-semibold text-gray-700">MC Developer, higher salary premium for technical MC skills</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="rounded-xl border border-salesforce-blue/20 bg-salesforce-blue/5 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Start Preparing</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/certifications/marketing-cloud-engagement-admin#practice-questions" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-colors">
            MC Admin Practice Questions <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/certifications/marketing-cloud-engagement-developer#practice-questions" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            MC Developer Practice Questions
          </Link>
          <Link href="/certifications/email-specialist" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            Email Specialist Tips {RELEASE_CURRENT}
          </Link>
        </div>
      </section>
      <RelatedComparisons
        links={[
          { slug: "pardot-specialist-vs-pardot-consultant", label: "Pardot Specialist vs Consultant" },
          { slug: "sales-cloud-vs-service-cloud", label: "Sales Cloud vs Service Cloud" },
          { slug: "data-cloud-vs-crm-analytics", label: "Data Cloud vs CRM Analytics" },
        ]}
      />
    </div>
  )
}
