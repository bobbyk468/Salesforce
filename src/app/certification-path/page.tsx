import Link from 'next/link'
import { Metadata } from 'next'
import { MapPin, Layers, ChevronRight } from 'lucide-react'
import { CERTIFICATION_PATHS } from '@/lib/certification-path-data'
import type { PathStage } from '@/lib/certification-path-data'
import { getWebPageJsonLd, getBreadcrumbListJsonLd } from '@/lib/schema-data'
import CertificationPathContent from '@/components/CertificationPathContent'

const LEGEND_STYLES: Record<PathStage, { bg: string; border: string; label: string }> = {
  foundational: { bg: 'bg-emerald-50', border: 'border-emerald-200', label: 'Foundational' },
  intermediate: { bg: 'bg-blue-50', border: 'border-blue-200', label: 'Intermediate' },
  advanced: { bg: 'bg-violet-50', border: 'border-violet-200', label: 'Advanced' },
  specialist: { bg: 'bg-amber-50', border: 'border-amber-200', label: 'Specialist' },
  architect: { bg: 'bg-indigo-50', border: 'border-indigo-200', label: 'Architect' },
  ap: { bg: 'bg-teal-50', border: 'border-teal-200', label: 'AP' },
}

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const ogImageUrl = `${baseUrl}/og-image`
const pathTitle = 'Salesforce Certification Paths | Trailblaze Prep'
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
    images: [ogImageUrl],
  },
  keywords:
    'Salesforce certification path, certification roadmap, CTA path, admin path, developer path, Salesforce career path',
}

const pathBreadcrumb = [{ name: 'Home', url: '/' }, { name: 'Certification Paths', url: '/certification-path' }]

export default function CertificationPathPage() {
  const webPageJsonLd = getWebPageJsonLd({
    name: pathTitle,
    description: pathDescription,
    path: '/certification-path',
    breadcrumbItems: pathBreadcrumb,
  })
  const breadcrumbJsonLd = getBreadcrumbListJsonLd(pathBreadcrumb)
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      {/* Hero */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-salesforce-blue/10 text-salesforce-blue text-sm font-medium mb-6">
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

      {/* Paths: loaded client-side to keep initial HTML small (fixes Large HTML Page Size) */}
      <CertificationPathContent />

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
