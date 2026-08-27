import type { Metadata } from 'next'
import Link from 'next/link'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import RelatedGuides from '@/components/RelatedGuides'
import { getRelatedGuides } from '@/lib/related-guides-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import { RELEASE_CURRENT } from '@/lib/release-data'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const pageTitle = `Salesforce Associate Certification Cost (${RELEASE_CURRENT})`
const pageDescription = 'Salesforce associate certification cost, exam format, best first options, and what to take after Platform Foundations or AI Associate.'

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/salesforce-associate-certification-cost` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/salesforce-associate-certification-cost`,
    images: [{ url: `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`, width: 1200, height: 630, alt: pageTitle }],
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
    answer: 'Most Salesforce associate or foundations-level credentials are the lowest-cost Salesforce certification tier, commonly listed around $75. Always confirm the current price in the official Salesforce certification registration flow before booking.',
  },
  {
    question: 'Which Salesforce associate certification should I take first?',
    answer: 'Platform Foundations is the best broad starting point for most beginners because it covers CRM, platform basics, flow, security, and app-building concepts. AI-focused learners can compare AI Associate or Agentforce options depending on current Salesforce availability.',
  },
  {
    question: 'What should I take after an associate certification?',
    answer: 'Most candidates move from Platform Foundations or AI-focused associate credentials to Administrator (ADM-201), Platform App Builder, or a specialist track that matches their job role.',
  },
]

const options = [
  { name: 'Platform Foundations', href: '/certifications/platform-foundations', cost: '$75 tier', bestFor: 'Beginners who want broad Salesforce platform knowledge before ADM-201.' },
  { name: 'AI Associate', href: '/certifications/ai-associate', cost: '$75 tier when active', bestFor: 'Business users and analysts validating Salesforce AI concepts. Check current retirement guidance on the page.' },
  { name: 'Agentforce Specialist', href: '/certifications/agentforce-specialist', cost: '$200 tier', bestFor: 'Candidates moving from AI literacy into practical Agentforce implementation topics.' },
]

const costFactors = [
  {
    heading: 'Exam fee is only part of the cost',
    body: 'Associate-level credentials are usually cheaper than standard Salesforce certifications, but retakes, study time, practice resources, and the opportunity cost of choosing the wrong first exam matter more than the base fee.',
  },
  {
    heading: 'Foundational does not always mean best for jobs',
    body: 'A foundations credential can help beginners learn the vocabulary, but Administrator (ADM-201), App Builder, Developer I, and consultant certs usually carry stronger hiring signal for role-specific job postings.',
  },
  {
    heading: 'Check current availability before booking',
    body: 'Salesforce occasionally retires or renames entry-level credentials as the product portfolio changes. Use the official registration flow as the final source for current fee, delivery options, and exam availability.',
  },
]

const nextSteps = [
  'If you want an admin job, move from Platform Foundations to Administrator (ADM-201).',
  'If you want AI/Agentforce work, compare AI Associate with Agentforce Specialist before paying.',
  'If you already use Salesforce at work, a role-based certification may be a better ROI than another entry credential.',
  'If budget is tight, choose the first exam that directly supports your next job application, not the cheapest badge.',
]

export default function SalesforceAssociateCertificationCostPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/salesforce-associate-certification-cost" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />

      <header data-lcp-header className="mb-10">
        <p className="inline-flex rounded-full bg-salesforce-blue/10 px-3 py-1 text-sm font-medium text-salesforce-dark mb-4">Updated for {RELEASE_CURRENT}</p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Salesforce Associate Certification Cost</h1>
        <p className="text-lg text-gray-600">Associate-level Salesforce credentials are the lowest-cost way to start, but the right first choice depends on whether you want broad CRM fundamentals, AI literacy, or a path toward ADM-201.</p>
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
        <p className="text-sm text-gray-700 mb-3">If your goal is employability, treat associate certification as a stepping stone, not the finish line.</p>
        <p className="text-sm text-gray-700"><strong>Best path for most beginners:</strong> Platform Foundations &rarr; Administrator (ADM-201) &rarr; App Builder or a consultant/specialist track.</p>
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
          Compare the low entry fee against career signal. A $75 credential can be useful, but a $200 role-based credential may create more interview value if it matches your target job.
        </p>
      </section>

      <RelatedGuides links={getRelatedGuides('salesforce-associate-certification-cost')} />
    </div>
  )
}
