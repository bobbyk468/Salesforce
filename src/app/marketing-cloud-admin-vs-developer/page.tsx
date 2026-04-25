import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import RelatedGuides from '@/components/RelatedGuides'
import { getRelatedGuides } from '@/lib/related-guides-data'
import { RELEASE_CURRENT } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import WhichFirstBlock from '@/components/WhichFirstBlock'
import RelatedComparisons from '@/components/RelatedComparisons'



const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'

const pageTitle = 'Marketing Cloud Engagement Admin vs Developer: Which Cert to Take?'
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription =
  'Marketing Cloud Admin vs Developer: what each tests, who each is for. Which cert to take first. Free practice questions.'

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/marketing-cloud-admin-vs-developer` },
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
    answer: 'Marketing Cloud Engagement Administrator validates that you can configure and manage an SFMC account: data extensions, subscriber management, email deliverability, sendable relationships, automations, and account administration. Marketing Cloud Engagement Developer validates that you can build custom Marketing Cloud solutions using AMPscript, SSJS (Server-Side JavaScript), REST API, and custom landing pages. Admin is for platform operators; Developer is for those building custom solutions on top of the platform.',
  },
  {
    question: 'Do you need Marketing Cloud Admin before taking MC Developer?',
    answer: 'There is no official prerequisite, but taking Admin first is strongly recommended. The Admin exam covers platform fundamentals that the Developer exam assumes you already know: data structures (data extensions, sendable relationships), subscriber management, automation basics, and account configuration. Developer exam questions assume familiarity with the platform architecture before testing coding solutions.',
  },
  {
    question: 'Is Marketing Cloud Developer harder than MC Admin?',
    answer: 'Marketing Cloud Developer is generally harder for candidates without marketing technology coding experience. It requires proficiency in AMPscript (SFMC&apos;s scripting language for personalisation), SSJS for complex server-side logic, REST/SOAP API for external system integration, and Guide Template Language (GTL) for dynamic content. Admin is harder for pure developers who lack marketing operations knowledge — it tests configuration, deliverability, and data management topics that require platform familiarity.',
  },
  {
    question: 'What is AMPscript and is it tested heavily in MC Developer?',
    answer: 'AMPscript is Salesforce Marketing Cloud&apos;s proprietary scripting language used in email content, landing pages, and SMS messages to create dynamic, personalised content. It is the most heavily tested technical skill in the Marketing Cloud Developer exam — expect questions on AMPscript syntax, lookuprows functions, IF/ELSE logic, FOR loops for iterating rows, and SET/OUTPUT block patterns for rendering personalised content in emails.',
  },
]

export default function MarketingCloudAdminVsDeveloperPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/marketing-cloud-admin-vs-developer" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />

      <header data-lcp-header className="mb-10">
        <p className="inline-flex items-center rounded-full bg-salesforce-blue/10 px-3 py-1 text-sm font-medium text-salesforce-dark mb-4">
          Certification Comparison
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Marketing Cloud Engagement Admin vs Developer: Which Certification to Take?
        </h1>
        <p className="text-lg text-gray-600">
          Both Marketing Cloud certifications validate SFMC expertise, but Admin focuses on platform configuration
          and operations while Developer tests custom code and API skills. Here&apos;s how to choose.
        </p>
      </header>

      <ContentPageAuthor />
      <WhichFirstBlock
        certA={{
          name: "Marketing Cloud Engagement Admin",
          certSlug: "marketing-cloud-engagement-admin",
          examTipsSlug: "marketing-cloud-engagement-admin-exam-tips",
          conditions: [
          "You configure Marketing Cloud — Business Units, users, and deliverability",
          "You work in a platform admin or operations role within Marketing Cloud",
          "You do not write AMPscript or SSJS",
          "You want a foundational Marketing Cloud credential",
          ],
        }}
        certB={{
          name: "Marketing Cloud Engagement Developer",
          certSlug: "marketing-cloud-engagement-developer",
          examTipsSlug: "marketing-cloud-engagement-developer-exam-tips",
          conditions: [
          "You write AMPscript, SSJS, or custom content blocks",
          "You build API integrations with Marketing Cloud",
          "You come from a developer or technical consultant background",
          "You want the higher-salary Marketing Cloud credential",
          ],
        }}
        recommendation={{
          certName: "Marketing Cloud Engagement Admin",
          certSlug: "marketing-cloud-engagement-admin",
          examTipsSlug: "marketing-cloud-engagement-admin-exam-tips",
          reason: "Admin is the foundational credential — take it first to understand the platform architecture before adding Developer-level complexity. The exception: if you are already a developer with AMPscript experience, Developer is a better direct investment.",
          
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
                <td className="py-2.5 pr-4" colSpan={2}>Take Admin first, then Developer — Admin knowledge underlies all Developer scenarios.</td>
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
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>AMPscript</strong> — Variable declaration (VAR, SET), data retrieval (LOOKUP, LOOKUPROWS), conditional logic (IF/ELSEIF/ENDIF), loops (FOR/NEXT), and output functions (OUTPUT). Used in email body, subject lines, and landing pages.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>SSJS (Server-Side JavaScript)</strong> — Interacts with Marketing Cloud APIs and data extensions server-side; used for complex logic that AMPscript cannot handle, such as multi-step data manipulation on landing page submission.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>REST API</strong> — Triggering sends, managing subscribers, pulling campaign data into external systems. Key endpoints: /messaging/v1/messageDefinitionSends, /contacts/v1/contacts, /data/v1/async.</li>
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
                <td className="py-2.5 font-semibold text-salesforce-blue">MC Admin — platform configuration focus</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4">Writing AMPscript, SSJS, or building custom API integrations for Marketing Cloud</td>
                <td className="py-2.5 font-semibold text-purple-700">MC Developer — technical implementation credential</td>
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
                <td className="py-2.5 pr-4">Both — which is more in demand in the job market?</td>
                <td className="py-2.5 font-semibold text-gray-700">MC Developer — higher salary premium for technical MC skills</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="rounded-xl border border-salesforce-blue/20 bg-salesforce-blue/5 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Start Preparing</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/certifications/marketing-cloud-engagement-admin" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-colors">
            MC Admin Practice Questions <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/certifications/marketing-cloud-engagement-developer" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            MC Developer Practice Questions
          </Link>
          <Link href="/email-specialist-exam-tips" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
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
