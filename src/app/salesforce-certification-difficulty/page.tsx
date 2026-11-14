import type { Metadata } from 'next'
import Link from '@/components/AppLink'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import LastUpdated from '@/components/LastUpdated'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const pageTitle = `Salesforce Certs: Easiest to Hardest (${RELEASE_CURRENT})`
const metadataTitle = 'Salesforce Certification Difficulty: Easiest to Hardest'
const pageDescription = `Compare Salesforce cert difficulty from beginner to CTA: questions, passing score, fees, study time, and which exam to take first.`

export const metadata: Metadata = {
  title: { absolute: metadataTitle },
  description: pageDescription,
  alternates: {
    canonical: `${siteUrl}/salesforce-certification-difficulty`,
    languages: { 'en-US': `${siteUrl}/salesforce-certification-difficulty`, 'x-default': `${siteUrl}/salesforce-certification-difficulty` },
  },
  openGraph: {
    title: metadataTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/salesforce-certification-difficulty`,
    images: [{ url: `${siteUrl}/og?t=${encodeURIComponent(metadataTitle)}`, width: 1200, height: 630, alt: metadataTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: metadataTitle,
    description: pageDescription,
    images: [{ url: `${siteUrl}/og?t=${encodeURIComponent(metadataTitle)}`, alt: metadataTitle }],
  },
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Salesforce Certification Difficulty Ranking', url: '/salesforce-certification-difficulty' },
]

const faqItems = [
  {
    question: 'What is the easiest Salesforce certification?',
    answer: 'Platform Foundations is currently the easiest Salesforce certification to take. It requires no prior Salesforce experience and covers the platform at a high level. The exam has 40 questions, a 62% passing score, and a $75 fee. AI Associate was once a common answer, but it retired in February 2026 and can no longer be booked. Its page on this site remains as a historical reference.',
  },
  {
    question: 'What is the hardest Salesforce certification?',
    answer: 'The Salesforce Certified Technical Architect (CTA) Board Review is widely regarded as the hardest Salesforce credential. Candidates must hold both Application Architect and System Architect credentials (eight individual certifications in total), then give a live, two-hour presentation to a panel of senior Salesforce architects. There are fewer than 1,000 CTAs worldwide. Candidates typically have 8–12 years of Salesforce experience and may take the board more than once.',
  },
  {
    question: 'Is Platform Developer I (PD1) hard?',
    answer: 'PD1 is moderately difficult. It covers Apex, SOQL, governor limits, Lightning Web Components, testing, and deployment. People with programming experience in languages such as Java, C#, or Python may need 8–12 weeks of focused study. Those new to programming may need 4–6 months. Salesforce does not publish a pass rate; community estimates put the first-attempt rate at 50–65%.',
  },
  {
    question: 'Is the Salesforce Administrator (ADM-201) exam hard?',
    answer: 'ADM-201 can be challenging for complete beginners because it covers many topics: Salesforce features and objects, security, automation, reports, dashboards, and data management. The passing score is 68%. Many candidates without Salesforce experience study part time for 8–12 weeks. The main challenge is covering the full range of topics, even though no one section goes very deep.',
  },
  {
    question: 'Do Salesforce consultant exams have a higher fail rate than admin exams?',
    answer: 'Consultant exams often feel harder than ADM-201 because they ask you to apply Salesforce features to business scenarios. A question may describe a business problem and ask which configuration would solve it. This tests product knowledge and consulting judgment, not just recall.',
  },
]

const tiers = [
  {
    tier: 'Entry Level',
    color: 'bg-green-100 text-green-800',
    borderColor: 'border-green-200',
    description: 'These exams cover core concepts and require little or no Salesforce experience. They can be good starting points.',
    certs: [
      { name: 'AI Associate (retired Feb 2026)', fee: '$75', questions: '40', passing: '65%', note: 'Retired and no longer bookable; included as a historical reference.' },
      { name: 'Platform Foundations', fee: '$75', questions: '40', passing: '62%', note: 'A broad Salesforce overview for non-technical users.' },
      { name: 'MuleSoft Integration Foundations', fee: '$75', questions: '40', passing: '70%', note: 'Covers integration concepts; Anypoint Studio is not required.' },
    ],
  },
  {
    tier: 'Moderate',
    color: 'bg-yellow-100 text-yellow-800',
    borderColor: 'border-yellow-200',
    description: 'These foundational certifications may take 8–12 weeks of study if you have no prior experience.',
    certs: [
      { name: 'Administrator (ADM-201)', fee: '$200', questions: '60', passing: '68%', note: 'Covers a broad range of topics and is a common first certification.' },
      { name: 'Platform App Builder', fee: '$200', questions: '60', passing: '73%', note: 'Tests declarative Salesforce skills and assumes Administrator knowledge.' },
      { name: 'Agentforce Specialist', fee: '$200', questions: '60', passing: '72%', note: 'Covers AI and agent concepts that may be new to many candidates.' },
      { name: 'Tableau Data Analyst', fee: '$250', questions: '55', passing: '75%', note: 'Requires hands-on Tableau experience and has the highest passing score here.' },
    ],
  },
  {
    tier: 'Challenging',
    color: 'bg-orange-100 text-orange-800',
    borderColor: 'border-orange-200',
    description: 'These certifications build on foundational knowledge and benefit from hands-on project experience.',
    certs: [
      { name: 'Platform Developer I (PD1)', fee: '$200', questions: '60', passing: '68%', note: 'Covers Apex, Lightning Web Components, and governor limits; coding experience helps.' },
      { name: 'Sales Cloud Consultant', fee: '$200', questions: '60', passing: '73%', note: 'Uses business scenarios and assumes Administrator and Sales Cloud experience.' },
      { name: 'Service Cloud Consultant', fee: '$200', questions: '60', passing: '78%', note: 'Covers Omni-Channel, Knowledge, and entitlements; project experience helps.' },
      { name: 'Marketing Cloud Email Specialist', fee: '$200', questions: '60', passing: '67%', note: 'Marketing Cloud sandbox experience is useful; deliverability can be challenging.' },
      { name: 'CPQ Administrator', fee: '$200', questions: '60', passing: '65%', note: 'Covers complex pricing rules and benefits from hands-on CPQ configuration.' },
      { name: 'MuleSoft Developer I', fee: '$200', questions: '60', passing: '70%', note: 'Covers DataWeave and flow design; Anypoint Studio experience is required.' },
    ],
  },
  {
    tier: 'Very Hard',
    color: 'bg-red-100 text-red-800',
    borderColor: 'border-red-200',
    description: 'These advanced certifications usually require several years of Salesforce experience.',
    certs: [
      { name: 'Platform Developer II (PD2)', fee: '$200', questions: '60', passing: '70%', note: 'Covers advanced Apex, integrations, and performance; requires PD1.' },
      { name: 'Field Service Consultant', fee: '$200', questions: '60', passing: '63%', note: 'Covers the Field Service managed package and assumes Service Cloud knowledge.' },
      { name: 'Integration Architect', fee: '$400', questions: '60', passing: '67%', note: 'Requires strong technical knowledge of APIs, middleware, and asynchronous patterns.' },
      { name: 'Data Architect', fee: '$400', questions: '60', passing: '58%', note: 'Covers master data management, data modelling, large data volumes, and ETL strategy.' },
      { name: 'MuleSoft Developer II', fee: '$200', questions: '60', passing: '70%', note: 'Covers custom policies, advanced DataWeave, and batch processing; requires Developer I.' },
      { name: 'Revenue Cloud Consultant', fee: '$200', questions: '60', passing: '63%', note: 'Covers billing and CPQ, with a focus on quote-to-cash processes.' },
    ],
  },
  {
    tier: 'Elite',
    color: 'bg-purple-100 text-purple-800',
    borderColor: 'border-purple-200',
    description: 'These are the most demanding Salesforce credentials and suit highly experienced professionals.',
    certs: [
      { name: 'Application Architect', fee: '$400 × 4', questions: 'N/A', passing: 'N/A', note: 'A composite credential awarded after you earn Platform App Builder, Platform Developer I, Data Architect, and Sharing and Visibility Architect. There is no separate exam.' },
      { name: 'System Architect', fee: '$400 × 4', questions: 'N/A', passing: 'N/A', note: 'A composite credential awarded after you earn Platform Developer I, Integration Architect, Identity and Access Management Architect, and Development Lifecycle and Deployment Architect. There is no separate exam.' },
      { name: 'CTA Board Review', fee: '$6,000+', questions: 'Live', passing: 'Panel', note: 'A live, two-hour architecture presentation reviewed by a panel. Fewer than 1,000 CTAs are worldwide.' },
    ],
  },
]

export default function SalesforceCertificationDifficultyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/salesforce-certification-difficulty" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />

      <div data-lcp-header className="mb-10">
        <div className="inline-flex items-center gap-2 bg-salesforce-blue/10 text-salesforce-dark text-sm font-semibold px-3 py-1 rounded-full mb-4">

      <ContentPageAuthor />
          <span>Difficulty Guide</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          Salesforce Certification Difficulty Ranking ({RELEASE_CURRENT})
        </h1>
        <LastUpdated />
        <p className="text-lg text-gray-600">
          Compare major Salesforce certifications by difficulty, exam format, and the experience and study each may require.
        </p>
      </div>

      <div className="space-y-8">
        {tiers.map((tier) => (
          <div key={tier.tier} className={`bg-white rounded-xl border ${tier.borderColor} p-6 shadow-sm`}>
            <div className="flex items-center gap-3 mb-3">
              <span className={`text-sm font-bold px-3 py-1 rounded-full ${tier.color}`}>{tier.tier}</span>
              <p className="text-sm text-gray-600">{tier.description}</p>
            </div>
            <div className="space-y-3">
              {tier.certs.map((cert) => (
                <div key={cert.name} className="flex flex-wrap items-start gap-x-4 gap-y-1 py-2 border-t border-gray-50 first:border-0 text-sm">
                  <span className="font-semibold text-gray-900 w-52 flex-shrink-0">{cert.name}</span>
                  <span className="text-gray-600 text-xs">Fee: {cert.fee}</span>
                  {cert.questions !== 'N/A' && <span className="text-gray-600 text-xs">Q: {cert.questions}</span>}
                  {cert.passing !== 'N/A' && <span className="text-gray-600 text-xs">Pass: {cert.passing}</span>}
                  <span className="text-gray-600 flex-1 text-xs">{cert.note}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Key factors */}
      <div className="bg-white rounded-xl border border-gray-100 p-6 mt-8 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">What Makes a Salesforce Exam Difficult?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700">
          {[
            { factor: 'Passing score required', detail: 'Scores range from 58% to 78% in this comparison. Examples: Administrator 68%, MuleSoft Developer I 70%, Tableau Data Analyst 65%, Agentforce Specialist 72%, and Service Cloud Consultant 78%.' },
            { factor: 'Question type', detail: 'Recall questions ask you to remember facts. Scenario questions ask you to apply features to a business problem. Consultant and architect exams rely heavily on scenarios.' },
            { factor: 'Breadth of topics', detail: 'ADM-201 covers many topics at a basic level. Architect certifications go deeper into specific areas. Broad exams can take longer to study for.' },
            { factor: 'Experience required', detail: 'Associate certifications require no experience. Architect certifications often expect 5–10 years. Senior exams may assume hands-on project knowledge.' },
          ].map((item) => (
            <div key={item.factor} className="rounded-lg bg-gray-50 p-4">
              <div className="font-semibold text-gray-900 mb-1">{item.factor}</div>
              <div className="text-gray-600 text-xs">{item.detail}</div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
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

      <div className="bg-salesforce-blue rounded-xl p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-2">Start with the Right Cert</h2>
        <p className="text-white mb-6">Prepare with free practice questions, from Platform Foundations through CTA.</p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/certifications/platform-foundations" className="inline-flex items-center px-5 py-3 bg-white text-salesforce-blue rounded-lg font-semibold hover:bg-blue-50 transition-colors text-sm">
            Start: Platform Foundations (Easiest)
          </Link>
          <Link href="/certifications" className="inline-flex items-center px-5 py-3 border border-white/40 text-white rounded-lg font-semibold hover:bg-white/10 transition-colors text-sm">
            Browse All Certs
          </Link>
        </div>
      </div>
    </div>
  )
}
