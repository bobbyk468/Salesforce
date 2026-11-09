/* Ported from /education-cloud-consultant-study-guide, merged into /certifications/education-cloud-consultant in November 2026.
 * Content is the original page copy. Page chrome (metadata, JSON-LD, H1
 * header) was dropped because the hub page already provides it. */
import Link from '@/components/AppLink'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import DifficultyHeatmap from '@/components/DifficultyHeatmap'
import { buildStudyGuideTitle } from '@/lib/seo-title-helpers'
import ExamTipsCrossLink from '@/components/ExamTipsCrossLink'
import CertInsightBlock from '@/components/CertInsightBlock'
import CredentialSchema from '@/components/CredentialSchema'
import ExamPricingCard from '@/components/ExamPricingCard'
import LastUpdated from '@/components/LastUpdated'





const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const slug = 'education-cloud-consultant'
const pageTitle = buildStudyGuideTitle(slug)
const pageDescription = 'Explore the historical Education Cloud Consultant guide, exam logistics, and education solution design study topics.'

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Education Cloud Consultant', url: '/certifications/education-cloud-consultant' },
  { name: 'Education Cloud Consultant Study Guide', url: '/education-cloud-consultant-study-guide' },
]

const examSections = [
  { name: 'Domain Expertise', weight: 18, note: 'Map customer needs across recruitment and admissions, student experience, advancement and alumni relations, and K-12 solutions.' },
  { name: 'Education Cloud Configuration', weight: 22, note: 'Review Education Cloud capabilities, product compatibility, installation, and configuration.' },
  { name: 'Implementation Strategies and Best Practices', weight: 18, note: 'Plan and deliver implementations, including requirements, testing, governance, change management, deployment, adoption, and optimization.' },
  { name: 'Solution Design', weight: 19, note: 'Evaluate education account model options, design scalable solutions, and select Education Cloud, other Salesforce products, community resources, or third-party apps as appropriate.' },
  { name: 'Integration and Data Management', weight: 16, note: 'Assess integration, data usage, migrations, forecasting, and large data volume considerations.' },
  { name: 'Analytics', weight: 7, note: 'Distinguish Education Cloud reporting options and determine when an analytics solution is appropriate.' },
]

export const faqItems = [
  {
    question: 'What is the Education Cloud Consultant certification?',
    answer: 'The Salesforce Certified Education Cloud Consultant credential is for consultants who design and implement Salesforce for Education solutions. Salesforce now refers to the product as Agentforce Education (formerly Education Cloud). Salesforce closed registration on July 24, 2026, ended exam delivery on August 31, 2026, and lists retirement effective February 1, 2027.',
  },
  {
    question: 'What is EDA (Education Data Architecture)?',
    answer: 'Education Data Architecture (EDA) is a Salesforce for Education managed-package data model. Salesforce distinguishes that package from the Education Cloud platform solution; confirm which product and data model an institution uses before designing object relationships. The published consultant exam guide separately calls out education account-model considerations.',
  },
  {
    question: 'Do I need the Salesforce Administrator certification before Education Cloud Consultant?',
    answer: 'Yes. The official exam guide lists the Salesforce Certified Platform Administrator Certification as a prerequisite. The guide’s audience description also expects implementation experience, but that description is not an additional formal prerequisite.',
  },
  {
    question: 'What is the Education Cloud Consultant exam format?',
    answer: 'The published guide specifies 60 multiple-choice questions plus up to five unscored questions, 105 minutes, and a 67% passing score. It lists a US$200 registration fee and US$100 retake fee (JPY 30,000 for each), plus applicable tax. Registration closed July 24, 2026 and the last exam date was August 31, 2026, so new registration and retakes are no longer available.',
  },
  {
    question: 'What hands-on practice is available for Education Cloud?',
    answer: 'Salesforce Help describes an Education Cloud learning trial org, including options with sample data or a base org. Because the consultant exam is no longer available, use current product documentation and Trailhead learning resources for product skills rather than treating them as an active exam syllabus.',
  },
]

export default function EducationCloudConsultantStudyGuideContent() {
  return (
    <div className="mt-12">

      <div role="status" className="rounded-xl border border-amber-200 bg-amber-50 p-4 mb-8 text-sm text-amber-950">
        <strong>Exam access update:</strong> Salesforce ended registration on July 24, 2026 and exam delivery on August 31, 2026. Credential retirement is scheduled for February 1, 2027. The domain outline below is from the published Winter ’24 guide, not a current exam syllabus; fees shown are historical guide amounts.
      </div>

      <CertInsightBlock certSlug="education-cloud-consultant" />

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
        {[
          { label: 'Questions', value: '60 + up to 5 unscored' },
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
        <h2 className="text-xl font-bold text-gray-900 mb-4">Illustrative EDA Package Data Objects</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100">
                <th scope="col" className="text-left py-2 pr-4 text-gray-600 font-medium">Object</th>
                <th scope="col" className="text-left py-2 text-gray-600 font-medium">Purpose</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {[
                { obj: 'Contact', purpose: 'Person record used in the EDA package’s education model' },
                { obj: 'Account', purpose: 'Account model varies by the selected Education Cloud or EDA implementation' },
                { obj: 'Academic Program', purpose: 'Education program record in applicable education data models' },
                { obj: 'Course', purpose: 'Course record in applicable education data models' },
                { obj: 'Course Connection', purpose: 'EDA-package relationship connecting a person with course-related participation' },
                { obj: 'Term', purpose: 'Academic period in applicable education data models' },
                { obj: 'Plan Requirement', purpose: 'EDA-package academic planning requirement; confirm availability and semantics by version' },
              ].map((row) => (
                <tr key={row.obj}>
                  <td className="py-2 pr-4 text-gray-900 font-medium">{row.obj}</td>
                  <td className="py-2 text-gray-700">{row.purpose}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">FAQs From Candidates</h2>
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
        <h2 className="text-base font-bold text-gray-900 mb-3">See Related Certifications</h2>
        <ul className="space-y-2">
          <li><Link href="/education-cloud-vs-nonprofit-cloud-consultant" className="text-sm text-salesforce-dark hover:underline font-medium">→ Education Cloud vs Nonprofit Cloud Consultant, which to take?</Link></li>
        </ul>
      </div>



      <DifficultyHeatmap slug="education-cloud-consultant" />
      <div className="bg-salesforce-blue rounded-xl p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-2">Practice Education Cloud Questions</h2>
        <p className="text-white mb-6">Historical practice questions for the Salesforce Certified Education Cloud Consultant study topics.</p>
        <Link href="#practice-questions" className="inline-flex items-center px-6 py-3 bg-white text-salesforce-blue rounded-lg font-semibold hover:bg-blue-50 transition-colors">
          View Historical Practice Questions
        </Link>
        <p className="mt-4 text-sm text-white">
          Compare: <Link href="/education-cloud-vs-nonprofit-cloud-consultant" className="inline-block py-1 underline hover:text-white font-medium">Education Cloud vs Nonprofit Cloud Consultant</Link>
        </p>
      </div>
    </div>
  )
}
