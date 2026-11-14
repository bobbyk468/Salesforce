import type { Metadata } from 'next'
import Link from '@/components/AppLink'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import RelatedGuides from '@/components/RelatedGuides'
import { getRelatedGuides } from '@/lib/related-guides-data'
import { RELEASE_CURRENT } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import WhichFirstBlock from '@/components/WhichFirstBlock'
import RelatedComparisons from '@/components/RelatedComparisons'
import LastUpdated from '@/components/LastUpdated'



const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'

const metadataTitle = 'App Builder vs Platform Developer I: Salesforce Guide'
const pageTitle = `App Builder vs Platform Developer I (${RELEASE_CURRENT})`
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(metadataTitle)}`
const pageDescription =
  'Compare App Builder and Platform Developer I by exam scope, coding needs, difficulty, and career paths to choose a credential.'

export const metadata: Metadata = {
  title: { absolute: metadataTitle },
  description: pageDescription,
  alternates: {
    canonical: `${siteUrl}/app-builder-vs-developer-i`,
    languages: { 'en-US': `${siteUrl}/app-builder-vs-developer-i`, 'x-default': `${siteUrl}/app-builder-vs-developer-i` },
  },
  openGraph: {
    title: metadataTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/app-builder-vs-developer-i`,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: metadataTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: metadataTitle,
    description: pageDescription,
    images: [{ url: ogImageUrl, alt: metadataTitle }],
  },
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Certification Comparison', url: '/certification-comparison' },
  { name: 'App Builder vs Platform Developer I', url: '/app-builder-vs-developer-i' },
]

const faqItems = [
  {
    question: 'Should I take App Builder or Platform Developer I after ADM-201?',
    answer: 'Choose based on the work you want to do. App Builder suits people who configure Salesforce with flows, custom objects, and Lightning pages. Platform Developer I (PD1) is for people who build with Apex and Lightning Web Components (LWC). App Builder does not require coding experience; PD1 requires dedicated programming study.',
  },
  {
    question: 'Is App Builder easier than Platform Developer I?',
    answer: 'Many candidates find App Builder more approachable because it focuses on configuration and shares topics with ADM-201. PD1 requires programming skills in Apex, SOQL, SOSL, triggers, test classes, and LWC. Your experience with these topics will affect how difficult the exam feels.',
  },
  {
    question: 'Do I need to know how to code for the App Builder exam?',
    answer: 'No. The exam covers declarative tools such as Lightning App Builder, custom objects and fields, validation and formula fields, flows, process automation, and AppExchange. It also asks you to recognize when a declarative solution is suitable and when code is needed.',
  },
  {
    question: 'What coding skills does Platform Developer I require?',
    answer: 'PD1 covers Apex classes and triggers, governor limits, asynchronous Apex (future, queueable, batch, and scheduled), SOQL and SOSL, basic Visualforce, and LWC fundamentals (HTML, CSS, and JavaScript). You also need to understand Salesforce test classes, assertions, and the 75%+ code coverage requirement. Triggers and governor limits receive substantial attention.',
  },
]

export default function AppBuilderVsDeveloperIPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/app-builder-vs-developer-i" breadcrumbItems={breadcrumbItems} faqItems={faqItems} aboutEntities={['/certifications/app-builder', '/certifications/developer-1']} />

      <header data-lcp-header className="mb-10">
        <p className="inline-flex items-center rounded-full bg-salesforce-blue/10 px-3 py-1 text-sm font-medium text-salesforce-dark mb-4">
          Certification Comparison · {RELEASE_CURRENT}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Salesforce App Builder vs Platform Developer I: Which to Take?
        </h1>
        <LastUpdated />
        <p className="text-lg text-gray-600">
          App Builder and Platform Developer I (PD1) show two different ways to build on Salesforce.
          App Builder covers configuration with declarative tools; PD1 covers development with Apex and LWC.
          Compare the work each exam reflects, then choose based on your coding experience and goals.
        </p>
      </header>

      <ContentPageAuthor />
      <WhichFirstBlock
        certA={{
          name: "Platform App Builder",
          certSlug: "app-builder",
          examTipsSlug: "certifications/app-builder",
          conditions: [
          "Your role focuses on Salesforce administration, analysis, or configuration",
          "You have not yet worked with Apex or LWC",
          "You want to design apps with Salesforce's declarative tools",
          "You are considering an Architect certification path",
          ],
        }}
        certB={{
          name: "Platform Developer I",
          certSlug: "developer-1",
          examTipsSlug: "certifications/developer-1",
          conditions: [
          "You write or plan to write Apex code",
          "Your current role involves software development",
          "You want to build custom Salesforce behavior in code",
          "You already know SOQL, triggers, and governor limits",
          ],
        }}
        recommendation={{
          certName: "Platform App Builder",
          certSlug: "app-builder",
          examTipsSlug: "certifications/app-builder",
          reason: "App Builder is a useful next step if you want to deepen your configuration and app design skills without writing code. Choose PD1 first if your current work already involves Apex or if you are preparing for a Salesforce developer role.",
          careerPathSlug: "admin-certification-path",
          careerPathLabel: "Admin & Builder Certification Path",
        }}
      />

      {/* Side-by-side table */}
      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Side-by-Side Comparison</h2>
        <div className="overflow-x-auto">
          <table className="min-w-[500px] w-full text-sm text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th scope="col" className="py-2.5 pr-4 font-semibold text-gray-900 w-1/3">Factor</th>
                <th scope="col" className="py-2.5 pr-4 font-semibold text-salesforce-blue">App Builder</th>
                <th scope="col" className="py-2.5 font-semibold text-emerald-700">Platform Developer I</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 divide-y divide-gray-100">
              <tr>
                <td className="py-2.5 pr-4 font-medium">Questions / Time</td>
                <td className="py-2.5 pr-4">60 questions · 105 min</td>
                <td className="py-2.5">60 questions · 105 min</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-medium">Passing Score</td>
                <td className="py-2.5 pr-4">73%</td>
                <td className="py-2.5">65%</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-medium">Exam Fee</td>
                <td className="py-2.5 pr-4">$200 (retake $100)</td>
                <td className="py-2.5">$200 (retake $100)</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-medium">Coding Required</td>
                <td className="py-2.5 pr-4">No, declarative only</td>
                <td className="py-2.5">Yes: Apex, LWC, SOQL required</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-medium">Primary Focus</td>
                <td className="py-2.5 pr-4">Lightning App Builder, flows, custom objects, AppExchange, Lightning pages</td>
                <td className="py-2.5">Apex triggers, governor limits, SOQL/SOSL, LWC, test classes</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-medium">Overlap with ADM-201</td>
                <td className="py-2.5 pr-4">High: ~40% shared knowledge base</td>
                <td className="py-2.5">Low: ~20% shared (data model, security)</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-medium">Difficulty</td>
                <td className="py-2.5 pr-4">Moderate, manageable with platform experience</td>
                <td className="py-2.5">Moderate-Hard, requires active coding practice</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-medium">Avg Salary</td>
                <td className="py-2.5 pr-4">$75–105k (US)</td>
                <td className="py-2.5">$90–125k (US)</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-medium">Career Path</td>
                <td className="py-2.5 pr-4">Admin → Technical Admin → Business Analyst → Consultant</td>
                <td className="py-2.5">Developer → Senior Developer → Technical Architect</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* What's different */}
      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Key Content Differences</h2>
        <div className="grid sm:grid-cols-2 gap-6 text-sm">
          <div>
            <p className="font-semibold text-salesforce-blue mb-2">App Builder: Unique Topics</p>
            <ul className="space-y-1.5 text-gray-700">
              <li className="flex gap-2"><CheckCircle2 className="h-3.5 w-3.5 mt-0.5 text-salesforce-blue flex-shrink-0" />Lightning App Builder and Lightning Experience customisation</li>
              <li className="flex gap-2"><CheckCircle2 className="h-3.5 w-3.5 mt-0.5 text-salesforce-blue flex-shrink-0" />Screen flows, record-triggered flows, scheduled flows</li>
              <li className="flex gap-2"><CheckCircle2 className="h-3.5 w-3.5 mt-0.5 text-salesforce-blue flex-shrink-0" />AppExchange evaluation and installation</li>
              <li className="flex gap-2"><CheckCircle2 className="h-3.5 w-3.5 mt-0.5 text-salesforce-blue flex-shrink-0" />Custom objects, fields, relationships, and formula fields</li>
              <li className="flex gap-2"><CheckCircle2 className="h-3.5 w-3.5 mt-0.5 text-salesforce-blue flex-shrink-0" />When to use declarative vs programmatic solutions</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-emerald-700 mb-2">Platform Developer I: Unique Topics</p>
            <ul className="space-y-1.5 text-gray-700">
              <li className="flex gap-2"><CheckCircle2 className="h-3.5 w-3.5 mt-0.5 text-emerald-600 flex-shrink-0" />Apex classes, triggers, and DML operations</li>
              <li className="flex gap-2"><CheckCircle2 className="h-3.5 w-3.5 mt-0.5 text-emerald-600 flex-shrink-0" />SOQL and SOSL queries; bulkification patterns</li>
              <li className="flex gap-2"><CheckCircle2 className="h-3.5 w-3.5 mt-0.5 text-emerald-600 flex-shrink-0" />Governor limits and when they are exceeded</li>
              <li className="flex gap-2"><CheckCircle2 className="h-3.5 w-3.5 mt-0.5 text-emerald-600 flex-shrink-0" />Lightning Web Components (HTML, JavaScript, @wire)</li>
              <li className="flex gap-2"><CheckCircle2 className="h-3.5 w-3.5 mt-0.5 text-emerald-600 flex-shrink-0" />Apex test classes, code coverage, and test data setup</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Which to take first */}
      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Which to Take First?</h2>
        <p className="text-sm text-gray-700 mb-3">
          Think about how you solve Salesforce requirements today. App Builder tests when and how to configure the platform; PD1 tests whether you can implement behavior in code. You can earn both as your work expands.
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="rounded-lg border border-salesforce-blue/20 bg-salesforce-blue/5 p-4">
            <p className="text-sm font-semibold text-salesforce-dark mb-2">Take App Builder First If:</p>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>You configure Salesforce as an administrator</li>
              <li>You regularly build flows, Lightning pages, or custom objects</li>
              <li>You want to improve your app design skills before learning Apex</li>
              <li>Your work is focused on consulting, analysis, or business processes</li>
            </ul>
          </div>
          <div className="rounded-lg border border-emerald-200 bg-emerald-50/50 p-4">
            <p className="text-sm font-semibold text-emerald-700 mb-2">Take Platform Developer I First If:</p>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>You already build Apex or LWC features at work</li>
              <li>You are bringing software development experience to Salesforce</li>
              <li>You want a Salesforce developer role</li>
              <li>You have programming experience in Java, Python, or JavaScript</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Decision Matrix: App Builder or PD1?</h2>
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
                <td className="py-2.5 pr-4">You mainly use clicks, flows, and configuration</td>
                <td className="py-2.5 font-semibold text-salesforce-blue">App Builder, no Apex required</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4">You have experience with Java, Python, or object-oriented programming</td>
                <td className="py-2.5 font-semibold text-purple-700">PD1, your coding skills transfer directly to Apex</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4">You plan to focus on Salesforce configuration and declarative solutions</td>
                <td className="py-2.5 font-semibold text-salesforce-blue">App Builder</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4">You plan to write Apex triggers, classes, or LWC components</td>
                <td className="py-2.5 font-semibold text-purple-700">PD1</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4">You are pursuing the Architect certification track</td>
                <td className="py-2.5 font-semibold text-salesforce-blue">App Builder, required prerequisite for Architect path</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4">You have admin experience and want to add development skills</td>
                <td className="py-2.5 font-semibold text-gray-700">App Builder first, then PD1, builds naturally</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <RelatedGuides links={getRelatedGuides('app-builder-vs-developer-i')} />

      {/* CTA */}
      <section className="rounded-xl border border-salesforce-blue/20 bg-salesforce-blue/5 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Start Practice for Both</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/certifications/app-builder#practice-questions" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-colors">
            App Builder Practice Questions <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/certifications/developer-1#practice-questions" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            PD1 Practice Questions
          </Link>
          <Link href="/certifications/app-builder" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            App Builder Exam Tips
          </Link>
          <Link href="/certifications/developer-1" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            PD1 Exam Tips
          </Link>
        </div>
      </section>
      <RelatedComparisons
        links={[
          { slug: "adm-201-vs-app-builder", label: "ADM-201 vs App Builder" },
          { slug: "pd1-vs-pd2", label: "Platform Developer I vs II" },
          { slug: "javascript-developer-i-vs-pd1", label: "JavaScript Developer I vs PD1" },
        ]}
      />
    </div>
  )
}
