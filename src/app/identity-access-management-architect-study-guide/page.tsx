import type { Metadata } from 'next'
import Link from 'next/link'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const pageTitle = `Identity & Access Management Architect Study Guide (${RELEASE_CURRENT})`
const pageDescription = `Salesforce IAM Architect study guide (${RELEASE_CURRENT}): SAML, OAuth 2.0, SSO design, connected apps, MFA. $400 fee, 60 questions, ~68% passing score.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/identity-access-management-architect-study-guide` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/identity-access-management-architect-study-guide`,
    images: [{ url: `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`, alt: pageTitle }],
  },
  keywords: `salesforce IAM architect study guide, identity access management architect 2026, SAML OAuth Salesforce exam, SSO salesforce architect certification`,
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Identity & Access Management Architect Study Guide', url: '/identity-access-management-architect-study-guide' },
]

const examSections = [
  { name: 'Identity Protocols & Concepts', weight: 30, note: 'SAML 2.0: assertions (authentication, attribute, authorisation), SP-initiated vs IdP-initiated SSO flows. OAuth 2.0: authorisation code, implicit, client credentials, device, JWT bearer token flows. OpenID Connect: ID token, UserInfo endpoint, OIDC as identity layer on top of OAuth. When to use SAML vs OAuth vs OIDC.' },
  { name: 'SSO Design & Implementation', weight: 25, note: 'Configuring Salesforce as an Identity Provider (IdP) and as a Service Provider (SP). My Domain: requirement for SSO, custom subdomain design. Federated authentication vs delegated authentication vs Salesforce-managed credentials. Just-in-time (JIT) provisioning for user creation via SSO. Single Logout (SLO) design.' },
  { name: 'OAuth & Connected Apps', weight: 25, note: 'Connected Apps: creating, configuring scopes, IP relaxation, permitted users, session policies. Named credentials: per-user vs named principal OAuth. OAuth flows: which flow for which use case — web app (Web Server), mobile (PKCE), server-to-server (JWT Bearer), legacy (Username-Password). Token storage, refresh tokens, and expiry.' },
  { name: 'Community & External Identity', weight: 15, note: 'Experience Cloud identity: self-registration, social login (Google, Facebook, LinkedIn), External Identity licences. Auth providers: configuring third-party social login via Auth Provider framework. Registration handlers: custom Apex to control user provisioning from external IdPs. Digital experiences and B2C identity patterns.' },
  { name: 'MFA & Security Policies', weight: 5, note: 'Salesforce MFA enforcement: Salesforce Authenticator, TOTP apps, security keys. MFA requirement timeline and enforcement for direct logins. Session security levels and policies. IP restrictions: trusted IP ranges at org level, profile level, connected app level. Login hours and session timeout configuration.' },
]

const faqItems = [
  {
    question: 'What is the Salesforce IAM Architect certification?',
    answer: 'The Identity & Access Management Architect certification validates expertise in designing identity solutions for Salesforce — including SSO (SAML, OAuth, OIDC), connected apps, external identity for Experience Cloud, MFA enforcement, and session security. The exam has 60 questions, ~110-minute time limit, ~68% passing score, and a $400 fee. It is part of the System Architect credential path.',
  },
  {
    question: 'What is the difference between SAML and OAuth?',
    answer: 'SAML (Security Assertion Markup Language) is an XML-based protocol designed for SSO — it passes authentication assertions between an Identity Provider and a Service Provider, allowing users to sign in once and access multiple applications. OAuth 2.0 is an authorisation framework — it grants applications access to resources on behalf of a user without sharing credentials. OpenID Connect (OIDC) adds an identity layer on top of OAuth, returning a signed ID token with user identity claims. For Salesforce SSO, SAML is traditional enterprise IdP integration; OAuth/OIDC is used for API access and modern apps.',
  },
  {
    question: 'What is JIT provisioning in Salesforce?',
    answer: 'Just-in-Time (JIT) provisioning automatically creates or updates a Salesforce user account when they first log in via SSO, using attributes passed in the SAML assertion. Without JIT, you must pre-create user accounts before SSO works. With JIT, the IdP passes user attributes (name, email, profile, role) in the SAML assertion, and Salesforce creates the account on first login. JIT can also be used to update user attributes on every login.',
  },
  {
    question: 'Which OAuth flow should I use for server-to-server integration?',
    answer: 'For server-to-server integrations where no user is present (background jobs, integration middleware), use the OAuth 2.0 JWT Bearer Token Flow. The server signs a JWT with a private key (the corresponding certificate is uploaded to the Connected App), and exchanges it for an access token — no user interaction required. This is more secure than Username-Password flow (which passes credentials in the request) and is the recommended pattern for Salesforce APIs in automated processes.',
  },
  {
    question: 'How long should I study for the IAM Architect exam?',
    answer: 'Plan for 10–12 weeks with 10–15 hours per week. The exam requires deep understanding of identity protocols that many Salesforce developers have not worked with extensively. Set up SSO in a Salesforce dev org using a free IdP (like Okta Developer, Auth0, or PingOne free tier) to gain hands-on experience. Configuring both SP-initiated and IdP-initiated SSO, connected apps, and JIT provisioning in a real environment significantly improves exam performance.',
  },
]

export default function IdentityAccessManagementArchitectStudyGuidePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/identity-access-management-architect-study-guide" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />

      <div data-lcp-header className="mb-10">
        <div className="inline-flex items-center gap-2 bg-salesforce-blue/10 text-salesforce-blue text-sm font-semibold px-3 py-1 rounded-full mb-4">
          <span>Study Guide</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          Salesforce Identity &amp; Access Management Architect Study Guide ({RELEASE_CURRENT})
        </h1>
        <p className="text-lg text-gray-600">
          Your complete guide to passing the IAM Architect exam — SAML, OAuth 2.0, OIDC, SSO design, connected apps, JIT provisioning, and MFA.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
        {[
          { label: 'Questions', value: '60' },
          { label: 'Time Limit', value: '110 min' },
          { label: 'Passing Score', value: '~68%' },
          { label: 'Exam Fee', value: '$400' },
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
              <div className="flex justify-between text-sm mb-1">
                <span className="font-medium text-gray-800">{section.name}</span>
                <span className="text-salesforce-blue font-semibold">{section.weight}%</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div className="bg-salesforce-blue h-2 rounded-full" style={{ width: `${section.weight * 3.3}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">What Each Section Tests</h2>
        <div className="space-y-4">
          {examSections.map((section) => (
            <div key={section.name} className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 mt-0.5 inline-flex items-center justify-center w-7 h-7 rounded-full bg-salesforce-blue/10 text-salesforce-blue text-xs font-bold">{section.weight}%</span>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{section.name}</h3>
                  <p className="text-sm text-gray-600">{section.note}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">10-Week Study Plan</h2>
        <div className="space-y-3 text-sm">
          {[
            { week: 'Week 1', focus: 'Identity fundamentals — understand authentication vs authorisation vs federation. Study SAML 2.0 assertions, IdP vs SP roles, and SP-initiated vs IdP-initiated flows at a conceptual level.' },
            { week: 'Week 2', focus: 'OAuth 2.0 flows — study all major flows: Authorisation Code (+ PKCE), Client Credentials, JWT Bearer, Device, Username-Password. Draw a sequence diagram for each. Understand which flows Salesforce supports.' },
            { week: 'Week 3', focus: 'Salesforce as SP — configure SSO in a dev org using a free IdP (Okta Developer or Auth0 free tier). Set up My Domain, create an Auth Provider, and test SP-initiated login.' },
            { week: 'Week 4', focus: 'Salesforce as IdP — configure Salesforce as an Identity Provider for a connected app. Test IdP-initiated SSO. Understand when Salesforce acts as each role.' },
            { week: 'Week 5', focus: 'JIT Provisioning — configure JIT provisioning in your dev org. Map SAML attributes to Salesforce user fields. Test automatic user creation on first SSO login.' },
            { week: 'Week 6', focus: 'Connected Apps — create and configure a connected app with OAuth 2.0. Test the Web Server flow using Postman. Configure scopes, IP relaxation, and permitted users.' },
            { week: 'Week 7', focus: 'Named credentials — configure per-user OAuth and named principal OAuth named credentials. Understand when each is appropriate for external integrations.' },
            { week: 'Week 8', focus: 'External Identity — configure social login (Google) in an Experience Cloud site using Auth Provider. Write a custom registration handler in Apex.' },
            { week: 'Week 9', focus: 'MFA and security policies — configure MFA in your org using Salesforce Authenticator. Review session security levels, IP restriction layers, and login hour policies.' },
            { week: 'Week 10', focus: 'Full mock exams. Identity Protocols (30%) + SSO Design (25%) = 55% of the exam. Master SAML vs OAuth decision scenarios. Aim for 75%+ before booking.' },
          ].map((item) => (
            <div key={item.week} className="flex gap-3">
              <span className="flex-shrink-0 font-semibold text-salesforce-blue w-16">{item.week}</span>
              <span className="text-gray-700">{item.focus}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Scenario Strategy Tips</h2>
        <ul className="space-y-3 text-sm text-gray-700">
          <li className="flex gap-2"><span className="text-salesforce-blue font-bold flex-shrink-0">1.</span><span><strong>SAML = SSO for enterprise users; OAuth = API access:</strong> When a scenario says &quot;employees need to log into Salesforce using their corporate credentials,&quot; the answer is SAML SSO. When a scenario says &quot;an application needs to access Salesforce data on behalf of a user,&quot; the answer is OAuth 2.0.</span></li>
          <li className="flex gap-2"><span className="text-salesforce-blue font-bold flex-shrink-0">2.</span><span><strong>JWT Bearer for server-to-server:</strong> Any scenario involving background jobs, integration middleware, or automated processes accessing Salesforce APIs — without a user present — should use JWT Bearer Token flow. Never Username-Password flow for production systems.</span></li>
          <li className="flex gap-2"><span className="text-salesforce-blue font-bold flex-shrink-0">3.</span><span><strong>JIT for large user populations:</strong> If a scenario involves many external users who should be automatically provisioned, JIT is the correct answer over manual user creation or pre-provisioning scripts. JIT can create and update users with every login.</span></li>
          <li className="flex gap-2"><span className="text-salesforce-blue font-bold flex-shrink-0">4.</span><span><strong>My Domain is required:</strong> SSO, connected apps with OAuth, and Lightning features all require My Domain. Any question about enabling SSO for an org assumes My Domain is configured first.</span></li>
        </ul>
      </div>

      <div className="bg-salesforce-blue/5 rounded-xl border border-salesforce-blue/20 p-5 mb-8">
        <h2 className="text-lg font-bold text-gray-900 mb-2">Mock Exam Benchmark</h2>
        <p className="text-sm text-gray-700">Aim for <strong>75%+ on practice exams</strong> before scheduling. IAM Architect is protocol-heavy — many candidates who know Salesforce well struggle because they haven&apos;t worked with SAML and OAuth deeply. Hands-on SSO configuration is the best preparation. If you can configure SSO end-to-end from scratch, you are ready.</p>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Top 10 Concepts to Review</h2>
        <ol className="space-y-2 text-sm text-gray-700 list-decimal list-inside">
          <li>SAML 2.0: IdP vs SP roles, assertion types, SP-initiated vs IdP-initiated flows</li>
          <li>OAuth 2.0 flows: when to use each (Web Server, JWT Bearer, Client Credentials, Device)</li>
          <li>OpenID Connect: ID token, UserInfo endpoint, OIDC vs OAuth scope</li>
          <li>My Domain: why it is required, custom subdomain, login policy settings</li>
          <li>JIT provisioning: attribute mapping, user creation and update on login</li>
          <li>Connected Apps: scopes, IP relaxation, permitted users, session policies</li>
          <li>Named credentials: per-user OAuth vs named principal — when each applies</li>
          <li>Auth Providers: configuring social login, custom registration handlers</li>
          <li>MFA: Salesforce Authenticator, TOTP, security keys — enforcement levels</li>
          <li>Session security: trusted IP ranges, login hours, session timeout, security levels</li>
        </ol>
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
        <h2 className="text-2xl font-bold mb-2">Ready to Practice?</h2>
        <p className="text-blue-100 mb-6">Free IAM Architect practice questions covering SAML, OAuth, SSO design, and connected apps.</p>
        <Link
          href="/certifications/identity-access-management-architect"
          className="inline-flex items-center px-6 py-3 bg-white text-salesforce-blue rounded-lg font-semibold hover:bg-blue-50 transition-colors"
        >
          Start Free Practice Questions
        </Link>
      </div>
    </div>
  )
}
