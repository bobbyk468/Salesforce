import type { Metadata } from 'next'
import Link from '@/components/AppLink'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import DifficultyHeatmap from '@/components/DifficultyHeatmap'
import { buildStudyGuideTitle } from '@/lib/seo-title-helpers'
import ExamTipsCrossLink from '@/components/ExamTipsCrossLink'
import CertInsightBlock from '@/components/CertInsightBlock'
import CredentialSchema from '@/components/CredentialSchema'
import LastUpdated from '@/components/LastUpdated'





const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const slug = 'system-architect'
const pageTitle = buildStudyGuideTitle(slug)
const pageDescription = `Study the four exams required for Salesforce System Architect, review each scope, and follow a suggested order with free practice.`
export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: {
    canonical: `${siteUrl}/system-architect-study-guide`,
    languages: { 'en-US': `${siteUrl}/system-architect-study-guide`, 'x-default': `${siteUrl}/system-architect-study-guide` },
  },
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
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'System Architect', url: '/certifications/system-architect' },
  { name: 'System Architect Study Guide', url: '/system-architect-study-guide' },
]

const domainExams = [
  { step: '1', name: 'Platform Developer I', fee: '$200', time: 'Developer exam', summary: 'Apex, SOQL, triggers, testing and the data model. The base the three architect exams build on. It also counts toward Application Architect.', href: '/pd1-study-guide' },
  { step: '2', name: 'Integration Architect', fee: '$400', time: 'Architect exam', summary: 'Choosing integration patterns, picking the right API, planning for failures, and deciding when to use middleware.', href: '/integration-architect-study-guide' },
  { step: '3', name: 'Identity & Access Management Architect', fee: '$400', time: 'Architect exam', summary: 'Single sign-on with SAML, OAuth flows, Connected Apps, My Domain, and how users are created and kept up to date.', href: '/identity-access-management-architect-study-guide' },
  { step: '4', name: 'Dev Lifecycle & Deployment Architect', fee: '$400', time: 'Architect exam', summary: 'Sandbox plans, source control, testing, CI/CD pipelines and release management.', href: '/dev-lifecycle-deployment-architect-study-guide' },
]

const faqItems = [
  {
    question: 'What is the Salesforce System Architect credential?',
    answer: 'System Architect is a credential you earn by holding four certifications: Platform Developer I, Integration Architect, Identity and Access Management Architect, and Development Lifecycle and Deployment Architect. There is no separate System Architect exam. Once all four are active, the credential is added to your Trailhead profile.',
  },
  {
    question: 'What order should I take the System Architect exams?',
    answer: 'Most people take Platform Developer I first, because the architect exams assume you know Apex and the data model. After that. Pick the architect exam closest to your day job. Many start with Integration Architect, then Identity and Access Management, and finish with Development Lifecycle and Deployment.',
  },
  {
    question: 'How long does it take to earn the System Architect credential?',
    answer: 'It depends on your experience. Many people plan 6 to 10 weeks of study per architect exam, which adds up to roughly 6 to 12 months for all four. There is no deadline, and each exam you pass shows on your Trailhead profile straight away.',
  },
  {
    question: 'What is the difference between System Architect and Application Architect?',
    answer: 'System Architect covers how Salesforce connects to everything else: integrations, logins and identity, and how changes are released. Application Architect covers what is built inside Salesforce: the data model, sharing, and declarative and code-based development. You need both before you can go for Certified Technical Architect (CTA).',
  },
  {
    question: 'Do any exams count toward both System Architect and Application Architect?',
    answer: 'Yes, one. Platform Developer I counts toward both. Data Architect and Sharing and Visibility Architect are part of Application Architect only, and Integration, Identity and Access Management, and Development Lifecycle are part of System Architect only. So if you want both credentials, you need seven different certifications in total.',
  },
]

export default function SystemArchitectStudyGuidePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/system-architect-study-guide" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />
      <CredentialSchema
        certSlug="system-architect"
        certName="System Architect"
        description={pageDescription}
        pageUrl="/system-architect-study-guide"
      />

      <div data-lcp-header className="mb-10">
        <div className="inline-flex items-center gap-2 bg-salesforce-blue/10 text-salesforce-dark text-sm font-semibold px-3 py-1 rounded-full mb-4">
          <span>Architect Credential Guide</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          Salesforce System Architect Study Guide ({RELEASE_CURRENT})
        </h1>
        <LastUpdated />
        <p className="text-lg text-gray-600">
          There is no single System Architect exam. You earn the credential by holding four certifications. Here is what each one covers, a sensible order to take them, and how to plan your study.
        </p>
      </div>

      <ContentPageAuthor />
      <ExamTipsCrossLink examTipsSlug="system-architect-exam-tips" certName="System Architect" />
      <CertInsightBlock certSlug="system-architect" />

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-8">
        <h2 className="text-base font-bold text-blue-900 mb-1">Multi-exam credential</h2>
        <p className="text-sm text-blue-800">System Architect needs four certifications: Platform Developer I and three architect exams. There is no extra exam at the end. The credential is added to your Trailhead profile once all four are active. You need both System Architect and Application Architect before the CTA review board.</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
        {[
          { label: 'Credential Type', value: 'Multi-Exam' },
          { label: 'Required Exams', value: '4' },
          { label: 'Total Fees', value: '$1,400' },
          { label: 'Est. Timeline', value: '6–12 mo' },
        ].map((stat) => (
          <div key={stat.label} className="bg-white rounded-xl border border-gray-100 p-4 text-center shadow-sm">
            <div className="text-2xl font-bold text-salesforce-blue">{stat.value}</div>
            <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">The Four Required Exams</h2>
        <div className="space-y-4">
          {domainExams.map((exam) => (
            <div key={exam.name} className="flex gap-4 p-4 bg-gray-50 rounded-xl">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-salesforce-blue text-white flex items-center justify-center font-bold text-sm">{exam.step}</div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-3 mb-1">
                  <h3 className="font-semibold text-gray-900">{exam.name}</h3>
                  <div className="flex gap-3 text-xs text-gray-600 flex-shrink-0">
                    <span>{exam.fee}</span>
                    <span>{exam.time}</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-2">{exam.summary}</p>
                <Link href={exam.href} className="text-xs font-semibold text-salesforce-dark hover:underline">
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
            { phase: 'Phase 1', text: 'Platform Developer I. Start here. The architect exams assume you can read Apex. Know the governor limits and understand the data model.' },
            { phase: 'Phase 2', text: 'Integration Architect. Patterns, APIs, error handling and middleware. It builds directly on what you learned about callouts and async Apex in Platform Developer I.' },
            { phase: 'Phase 3', text: 'Identity and Access Management Architect. SAML, OAuth and user provisioning are a world of their own, so give this exam focused time. Integration work helps, since OAuth shows up in both.' },
            { phase: 'Phase 4', text: 'Dev Lifecycle and Deployment Architect. Many people finish here, because release planning is easier to think about once you have seen the other areas.' },
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
            { title: 'Technical architecture depth', body: 'Shows you can design how Salesforce connects to other systems, how people log in, and how changes reach production safely.' },
            { title: 'CTA prerequisite', body: 'System Architect (plus Application Architect) is required before applying for the Certified Technical Architect Board Review, the highest Salesforce credential.' },
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
          <li><Link href="/system-architect-vs-application-architect" className="text-sm text-salesforce-dark hover:underline font-medium">→ System Architect vs Application Architect, full comparison</Link></li>
          <li><Link href="/how-to-become-salesforce-architect" className="text-sm text-salesforce-dark hover:underline font-medium">→ How to become a Salesforce Architect, career path guide</Link></li>
        </ul>
      </div>


      <div className="bg-salesforce-blue rounded-xl p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-2">Practice for Each Domain Exam</h2>
        <p className="text-white mb-6">Free practice questions for every domain exam in the System Architect credential path.</p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/certifications/integration-architect" className="inline-flex items-center px-5 py-3 bg-white text-salesforce-blue rounded-lg font-semibold hover:bg-blue-50 transition-colors text-sm">
            Integration Architect Practice
          </Link>
          <Link href="/certifications/dev-lifecycle-deployment-architect" className="inline-flex items-center px-5 py-3 border border-white/40 text-white rounded-lg font-semibold hover:bg-white/10 transition-colors text-sm">
            Dev Lifecycle Architect Practice
          </Link>
        </div>
      </div>

      
            <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">What Comes After This Certification?</h2>
        <p className="text-sm text-gray-700">
          After System Architect, consider: <Link href="/certifications/application-architect" className="text-salesforce-blue font-medium hover:underline">Application Architect</Link>, <Link href="/architect-certification-path" className="text-salesforce-blue font-medium hover:underline">the full architect path</Link>, or <Link href="/certifications/technical-architect" className="text-salesforce-blue font-medium hover:underline">Technical Architect (CTA)</Link>.
        </p>
      </section>

      <DifficultyHeatmap slug="system-architect" />
      {/* Hub CTA */}
      <div className="bg-salesforce-blue rounded-xl p-8 text-center text-white mt-10">
        <h2 className="text-2xl font-bold mb-2">Ready to Test Your Knowledge?</h2>
        <p className="text-white mb-6">Try the System Architect free practice exam, scored with full explanations.</p>
        <Link
          href="/certifications/system-architect"
          className="inline-flex items-center px-6 py-3 bg-white text-salesforce-blue rounded-lg font-semibold hover:bg-blue-50 transition-colors"
        >
          System Architect Free Practice Exam &rarr;
        </Link>
      </div>
    </div>
  )
}