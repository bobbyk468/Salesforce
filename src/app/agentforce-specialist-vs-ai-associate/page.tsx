import type { Metadata } from 'next'
import Link from '@/components/AppLink'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import CredentialStatusNotice from '@/components/CredentialStatusNotice'
import LastUpdated from '@/components/LastUpdated'
import WhichFirstBlock from '@/components/WhichFirstBlock'

const title = 'Agentforce Specialist vs AI Associate (Retired)'
const metadataTitle = 'Agentforce Specialist vs AI Associate (Retired) Guide'
const description = 'Compare Agentforce Specialist with the retired AI Associate: learning goals, what retirement means, and the current AI path.'
const path = '/agentforce-specialist-vs-ai-associate'
const url = `https://www.trailblazeprep.com${path}`
const ogImageUrl = `https://www.trailblazeprep.com/og?t=${encodeURIComponent(metadataTitle)}`
const faqItems = [{'question': 'Can I still take AI Associate?', 'answer': 'Salesforce retired AI Associate in February 2026. Check the issuer retirement notice and current learning catalog.'}, {'question': 'Is AI Associate a current prerequisite?', 'answer': 'Do not plan to earn a retired credential as a prerequisite. Check the current guide for the credential you intend to take.'}]

export const metadata: Metadata = {
  title: { absolute: metadataTitle }, description, alternates: {
    canonical: url,
    languages: { 'en-US': url, 'x-default': url },
  },
  openGraph: {
    title: metadataTitle, description, url, type: 'article',
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: metadataTitle }],
  },
  twitter: { card: 'summary_large_image', title: metadataTitle, description, images: [{ url: ogImageUrl, alt: metadataTitle }] },
}

export default function ComparisonPage() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12 text-gray-700 leading-relaxed">
      <ContentPageSchemas headline={title} description={description} path={path} faqItems={faqItems}
        breadcrumbItems={[{ name: 'Home', url: '/' }, { name: title, url: path }]} />
      <header data-lcp-header className="mb-8"><h1 className="text-3xl font-bold text-gray-900">{title}</h1>
        <LastUpdated /></header>
      <CredentialStatusNotice slug="ai-associate" />

      <WhichFirstBlock
        certA={{
          name: "Agentforce Specialist",
          certSlug: "agentforce-specialist",
          examTipsSlug: "certifications/agentforce-specialist",
          conditions: [
          "You configure Agentforce agents, topics, and actions in a real org",
          "You want the current AI credential Salesforce still issues",
          "You already hold Platform Administrator or equivalent org experience",
          "You need 72% across 60 questions in 105 minutes, $200",
          ],
        }}
        certB={{
          name: "AI Associate",
          certSlug: "ai-associate",
          unavailable: "retired February 2026",
          conditions: [
          "Introductory AI concepts: predictive and generative use cases",
          "Data quality, consent, and bias considerations",
          "Human oversight and responsible-AI practice",
          "No configuration depth and no coding",
          ],
        }}
        recommendation={{
          certName: "Agentforce Specialist",
          certSlug: "agentforce-specialist",
          examTipsSlug: "certifications/agentforce-specialist",
          reason: "There is no choice left to make: Salesforce retired AI Associate on 2 February 2026, so Agentforce Specialist is the only one of the two you can book. Holders keep AI Associate on their Trailblazer Profile marked Retired. Treat its topics as background reading rather than a prerequisite, because Agentforce Specialist assumes org configuration experience that AI Associate never tested.",
          careerPathSlug: "certification-path",
          careerPathLabel: "Salesforce Certification Path",
        }}
      />

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
