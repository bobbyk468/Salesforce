import type { Metadata } from 'next'
import Link from '@/components/AppLink'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import LastUpdated from '@/components/LastUpdated'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const pageTitle = `Which Salesforce Cert to Get First? (${RELEASE_CURRENT})`
const metadataTitle = 'Which Salesforce Certification Should You Get First?'
const pageDescription = `Choose your first Salesforce certification by background and career goal, with advice on study time, cost, and next steps.`
export const metadata: Metadata = {
  title: { absolute: metadataTitle },
  description: pageDescription,
  alternates: {
    canonical: `${siteUrl}/which-salesforce-certification-first`,
    languages: { 'en-US': `${siteUrl}/which-salesforce-certification-first`, 'x-default': `${siteUrl}/which-salesforce-certification-first` },
  },
  openGraph: {
    title: metadataTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/which-salesforce-certification-first`,
    images: [{ url: `${siteUrl}/og?t=${encodeURIComponent(metadataTitle)}`, width: 1200, height: 630, alt: metadataTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: metadataTitle,
    description: pageDescription,
    images: [{ url: `${siteUrl}/og?t=${encodeURIComponent(metadataTitle)}`, alt: metadataTitle }],
  },
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Salesforce Careers', url: '/certifications' },
  { name: 'Which Salesforce Certification First', url: '/which-salesforce-certification-first' },
]

const faqItems = [
  {
    question: 'What is the most popular first Salesforce certification?',
    answer: 'Salesforce Administrator (ADM-201) is the most common first certification. It is a core professional credential, and many admin, consultant, and business analyst roles require or prefer it. If you are new to Salesforce and want a lower-cost introduction, start with Platform Foundations ($75) before taking on the full Administrator study plan.',
  },
  {
    question: 'Can I get a Salesforce certification with no experience?',
    answer: 'Yes. The associate-level certifications cost $75 each and are designed for beginners. Salesforce Platform Foundations and MuleSoft Integration Foundations are available; AI Associate retired in February 2026 and can no longer be booked. Platform Foundations is a common first choice. You can also take Administrator ($200) without Salesforce work experience, but plan for 3–4 months of study and hands-on sandbox practice.',
  },
  {
    question: 'Is the Salesforce Administrator certification the best first cert?',
    answer: 'Administrator is a strong first certification for most people pursuing a Salesforce career. Many admin, junior consultant, business analyst, and CRM analyst roles require or prefer it. If you are unsure whether Salesforce is right for you, Platform Foundations ($75) offers a lower-cost introduction.',
  },
  {
    question: 'Should a developer start with Administrator or Platform Developer I?',
    answer: 'Developers with software engineering experience can still benefit from starting with Administrator (ADM-201). It teaches declarative Salesforce features and how the platform works before you write Apex. Platform Developer I (PD1) is harder without that platform knowledge. A common path is Administrator, then PD1.',
  },
  {
    question: 'How long does it take to get the first Salesforce certification?',
    answer: 'As a rough guide, allow 2–4 weeks of part-time Trailhead study for Platform Foundations ($75), 2–4 months (40–80 hours) for Administrator ($200), and 3–5 months for Platform Developer I ($200) if you already know how to program. Your starting knowledge matters: people new to Salesforce usually need more time than those who use it at work.',
  },
]

export default function WhichSalesforceCertificationFirstPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/which-salesforce-certification-first" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />

      <div data-lcp-header className="mb-10">
        <div className="inline-flex items-center gap-2 bg-salesforce-blue/10 text-salesforce-dark text-sm font-semibold px-3 py-1 rounded-full mb-4">

      <ContentPageAuthor />
          <span>Beginner Guide</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          Which Salesforce Certification Should I Get First? ({RELEASE_CURRENT})
        </h1>
        <LastUpdated />
        <p className="text-lg text-gray-600">
          Choose a first certification based on your experience and career goal. Use these paths to compare where to start and what to take next.
        </p>
      </div>

      <div className="bg-salesforce-blue/5 border border-salesforce-blue/20 rounded-xl p-5 mb-8">
        <h2 className="text-base font-bold text-gray-900 mb-1">The short answer</h2>
        <p className="text-sm text-gray-700">If you are new to Salesforce, start with <strong>Platform Foundations ($75)</strong> to learn the basics. Then consider <strong>Administrator ($200)</strong> as your main professional credential. If you already know Salesforce is the right path, you can start with Administrator.</p>
      </div>

      <div className="space-y-5 mb-10">
        {[
          {
            role: 'I want to be a Salesforce Admin',
            badge: 'bg-blue-100 text-blue-800',
            first: 'Salesforce Administrator (ADM-201)',
            fee: '$200',
            time: '2–4 months',
            why: 'Administrator covers core skills for admin work and can support applications for junior admin, CRM analyst, and business analyst roles. Many Salesforce admin tasks build on these skills.',
            next: 'Advanced Administrator, then specialist certs (CPQ, Field Service, Experience Cloud)',
            href: '/certifications/administrator',
          },
          {
            role: 'I want to be a Salesforce Developer',
            badge: 'bg-green-100 text-green-800',
            first: 'Salesforce Administrator (ADM-201)',
            fee: '$200',
            time: '2–4 months',
            why: 'Administrator teaches declarative Salesforce features that developers also use. Learning the platform first can make it easier to prepare for Platform Developer I and Apex work.',
            next: 'Platform Developer I, then Platform Developer II',
            href: '/certifications/administrator',
          },
          {
            role: 'I want to be a Salesforce Consultant',
            badge: 'bg-purple-100 text-purple-800',
            first: 'Salesforce Administrator (ADM-201)',
            fee: '$200',
            time: '2–4 months',
            why: 'Consultants need a solid understanding of the platform and its administration tools. Start with Administrator, then pursue a specialist certification in an area such as Sales Cloud, Service Cloud, or CPQ.',
            next: 'Sales Cloud Consultant or Service Cloud Consultant, based on specialisation',
            href: '/certifications/administrator',
          },
          {
            role: 'I want to test the waters (not sure yet)',
            badge: 'bg-amber-100 text-amber-800',
            first: 'Platform Foundations',
            fee: '$75',
            time: '2–4 weeks',
            why: 'Platform Foundations is a lower-cost introduction that does not require prior platform experience. It can help you decide whether you want to continue with Salesforce.',
            next: 'Administrator (ADM-201) after confirming Salesforce is your direction',
            href: '/certifications/platform-foundations',
          },
          {
            role: 'I work in marketing (Salesforce context)',
            badge: 'bg-pink-100 text-pink-800',
            first: 'Marketing Cloud Email Specialist',
            fee: '$200',
            time: '4–8 weeks (with MC experience)',
            why: 'For people who use Marketing Cloud Engagement, Email Specialist is an accessible marketing-track option. B2B marketers who use Pardot, also called Account Engagement, can start with Pardot Specialist.',
            next: 'Marketing Cloud Consultant or Pardot Consultant',
            href: '/certifications/email-specialist',
          },
        ].map((path) => (
          <div key={path.role} className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <div className="flex items-start justify-between gap-3 mb-3">
              <h2 className="text-lg font-bold text-gray-900">{path.role}</h2>
              <span className={`text-xs font-semibold px-2 py-0.5 rounded-full flex-shrink-0 ${path.badge}`}>{path.fee}</span>
            </div>
            <div className="mb-3">
              <p className="text-sm font-semibold text-salesforce-blue mb-1">Start with: {path.first}</p>
              <p className="text-xs text-gray-600 mb-2">Study time: {path.time}</p>
              <p className="text-sm text-gray-700">{path.why}</p>
            </div>
            <div className="flex items-center justify-between gap-3">
              <p className="text-xs text-gray-600"><strong>Then:</strong> {path.next}</p>
              <Link href={path.href} className="py-1 text-xs font-semibold text-salesforce-blue hover:underline flex-shrink-0">Study Guide →</Link>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">All Entry-Level Salesforce Certifications</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100">
                <th scope="col" className="text-left py-2 pr-4 text-gray-600 font-medium">Certification</th>
                <th scope="col" className="text-left py-2 pr-4 text-gray-600 font-medium">Fee</th>
                <th scope="col" className="text-left py-2 text-gray-600 font-medium">Best for</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {[
                { cert: 'AI Associate (retired Feb 2026)', fee: '$75', for: 'Retired; listed for historical reference only' },
                { cert: 'Platform Foundations', fee: '$75', for: 'Beginners preparing for Administrator' },
                { cert: 'MuleSoft Integration Foundations', fee: '$75', for: 'Beginners learning about integration and APIs' },
                { cert: 'Salesforce Administrator (ADM-201)', fee: '$200', for: 'Admin, consultant, and business analyst careers' },
                { cert: 'Marketing Cloud Email Specialist', fee: '$200', for: 'Marketing professionals who use Marketing Cloud Engagement' },
                { cert: 'Pardot Specialist', fee: '$200', for: 'B2B marketers who use Account Engagement (Pardot)' },
              ].map((row) => (
                <tr key={row.cert}>
                  <td className="py-2 pr-4 text-gray-900 font-medium">{row.cert}</td>
                  <td className="py-2 pr-4 text-salesforce-blue font-semibold">{row.fee}</td>
                  <td className="py-2 text-gray-700">{row.for}</td>
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
      <div className="bg-gray-50 rounded-xl border border-gray-100 p-5 mb-8">
        <h2 className="text-base font-bold text-gray-900 mb-3">Compare Certifications</h2>
        <ul className="space-y-2">
          <li><Link href="/is-salesforce-certification-worth-it" className="text-sm text-salesforce-dark hover:underline font-medium">→ Is Salesforce certification worth it? An honest analysis</Link></li>
          <li><Link href="/salesforce-free-certification" className="text-sm text-salesforce-dark hover:underline font-medium">→ How to get a free Salesforce certification</Link></li>
        </ul>
      </div>


      <div className="bg-salesforce-blue rounded-xl p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-2">Start Free Practice Questions</h2>
        <p className="text-white mb-6">Try free practice questions for any Salesforce certification. No sign-up is required.</p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/certifications/platform-foundations" className="inline-flex items-center px-5 py-3 bg-white text-salesforce-blue rounded-lg font-semibold hover:bg-blue-50 transition-colors text-sm">
            Platform Foundations Practice
          </Link>
          <Link href="/certifications/administrator" className="inline-flex items-center px-5 py-3 border border-white/40 text-white rounded-lg font-semibold hover:bg-white/10 transition-colors text-sm">
            Administrator Practice
          </Link>
        </div>
      </div>
    </div>
  )
}
