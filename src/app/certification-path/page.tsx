import Link from 'next/link'
import { Metadata } from 'next'
import { MapPin, Layers, ChevronRight } from 'lucide-react'
import type { PathStage } from '@/lib/certification-path-data'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import ContentPageAuthor from '@/components/ContentPageAuthor'

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

const pathSummaries = [
  { id: 'admin', name: 'Administrator Path', href: '/admin-certification-path', text: 'Start with ADM-201, then choose App Builder, Advanced Administrator, or a consultant track.' },
  { id: 'developer', name: 'Developer Path', href: '/developer-certification-path', text: 'Start with PD1, then move toward JavaScript Developer I, PD2, and Integration Architect.' },
  { id: 'consultant', name: 'Consultant Path', href: '/consultant-certification-path', text: 'Choose Sales Cloud, Service Cloud, Experience Cloud, Marketing Cloud, Revenue Cloud, or Field Service.' },
  { id: 'architect', name: 'Architect Path', href: '/architect-certification-path', text: 'Build toward Application Architect, System Architect, and eventually CTA readiness.' },
]

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

      <section className="mb-10 rounded-xl border border-gray-100 bg-white p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">How to Choose the Right Salesforce Certification Path</h2>
        <div className="space-y-3 text-sm leading-6 text-gray-700">
          <p>
            The best Salesforce certification path depends on the work you want to do next, not only on exam difficulty.
            Administrators should build platform fundamentals first, developers should validate Apex and Lightning skills,
            consultants should specialize by cloud, and architects should sequence credentials around real enterprise project
            experience.
          </p>
          <p>
            Use this page as the map, then open the role-specific path pages for a tighter plan. Each path links into
            individual certification pages with exam weightage, format, difficulty guidance, official source references, and
            practice questions so your next step is based on role fit and readiness rather than guesswork.
          </p>
        </div>
      </section>

      <section className="mb-12 grid gap-4 md:grid-cols-2">
        {pathSummaries.map((path) => (
          <Link key={path.id} href={path.href} className="rounded-xl border border-gray-100 bg-white p-5 hover:border-salesforce-blue">
            <h2 className="text-xl font-bold text-gray-900 mb-2">{path.name}</h2>
            <p className="text-sm text-gray-600">{path.text}</p>
          </Link>
        ))}
      </section>

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

      <section className="mb-12 rounded-xl border border-gray-100 bg-white p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Recommended Starting Points</h2>
        <p className="text-gray-700 mb-4">
          New to Salesforce? Start with Platform Foundations or ADM-201. Already coding? Start with PD1.
          Already implementing clouds for clients? Choose the consultant exam that matches your project work.
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          <Link href="/certifications/platform-foundations" className="text-salesforce-dark font-medium hover:underline">Platform Foundations</Link>
          <Link href="/certifications/administrator" className="text-salesforce-dark font-medium hover:underline">Platform Administrator (ADM-201)</Link>
          <Link href="/certifications/developer-1" className="text-salesforce-dark font-medium hover:underline">Platform Developer I (PD1)</Link>
          <Link href="/certifications/app-builder" className="text-salesforce-dark font-medium hover:underline">Platform App Builder</Link>
        </div>
      </section>

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
          {pathSummaries.map((path) => (
            <Link
              key={path.id}
              href={path.href}
              className="px-4 py-2 rounded-lg bg-gray-50 text-gray-700 text-sm font-medium hover:bg-salesforce-blue/10"
            >
              {path.name}
            </Link>
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
