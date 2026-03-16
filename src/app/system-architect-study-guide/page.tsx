import type { Metadata } from 'next'
import Link from 'next/link'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const pageTitle = `Salesforce System Architect Study Guide (${RELEASE_CURRENT})`
const pageDescription = `System Architect study guide: 5 required domain exams, key topics, recommended study order, preparation strategy Free practice questions.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/system-architect-study-guide` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/system-architect-study-guide`,
    images: [{ url: `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`, alt: pageTitle }],
  },
  keywords: `salesforce system architect study guide, salesforce system architect credential, system architect domain exams, salesforce architect certification path`,
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'System Architect Study Guide', url: '/system-architect-study-guide' },
]

const domainExams = [
  { step: '1', name: 'Integration Architect', fee: '$400', time: '110 min', summary: 'Translating business requirements into integration solutions using Salesforce integration patterns, middleware, and API design.', href: '/integration-architect-study-guide' },
  { step: '2', name: 'Data Architect', fee: '$400', time: '110 min', summary: 'Data modelling, master data management, large data volumes, data governance, and migration strategy.', href: '/data-architect-study-guide' },
  { step: '3', name: 'Sharing & Visibility Architect', fee: '$400', time: '110 min', summary: 'Designing and implementing Salesforce sharing models, OWD, roles, profiles, permission sets, and territory management.', href: '/sharing-visibility-architect-study-guide' },
  { step: '4', name: 'Identity & Access Management Architect', fee: '$400', time: '110 min', summary: 'Identity protocols, SSO design, OAuth flows, connected apps, and Salesforce Identity implementation.', href: '/identity-access-management-architect-study-guide' },
  { step: '5', name: 'Dev Lifecycle & Deployment Architect', fee: '$400', time: '110 min', summary: 'Environment strategy, release management, CI/CD pipelines, team development, and deployment governance.', href: '/dev-lifecycle-deployment-architect-study-guide' },
]

const faqItems = [
  {
    question: 'What is the Salesforce System Architect credential?',
    answer: 'The Salesforce Certified System Architect is a credential awarded when you pass all five domain architect exams: Integration Architect, Data Architect, Sharing & Visibility Architect, Identity & Access Management Architect, and Dev Lifecycle & Deployment Architect. Each exam is a separate $400 proctored exam. Passing all five automatically awards the System Architect credential on your Trailhead profile.',
  },
  {
    question: 'What order should I take the System Architect domain exams?',
    answer: 'Most candidates start with Data Architect or Sharing & Visibility Architect — both are foundational and overlap heavily with Advanced Administrator knowledge. Integration Architect is typically third. IAM Architect and Dev Lifecycle & Deployment Architect can follow in any order, though many finish with Dev Lifecycle as it covers governance topics easier to contextualise after hands-on work in the other domains.',
  },
  {
    question: 'How long does it take to earn the System Architect credential?',
    answer: 'Most candidates spend 6–18 months earning all five domain exams, depending on experience and study intensity. Each domain exam typically requires 6–10 weeks of focused preparation. Candidates with 5+ years of Salesforce architect experience often move faster. There is no deadline — you can pass exams at your own pace and partial progress is still visible on your Trailhead profile.',
  },
  {
    question: 'What is the difference between System Architect and Application Architect?',
    answer: 'Salesforce Certified System Architect focuses on infrastructure and technical architecture: data, integration, identity, sharing, and deployment. Application Architect focuses on application-layer expertise: advanced administration, platform development, data modelling, and sharing design. Both credentials are required before applying for the CTA (Certified Technical Architect) Board Review.',
  },
  {
    question: 'Do Data Architect and Sharing & Visibility Architect count toward both credentials?',
    answer: 'Yes — both Data Architect and Sharing & Visibility Architect exams appear in both the System Architect and Application Architect credential requirements. If you are pursuing the CTA credential (which requires both System Architect and Application Architect), passing these two exams counts toward both credentials simultaneously, reducing the total unique exams needed.',
  },
]

export default function SystemArchitectStudyGuidePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/system-architect-study-guide" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />

      <div data-lcp-header className="mb-10">
        <div className="inline-flex items-center gap-2 bg-salesforce-blue/10 text-salesforce-dark text-sm font-semibold px-3 py-1 rounded-full mb-4">
          <span>Architect Credential Guide</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          Salesforce System Architect Study Guide ({RELEASE_CURRENT})
        </h1>
        <p className="text-lg text-gray-600">
          The System Architect credential is earned by passing five domain architect exams — not a single test. Here is what each exam covers, the recommended study order, and how to approach all five efficiently.
        </p>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-8">
        <h2 className="text-base font-bold text-blue-900 mb-1">Multi-exam credential</h2>
        <p className="text-sm text-blue-800">System Architect requires passing all five domain architect exams — each is a separate $400 proctored exam. The credential is automatically awarded on your Trailhead profile when all five are active. Both System Architect and Application Architect are prerequisites for the CTA Board Review.</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
        {[
          { label: 'Credential Type', value: 'Multi-Exam' },
          { label: 'Domain Exams', value: '5' },
          { label: 'Fee Per Exam', value: '$400' },
          { label: 'Est. Timeline', value: '6–18 mo' },
        ].map((stat) => (
          <div key={stat.label} className="bg-white rounded-xl border border-gray-100 p-4 text-center shadow-sm">
            <div className="text-2xl font-bold text-salesforce-blue">{stat.value}</div>
            <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">The Five Required Domain Exams</h2>
        <div className="space-y-4">
          {domainExams.map((exam) => (
            <div key={exam.name} className="flex gap-4 p-4 bg-gray-50 rounded-xl">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-salesforce-blue text-white flex items-center justify-center font-bold text-sm">{exam.step}</div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-3 mb-1">
                  <h3 className="font-semibold text-gray-900">{exam.name}</h3>
                  <div className="flex gap-3 text-xs text-gray-500 flex-shrink-0">
                    <span>{exam.fee}</span>
                    <span>{exam.time}</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-2">{exam.summary}</p>
                <Link href={exam.href} className="text-xs font-semibold text-salesforce-blue hover:underline">
                  View {exam.name} Study Guide →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Recommended Study Order</h2>
        <div className="space-y-3 text-sm text-gray-700">
          {[
            { phase: 'Phase 1', text: 'Data Architect + Sharing & Visibility Architect — Start here. Both exams have extensive overlap with Advanced Administrator knowledge. Data modelling and sharing models are foundational to all subsequent architect thinking.' },
            { phase: 'Phase 2', text: 'Integration Architect — Tackle this after building your data foundation. Integration patterns, APIs, and middleware design become more intuitive once you deeply understand the data layer.' },
            { phase: 'Phase 3', text: 'IAM Architect — Identity, SSO, and OAuth are highly specialised topics. Study these in isolation with dedicated focus on identity protocol concepts and Salesforce Identity.' },
            { phase: 'Phase 4', text: 'Dev Lifecycle & Deployment Architect — Finish here. Governance and deployment topics are easier to contextualise after hands-on work across the other four domains.' },
          ].map((item) => (
            <div key={item.phase} className="flex gap-3">
              <span className="font-bold text-salesforce-blue min-w-[72px] flex-shrink-0">{item.phase}</span>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">What the System Architect Credential Signals</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700">
          {[
            { title: 'Technical architecture depth', body: 'Demonstrates mastery across all five core Salesforce technical architecture domains — data, integration, identity, security, and deployment lifecycle.' },
            { title: 'CTA prerequisite', body: 'System Architect (plus Application Architect) is required before applying for the Certified Technical Architect Board Review — the highest Salesforce credential.' },
            { title: 'Partner tier impact', body: 'Salesforce consulting partners count System Architect credentials toward partner tier requirements, making holders especially valuable to employers.' },
            { title: 'Career premium', body: 'System Architect holders typically qualify for senior architect and principal architect roles commanding significant salary premium over standard certification holders.' },
          ].map((item) => (
            <div key={item.title} className="bg-gray-50 rounded-xl p-4">
              <p className="font-semibold text-gray-900 mb-1">{item.title}</p>
              <p>{item.body}</p>
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
          <li><Link href="/system-architect-vs-application-architect" className="text-sm text-salesforce-blue hover:underline font-medium">→ System Architect vs Application Architect — full comparison</Link></li>
          <li><Link href="/how-to-become-salesforce-architect" className="text-sm text-salesforce-blue hover:underline font-medium">→ How to become a Salesforce Architect — career path guide</Link></li>
        </ul>
      </div>


      <div className="bg-salesforce-blue rounded-xl p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-2">Practice for Each Domain Exam</h2>
        <p className="text-blue-100 mb-6">Free practice questions for every domain exam in the System Architect credential path.</p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/certifications/integration-architect" className="inline-flex items-center px-5 py-3 bg-white text-salesforce-blue rounded-lg font-semibold hover:bg-blue-50 transition-colors text-sm">
            Integration Architect Practice
          </Link>
          <Link href="/certifications/data-architect" className="inline-flex items-center px-5 py-3 border border-white/40 text-white rounded-lg font-semibold hover:bg-white/10 transition-colors text-sm">
            Data Architect Practice
          </Link>
        </div>
      </div>
    </div>
  )
}
