import type { Metadata } from 'next'
import Link from 'next/link'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import CredentialStatusNotice from '@/components/CredentialStatusNotice'

const title = 'Agentforce Specialist vs AI Associate (Retired)'
const metadataTitle = 'Agentforce Specialist vs AI Associate (Retired) Guide'
const description = 'Compare Agentforce Specialist with retired AI Associate, their learning goals, and current guidance for a Salesforce AI path.'
const path = '/agentforce-specialist-vs-ai-associate'
const url = `https://www.trailblazeprep.com${path}`
const faqItems = [{'question': 'Can I still take AI Associate?', 'answer': 'Salesforce retired AI Associate in February 2026. Check the issuer retirement notice and current learning catalog.'}, {'question': 'Is AI Associate a current prerequisite?', 'answer': 'Do not plan to earn a retired credential as a prerequisite. Check the current guide for the credential you intend to take.'}]

export const metadata: Metadata = {
  title: { absolute: metadataTitle }, description, alternates: { canonical: url },
  openGraph: { title: metadataTitle, description, url, type: 'article' },
  twitter: { card: 'summary_large_image', title: metadataTitle, description },
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
        <p>AI Associate retired in February 2026. It is no longer an exam to take before Agentforce Specialist. Older comparisons that recommend earning both credentials or quote an AI Associate booking fee are historical advice.</p>
        <p>AI Associate focused on introductory AI concepts. Keep those concepts in your learning plan: distinguish predictive from generative use cases, identify data-quality risks, and consider consent, bias, and human oversight.</p>
        <p>Agentforce Specialist resources focus on applying AI and agent capabilities in Salesforce. Review the current issuer objectives to decide whether this path fits your role, and practice configuring and evaluating the features rather than assuming conceptual AI knowledge is enough.</p>
        <p>Salesforce points AI Associate learners toward Agentblazer Status. That learning program is not interchangeable with a certification exam. Check the current credential catalog and exam guide for the path you actually intend to pursue.</p>
        <p>For a practical comparison, choose a customer-support workflow. First explain its AI risks and necessary data permissions. Then work through the agent configuration, tools, testing, and escalation behavior needed to implement it. These are related skills, but they require different kinds of practice.</p>
      </section>
      <section className="mt-8 space-y-4">
        <h2 className="text-2xl font-bold">Questions about retirement</h2>
        {faqItems.map(item => <div key={item.question}><h3 className="font-semibold">{item.question}</h3><p>{item.answer}</p></div>)}
        <p><a className="text-salesforce-dark underline" href="https://trailhead.salesforce.com/en/credentials/aiassociate">Salesforce AI Associate retirement notice</a></p>
        <p><Link className="text-salesforce-dark underline" href="/certifications/agentforce-specialist">Explore Agentforce Specialist resources</Link></p>
        <p><Link className="text-salesforce-dark underline" href="/ai-associate-study-guide">Historical AI fundamentals guide</Link></p>
      </section>
    </article>
  )
}
