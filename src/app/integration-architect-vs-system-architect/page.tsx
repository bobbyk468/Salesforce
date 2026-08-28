import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import WhichFirstBlock from '@/components/WhichFirstBlock'
import RelatedComparisons from '@/components/RelatedComparisons'



const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'

const pageTitle = 'Integration vs System Architect: Salesforce Cert Comparison'
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription =
  'Compare Salesforce Integration Architect and System Architect certifications: exam focus, prerequisites, career paths, which to take for CTA.'

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/integration-architect-vs-system-architect` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/integration-architect-vs-system-architect`,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: ogImageUrl, alt: pageTitle }],
  },
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Certification Comparison', url: '/certification-comparison' },
  { name: 'Integration Architect vs System Architect', url: '/integration-architect-vs-system-architect' },
]

const faqItems = [
  {
    question: 'What is the difference between Salesforce Integration Architect and System Architect?',
    answer: 'Salesforce Integration Architect focuses specifically on enterprise integration patterns: designing synchronous and asynchronous integrations, API management with MuleSoft, middleware selection, data migration architecture, and Salesforce governor limits in integration contexts. System Architect is the credential that consolidates the full System Architect track — it validates that you have passed Integration Architect, Identity &amp; Access Management Architect, and Dev Lifecycle &amp; Deployment Architect, completing the System Architect level of the CTA pathway.',
  },
  {
    question: 'Do I need Integration Architect before System Architect?',
    answer: 'Integration Architect is one of three prerequisites for the System Architect credential (alongside Identity &amp; Access Management Architect and Dev Lifecycle &amp; Deployment Architect). You must pass all three component architect exams before Salesforce recognises you as a System Architect. Integration Architect is typically taken as a standalone exam and counts towards both the System Architect credential and the CTA evaluation.',
  },
  {
    question: 'Which is harder: Integration Architect or the other System Architect track exams?',
    answer: 'Integration Architect is widely considered the hardest of the three System Architect track exams. It requires deep knowledge of enterprise integration patterns, API design principles, middleware and ESB selection criteria, MuleSoft Anypoint Platform capabilities, and Salesforce-specific integration limits (concurrent API calls, streaming API limits, batch size constraints). Identity &amp; Access Management Architect is next in difficulty; Dev Lifecycle &amp; Deployment Architect is generally considered the most approachable of the three.',
  },
  {
    question: 'How many architect exams are in the full CTA path?',
    answer: 'The CTA pathway includes 6 architect-level exams across two tracks. Application Architect track (4 exams): Data Architect, Sharing &amp; Visibility Architect, Platform App Builder, and the Application Architect credential exam. System Architect track (4 exams): Integration Architect, Identity &amp; Access Management Architect, Dev Lifecycle &amp; Deployment Architect, and the System Architect credential exam. After both tracks, you sit the CTA Evaluation Exam ($400) and, if successful, the CTA Review Board ($3,000).',
  },
]

export default function IntegrationArchitectVsSystemArchitectPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/integration-architect-vs-system-architect" breadcrumbItems={breadcrumbItems} faqItems={faqItems} aboutEntities={['/certifications/integration-architect', '/certifications/system-architect']} />

      <header data-lcp-header className="mb-10">
        <p className="inline-flex items-center rounded-full bg-salesforce-blue/10 px-3 py-1 text-sm font-medium text-salesforce-dark mb-4">
          Certification Comparison
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Salesforce Integration Architect vs System Architect: The Architect Track Explained
        </h1>
        <p className="text-lg text-gray-600">
          Integration Architect is a specialist credential in the CTA pathway. System Architect is the credential
          that completes the System Architect track. Here’s how they relate and what each exam covers.
        </p>
      </header>

      <ContentPageAuthor />
      <WhichFirstBlock
        certA={{
          name: "Integration Architect",
          certSlug: "integration-architect",
          examTipsSlug: "integration-architect-exam-tips",
          conditions: [
          "You work on API design, middleware, or enterprise integration projects",
          "You are not yet pursuing the full CTA path",
          "You want a standalone architect credential with a strong salary premium",
          "Your clients regularly need multi-system integration architecture",
          ],
        }}
        certB={{
          name: "System Architect",
          certSlug: "system-architect",
          examTipsSlug: "system-architect-exam-tips",
          conditions: [
          "You are committed to the full Certified Technical Architect path",
          "You already hold two or more domain architect credentials",
          "You have 8+ years of Salesforce experience across multiple orgs",
          "You are targeting the highest architect salary tier",
          ],
        }}
        recommendation={{
          certName: "Integration Architect",
          certSlug: "integration-architect",
          examTipsSlug: "integration-architect-exam-tips",
          reason: "Integration Architect is a strong standalone credential with real salary impact — worth pursuing on its own merits. System Architect is a milestone on the CTA path, not a target in isolation. Only pursue System Architect if you are genuinely committed to reaching CTA.",
          careerPathSlug: "architect-certification-path",
          careerPathLabel: "Architect Certification Path",
        }}
      />

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Side-by-Side Comparison</h2>
        <div className="overflow-x-auto">
          <table className="min-w-[500px] w-full text-sm text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th scope="col" className="py-2.5 pr-4 font-semibold text-gray-900">Factor</th>
                <th scope="col" className="py-2.5 pr-4 font-semibold text-salesforce-blue">Integration Architect</th>
                <th scope="col" className="py-2.5 font-semibold text-purple-700">System Architect</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr className="border-b border-gray-100">
                <td className="py-2.5 pr-4 font-medium">Type</td>
                <td className="py-2.5 pr-4">Specialist architect cert (standalone)</td>
                <td className="py-2.5">Consolidating credential (requires 3 prerequisites)</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2.5 pr-4 font-medium">Prerequisites</td>
                <td className="py-2.5 pr-4">None (any Salesforce cert recommended)</td>
                <td className="py-2.5">Integration Architect + IAM Architect + Dev Lifecycle Architect</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2.5 pr-4 font-medium">Exam Format</td>
                <td className="py-2.5 pr-4">60 questions, 105 min, 62%, $200</td>
                <td className="py-2.5">60 questions, 105 min, 65%, $200</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2.5 pr-4 font-medium">Core Topics</td>
                <td className="py-2.5 pr-4">Integration patterns, API management, MuleSoft, middleware, data migration</td>
                <td className="py-2.5">Broad system architecture review across all three track topics</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2.5 pr-4 font-medium">Avg Salary</td>
                <td className="py-2.5 pr-4">$130–165k (US)</td>
                <td className="py-2.5">$140–170k (US)</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-medium">CTA Path Role</td>
                <td className="py-2.5 pr-4">Component of System Architect track</td>
                <td className="py-2.5">Completes System Architect track; half of CTA pathway</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Integration Architect: Core Topics to Master</h2>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Integration patterns</strong> — Request/reply, fire-and-forget, batch data sync, publish/subscribe (Platform Events, Change Data Capture). Knowing when to use synchronous vs. asynchronous patterns is the core skill tested.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>API management</strong> — MuleSoft API-led connectivity (System/Process/Experience API layers), Salesforce Connect for external objects, API limits (concurrent API calls, daily API limits), and API versioning strategy.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Data migration</strong> — Choosing between Apex Data Loader, Data Import Wizard, and ETL tools for different data volumes; migration sequencing for related objects; deduplication strategies; and post-migration validation approaches.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
        <dl className="space-y-4">
          {faqItems.map((item, i) => (
            <div key={i} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
              <dt className="font-semibold text-gray-900 mb-1">{item.question}</dt>
              <dd className="text-sm text-gray-700" dangerouslySetInnerHTML={{ __html: item.answer }} />
            </div>
          ))}
        </dl>
      </section>

            <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Decision Matrix: Integration Architect or System Architect?</h2>
        <div className="overflow-x-auto">
          <table className="min-w-[500px] w-full text-sm text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th scope="col" className="py-2.5 pr-4 font-semibold text-gray-900">Your Situation</th>
                <th scope="col" className="py-2.5 font-semibold text-emerald-700">Choose This Cert</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 divide-y divide-gray-100">
              <tr>
                <td className="py-2.5 pr-4">Designing API strategies, middleware patterns, and system-to-system data flows</td>
                <td className="py-2.5 font-semibold text-salesforce-blue">Integration Architect</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4">Designing org strategy, identity, sharing models, and deployment architecture</td>
                <td className="py-2.5 font-semibold text-purple-700">System Architect (part of the SA credential bundle)</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4">MuleSoft, REST/SOAP, or enterprise integration background</td>
                <td className="py-2.5 font-semibold text-salesforce-blue">Integration Architect — your background aligns directly</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4">Targeting the full CTA (Certified Technical Architect) path</td>
                <td className="py-2.5 font-semibold text-purple-700">System Architect bundle covers Integration Architect as a domain</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4">Standalone specialist credential needed for an integration-focused role</td>
                <td className="py-2.5 font-semibold text-salesforce-blue">Integration Architect — faster, targeted credential</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="rounded-xl border border-salesforce-blue/20 bg-salesforce-blue/5 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Start Preparing</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/certifications/integration-architect" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-colors">
            Integration Architect Practice Questions <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/certifications/system-architect" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            System Architect Practice Questions
          </Link>
          <Link href="/become-cta" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            How to Become a CTA {RELEASE_CURRENT}
          </Link>
        </div>
      </section>
      <RelatedComparisons
        links={[
          { slug: "b2b-vs-b2c-solution-architect", label: "B2B vs B2C Solution Architect" },
          { slug: "mulesoft-developer-i-vs-ii", label: "MuleSoft Developer I vs II" },
          { slug: "pd1-vs-pd2", label: "Platform Developer I vs II" },
        ]}
      />
    </div>
  )
}
