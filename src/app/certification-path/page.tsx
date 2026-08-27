import Link from 'next/link'
import { Metadata } from 'next'
import { MapPin, Layers, ChevronRight } from 'lucide-react'
import { CERTIFICATION_PATHS } from '@/lib/certification-path-data'
import type { PathStage } from '@/lib/certification-path-data'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import CertificationPathContent from '@/components/CertificationPathContent'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import { OverviewCertRoadmap } from '@/components/CertRoadmapSvg'

const LEGEND_STYLES: Record<PathStage, { bg: string; border: string; label: string }> = {
  foundational: { bg: 'bg-emerald-50', border: 'border-emerald-200', label: 'Foundational' },
  intermediate: { bg: 'bg-blue-50', border: 'border-blue-200', label: 'Intermediate' },
  advanced: { bg: 'bg-violet-50', border: 'border-violet-200', label: 'Advanced' },
  specialist: { bg: 'bg-amber-50', border: 'border-amber-200', label: 'Specialist' },
  architect: { bg: 'bg-indigo-50', border: 'border-indigo-200', label: 'Architect' },
  ap: { bg: 'bg-teal-50', border: 'border-teal-200', label: 'AP' },
}

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const pathTitle = 'Salesforce Certification Paths | Trailblaze Prep'
const ogImageUrl = `${baseUrl}/og?t=${encodeURIComponent(pathTitle)}`
const pathDescription =
  'Salesforce certification paths from Admin to CTA. Plan your journey from foundational to advanced certifications including Developer, Architect, and more.'

export const metadata: Metadata = {
  title: { absolute: pathTitle },
  description: pathDescription,
  alternates: { canonical: `${baseUrl}/certification-path` },
  openGraph: {
    title: pathTitle,
    description: pathDescription,
    type: 'website',
    url: `${baseUrl}/certification-path`,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: pathTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pathTitle,
    description: pathDescription,
    images: [{ url: ogImageUrl, alt: pathTitle }],
  },
}

const pathBreadcrumb = [{ name: 'Home', url: '/' }, { name: 'Certification Paths', url: '/certification-path' }]

const faqItems = [
  {
    question: 'What is the recommended Salesforce certification order?',
    answer: 'Start with Salesforce Administrator (ADM-201) to learn core platform concepts. Developers should pursue Platform Developer I (PD1) next. From there, branch into Consultant, Architect, or Specialist tracks based on your career goal. The Certified Technical Architect (CTA) path requires multiple domain architect certifications.',
  },
  {
    question: 'How long does the full Salesforce certification path take?',
    answer: 'The entry-level Administrator or Developer certification takes 2–3 months of dedicated study. Reaching senior credentials like PD2 or Service Cloud Consultant typically takes 1–2 years. The full CTA path requires 4–6 years of broad experience and a substantial certification portfolio.',
  },
  {
    question: 'Do I need prerequisites to start Salesforce certifications?',
    answer: 'Most Salesforce certifications have no hard prerequisites. The main exception is Platform Developer II (PD2), which requires PD1. However, practical experience is strongly recommended — many certification exams are scenario-based and reward hands-on platform knowledge over memorisation.',
  },
  {
    question: 'What is the Salesforce CTA certification path?',
    answer: 'The Certified Technical Architect (CTA) path requires passing multiple domain architect exams including Application Architect and System Architect (and their component certifications). After completing these, candidates present a solution architecture to a review board of existing CTAs.',
  },
]

export default function CertificationPathPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <ContentPageSchemas
        headline={pathTitle}
        description={pathDescription}
        path="/certification-path"
        breadcrumbItems={pathBreadcrumb}
        faqItems={faqItems}
      />
      {/* Hero */}
      <div data-lcp-header className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-salesforce-blue/10 text-salesforce-dark text-sm font-medium mb-6">
          <MapPin className="h-4 w-4" />
          Plan your journey
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Certification Paths
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          From foundational to advanced—see all possible paths and scenarios for every role. Choose a track and follow the steps. Use this page to plan your next exam.
        </p>
      </div>

      <ContentPageAuthor />

      <OverviewCertRoadmap />

      {/* Legend */}
      <div className="mb-12 p-4 rounded-xl bg-white border border-gray-100 shadow-sm">
        <p className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
          <Layers className="h-4 w-4 text-salesforce-blue" />
          Stage types
        </p>
        <div className="flex flex-wrap gap-4">
          {Object.entries(LEGEND_STYLES).map(([key, { bg, border, label }]) => (
            <span
              key={key}
              className={`inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium border ${bg} ${border}`}
            >
              {label}
            </span>
          ))}
        </div>
      </div>

      <CertificationPathContent paths={CERTIFICATION_PATHS} />

      {/* Quick nav */}
      <nav className="mt-16 p-6 rounded-2xl bg-white border border-gray-100 shadow-sm">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Jump to a path</h3>
        <div className="flex flex-wrap gap-2">
          <Link
            href="/become-cta"
            className="px-4 py-2 rounded-lg bg-indigo-50 text-indigo-700 text-sm font-medium hover:bg-indigo-100 transition-colors border border-indigo-100"
          >
            Become a CTA (full journey)
          </Link>
          {CERTIFICATION_PATHS.map((path) => (
            <a
              key={path.id}
              href={`#${path.id}`}
              className="px-4 py-2 rounded-lg bg-gray-50 text-gray-700 text-sm font-medium hover:bg-salesforce-blue/10 hover:text-salesforce-blue transition-colors"
            >
              {path.name}
            </a>
          ))}
        </div>
      </nav>

      {/* Compare certifications */}
      <div className="bg-gray-50 rounded-xl border border-gray-100 p-5 mb-8 mt-10">
        <h2 className="text-base font-bold text-gray-900 mb-3">Compare Certifications</h2>
        <ul className="space-y-2">
          <li><Link href="/is-salesforce-certification-worth-it" className="text-sm text-salesforce-dark hover:underline font-medium">→ Is Salesforce certification worth it? — honest analysis</Link></li>
          <li><Link href="/salesforce-free-certification" className="text-sm text-salesforce-dark hover:underline font-medium">→ How to get a free Salesforce certification</Link></li>
        </ul>
      </div>

      {/* CTA */}
      <div className="mt-16 text-center p-8 rounded-2xl bg-salesforce-blue/10 border border-salesforce-blue/20">
        <p className="text-gray-700 font-medium mb-4">
          Ready to start? Pick a certification and use our practice questions and exam weightage.
        </p>
        <Link
          href="/certifications"
          className="inline-flex items-center gap-2 px-6 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-colors shadow-md"
        >
          Browse all certifications
          <ChevronRight className="h-5 w-5" />
        </Link>
      </div>
    </div>
  )
}
