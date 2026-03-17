import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import { ArchitectCertRoadmap } from '@/components/CertRoadmapSvg'
import RoadmapWithDownload from '@/components/RoadmapWithDownload'
import type { Metadata } from 'next'
import { buildPathTitle } from '@/lib/seo-title-helpers'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'

const pageTitle = buildPathTitle('Architect')
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription =
  `Salesforce architect certification path (${RELEASE_CURRENT}): right order for Application Architect, System Architect, and CTA components. Start free practice now.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/architect-certification-path` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/architect-certification-path`,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: ogImageUrl, alt: pageTitle }],
  },
  keywords:
    `Salesforce architect certification path ${RELEASE_CURRENT}, how to become Salesforce architect, Application Architect roadmap, System Architect path, CTA path`,
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Salesforce Architect Certification Path', url: '/architect-certification-path' },
]

const faqItems = [
  {
    question: 'What is the Salesforce architect certification path?',
    answer: 'The Salesforce architect path has two role-based credentials below CTA: Application Architect (requires App Builder + PD1 + Data Architect + Sharing & Visibility Architect) and System Architect (requires Integration Architect + IAM Architect + Dev Lifecycle & Deployment Architect + System Architect exam). Both are prerequisites for the Certified Technical Architect (CTA).',
  },
  {
    question: 'What is the first certification for the Salesforce architect track?',
    answer: 'The recommended starting point for the architect track is the Salesforce Administrator (ADM-201) followed by Platform App Builder (DEV-402). App Builder is the first component of the Application Architect credential and establishes the declarative foundation that all architect component exams build on.',
  },
  {
    question: 'How long does it take to become a Salesforce Application Architect?',
    answer: 'Most candidates take 18–36 months from ADM-201 to completing all four Application Architect components. The timeline depends heavily on how much real Salesforce project experience you have. Data Architect and Sharing & Visibility Architect typically require the most preparation time.',
  },
  {
    question: 'Do I need Application Architect before System Architect?',
    answer: 'Application Architect and System Architect are independent role-based credentials — you do not need one to pursue the other. However, both are typically required for the Certified Technical Architect (CTA). Most candidates earn Application Architect first since its components (App Builder, PD1) are more accessible entry points.',
  },
]

export default function ArchitectCertificationPathPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/architect-certification-path" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />

      <header data-lcp-header className="mb-10">
        <p className="inline-flex items-center rounded-full bg-salesforce-blue/10 px-3 py-1 text-sm font-medium text-salesforce-blue mb-4">
          Certification Roadmap · {RELEASE_CURRENT}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Salesforce Architect Certification Path ({RELEASE_CURRENT})
        </h1>
        <p className="text-lg text-gray-600">
          The Salesforce architect track has two role-based credentials — Application Architect and System Architect —
          each earned by passing a set of component exams. Both lead to the Certified Technical Architect (CTA),
          the highest Salesforce credential. Here is the full roadmap.
        </p>
      </header>

      <ContentPageAuthor />

      <RoadmapWithDownload downloadFilename="salesforce-architect-cert-roadmap.png">
        <ArchitectCertRoadmap />
      </RoadmapWithDownload>

      {/* Overview */}
      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">The Architect Pyramid</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th scope="col" className="py-2.5 pr-4 font-semibold text-gray-900 w-1/3">Credential</th>
                <th scope="col" className="py-2.5 pr-4 font-semibold text-gray-900">Component Exams Required</th>
                <th scope="col" className="py-2.5 font-semibold text-gray-900 text-right">Level</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 divide-y divide-gray-100">
              <tr>
                <td className="py-2.5 pr-4 font-medium text-salesforce-blue">Application Architect</td>
                <td className="py-2.5 pr-4">App Builder + PD1 + Data Architect + Sharing &amp; Visibility Architect</td>
                <td className="py-2.5 text-right text-xs font-medium text-gray-500">Advanced</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-medium text-purple-700">System Architect</td>
                <td className="py-2.5 pr-4">Integration Architect + IAM Architect + Dev Lifecycle Architect + System Architect exam</td>
                <td className="py-2.5 text-right text-xs font-medium text-gray-500">Advanced</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-medium text-amber-700">Certified Technical Architect (CTA)</td>
                <td className="py-2.5 pr-4">Application Architect + System Architect + CTA Evaluation + Review Board</td>
                <td className="py-2.5 text-right text-xs font-medium text-red-600 font-semibold">Expert</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Application Architect path */}
      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Application Architect Path (Recommended Order)</h2>
        <p className="text-sm text-gray-700 mb-4">
          Start with the two most accessible components first. Each exam builds on the previous.
        </p>
        <div className="space-y-4">
          <div className="flex gap-4 items-start">
            <span className="flex-shrink-0 h-7 w-7 rounded-full bg-salesforce-blue text-white text-sm font-bold flex items-center justify-center">1</span>
            <div>
              <p className="font-semibold text-gray-900">Salesforce Administrator (ADM-201) — Foundation</p>
              <p className="text-sm text-gray-600 mt-0.5">Not a component exam but required knowledge base. Platform security model, object relationships, and declarative automation are tested across all architect components.</p>
              <Link href="/adm-201-exam-tips-2026" className="text-sm text-salesforce-blue hover:underline mt-1 inline-block">ADM-201 exam tips →</Link>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <span className="flex-shrink-0 h-7 w-7 rounded-full bg-salesforce-blue text-white text-sm font-bold flex items-center justify-center">2</span>
            <div>
              <p className="font-semibold text-gray-900">Platform App Builder (DEV-402) — Component 1</p>
              <p className="text-sm text-gray-600 mt-0.5">Data modelling, Flow automation, Lightning App Builder, and security model. 68% passing score. Most candidates take 4-6 weeks to prepare.</p>
              <Link href="/app-builder-exam-tips" className="text-sm text-salesforce-blue hover:underline mt-1 inline-block">App Builder exam tips →</Link>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <span className="flex-shrink-0 h-7 w-7 rounded-full bg-salesforce-blue text-white text-sm font-bold flex items-center justify-center">3</span>
            <div>
              <p className="font-semibold text-gray-900">Platform Developer I (PD1) — Component 2</p>
              <p className="text-sm text-gray-600 mt-0.5">Apex fundamentals, SOQL/DML, governor limits, triggers, and LWC. 68% passing score. Requires hands-on Apex coding practice.</p>
              <Link href="/pd1-exam-tips-2026" className="text-sm text-salesforce-blue hover:underline mt-1 inline-block">PD1 exam tips →</Link>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <span className="flex-shrink-0 h-7 w-7 rounded-full bg-salesforce-blue text-white text-sm font-bold flex items-center justify-center">4</span>
            <div>
              <p className="font-semibold text-gray-900">Data Architect — Component 3</p>
              <p className="text-sm text-gray-600 mt-0.5">Data modelling at scale, large data volumes, master data management, and migration strategy. 63% passing score. Requires real LDV project experience.</p>
              <Link href="/data-architect-exam-tips" className="text-sm text-salesforce-blue hover:underline mt-1 inline-block">Data Architect exam tips →</Link>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <span className="flex-shrink-0 h-7 w-7 rounded-full bg-salesforce-blue text-white text-sm font-bold flex items-center justify-center">5</span>
            <div>
              <p className="font-semibold text-gray-900">Sharing &amp; Visibility Architect — Component 4</p>
              <p className="text-sm text-gray-600 mt-0.5">OWD design, sharing rule strategy, performance implications, and Apex managed sharing. 63% passing score. Highest retry rate of the four components.</p>
              <Link href="/sharing-visibility-architect-exam-tips" className="text-sm text-salesforce-blue hover:underline mt-1 inline-block">Sharing &amp; Visibility exam tips →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* System Architect path */}
      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">System Architect Path (Recommended Order)</h2>
        <div className="space-y-4">
          <div className="flex gap-4 items-start">
            <span className="flex-shrink-0 h-7 w-7 rounded-full bg-purple-600 text-white text-sm font-bold flex items-center justify-center">1</span>
            <div>
              <p className="font-semibold text-gray-900">System Architect Exam</p>
              <p className="text-sm text-gray-600 mt-0.5">Broad architectural knowledge across the Salesforce platform. Take this alongside the component exams as it tests conceptual understanding of all System Architect topics.</p>
              <Link href="/system-architect-exam-tips" className="text-sm text-salesforce-blue hover:underline mt-1 inline-block">System Architect exam tips →</Link>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <span className="flex-shrink-0 h-7 w-7 rounded-full bg-purple-600 text-white text-sm font-bold flex items-center justify-center">2</span>
            <div>
              <p className="font-semibold text-gray-900">Integration Architect</p>
              <p className="text-sm text-gray-600 mt-0.5">API selection, integration patterns, middleware architecture, OAuth flows, and Platform Events. 63% passing score.</p>
              <Link href="/integration-architect-exam-tips" className="text-sm text-salesforce-blue hover:underline mt-1 inline-block">Integration Architect exam tips →</Link>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <span className="flex-shrink-0 h-7 w-7 rounded-full bg-purple-600 text-white text-sm font-bold flex items-center justify-center">3</span>
            <div>
              <p className="font-semibold text-gray-900">Identity &amp; Access Management (IAM) Architect</p>
              <p className="text-sm text-gray-600 mt-0.5">SSO, OAuth, SAML, Connected Apps, and identity federation. 63% passing score. Requires real SSO/OAuth implementation experience.</p>
              <Link href="/identity-access-management-architect-exam-tips" className="text-sm text-salesforce-blue hover:underline mt-1 inline-block">IAM Architect exam tips →</Link>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <span className="flex-shrink-0 h-7 w-7 rounded-full bg-purple-600 text-white text-sm font-bold flex items-center justify-center">4</span>
            <div>
              <p className="font-semibold text-gray-900">Dev Lifecycle &amp; Deployment Architect</p>
              <p className="text-sm text-gray-600 mt-0.5">Environment strategy, sandbox hierarchy, release management, SFDX, CI/CD pipelines. 63% passing score.</p>
              <Link href="/dev-lifecycle-deployment-architect-exam-tips" className="text-sm text-salesforce-blue hover:underline mt-1 inline-block">Dev Lifecycle Architect exam tips →</Link>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-gray-50 rounded-xl border border-gray-100 p-5 mb-8">
        <h2 className="text-base font-bold text-gray-900 mb-3">Compare Certifications</h2>
        <ul className="space-y-2">
          <li><Link href="/how-to-become-salesforce-architect" className="text-sm text-salesforce-dark hover:underline font-medium">→ How to become a Salesforce Architect — step-by-step guide</Link></li>
          <li><Link href="/system-architect-vs-application-architect" className="text-sm text-salesforce-dark hover:underline font-medium">→ System Architect vs Application Architect comparison</Link></li>
        </ul>
      </div>


      {/* CTA */}
      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">After Both Architect Credentials: The CTA Path</h2>
        <p className="text-sm text-gray-700 mb-3">
          The Certified Technical Architect (CTA) is the highest Salesforce credential. It requires both Application Architect
          and System Architect credentials, then involves a written submission (Architect Evaluation) and a live review board presentation.
        </p>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" />The CTA Review Board is a live scenario presentation to a panel of existing CTAs — preparation takes months and requires deep, cross-domain architectural knowledge.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" />Less than 1% of Salesforce professionals hold the CTA credential. It is the pinnacle of the Salesforce certification hierarchy.</li>
        </ul>
        <Link href="/become-cta" className="inline-flex items-center gap-2 mt-3 text-sm text-salesforce-blue font-medium hover:underline">
          Full CTA preparation guide <ArrowRight className="h-3 w-3" />
        </Link>
      </section>

      {/* Start prep */}
      <section className="rounded-xl border border-salesforce-blue/20 bg-salesforce-blue/5 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Start Architect Track Prep</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/certifications/application-architect" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-colors">
            Application Architect Practice <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/certifications/role/architect" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            All Architect Certifications
          </Link>
          <Link href="/become-cta" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            Become a CTA
          </Link>
        </div>
      </section>
    </div>
  )
}
