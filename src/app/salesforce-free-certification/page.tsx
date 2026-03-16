import type { Metadata } from 'next'
import Link from 'next/link'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import RelatedGuides from '@/components/RelatedGuides'
import { getRelatedGuides } from '@/lib/related-guides-data'
import { RELEASE_CURRENT } from '@/lib/release-data'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const pageTitle = `How to Get a Free Salesforce Certification (${RELEASE_CURRENT})`
const pageDescription = `How to get free Salesforce certification exams in 2026: Dreamforce vouchers, Trailhead promotions, employer-sponsored exams, and the lowest-cost entry points.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/salesforce-free-certification` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/salesforce-free-certification`,
    images: [{ url: `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`, alt: pageTitle }],
  },
  keywords: `free salesforce certification 2026, salesforce certification free exam, how to get salesforce certified free, dreamforce free certification`,
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'How to Get a Free Salesforce Certification', url: '/salesforce-free-certification' },
]

const faqItems = [
  {
    question: 'Can I get a Salesforce certification for free?',
    answer: 'Yes — in certain circumstances. Salesforce has historically offered free exam vouchers at annual events like Dreamforce (September) and World Tour events globally. These typically cover associate-level certifications ($75 standard fee): AI Associate, Platform Foundations, or MuleSoft Integration Foundations. Additionally, employees of Salesforce consulting partners often receive fully subsidised exam fees as a company benefit.',
  },
  {
    question: 'Does Salesforce offer free certifications through Trailhead?',
    answer: 'Trailhead is free to use for learning — all Trailhead modules, trails, superbadges, and content are free. However, Trailhead learning and superbadges are not Salesforce certifications. Certifications require a separate paid exam through Webassessor. Salesforce has run periodic promotions where completing a Trailhead trail unlocks a free exam voucher, but these are time-limited campaigns, not permanent free access.',
  },
  {
    question: 'What is the cheapest Salesforce certification?',
    answer: 'The three associate-level certifications cost $75 each — the lowest standard fee in the Salesforce portfolio: AI Associate, Salesforce Platform Foundations, and MuleSoft Integration Foundations. These are also the easiest certifications, making them the lowest-risk entry point for beginners. Of these, AI Associate is the most widely recognised and the most recommended first certification.',
  },
  {
    question: 'Can my employer pay for my Salesforce certification?',
    answer: 'Many employers cover Salesforce certification exam fees — especially Salesforce consulting partners, where certification counts directly affect the company\'s Salesforce partner tier. For Salesforce partners, each employee certification counts toward partnership requirements, giving companies a direct financial incentive to fund employee certifications. Even non-partner employers often reimburse certifications through L&D budgets. Ask your manager or HR team before paying out of pocket.',
  },
  {
    question: 'Are Trailhead Superbadges the same as certifications?',
    answer: 'No — Trailhead Superbadges and certifications are different credentials. Superbadges are awarded for completing complex, real-world challenges on Trailhead and appear on your Trailhead profile. They demonstrate hands-on skills but are not formal certifications. Certifications are awarded after passing a proctored exam through Webassessor/Kryterion and appear on a separate verified credential page that employers can check publicly. Both are valuable, but certifications carry more weight in job applications.',
  },
]

export default function SalesforceFreeCertificationPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/salesforce-free-certification" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />

      <div data-lcp-header className="mb-10">
        <div className="inline-flex items-center gap-2 bg-salesforce-blue/10 text-salesforce-dark text-sm font-semibold px-3 py-1 rounded-full mb-4">
          <span>Cost Guide</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          How to Get a Free Salesforce Certification ({RELEASE_CURRENT})
        </h1>
        <p className="text-lg text-gray-600">
          Legitimate ways to get your Salesforce certification at no cost — plus the lowest-cost entry points if a fully free exam is not available right now.
        </p>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-8">
        <h2 className="text-base font-bold text-amber-900 mb-1">Honest expectation</h2>
        <p className="text-sm text-amber-800">Fully free Salesforce certification exams are not permanently available — they appear through time-limited event promotions. If a free voucher is not currently available, the $75 associate-level exams are the lowest-cost option. This page covers all routes to zero or reduced exam cost.</p>
      </div>

      <div className="space-y-6 mb-10">
        {[
          {
            title: 'Route 1: Salesforce Events (Most Reliable Free Opportunity)',
            badge: 'Free — periodic',
            badgeColor: 'bg-green-100 text-green-800',
            content: 'Salesforce\'s major annual events have historically included free associate-level exam vouchers for attendees. Dreamforce (San Francisco, September) is the primary opportunity — Salesforce often offers free AI Associate or Platform Foundations exams to registered attendees as part of the Trailblazer experience. World Tour events globally have also offered similar promotions for local attendees. These promotions are announced 4–8 weeks before each event on the Salesforce blog and Trailhead social channels. Follow @Trailhead and @Salesforce to catch announcements.',
          },
          {
            title: 'Route 2: Employer Sponsorship (Most Common Free Route)',
            badge: 'Free — if eligible',
            badgeColor: 'bg-green-100 text-green-800',
            content: 'For professionals working at or joining a Salesforce consulting partner or ISV, employer-funded certification is the most common route to a free exam. Salesforce partners have a direct financial incentive to fund employee certifications — each certification counts toward partner tier requirements. Large SIs (Accenture, Deloitte, Capgemini, Wipro) and boutique Salesforce partners typically have L&D budgets specifically for Salesforce certifications. Ask your manager or HR team before paying out of pocket — many candidates do not realise their employer will cover the cost.',
          },
          {
            title: 'Route 3: Trailhead Promotional Campaigns (Periodic)',
            badge: 'Free — time-limited',
            badgeColor: 'bg-blue-100 text-blue-800',
            content: 'Salesforce has run campaigns where completing a specific Trailhead trail or superbadge challenge unlocks a free exam voucher code. These campaigns are not permanent — they run for 30–90 days and are tied to specific Salesforce product launches or milestones. To catch these: set up Google Alerts for "Salesforce free certification" and "Trailhead exam voucher"; follow Salesforce Trailhead, Salesforce Admins, and Salesforce Developers social accounts; and join Salesforce Trailblazer Community groups where members share promotion news quickly.',
          },
          {
            title: 'Route 4: $75 Associate Certifications (Lowest Cost Entry)',
            badge: 'Lowest paid cost',
            badgeColor: 'bg-purple-100 text-purple-800',
            content: 'If a free exam is not currently available, the three associate-level certifications are the lowest-cost entry into the Salesforce ecosystem at $75 each: Salesforce AI Associate (most widely recommended, no experience required), Salesforce Platform Foundations (broad Salesforce overview), and MuleSoft Integration Foundations (API and integration concepts). Of these, AI Associate is the most marketable first certification for professionals new to Salesforce. At $75, the ROI is extremely high — passing opens doors to Salesforce-related roles and demonstrates initiative.',
          },
        ].map((section) => (
          <div key={section.title} className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <div className="flex items-start justify-between gap-3 mb-3">
              <h2 className="text-lg font-bold text-gray-900">{section.title}</h2>
              <span className={`text-xs font-semibold px-2 py-0.5 rounded-full flex-shrink-0 ${section.badgeColor}`}>{section.badge}</span>
            </div>
            <p className="text-sm text-gray-700">{section.content}</p>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Trailhead vs Certifications: What&apos;s Free?</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left py-2 pr-4 text-gray-500 font-medium">Credential</th>
                <th className="text-left py-2 pr-4 text-gray-500 font-medium">Cost</th>
                <th className="text-left py-2 text-gray-500 font-medium">Recognised by employers?</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {[
                { cred: 'Trailhead Modules & Trails', cost: 'Free', rec: 'Useful context — not a primary credential' },
                { cred: 'Trailhead Superbadges', cost: 'Free', rec: 'Moderately — shows hands-on skills' },
                { cred: 'Trailhead Ranger Rank', cost: 'Free', rec: 'Mildly — shows platform engagement' },
                { cred: 'Associate Certifications (AI Associate, Platform Foundations)', cost: '$75', rec: 'Yes — formal credential, publicly verifiable' },
                { cred: 'Professional Certifications (ADM-201, PD1, etc.)', cost: '$200', rec: 'Strongly — primary hiring criterion' },
                { cred: 'Architect Certifications', cost: '$400', rec: 'Strongly — premium career credential' },
              ].map((row) => (
                <tr key={row.cred}>
                  <td className="py-2 pr-4 text-gray-900">{row.cred}</td>
                  <td className="py-2 pr-4 text-salesforce-blue font-medium">{row.cost}</td>
                  <td className="py-2 text-gray-700">{row.rec}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
        <dl className="space-y-4">
          {faqItems.map((item) => (
            <div key={item.question} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
              <dt className="font-semibold text-gray-900 mb-1">{item.question}</dt>
              <dd className="text-sm text-gray-700">{item.answer}</dd>
            </div>
          ))}
        </dl>
      </div>

      <RelatedGuides links={getRelatedGuides('salesforce-free-certification')} />

      <div className="bg-salesforce-blue rounded-xl p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-2">Start with AI Associate — $75</h2>
        <p className="text-blue-100 mb-6">The most accessible entry point: no experience required, lowest fee, free practice questions available now.</p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/certifications/ai-associate" className="inline-flex items-center px-5 py-3 bg-white text-salesforce-blue rounded-lg font-semibold hover:bg-blue-50 transition-colors text-sm">
            AI Associate Practice Questions
          </Link>
          <Link href="/certifications" className="inline-flex items-center px-5 py-3 border border-white/40 text-white rounded-lg font-semibold hover:bg-white/10 transition-colors text-sm">
            Browse All Certifications
          </Link>
        </div>
      </div>
    </div>
  )
}
