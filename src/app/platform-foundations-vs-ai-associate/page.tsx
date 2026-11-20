import type { Metadata } from 'next'
import Link from '@/components/AppLink'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import CredentialStatusNotice from '@/components/CredentialStatusNotice'
import LastUpdated from '@/components/LastUpdated'
import WhichFirstBlock from '@/components/WhichFirstBlock'

const title = 'Platform Foundations vs AI Associate (Retired)'
const metadataTitle = 'Platform Foundations vs Retired AI Associate Guide'
const description = 'Compare the learning goals of Platform Foundations and retired AI Associate, and find current study options.'
const path = '/platform-foundations-vs-ai-associate'
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
          name: "Platform Foundations",
          certSlug: "platform-foundations",
          examTipsSlug: "certifications/platform-foundations",
          conditions: [
          "You are new to Salesforce and want the cheapest way in at $75",
          "You want a free retake included with the exam fee",
          "You need 62% across 40 questions in 70 minutes",
          "You want the current entry point to the associate track",
          ],
        }}
        certB={{
          name: "AI Associate",
          certSlug: "ai-associate",
          unavailable: "retired February 2026",
          conditions: [
          "Introductory AI vocabulary and use cases",
          "Data quality, consent, and bias considerations",
          "Human oversight and responsible-AI practice",
          "No platform configuration content",
          ],
        }}
        recommendation={{
          certName: "Platform Foundations",
          certSlug: "platform-foundations",
          examTipsSlug: "certifications/platform-foundations",
          reason: "Salesforce retired AI Associate on 2 February 2026, so Platform Foundations (Plat-101) is the entry-level exam, not one of two. At $75 with a free retake and a 62% pass mark it is the least expensive credential on the platform, and it covers CRM, Flow, app building and security rather than AI concepts alone.",
          careerPathSlug: "certification-path",
          careerPathLabel: "Salesforce Certification Path",
        }}
      />

      <section className="mt-8 space-y-5">
        <h2 className="text-2xl font-bold">Compare learning goals</h2>
        <p>Salesforce retired AI Associate in February 2026, so it is no longer an exam option alongside Platform Foundations. Older comparisons of exam fees or recommendations to take both are now historical.</p>
        <p>Platform Foundations introduces Salesforce platform concepts. Start with the current exam objectives and note the features and terms you need to learn.</p>
        <p>Older AI Associate materials can still introduce AI concepts such as prediction, generation, responsible use, data quality, and human review. The exam itself is retired and cannot be booked.</p>
        <p>Salesforce points AI Associate learners to Agentblazer Status for current AI and Agentforce learning. This learning program, a platform credential, and a specialist exam have different purposes. Choose the option that fits your work.</p>
        <p>To practice, describe how a sales or support team uses records, permissions, and automation. Then consider where AI could help and what data, review, and escalation safeguards the use case needs. Platform knowledge can help you evaluate those choices.</p>
      </section>
      <section className="mt-8 space-y-4">
        <h2 className="text-2xl font-bold">Questions about retirement</h2>
        {faqItems.map(item => <div key={item.question}><h3 className="font-semibold">{item.question}</h3><p>{item.answer}</p></div>)}
        <p><a className="text-salesforce-dark underline" href="https://trailhead.salesforce.com/en/credentials/aiassociate" target="_blank" rel="nofollow noopener noreferrer">Salesforce AI Associate retirement notice</a></p>
        <p><Link className="text-salesforce-dark underline" href="/certifications/platform-foundations">Explore Platform Foundations resources</Link></p>
        <p><Link className="text-salesforce-dark underline" href="/certifications/ai-associate">View the historical AI fundamentals guide</Link></p>
      </section>
    </article>
  )
}
