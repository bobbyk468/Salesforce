import type { Metadata } from 'next'
import Link from '@/components/AppLink'
import { ArrowRight } from 'lucide-react'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import { RELEASE_CURRENT } from '@/lib/release-data'
import { getComparisonHubJsonLd } from '@/lib/schema-data'
import LastUpdated from '@/components/LastUpdated'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'

const pageTitle = `Salesforce Certification Comparison Guide (${RELEASE_CURRENT})`
const pageDescription =
  'Compare Salesforce certifications by exam scope, difficulty, career outcomes, and recommended order across twenty guides.'

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: {
    canonical: `${siteUrl}/certification-comparison`,
    languages: { 'en-US': `${siteUrl}/certification-comparison`, 'x-default': `${siteUrl}/certification-comparison` },
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/certification-comparison`,
    images: [{ url: `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [`${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`],
  },
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Certification Comparison', url: '/certification-comparison' },
]

const faqItems = [
  {
    question: 'Which Salesforce certification should I take first: Admin or App Builder?',
    answer: 'This guide recommends taking Salesforce Administrator (ADM-201) first. App Builder builds on admin topics such as custom objects, validation rules, and automation, which both exams cover. ADM-201 is also widely requested by employers.',
  },
  {
    question: 'Is Agentforce Specialist harder than AI Associate?',
    answer: 'AI Associate retired in February 2026 and is no longer available to book. When offered, it was a conceptual exam without hands-on requirements; the guide estimates about two weeks of preparation for many candidates. Agentforce Specialist requires experience configuring Einstein agents and Agentforce tools. The guide suggests AI Associate first as a foundation.',
  },
  {
    question: 'Should I take Platform Developer I or JavaScript Developer I first?',
    answer: 'The guide recommends Platform Developer I first as a foundational developer credential. JavaScript Developer I can complement it with more JavaScript and LWC depth.',
  },
  {
    question: 'What is the difference between Integration Architect and System Architect?',
    answer: 'Integration Architect is a specialist credential for API and middleware design. System Architect is part of the Certified Technical Architect (CTA) path, which includes four domain exams and a live board review. Choose based on whether you want a standalone integration focus or the CTA path.',
  },
]

interface ComparisonEntry {
  slug: string
  title: string
  description: string
  tag: string
}

const COMPARISONS: ComparisonEntry[] = [
  // AI & Emerging
  { slug: 'agentforce-specialist-vs-ai-associate', title: 'Agentforce Specialist vs AI Associate', description: 'Compare two Salesforce AI credentials and see which one fits your next step.', tag: 'AI & Agentforce' },
  { slug: 'platform-foundations-vs-ai-associate', title: 'Platform Foundations vs AI Associate', description: 'See how these entry-level credentials differ in focus and career use.', tag: 'AI & Entry Level' },
  // Admin track
  { slug: 'adm-201-vs-app-builder', title: 'ADM-201 vs App Builder', description: 'Compare the two common starting points and the order each guide recommends.', tag: 'Admin Track' },
  { slug: 'administrator-vs-advanced-administrator', title: 'Administrator vs Advanced Administrator', description: 'See what Advanced Administrator adds and who may benefit from it.', tag: 'Admin Track' },
  { slug: 'salesforce-admin-vs-developer-career', title: 'Salesforce Admin vs Developer Career', description: 'Compare admin and developer work, skills, pay, and career paths.', tag: 'Career Decision' },
  // Developer track
  { slug: 'app-builder-vs-developer-i', title: 'App Builder vs Platform Developer I', description: 'Compare declarative app building with Apex development.', tag: 'Developer Track' },
  { slug: 'pd1-vs-pd2', title: 'Platform Developer I vs Platform Developer II', description: 'See what changes from PD1 to PD2 and when to consider the next exam.', tag: 'Developer Track' },
  { slug: 'javascript-developer-i-vs-pd1', title: 'JavaScript Developer I vs Platform Developer I', description: 'Compare JavaScript skills with Salesforce platform development.', tag: 'Developer Track' },
  { slug: 'mulesoft-developer-i-vs-ii', title: 'MuleSoft Developer I vs Developer II', description: 'See how Developer II builds on Developer I.', tag: 'MuleSoft' },
  // Consultant track
  { slug: 'sales-cloud-vs-service-cloud', title: 'Sales Cloud vs Service Cloud Consultant', description: 'Compare the focus of Sales Cloud and Service Cloud Consultant.', tag: 'Consultant Track' },
  { slug: 'field-service-vs-service-cloud-consultant', title: 'Field Service vs Service Cloud Consultant', description: 'Compare field service operations with service and contact centre work.', tag: 'Consultant Track' },
  { slug: 'data-cloud-vs-crm-analytics', title: 'Data Cloud vs CRM Analytics Consultant', description: 'Compare the scope of Data Cloud and CRM Analytics.', tag: 'Data & Analytics' },
  { slug: 'cpq-admin-vs-cpq-billing-ap', title: 'CPQ Admin vs CPQ Billing AP', description: 'Compare CPQ Administrator with CPQ & Billing AP and their exam focus.', tag: 'Revenue Cloud' },
  { slug: 'pardot-specialist-vs-pardot-consultant', title: 'Pardot Specialist vs Pardot Consultant', description: 'Compare the entry and implementation levels of the Pardot credentials.', tag: 'Marketing Cloud' },
  { slug: 'marketing-cloud-admin-vs-developer', title: 'Marketing Cloud Admin vs Developer', description: 'Compare Marketing Cloud administration and development.', tag: 'Marketing Cloud' },
  // Architect track
  { slug: 'integration-architect-vs-system-architect', title: 'Integration Architect vs System Architect', description: 'Compare a standalone integration credential with the System Architect CTA milestone.', tag: 'Architect Track' },
  { slug: 'b2b-vs-b2c-solution-architect', title: 'B2B vs B2C Solution Architect', description: 'Compare B2B and B2C solution architecture work.', tag: 'Architect Track' },
  // Designer track
  { slug: 'business-analyst-vs-strategy-designer', title: 'Business Analyst vs Strategy Designer', description: 'Compare business analysis with strategy design.', tag: 'Designer Track' },
  { slug: 'ux-designer-vs-strategy-designer', title: 'UX Designer vs Strategy Designer', description: 'See how UX Designer and Strategy Designer differ and complement each other.', tag: 'Designer Track' },
  // Nonprofit/Education
  { slug: 'education-cloud-vs-nonprofit-cloud-consultant', title: 'Education Cloud vs Nonprofit Cloud Consultant', description: 'Compare the focus of Education Cloud and Nonprofit Cloud credentials.', tag: 'Industry Cloud' },
]

const tags = [...new Set(COMPARISONS.map(c => c.tag))]

export default function CertificationComparisonPage() {
  const vsPageUrls = COMPARISONS.map(c => `/${c.slug}`)
  const hubJsonLd = getComparisonHubJsonLd({
    headline: pageTitle,
    description: pageDescription,
    path: '/certification-comparison',
    vsPageUrls,
  })

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(hubJsonLd) }}
      />
      <ContentPageSchemas
        headline={pageTitle}
        description={pageDescription}
        path="/certification-comparison"
        breadcrumbItems={breadcrumbItems}
        faqItems={faqItems}
      />

      <header data-lcp-header className="mb-10">
        <p className="inline-flex items-center rounded-full bg-salesforce-blue/10 px-3 py-1 text-sm font-medium text-salesforce-dark mb-4">
          Updated for {RELEASE_CURRENT}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Salesforce Certification Comparisons
        </h1>
        <LastUpdated />
        <p className="text-lg text-gray-600">
          Compare Salesforce certifications by exam scope, difficulty, career direction, and recommended order. Each guide ends with a decision section to help you choose.
        </p>
      </header>

      <ContentPageAuthor />

      {tags.map(tag => {
        const entries = COMPARISONS.filter(c => c.tag === tag)
        return (
          <section key={tag} className="mb-10">
            <h2 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
              {tag}
            </h2>
            <div className="grid gap-3">
              {entries.map(entry => (
                <Link
                  key={entry.slug}
                  href={`/${entry.slug}`}
                  className="group flex items-start justify-between rounded-xl border border-gray-200 bg-white px-5 py-4 shadow-sm transition-all hover:border-salesforce-blue hover:shadow-md"
                >
                  <div className="min-w-0 pr-4">
                    <p className="font-semibold text-gray-900 group-hover:text-salesforce-blue text-sm mb-1">
                      {entry.title}
                    </p>
                    <p className="text-xs text-gray-500 leading-relaxed">{entry.description}</p>
                  </div>
                  <ArrowRight className="shrink-0 mt-0.5 h-4 w-4 text-gray-400 group-hover:text-salesforce-blue transition-colors" />
                </Link>
              ))}
            </div>
          </section>
        )
      })}

      <section className="mt-12 rounded-xl border border-gray-100 bg-gray-50 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqItems.map(item => (
            <div key={item.question}>
              <p className="font-semibold text-gray-900 text-sm mb-1">{item.question}</p>
              <p className="text-sm text-gray-600">{item.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
