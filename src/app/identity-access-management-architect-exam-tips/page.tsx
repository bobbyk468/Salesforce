import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, Clock, Target, ArrowRight } from 'lucide-react'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import ExamTipsCertLink from '@/components/ExamTipsCertLink'
import { getConceptFaqs } from '@/lib/exam-tips-concept-faqs'
import { buildExamTipsTitle } from '@/lib/seo-title-helpers'
import StudyGuideCrossLink from '@/components/StudyGuideCrossLink'
import ExamPricingCard from '@/components/ExamPricingCard'




const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const slug = 'identity-access-management-architect'

const pageTitle = buildExamTipsTitle(slug)
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription =
  `Salesforce IAM Architect exam tips for ${RELEASE_CURRENT}: SSO, OAuth, connected apps, identity providers. Scenario tips to pass first attempt.`

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
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Identity & Access Management Architect', url: '/certifications/identity-access-management-architect' },
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
  {
    question: 'What concepts do most Identity & Access Management Architect candidates get wrong?',
    answer: 'The most commonly misunderstood topics for the Identity & Access Management Architect exam are: (1) OAuth 2.0 Flows — Authorization Code vs JWT Bearer vs Client Credentials; (2) Named Credentials vs Auth. Providers — Outbound vs Inbound Identity; (3) Delegated Authentication vs SSO — Custom Login vs Federated Identity. Candidates are most confidently wrong on these — learn the distinctions early to avoid losing marks on questions you expect to get right.',
  },
  ...getConceptFaqs('identity-access-management-architect-exam-tips'),
]

export default function IamArchitectExamTipsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/identity-access-management-architect-exam-tips" breadcrumbItems={breadcrumbItems} faqItems={faqItems}   mainEntityUrl="/identity-access-management-architect-study-guide"
      />

      <header data-lcp-header className="mb-10">
        <p className="inline-flex items-center rounded-full bg-salesforce-blue/10 px-3 py-1 text-sm font-medium text-salesforce-dark mb-4">
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

      <ContentPageAuthor />

      <ExamTipsCertLink certSlug={slug} />
      <StudyGuideCrossLink studyGuideSlug="identity-access-management-architect-study-guide" certName="Identity & Access Management Architect" />
      <ExamPricingCard
        certSlug="identity-access-management-architect"
        certName="Identity & Access Management Architect"
        certPageSlug="identity-access-management-architect"
      />


      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Fast Facts: IAM Architect Focus Areas</h2>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>OAuth flows</strong> — All five OAuth 2.0 flows, when each is appropriate, and the security trade-offs. JWT Bearer Token and Web Server flows are the most tested for enterprise scenarios.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>SAML and SSO</strong> — SAML 2.0 configuration (IdP-initiated vs. SP-initiated), federation with external identity providers, and Just-in-Time (JIT) provisioning.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Connected Apps and scopes</strong> — Connected App design, OAuth scopes, IP restrictions, session policies, and when to use Named Credentials vs. Connected Apps for integrations.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Section Weightings to Prioritise</h2>
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
          <p className="text-xs text-gray-600 pt-1">Identity Fundamentals + SSO = 54%. OAuth flows and SAML configuration are your most critical study areas.</p>
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
        <h2 className="text-xl font-bold text-gray-900 mb-3">How to Know You&apos;re Ready</h2>
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


            <section className="rounded-xl border border-amber-100 bg-amber-50 p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-2">3 Concepts That Fail Most Identity &amp; Access Management Architect Candidates</h2>
        <p className="text-sm text-gray-600 mb-5">These are not the hardest topics — they are the ones where candidates are <strong>most confidently wrong</strong>. Learn the distinction early.</p>
        <div className="space-y-5">
          <div>
            <p className="font-semibold text-gray-900 mb-1">1. OAuth 2.0 Flows — Authorization Code vs JWT Bearer vs Client Credentials</p>
            <p className="text-sm text-gray-700">Authorization Code flow is for user-facing apps where a human logs in (most common). JWT Bearer flow is for server-to-server integration where a trusted server asserts a user identity without a login prompt. Client Credentials flow is for machine-to-machine with no user context. Candidates use Authorization Code for server integrations — the exam expects JWT Bearer for server-to-server with user context assertion and Client Credentials for pure system calls.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1">2. Named Credentials vs Auth. Providers — Outbound vs Inbound Identity</p>
            <p className="text-sm text-gray-700">Named Credentials store the endpoint URL, authentication method, and credentials for Salesforce making outbound callouts to external systems. Auth. Providers configure Salesforce as a service provider (SP) for inbound Single Sign-On — external users log in via an external Identity Provider (IdP). Candidates configure Named Credentials for SSO — the exam expects Auth. Provider + SAML or OIDC for SSO and Named Credentials for outbound callouts.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1">3. Delegated Authentication vs SSO — Custom Login vs Federated Identity</p>
            <p className="text-sm text-gray-700">Delegated Authentication calls a custom web service endpoint to validate Salesforce login credentials against an external system (legacy LDAP integration). SAML/OIDC SSO federates identity by trusting an external IdP&apos;s assertion without re-validating credentials. Delegated Auth is legacy and should not be recommended for new implementations — the exam expects SAML or OIDC SSO for modern identity federation.</p>
          </div>
        </div>
      </section>

<section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">FAQs From Candidates</h2>
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
        <h2 className="text-xl font-bold text-gray-900 mb-4">Keep Studying</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/sharing-visibility-architect-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Sharing Visibility Architect Exam Tips</span>
          </Link>
          <Link href="/system-architect-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">System Architect Exam Tips</span>
          </Link>
          <Link href="/adm-201-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
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
        <p className="text-xs text-gray-600 mt-4">
          After this exam, consider <Link href="/certifications/application-architect" className="text-salesforce-blue underline">Application Architect</Link> or <Link href="/certifications/system-architect" className="text-salesforce-blue underline">System Architect</Link> next.
        </p>
      </section>
    </div>
  )
}