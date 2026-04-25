import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import WhichFirstBlock from '@/components/WhichFirstBlock'


const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'

const pageTitle = 'Administrator vs Advanced Administrator: Which Next?'
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription =
  'Compare Salesforce Administrator (ADM-201) and Advanced Administrator: difficulty, topics, career value, study time. When to upgrade.'

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/administrator-vs-advanced-administrator` },
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
  { name: 'Administrator vs Advanced Administrator', url: '/administrator-vs-advanced-administrator' },
]

const faqItems = [
  {
    question: 'Do you need ADM-201 before taking Advanced Administrator?',
    answer: 'Yes. The Salesforce Advanced Administrator certification requires the Salesforce Administrator (ADM-201) certification as a prerequisite. You cannot sit the Advanced Administrator exam without first passing ADM-201.',
  },
  {
    question: 'Is the Advanced Administrator exam harder than ADM-201?',
    answer: 'Yes — Advanced Administrator is widely considered significantly harder. It assumes you already know everything in ADM-201 and tests deeper configuration skills: complex automation (multi-step Flows, scheduled triggers), advanced sharing and security, change sets and deployment, and complex reporting with cross-object formulas. Most candidates recommend 1–2 years of hands-on admin experience before attempting it.',
  },
  {
    question: 'How long should I wait between ADM-201 and Advanced Administrator?',
    answer: 'Salesforce recommends having at least 1–2 years of Salesforce administration experience before taking the Advanced Administrator exam. Rushing to the Advanced Administrator immediately after ADM-201 is generally not advisable — the exam tests practical depth that comes from real org administration experience, not just study.',
  },
  {
    question: 'Which certification is worth more: Administrator or Advanced Administrator?',
    answer: 'Both are valuable, but Advanced Administrator commands higher salaries and is often required for senior admin roles. In 2026, having both certifications (or ADM-201 + a specialist certification like Sales Cloud or Service Cloud Consultant) significantly increases hiring competitiveness compared to ADM-201 alone.',
  },
]

export default function AdministratorVsAdvancedAdministratorPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/administrator-vs-advanced-administrator" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />

      <header data-lcp-header className="mb-10">
        <p className="inline-flex items-center rounded-full bg-salesforce-blue/10 px-3 py-1 text-sm font-medium text-salesforce-dark mb-4">
          Certification Comparison
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Salesforce Administrator vs Advanced Administrator: When to Upgrade Your Cert
        </h1>
        <p className="text-lg text-gray-600">
          ADM-201 gets you into Salesforce admin roles. Advanced Administrator (ADM-211) signals senior-level mastery.
          This guide explains the difference, the right timing to upgrade, and what extra depth the Advanced exam requires.
        </p>
      </header>

      <ContentPageAuthor />
      <WhichFirstBlock
        certA={{
          name: "Salesforce Administrator",
          certSlug: "administrator-practice-test",
          examTipsSlug: "adm-201-exam-tips",
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
          examTipsSlug: "advanced-administrator-exam-tips",
          conditions: [
          "You already hold the Administrator certification",
          "You have 2+ years of hands-on Salesforce admin experience",
          "You work with advanced automation, territory management, or Salesforce Connect",
          "You are targeting senior admin or platform manager roles",
          ],
        }}
        recommendation={{
          certName: "Salesforce Administrator",
          certSlug: "administrator-practice-test",
          examTipsSlug: "adm-201-exam-tips",
          reason: "Administrator is the mandatory first step — Advanced Administrator explicitly tests you on Admin concepts plus additional depth. You cannot reasonably attempt Advanced Admin without first having mastered the Admin credential.",
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
                <td className="py-2.5 pr-4">Moderate — broad coverage</td>
                <td className="py-2.5">Hard — deep practical knowledge required</td>
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
        <h2 className="text-xl font-bold text-gray-900 mb-3">What Advanced Administrator Tests That ADM-201 Doesn&apos;t</h2>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Complex automation</strong> — Multi-step Flows with decision elements, fault paths, loops, and scheduled triggers. ADM-201 tests basic Flow creation; Advanced Admin tests Flow architecture for complex business processes.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Advanced sharing and security</strong> — Sharing rules, manual sharing, team-based access, territory management, and field-level security at scale. ADM-201 covers OWD; Advanced Admin tests complex sharing scenarios.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Change sets and deployment</strong> — Deploying metadata between sandboxes and production using change sets, understanding deployment dependencies, and validating deployments before going live.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Advanced analytics</strong> — Complex reports with cross-object formulas, joined reports, exception reports, and CRM Analytics (Einstein) dashboards beyond basic report builder.</li>
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
                <td className="py-2.5 pr-4">New to Salesforce or admin role &lt; 6 months</td>
                <td className="py-2.5 font-semibold text-salesforce-blue">ADM-201 — required first</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4">Certified ADM-201 with 2+ years of admin experience</td>
                <td className="py-2.5 font-semibold text-purple-700">Advanced Admin — natural next step</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4">Manage complex security models, Territory Management, or sharing rules</td>
                <td className="py-2.5 font-semibold text-purple-700">Advanced Admin — these are core topics</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4">Want to target Senior Admin or Lead Admin roles</td>
                <td className="py-2.5 font-semibold text-purple-700">Advanced Admin — the credential employers look for at senior level</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4">Pursuing Consultant or Architect certification tracks</td>
                <td className="py-2.5 font-semibold text-salesforce-blue">ADM-201 first — prerequisite for most Consultant exams</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4">Work regularly with automation (Record-Triggered Flows, Scheduled Flows)</td>
                <td className="py-2.5 font-semibold text-purple-700">Advanced Admin — automation is heavily tested at this level</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="rounded-xl border border-salesforce-blue/20 bg-salesforce-blue/5 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Start Preparing</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/certifications/administrator" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-colors">
            ADM-201 Practice Questions <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/certifications/advanced-administrator" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            Advanced Admin Practice Questions
          </Link>
          <Link href="/admin-certification-path" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            Admin Cert Path {RELEASE_CURRENT}
          </Link>
        </div>
      </section>
    </div>
  )
}
