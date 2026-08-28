import type { Metadata } from 'next'
import Link from 'next/link'
import { ExternalLink, Award, CheckCircle } from 'lucide-react'
import { CONTACT_EMAIL, SITE_NAME } from '@/lib/constants'
import { getWebPageJsonLd, getBreadcrumbListJsonLd } from '@/lib/schema-data'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const pageTitle = `Editorial Team | ${SITE_NAME}`
const pageDescription =
  'Trailblaze Prep content by Krishna Mohan, multi-certified Salesforce professional with hands-on Admin, Developer, and Consultant experience.'

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${baseUrl}/team` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'website',
    url: `${baseUrl}/team`,
    siteName: 'Trailblaze Prep',
    images: [{ url: `${baseUrl}/og?t=${encodeURIComponent(pageTitle)}`, width: 1200, height: 630, alt: pageTitle }],
  },
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Team', url: '/team' },
]

const CERTIFICATIONS = [
  { label: 'Salesforce Certified Administrator (ADM-201)', abbr: 'ADM-201' },
  { label: 'Salesforce Certified Platform Administrator II', abbr: 'Advanced Admin' },
  { label: 'Salesforce Certified Platform Developer', abbr: 'PD1' },
  { label: 'Salesforce Certified Platform Developer II', abbr: 'PD2' },
  { label: 'Salesforce Certified Platform App Builder', abbr: 'App Builder' },
  { label: 'Salesforce Certified Agentforce Sales Consultant', abbr: 'Sales Cloud' },
  { label: 'Salesforce Certified Agentforce Service Consultant', abbr: 'Service Cloud' },
  { label: 'Salesforce Certified Experience Cloud Consultant', abbr: 'Experience Cloud' },
  { label: 'Salesforce Certified Marketing Cloud Engagement Specialist', abbr: 'MC Email' },
  { label: 'Salesforce Certified Business Analyst', abbr: 'Business Analyst' },
  { label: 'Salesforce Certified JavaScript Developer', abbr: 'JS Dev I' },
  { label: 'Salesforce Certified Data Cloud Consultant', abbr: 'Data Cloud' },
  { label: 'Salesforce Certified Agentforce Specialist', abbr: 'Agentforce' },
  { label: 'Salesforce Certified MuleSoft Integration Foundations', abbr: 'MuleSoft' },
]

export default function TeamPage() {
  const webPageJsonLd = getWebPageJsonLd({
    name: pageTitle,
    description: pageDescription,
    path: '/team',
    breadcrumbItems,
  })
  const breadcrumbJsonLd = getBreadcrumbListJsonLd(breadcrumbItems)

  const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Krishna Mohan',
    url: `${baseUrl}/team`,
    sameAs: [
      'https://www.linkedin.com/in/krishna-mohan-879b94100/',
      'https://www.salesforce.com/trailblazer/krishnamohan',
      'https://trailblazer.me/id/krishnamohan',
    ],
    jobTitle: 'Lead Content Reviewer & Salesforce Certified Professional',
    worksFor: {
      '@type': 'Organization',
      name: 'Trailblaze Prep',
      url: baseUrl,
    },
    knowsAbout: [
      'Salesforce Administration',
      'Salesforce Platform Development',
      'Salesforce App Builder',
      'Salesforce Consulting',
      'Salesforce Certification Preparation',
    ],
    hasCredential: CERTIFICATIONS.map((c) => ({
      '@type': 'EducationalOccupationalCredential',
      name: c.label,
      credentialCategory: 'Professional Certification',
      recognizedBy: { '@type': 'Organization', name: 'Salesforce' },
    })),
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />

      <div data-lcp-header>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Trailblaze Prep Editorial Team</h1>
      </div>
      <p className="text-gray-600 mb-8">
        Content is written and reviewed by Salesforce-certified practitioners with real implementation and exam experience.
      </p>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-3">Why Editorial Review Matters</h2>
        <div className="space-y-3 text-sm leading-6 text-gray-700">
          <p>
            Certification pages can become misleading quickly when exam names, section weightage, passing scores, fees, or
            release terminology changes. Trailblaze Prep treats those details as trust signals, not decoration. The review
            process checks exam logistics against official Salesforce sources and keeps practical guidance separate from
            speculative advice.
          </p>
          <p>
            We also avoid leaked questions and braindumps. The goal is to help candidates understand the concepts behind the
            exam, practise scenario-style reasoning, and choose the right certification path without putting their credential
            or employer trust at risk.
          </p>
        </div>
      </section>

      {/* Author card */}
      <div className="rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50/50 to-white p-6 sm:p-8 mb-10">
        <div className="flex items-start gap-5">
          {/* Avatar */}
          <div className="flex-shrink-0 w-16 h-16 rounded-full bg-salesforce-blue flex items-center justify-center text-white text-2xl font-bold shadow-md" aria-hidden="true">
            KM
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-3 mb-1">
              <h2 className="text-xl font-bold text-gray-900">Krishna Mohan</h2>
              <a
                href="https://www.linkedin.com/in/krishna-mohan-879b94100/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-salesforce-blue font-medium hover:underline"
                aria-label="Krishna Mohan LinkedIn profile"
              >
                LinkedIn <ExternalLink className="h-3.5 w-3.5" />
              </a>
              <a
                href="https://www.salesforce.com/trailblazer/krishnamohan"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-salesforce-blue font-medium hover:underline"
                aria-label="Krishna Mohan Trailblazer profile — verified Salesforce credentials"
              >
                Trailblazer.me <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
            <p className="text-sm font-medium text-salesforce-blue mb-3">
              Lead Content Reviewer · Salesforce Certified Professional
            </p>
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              Krishna is a multi-certified Salesforce professional with hands-on experience delivering Salesforce implementations
              across Admin, Developer, and Consultant tracks. He created Trailblaze Prep to fill a gap he experienced himself:
              no single resource clearly showed exam section weightage, scenario strategies, and practice questions together.
              Every page on this site reflects what he wished existed when he was preparing for his own exams.
            </p>

            {/* Certifications */}
            <div>
              <p className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-2">Certifications held</p>
              <div className="flex flex-wrap gap-2">
                {CERTIFICATIONS.map((cert) => (
                  <span
                    key={cert.abbr}
                    className="inline-flex items-center gap-1 rounded-full bg-salesforce-blue/10 border border-salesforce-blue/20 px-3 py-1 text-xs font-semibold text-salesforce-dark"
                  >
                    <Award className="h-3 w-3" />
                    {cert.abbr}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Editorial standards */}
      <section className="space-y-4 mb-8">
        <h2 className="text-xl font-semibold text-gray-900">How we verify content</h2>
        <ul className="space-y-2.5 text-gray-700">
          {[
            'Each certification page is mapped directly to the official Salesforce exam outline before writing begins.',
            'Practice questions are written to test real exam concepts — not surface-level recall.',
            'Section weightage percentages are sourced from official Salesforce certification guides.',
            'Pages are reviewed at each Salesforce release to align with updated exam objectives and terminology.',
            'No braindumps, leaked questions, or copied exam content — ever.',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
              <span className="text-sm">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* What we cover */}
      <section className="space-y-3 mb-8">
        <h2 className="text-xl font-semibold text-gray-900">What we cover</h2>
        <p className="text-gray-700 text-sm">
          We cover all 90+ Salesforce certifications across Administrator, Developer, Consultant, Architect,
          Marketing, Accredited Professional, Tableau, and MuleSoft tracks — each with section-wise exam weightage,
          prerequisite guidance, exam-day tips, and free practice questions with full explanations.
        </p>
      </section>

      {/* Contact */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-900">Contact the editorial team</h2>
        <p className="text-gray-700 text-sm">
          Found an error, have a question, or want to suggest a topic? Reach us at{' '}
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-salesforce-blue font-medium hover:underline">
            {CONTACT_EMAIL}
          </a>
          .
        </p>
        <p className="text-gray-700 text-sm">
          You can also read our full methodology on the{' '}
          <Link href="/about" className="text-salesforce-blue font-medium hover:underline">
            About page
          </Link>
          .
        </p>
      </section>
    </div>
  )
}
