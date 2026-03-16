import type { Metadata } from 'next'
import Link from 'next/link'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import DifficultyHeatmap from '@/components/DifficultyHeatmap'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const pageTitle = `Salesforce Nonprofit Cloud Consultant Study Guide (${RELEASE_CURRENT})`
const pageDescription = `Nonprofit Cloud Consultant study guide: exam sections, NPSP data model, fundraising, volunteer management. Pass in 2026.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/nonprofit-cloud-consultant-study-guide` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/nonprofit-cloud-consultant-study-guide`,
    images: [{ url: `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`, alt: pageTitle }],
  },
  keywords: `nonprofit cloud consultant study guide, salesforce nonprofit cloud exam, nonprofit cloud certification 2026, NPSP consultant exam prep`,
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Nonprofit Cloud Consultant Study Guide', url: '/nonprofit-cloud-consultant-study-guide' },
]

const examSections = [
  { name: 'Solution Design & Architecture', weight: 27, note: 'Designing Salesforce solutions for nonprofit use cases, data model decisions, and implementation approach selection.' },
  { name: 'Fundraising', weight: 24, note: 'Gift management, donation receipting, pledge schedules, campaign management, and soft credit handling.' },
  { name: 'Nonprofit Cloud Configuration', weight: 18, note: 'NPSP settings, household accounts model, relationship types, affiliations, and programme management setup.' },
  { name: 'Volunteer Management', weight: 16, note: 'Volunteer roles, shifts, job management, volunteer portal design, and volunteer reporting.' },
  { name: 'Outcomes Management', weight: 15, note: 'Programme delivery tracking, outcome reporting, indicators, and measuring programme impact.' },
]

const faqItems = [
  {
    question: 'What is the Nonprofit Cloud Consultant certification?',
    answer: 'The Salesforce Certified Nonprofit Cloud Consultant validates expertise in implementing Salesforce for nonprofit organisations. It covers the Nonprofit Success Pack (NPSP) data model, fundraising management, volunteer coordination, programme delivery, and outcomes tracking. It is designed for Salesforce implementation consultants, system admins at nonprofits, and technology staff at nonprofit technology solution providers.',
  },
  {
    question: 'What is NPSP and how does it relate to Nonprofit Cloud?',
    answer: 'NPSP (Nonprofit Success Pack) is a free managed package built on the Salesforce platform that extends standard Salesforce for nonprofit use cases. It adds custom objects and features for fundraising, household management, relationships, and programme tracking. Nonprofit Cloud is the broader product umbrella that includes NPSP plus additional features like Volunteer Management, Outcome Management, and Case Management. The consultant exam covers both NPSP configuration and the broader Nonprofit Cloud feature set.',
  },
  {
    question: 'What is the Nonprofit Cloud Consultant exam format?',
    answer: 'The exam consists of 60 multiple-choice and multiple-select questions with a 105-minute time limit. The passing score is approximately 68%. The exam costs $200 for the first attempt, with a ~50% discount retake voucher after a failed attempt. It can be taken online (proctored) or at a Kryterion testing centre.',
  },
  {
    question: 'Do I need the Salesforce Administrator certification before Nonprofit Cloud Consultant?',
    answer: 'Salesforce strongly recommends the Administrator certification as a prerequisite. The exam assumes solid platform knowledge — configuration, security, automation, and reporting. Nonprofit Cloud Consultant questions are layered on top of standard Salesforce knowledge, so candidates without admin-level expertise need to build that foundation first. Most successful candidates have at least 1–2 years of hands-on Salesforce experience in nonprofit settings.',
  },
  {
    question: 'How is Nonprofit Cloud Consultant different from the NPSP Consultant credential?',
    answer: 'The Nonprofit Cloud Consultant is the current certification that covers the full Nonprofit Cloud product suite including NPSP, Volunteer Management, Outcome Management, and the newer Nonprofit Cloud features. The older Nonprofit Success Pack Consultant (now retired or being phased out) focused specifically on the NPSP managed package. Current candidates should pursue the Nonprofit Cloud Consultant credential as it is the active, maintained certification.',
  },
]

export default function NonprofitCloudConsultantStudyGuidePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/nonprofit-cloud-consultant-study-guide" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />

      <div data-lcp-header className="mb-10">
        <div className="inline-flex items-center gap-2 bg-salesforce-blue/10 text-salesforce-dark text-sm font-semibold px-3 py-1 rounded-full mb-4">
          <span>Industry Cloud Track</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          Salesforce Nonprofit Cloud Consultant Study Guide ({RELEASE_CURRENT})
        </h1>
        <p className="text-lg text-gray-600">
          A complete study guide for the Salesforce Certified Nonprofit Cloud Consultant exam — NPSP data model, fundraising, volunteer management, and programme outcomes measurement.
        </p>
      </div>

      <ContentPageAuthor />

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
        {[
          { label: 'Questions', value: '60' },
          { label: 'Time Limit', value: '105 min' },
          { label: 'Passing Score', value: '~68%' },
          { label: 'Exam Fee', value: '$200' },
        ].map((stat) => (
          <div key={stat.label} className="bg-white rounded-xl border border-gray-100 p-4 text-center shadow-sm">
            <div className="text-2xl font-bold text-salesforce-blue">{stat.value}</div>
            <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Exam Sections &amp; Weightings</h2>
        <div className="space-y-4">
          {examSections.map((section) => (
            <div key={section.name}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-semibold text-gray-900">{section.name}</span>
                <span className="text-sm font-bold text-salesforce-blue">{section.weight}%</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2 mb-1">
                <div className="bg-salesforce-blue h-2 rounded-full" style={{ width: `${section.weight * 3.6}%` }} />
              </div>
              <p className="text-xs text-gray-500">{section.note}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Key NPSP Concepts to Master</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { title: 'Household Account Model', items: ['Household vs One-to-One accounts', 'Informal vs formal naming', 'Address management', 'Household merge rules', 'Relationship types'] },
            { title: 'Fundraising Objects', items: ['Opportunity record types', 'Payment schedules & pledges', 'Soft credits & attribution', 'Recurring donations', 'Gift entry forms (BGE)'] },
            { title: 'Programme Management', items: ['Programme object setup', 'Service delivery tracking', 'Client records & intakes', 'Case management workflow', 'Outcome measurement'] },
            { title: 'Volunteer Management', items: ['Volunteer job & shift setup', 'Volunteer portal configuration', 'Volunteer hours tracking', 'Mass email to volunteers', 'Volunteer reporting'] },
          ].map((card) => (
            <div key={card.title} className="bg-gray-50 rounded-xl p-4">
              <p className="font-semibold text-gray-900 mb-2 text-sm">{card.title}</p>
              <ul className="space-y-1">
                {card.items.map((item) => (
                  <li key={item} className="text-xs text-gray-600 flex gap-2">
                    <span className="text-salesforce-blue font-bold flex-shrink-0">›</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
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
      <div className="bg-gray-50 rounded-xl border border-gray-100 p-5 mb-8">
        <h2 className="text-base font-bold text-gray-900 mb-3">Compare Certifications</h2>
        <ul className="space-y-2">
          <li><Link href="/education-cloud-vs-nonprofit-cloud-consultant" className="text-sm text-salesforce-dark hover:underline font-medium">→ Education Cloud vs Nonprofit Cloud Consultant — comparison</Link></li>
        </ul>
      </div>


      <DifficultyHeatmap slug="nonprofit-cloud" />
      <div className="bg-salesforce-blue rounded-xl p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-2">Practice Nonprofit Cloud Questions</h2>
        <p className="text-white mb-6">Free practice questions for the Salesforce Nonprofit Cloud Consultant exam.</p>
        <Link href="/certifications/nonprofit-cloud" className="inline-flex items-center px-6 py-3 bg-white text-salesforce-blue rounded-lg font-semibold hover:bg-blue-50 transition-colors">
          Start Free Practice Questions
        </Link>
        <p className="mt-4 text-sm text-white">
          Compare: <Link href="/education-cloud-vs-nonprofit-cloud-consultant" className="underline hover:text-white font-medium">Education Cloud vs Nonprofit Cloud Consultant</Link>
        </p>
      </div>
    </div>
  )
}
