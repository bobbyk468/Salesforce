/* Ported from /nonprofit-success-pack-consultant-study-guide, merged into /certifications/nonprofit-success-pack-consultant in November 2026.
 * Content is the original page copy. Page chrome (metadata, JSON-LD, H1
 * header) was dropped because the hub page already provides it. */
import Link from '@/components/AppLink'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import DifficultyHeatmap from '@/components/DifficultyHeatmap'
import { buildStudyGuideTitle } from '@/lib/seo-title-helpers'
import ExamTipsCrossLink from '@/components/ExamTipsCrossLink'
import CertInsightBlock from '@/components/CertInsightBlock'
import CredentialSchema from '@/components/CredentialSchema'
import ExamPricingCard from '@/components/ExamPricingCard'
import LastUpdated from '@/components/LastUpdated'





const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const slug = 'nonprofit-success-pack-consultant'
const pageTitle = buildStudyGuideTitle(slug)
const pageDescription = `NPSP Consultant study guide: review household data, fundraising, gift management, and exam sections with free practice questions.`

const examSections = [
  { name: 'NPSP Configuration & Customisation', weight: 30, note: 'Installing and configuring NPSP, household settings, account model selection, and customising NPSP for specific nonprofit needs.' },
  { name: 'Fundraising & Gift Management', weight: 25, note: 'Opportunity management for donations, payment schedules, recurring donations, pledge management, and gift receipting.' },
  { name: 'Household & Relationship Management', weight: 20, note: 'Household account model, informal and formal naming, relationship types, affiliations, and duplicate management.' },
  { name: 'Reporting & Dashboards', weight: 15, note: 'NPSP-specific reports, dashboard design for fundraising KPIs, donor retention reporting, and campaign analysis.' },
  { name: 'Data Import & Migration', weight: 10, note: 'NPSP batch data import wizard, data mapping, duplicate handling during imports, and data quality management.' },
]

export const faqItems = [
  {
    question: 'What is the NPSP Consultant certification?',
    answer: 'The Salesforce Certified Nonprofit Success Pack (NPSP) Consultant validates expertise in implementing and configuring the NPSP managed package for nonprofit organisations. NPSP is a free Salesforce-based CRM built specifically for nonprofits, adding features for fundraising, household management, relationships, and programme tracking on top of standard Salesforce. The consultant certification is designed for implementation partners and internal admins at nonprofits.',
  },
  {
    question: 'How is NPSP Consultant different from Nonprofit Cloud Consultant?',
    answer: 'NPSP Consultant focuses specifically on the NPSP managed package, its configuration, fundraising features, household model, and data management tools. Nonprofit Cloud Consultant is the broader, more current credential that covers the full Nonprofit Cloud product suite including NPSP plus Volunteer Management, Outcome Management, and the newer native Nonprofit Cloud features. For new candidates, Nonprofit Cloud Consultant is typically the better investment as it is the active, forward-looking credential.',
  },
  {
    question: 'What is the NPSP household account model?',
    answer: 'The NPSP household account model stores each household as an Account record, with individual family members as Contact records linked to that Account. This differs from the standard Salesforce model where each Contact can be linked to any Account type. NPSP\'s household model enables household-level giving totals, household-level communication preferences, and household naming conventions, all critical for nonprofit fundraising and donor management.',
  },
  {
    question: 'What is the NPSP Consultant exam format?',
    answer: 'The exam consists of 60 multiple-choice and multiple-select questions with a 90-minute time limit. The passing score is approximately 67%. The exam costs $200 for the first attempt, with a 67% discount retake voucher after a failed attempt. It can be taken online (proctored) or at a Kryterion testing centre.',
  },
  {
    question: 'Do I need the Salesforce Administrator certification first?',
    answer: 'Yes, the Administrator certification (or equivalent experience) is strongly recommended before NPSP Consultant. NPSP runs on the Salesforce platform and the exam assumes solid Salesforce Admin knowledge. Questions about NPSP configuration layer on top of core platform concepts. Candidates without Admin knowledge often struggle on the implementation and configuration sections.',
  },
]

export default function NonprofitSuccessPackConsultantStudyGuideContent() {
  return (
    <div className="mt-12">


      <CertInsightBlock certSlug="nonprofit-success-pack-consultant" />

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
        {[
          { label: 'Questions', value: '60' },
          { label: 'Time Limit', value: '105 min' },
          { label: 'Passing Score', value: '67%' },
          { label: 'Exam Fee', value: '$200' },
        ].map((stat) => (
          <div key={stat.label} className="bg-white rounded-xl border border-gray-100 p-4 text-center shadow-sm">
            <div className="text-2xl font-bold text-salesforce-blue">{stat.value}</div>
            <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
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
                <div className="bg-salesforce-blue h-2 rounded-full" style={{ width: `${section.weight * 3.3}%` }} />
              </div>
              <p className="text-xs text-gray-600">{section.note}</p>
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


      <DifficultyHeatmap slug="nonprofit-success-pack-consultant" />
      <div className="bg-salesforce-blue rounded-xl p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-2">Practice NPSP Consultant Questions</h2>
        <p className="text-white mb-6">Free practice questions for the Salesforce NPSP Consultant exam.</p>
        <Link href="#practice-questions" className="inline-flex items-center px-6 py-3 bg-white text-salesforce-blue rounded-lg font-semibold hover:bg-blue-50 transition-colors">
          Start Free Practice Questions
        </Link>
      </div>
    </div>
  )
}