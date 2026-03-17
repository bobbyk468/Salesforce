import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, Clock, ArrowRight, BookOpen } from 'lucide-react'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import RelatedGuides from '@/components/RelatedGuides'
import { getRelatedGuides } from '@/lib/related-guides-data'
import { RELEASE_CURRENT } from '@/lib/release-data'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const pageTitle = `How to Become a Salesforce Architect (${RELEASE_CURRENT} Guide)`
const pageDescription = `How to become a Salesforce Architect: path from ADM-201 to CTA. Timeline, certs, salary, study resources Free practice questions.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/how-to-become-salesforce-architect` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/how-to-become-salesforce-architect`,
    images: [{ url: `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`, alt: pageTitle }],
  },
  keywords: `how to become salesforce architect, salesforce CTA path, salesforce architect certification path, salesforce architect salary 2026, become CTA`,
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'How to Become a Salesforce Architect', url: '/how-to-become-salesforce-architect' },
]

const faqItems = [
  {
    question: 'How long does it take to become a Salesforce Architect?',
    answer: 'The Application Architect credential (4 individual architect certs) typically takes 2–4 years after PD1. The full CTA path (Application Architect + System Architect + CTA evaluation) takes 4–8 years for most candidates. The CTA board review is one of the most rigorous credentialling processes in enterprise software — most successful candidates have 8–12 years of Salesforce experience and have led multiple large enterprise implementations.',
  },
  {
    question: 'What certifications are required for Salesforce Application Architect?',
    answer: 'The Application Architect credential requires passing all four of these certifications: Data Architect, Sharing and Visibility Architect, Integration Architect, and Dev Lifecycle and Deployment Architect. Once all four are passed, Salesforce automatically awards the Application Architect credential. No separate Application Architect exam exists.',
  },
  {
    question: 'What certifications are required for Salesforce System Architect?',
    answer: 'The System Architect credential requires: Identity and Access Management Architect, Heroku Architect, Integration Architect (shared with Application Architect), and Dev Lifecycle and Deployment Architect (also shared). Both Integration Architect and Dev Lifecycle Architect are prerequisites for both Application and System Architect, so they overlap.',
  },
  {
    question: 'What is the CTA Board Review?',
    answer: 'The CTA (Certified Technical Architect) Board Review is a live, in-person or virtual presentation to a panel of senior Salesforce architects. Candidates receive a complex business scenario in advance and present a Salesforce architecture solution — whiteboarding, defending design decisions, and responding to challenging questions. The evaluation is pass/fail. Most candidates attempt it multiple times before passing.',
  },
  {
    question: 'What is the Salesforce architect salary in 2026?',
    answer: 'Application Architects typically earn $130,000–$160,000 USD. System Architects and CTAs earn $160,000–$200,000+. Salesforce CTAs are among the highest-paid professionals in the Salesforce ecosystem — there are fewer than 1,000 CTAs globally as of 2026. Contract architects typically earn $150–$250 per hour depending on specialisation and location.',
  },
]

const stages = [
  {
    stage: 'Foundation',
    time: '6–12 months',
    title: 'Admin + Developer Foundation',
    description: 'The architect path requires mastery of the full Salesforce platform before specialising. Pass ADM-201 (administrator), then Platform Developer I (PD1). These two certifications give you the platform foundation — data model, security model, automation, Apex, LWC — needed for all architect-level thinking.',
    certs: ['ADM-201 (Platform Administrator)', 'Platform Developer I (PD1)'],
  },
  {
    stage: 'Experience',
    time: '2–4 years',
    title: 'Build Hands-On Implementation Experience',
    description: 'No amount of studying replaces hands-on project experience. Architects are expected to have led multiple large, complex Salesforce implementations — multi-org environments, custom integrations, large data volumes, complex sharing models. Work as a senior developer or technical lead on at least 3–5 enterprise Salesforce projects before pursuing architect certifications.',
    certs: ['Lead developer or technical architect role on enterprise projects', 'Experience across multiple clouds (Sales, Service, Platform, Marketing)'],
  },
  {
    stage: 'App Architect',
    time: '1–2 years',
    title: 'Application Architect (4 Certs)',
    description: 'Pursue the four Application Architect certifications in parallel or sequentially. Integration Architect and Data Architect are the most commonly started first — both have deep alignment with senior developer experience. Sharing and Visibility Architect and Dev Lifecycle and Deployment Architect round out the credential.',
    certs: ['Data Architect', 'Sharing and Visibility Architect', 'Integration Architect', 'Dev Lifecycle and Deployment Architect'],
  },
  {
    stage: 'Sys Architect',
    time: '1–2 years',
    title: 'System Architect (4 Certs)',
    description: 'System Architect tests broader platform knowledge: identity and access management (SSO, OAuth, SAML), Heroku architecture, and the two shared credentials (Integration Architect, Dev Lifecycle). IAM Architect and Heroku Architect are the two new certifications required above Application Architect.',
    certs: ['Identity and Access Management Architect', 'Heroku Architect', 'Integration Architect (already completed)', 'Dev Lifecycle and Deployment Architect (already completed)'],
  },
  {
    stage: 'CTA',
    time: '6–18 months prep',
    title: 'Certified Technical Architect (CTA)',
    description: 'After holding both Application and System Architect credentials, candidates may attempt the CTA evaluation. Preparation involves studying architecture decision frameworks, practicing whiteboard diagramming, and doing mock board reviews. The CTA Board Review tests ability to design enterprise Salesforce architecture under live questioning from senior architects.',
    certs: ['CTA written exam', 'CTA Board Review (live presentation to architect panel)'],
  },
]

export default function HowToBecomeSalesforceArchitectPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/how-to-become-salesforce-architect" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />

      {/* Header */}
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 bg-salesforce-blue/10 text-salesforce-dark text-sm font-semibold px-3 py-1 rounded-full mb-4">
          <span>Career Guide</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          How to Become a Salesforce Architect ({RELEASE_CURRENT})
        </h1>
        <p className="text-lg text-gray-600">
          The complete roadmap from ADM-201 to Certified Technical Architect (CTA) — certifications, experience milestones, timeline, and salary data.
        </p>
      </div>

      {/* At a Glance */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
        {[
          { label: 'Path to CTA', value: '4–8 years' },
          { label: 'App Arch Certs', value: '4 certs' },
          { label: 'CTA Salary', value: '$160k–$200k+' },
          { label: 'CTAs Worldwide', value: '&lt;1,000' },
        ].map((stat) => (
          <div key={stat.label} className="bg-white rounded-xl border border-gray-100 p-4 text-center shadow-sm">
            <div className="text-xl font-bold text-salesforce-blue" dangerouslySetInnerHTML={{ __html: stat.value }} />
            <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Stages */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">The Architect Path: Stage by Stage</h2>
        <div className="space-y-6">
          {stages.map((item) => (
            <div key={item.stage} className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-salesforce-blue text-white flex items-center justify-center font-bold text-xs text-center leading-tight">
                  {item.stage}
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                    <span className="inline-flex items-center gap-1 text-xs text-gray-700 bg-gray-100 px-2 py-1 rounded-full">
                      <Clock className="h-3 w-3" /> {item.time}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{item.description}</p>
                  <ul className="space-y-1">
                    {item.certs.map((c) => (
                      <li key={c} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Salary */}
      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Salesforce Architect Salary ({RELEASE_CURRENT})</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { level: 'Application Architect', range: '$130k–$160k', desc: 'All 4 Application Architect certs' },
            { level: 'System Architect', range: '$150k–$180k', desc: 'App + System Architect credentials' },
            { level: 'CTA', range: '$160k–$200k+', desc: 'Full CTA credential, rare global expertise' },
          ].map((tier) => (
            <div key={tier.level} className="rounded-lg bg-gray-50 border border-gray-100 p-4 text-center">
              <div className="text-sm text-gray-600 mb-1">{tier.level}</div>
              <div className="text-xl font-bold text-salesforce-blue mb-1">{tier.range}</div>
              <div className="text-xs text-gray-600">{tier.desc}</div>
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

      <RelatedGuides links={getRelatedGuides('how-to-become-salesforce-architect')} />

      {/* CTA */}
      <div className="bg-salesforce-blue rounded-xl p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-2">Start Your Architect Journey</h2>
        <p className="text-white mb-6">Practice free architect-level questions and explore the certification path.</p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/certifications/role/architect" className="inline-flex items-center px-6 py-3 bg-white text-salesforce-blue rounded-lg font-semibold hover:bg-blue-50 transition-colors">
            View All Architect Certs <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <Link href="/architect-certification-path" className="inline-flex items-center px-6 py-3 border border-white/40 text-white rounded-lg font-semibold hover:bg-white/10 transition-colors">
            <BookOpen className="mr-2 h-4 w-4" /> Architect Cert Path Guide
          </Link>
        </div>
      </div>
    </div>
  )
}
