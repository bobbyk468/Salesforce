import Link from '@/components/AppLink'
import { Metadata } from 'next'
import { MapPin, Layers, ChevronRight } from 'lucide-react'
import type { PathStage } from '@/lib/certification-path-data'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import LastUpdated from '@/components/LastUpdated'

const LEGEND_STYLES: Record<PathStage, { bg: string; border: string; label: string }> = {
  foundational: { bg: 'bg-emerald-50', border: 'border-emerald-200', label: 'Foundational' },
  intermediate: { bg: 'bg-blue-50', border: 'border-blue-200', label: 'Intermediate' },
  advanced: { bg: 'bg-violet-50', border: 'border-violet-200', label: 'Advanced' },
  specialist: { bg: 'bg-amber-50', border: 'border-amber-200', label: 'Specialist' },
  architect: { bg: 'bg-indigo-50', border: 'border-indigo-200', label: 'Architect' },
  ap: { bg: 'bg-teal-50', border: 'border-teal-200', label: 'AP' },
}

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const metadataTitle = 'Salesforce Certification Exam Paths | Trailblaze Prep'
const pathTitle = 'Salesforce Certification Paths | Trailblaze Prep'
const ogImageUrl = `${baseUrl}/og?t=${encodeURIComponent(metadataTitle)}`
const pathDescription =
  'Explore Salesforce certification paths from Administrator to CTA, including foundational, Developer, and Architect credentials.'

export const metadata: Metadata = {
  title: { absolute: metadataTitle },
  description: pathDescription,
  alternates: {
    canonical: `${baseUrl}/certification-path`,
    languages: { 'en-US': `${baseUrl}/certification-path`, 'x-default': `${baseUrl}/certification-path` },
  },
  openGraph: {
    title: metadataTitle,
    description: pathDescription,
    type: 'website',
    url: `${baseUrl}/certification-path`,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: metadataTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: metadataTitle,
    description: pathDescription,
    images: [{ url: ogImageUrl, alt: metadataTitle }],
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
    answer: 'Start with Salesforce Administrator (ADM-201) to learn the platform basics. Developers can start with Platform Developer I (PD1). Then choose a Consultant, Architect, or Specialist path based on your career goal. The Certified Technical Architect (CTA) path requires several domain architect certifications.',
  },
  {
    question: 'How long does the full Salesforce certification path take?',
    answer: 'With focused study, an entry-level Administrator or Developer certification takes 2–3 months. Reaching a senior credential such as PD2 or Service Cloud Consultant usually takes 1–2 years. The full CTA path requires 4–6 years of broad experience and a substantial set of certifications.',
  },
  {
    question: 'Do I need prerequisites to start Salesforce certifications?',
    answer: 'Most Salesforce certifications have no formal prerequisites. One exception is Platform Developer II (PD2), which requires PD1. Hands-on experience is still useful because many exams use scenarios that test applied platform knowledge.',
  },
  {
    question: 'What is the Salesforce CTA certification path?',
    answer: 'The Certified Technical Architect (CTA) path includes multiple domain architect exams, including Application Architect and System Architect and their component certifications. Candidates who complete them present a solution architecture to a review board of current CTAs.',
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
        <LastUpdated />
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Explore Salesforce certification paths for different roles, from foundational credentials to advanced options. Choose a track and use its steps to plan your next exam.
        </p>
      </div>

      <ContentPageAuthor />

      <section className="mb-10 rounded-xl border border-gray-100 bg-white p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">How to Choose the Right Salesforce Certification Path</h2>
        <div className="space-y-3 text-sm leading-6 text-gray-700">
          <p>
            Choose a Salesforce certification path based on the work you want to do, not only on exam difficulty. Administrators can start with platform fundamentals, developers can build Apex and Lightning skills, consultants can specialize by cloud, and architects can plan credentials around their enterprise project experience.
          </p>
          <p>
            Use this overview to explore the role-specific path pages. Each page links to certification guides with exam topics, format, difficulty, official sources, and practice questions. Use these details to choose a next step that fits your role and readiness.
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
          New to Salesforce? Start with Platform Foundations or ADM-201. Already writing code? Consider PD1.
          Already implementing Salesforce clouds for clients? Choose a consultant exam that matches your project work.
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
          <li><Link href="/is-salesforce-certification-worth-it" className="text-sm text-salesforce-dark hover:underline font-medium">→ Is Salesforce certification worth it? An honest analysis</Link></li>
          <li><Link href="/salesforce-free-certification" className="text-sm text-salesforce-dark hover:underline font-medium">→ How to get a free Salesforce certification</Link></li>
        </ul>
      </div>

      {/* CTA */}
      <div className="mt-16 text-center p-8 rounded-2xl bg-salesforce-blue/10 border border-salesforce-blue/20">
        <p className="text-gray-700 font-medium mb-4">
          Ready to begin? Choose a certification and prepare with practice questions and exam weightings.
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
