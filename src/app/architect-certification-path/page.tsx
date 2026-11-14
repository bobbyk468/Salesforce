import Link from '@/components/AppLink'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import { ArchitectCertRoadmap } from '@/components/CertRoadmapSvg'
import RoadmapWithDownload from '@/components/RoadmapWithDownload'
import type { Metadata } from 'next'
import { buildPathTitle } from '@/lib/seo-title-helpers'
import LastUpdated from '@/components/LastUpdated'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'

const pageTitle = buildPathTitle('Architect')
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription =
  'Plan a Salesforce architect certification path through Application Architect, System Architect, and CTA board review.'

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: {
    canonical: `${siteUrl}/architect-certification-path`,
    languages: { 'en-US': `${siteUrl}/architect-certification-path`, 'x-default': `${siteUrl}/architect-certification-path` },
  },
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
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Salesforce Architect Certification Path', url: '/architect-certification-path' },
]

const faqItems = [
  {
    question: 'What is the Salesforce architect certification path?',
    answer: 'The architect path has two role-based credentials before CTA. Salesforce awards Application Architect when you hold App Builder, PD1, Data Architect, and Sharing & Visibility Architect. System Architect requires PD1, Integration Architect, IAM Architect, and Dev Lifecycle & Deployment Architect, and is also awarded without a separate exam. PD1 is the only exam shared by both credentials. You need both credentials before the Certified Technical Architect (CTA).',
  },
  {
    question: 'What is the first certification for the Salesforce architect track?',
    answer: 'Start with Salesforce Administrator (ADM-201), then take Platform App Builder (DEV-402). App Builder is the first Application Architect component and builds the declarative skills used across the architect exams.',
  },
  {
    question: 'How long does it take to become a Salesforce Application Architect?',
    answer: 'Many candidates take 18–36 months from ADM-201 to finish the four Application Architect components. Your timeline depends on your Salesforce project experience. Data Architect and Sharing & Visibility Architect often need the most preparation.',
  },
  {
    question: 'Do I need Application Architect before System Architect?',
    answer: 'You can pursue Application Architect and System Architect independently; neither is a prerequisite for the other. Both are typically required for Certified Technical Architect (CTA). Many candidates start with Application Architect because App Builder and PD1 are familiar entry points.',
  },
]

export default function ArchitectCertificationPathPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/architect-certification-path" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />

      <header data-lcp-header className="mb-10">
        <p className="inline-flex items-center rounded-full bg-salesforce-blue/10 px-3 py-1 text-sm font-medium text-salesforce-dark mb-4">
          Certification Roadmap · {RELEASE_CURRENT}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Salesforce Architect Certification Path ({RELEASE_CURRENT})
        </h1>
        <LastUpdated />
        <p className="text-lg text-gray-600">
          Plan your certification sequence from the component exams through Application Architect and System Architect,
          then toward Certified Technical Architect (CTA), Salesforce’s highest credential.
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
                <td className="py-2.5 text-right text-xs font-medium text-gray-600">Advanced</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-medium text-purple-700">System Architect</td>
                <td className="py-2.5 pr-4">PD1 + Integration Architect + IAM Architect + Dev Lifecycle Architect (no separate exam)</td>
                <td className="py-2.5 text-right text-xs font-medium text-gray-600">Advanced</td>
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
          Begin with the platform foundation, then work through the four component exams. The suggested sequence starts with the more familiar credentials.
        </p>
        <div className="space-y-4">
          <div className="flex gap-4 items-start">
            <span className="flex-shrink-0 h-7 w-7 rounded-full bg-salesforce-blue text-white text-sm font-bold flex items-center justify-center">1</span>
            <div>
              <p className="font-semibold text-gray-900">Salesforce Administrator (ADM-201): Foundation</p>
              <p className="text-sm text-gray-600 mt-0.5">ADM-201 is not a component exam. It provides platform knowledge used across the architect components, including security, object relationships, and declarative automation.</p>
              <Link href="/certifications/administrator" className="text-sm text-salesforce-blue hover:underline mt-1 inline-block">ADM-201 exam tips →</Link>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <span className="flex-shrink-0 h-7 w-7 rounded-full bg-salesforce-blue text-white text-sm font-bold flex items-center justify-center">2</span>
            <div>
              <p className="font-semibold text-gray-900">Platform App Builder (DEV-402): Component 1</p>
              <p className="text-sm text-gray-600 mt-0.5">Study data modeling, Flow automation, Lightning App Builder, and the security model. The passing score is 73%, and many candidates prepare for 4-6 weeks.</p>
              <Link href="/certifications/app-builder" className="text-sm text-salesforce-blue hover:underline mt-1 inline-block">App Builder exam tips →</Link>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <span className="flex-shrink-0 h-7 w-7 rounded-full bg-salesforce-blue text-white text-sm font-bold flex items-center justify-center">3</span>
            <div>
              <p className="font-semibold text-gray-900">Platform Developer I (PD1): Component 2</p>
              <p className="text-sm text-gray-600 mt-0.5">Review Apex fundamentals, SOQL/DML, governor limits, triggers, and LWC. The passing score is 68%; prepare with hands-on Apex coding practice.</p>
              <Link href="/certifications/developer-1" className="text-sm text-salesforce-blue hover:underline mt-1 inline-block">PD1 exam tips →</Link>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <span className="flex-shrink-0 h-7 w-7 rounded-full bg-salesforce-blue text-white text-sm font-bold flex items-center justify-center">4</span>
            <div>
              <p className="font-semibold text-gray-900">Data Architect: Component 3</p>
              <p className="text-sm text-gray-600 mt-0.5">This exam covers data modeling at scale, large data volumes, master data management, and migration strategy. The passing score is 58%, and real LDV project experience is useful.</p>
              <Link href="/certifications/data-architect" className="text-sm text-salesforce-blue hover:underline mt-1 inline-block">Data Architect exam tips →</Link>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <span className="flex-shrink-0 h-7 w-7 rounded-full bg-salesforce-blue text-white text-sm font-bold flex items-center justify-center">5</span>
            <div>
              <p className="font-semibold text-gray-900">Sharing &amp; Visibility Architect: Component 4</p>
              <p className="text-sm text-gray-600 mt-0.5">Study OWD design, sharing rule strategy, performance implications, and Apex managed sharing. The passing score is 58%; this component has the highest retry rate of the four.</p>
              <Link href="/certifications/sharing-visibility-architect" className="text-sm text-salesforce-blue hover:underline mt-1 inline-block">Sharing &amp; Visibility exam tips →</Link>
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
              <p className="font-semibold text-gray-900">Platform Developer I (PD1)</p>
              <p className="text-sm text-gray-600 mt-0.5">PD1 is the only exam shared with Application Architect, so you have already completed it if you hold that credential. It covers Apex, triggers, LWC, and governor limits.</p>
              <Link href="/certifications/developer-1" className="text-sm text-salesforce-blue hover:underline mt-1 inline-block">PD1 exam tips →</Link>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <span className="flex-shrink-0 h-7 w-7 rounded-full bg-purple-600 text-white text-sm font-bold flex items-center justify-center">2</span>
            <div>
              <p className="font-semibold text-gray-900">Integration Architect</p>
              <p className="text-sm text-gray-600 mt-0.5">Study API selection, integration patterns, middleware architecture, OAuth flows, and Platform Events. The passing score is 67%.</p>
              <Link href="/certifications/integration-architect" className="text-sm text-salesforce-blue hover:underline mt-1 inline-block">Integration Architect exam tips →</Link>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <span className="flex-shrink-0 h-7 w-7 rounded-full bg-purple-600 text-white text-sm font-bold flex items-center justify-center">3</span>
            <div>
              <p className="font-semibold text-gray-900">Identity &amp; Access Management (IAM) Architect</p>
              <p className="text-sm text-gray-600 mt-0.5">This exam covers SSO, OAuth, SAML, Connected Apps, and identity federation. The passing score is 65%; real SSO/OAuth implementation experience is useful.</p>
              <Link href="/certifications/identity-access-management-architect" className="text-sm text-salesforce-blue hover:underline mt-1 inline-block">IAM Architect exam tips →</Link>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <span className="flex-shrink-0 h-7 w-7 rounded-full bg-purple-600 text-white text-sm font-bold flex items-center justify-center">4</span>
            <div>
              <p className="font-semibold text-gray-900">Dev Lifecycle &amp; Deployment Architect</p>
              <p className="text-sm text-gray-600 mt-0.5">Review environment strategy, sandbox hierarchy, release management, SFDX, and CI/CD pipelines. The passing score is 65%.</p>
              <Link href="/certifications/dev-lifecycle-deployment-architect" className="text-sm text-salesforce-blue hover:underline mt-1 inline-block">Dev Lifecycle Architect exam tips →</Link>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <span className="flex-shrink-0 h-7 w-7 rounded-full bg-purple-600 text-white text-sm font-bold flex items-center justify-center">5</span>
            <div>
              <p className="font-semibold text-gray-900">System Architect credential granted</p>
              <p className="text-sm text-gray-600 mt-0.5">There is no additional exam. Salesforce adds System Architect to your profile when you hold the four credentials listed above.</p>
              <Link href="/certifications/system-architect" className="text-sm text-salesforce-blue hover:underline mt-1 inline-block">System Architect exam tips →</Link>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-gray-50 rounded-xl border border-gray-100 p-5 mb-8">
        <h2 className="text-base font-bold text-gray-900 mb-3">Compare Certifications</h2>
        <ul className="space-y-2">
          <li><Link href="/how-to-become-salesforce-architect" className="text-sm text-salesforce-dark hover:underline font-medium">→ How to become a Salesforce Architect, step-by-step guide</Link></li>
          <li><Link href="/system-architect-vs-application-architect" className="text-sm text-salesforce-dark hover:underline font-medium">→ System Architect vs Application Architect comparison</Link></li>
        </ul>
      </div>


      {/* CTA */}
      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">After Both Architect Credentials: The CTA Path</h2>
        <p className="text-sm text-gray-700 mb-3">
          Certified Technical Architect (CTA) is Salesforce’s highest credential. You need both Application Architect
          and System Architect first, then complete the Architect Evaluation and a live review board presentation.
        </p>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" />At the CTA Review Board, present a solution to a panel of current CTAs. Preparation takes months and calls for broad architecture knowledge.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" />Less than 1% of Salesforce professionals hold the CTA credential, the top level in the certification hierarchy.</li>
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
