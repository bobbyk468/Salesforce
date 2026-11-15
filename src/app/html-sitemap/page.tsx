import Link from '@/components/AppLink'
import type { Metadata } from 'next'
import { CERTIFICATION_CATEGORIES } from '@/lib/certifications-data'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import LastUpdated from '@/components/LastUpdated'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const metadataTitle = 'Salesforce Certification Guides Sitemap | Trailblaze Prep'
const pageTitle = 'HTML Sitemap | Trailblaze Prep'
const pageDescription =
  'Browse Trailblaze Prep Salesforce guides, role hubs, and key site pages by category to find certification resources and exams.'

export const metadata: Metadata = {
  title: { absolute: metadataTitle },
  description: pageDescription,
  alternates: {
    canonical: `${baseUrl}/html-sitemap`,
    languages: { 'en-US': `${baseUrl}/html-sitemap`, 'x-default': `${baseUrl}/html-sitemap` },
  },
  openGraph: {
    title: metadataTitle,
    description: pageDescription,
    type: 'website',
    url: `${baseUrl}/html-sitemap`,
    siteName: 'Trailblaze Prep',
    images: [{ url: `${baseUrl}/og?t=${encodeURIComponent(metadataTitle)}`, width: 1200, height: 630, alt: metadataTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: metadataTitle,
    description: pageDescription,
    images: [{ url: `${baseUrl}/og?t=${encodeURIComponent(metadataTitle)}`, alt: metadataTitle }],
  },
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'HTML Sitemap', url: '/html-sitemap' },
]

/**
 * Core pages, grouped by search intent instead of one flat wall of links.
 *
 * Two deliberate omissions:
 *  - No `*-study-guide` or `*-exam-tips` URLs. Those routes were consolidated
 *    into the canonical `/certifications/[slug]` pages and now 301; a sitemap
 *    must not hand crawlers a redirect.
 *  - No individual certification links here either. Every certification is
 *    listed once, under its role hub, in the section further down the page.
 *    Listing the same 86 exams twice on one page was the duplication this
 *    grouping exists to remove.
 */
const coreSections: { heading: string; blurb: string; pages: { name: string; href: string }[] }[] = [
  {
    heading: 'Career Paths & Role Guides',
    blurb: 'Start here if you know the direction but not the exam.',
    pages: [
      { name: 'All Certifications', href: '/certifications' },
      { name: 'All Salesforce Certifications List', href: '/salesforce-certifications-list' },
      { name: 'Certification Path', href: '/certification-path' },
      { name: 'Salesforce Admin Certification Path', href: '/admin-certification-path' },
      { name: 'Salesforce Developer Certification Path', href: '/developer-certification-path' },
      { name: 'Salesforce Architect Certification Path', href: '/architect-certification-path' },
      { name: 'Salesforce Consultant Certification Path', href: '/consultant-certification-path' },
      { name: 'Marketing Cloud Certification Path', href: '/marketing-cloud-certification-path' },
      { name: 'How to Become a Salesforce Administrator', href: '/how-to-become-salesforce-administrator' },
      { name: 'How to Become a Salesforce Developer', href: '/how-to-become-salesforce-developer' },
      { name: 'How to Become a Salesforce Architect', href: '/how-to-become-salesforce-architect' },
      { name: 'How to Become a Salesforce Consultant', href: '/how-to-become-salesforce-consultant' },
      { name: 'Become a Salesforce CTA', href: '/become-cta' },
      { name: 'Which Salesforce Certification First?', href: '/which-salesforce-certification-first' },
      { name: 'Salesforce Admin vs Developer Career', href: '/salesforce-admin-vs-developer-career' },
      { name: 'Salesforce Admin Certification 201 Guide', href: '/salesforce-admin-certification-201' },
      { name: 'Pardot Certification Guide', href: '/pardot-certification' },
    ],
  },
  {
    heading: 'Head-to-Head Certification Comparisons (VS)',
    blurb: 'Decision pages for the "which of these two" question.',
    pages: [
      { name: 'ADM-201 vs App Builder', href: '/adm-201-vs-app-builder' },
      { name: 'PD1 vs PD2', href: '/pd1-vs-pd2' },
      { name: 'App Builder vs Platform Developer I', href: '/app-builder-vs-developer-i' },
      { name: 'JavaScript Developer I vs Platform Developer I', href: '/javascript-developer-i-vs-pd1' },
      { name: 'Administrator vs Advanced Administrator', href: '/administrator-vs-advanced-administrator' },
      { name: 'Sales Cloud vs Service Cloud', href: '/sales-cloud-vs-service-cloud' },
      { name: 'Sales Cloud vs Experience Cloud Consultant', href: '/sales-cloud-vs-experience-cloud-consultant' },
      { name: 'Field Service vs Service Cloud Consultant', href: '/field-service-vs-service-cloud-consultant' },
      { name: 'Education Cloud vs Nonprofit Cloud Consultant', href: '/education-cloud-vs-nonprofit-cloud-consultant' },
      { name: 'OmniStudio Developer vs Consultant', href: '/omnistudio-developer-vs-consultant' },
      { name: 'MuleSoft Developer I vs II', href: '/mulesoft-developer-i-vs-ii' },
      { name: 'MuleSoft Developer I vs Integration Foundations', href: '/mulesoft-developer-i-vs-integration-foundations' },
      { name: 'Integration Architect vs System Architect', href: '/integration-architect-vs-system-architect' },
      { name: 'System Architect vs Application Architect', href: '/system-architect-vs-application-architect' },
      { name: 'B2B vs B2C Solution Architect', href: '/b2b-vs-b2c-solution-architect' },
      { name: 'Data Cloud vs CRM Analytics', href: '/data-cloud-vs-crm-analytics' },
      { name: 'Data Cloud vs Marketing Cloud', href: '/data-cloud-vs-marketing-cloud' },
      { name: 'Marketing Cloud Admin vs Developer', href: '/marketing-cloud-admin-vs-developer' },
      { name: 'Pardot Specialist vs Pardot Consultant', href: '/pardot-specialist-vs-pardot-consultant' },
      { name: 'Pardot Consultant vs Marketing Cloud Consultant', href: '/pardot-consultant-vs-marketing-cloud-consultant' },
      { name: 'Agentforce Specialist vs AI Associate (retired February 2026)', href: '/agentforce-specialist-vs-ai-associate' },
      { name: 'Platform Foundations vs AI Associate (retired February 2026)', href: '/platform-foundations-vs-ai-associate' },
      { name: 'CPQ Admin vs CPQ Billing AP', href: '/cpq-admin-vs-cpq-billing-ap' },
      { name: 'CPQ Admin vs Revenue Cloud Consultant', href: '/cpq-admin-vs-revenue-cloud-consultant' },
      { name: 'Business Analyst vs Strategy Designer', href: '/business-analyst-vs-strategy-designer' },
      { name: 'UX Designer vs Strategy Designer', href: '/ux-designer-vs-strategy-designer' },
    ],
  },
  {
    heading: 'Cost, Salary & ROI Calculators',
    blurb: 'What an exam costs, what it pays back, and how to pay less for it.',
    pages: [
      { name: 'Salesforce Certification Cost', href: '/salesforce-certification-cost' },
      { name: 'Salesforce Associate Certification Cost', href: '/salesforce-associate-certification-cost' },
      { name: 'Salesforce Certification ROI Calculator', href: '/salesforce-certification-roi-calculator' },
      { name: 'Salesforce Certification Salary', href: '/salesforce-certification-salary' },
      { name: 'Is Salesforce Certification Worth It?', href: '/is-salesforce-certification-worth-it' },
      { name: 'Salesforce Certification Voucher Guide', href: '/salesforce-certification-voucher' },
      { name: 'How to Get a Free Salesforce Certification', href: '/salesforce-free-certification' },
      { name: 'Exam Score Calculator', href: '/tools/score-calculator' },
    ],
  },
  {
    heading: 'Exam-Day Tip Checklists',
    blurb: 'Booking, scoring, retakes, and the last week before the exam.',
    pages: [
      { name: 'Salesforce Certification Exam Day Tips', href: '/salesforce-certification-exam-day-tips' },
      { name: 'How to Study for Salesforce Certification', href: '/how-to-study-for-salesforce-certification' },
      { name: 'How to Register for a Salesforce Exam', href: '/how-to-register-salesforce-exam' },
      { name: 'Salesforce Certification Passing Score', href: '/salesforce-certification-passing-score' },
      { name: 'Salesforce Certification Difficulty Ranking', href: '/salesforce-certification-difficulty' },
      { name: 'Salesforce Exam Retake Policy', href: '/salesforce-exam-retake-policy' },
      { name: 'Salesforce Certification Validity & Expiry', href: '/salesforce-certification-validity' },
      { name: 'Salesforce Certification Maintenance Guide', href: '/salesforce-certification-maintenance' },
    ],
  },
  {
    heading: 'About & Editorial Policies',
    blurb: 'Who writes this, how exam data is reviewed, and how to reach us.',
    pages: [
      { name: 'About', href: '/about' },
      { name: 'Editorial Team', href: '/team' },
      { name: 'Editorial Policy & Exam Data Review', href: '/editorial-policy' },
      { name: '2026 Certification Benchmark Report', href: '/salesforce-certification-report-2026' },
      { name: 'Contact', href: '/contact' },
      { name: 'Terms of Use', href: '/terms' },
      { name: 'Privacy Policy', href: '/privacy' },
    ],
  },
]

export default function HtmlSitemapPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <ContentPageSchemas
        headline={pageTitle}
        description={pageDescription}
        path="/html-sitemap"
        breadcrumbItems={breadcrumbItems}
      />

      <div data-lcp-header>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">HTML Sitemap</h1>
        <LastUpdated />
      </div>
      <p className="text-gray-600 mb-8">
        Use this page to navigate all key site URLs and certification guides.
      </p>

      <section className="mb-10 rounded-xl border border-gray-100 bg-white p-5 text-gray-700">
        <h2 className="text-xl font-semibold text-gray-900 mb-3">How This Sitemap Is Organized</h2>
        <p className="mb-3">
          This HTML sitemap groups Trailblaze Prep pages by search intent. Core pages help you compare Salesforce
          certification costs, role paths, comparisons, and exam-day logistics. Each certification has a single
          canonical guide that carries its study plan, section weightage, exam tips, and practice questions, so
          there are no separate study-guide or exam-tips URLs to choose between.
        </p>
        <p>
          For the fastest route. Start with a role hub if you know your career direction. Open a certification guide
          once you have chosen an exam and need section weightage, source references, and practice questions.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Core Pages</h2>
        <div className="space-y-8">
          {coreSections.map((section) => (
            <div key={section.heading}>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">{section.heading}</h3>
              <p className="text-sm text-gray-600 mb-2">{section.blurb}</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                {section.pages.map((page) => (
                  <li key={page.href}>
                    <Link href={page.href} className="text-salesforce-blue underline">
                      {page.name}
                    </Link>
                    .
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Certification Role Hubs and Guides</h2>
        <div className="space-y-8">
          {CERTIFICATION_CATEGORIES.map((category) => (
            <div key={category.slug}>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                <Link href={`/certifications/role/${category.slug}`} className="text-salesforce-blue underline">
                  {category.name} Hub
                </Link>
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                {category.items.map((item) => (
                  <li key={`${category.slug}-${item.href}`}>
                    <Link href={item.href} className="text-gray-700 hover:text-salesforce-blue hover:underline">
                      {item.name}
                    </Link>
                    .
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
