import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import { RELEASE_CURRENT } from '@/lib/release-data'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'

const pageTitle = `Salesforce Certification Comparison Guide (${RELEASE_CURRENT})`
const pageDescription =
  'Side-by-side Salesforce certification comparisons: difficulty, exam scope, career outcomes, and which to take first. All 20 comparisons in one place.'

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/certification-comparison` },
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
    question: 'Which Salesforce certification should I take first — Admin or App Builder?',
    answer: 'Always take Salesforce Administrator (ADM-201) first. App Builder content builds directly on Admin knowledge — custom objects, validation rules, and automation concepts are tested on both exams. ADM-201 is also the most widely required credential for employment.',
  },
  {
    question: 'Is Agentforce Specialist harder than AI Associate?',
    answer: 'AI Associate is significantly easier — it is a conceptual exam with no hands-on requirements and takes most candidates two weeks to prepare. Agentforce Specialist requires configuration experience with Einstein agents and Agentforce tools. Take AI Associate first as a foundation, then Agentforce Specialist.',
  },
  {
    question: 'Should I take Platform Developer I or JavaScript Developer I first?',
    answer: 'Platform Developer I first. It is the foundational developer credential with the broadest employer recognition. JavaScript Developer I complements PD1 by adding frontend LWC depth — most developers take PD1 first, then JavaScript Developer I as a specialist add-on.',
  },
  {
    question: 'What is the difference between Integration Architect and System Architect?',
    answer: 'Integration Architect is a standalone specialist credential for architects working on API and middleware design. System Architect is a milestone on the Certified Technical Architect (CTA) path — it requires passing all four domain exams plus a live board review. Pursue Integration Architect standalone; only pursue System Architect if you are committed to the full CTA journey.',
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
  { slug: 'agentforce-specialist-vs-ai-associate', title: 'Agentforce Specialist vs AI Associate', description: 'The fastest-growing Salesforce credential cluster. Which AI cert gives you the best ROI in 2026?', tag: 'AI & Agentforce' },
  { slug: 'platform-foundations-vs-ai-associate', title: 'Platform Foundations vs AI Associate', description: 'Both are entry-level credentials — but one is a career foundation and the other is a fast AI signal.', tag: 'AI & Entry Level' },
  // Admin track
  { slug: 'adm-201-vs-app-builder', title: 'ADM-201 vs App Builder', description: 'The most common first-cert decision. Which to take, in what order, and why.', tag: 'Admin Track' },
  { slug: 'administrator-vs-advanced-administrator', title: 'Administrator vs Advanced Administrator', description: 'When does the Advanced Admin credential add value, and who should pursue it?', tag: 'Admin Track' },
  { slug: 'salesforce-admin-vs-developer-career', title: 'Salesforce Admin vs Developer Career', description: 'Choosing a Salesforce career path: admin/consultant vs developer. Salary, skills, and trajectory compared.', tag: 'Career Decision' },
  // Developer track
  { slug: 'app-builder-vs-developer-i', title: 'App Builder vs Platform Developer I', description: 'Declarative builder or Apex developer? Which cert matches your role and goals.', tag: 'Developer Track' },
  { slug: 'pd1-vs-pd2', title: 'Platform Developer I vs Platform Developer II', description: 'When to take PD2, how long to wait after PD1, and what the difficulty jump really feels like.', tag: 'Developer Track' },
  { slug: 'javascript-developer-i-vs-pd1', title: 'JavaScript Developer I vs Platform Developer I', description: 'Frontend vs backend Salesforce development — which cert matches your stack?', tag: 'Developer Track' },
  { slug: 'mulesoft-developer-i-vs-ii', title: 'MuleSoft Developer I vs Developer II', description: 'The MuleSoft developer progression: when you are ready for Developer II and what the exam adds.', tag: 'MuleSoft' },
  // Consultant track
  { slug: 'sales-cloud-vs-service-cloud', title: 'Sales Cloud vs Service Cloud Consultant', description: 'The two most in-demand consultant certs — which to take first and which opens more doors.', tag: 'Consultant Track' },
  { slug: 'field-service-vs-service-cloud-consultant', title: 'Field Service vs Service Cloud Consultant', description: 'Service-focused certifications for different industries — operations vs contact centre.', tag: 'Consultant Track' },
  { slug: 'data-cloud-vs-crm-analytics', title: 'Data Cloud vs CRM Analytics Consultant', description: 'Two data-focused certs with different scopes — which is more valuable in 2026?', tag: 'Data & Analytics' },
  { slug: 'cpq-admin-vs-cpq-billing-ap', title: 'CPQ Admin vs CPQ Billing AP', description: 'The Revenue Cloud certification path — which comes first and what each credential covers.', tag: 'Revenue Cloud' },
  { slug: 'pardot-specialist-vs-pardot-consultant', title: 'Pardot Specialist vs Pardot Consultant', description: 'B2B marketing certs: entry-level vs implementation-level. Which is right for your experience?', tag: 'Marketing Cloud' },
  { slug: 'marketing-cloud-admin-vs-developer', title: 'Marketing Cloud Admin vs Developer', description: 'Platform administration vs technical development in the Marketing Cloud stack.', tag: 'Marketing Cloud' },
  // Architect track
  { slug: 'integration-architect-vs-system-architect', title: 'Integration Architect vs System Architect', description: 'Standalone architect credential vs CTA milestone — understanding the difference matters.', tag: 'Architect Track' },
  { slug: 'b2b-vs-b2c-solution-architect', title: 'B2B vs B2C Solution Architect', description: 'Enterprise CRM architecture vs consumer e-commerce architecture — which fits your practice?', tag: 'Architect Track' },
  // Designer track
  { slug: 'business-analyst-vs-strategy-designer', title: 'Business Analyst vs Strategy Designer', description: 'Non-technical Salesforce credentials — requirements gathering vs design thinking leadership.', tag: 'Designer Track' },
  { slug: 'ux-designer-vs-strategy-designer', title: 'UX Designer vs Strategy Designer', description: 'The designer certification track: which to take first and how they complement each other.', tag: 'Designer Track' },
  // Nonprofit/Education
  { slug: 'education-cloud-vs-nonprofit-cloud-consultant', title: 'Education Cloud vs Nonprofit Cloud Consultant', description: 'Industry cloud certifications for mission-driven organisations — scope, demand, and differentiation.', tag: 'Industry Cloud' },
]

const tags = [...new Set(COMPARISONS.map(c => c.tag))]

export default function CertificationComparisonPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
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
        <p className="text-lg text-gray-600">
          Every &ldquo;A vs B&rdquo; question answered in one place — difficulty, salary, exam scope, and which to take first.
          Each guide includes a structured decision block so you leave with a clear answer.
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
