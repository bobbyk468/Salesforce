import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, Clock, Target, ArrowRight } from 'lucide-react'
import { getWebPageJsonLd, getBreadcrumbListJsonLd, getArticleJsonLd, getFaqPageJsonLd } from '@/lib/schema-data'
import { RELEASE_CURRENT } from '@/lib/release-data'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'

const pageTitle = `Identity & Access Management Architect Exam Tips (${RELEASE_CURRENT})`
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription =
  `Salesforce IAM Architect exam tips for ${RELEASE_CURRENT}: SSO, OAuth, connected apps, identity providers, and scenario strategy to pass first attempt.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/identity-access-management-architect-exam-tips` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/identity-access-management-architect-exam-tips`,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: ogImageUrl, alt: pageTitle }],
  },
  keywords:
    `Salesforce IAM Architect exam tips ${RELEASE_CURRENT}, Identity Access Management Architect study guide, how to pass IAM Architect, Salesforce SSO certification`,
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'IAM Architect Exam Tips', url: '/identity-access-management-architect-exam-tips' },
]

const faqItems = [
  {
    question: 'What is the Salesforce IAM Architect exam format?',
    answer: 'The Salesforce Identity & Access Management Architect exam has 60 multiple-choice questions, a 105-minute time limit, a 63% passing score, and a $200 fee. It is a component exam for the System Architect role-based credential and tests SSO, OAuth, SAML, and identity federation architecture.',
  },
  {
    question: 'What are the highest-weight IAM Architect exam sections?',
    answer: 'Salesforce Identity Fundamentals (28%) and Single Sign-On (26%) together account for 54% of the IAM Architect exam. OAuth flows, SAML configuration, and Connected App design are the most heavily tested topics.',
  },
  {
    question: 'What is the hardest part of the IAM Architect exam?',
    answer: 'OAuth flow selection is the most nuanced section — candidates must know all five OAuth flows (Web Server, User-Agent, JWT Bearer Token, Username-Password, Device), when each is appropriate, and the security implications of each. SAML vs. OAuth decision-making for SSO scenarios is also heavily tested.',
  },
  {
    question: 'What prerequisites help with the IAM Architect exam?',
    answer: 'Salesforce Administrator (ADM-201) knowledge of profiles, permission sets, and the Salesforce security model is the best foundation. Real experience configuring SSO with an identity provider (Okta, Azure AD, Ping), setting up Connected Apps, and troubleshooting OAuth flows is essential.',
  },
]

export default function IamArchitectExamTipsPage() {
  const webPageJsonLd = getWebPageJsonLd({ name: pageTitle, description: pageDescription, path: '/identity-access-management-architect-exam-tips', breadcrumbItems })
  const breadcrumbJsonLd = getBreadcrumbListJsonLd(breadcrumbItems)
  const articleJsonLd = getArticleJsonLd({ headline: pageTitle, description: pageDescription, path: '/identity-access-management-architect-exam-tips' })
  const faqJsonLd = getFaqPageJsonLd(faqItems)

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <header data-lcp-header className="mb-10">
        <p className="inline-flex items-center rounded-full bg-salesforce-blue/10 px-3 py-1 text-sm font-medium text-salesforce-blue mb-4">
          Updated for {RELEASE_CURRENT}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Salesforce IAM Architect Exam Tips ({RELEASE_CURRENT}): How to Pass Identity &amp; Access Management
        </h1>
        <p className="text-lg text-gray-600">
          The Identity &amp; Access Management Architect exam tests your ability to design secure authentication
          and authorisation architectures for Salesforce. These tips focus on OAuth flows, SSO patterns,
          and the identity federation scenarios that make up the majority of exam questions.
        </p>
      </header>

      <section className="rounded-xl border border-gray-100 bg-gray-50 p-5 mb-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">Exam At a Glance</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div>
            <p className="text-2xl font-bold text-salesforce-blue">60</p>
            <p className="text-xs text-gray-500 mt-0.5">Questions</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-salesforce-blue">105 min</p>
            <p className="text-xs text-gray-500 mt-0.5">Time Limit</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-salesforce-blue">65%</p>
            <p className="text-xs text-gray-500 mt-0.5">Passing Score</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-salesforce-blue">$200</p>
            <p className="text-xs text-gray-500 mt-0.5">Exam Fee</p>
          </div>
        </div>
      </section>


      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Quick Answer: What IAM Architect Tests</h2>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>OAuth flows</strong> — All five OAuth 2.0 flows, when each is appropriate, and the security trade-offs. JWT Bearer Token and Web Server flows are the most tested for enterprise scenarios.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>SAML and SSO</strong> — SAML 2.0 configuration (IdP-initiated vs. SP-initiated), federation with external identity providers, and Just-in-Time (JIT) provisioning.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Connected Apps and scopes</strong> — Connected App design, OAuth scopes, IP restrictions, session policies, and when to use Named Credentials vs. Connected Apps for integrations.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Highest-Weight Exam Sections</h2>
        <div className="space-y-3 text-sm text-gray-700">
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Salesforce Identity Fundamentals</span>
            <span className="font-bold text-salesforce-blue ml-4">28%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Single Sign-On (SSO)</span>
            <span className="font-bold text-salesforce-blue ml-4">26%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Connected Apps</span>
            <span className="font-bold text-salesforce-blue ml-4">17%</span>
          </div>
          <div className="flex justify-between items-start">
            <span className="font-medium text-gray-900">Delegated Authentication and Multi-Factor</span>
            <span className="font-bold text-salesforce-blue ml-4">12%</span>
          </div>
          <p className="text-xs text-gray-500 pt-1">Identity Fundamentals + SSO = 54%. OAuth flows and SAML configuration are your most critical study areas.</p>
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Scenario Strategy: How to Approach IAM Questions</h2>
        <p className="text-sm text-gray-700 mb-3">
          IAM questions describe an authentication or integration scenario and ask which OAuth flow, SAML configuration,
          or identity pattern is correct. The key is identifying who initiates the flow and whether a user is involved.
        </p>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />Server-to-server with no user interaction = JWT Bearer Token flow. User logs in via web browser = Web Server flow. Mobile app with user = User-Agent flow. Legacy system with no browser = Username-Password (flag as insecure but still tested).</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For SSO questions: IdP-initiated means the user starts at the identity provider; SP-initiated means the user starts at Salesforce. Know both flows and which metadata needs to be exchanged.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />JIT provisioning creates/updates Salesforce users on first login using attributes in the SAML assertion — use it when you cannot pre-provision users in bulk.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For MFA questions: Salesforce requires MFA for all users. Verify whether a third-party MFA (from an IdP like Okta) satisfies the Salesforce MFA requirement — it does if configured correctly.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Mock-Test Benchmark Before Booking</h2>
        <p className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2">
          <Clock className="h-4 w-4" />
          76%+ on 3 timed full mocks before booking
        </p>
        <p className="text-sm text-gray-700 mt-3">
          IAM Architect has a steep learning curve for candidates who haven&apos;t configured SSO or OAuth in a real environment.
          Build a Connected App, configure SSO with an identity provider, and test each OAuth flow in a sandbox
          before sitting the exam.
        </p>
      </section>


      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
        <dl className="space-y-4">
          {faqItems.map((item, i) => (
            <div key={i} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
              <dt className="font-semibold text-gray-900 mb-1">{item.question}</dt>
              <dd className="text-sm text-gray-700" dangerouslySetInnerHTML={{ __html: item.answer }} />
            </div>
          ))}
        </dl>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Related Exam Tips</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/sharing-visibility-architect-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Sharing Visibility Architect Exam Tips</span>
          </Link>
          <Link href="/system-architect-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">System Architect Exam Tips</span>
          </Link>
          <Link href="/adm-201-exam-tips-2026" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">ADM-201 Exam Tips</span>
          </Link>
          <Link href="/architect-certification-path" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Architect Certification Path</span>
          </Link>
        </div>
      </section>


      <section className="rounded-xl border border-salesforce-blue/20 bg-salesforce-blue/5 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Start IAM Architect Prep</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/certifications/identity-access-management-architect" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-colors">
            IAM Architect Practice Questions <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/system-architect-exam-tips" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            System Architect Exam Tips
          </Link>
          <Link href="/architect-certification-path" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            Architect Certification Path
          </Link>
        </div>
      </section>
    </div>
  )
}
