import type { Metadata } from 'next'
import Link from '@/components/AppLink'
import { ExternalLink, Award, CheckCircle } from 'lucide-react'
import { SITE_NAME } from '@/lib/constants'
import { getWebPageJsonLd, getBreadcrumbListJsonLd } from '@/lib/schema-data'
import LastUpdated from '@/components/LastUpdated'
import { EDITORIAL_CREDENTIALS } from '@/lib/editorial-credentials'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const pageTitle = `Salesforce Certification Editorial Team | ${SITE_NAME}`
const pageDescription = `Meet Krishna Mohan, a multi-certified Salesforce professional with hands-on Admin, Developer, and Consultant experience.`
export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: {
    canonical: `${baseUrl}/team`,
    languages: { 'en-US': `${baseUrl}/team`, 'x-default': `${baseUrl}/team` },
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'website',
    url: `${baseUrl}/team`,
    siteName: 'Trailblaze Prep',
    images: [{ url: `${baseUrl}/og?t=${encodeURIComponent(pageTitle)}`, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: `${baseUrl}/og?t=${encodeURIComponent(pageTitle)}`, alt: pageTitle }],
  },
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Team', url: '/team' },
]

/** Shared with the homepage credentials block so the two cannot drift. */
const CERTIFICATIONS = EDITORIAL_CREDENTIALS

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
        <LastUpdated />
      </div>
      <p className="text-gray-600 mb-8">
        Our content is written and reviewed by Salesforce-certified practitioners with implementation and exam experience.
      </p>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-3">Why Editorial Review Matters</h2>
        <div className="space-y-3 text-sm leading-6 text-gray-700">
          <p>
            Exam names, section weights, passing scores, fees, and release terms can change. We check exam details against official Salesforce sources and keep practical guidance separate from speculation.
          </p>
          <p>
            We do not use leaked questions or braindumps. Our goal is to help candidates learn exam concepts, practise scenario-based reasoning, and choose a suitable certification path.
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
                rel="noopener noreferrer nofollow"
                className="inline-flex items-center gap-1 py-1 text-sm text-salesforce-blue font-medium hover:underline"
                aria-label="Krishna Mohan LinkedIn profile"
              >
                LinkedIn <ExternalLink className="h-3.5 w-3.5" />
              </a>
              <a
                href="https://www.salesforce.com/trailblazer/krishnamohan"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-flex items-center gap-1 py-1 text-sm text-salesforce-blue font-medium hover:underline"
                aria-label="Krishna Mohan Trailblazer profile, verified Salesforce credentials"
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
            'We map each certification page to the official Salesforce exam outline before writing.',
            'Practice questions test exam concepts and understanding.',
            'Section weights come from official Salesforce certification guides.',
            'We review pages at each Salesforce release for changes to exam objectives and terms.',
            'We do not use braindumps, leaked questions, or copied exam content.',
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
          We cover 90+ credentials across Administrator, Developer, Consultant, Architect, Marketing, Accredited Professional, Tableau, and MuleSoft tracks. Resources include exam weights, prerequisite guidance, exam-day tips, and free practice questions with explanations.
        </p>
      </section>

      {/* Contact */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-900">Contact the editorial team</h2>
        <p className="text-gray-700 text-sm">
          Found an error or want to suggest a topic? Use the{' '}
          <Link href="/contact#contact-form" className="text-salesforce-blue font-medium hover:underline">
            contact form
          </Link>
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
