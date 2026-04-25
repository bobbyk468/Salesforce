import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import WhichFirstBlock from '@/components/WhichFirstBlock'
import RelatedComparisons from '@/components/RelatedComparisons'



const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'

const pageTitle = 'CPQ Administrator vs CPQ & Billing AP: Which Certification to Take?'
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription =
  'Compare Salesforce CPQ Administrator and CPQ & Billing AP: what each tests, exam format differences, which to target for Revenue Cloud.'

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/cpq-admin-vs-cpq-billing-ap` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/cpq-admin-vs-cpq-billing-ap`,
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
  { name: 'CPQ Admin vs CPQ & Billing AP', url: '/cpq-admin-vs-cpq-billing-ap' },
]

const faqItems = [
  {
    question: 'What is the difference between CPQ Administrator and CPQ & Billing AP?',
    answer: 'Salesforce CPQ Administrator is a full certification ($200, 60 questions, 105 min, 65%) validating expert-level CPQ configuration: complex product rules, pricing waterfall mastery, quote templates, and advanced contracting. CPQ &amp; Billing AP is an Accredited Professional credential ($150, 40 questions, 60 min, Pass/Fail) with a broader but shallower scope that also includes Salesforce Billing — invoice generation, payment processing, and billing amendments. The AP is faster to achieve; the Administrator credential signals deeper CPQ expertise.',
  },
  {
    question: 'Should I take CPQ Administrator or CPQ & Billing AP first?',
    answer: 'CPQ &amp; Billing AP is faster to prepare for (40 questions, 60 min, lower investment) and is a good entry point if you are new to CPQ or if your role requires billing knowledge alongside CPQ. CPQ Administrator validates deeper, CPQ-only expertise and is more valuable if you are a specialist CPQ consultant. Many professionals take the AP first to get a credential quickly, then study for the full Administrator exam for career advancement.',
  },
  {
    question: 'Does CPQ & Billing AP cover the same material as CPQ Administrator?',
    answer: 'There is significant overlap in CPQ content (pricing waterfall, product bundles, quoting, contracting) but CPQ Administrator goes much deeper on advanced topics: complex product rules with multiple conditions, advanced discount schedule logic, SBQQ custom actions, and quote template styling. CPQ &amp; Billing AP adds Billing content (invoice generation, payment processing) that CPQ Administrator does not cover at all.',
  },
  {
    question: 'Which CPQ certification is better for a Revenue Cloud consultant?',
    answer: 'For a Revenue Cloud consultant, CPQ &amp; Billing AP is more aligned to the full Revenue Cloud scope (which includes both CPQ and Billing). CPQ Administrator focuses exclusively on the CPQ product. As Salesforce migrates to Revenue Cloud Advanced (RCA) in 2025–2026, both certifications have some exposure to this transition — but for practitioners working on end-to-end quote-to-cash implementations, CPQ &amp; Billing AP better reflects the full scope of the role.',
  },
]

export default function CpqAdminVsCpqBillingApPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/cpq-admin-vs-cpq-billing-ap" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />

      <header data-lcp-header className="mb-10">
        <p className="inline-flex items-center rounded-full bg-salesforce-blue/10 px-3 py-1 text-sm font-medium text-salesforce-dark mb-4">
          Certification Comparison
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Salesforce CPQ Administrator vs CPQ &amp; Billing AP: Which to Take for Revenue Cloud?
        </h1>
        <p className="text-lg text-gray-600">
          Both CPQ certifications validate Revenue Cloud skills, but they differ in scope, depth, exam format, and cost.
          Here&apos;s how to choose the right credential for your role and timeline.
        </p>
      </header>

      <ContentPageAuthor />
      <WhichFirstBlock
        certA={{
          name: "CPQ Administrator",
          certSlug: "cpq-administrator",
          examTipsSlug: "cpq-administrator-exam-tips",
          conditions: [
          "You configure Salesforce CPQ — products, pricing rules, quote templates",
          "You implement quote-to-cash processes for clients",
          "You are earlier in your CPQ journey and need the foundational credential",
          "You want the more widely recognised CPQ certification",
          ],
        }}
        certB={{
          name: "CPQ Billing Accredited Professional",
          certSlug: "cpq-administrator",
          examTipsSlug: "cpq-billing-ap-exam-tips",
          conditions: [
          "You already hold CPQ Administrator and want a specialist extension",
          "Your clients use Salesforce Billing for invoicing and revenue recognition",
          "You work on full Revenue Cloud implementations including billing workflows",
          "You want to differentiate as a Revenue Cloud specialist",
          ],
        }}
        recommendation={{
          certName: "CPQ Administrator",
          certSlug: "cpq-administrator",
          examTipsSlug: "cpq-administrator-exam-tips",
          reason: "CPQ Administrator is the essential foundation. Billing AP builds directly on CPQ knowledge — attempting it without CPQ Administrator experience is one of the most common reasons candidates struggle. Take CPQ Admin first, then specialise into Billing AP once you have real CPQ project experience.",
          
        }}
      />

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Side-by-Side Comparison</h2>
        <div className="overflow-x-auto">
          <table className="min-w-[500px] w-full text-sm text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th scope="col" className="py-2.5 pr-4 font-semibold text-gray-900">Factor</th>
                <th scope="col" className="py-2.5 pr-4 font-semibold text-salesforce-blue">CPQ Administrator</th>
                <th scope="col" className="py-2.5 font-semibold text-purple-700">CPQ &amp; Billing AP</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr className="border-b border-gray-100">
                <td className="py-2.5 pr-4 font-medium">Credential Type</td>
                <td className="py-2.5 pr-4">Full Salesforce Certification</td>
                <td className="py-2.5">Accredited Professional (AP)</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2.5 pr-4 font-medium">Exam Format</td>
                <td className="py-2.5 pr-4">60 questions, 105 min, 65%, $200</td>
                <td className="py-2.5">40 questions, 60 min, Pass/Fail, $150</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2.5 pr-4 font-medium">CPQ Depth</td>
                <td className="py-2.5 pr-4">Deep — advanced product rules, pricing architecture, SBQQ customisations</td>
                <td className="py-2.5">Moderate — core CPQ + billing integration</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2.5 pr-4 font-medium">Billing Coverage</td>
                <td className="py-2.5 pr-4">None (CPQ only)</td>
                <td className="py-2.5">Yes — invoices, payments, billing amendments</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2.5 pr-4 font-medium">Time to Prepare</td>
                <td className="py-2.5 pr-4">2–4 months with hands-on CPQ access</td>
                <td className="py-2.5">4–8 weeks with CPQ/Billing access</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-medium">Best For</td>
                <td className="py-2.5 pr-4">CPQ specialists, Revenue Cloud architects</td>
                <td className="py-2.5">Quote-to-cash generalists, billing/CPQ combo roles</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-medium">Avg Salary</td>
                <td className="py-2.5 pr-4">$95–130k (US)</td>
                <td className="py-2.5">$90–125k (US)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">The CPQ Pricing Waterfall (Both Exams Test This)</h2>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>List Price</strong> → base price from price book, set at product level</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Customer / Partner Price</strong> → customer-specific or channel partner pricing</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Regular Price</strong> → after Discount Schedules (volume-based automatic discounts)</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Special / Net Price</strong> → after manual rep discount and additional discount; final price paid</li>
        </ul>
        <p className="text-xs text-gray-600 mt-2">CPQ Administrator tests advanced scenarios where multiple discount types interact. CPQ &amp; Billing AP tests the waterfall at a conceptual level alongside billing invoice generation.</p>
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
        <h2 className="text-xl font-bold text-gray-900 mb-4">Decision Matrix: CPQ Admin or CPQ Billing AP?</h2>
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
                <td className="py-2.5 pr-4">Configuring product rules, pricing rules, and quote line editors</td>
                <td className="py-2.5 font-semibold text-salesforce-blue">CPQ Admin (standard certification)</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4">Setting up billing schedules, payment processing, and invoice automation</td>
                <td className="py-2.5 font-semibold text-purple-700">CPQ Billing AP (Accredited Professional)</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4">Implementing quote-to-cash but not yet touching Billing</td>
                <td className="py-2.5 font-semibold text-salesforce-blue">CPQ Admin first — Billing builds on CPQ fundamentals</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4">Project requires subscription billing, usage-based pricing, or revenue recognition</td>
                <td className="py-2.5 font-semibold text-purple-700">CPQ Billing AP</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4">Want the Salesforce-certified credential (vs AP only)</td>
                <td className="py-2.5 font-semibold text-salesforce-blue">CPQ Admin — full Salesforce certification; AP is an add-on</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="rounded-xl border border-salesforce-blue/20 bg-salesforce-blue/5 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Start Preparing</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/certifications/cpq-administrator" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-colors">
            CPQ Admin Practice Questions <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/certifications/cpq-billing-ap" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            CPQ &amp; Billing AP Practice Questions
          </Link>
          <Link href="/revenue-cloud-consultant-exam-tips" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            Revenue Cloud Tips {RELEASE_CURRENT}
          </Link>
        </div>
      </section>
      <RelatedComparisons
        links={[
          { slug: "sales-cloud-vs-service-cloud", label: "Sales Cloud vs Service Cloud" },
          { slug: "pardot-specialist-vs-pardot-consultant", label: "Pardot Specialist vs Consultant" },
          { slug: "integration-architect-vs-system-architect", label: "Integration vs System Architect" },
        ]}
      />
    </div>
  )
}
