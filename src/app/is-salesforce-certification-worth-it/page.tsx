import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import { getWebPageJsonLd, getBreadcrumbListJsonLd, getArticleJsonLd, getFaqPageJsonLd } from '@/lib/schema-data'
import { RELEASE_CURRENT } from '@/lib/release-data'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const pageTitle = `Is Salesforce Certification Worth It? (${RELEASE_CURRENT})`
const pageDescription = `Is Salesforce certification worth it in 2026? Honest breakdown of ROI, salary increases, job market demand, time investment, and who should (and shouldn&apos;t) get certified.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/is-salesforce-certification-worth-it` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/is-salesforce-certification-worth-it`,
    images: [{ url: `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`, alt: pageTitle }],
  },
  keywords: `is salesforce certification worth it, salesforce certification ROI, salesforce certification salary increase, salesforce certification value 2026`,
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Is Salesforce Certification Worth It?', url: '/is-salesforce-certification-worth-it' },
]

const faqItems = [
  {
    question: 'Does Salesforce certification increase salary?',
    answer: 'Yes — consistently. Salesforce&apos;s own research and third-party salary surveys show certified professionals earn 20–30% more than non-certified peers in equivalent roles. Entry-level ADM-201 certified admins earn $60,000–$80,000 vs $45,000–$60,000 without certification. Senior developers and architects with multiple certifications earn $130,000–$180,000+. The ROI on a $200 exam fee against a $15,000–$30,000 salary increase makes certification one of the highest-return professional investments available.',
  },
  {
    question: 'How many Salesforce certifications do you need?',
    answer: 'For most career stages, 2–4 targeted certifications deliver the highest ROI. One primary certification (ADM-201, PD1, or Sales Cloud Consultant) opens the door. A second complementary certification (e.g., ADM-201 + App Builder, or PD1 + Service Cloud Consultant) significantly increases value. Beyond 4–5 certifications, diminishing returns set in — employers value breadth and depth of real project experience more than certification quantity.',
  },
  {
    question: 'How long does it take to get Salesforce certified?',
    answer: 'ADM-201 (the most common starting point): 8–12 weeks for complete beginners, 4–6 weeks with prior CRM experience. Platform Developer I: 12–16 weeks with programming experience. Consultant certifications (Sales Cloud, Service Cloud): 8–12 weeks after ADM-201. The investment is real — but so is the payoff. Most candidates recoup their study time investment within months of a salary increase or new job offer.',
  },
  {
    question: 'Is Salesforce certification hard?',
    answer: 'Difficulty varies by certification and background. ADM-201 is achievable for motivated beginners in 8–12 weeks without prior tech experience. PD1 and consultant certifications require deeper knowledge and scenario-based thinking. Architect certifications (Integration Architect, Data Architect) require 2–4 years of project experience. The CTA Board Review is considered one of the most rigorous certification processes in enterprise software. Most people who commit 10–15 hours per week and use practice questions pass on their first or second attempt.',
  },
  {
    question: 'Is Salesforce certification worth it for career changers?',
    answer: 'Yes — Salesforce certifications are one of the most effective tools for career changers entering tech. Unlike software engineering roles that require computer science degrees or years of coding experience, Salesforce Administration (ADM-201) is accessible to motivated candidates from any background. Former teachers, healthcare workers, accountants, and salespeople successfully transition into Salesforce roles. The $200 exam fee and 8–12 weeks of study is a low-cost, low-risk path into a $70,000–$100,000+ career.',
  },
]

export default function IsSalesforceCertificationWorthItPage() {
  const webPageJsonLd = getWebPageJsonLd({ name: pageTitle, description: pageDescription, path: '/is-salesforce-certification-worth-it', breadcrumbItems })
  const breadcrumbJsonLd = getBreadcrumbListJsonLd(breadcrumbItems)
  const articleJsonLd = getArticleJsonLd({ headline: pageTitle, description: pageDescription, path: '/is-salesforce-certification-worth-it' })
  const faqJsonLd = getFaqPageJsonLd(faqItems)

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <div data-lcp-header className="mb-10">
        <div className="inline-flex items-center gap-2 bg-salesforce-blue/10 text-salesforce-blue text-sm font-semibold px-3 py-1 rounded-full mb-4">
          <span>Career Advice</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          Is Salesforce Certification Worth It? ({RELEASE_CURRENT})
        </h1>
        <p className="text-lg text-gray-600">
          An honest answer — salary data, job market demand, real costs, and who should (and shouldn&apos;t) invest in Salesforce certification.
        </p>
      </div>

      {/* Quick verdict */}
      <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-10">
        <h2 className="text-lg font-bold text-green-900 mb-2">Short answer: Yes — for most people</h2>
        <p className="text-sm text-green-800">Salesforce certifications have one of the best ROI profiles of any professional credential. A $200 exam fee + 8–12 weeks of study can unlock a $15,000–$30,000 salary increase. Salesforce has 150,000+ customers globally and consistently reports more job openings than certified professionals to fill them.</p>
      </div>

      {/* ROI Numbers */}
      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">The Numbers: Salary Impact by Role</h2>
        <div className="space-y-4">
          {[
            { role: 'Salesforce Administrator (ADM-201)', without: '$45k–$60k', with: '$65k–$85k', increase: '+$20k avg' },
            { role: 'Salesforce Developer (PD1)', without: '$65k–$80k', with: '$80k–$110k', increase: '+$20–30k' },
            { role: 'Salesforce Consultant', without: '$60k–$75k', with: '$85k–$120k', increase: '+$25–40k' },
            { role: 'Salesforce Architect', without: '$90k–$110k', with: '$130k–$180k+', increase: '+$40–70k' },
          ].map((row) => (
            <div key={row.role} className="flex flex-wrap items-center justify-between gap-3 py-3 border-b border-gray-100 last:border-0">
              <span className="font-medium text-gray-900 text-sm">{row.role}</span>
              <div className="flex gap-4 text-sm">
                <span className="text-gray-400">Without: <span className="text-gray-700">{row.without}</span></span>
                <span className="text-gray-400">With cert: <span className="text-gray-900 font-medium">{row.with}</span></span>
                <span className="text-green-700 font-bold">{row.increase}</span>
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-400 mt-3">Salary ranges are US national averages ({RELEASE_CURRENT}). Varies by location, company size, and experience.</p>
      </div>

      {/* Who should get certified */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
          <h2 className="text-lg font-bold text-gray-900 mb-3">Certification IS worth it if&hellip;</h2>
          <ul className="space-y-2 text-sm text-gray-700">
            {[
              'You are entering or transitioning into the Salesforce ecosystem',
              'You are already using Salesforce daily and want a salary increase',
              'You want to move from an internal admin role to a consulting career',
              'Your employer reimburses exam fees (common at Salesforce partners)',
              'You want to advance from developer to architect track',
              'You are a career changer seeking a stable, high-demand tech career',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
          <h2 className="text-lg font-bold text-gray-900 mb-3">Certification is LESS worth it if&hellip;</h2>
          <ul className="space-y-2 text-sm text-gray-700">
            {[
              'You have 10+ years of Salesforce experience — project portfolio matters more',
              'You are stacking certifications without hands-on project experience',
              'You are pursuing 8+ certifications at once without career progression',
              'Your target role (e.g., CTA) values architecture experience over cert count',
              'You only need Salesforce for one narrow admin task at your company',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-red-400 font-bold flex-shrink-0 mt-0.5">✗</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Cost vs Benefit */}
      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Real Cost vs Real Benefit</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
          <div>
            <h3 className="font-semibold text-gray-900 mb-3 text-red-600">Costs</h3>
            <ul className="space-y-2 text-gray-700">
              <li>Exam fee: $75–$400 (most certs $200)</li>
              <li>Study time: 40–120 hours (8–12 weeks part-time)</li>
              <li>Retake fee: $100–$200 if you fail first attempt</li>
              <li>Maintenance: 3 Trailhead modules per release (free)</li>
              <li>Optional: study courses $50–$300</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-3 text-green-600">Benefits</h3>
            <ul className="space-y-2 text-gray-700">
              <li>Salary increase: $15,000–$30,000 for first cert</li>
              <li>New job opportunities opened immediately</li>
              <li>Salesforce partner status (for employers) requires cert counts</li>
              <li>Higher hourly rates for contractors/freelancers</li>
              <li>Trailhead profile boost — visible to recruiters</li>
            </ul>
          </div>
        </div>
        <div className="mt-4 p-4 bg-salesforce-blue/5 rounded-lg">
          <p className="text-sm text-gray-700"><strong>ROI example:</strong> ADM-201 costs $200 (exam) + ~60 hours of study. If it leads to a $15,000 salary increase, the ROI payback period is under 1 week of new salary. Even with failed attempts and a retake, the financial math strongly favours getting certified.</p>
        </div>
      </div>

      {/* Job market */}
      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Job Market Demand ({RELEASE_CURRENT})</h2>
        <div className="space-y-3 text-sm text-gray-700">
          <p>Salesforce has over <strong>150,000 customers globally</strong> and continues to grow — especially with Agentforce AI features driving new implementation waves in 2025–2026.</p>
          <p>The Salesforce ecosystem is projected to create <strong>9.3 million jobs</strong> by 2026 according to IDC research. Supply of certified professionals consistently lags demand, which keeps salaries elevated.</p>
          <p>Entry-level admin roles (ADM-201) are the most accessible entry point with the fastest time-to-hire. Developer and consultant roles have higher salaries but require more experience. Architect-level roles command premium compensation with 5–10 year wait lists at top firms.</p>
        </div>
      </div>

      {/* FAQ */}
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

      <div className="bg-salesforce-blue rounded-xl p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-2">Start Your Certification Journey</h2>
        <p className="text-blue-100 mb-6">Free practice questions for every Salesforce certification — no account required.</p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/certifications/administrator" className="inline-flex items-center px-5 py-3 bg-white text-salesforce-blue rounded-lg font-semibold hover:bg-blue-50 transition-colors text-sm">
            ADM-201 Practice <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <Link href="/certifications" className="inline-flex items-center px-5 py-3 border border-white/40 text-white rounded-lg font-semibold hover:bg-white/10 transition-colors text-sm">
            Browse All Certs
          </Link>
        </div>
      </div>
    </div>
  )
}
