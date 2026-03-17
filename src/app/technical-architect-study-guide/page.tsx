import type { Metadata } from 'next'
import Link from 'next/link'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import DifficultyHeatmap from '@/components/DifficultyHeatmap'
import { buildStudyGuideTitle } from '@/lib/seo-title-helpers'


const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const slug = 'technical-architect'
const pageTitle = buildStudyGuideTitle(slug)
const pageDescription = `Salesforce CTA study guide: prerequisites, board review format, and solution presentation tips for the highest Salesforce certification.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/technical-architect-study-guide` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/technical-architect-study-guide`,
    images: [{ url: `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`, alt: pageTitle }],
  },
  keywords: `salesforce CTA study guide, salesforce certified technical architect, CTA board review preparation, salesforce architect certification highest level`,
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Salesforce CTA Study Guide', url: '/technical-architect-study-guide' },
]

const faqItems = [
  {
    question: 'What is the Salesforce Certified Technical Architect (CTA)?',
    answer: 'The Salesforce Certified Technical Architect (CTA) is the highest-level Salesforce credential. Unlike other Salesforce certifications, there is no multiple-choice exam — the CTA is awarded via a live Board Review where candidates present and defend a complex architectural solution to a panel of senior Salesforce architects. As of 2026, fewer than 700 people worldwide hold the CTA credential.',
  },
  {
    question: 'What are the prerequisites for the CTA Board Review?',
    answer: 'To apply for the CTA Board Review, you must hold both the Salesforce Certified Application Architect credential AND the Salesforce Certified System Architect credential. Application Architect requires passing 4 domain exams; System Architect requires passing 5 domain exams (with 2 overlapping). This means a minimum of 7 unique exams — totalling approximately $2,600 in exam fees — before you can even apply for the board review.',
  },
  {
    question: 'What does the CTA Board Review involve?',
    answer: 'The Board Review is a two-part assessment over one or two days. First, candidates receive a complex business scenario and are given time to develop and document an architectural solution. Second, candidates present their solution to a panel of three senior Salesforce Technical Architects who ask probing questions, challenge assumptions, and evaluate architectural thinking, communication clarity, and the ability to defend tradeoffs. The board evaluates both what you recommend and how you explain your reasoning.',
  },
  {
    question: 'What does the Board Review panel look for?',
    answer: 'The board evaluates: architectural thinking depth (do you consider scalability, security, and integration at enterprise level?), communication clarity (can you explain complex decisions to non-technical stakeholders?), tradeoff articulation (do you know what you are giving up with each design choice?), completeness (does your solution address all aspects of the scenario?), and hands-on experience confidence (does your answer reflect real-world implementation knowledge?). Textbook knowledge alone is not sufficient.',
  },
  {
    question: 'How should I prepare for the CTA Board Review?',
    answer: 'Preparation typically takes 6–18 months after earning Application Architect and System Architect credentials. Key preparation activities: join a CTA study group (many exist in the Trailblazer Community); practice architectural scenario presentations with feedback from peers; study past CTA scenario types (security, integration, multi-org, large data volume); develop a personal presentation framework; and work with a CTA mentor if possible. Candidates who pass on first attempt typically have 8+ years of Salesforce experience and invest 6+ months in board-specific preparation.',
  },
]

const prerequisites = [
  { name: 'Advanced Administrator', fee: '$200', credential: 'Application Architect' },
  { name: 'Platform Developer I', fee: '$200', credential: 'Application Architect' },
  { name: 'Data Architect', fee: '$400', credential: 'Both' },
  { name: 'Sharing & Visibility Architect', fee: '$400', credential: 'Both' },
  { name: 'Integration Architect', fee: '$400', credential: 'System Architect' },
  { name: 'IAM Architect', fee: '$400', credential: 'System Architect' },
  { name: 'Dev Lifecycle & Deployment Architect', fee: '$400', credential: 'System Architect' },
]

export default function TechnicalArchitectStudyGuidePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/technical-architect-study-guide" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />

      <div data-lcp-header className="mb-10">
        <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-800 text-sm font-semibold px-3 py-1 rounded-full mb-4">
          <span>Highest Salesforce Credential</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          Salesforce CTA Study Guide ({RELEASE_CURRENT})
        </h1>
        <p className="text-lg text-gray-600">
          The Salesforce Certified Technical Architect (CTA) is earned through a live Board Review — not a multiple-choice exam. This guide covers prerequisites, the board review process, what the panel evaluates, and how to prepare.
        </p>
      </div>

      <ContentPageAuthor />

      <div className="bg-purple-50 border border-purple-200 rounded-xl p-5 mb-8">
        <h2 className="text-base font-bold text-purple-900 mb-1">No multiple-choice exam</h2>
        <p className="text-sm text-purple-800">The CTA is awarded via a live Board Review where you present an architectural solution to a panel of senior Salesforce architects. Before applying, you must hold both the Application Architect and System Architect credentials — requiring 7 unique domain exams. Fewer than 700 people worldwide hold the CTA as of 2026.</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
        {[
          { label: 'Format', value: 'Board Review' },
          { label: 'Prerequisites', value: '2 Credentials' },
          { label: 'Unique Exams Req.', value: '7' },
          { label: 'Min Exam Cost', value: '~$2,600' },
        ].map((stat) => (
          <div key={stat.label} className="bg-white rounded-xl border border-gray-100 p-4 text-center shadow-sm">
            <div className="text-xl font-bold text-salesforce-blue">{stat.value}</div>
            <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">7 Prerequisite Exams (The Path to CTA)</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100">
                <th scope="col" className="text-left py-2 pr-4 text-gray-600 font-medium">Exam</th>
                <th scope="col" className="text-left py-2 pr-4 text-gray-600 font-medium">Fee</th>
                <th scope="col" className="text-left py-2 text-gray-600 font-medium">Counts Toward</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {prerequisites.map((row) => (
                <tr key={row.name}>
                  <td className="py-2 pr-4 text-gray-900">{row.name}</td>
                  <td className="py-2 pr-4 text-salesforce-blue font-medium">{row.fee}</td>
                  <td className="py-2 text-gray-700">{row.credential}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-600 mt-3">Data Architect and Sharing &amp; Visibility Architect count toward both Application Architect and System Architect credentials.</p>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">What the Board Review Panel Evaluates</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700">
          {[
            { title: 'Architectural thinking', body: 'Do you consider scalability, security, integration, and performance holistically? Do your designs account for enterprise-scale complexity?' },
            { title: 'Communication clarity', body: 'Can you explain complex architectural decisions in clear language appropriate for both technical and non-technical audiences?' },
            { title: 'Tradeoff articulation', body: 'Can you clearly explain what you are trading off with each design choice — and why the tradeoff is acceptable for this scenario?' },
            { title: 'Experience confidence', body: 'Do your answers reflect genuine hands-on implementation experience, or theoretical knowledge only? The panel probes for this directly.' },
            { title: 'Solution completeness', body: 'Does your solution address all aspects of the scenario — including security, data migration, integrations, and change management?' },
            { title: 'Handling challenges', body: 'When the panel challenges your assumptions or proposes alternatives, can you defend your design confidently and update it appropriately?' },
          ].map((item) => (
            <div key={item.title} className="bg-gray-50 rounded-xl p-4">
              <p className="font-semibold text-gray-900 mb-1">{item.title}</p>
              <p className="text-xs">{item.body}</p>
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

      <div className="bg-salesforce-blue rounded-xl p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-2">Start the Architect Journey</h2>
        <p className="text-white mb-6">Practice for the domain exams that build toward your CTA credential.</p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/system-architect-study-guide" className="inline-flex items-center px-5 py-3 bg-white text-salesforce-blue rounded-lg font-semibold hover:bg-blue-50 transition-colors text-sm">
            System Architect Guide
          </Link>
          <Link href="/application-architect-study-guide" className="inline-flex items-center px-5 py-3 border border-white/40 text-white rounded-lg font-semibold hover:bg-white/10 transition-colors text-sm">
            Application Architect Guide
          </Link>
        </div>
      </div>

      
            <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">What Comes After This Certification?</h2>
        <p className="text-sm text-gray-700">
          After this certification, consider: <Link href="/certifications/application-architect" className="text-salesforce-blue font-medium hover:underline">Application Architect</Link>, <Link href="/certifications/system-architect" className="text-salesforce-blue font-medium hover:underline">System Architect</Link>, or <Link href="/certifications/technical-architect" className="text-salesforce-blue font-medium hover:underline">Technical Architect (CTA)</Link>.
        </p>
      </section>

      <DifficultyHeatmap slug="technical-architect" />
      {/* Hub CTA */}
      <div className="bg-salesforce-blue rounded-xl p-8 text-center text-white mt-10">
        <h2 className="text-2xl font-bold mb-2">Ready to Test Your Knowledge?</h2>
        <p className="text-white mb-6">Try the Certified Technical Architect (CTA) free practice exam — scored with full explanations.</p>
        <Link
          href="/certifications/technical-architect"
          className="inline-flex items-center px-6 py-3 bg-white text-salesforce-blue rounded-lg font-semibold hover:bg-blue-50 transition-colors"
        >
          Certified Technical Architect (CTA) Free Practice Exam &rarr;
        </Link>
      </div>
    </div>
  )
}