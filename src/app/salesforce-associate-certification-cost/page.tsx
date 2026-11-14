import type { Metadata } from 'next'
import Link from '@/components/AppLink'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import RelatedGuides from '@/components/RelatedGuides'
import { getRelatedGuides } from '@/lib/related-guides-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import { RELEASE_CURRENT } from '@/lib/release-data'
import LastUpdated from '@/components/LastUpdated'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const pageTitle = `Salesforce Associate Certification Cost (${RELEASE_CURRENT})`
const pageDescription = `Compare Salesforce associate exam costs, formats, first credentials, and next steps after Platform Foundations.`
export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: {
    canonical: `${siteUrl}/salesforce-associate-certification-cost`,
    languages: { 'en-US': `${siteUrl}/salesforce-associate-certification-cost`, 'x-default': `${siteUrl}/salesforce-associate-certification-cost` },
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/salesforce-associate-certification-cost`,
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
  { name: 'Associate Certifications', url: '/certifications/role/associate' },
  { name: 'Salesforce Associate Certification Cost', url: '/salesforce-associate-certification-cost' },
]

const faqItems = [
  {
    question: 'How much does a Salesforce associate certification cost?',
    answer: 'Most Salesforce associate or foundations-level certifications cost about $75, making them the lowest-cost tier. Confirm the current price in Salesforce registration before you book.',
  },
  {
    question: 'Which Salesforce associate certification should I take first?',
    answer: 'Platform Foundations is a broad starting point for beginners. It covers CRM, platform basics, Flow, security, and app-building concepts. If you are focused on AI, compare current Agentforce options; AI Associate retired in February 2026.',
  },
  {
    question: 'What should I take after an associate certification?',
    answer: 'After Platform Foundations or an AI-focused associate credential, many candidates move on to Administrator (ADM-201), Platform App Builder, or a specialist certification related to their role.',
  },
]

const options = [
  { name: 'Platform Foundations', href: '/certifications/platform-foundations', cost: '$75 tier', bestFor: 'Beginners learning Salesforce basics before Administrator.' },
  { name: 'AI Associate', href: '/certifications/ai-associate', cost: '$75 tier when active', bestFor: 'Business users and analysts learning Salesforce AI concepts. Check the page for current retirement information.' },
  { name: 'Agentforce Specialist', href: '/certifications/agentforce-specialist', cost: '$200 tier', bestFor: 'Candidates moving from AI basics to Agentforce implementation.' },
]

const costFactors = [
  {
    heading: 'Exam fee is only part of the cost',
    body: 'Associate-level exams usually cost less than standard certifications. Also consider the cost of retakes, study materials, and the time spent preparing for an exam that may not fit your goal.',
  },
  {
    heading: 'Foundational does not always mean best for jobs',
    body: 'A foundations credential can teach beginners Salesforce terms and concepts. Administrator (ADM-201), App Builder, Developer I, and consultant certifications may carry more weight for jobs that ask for those skills.',
  },
  {
    heading: 'Check current availability before booking',
    body: 'Salesforce may retire or rename entry-level certifications as its products change. Check the official registration flow for current fees, exam formats, and availability.',
  },
]

const nextSteps = [
  'For an admin role, consider moving from Platform Foundations to Administrator (ADM-201).',
  'For AI or Agentforce work, compare available certifications before paying for an exam.',
  'If you already use Salesforce at work, a role-based certification may be more useful than another entry-level credential.',
  'If your budget is limited, choose the exam that best supports your next job application rather than choosing by price alone.',
]

export default function SalesforceAssociateCertificationCostPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/salesforce-associate-certification-cost" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />

      <header data-lcp-header className="mb-10">
        <p className="inline-flex rounded-full bg-salesforce-blue/10 px-3 py-1 text-sm font-medium text-salesforce-dark mb-4">Updated for {RELEASE_CURRENT}</p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Salesforce Associate Certification Cost</h1>
        <LastUpdated />
        <p className="text-lg text-gray-600">Associate-level credentials are a lower-cost way to start. Choose based on whether you want broad CRM fundamentals, AI knowledge, or a path toward ADM-201.</p>
      </header>

      <ContentPageAuthor />

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Associate Certification Options</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead><tr className="border-b-2 border-gray-200"><th className="text-left py-2 pr-4">Credential</th><th className="text-left py-2 pr-4">Typical Cost</th><th className="text-left py-2">Best For</th></tr></thead>
            <tbody className="divide-y divide-gray-100">
              {options.map((option) => (
                <tr key={option.href}>
                  <td className="py-3 pr-4 font-semibold"><Link href={option.href} className="text-salesforce-blue hover:underline">{option.name}</Link></td>
                  <td className="py-3 pr-4 text-gray-700">{option.cost}</td>
                  <td className="py-3 text-gray-700">{option.bestFor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="rounded-xl border border-salesforce-blue/20 bg-salesforce-blue/5 p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Recommended Path</h2>
        <p className="text-sm text-gray-700 mb-3">If you are working toward a job, think of an associate certification as one step in your path.</p>
        <p className="text-sm text-gray-700"><strong>A common path for beginners:</strong> Platform Foundations &rarr; Administrator (ADM-201) &rarr; App Builder or a consultant or specialist certification.</p>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">What the Associate Cost Really Means</h2>
        <div className="space-y-4 text-sm text-gray-700">
          {costFactors.map((item) => (
            <div key={item.heading}>
              <h3 className="font-semibold text-gray-900 mb-1">{item.heading}</h3>
              <p>{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-xl border border-amber-100 bg-amber-50/40 p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Best Next Step After an Associate Cert</h2>
        <ul className="space-y-2 text-sm text-gray-700 list-disc list-inside">
          {nextSteps.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="text-sm text-gray-700 mt-4">
          Weigh the lower fee against the credential's relevance to your career. A $75 certification can help, while a $200 role-based certification may be more useful in interviews if it matches your target job.
        </p>
      </section>

      <RelatedGuides links={getRelatedGuides('salesforce-associate-certification-cost')} />
    </div>
  )
}
