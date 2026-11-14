import Link from '@/components/AppLink'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import { AdminCertRoadmap } from '@/components/CertRoadmapSvg'
import RoadmapWithDownload from '@/components/RoadmapWithDownload'
import type { Metadata } from 'next'
import { buildPathTitle } from '@/lib/seo-title-helpers'
import LastUpdated from '@/components/LastUpdated'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'

const pageTitle = buildPathTitle('Admin')
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription =
  `Salesforce admin cert path (${RELEASE_CURRENT}): right order for ADM-201, Advanced Admin, App Builder, and beyond. Start free practice.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: {
    canonical: `${siteUrl}/admin-certification-path`,
    languages: { 'en-US': `${siteUrl}/admin-certification-path`, 'x-default': `${siteUrl}/admin-certification-path` },
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/admin-certification-path`,
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
  { name: 'Admin Certification Path', url: '/admin-certification-path' },
]

const faqItems = [
  {
    question: 'What is the Salesforce admin certification path?',
    answer: 'Begin with ADM-201 (Salesforce Administrator), then consider Advanced Administrator and Platform App Builder. After that, choose a specialist credential such as Service Cloud, Sales Cloud, or Field Service based on your career goals.',
  },
  {
    question: 'Do you need any prerequisites for the ADM-201 exam?',
    answer: 'ADM-201 has no official prerequisites, but Salesforce recommends 6+ months of hands-on experience. Salesforce also advises completing the Administrator Trailmix on Trailhead before taking the exam.',
  },
  {
    question: 'How long does the Salesforce admin certification path take?',
    answer: 'Plan for 1–3 months of study for ADM-201. Earning several specialist certifications usually takes 2–3 years, depending on your pace and access to hands-on project work.',
  },
  {
    question: 'What jobs does Salesforce admin certification lead to?',
    answer: 'ADM-201 can support applications for roles such as Salesforce Admin ($70–100k), Senior Admin ($90–130k), Business Analyst, Functional Consultant, and Platform Manager. Additional certifications can help you qualify for senior and specialist roles.',
  },
]

const pathSteps = [
  {
    step: 1,
    title: 'Salesforce Administrator (ADM-201)',
    slug: 'administrator',
    badge: 'Start Here',
    badgeColor: 'bg-emerald-100 text-emerald-800',
    fee: '$200',
    passingScore: '68%',
    prereq: 'None',
    timeEstimate: '6–8 weeks',
    why: 'ADM-201 is the foundation of the admin track and the most widely held Salesforce credential. It covers core admin work, including security, Flow Builder, data management, reports, dashboards, and sales and service setup. Many Salesforce admin roles require it, making it a common starting point for this career path.',
    topics: ['Security model (OWD, roles, profiles, permission sets)', 'Flow Builder and approval processes', 'Reports and dashboards', 'Data import and management', 'Cases and Knowledge basics'],
  },
  {
    step: 2,
    title: 'Salesforce Platform App Builder (DEV-402)',
    slug: 'app-builder',
    badge: 'Recommended Second',
    badgeColor: 'bg-blue-100 text-blue-800',
    fee: '$200',
    passingScore: '68%',
    prereq: 'None (ADM-201 strongly recommended)',
    timeEstimate: '4–6 weeks',
    why: 'App Builder tests your ability to design and build Salesforce apps with declarative tools. It builds on ADM-201 and adds data modelling, app design, and Lightning app configuration. Some admin roles ask for both ADM-201 and App Builder to show a broader set of declarative skills.',
    topics: ['Custom object modelling', 'Complex field types (formula, roll-up)', 'Lightning app design', 'Page layout and record type strategy', 'Automation design patterns'],
  },
  {
    step: 3,
    title: 'Salesforce Advanced Administrator',
    slug: 'advanced-administrator',
    badge: 'Senior Admin',
    badgeColor: 'bg-purple-100 text-purple-800',
    fee: '$200',
    passingScore: '65%',
    prereq: 'ADM-201 recommended',
    timeEstimate: '6–8 weeks',
    why: 'Advanced Administrator builds on ADM-201 with more complex automation, such as advanced Flow patterns and approval processes with conditional logic; advanced security, including delegated administration and custom sharing rules; and advanced reporting, such as joined reports and custom report types. Consider it for senior admin roles or before pursuing consultant certifications.',
    topics: ['Advanced Flow patterns (subflows, fault paths)', 'Delegated administration', 'Complex sharing rules and territory management', 'Change sets and deployment', 'Advanced analytics (joined reports, dynamic dashboards)'],
  },
  {
    step: 4,
    title: 'Salesforce Sales Cloud Consultant or Service Cloud Consultant',
    slug: 'sales-cloud',
    badge: 'Specialise',
    badgeColor: 'bg-orange-100 text-orange-800',
    fee: '$200',
    passingScore: '68%',
    prereq: 'ADM-201 required',
    timeEstimate: '6–8 weeks',
    why: 'After ADM-201 and App Builder, consultant certifications let you focus on a business area. Sales Cloud Consultant covers CRM implementation, the lead-to-close process, forecasting, and territory management. Service Cloud Consultant covers case management, Omni-Channel, entitlements, and Knowledge. Choose the one that fits your current client work or target role.',
    topics: ['Sales: lead conversion, products/price books, forecasting', 'Service: case management, Omni-Channel routing, entitlements', 'Solution design scenarios', 'Business requirement analysis', 'Deployment and adoption strategy'],
  },
]

export default function AdminCertificationPathPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/admin-certification-path" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />

      <header data-lcp-header className="mb-10">
        <p className="inline-flex items-center rounded-full bg-salesforce-blue/10 px-3 py-1 text-sm font-medium text-salesforce-dark mb-4">
          Admin Track · {RELEASE_CURRENT}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Salesforce Admin Certification Path ({RELEASE_CURRENT})
        </h1>
        <LastUpdated />
        <p className="text-lg text-gray-600">
          Start with ADM-201, then choose whether to focus on App Builder, Advanced Administrator, or consulting. This guide shows a suggested sequence for different roles and career goals.
        </p>
      </header>

      <ContentPageAuthor />

      <RoadmapWithDownload downloadFilename="salesforce-admin-cert-roadmap.png">
        <AdminCertRoadmap />
      </RoadmapWithDownload>

      {/* Quick guidance */}
      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Start Here: Which Cert Based on Your Goal</h2>
        <div className="space-y-2 text-sm text-gray-700">
          <div className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><span><strong>New to Salesforce:</strong> Start with ADM-201. It is a common entry credential and a prerequisite for many consultant certifications.</span></div>
          <div className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><span><strong>Have ADM-201 and want to build custom apps:</strong> Consider App Builder next. It builds on admin skills and can support solution design work.</span></div>
          <div className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><span><strong>Have ADM-201 and want a senior admin role:</strong> Advanced Administrator is a natural next step. Many large organizations list it for Senior Salesforce Administrator roles.</span></div>
          <div className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><span><strong>Want consulting or implementation work:</strong> After ADM-201, you can add App Builder and then pursue Sales Cloud or Service Cloud Consultant.</span></div>
        </div>
      </section>

      {/* Path steps */}
      <div className="space-y-8 mb-10">
        {pathSteps.map((item, idx) => (
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

            <div className="mt-4 flex flex-wrap gap-4">
              <Link
                href={`/certifications/${item.slug}`}
                className="inline-flex items-center gap-1 py-1 text-xs text-salesforce-blue font-medium hover:underline"
              >
                View study guide + practice questions
                <ArrowRight className="h-3 w-3" />
              </Link>
              {idx === 0 && (
                <Link
                  href="/certifications/administrator"
                  className="inline-flex items-center gap-1 py-1 text-xs text-salesforce-blue font-medium hover:underline"
                >
                  ADM-201 complete study guide →
                </Link>
              )}
              {idx === 0 && (
                <Link
                  href="/adm-201-vs-app-builder"
                  className="inline-flex items-center gap-1 py-1 text-xs text-salesforce-blue font-medium hover:underline"
                >
                  ADM-201 vs App Builder comparison →
                </Link>
              )}
            </div>
          </section>
        ))}
      </div>

      {/* Timeline */}
      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">How Long Does the Admin Path Take?</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th scope="col" className="text-left py-2 pr-4 font-semibold text-gray-700">Goal</th>
                <th scope="col" className="text-left py-2 pr-4 font-semibold text-gray-700">Certs Needed</th>
                <th scope="col" className="text-left py-2 font-semibold text-gray-700">Timeline</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-gray-600">
              <tr>
                <td className="py-2 pr-4">Entry Salesforce admin role</td>
                <td className="py-2 pr-4">ADM-201</td>
                <td className="py-2">2–3 months</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">Admin + app customisation role</td>
                <td className="py-2 pr-4">ADM-201 + App Builder</td>
                <td className="py-2">4–5 months</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">Senior admin / Salesforce specialist</td>
                <td className="py-2 pr-4">ADM-201 + App Builder + Advanced Admin</td>
                <td className="py-2">8–12 months</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">Salesforce consultant / implementation role</td>
                <td className="py-2 pr-4">ADM-201 + Consultant cert</td>
                <td className="py-2">6–9 months</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-xl border border-salesforce-blue/20 bg-salesforce-blue/5 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Start the Admin Path</h2>
        <p className="text-sm text-gray-700 mb-4">
          Start with the ADM-201 study guide and practice questions, or explore the full Administrator certification hub:
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/certifications/administrator"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-colors"
          >
            ADM-201 Study Guide
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/how-to-become-salesforce-administrator"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            How to Become an Admin
          </Link>
          <Link
            href="/certifications/role/administrator"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            Browse All Admin Certs
          </Link>
          <Link
            href="/certifications/administrator"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            ADM-201 Exam Tips {RELEASE_CURRENT}
          </Link>
        </div>
      </section>
    </div>
  )
}
