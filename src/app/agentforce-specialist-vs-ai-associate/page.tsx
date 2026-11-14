import type { Metadata } from 'next'
import Link from '@/components/AppLink'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import CredentialStatusNotice from '@/components/CredentialStatusNotice'
import LastUpdated from '@/components/LastUpdated'

const title = 'Agentforce Specialist vs AI Associate (Retired)'
const metadataTitle = 'Agentforce Specialist vs AI Associate (Retired) Guide'
const description = 'Compare Agentforce Specialist with retired AI Associate and find current guidance for a Salesforce AI learning path.'
const path = '/agentforce-specialist-vs-ai-associate'
const url = `https://www.trailblazeprep.com${path}`
const faqItems = [{'question': 'Can I still take AI Associate?', 'answer': 'Salesforce retired AI Associate in February 2026. Check the issuer retirement notice and current learning catalog.'}, {'question': 'Is AI Associate a current prerequisite?', 'answer': 'Do not plan to earn a retired credential as a prerequisite. Check the current guide for the credential you intend to take.'}]

export const metadata: Metadata = {
  title: { absolute: metadataTitle }, description, alternates: {
    canonical: url,
    languages: { 'en-US': url, 'x-default': url },
  },
  openGraph: { title: metadataTitle, description, url, type: 'article' },
  twitter: { card: 'summary_large_image', title: metadataTitle, description },
}

export default function ComparisonPage() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12 text-gray-700 leading-relaxed">
      <ContentPageSchemas headline={title} description={description} path={path} faqItems={faqItems}
        breadcrumbItems={[{ name: 'Home', url: '/' }, { name: title, url: path }]} />
      <header data-lcp-header className="mb-8"><h1 className="text-3xl font-bold text-gray-900">{title}</h1>
        <LastUpdated /></header>
      <CredentialStatusNotice slug="ai-associate" />
      <section className="mt-8 space-y-5">
        <h2 className="text-2xl font-bold">Compare learning goals</h2>
        <p>Salesforce retired AI Associate in February 2026. It is no longer an exam to take before Agentforce Specialist. Older advice to earn both credentials or compare their booking fees is now outdated.</p>
        <p>AI Associate covered introductory AI concepts. You can still study topics such as predictive and generative use cases, data quality, consent, bias, and human oversight.</p>
        <p>Agentforce Specialist resources focus on using AI and agent features in Salesforce. Check the current exam objectives to see if they fit your role, then practice configuring and evaluating those features.</p>
        <p>Salesforce directs AI Associate learners to Agentblazer Status. This learning program is different from a certification exam. Check the current credential catalog and exam guide before choosing your next step.</p>
        <p>For practice, start with a customer-support workflow. Identify its AI risks and data permissions, then work through agent setup, tools, testing, and escalation. These related skills need different kinds of practice.</p>
      </section>
      <section className="mt-8 space-y-4">
        <h2 className="text-2xl font-bold">Questions about retirement</h2>
        {faqItems.map(item => <div key={item.question}><h3 className="font-semibold">{item.question}</h3><p>{item.answer}</p></div>)}
        <p><a className="text-salesforce-dark underline" href="https://trailhead.salesforce.com/en/credentials/aiassociate" target="_blank" rel="nofollow noopener noreferrer">Salesforce AI Associate retirement notice</a></p>
        <p><Link className="text-salesforce-dark underline" href="/certifications/agentforce-specialist">Explore Agentforce Specialist resources</Link></p>
        <p><Link className="text-salesforce-dark underline" href="/certifications/ai-associate">View the historical AI fundamentals guide</Link></p>
      </section>
    </article>
  )
}
