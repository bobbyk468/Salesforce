import type { Metadata } from 'next'
import Link from 'next/link'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import RelatedGuides from '@/components/RelatedGuides'
import { getRelatedGuides } from '@/lib/related-guides-data'
import { RELEASE_CURRENT } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const pageTitle = `Education Cloud vs Nonprofit Cloud Consultant (${RELEASE_CURRENT})`
const pageDescription = `Education Cloud Consultant vs Nonprofit Cloud Consultant comparison: industry differences, exam content, data models, career paths, and which to take in 2026.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/education-cloud-vs-nonprofit-cloud-consultant` },
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
  keywords: `education cloud vs nonprofit cloud consultant salesforce, education cloud or nonprofit cloud certification, industry cloud comparison salesforce 2026`,
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Education Cloud vs Nonprofit Cloud Consultant', url: '/education-cloud-vs-nonprofit-cloud-consultant' },
]

const faqItems = [
  {
    question: 'What is the difference between Education Cloud and Nonprofit Cloud?',
    answer: 'Education Cloud is built for higher education and K-12 institutions: it manages the student lifecycle, academic programmes, advising, admissions, and educational outcomes. Nonprofit Cloud is built for nonprofit organisations: it manages donor relationships, fundraising, volunteer coordination, programme delivery, and organisational impact measurement. Both run on the Salesforce platform but serve completely different sectors with different data models and use cases.',
  },
  {
    question: 'Which certification should I take: Education Cloud or Nonprofit Cloud Consultant?',
    answer: 'Choose based on the sector you work in or plan to work in. If you implement Salesforce for universities, colleges, or school districts, take Education Cloud Consultant. If you implement Salesforce for charities, nonprofits, foundations, or social enterprises, take Nonprofit Cloud Consultant. There is limited career value in holding both unless you work at a technology partner that serves both sectors.',
  },
  {
    question: 'Which exam is harder: Education Cloud or Nonprofit Cloud Consultant?',
    answer: 'Both exams are similar in difficulty. Nonprofit Cloud Consultant has a slightly higher passing score (~68% vs ~63%), suggesting it is marginally harder. Education Cloud Consultant requires solid knowledge of the EDA (Education Data Architecture) data model, which has a steep learning curve. Nonprofit Cloud Consultant requires deep knowledge of NPSP fundraising concepts and the household account model. Hands-on experience in the respective sector is valuable for both.',
  },
  {
    question: 'Do both certifications require the Salesforce Administrator certification?',
    answer: 'Both strongly recommend the Administrator certification as a prerequisite. The exam questions assume platform-level knowledge that aligns with Administrator certification content. Candidates without admin-level experience often struggle on the implementation and configuration sections of both exams. Most successful candidates have at least 1–2 years of hands-on Salesforce experience.',
  },
  {
    question: 'Are these certifications valuable outside their specific sector?',
    answer: 'These are niche industry certifications — their primary value is within their specific sector. Education Cloud Consultant is valued by Salesforce consulting partners with education practice areas and technology teams at educational institutions. Nonprofit Cloud Consultant is valued by Salesforce partners with nonprofit practice areas and internal IT teams at nonprofit organisations. Neither certification commands significant career value outside its target sector.',
  },
]

export default function EducationCloudVsNonprofitCloudConsultantPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/education-cloud-vs-nonprofit-cloud-consultant" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />

      <div data-lcp-header className="mb-10">
        <div className="inline-flex items-center gap-2 bg-salesforce-blue/10 text-salesforce-dark text-sm font-semibold px-3 py-1 rounded-full mb-4">
          <span>Industry Cloud Comparison</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          Education Cloud vs Nonprofit Cloud Consultant ({RELEASE_CURRENT})
        </h1>
        <p className="text-lg text-gray-600">
          Both are Salesforce industry cloud certifications — but for completely different sectors. Here is how to choose based on your work and clients.
        </p>
      </div>

      <ContentPageAuthor />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
        <div className="bg-white rounded-xl border-2 border-salesforce-blue p-6 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-bold text-gray-900">Education Cloud Consultant</h2>
            <span className="text-xs font-semibold bg-salesforce-blue/10 text-salesforce-dark px-2 py-0.5 rounded-full">Higher Ed / K-12</span>
          </div>
          <div className="space-y-2 text-sm text-gray-700 mb-4">
            <div className="flex justify-between"><span className="text-gray-500">Fee</span><span className="font-semibold">$200</span></div>
            <div className="flex justify-between"><span className="text-gray-500">Questions</span><span className="font-semibold">60</span></div>
            <div className="flex justify-between"><span className="text-gray-500">Time</span><span className="font-semibold">105 min</span></div>
            <div className="flex justify-between"><span className="text-gray-500">Passing score</span><span className="font-semibold">~63%</span></div>
            <div className="flex justify-between"><span className="text-gray-500">Data model</span><span className="font-semibold">EDA</span></div>
          </div>
          <Link href="/education-cloud-consultant-study-guide" className="block text-center text-xs font-semibold text-salesforce-blue hover:underline">Study Guide →</Link>
        </div>

        <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-bold text-gray-900">Nonprofit Cloud Consultant</h2>
            <span className="text-xs font-semibold bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">Nonprofits / Charities</span>
          </div>
          <div className="space-y-2 text-sm text-gray-700 mb-4">
            <div className="flex justify-between"><span className="text-gray-500">Fee</span><span className="font-semibold">$200</span></div>
            <div className="flex justify-between"><span className="text-gray-500">Questions</span><span className="font-semibold">60</span></div>
            <div className="flex justify-between"><span className="text-gray-500">Time</span><span className="font-semibold">105 min</span></div>
            <div className="flex justify-between"><span className="text-gray-500">Passing score</span><span className="font-semibold">~68%</span></div>
            <div className="flex justify-between"><span className="text-gray-500">Data model</span><span className="font-semibold">NPSP Household</span></div>
          </div>
          <Link href="/nonprofit-cloud-consultant-study-guide" className="block text-center text-xs font-semibold text-salesforce-blue hover:underline">Study Guide →</Link>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Sector &amp; Use Case Comparison</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100">
                <th scope="col" className="text-left py-2 pr-4 text-gray-500 font-medium">Area</th>
                <th scope="col" className="text-left py-2 pr-4 text-gray-500 font-medium">Education Cloud</th>
                <th scope="col" className="text-left py-2 text-gray-500 font-medium">Nonprofit Cloud</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50 text-sm">
              {[
                { area: 'Target sector', edu: 'Higher education, K-12', npo: 'Nonprofits, charities, foundations' },
                { area: 'Primary data model', edu: 'EDA (Education Data Architecture)', npo: 'NPSP household account model' },
                { area: 'Core use case', edu: 'Student lifecycle, advising, admissions', npo: 'Fundraising, donor management, volunteers' },
                { area: 'Key objects', edu: 'Academic Program, Course, Enrollment, Term', npo: 'Opportunity (Gift), Household, Relationship' },
                { area: 'Typical client', edu: 'Universities, colleges, school districts', npo: 'Charities, NGOs, social enterprises' },
                { area: 'Recommended background', edu: 'Salesforce admin + education sector exp', npo: 'Salesforce admin + nonprofit sector exp' },
                { area: 'Avg Salary', edu: '$85–115k (US)', npo: '$80–110k (US)' },
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
              <th scope="col" className="py-2.5 font-semibold text-emerald-700">Choose This Cert</th>
            </tr></thead>
            <tbody className="text-gray-700 divide-y divide-gray-100">
              <tr><td className="py-2.5 pr-4">Working with universities, colleges, or K-12 institutions</td><td className="py-2.5 font-semibold text-salesforce-blue">Education Cloud (EDA)</td></tr>
              <tr><td className="py-2.5 pr-4">Implementing for charities, NGOs, or mission-driven nonprofits</td><td className="py-2.5 font-semibold text-purple-700">Nonprofit Cloud (NPSP)</td></tr>
              <tr><td className="py-2.5 pr-4">Managing student recruitment, admissions, and academic records</td><td className="py-2.5 font-semibold text-salesforce-blue">Education Cloud</td></tr>
              <tr><td className="py-2.5 pr-4">Managing donor relationships, fundraising, or grant tracking</td><td className="py-2.5 font-semibold text-purple-700">Nonprofit Cloud</td></tr>
              <tr><td className="py-2.5 pr-4">Client serves both higher ed and nonprofit missions</td><td className="py-2.5 font-semibold text-gray-700">Assess primary use case — lead with that cert first</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <RelatedGuides links={getRelatedGuides('education-cloud-vs-nonprofit-cloud-consultant')} />

      <div className="bg-salesforce-blue rounded-xl p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-2">Practice Industry Cloud Questions</h2>
        <p className="text-white mb-6">Free practice questions for both Education Cloud and Nonprofit Cloud certifications.</p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/certifications/education-cloud-consultant" className="inline-flex items-center px-5 py-3 bg-white text-salesforce-blue rounded-lg font-semibold hover:bg-blue-50 transition-colors text-sm">
            Education Cloud Practice
          </Link>
          <Link href="/certifications/nonprofit-cloud" className="inline-flex items-center px-5 py-3 border border-white/40 text-white rounded-lg font-semibold hover:bg-white/10 transition-colors text-sm">
            Nonprofit Cloud Practice
          </Link>
        </div>
      </div>
    </div>
  )
}
