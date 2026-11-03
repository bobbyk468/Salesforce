import type { Metadata } from 'next'
import Link from 'next/link'
import CredentialStatusNotice from '@/components/CredentialStatusNotice'
import ContentPageSchemas from '@/components/ContentPageSchemas'

const title = 'AI Associate Retirement: What to Study Next'
const description = 'AI Associate is retired. Review your learning options, keep useful AI fundamentals, and check current issuer guidance before booking another exam.'
const path = '/ai-associate-exam-tips'
const url = `https://www.trailblazeprep.com${path}`

export const metadata: Metadata = {
  title: { absolute: title }, description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: 'article' },
  twitter: { card: 'summary_large_image', title, description },
}

export default function HistoricalAiResource() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12 text-gray-700 leading-relaxed">
      <ContentPageSchemas headline={title} description={description} path={path}
        breadcrumbItems={[{ name: 'Home', url: '/' }, { name: 'AI Associate (retired)', url: '/certifications/ai-associate' }, { name: title, url: path }]} />
      <header data-lcp-header className="mb-8"><h1 className="text-3xl font-bold text-gray-900">{title}</h1></header>
      <CredentialStatusNotice slug="ai-associate" />
      <p className="mt-6">This resource is retained for readers following older AI Associate links. Salesforce retired the credential in February 2026; it is not an active exam preparation or booking page.</p>
      <section className="mt-8 space-y-5">
        <h2 className="text-2xl font-bold">Before choosing another exam</h2>
        <p>Check the current credential catalog rather than using an old AI Associate booking link. Salesforce points learners to Agentblazer Status for current AI and Agentforce learning.</p>
        <p>Agentblazer Status is a learning program; do not assume it is the same credential or exam. If a certification fits your role. Review the current Agentforce Specialist guide, recommended experience, and registration terms.</p>
        <h2 className="text-2xl font-bold">Build a useful preparation plan</h2>
        <p>Start with the official objectives for the credential you select. Map each objective to a hands-on exercise, record what you cannot yet explain, and revisit those gaps using the issuer documentation.</p>
        <p>Use independent practice questions to assess reasoning, not to memorize supposed live exam answers. No score on this site guarantees a pass on a different exam.</p>
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
