import type { Metadata } from 'next'
import Link from '@/components/AppLink'
import CredentialStatusNotice from '@/components/CredentialStatusNotice'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import LastUpdated from '@/components/LastUpdated'

const title = 'AI Associate: Historical Learning Guide'
const metadataTitle = 'AI Associate: Historical Learning Guide | Salesforce'
const description = 'AI Associate retired in February 2026. Review AI concepts, responsible data use, and current Salesforce learning resources.'
const path = '/ai-associate-study-guide'
const url = `https://www.trailblazeprep.com${path}`

export const metadata: Metadata = {
  title: { absolute: metadataTitle }, description,
  alternates: {
    canonical: url,
    languages: { 'en-US': url, 'x-default': url },
  },
  openGraph: { title: metadataTitle, description, url, type: 'article' },
  twitter: { card: 'summary_large_image', title: metadataTitle, description },
}

export default function HistoricalAiResource() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12 text-gray-700 leading-relaxed">
      <ContentPageSchemas headline={title} description={description} path={path}
        breadcrumbItems={[{ name: 'Home', url: '/' }, { name: 'AI Associate (retired)', url: '/certifications/ai-associate' }, { name: title, url: path }]} />
      <header data-lcp-header className="mb-8"><h1 className="text-3xl font-bold text-gray-900">{title}</h1>
        <LastUpdated /></header>
      <CredentialStatusNotice slug="ai-associate" />
      <p className="mt-6">This resource is retained for readers following older AI Associate links. Salesforce retired the credential in February 2026; it is not an active exam preparation or booking page.</p>
      <section className="mt-8 space-y-5">
        <h2 className="text-2xl font-bold">AI concepts worth keeping</h2>
        <p>Learn the difference between prediction and generation. A model that estimates whether an opportunity will close solves a different problem from a model that drafts a follow-up email.</p>
        <p>Review data quality, permissions, and consent before introducing AI. An accurate answer can still be inappropriate if it reveals records the user should not access.</p>
        <p>Evaluate generated responses with representative examples. Check factual support, harmful bias, and what happens when the model does not know an answer. Keep human review for consequential decisions.</p>
        <h2 className="text-2xl font-bold">A practical learning exercise</h2>
        <p>Choose a support workflow. Identify the records needed, who can access them, the response the model should produce, and a safe escalation path. Test missing data and contradictory customer requests before considering automation.</p>
      </section>
      <section className="mt-8 space-y-4">
        <h2 className="text-2xl font-bold">Current resources</h2>
        <p><a className="text-salesforce-dark underline" href="https://trailhead.salesforce.com/en/credentials/aiassociate">Salesforce retirement notice and current learning guidance</a></p>
        <p><Link className="text-salesforce-dark underline" href="/certifications/agentforce-specialist">Explore Agentforce Specialist learning resources</Link></p>
        <p><Link className="text-salesforce-dark underline" href="/certifications/ai-associate">Historical AI Associate learning reference</Link></p>
      </section>
    </article>
  )
}
