import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import { AdminCertRoadmap } from '@/components/CertRoadmapSvg'
import RoadmapWithDownload from '@/components/RoadmapWithDownload'
import type { Metadata } from 'next'
import { buildPathTitle } from '@/lib/seo-title-helpers'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'

const pageTitle = buildPathTitle('Admin')
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription =
  `Salesforce admin cert path (${RELEASE_CURRENT}): right order for ADM-201, Advanced Admin, App Builder, and beyond. Start free practice.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/admin-certification-path` },
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
  keywords:
    `Salesforce admin certification path ${RELEASE_CURRENT}, how to become Salesforce administrator, Salesforce admin career path, ADM-201 path, Salesforce Advanced Admin cert order`,
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Salesforce Admin Certification Path', url: '/admin-certification-path' },
]

const faqItems = [
  {
    question: 'What is the Salesforce admin certification path?',
    answer: 'The admin path starts with ADM-201 (Salesforce Administrator), then progresses to Advanced Administrator and Platform App Builder, followed by specialist credentials like Service Cloud, Sales Cloud, or Field Service depending on your career focus.',
  },
  {
    question: 'Do you need any prerequisites for the ADM-201 exam?',
    answer: 'No official prerequisites exist for ADM-201. However, Salesforce recommends 6+ months of hands-on experience. Completing the Salesforce Administrator Trailmix on Trailhead before the exam is strongly advised.',
  },
  {
    question: 'How long does the Salesforce admin certification path take?',
    answer: 'ADM-201 takes 1–3 months of study. The full path to multiple specialist certifications typically takes 2–3 years, depending on your pace and access to hands-on project experience.',
  },
  {
    question: 'What jobs does Salesforce admin certification lead to?',
    answer: 'ADM-201 opens roles such as Salesforce Admin ($70–100k), Senior Admin ($90–130k), Business Analyst, Functional Consultant, and Platform Manager. Each additional certification strengthens your position for senior and specialist roles.',
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
    passingScore: '65%',
    prereq: 'None',
    timeEstimate: '6–8 weeks',
    why: 'ADM-201 is the foundation of the admin track and the most widely held Salesforce credential. It tests every core admin function: security model, automation (Flow Builder), data management, reports and dashboards, and the sales/service application setup. Almost every Salesforce admin role lists this as a requirement — it is the starting point for any admin career path.',
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
    why: 'App Builder validates your ability to design and build custom Salesforce applications using declarative tools. It builds directly on ADM-201 fundamentals and adds data modelling depth, complex app design patterns, and Lightning app configuration. Many admin roles expect both ADM-201 and App Builder — together they show full declarative build capability.',
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
    why: 'The Advanced Administrator cert goes deeper on every topic from ADM-201: complex automation (advanced Flow patterns, approval processes with conditional logic), advanced security configurations (delegated administration, custom sharing rules, Apex-managed sharing), and advanced reporting (cross-object formulas, joined reports, custom report types). Target this for senior admin roles or before moving to Consultant certs.',
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
    why: 'Once you have ADM-201 and App Builder, Consultant certifications let you specialise by business domain. Sales Cloud Consultant focuses on CRM implementation — lead-to-opportunity-to-close process, forecasting, and territory management. Service Cloud Consultant focuses on case management, Omni-Channel, entitlements, and Knowledge. Choose the one that matches your current client work or job market target.',
    topics: ['Sales: lead conversion, products/price books, forecasting', 'Service: case management, Omni-Channel routing, entitlements', 'Solution design scenarios', 'Business requirement analysis', 'Deployment and adoption strategy'],
  },
]

export default function AdminCertificationPathPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/admin-certification-path" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />

      <header data-lcp-header className="mb-10">
        <p className="inline-flex items-center rounded-full bg-salesforce-blue/10 px-3 py-1 text-sm font-medium text-salesforce-blue mb-4">
          Admin Track · {RELEASE_CURRENT}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Salesforce Admin Certification Path ({RELEASE_CURRENT})
        </h1>
        <p className="text-lg text-gray-600">
          The Salesforce administrator certification path starts with ADM-201 and branches into App Builder,
          Advanced Admin, and Consultant specialisations. This guide maps the optimal sequence based on your
          current role and career goal.
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
          <div className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><span><strong>New to Salesforce:</strong> Start with ADM-201. It is the fastest path to a hirable Salesforce credential and the prerequisite for most Consultant certifications.</span></div>
          <div className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><span><strong>Have ADM-201, want to build custom apps:</strong> Take App Builder next. It pairs naturally with admin work and opens solution design roles.</span></div>
          <div className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><span><strong>Have ADM-201, targeting senior admin roles:</strong> Advanced Administrator is the direct next step. Many large enterprise orgs list it for Senior Salesforce Administrator positions.</span></div>
          <div className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><span><strong>Targeting consulting or implementation roles:</strong> After ADM-201 (+ App Builder optionally), move directly to Sales Cloud or Service Cloud Consultant. These are the most job-market relevant credentials for Salesforce consulting careers.</span></div>
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
                className="inline-flex items-center gap-1 text-xs text-salesforce-blue font-medium hover:underline"
              >
                View study guide + practice questions
                <ArrowRight className="h-3 w-3" />
              </Link>
              {idx === 0 && (
                <Link
                  href="/adm-201-study-guide"
                  className="inline-flex items-center gap-1 text-xs text-salesforce-blue font-medium hover:underline"
                >
                  ADM-201 complete study guide →
                </Link>
              )}
              {idx === 0 && (
                <Link
                  href="/adm-201-vs-app-builder"
                  className="inline-flex items-center gap-1 text-xs text-salesforce-blue font-medium hover:underline"
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
          Begin with the ADM-201 study guide and practice questions, or browse the full administrator certification hub:
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/adm-201-study-guide"
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
            href="/adm-201-exam-tips-2026"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            ADM-201 Exam Tips {RELEASE_CURRENT}
          </Link>
        </div>
      </section>
    </div>
  )
}
