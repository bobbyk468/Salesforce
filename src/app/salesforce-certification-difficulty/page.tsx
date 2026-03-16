import type { Metadata } from 'next'
import Link from 'next/link'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const pageTitle = `Salesforce Certification Difficulty Ranking (${RELEASE_CURRENT})`
const pageDescription = `Salesforce cert difficulty ranked: easiest to hardest. Passing score, questions, fee, tips for every tier from AI Associate to CTA.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/salesforce-certification-difficulty` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/salesforce-certification-difficulty`,
    images: [{ url: `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`, alt: pageTitle }],
  },
  keywords: `salesforce certification difficulty, hardest salesforce certification, easiest salesforce certification, salesforce certification ranking 2026`,
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Salesforce Certification Difficulty Ranking', url: '/salesforce-certification-difficulty' },
]

const faqItems = [
  {
    question: 'What is the easiest Salesforce certification?',
    answer: 'The Salesforce AI Associate is widely considered the easiest Salesforce certification. It requires no prior Salesforce experience, tests conceptual knowledge of AI (not technical implementation), has only 40 questions, a 70-minute time limit, and a $75 exam fee. The passing score is ~65%. It is the ideal first certification for anyone new to the Salesforce ecosystem, particularly non-technical professionals (marketers, sales reps, business analysts).',
  },
  {
    question: 'What is the hardest Salesforce certification?',
    answer: 'The Salesforce Certified Technical Architect (CTA) Board Review is universally considered the hardest credential in the Salesforce ecosystem — and one of the most rigorous in enterprise software. It requires holding both Application Architect and System Architect credentials (8 individual certs total), then passing a live 2-hour presentation to a panel of senior Salesforce architects. There are fewer than 1,000 CTAs globally. Candidates typically have 8–12 years of Salesforce experience and often attempt the board multiple times.',
  },
  {
    question: 'Is Platform Developer I (PD1) hard?',
    answer: 'PD1 is moderately difficult. It requires knowledge of Apex (a Java-like language), SOQL, governor limits, Lightning Web Components, testing, and deployment. Candidates with prior programming experience (Java, C#, Python) typically find PD1 manageable with 8–12 weeks of dedicated study. Candidates with no programming background find it significantly harder and should budget 4–6 months. The pass rate is not published, but community estimates suggest 50–65% pass on the first attempt.',
  },
  {
    question: 'Is the Salesforce Administrator (ADM-201) exam hard?',
    answer: 'ADM-201 is moderately challenging for complete beginners. The exam covers a broad range of Salesforce features — objects, security model (profiles, roles, sharing rules), automation, reports, dashboards, and data management — and requires 65% to pass. Most candidates without Salesforce experience pass in 8–12 weeks of part-time study. The biggest challenge is the breadth of topics — no single section is very deep, but all areas need solid coverage.',
  },
  {
    question: 'Do Salesforce consultant exams have a higher fail rate than admin exams?',
    answer: 'Yes, consultant exams generally have higher fail rates than ADM-201. Consultant exams (Sales Cloud, Service Cloud, Experience Cloud) test scenario-based application of Salesforce features to real business requirements — not just feature knowledge. Questions typically describe a business problem and ask which Salesforce configuration solves it. This requires both feature knowledge and consulting judgment, which is harder to study for than factual recall.',
  },
]

const tiers = [
  {
    tier: 'Entry Level',
    color: 'bg-green-100 text-green-800',
    borderColor: 'border-green-200',
    description: 'Conceptual, minimal Salesforce experience required. Ideal starting points.',
    certs: [
      { name: 'AI Associate', fee: '$75', questions: '40', passing: '~65%', note: 'No experience needed. Conceptual AI & Einstein knowledge.' },
      { name: 'Platform Foundations', fee: '$75', questions: '40', passing: '~65%', note: 'Broad Salesforce overview. Good for non-technical users.' },
      { name: 'MuleSoft Integration Foundations', fee: '$75', questions: '40', passing: '70%', note: 'Conceptual integration. No Anypoint Studio required.' },
    ],
  },
  {
    tier: 'Moderate',
    color: 'bg-yellow-100 text-yellow-800',
    borderColor: 'border-yellow-200',
    description: 'Foundational certifications. Require 8–12 weeks of study with no prior experience.',
    certs: [
      { name: 'Administrator (ADM-201)', fee: '$200', questions: '60', passing: '~65%', note: 'Broad but not deep. Most common first cert.' },
      { name: 'Platform App Builder', fee: '$200', questions: '60', passing: '~65%', note: 'Declarative Salesforce. Assumes ADM-201 knowledge.' },
      { name: 'Agentforce Specialist', fee: '$200', questions: '60', passing: '~73%', note: 'Higher passing score. AI/agent concepts are new for most.' },
      { name: 'Tableau Data Analyst', fee: '$250', questions: '55', passing: '75%', note: 'Highest passing score. Hands-on Tableau required.' },
    ],
  },
  {
    tier: 'Challenging',
    color: 'bg-orange-100 text-orange-800',
    borderColor: 'border-orange-200',
    description: 'Require foundational credentials + hands-on project experience.',
    certs: [
      { name: 'Platform Developer I (PD1)', fee: '$200', questions: '60', passing: '~65%', note: 'Apex, LWC, governor limits. Steep for non-developers.' },
      { name: 'Sales Cloud Consultant', fee: '$200', questions: '60', passing: '~65%', note: 'Scenario-heavy. Requires ADM-201 + Sales Cloud experience.' },
      { name: 'Service Cloud Consultant', fee: '$200', questions: '60', passing: '~65%', note: 'Omni-Channel, Knowledge, entitlements. Project experience needed.' },
      { name: 'Marketing Cloud Email Specialist', fee: '$200', questions: '60', passing: '~65%', note: 'MC sandbox experience essential. Deliverability is tricky.' },
      { name: 'CPQ Administrator', fee: '$200', questions: '60', passing: '~65%', note: 'Pricing cascade complexity. Hands-on CPQ config needed.' },
      { name: 'MuleSoft Developer I', fee: '$200', questions: '60', passing: '70%', note: 'DataWeave + flow design. Anypoint Studio required.' },
    ],
  },
  {
    tier: 'Very Hard',
    color: 'bg-red-100 text-red-800',
    borderColor: 'border-red-200',
    description: 'Advanced credentials. Require multiple years of Salesforce experience.',
    certs: [
      { name: 'Platform Developer II (PD2)', fee: '$200', questions: '60', passing: '~65%', note: 'Advanced Apex patterns, integration, performance. Requires PD1.' },
      { name: 'Field Service Consultant', fee: '$200', questions: '60', passing: '~65%', note: 'FSL managed package is complex. Requires Service Cloud foundation.' },
      { name: 'Integration Architect', fee: '$400', questions: '60', passing: '~68%', note: 'API design, middleware, async patterns. Deep technical knowledge.' },
      { name: 'Data Architect', fee: '$400', questions: '60', passing: '~68%', note: 'MDM, data modelling, large data volumes, ETL strategy.' },
      { name: 'MuleSoft Developer II', fee: '$200', questions: '60', passing: '70%', note: 'Custom policies, advanced DataWeave, batch. Requires Dev I.' },
      { name: 'Revenue Cloud Consultant', fee: '$200', questions: '60', passing: '~65%', note: 'Billing + CPQ overlap. Complex quote-to-cash knowledge needed.' },
    ],
  },
  {
    tier: 'Elite',
    color: 'bg-purple-100 text-purple-800',
    borderColor: 'border-purple-200',
    description: 'The most demanding Salesforce credentials. Reserved for deeply experienced professionals.',
    certs: [
      { name: 'Application Architect', fee: '$400 × 4', questions: 'N/A', passing: 'N/A', note: 'Composite credential — pass all 4 arch certs: Data, Sharing, Integration, Dev Lifecycle.' },
      { name: 'System Architect', fee: '$400 × 4', questions: 'N/A', passing: 'N/A', note: 'Composite credential — pass IAM, Heroku + 2 shared architect certs.' },
      { name: 'CTA Board Review', fee: '$6,000+', questions: 'Live', passing: 'Panel', note: 'Live 2-hour architecture presentation. Fewer than 1,000 CTAs worldwide.' },
    ],
  },
]

export default function SalesforceCertificationDifficultyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/salesforce-certification-difficulty" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />

      <div data-lcp-header className="mb-10">
        <div className="inline-flex items-center gap-2 bg-salesforce-blue/10 text-salesforce-dark text-sm font-semibold px-3 py-1 rounded-full mb-4">
          <span>Difficulty Guide</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          Salesforce Certification Difficulty Ranking ({RELEASE_CURRENT})
        </h1>
        <p className="text-lg text-gray-600">
          Every major Salesforce certification ranked from easiest to hardest — with exam format, tips, and recommended study approach for each tier.
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
                  <span className="text-gray-400 text-xs">Fee: {cert.fee}</span>
                  {cert.questions !== 'N/A' && <span className="text-gray-400 text-xs">Q: {cert.questions}</span>}
                  {cert.passing !== 'N/A' && <span className="text-gray-400 text-xs">Pass: {cert.passing}</span>}
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
            { factor: 'Passing score required', detail: 'Most certs: 65%. MuleSoft Developer: 70%. Tableau Data Analyst: 75%. Agentforce Specialist: ~73%. Higher = harder.' },
            { factor: 'Question type', detail: 'Factual recall (easier) vs scenario-based application (harder). Consultant and architect exams are almost entirely scenario-based.' },
            { factor: 'Breadth of topics', detail: 'ADM-201 covers many topics shallowly. Architect certs go deep into specific domains. Breadth requires more study time.' },
            { factor: 'Experience required', detail: 'Associate certs: no experience needed. Architect certs: 5–10 years expected. Exams assume real project knowledge for senior credentials.' },
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
        <p className="text-blue-100 mb-6">Free practice questions for every certification — from AI Associate to CTA prep.</p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/certifications/ai-associate" className="inline-flex items-center px-5 py-3 bg-white text-salesforce-blue rounded-lg font-semibold hover:bg-blue-50 transition-colors text-sm">
            Start: AI Associate (Easiest)
          </Link>
          <Link href="/certifications" className="inline-flex items-center px-5 py-3 border border-white/40 text-white rounded-lg font-semibold hover:bg-white/10 transition-colors text-sm">
            Browse All Certs
          </Link>
        </div>
      </div>
    </div>
  )
}
