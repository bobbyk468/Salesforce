import type { Metadata } from 'next'
import Link from 'next/link'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const pageTitle = `Which Salesforce Certification Should I Get First? (${RELEASE_CURRENT})`
const pageDescription = `Which Salesforce certification to take first in 2026: recommendations by background and career goal, with study time and cost for each path.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/which-salesforce-certification-first` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/which-salesforce-certification-first`,
    images: [{ url: `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`, alt: pageTitle }],
  },
  keywords: `which salesforce certification first, salesforce certification for beginners, first salesforce cert 2026, best salesforce certification to start with`,
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Which Salesforce Certification First?', url: '/which-salesforce-certification-first' },
]

const faqItems = [
  {
    question: 'What is the most popular first Salesforce certification?',
    answer: 'The Salesforce Administrator (ADM-201) is the most popular first Salesforce certification. It is the foundational professional credential that opens the most career paths — admin roles, consultant roles, and BA roles all commonly require or prefer it. For complete beginners who want the lowest-cost entry point, the AI Associate ($75) has become a popular starting credential before committing to the full Administrator study programme.',
  },
  {
    question: 'Can I get a Salesforce certification with no experience?',
    answer: 'Yes — the three associate-level certifications ($75 each) are designed for beginners with no prior experience: AI Associate, Salesforce Platform Foundations, and MuleSoft Integration Foundations. The AI Associate is the most widely recommended beginner certification. The Administrator certification ($200) also accepts candidates with no formal Salesforce work experience, though it requires 3–4 months of dedicated study including hands-on practice in a sandbox.',
  },
  {
    question: 'Is the Salesforce Administrator certification the best first cert?',
    answer: 'Administrator is the best first certification for most people pursuing a full Salesforce career. It is the most recognised entry-level professional credential, required or preferred for admin, junior consultant, BA, and CRM analyst roles. The only scenario where Administrator is not the best first cert: if you are unsure about committing to Salesforce and want a low-cost preview — in which case AI Associate ($75) is a better starting point.',
  },
  {
    question: 'Should a developer start with Administrator or Platform Developer I?',
    answer: 'Developers with a software engineering background should still start with Administrator (ADM-201). It builds the declarative Salesforce knowledge that underpins good Apex development — understanding the platform deeply before coding on it. Platform Developer I (PD1) is significantly harder without Administrator-level platform knowledge. Most Salesforce developers recommend Admin → PD1 as the standard developer entry path, even for experienced software engineers.',
  },
  {
    question: 'How long does it take to get the first Salesforce certification?',
    answer: 'For AI Associate ($75): 2–4 weeks of part-time Trailhead study. For Administrator ($200): 2–4 months of part-time study (40–80 hours) with hands-on practice. For Platform Developer I ($200): 3–5 months for developers with programming experience. The timeline depends heavily on your starting knowledge. Complete beginners to Salesforce need more time than professionals who already use Salesforce daily at work.',
  },
]

export default function WhichSalesforceCertificationFirstPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/which-salesforce-certification-first" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />

      <div data-lcp-header className="mb-10">
        <div className="inline-flex items-center gap-2 bg-salesforce-blue/10 text-salesforce-dark text-sm font-semibold px-3 py-1 rounded-full mb-4">
          <span>Beginner Guide</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          Which Salesforce Certification Should I Get First? ({RELEASE_CURRENT})
        </h1>
        <p className="text-lg text-gray-600">
          The right first certification depends on your background and career goal. Here is a clear, practical guide to choosing the best starting point — no fluff.
        </p>
      </div>

      <div className="bg-salesforce-blue/5 border border-salesforce-blue/20 rounded-xl p-5 mb-8">
        <h2 className="text-base font-bold text-gray-900 mb-1">The short answer</h2>
        <p className="text-sm text-gray-700">For most people: <strong>Start with AI Associate ($75)</strong> to confirm Salesforce is right for you, then pursue <strong>Administrator ($200)</strong> as your primary professional credential. If you are already certain about Salesforce, skip AI Associate and go straight to Administrator.</p>
      </div>

      <div className="space-y-5 mb-10">
        {[
          {
            role: 'I want to be a Salesforce Admin',
            badge: 'bg-blue-100 text-blue-800',
            first: 'Salesforce Administrator (ADM-201)',
            fee: '$200',
            time: '2–4 months',
            why: 'Administrator is the foundational credential for every admin role. It opens doors to junior admin, CRM analyst, and business analyst positions. Everything in Salesforce admin work connects back to this certification.',
            next: 'Advanced Administrator, then specialist certs (CPQ, Field Service, Experience Cloud)',
            href: '/adm-201-study-guide',
          },
          {
            role: 'I want to be a Salesforce Developer',
            badge: 'bg-green-100 text-green-800',
            first: 'Salesforce Administrator (ADM-201)',
            fee: '$200',
            time: '2–4 months',
            why: 'Even for developers, Administrator comes first. Understanding declarative platform capabilities makes you a much better Apex developer. Platform Developer I is significantly easier after building strong admin knowledge.',
            next: 'Platform Developer I, then Platform Developer II',
            href: '/adm-201-study-guide',
          },
          {
            role: 'I want to be a Salesforce Consultant',
            badge: 'bg-purple-100 text-purple-800',
            first: 'Salesforce Administrator (ADM-201)',
            fee: '$200',
            time: '2–4 months',
            why: 'Consultant roles require deep platform knowledge starting with administration. Administrator certification is the non-negotiable entry point. Specialist certs (Sales Cloud, Service Cloud, CPQ) follow after.',
            next: 'Sales Cloud Consultant or Service Cloud Consultant, based on specialisation',
            href: '/adm-201-study-guide',
          },
          {
            role: 'I want to test the waters (not sure yet)',
            badge: 'bg-amber-100 text-amber-800',
            first: 'AI Associate',
            fee: '$75',
            time: '2–4 weeks',
            why: 'AI Associate is the lowest-cost, lowest-risk entry point. It validates that Salesforce interests you and gives you a credential while deciding your path. No platform experience required.',
            next: 'Administrator (ADM-201) after confirming Salesforce is your direction',
            href: '/ai-associate-study-guide',
          },
          {
            role: 'I work in marketing (Salesforce context)',
            badge: 'bg-pink-100 text-pink-800',
            first: 'Marketing Cloud Email Specialist',
            fee: '$200',
            time: '4–8 weeks (with MC experience)',
            why: 'For professionals already working in Marketing Cloud Engagement, Email Specialist is the most accessible marketing-track cert. For B2B marketers using Pardot/Account Engagement, Pardot Specialist is the equivalent entry point.',
            next: 'Marketing Cloud Consultant or Pardot Consultant',
            href: '/email-specialist-study-guide',
          },
        ].map((path) => (
          <div key={path.role} className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <div className="flex items-start justify-between gap-3 mb-3">
              <h2 className="text-lg font-bold text-gray-900">{path.role}</h2>
              <span className={`text-xs font-semibold px-2 py-0.5 rounded-full flex-shrink-0 ${path.badge}`}>{path.fee}</span>
            </div>
            <div className="mb-3">
              <p className="text-sm font-semibold text-salesforce-blue mb-1">Start with: {path.first}</p>
              <p className="text-xs text-gray-500 mb-2">Study time: {path.time}</p>
              <p className="text-sm text-gray-700">{path.why}</p>
            </div>
            <div className="flex items-center justify-between gap-3">
              <p className="text-xs text-gray-500"><strong>Then:</strong> {path.next}</p>
              <Link href={path.href} className="text-xs font-semibold text-salesforce-blue hover:underline flex-shrink-0">Study Guide →</Link>
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
                <th scope="col" className="text-left py-2 pr-4 text-gray-500 font-medium">Certification</th>
                <th scope="col" className="text-left py-2 pr-4 text-gray-500 font-medium">Fee</th>
                <th scope="col" className="text-left py-2 text-gray-500 font-medium">Best for</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {[
                { cert: 'AI Associate', fee: '$75', for: 'Anyone — universal entry point, no experience needed' },
                { cert: 'Platform Foundations', fee: '$75', for: 'Beginners building toward Administrator credential' },
                { cert: 'MuleSoft Integration Foundations', fee: '$75', for: 'Integration and API beginners' },
                { cert: 'Salesforce Administrator (ADM-201)', fee: '$200', for: 'Admin, consultant, BA career paths' },
                { cert: 'Marketing Cloud Email Specialist', fee: '$200', for: 'Marketing professionals using MC Engagement' },
                { cert: 'Pardot Specialist', fee: '$200', for: 'B2B marketers using Account Engagement (Pardot)' },
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
          <li><Link href="/is-salesforce-certification-worth-it" className="text-sm text-salesforce-dark hover:underline font-medium">→ Is Salesforce certification worth it? — honest analysis</Link></li>
          <li><Link href="/salesforce-free-certification" className="text-sm text-salesforce-dark hover:underline font-medium">→ How to get a free Salesforce certification</Link></li>
        </ul>
      </div>


      <div className="bg-salesforce-blue rounded-xl p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-2">Start Free Practice Questions</h2>
        <p className="text-blue-100 mb-6">Free practice questions for every Salesforce certification — no signup required.</p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/certifications/ai-associate" className="inline-flex items-center px-5 py-3 bg-white text-salesforce-blue rounded-lg font-semibold hover:bg-blue-50 transition-colors text-sm">
            AI Associate Practice
          </Link>
          <Link href="/certifications/administrator" className="inline-flex items-center px-5 py-3 border border-white/40 text-white rounded-lg font-semibold hover:bg-white/10 transition-colors text-sm">
            Administrator Practice
          </Link>
        </div>
      </div>
    </div>
  )
}
