import type { Metadata } from 'next'
import Link from '@/components/AppLink'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import WhichFirstBlock from '@/components/WhichFirstBlock'
import RelatedComparisons from '@/components/RelatedComparisons'
import LastUpdated from '@/components/LastUpdated'



const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const pageTitle = `Salesforce Admin vs Developer Career Paths (${RELEASE_CURRENT})`
const pageDescription = `Compare Salesforce Administrator and Developer careers by work, pay, progression, certifications, and fit by background.`
export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: {
    canonical: `${siteUrl}/salesforce-admin-vs-developer-career`,
    languages: { 'en-US': `${siteUrl}/salesforce-admin-vs-developer-career`, 'x-default': `${siteUrl}/salesforce-admin-vs-developer-career` },
  },
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
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Certification Comparison', url: '/certification-comparison' },
  { name: 'Salesforce Admin vs Developer Career', url: '/salesforce-admin-vs-developer-career' },
]

const faqItems = [
  {
    question: 'Is it better to be a Salesforce Admin or Developer?',
    answer: 'The right path depends on the work you enjoy. Admins configure Salesforce, shape processes, and support users. Developers build with Apex and LWC, connect systems, and handle complex automation. Developers typically earn 10–20% more at equivalent experience levels, while admin roles are more common and may be easier to enter without programming experience.',
  },
  {
    question: 'What does a Salesforce Administrator do day to day?',
    answer: 'A Salesforce Administrator manages access, customizes objects and page layouts, builds automation with tools such as flows, creates reports, troubleshoots user issues, and responds to business requests. The work includes configuring Salesforce, training users, and documenting processes. Most time is spent in the Salesforce interface rather than writing code.',
  },
  {
    question: 'What does a Salesforce Developer do day to day?',
    answer: 'A Salesforce Developer writes and maintains Apex, builds Lightning Web Components (LWC), connects Salesforce to other systems through APIs, reviews code, and investigates technical issues. Developers work with tools such as VS Code, Developer Console, sandboxes, and version control. They typically spend 60–70% of their time coding or reviewing code.',
  },
  {
    question: 'Can I switch from Salesforce Admin to Developer?',
    answer: 'Yes. Many developers begin as admins. Earn Platform Developer I after Administrator, build Apex and LWC projects in a sandbox, and look for roles that combine configuration and development, such as Salesforce Consultant or Platform Developer at a smaller firm. Admin experience can help you understand the business needs behind the code.',
  },
  {
    question: 'Which certifications do I need for Admin vs Developer careers?',
    answer: 'For an admin career, start with Salesforce Administrator (ADM-201), then consider Advanced Administrator or a specialization such as CPQ or Service Cloud. For development, build on Administrator with Platform Developer I (PD1), then Platform Developer II (PD2). Admin knowledge is useful for developers because it covers the platform they build on.',
  },
]

export default function SalesforceAdminVsDeveloperCareerPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/salesforce-admin-vs-developer-career" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />

      <div data-lcp-header className="mb-10">
        <div className="inline-flex items-center gap-2 bg-salesforce-blue/10 text-salesforce-dark text-sm font-semibold px-3 py-1 rounded-full mb-4">
          <span>Career Guide</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          Salesforce Admin vs Developer Career Paths ({RELEASE_CURRENT})
        </h1>
        <LastUpdated />
        <p className="text-lg text-gray-600">
          Salesforce admins and developers solve different problems on the same platform. Compare their daily work, technical requirements, and likely progression to see which path better fits your interests.
        </p>
      </div>

      <ContentPageAuthor />
      <WhichFirstBlock
        certA={{
          name: "Salesforce Administrator",
          certSlug: "administrator",
          examTipsSlug: "certifications/administrator",
          conditions: [
          "You prefer configuring Salesforce and improving business processes",
          "You want to start with a credential used for many admin roles",
          "Your background is in operations, project management, or another non-technical field",
          "You want to explore a common entry point into the Salesforce job market",
          ],
        }}
        certB={{
          name: "Platform Developer I",
          certSlug: "developer-1",
          examTipsSlug: "certifications/developer-1",
          conditions: [
          "You enjoy writing code and want to build Apex and LWC features",
          "You have experience in software development or computer science",
          "You want to pursue technical roles on the Salesforce platform",
          "You can spend 3–6 months preparing for the technical exam",
          ],
        }}
        recommendation={{
          certName: "Salesforce Administrator",
          certSlug: "administrator",
          examTipsSlug: "certifications/administrator",
          reason: "Administrator helps you learn the platform and is useful in both admin and development roles. Start there if you are new to Salesforce. If you already have a programming background and want to build features in code, Platform Developer I may be a closer match.",
          careerPathSlug: "which-salesforce-certification-first",
          careerPathLabel: "Which Certification First Guide",
        }}
      />

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
          <Link href="/certifications/administrator" className="inline-block mt-4 text-sm font-semibold text-salesforce-blue hover:underline">Administrator Study Guide →</Link>
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
          <Link href="/certifications/developer-2" className="inline-block mt-4 text-sm font-semibold text-salesforce-blue hover:underline">Developer Study Guide →</Link>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Key Differences</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100">
                <th scope="col" className="text-left py-2 pr-4 text-gray-600 font-medium">Aspect</th>
                <th scope="col" className="text-left py-2 pr-4 text-gray-600 font-medium">Administrator</th>
                <th scope="col" className="text-left py-2 text-gray-600 font-medium">Developer</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {[
                { aspect: 'Primary output', admin: 'Config, flows, reports', dev: 'Code (Apex, LWC), integrations' },
                { aspect: 'Coding required', admin: 'Minimal or none', dev: 'Yes: Apex, JavaScript, SOQL' },
                { aspect: 'Entry barrier', admin: 'Lower, declarative focus', dev: 'Higher, programming background helps' },
                { aspect: 'Stakeholder contact', admin: 'High, business users, analysts', dev: 'Moderate: PMs, architects' },
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
        <p className="text-sm text-gray-700 mb-2">Some roles combine configuration and development. Consultancies and mid-size firms may hire Salesforce Consultants, Technical Consultants, or Platform Developers who can work across both areas. These positions often ask for Administrator and Platform Developer I, making an admin foundation followed by PD1 one possible route into hybrid work.</p>
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

            <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Decision Matrix: Admin Career or Developer Career?</h2>
        <div className="overflow-x-auto">
          <table className="min-w-[500px] w-full text-sm text-left border-collapse">
            <thead><tr className="border-b-2 border-gray-200">
              <th scope="col" className="py-2.5 pr-4 font-semibold text-gray-900">Your Background &amp; Goals</th>
              <th scope="col" className="py-2.5 font-semibold text-emerald-700">Choose This Path</th>
            </tr></thead>
            <tbody className="text-gray-700 divide-y divide-gray-100">
              <tr><td className="py-2.5 pr-4">No programming experience, comfortable with configuration tools</td><td className="py-2.5 font-semibold text-salesforce-blue">Admin path: ADM-201 → Advanced Admin or Consultant</td></tr>
              <tr><td className="py-2.5 pr-4">Have Java, Python, or any programming background</td><td className="py-2.5 font-semibold text-purple-700">Developer path: PD1 → PD2 → Architect track</td></tr>
              <tr><td className="py-2.5 pr-4">Want to get employed in Salesforce within 3–6 months</td><td className="py-2.5 font-semibold text-salesforce-blue">Admin, faster to cert, more entry-level openings</td></tr>
              <tr><td className="py-2.5 pr-4">Targeting $120k+ senior roles long-term</td><td className="py-2.5 font-semibold text-purple-700">Developer, higher salary ceiling ($130–160k at senior level)</td></tr>
              <tr><td className="py-2.5 pr-4">Prefer business analysis, process design, and user training</td><td className="py-2.5 font-semibold text-salesforce-blue">Admin: BA and Consultant tracks suit this well</td></tr>
              <tr><td className="py-2.5 pr-4">Enjoy debugging, building custom solutions, and integration work</td><td className="py-2.5 font-semibold text-purple-700">Developer: Apex, LWC, and Integration Architect tracks</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <div className="bg-salesforce-blue rounded-xl p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-2">Practice for Your Path</h2>
        <p className="text-white mb-6">Use free practice questions to prepare for Administrator or Platform Developer certifications.</p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/certifications/administrator" className="inline-flex items-center px-5 py-3 bg-white text-salesforce-blue rounded-lg font-semibold hover:bg-blue-50 transition-colors text-sm">
            Administrator Practice
          </Link>
          <Link href="/certifications" className="inline-flex items-center px-5 py-3 border border-white/40 text-white rounded-lg font-semibold hover:bg-white/10 transition-colors text-sm">
            All Certifications
          </Link>
        </div>
      </div>
      <RelatedComparisons
        links={[
          { slug: "adm-201-vs-app-builder", label: "ADM-201 vs App Builder" },
          { slug: "app-builder-vs-developer-i", label: "App Builder vs Platform Developer I" },
          { slug: "pd1-vs-pd2", label: "Platform Developer I vs II" },
        ]}
      />
    </div>
  )
}
