import type { Metadata } from 'next'
import Link from 'next/link'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import CredentialStatusNotice from '@/components/CredentialStatusNotice'

const title = 'Platform Foundations vs AI Associate (Retired)'
const description = 'Platform Foundations and retired AI Associate cover different learning goals. Compare platform basics with historical AI concepts and current learning options.'
const path = '/platform-foundations-vs-ai-associate'
const url = `https://www.trailblazeprep.com${path}`
const faqItems = [{'question': 'Can I still take AI Associate?', 'answer': 'Salesforce retired AI Associate in February 2026. Check the issuer retirement notice and current learning catalog.'}, {'question': 'Is AI Associate a current prerequisite?', 'answer': 'Do not plan to earn a retired credential as a prerequisite. Check the current guide for the credential you intend to take.'}]

export const metadata: Metadata = {
  title: { absolute: title }, description, alternates: { canonical: url },
  openGraph: { title, description, url, type: 'article' },
  twitter: { card: 'summary_large_image', title, description },
}

export default function ComparisonPage() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12 text-gray-700 leading-relaxed">
      <ContentPageSchemas headline={title} description={description} path={path} faqItems={faqItems}
        breadcrumbItems={[{ name: 'Home', url: '/' }, { name: title, url: path }]} />
      <header data-lcp-header className="mb-8"><h1 className="text-3xl font-bold text-gray-900">{title}</h1></header>
      <CredentialStatusNotice slug="ai-associate" />
      <section className="mt-8 space-y-5">
        <h2 className="text-2xl font-bold">Compare learning goals</h2>
        <p>AI Associate retired in February 2026. It is not a current alternative exam to Platform Foundations. Treat older two-exam recommendations and price comparisons as historical information.</p>
        <p>Platform Foundations learning introduces Salesforce platform concepts. If your goal is to understand how the platform supports business processes. Start with the current issuer objectives and identify the features and terminology you need to learn.</p>
        <p>Historical AI Associate materials can help with introductory AI reasoning: prediction versus generation, responsible use, data quality, and human oversight. Studying those concepts does not mean a retired credential is available to book.</p>
        <p>Salesforce directs AI Associate learners to Agentblazer Status for current AI and Agentforce learning. A learning program, a platform credential, and a specialist exam serve different purposes; choose based on your work rather than an assumed certification ladder.</p>
        <p>For a practical exercise, describe how a sales or support team uses records, permissions, and automation. Then identify where AI could help and which data, review, and escalation safeguards it would need. Platform understanding gives context for evaluating the AI use case.</p>
      </section>
      <section className="mt-8 space-y-4">
        <h2 className="text-2xl font-bold">Questions about retirement</h2>
        {faqItems.map(item => <div key={item.question}><h3 className="font-semibold">{item.question}</h3><p>{item.answer}</p></div>)}
        <p><a className="text-salesforce-dark underline" href="https://trailhead.salesforce.com/en/credentials/aiassociate">Salesforce AI Associate retirement notice</a></p>
        <p><Link className="text-salesforce-dark underline" href="/certifications/platform-foundations">Explore Platform Foundations resources</Link></p>
        <p><Link className="text-salesforce-dark underline" href="/ai-associate-study-guide">Historical AI fundamentals guide</Link></p>
      </section>
    </article>
  )
}
