import type { Metadata } from 'next'
import Link from '@/components/AppLink'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import RelatedGuides from '@/components/RelatedGuides'
import { getRelatedGuides } from '@/lib/related-guides-data'
import { RELEASE_CURRENT } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import LastUpdated from '@/components/LastUpdated'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const pageTitle = `How to Get a Free Salesforce Certification (${RELEASE_CURRENT})`
const pageDescription = `Find ways to earn Salesforce certification exams for free through event vouchers, Trailhead promotions, and employer sponsorship.`
export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: {
    canonical: `${siteUrl}/salesforce-free-certification`,
    languages: { 'en-US': `${siteUrl}/salesforce-free-certification`, 'x-default': `${siteUrl}/salesforce-free-certification` },
  },
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
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'How to Get a Free Salesforce Certification', url: '/salesforce-free-certification' },
]

const faqItems = [
  {
    question: 'Can I get a Salesforce certification for free?',
    answer: 'Sometimes. Salesforce has offered free exam vouchers at events such as Dreamforce and World Tour. These offers have included associate-level exams that normally cost $75, such as Platform Foundations and MuleSoft Integration Foundations. AI Associate retired in February 2026. Employees of Salesforce consulting partners may also receive exam fee support from their employer.',
  },
  {
    question: 'Does Salesforce offer free certifications through Trailhead?',
    answer: 'Yes. Trailhead modules, trails, superbadges, and other learning content are free. They are not Salesforce certifications, which require a separate proctored exam booked through Trailhead Academy. Salesforce sometimes runs limited-time promotions that award an exam voucher for completing a Trailhead trail.',
  },
  {
    question: 'What is the cheapest Salesforce certification?',
    answer: 'The associate-level exams cost $75 each, the lowest standard fee in the Salesforce portfolio. Current options include Platform Foundations and MuleSoft Integration Foundations; AI Associate retired in February 2026. These exams offer a lower-cost entry point for beginners. Platform Foundations is a common first certification.',
  },
  {
    question: 'Can my employer pay for my Salesforce certification?',
    answer: 'Some employers cover Salesforce exam fees, especially consulting partners whose partner tier depends on employee certifications. Other employers may reimburse exam fees through a learning and development budget. Ask your manager or HR team before paying yourself.',
  },
  {
    question: 'Are Trailhead Superbadges the same as certifications?',
    answer: 'No. A Trailhead Superbadge and a Salesforce certification are different credentials. Superbadges are awarded for completing hands-on challenges and appear on your Trailhead profile, but they are not formal certifications. You earn a certification by passing a proctored exam booked through Trailhead Academy and delivered via Pearson VUE. Employers can check it on a separate public credential page. Both can be useful, though certifications may carry more weight in job applications.',
  },
]

export default function SalesforceFreeCertificationPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/salesforce-free-certification" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />

      <div data-lcp-header className="mb-10">
        <div className="inline-flex items-center gap-2 bg-salesforce-blue/10 text-salesforce-dark text-sm font-semibold px-3 py-1 rounded-full mb-4">

      <ContentPageAuthor />
          <span>Cost Guide</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          How to Get a Free Salesforce Certification ({RELEASE_CURRENT})
        </h1>
        <LastUpdated />
        <p className="text-lg text-gray-600">
          Find ways to earn a Salesforce certification for free, plus lower-cost options when no free exam voucher is available.
        </p>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-8">
        <h2 className="text-base font-bold text-amber-900 mb-1">Honest expectation</h2>
        <p className="text-sm text-amber-800">Free certification exams are offered through limited-time promotions, not year-round. When no free voucher is available, the $75 associate-level exams are the lowest-cost option. This guide covers free and discounted routes.</p>
      </div>

      <div className="space-y-6 mb-10">
        {[
          {
            title: 'Route 1: Salesforce Events (Most Reliable Free Opportunity)',
            badge: 'Free, periodic',
            badgeColor: 'bg-green-100 text-green-800',
            content: 'Salesforce has offered free associate-level exam vouchers at major events. Dreamforce in San Francisco, held in September, is one opportunity; the company has offered Platform Foundations exams to registered attendees. World Tour events have also run offers for attendees. Announcements may appear 4–8 weeks before an event on the Salesforce blog and Trailhead social channels. Follow @Trailhead and @Salesforce for updates.',
          },
          {
            title: 'Route 2: Employer Sponsorship (Most Common Free Route)',
            badge: 'Free, if eligible',
            badgeColor: 'bg-green-100 text-green-800',
            content: 'If you work for or are joining a Salesforce consulting partner or ISV, your employer may pay for your exam. Partner companies have a financial reason to support employee certifications because they count toward partner tier requirements. Large system integrators such as Accenture, Deloitte, Capgemini, and Wipro, as well as smaller Salesforce partners, may have learning budgets for exams. Ask your manager or HR team before paying yourself.',
          },
          {
            title: 'Route 3: Trailhead Promotional Campaigns (Periodic)',
            badge: 'Free, time-limited',
            badgeColor: 'bg-blue-100 text-blue-800',
            content: 'Salesforce has run campaigns that award a free exam voucher after you complete a specific Trailhead trail or Superbadge challenge. These offers are temporary, often running for 30–90 days around a product launch or milestone. To find them, set Google Alerts for "Salesforce free certification" and "Trailhead exam voucher," follow Salesforce Trailhead, Salesforce Admins, and Salesforce Developers, and join Trailblazer Community groups.',
          },
          {
            title: 'Route 4: $75 Associate Certifications (Lowest Cost Entry)',
            badge: 'Lowest paid cost',
            badgeColor: 'bg-purple-100 text-purple-800',
            content: 'When no free exam is available, associate-level exams cost $75 each. Options listed here include AI Associate, Platform Foundations, and MuleSoft Integration Foundations. AI Associate retired in February 2026 and can no longer be booked. Platform Foundations gives beginners a broad Salesforce overview, while MuleSoft Integration Foundations covers APIs and integration concepts. A $75 exam can be a low-cost way to start learning Salesforce.',
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
        <h2 className="text-xl font-bold text-gray-900 mb-4">Trailhead vs Certifications: What’s Free?</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100">
                <th scope="col" className="text-left py-2 pr-4 text-gray-600 font-medium">Credential</th>
                <th scope="col" className="text-left py-2 pr-4 text-gray-600 font-medium">Cost</th>
                <th scope="col" className="text-left py-2 text-gray-600 font-medium">Recognised by employers?</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {[
                { cred: 'Trailhead Modules & Trails', cost: 'Free', rec: 'Useful context, not a primary credential' },
                { cred: 'Trailhead Superbadges', cost: 'Free', rec: 'Moderately, shows hands-on skills' },
                { cred: 'Trailhead Ranger Rank', cost: 'Free', rec: 'Mildly, shows platform engagement' },
                { cred: 'Associate Certifications (AI Associate, Platform Foundations)', cost: '$75', rec: 'Yes, formal credential, publicly verifiable' },
                { cred: 'Professional Certifications (ADM-201, PD1, etc.)', cost: '$200', rec: 'Strongly, primary hiring criterion' },
                { cred: 'Architect Certifications', cost: '$400', rec: 'Strongly, premium career credential' },
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
        <h2 className="text-2xl font-bold mb-2">Start with Platform Foundations: $75</h2>
        <p className="text-white mb-6">Start with a lower-cost exam that does not require prior Salesforce experience. Free practice questions are available.</p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/certifications/ai-associate#practice-questions" className="inline-flex items-center px-5 py-3 bg-white text-salesforce-blue rounded-lg font-semibold hover:bg-blue-50 transition-colors text-sm">
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
