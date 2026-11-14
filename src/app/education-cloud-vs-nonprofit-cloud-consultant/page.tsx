import type { Metadata } from 'next'
import Link from '@/components/AppLink'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import RelatedGuides from '@/components/RelatedGuides'
import { getRelatedGuides } from '@/lib/related-guides-data'
import { RELEASE_YEAR } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import RelatedComparisons from '@/components/RelatedComparisons'
import LastUpdated from '@/components/LastUpdated'



const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const pageTitle = `Education Cloud vs Nonprofit Cloud Consultant (${RELEASE_YEAR})`
const pageDescription = 'Compare Education Cloud and Nonprofit Cloud by use case, data model, and available guide scope before choosing a study path.'

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: {
    canonical: `${siteUrl}/education-cloud-vs-nonprofit-cloud-consultant`,
    languages: { 'en-US': `${siteUrl}/education-cloud-vs-nonprofit-cloud-consultant`, 'x-default': `${siteUrl}/education-cloud-vs-nonprofit-cloud-consultant` },
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/education-cloud-vs-nonprofit-cloud-consultant`,
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
  { name: 'Education Cloud vs Nonprofit Cloud Consultant', url: '/education-cloud-vs-nonprofit-cloud-consultant' },
]

const faqItems = [
  {
    question: 'What is the difference between Education Cloud and Nonprofit Cloud?',
    answer: 'Education Cloud supports education needs, including learning and fundraising workflows. Nonprofit Cloud supports nonprofit workflows. Product features and data models vary, so check the latest product documentation and the organization’s setup. Do not assume every Education Cloud org uses EDA or every Nonprofit Cloud org uses NPSP.',
  },
  {
    question: 'How should I use the Education Cloud Consultant material?',
    answer: 'Exam registration is closed, and Salesforce has scheduled formal retirement for February 1, 2027. Do not plan to book the exam based on this guide. Check your eligibility with Salesforce and review current product documentation and the target organization’s data model.',
  },
  {
    question: 'How should I compare the certification scope?',
    answer: 'Compare the objectives in the current official certification guides, then confirm product and data-model details in Salesforce documentation. Education Cloud documentation covers objects for learning and fundraising. EDA and NPSP have compatibility limits, so do not assume they can be used together in one organization.',
  },
  {
    question: 'Can EDA and NPSP be used together in one organization?',
    answer: 'Salesforce Help says EDA and NPSP are incompatible in the same organization. Check the latest compatibility guidance before designing or assessing an implementation.',
  },
  {
    question: 'Are these certifications valuable outside their specific sector?',
    answer: 'The fit depends on the product and workflows used in your role or project. Compare the official guides with the job responsibilities. This page does not rank employer demand or predict career outcomes.',
  },
]

export default function EducationCloudVsNonprofitCloudConsultantPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/education-cloud-vs-nonprofit-cloud-consultant" breadcrumbItems={breadcrumbItems} faqItems={faqItems} aboutEntities={['/certifications/education-cloud-consultant', '/certifications/nonprofit-cloud']} />

      <div data-lcp-header className="mb-10">
        <div className="inline-flex items-center gap-2 bg-salesforce-blue/10 text-salesforce-dark text-sm font-semibold px-3 py-1 rounded-full mb-4">
          <span>Industry Cloud Comparison</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          Education Cloud Consultant (exam closed) vs Nonprofit Cloud Consultant ({RELEASE_YEAR})
        </h1>
        <LastUpdated />
        <p className="text-lg text-gray-600">
          Registration for Education Cloud Consultant has closed, and Salesforce schedules formal retirement for February 1, 2027. Confirm eligibility with Salesforce and check the product scope before using study material.
        </p>
      </div>

      <ContentPageAuthor />
      <section className="my-10 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-bold text-gray-900 mb-2">Choosing current study material</h2>
        <p className="text-sm text-gray-700">Registration for Education Cloud Consultant has closed, and Salesforce has scheduled formal retirement for February 1, 2027. Do not treat the exam as open for booking. Check eligibility and lifecycle details in the <a className="text-salesforce-blue hover:underline" href="https://help.salesforce.com/s/articleView?id=005298934&amp;language=en_US&amp;type=1" target="_blank" rel="noreferrer nofollow noopener">Salesforce issuer notice</a>. For current planning, review the Nonprofit Cloud Consultant guide and confirm that its objectives match your target product and data model.</p>
      </section>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
        <div className="bg-white rounded-xl border-2 border-salesforce-blue p-6 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-bold text-gray-900">Education Cloud Consultant</h2>
            <span className="text-xs font-semibold bg-salesforce-blue/10 text-salesforce-dark px-2 py-0.5 rounded-full">Higher Ed / K-12</span>
          </div>
          <div className="space-y-2 text-sm text-gray-700 mb-4">
            <p className="text-sm text-gray-700 mb-4">Exam registration is closed, and formal credential retirement is scheduled for February 1, 2027. Read the <a className="text-salesforce-blue hover:underline" href="https://help.salesforce.com/s/articleView?id=005298934&amp;language=en_US&amp;type=1" target="_blank" rel="noreferrer nofollow noopener">issuer lifecycle notice</a>. For product study, review learning, student, and fundraising workflows, and check whether the organization uses Education Cloud, EDA, or another setup. See the <a className="text-salesforce-blue hover:underline" href="https://resources.docs.salesforce.com/latest/latest/en-us/sfdc/pdf/edu_cloud_dev_guide.pdf" target="_blank" rel="noreferrer nofollow noopener">Salesforce Education Cloud developer guide</a>.</p>
          </div>
          <Link href="/certifications/education-cloud-consultant" className="block py-1 text-center text-xs font-semibold text-salesforce-blue hover:underline">Study Guide →</Link>
        </div>

        <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-bold text-gray-900">Nonprofit Cloud Consultant</h2>
            <span className="text-xs font-semibold bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">Nonprofits / Charities</span>
          </div>
          <div className="space-y-2 text-sm text-gray-700 mb-4">
            <p className="text-sm text-gray-700 mb-4">Use the current guide to review nonprofit workflows and product scope. Check whether the organization uses Nonprofit Cloud, NPSP, or another setup.</p>
          </div>
          <Link href="/certifications/nonprofit-cloud" className="block py-1 text-center text-xs font-semibold text-salesforce-blue hover:underline">Study Guide →</Link>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Sector &amp; Use Case Comparison</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100">
                <th scope="col" className="text-left py-2 pr-4 text-gray-600 font-medium">Area</th>
                <th scope="col" className="text-left py-2 pr-4 text-gray-600 font-medium">Education Cloud</th>
                <th scope="col" className="text-left py-2 text-gray-600 font-medium">Nonprofit Cloud</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50 text-sm">
              {[
                { area: 'Target sector', edu: 'Higher education, K-12', npo: 'Nonprofits, charities, foundations' },
                { area: 'Guide scope', edu: 'Education product workflows; see current certification guide', npo: 'Nonprofit product workflows; see current certification guide' },
                { area: 'Product/data model', edu: 'Confirm product and EDA use in target org', npo: 'Confirm product and NPSP use in target org' },
                { area: 'Compatibility', edu: 'EDA and NPSP are not supported together in one org', npo: 'EDA and NPSP are not supported together in one org' },
              ].map((row) => (
                <tr key={row.area}>
                  <td className="py-2 pr-4 font-medium text-gray-900">{row.area}</td>
                  <td className="py-2 pr-4 text-gray-700">{row.edu}</td>
                  <td className="py-2 text-gray-700">{row.npo}</td>
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

            <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Decision Matrix: Education Cloud or Nonprofit Cloud?</h2>
        <div className="overflow-x-auto">
          <table className="min-w-[500px] w-full text-sm text-left border-collapse">
            <thead><tr className="border-b-2 border-gray-200">
              <th scope="col" className="py-2.5 pr-4 font-semibold text-gray-900">Your Situation</th>
              <th scope="col" className="py-2.5 font-semibold text-emerald-700">Study-material action</th>
            </tr></thead>
            <tbody className="text-gray-700 divide-y divide-gray-100">
              <tr><td className="py-2.5 pr-4">Project focuses on education product workflows</td><td className="py-2.5 font-semibold text-salesforce-blue">Review Education Cloud guide and verify org configuration</td></tr>
              <tr><td className="py-2.5 pr-4">Project focuses on nonprofit product workflows</td><td className="py-2.5 font-semibold text-purple-700">Review Nonprofit Cloud guide and verify org configuration</td></tr>
              <tr><td className="py-2.5 pr-4">Requirement specifically involves EDA or NPSP</td><td className="py-2.5 font-semibold text-gray-700">Check <a className="text-salesforce-blue hover:underline" href="https://help.salesforce.com/s/articleView?id=sfdo.EDA_Prereqs_Compatibility.htm&amp;language=en_US&amp;type=5" target="_blank" rel="noreferrer nofollow noopener">Salesforce compatibility guidance</a>; they are not supported together in one org</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <RelatedGuides links={getRelatedGuides('education-cloud-vs-nonprofit-cloud-consultant')} />

      <div className="bg-salesforce-blue rounded-xl p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-2">Explore Industry Cloud Study Material</h2>
        <p className="text-white mb-6">Use Education Cloud material for historical study and current guides for active certification planning.</p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/certifications/education-cloud-consultant" className="inline-flex items-center px-5 py-3 bg-white text-salesforce-blue rounded-lg font-semibold hover:bg-blue-50 transition-colors text-sm">
            Education Cloud Historical Learning
          </Link>
          <Link href="/certifications/nonprofit-cloud" className="inline-flex items-center px-5 py-3 border border-white/40 text-white rounded-lg font-semibold hover:bg-white/10 transition-colors text-sm">
            Nonprofit Cloud Practice
          </Link>
        </div>
      </div>
      <RelatedComparisons
        links={[
          { slug: "sales-cloud-vs-service-cloud", label: "Sales Cloud vs Service Cloud" },
          { slug: "business-analyst-vs-strategy-designer", label: "Business Analyst vs Strategy Designer" },
          { slug: "pardot-specialist-vs-pardot-consultant", label: "Pardot Specialist vs Consultant" },
        ]}
      />
    </div>
  )
}
