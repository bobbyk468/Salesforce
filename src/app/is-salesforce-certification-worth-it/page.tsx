import type { Metadata } from 'next'
import Link from '@/components/AppLink'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import RelatedGuides from '@/components/RelatedGuides'
import { getRelatedGuides } from '@/lib/related-guides-data'
import { RELEASE_CURRENT } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import LastUpdated from '@/components/LastUpdated'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const pageTitle = `Is Salesforce Certification Worth It? (${RELEASE_CURRENT})`
const pageDescription = `Is Salesforce certification worth it? ROI, salary, job demand, time investment. Who should (and shouldn't) get certified.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: {
    canonical: `${siteUrl}/is-salesforce-certification-worth-it`,
    languages: { 'en-US': `${siteUrl}/is-salesforce-certification-worth-it`, 'x-default': `${siteUrl}/is-salesforce-certification-worth-it` },
  },
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
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Is Salesforce Certification Worth It?', url: '/is-salesforce-certification-worth-it' },
]

const faqItems = [
  {
    question: 'Does Salesforce certification increase salary?',
    answer: 'Certification can support salary growth, though it does not guarantee a raise. Salesforce research and third-party surveys report that certified professionals earn 20–30% more than peers in similar roles. Entry-level ADM-201 certified admins earn $60,000–$80,000 vs $45,000–$60,000 without certification. Senior developers and architects with multiple certifications earn $130,000–$180,000+. Compare the $200 exam fee with a possible $15,000–$30,000 salary increase when considering the return.',
  },
  {
    question: 'How many Salesforce certifications do you need?',
    answer: 'For many people, 2–4 certifications chosen for a clear career goal are enough. Start with a credential for your role, such as ADM-201, PD1, or Sales Cloud Consultant. A complementary credential, such as ADM-201 + App Builder or PD1 + Service Cloud Consultant, can broaden your skills. After 4–5 certifications, hands-on project experience may matter more than adding another credential.',
  },
  {
    question: 'How long does it take to get Salesforce certified?',
    answer: 'Study time depends on your experience. A common estimate for ADM-201 is 8–12 weeks for beginners and 4–6 weeks for people with CRM experience. Platform Developer I may take 12–16 weeks if you already know programming. Consultant certifications such as Sales Cloud and Service Cloud may take 8–12 weeks after ADM-201. Your results will depend on your preparation and job opportunities.',
  },
  {
    question: 'Is Salesforce certification hard?',
    answer: 'Difficulty depends on the certification and what you already know. A beginner may prepare for ADM-201 in 8–12 weeks without prior tech experience. PD1 and consultant exams require deeper knowledge and scenario-based reasoning. Integration Architect and Data Architect typically call for 2–4 years of project experience. The CTA Board Review is one of the most demanding certification processes in enterprise software. Candidates who study 10–15 hours per week and use practice questions may pass on their first or second attempt.',
  },
  {
    question: 'Is Salesforce certification worth it for career changers?',
    answer: 'A certification can help career changers show what they have learned about Salesforce. ADM-201 does not require a computer science degree or years of coding experience, and people from fields such as teaching, healthcare, accounting, and sales have moved into Salesforce roles. The exam costs $200, and a typical study plan may take 8–12 weeks. A $70,000–$100,000+ career is possible, but a credential alone cannot guarantee a job or salary.',
  },
]

export default function IsSalesforceCertificationWorthItPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/is-salesforce-certification-worth-it" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />

      <div data-lcp-header className="mb-10">
        <div className="inline-flex items-center gap-2 bg-salesforce-blue/10 text-salesforce-dark text-sm font-semibold px-3 py-1 rounded-full mb-4">

      <ContentPageAuthor />
          <span>Career Advice</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          Is Salesforce Certification Worth It? ({RELEASE_CURRENT})
        </h1>
        <LastUpdated />
        <p className="text-lg text-gray-600">
          A practical look at the time and cost involved, the potential career benefits, and who may benefit most from certification.
        </p>
      </div>

      {/* Quick verdict */}
      <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-10">
        <h2 className="text-lg font-bold text-green-900 mb-2">Short answer: Yes, for most people</h2>
        <p className="text-sm text-green-800">A certification can help show employers what you know, but its value depends on your experience, target role, and ability to apply the skills. A $200 exam fee and 8–12 weeks of study may support a $15,000–$30,000 salary increase. Salesforce has 150,000+ customers globally and reports more job openings than certified professionals to fill them.</p>
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
                <span className="text-gray-600">Without: <span className="text-gray-700">{row.without}</span></span>
                <span className="text-gray-600">With cert: <span className="text-gray-900 font-medium">{row.with}</span></span>
                <span className="text-green-700 font-bold">{row.increase}</span>
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-600 mt-3">Salary ranges are US national averages ({RELEASE_CURRENT}). Varies by location, company size, and experience.</p>
      </div>

      {/* Who should get certified */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
          <h2 className="text-lg font-bold text-gray-900 mb-3">Certification IS worth it if&hellip;</h2>
          <ul className="space-y-2 text-sm text-gray-700">
            {[
              'You are entering the Salesforce ecosystem or changing careers',
              'You use Salesforce at work and want to demonstrate your skills',
              'You want to move from an internal admin role into consulting',
              'Your employer reimburses exam fees (common at Salesforce partners)',
              'You are moving from a developer role toward architecture',
              'You want to explore a career in a high-demand technology field',
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
              'You have 10+ years of Salesforce experience and need to strengthen your project portfolio',
              'You are adding certifications without gaining hands-on project experience',
              'You are pursuing 8+ certifications without a clear career progression plan',
              'Your target role (such as CTA) values architecture experience over certification count',
              'You only use Salesforce for one narrow task at your company',
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
              <li>Retake fee: $100–$200 after a failed first attempt</li>
              <li>Maintenance: 3 free Trailhead modules per release</li>
              <li>Optional study courses: $50–$300</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-3 text-green-700">Benefits</h3>
            <ul className="space-y-2 text-gray-700">
              <li>Potential salary increase: $15,000–$30,000 for a first certification</li>
              <li>Access to new job opportunities</li>
              <li>Certification counts support Salesforce partner status for employers</li>
              <li>Potential for higher hourly rates as a contractor or freelancer</li>
              <li>A stronger Trailhead profile that recruiters can view</li>
            </ul>
          </div>
        </div>
        <div className="mt-4 p-4 bg-salesforce-blue/5 rounded-lg">
          <p className="text-sm text-gray-700"><strong>ROI example:</strong> ADM-201 costs $200 (exam) and takes about 60 hours of study. If it leads to a $15,000 salary increase, the exam fee equals less than 1 week of that additional salary. Include study time and any retake in your own calculation.</p>
        </div>
      </div>

      {/* Job market */}
      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Job Market Demand ({RELEASE_CURRENT})</h2>
        <div className="space-y-3 text-sm text-gray-700">
          <p>Salesforce has over <strong>150,000 customers globally</strong>. Agentforce AI features are driving new implementation work in 2025–2026.</p>
          <p>IDC research projects that the Salesforce ecosystem will create <strong>9.3 million jobs</strong> by 2026. The number of certified professionals has not kept pace with demand, which supports higher salaries.</p>
          <p>ADM-201 can provide an entry point to admin roles. Developer and consultant roles tend to pay more and ask for more experience. Architect roles offer higher compensation, and some top firms have 5–10 year wait lists.</p>
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

      <RelatedGuides links={getRelatedGuides('is-salesforce-certification-worth-it')} />

      <div className="bg-salesforce-blue rounded-xl p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-2">Start Your Certification Journey</h2>
        <p className="text-white mb-6">Try free practice questions for Salesforce certifications without creating an account.</p>
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
