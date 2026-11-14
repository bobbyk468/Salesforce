import type { Metadata } from 'next'
import Link from '@/components/AppLink'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import WhichFirstBlock from '@/components/WhichFirstBlock'
import RelatedComparisons from '@/components/RelatedComparisons'
import LastUpdated from '@/components/LastUpdated'



const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'

const pageTitle = 'Integration vs System Architect: Salesforce Cert Comparison'
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription =
  'Compare Salesforce Integration and System Architect certifications by exam focus, prerequisites, and career paths toward CTA.'

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: {
    canonical: `${siteUrl}/integration-architect-vs-system-architect`,
    languages: { 'en-US': `${siteUrl}/integration-architect-vs-system-architect`, 'x-default': `${siteUrl}/integration-architect-vs-system-architect` },
  },
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
    answer: 'Integration Architect is a specialist exam about enterprise integrations. It covers synchronous and asynchronous patterns, API management with MuleSoft, middleware choices, data migration, and Salesforce governor limits in integration scenarios. System Architect is a milestone in the CTA path. It recognizes completion of Integration Architect, Identity & Access Management Architect, and Dev Lifecycle & Deployment Architect.',
  },
  {
    question: 'Do I need Integration Architect before System Architect?',
    answer: 'Yes, Integration Architect is one of three component exams for System Architect, along with Identity & Access Management Architect and Dev Lifecycle & Deployment Architect. Pass all three to earn the System Architect credential. Integration Architect can also be pursued on its own and counts toward the System Architect and CTA path.',
  },
  {
    question: 'Which is harder: Integration Architect or the other System Architect track exams?',
    answer: 'Integration Architect is often considered the hardest of the three System Architect exams. It requires knowledge of enterprise integration patterns, API design, middleware and ESB selection, MuleSoft Anypoint Platform, and Salesforce integration limits such as concurrent API calls, streaming API limits, and batch size constraints. Identity & Access Management Architect is also challenging; Dev Lifecycle & Deployment Architect is generally considered more approachable.',
  },
  {
    question: 'How many architect exams are in the full CTA path?',
    answer: 'The CTA pathway includes 6 architect-level exams across two tracks. Application Architect track (4 exams): Data Architect, Sharing & Visibility Architect, Platform App Builder, and the Application Architect credential exam. System Architect track (4 exams): Integration Architect, Identity & Access Management Architect, Dev Lifecycle & Deployment Architect, and the System Architect credential exam. After both tracks, you sit the CTA Evaluation Exam ($400) and, if successful, the CTA Review Board ($3,000).',
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
        <LastUpdated />
        <p className="text-lg text-gray-600">
          Integration Architect is a specialist exam and one component of the System Architect track.
          System Architect recognizes completion of that track. Compare the standalone exam with the larger CTA milestone.
        </p>
      </header>

      <ContentPageAuthor />
      <WhichFirstBlock
        certA={{
          name: "Integration Architect",
          certSlug: "integration-architect",
          examTipsSlug: "certifications/integration-architect",
          conditions: [
          "Your projects involve API design, middleware, or enterprise integrations",
          "You want to focus on integration before deciding on the full CTA path",
          "You want a specialist credential for integration work",
          "Your clients connect Salesforce with several other systems",
          ],
        }}
        certB={{
          name: "System Architect",
          certSlug: "system-architect",
          examTipsSlug: "certifications/system-architect",
          conditions: [
          "You plan to pursue the full Certified Technical Architect path",
          "You already hold two or more domain architect credentials",
          "You have 8+ years of Salesforce experience across multiple orgs",
          "You are ready to complete the System Architect track",
          ],
        }}
        recommendation={{
          certName: "Integration Architect",
          certSlug: "integration-architect",
          examTipsSlug: "certifications/integration-architect",
          reason: "Integration Architect is a standalone exam for professionals who design system connections. System Architect represents completion of a broader group of exams in the CTA path. Start with Integration Architect if integration work is your goal; pursue System Architect when you are progressing through the full track.",
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
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Integration patterns</strong>: Request/reply, fire-and-forget, batch sync, and publish/subscribe with Platform Events or Change Data Capture. Be able to choose between synchronous and asynchronous designs.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>API management</strong>: MuleSoft API-led connectivity (System, Process, and Experience API layers), Salesforce Connect for external objects, concurrent and daily API limits, and API versioning.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Data migration</strong>: Select Apex Data Loader, Data Import Wizard, or an ETL tool for the data volume. Plan the order for related objects, prevent duplicates, and validate the results after migration.</li>
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
                <td className="py-2.5 pr-4">You design APIs, middleware patterns, or data flows between systems</td>
                <td className="py-2.5 font-semibold text-salesforce-blue">Integration Architect</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4">You design org strategy, identity, sharing, or deployment architecture</td>
                <td className="py-2.5 font-semibold text-purple-700">System Architect (part of the SA credential bundle)</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4">You have experience with MuleSoft, REST/SOAP, or enterprise integration</td>
                <td className="py-2.5 font-semibold text-salesforce-blue">Integration Architect, your background aligns directly</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4">You are pursuing the full CTA (Certified Technical Architect) path</td>
                <td className="py-2.5 font-semibold text-purple-700">System Architect bundle covers Integration Architect as a domain</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4">You need a standalone specialist credential for integration work</td>
                <td className="py-2.5 font-semibold text-salesforce-blue">Integration Architect, faster, targeted credential</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="rounded-xl border border-salesforce-blue/20 bg-salesforce-blue/5 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Start Preparing</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/certifications/integration-architect#practice-questions" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-colors">
            Integration Architect Practice Questions <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/certifications/system-architect#practice-questions" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
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
