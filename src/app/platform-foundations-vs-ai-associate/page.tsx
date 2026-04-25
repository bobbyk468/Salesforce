import type { Metadata } from 'next'
import Link from 'next/link'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import RelatedGuides from '@/components/RelatedGuides'
import { getRelatedGuides } from '@/lib/related-guides-data'
import { RELEASE_CURRENT } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import WhichFirstBlock from '@/components/WhichFirstBlock'


const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const pageTitle = `Platform Foundations vs AI Associate (${RELEASE_CURRENT})`
const pageDescription = `Platform Foundations vs AI Associate: both $75 entry-level. Content, difficulty, career value. Which first in 2026 Free practice questions.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/platform-foundations-vs-ai-associate` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/platform-foundations-vs-ai-associate`,
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
  { name: 'Platform Foundations vs AI Associate', url: '/platform-foundations-vs-ai-associate' },
]

const faqItems = [
  {
    question: 'Which $75 Salesforce certification should I take first?',
    answer: 'For most people starting a Salesforce career, AI Associate is the recommended first certification. It is more widely recognised by employers, has the clearest career signal (AI literacy is valued across all roles), and requires no platform-specific technical knowledge. Platform Foundations is more appropriate if you specifically want to demonstrate broad Salesforce platform knowledge as a foundation before pursuing Administrator.',
  },
  {
    question: 'Are both Platform Foundations and AI Associate worth getting?',
    answer: 'Both are worth getting as entry-level credentials with a low $75 investment. AI Associate is more universally valued because AI literacy is relevant to every Salesforce role. Platform Foundations is valuable if your goal is the Administrator path — it demonstrates foundational platform knowledge. Many candidates pursue both as the combined cost is just $150 and it creates a stronger credential profile than either alone.',
  },
  {
    question: 'Which exam is easier: Platform Foundations or AI Associate?',
    answer: 'Most candidates find AI Associate slightly easier — the subject matter (AI concepts, Einstein AI features, responsible AI principles) is more directly memorisable than Platform Foundations which tests applied understanding of the Salesforce data model, security, and automation. Both require the same passing score (70%) and have the same format (40 questions, 70 minutes). Both are accessible to complete beginners with 3–4 weeks of Trailhead study.',
  },
  {
    question: 'Do employers prefer Platform Foundations or AI Associate?',
    answer: 'Based on job postings, AI Associate appears more frequently as a desired or required credential. AI Associate signals digital literacy that is valued across admin, developer, consultant, and business analyst roles. Platform Foundations is more of an internal knowledge validation that employers value less than the full Administrator certification. For pure career signalling to employers, AI Associate is the stronger $75 investment.',
  },
  {
    question: 'What is the next certification after Platform Foundations or AI Associate?',
    answer: 'After AI Associate: the Administrator certification (ADM-201) is the most recommended next step for a Salesforce career. It is the foundational professional credential that opens the most Salesforce career paths. After Platform Foundations: also Administrator, as Platform Foundations was designed as a stepping stone toward Administrator knowledge. Both $75 certs are best used as entry points, not career endpoints.',
  },
]

export default function PlatformFoundationsVsAiAssociatePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/platform-foundations-vs-ai-associate" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />

      <div data-lcp-header className="mb-10">
        <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full mb-4">
          <span>$75 Entry-Level Comparison</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          Platform Foundations vs AI Associate ({RELEASE_CURRENT})
        </h1>
        <p className="text-lg text-gray-600">
          Both cost $75, both target beginners, both require no prior experience — but they test completely different knowledge. Here is which one to take first and why.
        </p>
      </div>

      <ContentPageAuthor />
      <WhichFirstBlock
        certA={{
          name: "Platform Foundations",
          certSlug: "platform-foundations",
          examTipsSlug: "platform-foundations-exam-tips",
          conditions: [
          "You are completely new to Salesforce with zero platform exposure",
          "You want the gentlest possible introduction to the ecosystem",
          "You are evaluating whether a Salesforce career is right for you",
          "You plan to follow up immediately with the Administrator credential",
          ],
        }}
        certB={{
          name: "AI Associate",
          certSlug: "ai-associate",
          examTipsSlug: "ai-associate-exam-tips",
          conditions: [
          "You have some Salesforce experience and want an AI credential quickly",
          "You want the fastest Salesforce cert with the highest growth relevance",
          "You plan to pursue Agentforce Specialist as your next step",
          "Your organisation is actively using or evaluating Einstein or Agentforce",
          ],
        }}
        recommendation={{
          certName: "AI Associate",
          certSlug: "ai-associate",
          examTipsSlug: "ai-associate-exam-tips",
          reason: "AI Associate is faster to earn and far more relevant in the 2026 market. Platform Foundations is only worth considering if you have zero Salesforce exposure — otherwise, AI Associate gives you a better return on study time.",
          
        }}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
        <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-bold text-gray-900">AI Associate</h2>
            <span className="text-xs font-semibold bg-salesforce-blue/10 text-salesforce-dark px-2 py-0.5 rounded-full">Most Recommended</span>
          </div>
          <div className="space-y-2 text-sm text-gray-700 mb-4">
            <div className="flex justify-between"><span className="text-gray-600">Fee</span><span className="font-semibold">$75</span></div>
            <div className="flex justify-between"><span className="text-gray-600">Questions</span><span className="font-semibold">40</span></div>
            <div className="flex justify-between"><span className="text-gray-600">Time</span><span className="font-semibold">70 min</span></div>
            <div className="flex justify-between"><span className="text-gray-600">Passing score</span><span className="font-semibold">70%</span></div>
            <div className="flex justify-between"><span className="text-gray-600">Focus</span><span className="font-semibold">AI &amp; Einstein</span></div>
          </div>
          <Link href="/ai-associate-study-guide" className="block text-center text-xs font-semibold text-salesforce-blue hover:underline">Study Guide →</Link>
        </div>

        <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-bold text-gray-900">Platform Foundations</h2>
            <span className="text-xs font-semibold bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">Admin Path Starter</span>
          </div>
          <div className="space-y-2 text-sm text-gray-700 mb-4">
            <div className="flex justify-between"><span className="text-gray-600">Fee</span><span className="font-semibold">$75</span></div>
            <div className="flex justify-between"><span className="text-gray-600">Questions</span><span className="font-semibold">40</span></div>
            <div className="flex justify-between"><span className="text-gray-600">Time</span><span className="font-semibold">70 min</span></div>
            <div className="flex justify-between"><span className="text-gray-600">Passing score</span><span className="font-semibold">70%</span></div>
            <div className="flex justify-between"><span className="text-gray-600">Focus</span><span className="font-semibold">Platform basics</span></div>
          </div>
          <Link href="/platform-foundations-study-guide" className="block text-center text-xs font-semibold text-salesforce-blue hover:underline">Study Guide →</Link>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Content Comparison</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100">
                <th scope="col" className="text-left py-2 pr-4 text-gray-600 font-medium">Area</th>
                <th scope="col" className="text-left py-2 pr-4 text-gray-600 font-medium">AI Associate</th>
                <th scope="col" className="text-left py-2 text-gray-600 font-medium">Platform Foundations</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50 text-sm">
              {[
                { area: 'Primary topics', ai: 'AI concepts, Einstein AI, responsible AI', pf: 'Data model, automation, security, app building' },
                { area: 'Platform knowledge needed', ai: 'Minimal — AI concepts focused', pf: 'Moderate — requires Salesforce platform understanding' },
                { area: 'Career signal', ai: 'Strong — AI literacy is universally valued', pf: 'Moderate — stepping stone to Administrator' },
                { area: 'Best next cert', ai: 'Administrator (ADM-201)', pf: 'Administrator (ADM-201)' },
                { area: 'Ease of study', ai: 'Slightly easier (conceptual)', pf: 'Slightly harder (applied platform knowledge)' },
                { area: 'Employer recognition', ai: 'Higher — AI is high-interest topic', pf: 'Lower than Administrator; moderate alone' },
                { area: 'Avg Salary', ai: '$70–95k (US)', pf: '$55–75k (US)' },
              ].map((row) => (
                <tr key={row.area}>
                  <td className="py-2 pr-4 font-medium text-gray-900">{row.area}</td>
                  <td className="py-2 pr-4 text-gray-700">{row.ai}</td>
                  <td className="py-2 text-gray-700">{row.pf}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

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

            <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Decision Matrix: Platform Foundations or AI Associate?</h2>
        <div className="overflow-x-auto">
          <table className="min-w-[500px] w-full text-sm text-left border-collapse">
            <thead><tr className="border-b-2 border-gray-200">
              <th scope="col" className="py-2.5 pr-4 font-semibold text-gray-900">Your Situation</th>
              <th scope="col" className="py-2.5 font-semibold text-emerald-700">Choose This Cert</th>
            </tr></thead>
            <tbody className="text-gray-700 divide-y divide-gray-100">
              <tr><td className="py-2.5 pr-4">Complete beginner to Salesforce — want the broadest foundation</td><td className="py-2.5 font-semibold text-salesforce-blue">Platform Foundations — covers the full platform overview</td></tr>
              <tr><td className="py-2.5 pr-4">Salesforce user already — want to validate AI/Einstein knowledge</td><td className="py-2.5 font-semibold text-purple-700">AI Associate — more focused and career-relevant</td></tr>
              <tr><td className="py-2.5 pr-4">Non-technical stakeholder needing Salesforce literacy for a project</td><td className="py-2.5 font-semibold text-salesforce-blue">Platform Foundations</td></tr>
              <tr><td className="py-2.5 pr-4">Anyone in a Salesforce role wanting to demonstrate AI awareness</td><td className="py-2.5 font-semibold text-purple-700">AI Associate — better ROI for most roles in 2025+</td></tr>
              <tr><td className="py-2.5 pr-4">Quick win before tackling ADM-201 or Agentforce Specialist</td><td className="py-2.5 font-semibold text-purple-700">AI Associate — 40 questions, $75, fastest to complete</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <RelatedGuides links={getRelatedGuides('platform-foundations-vs-ai-associate')} />

      <div className="bg-salesforce-blue rounded-xl p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-2">Start with AI Associate — $75</h2>
        <p className="text-white mb-6">The most accessible entry point into Salesforce certifications. Free practice questions available now.</p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/certifications/ai-associate" className="inline-flex items-center px-5 py-3 bg-white text-salesforce-blue rounded-lg font-semibold hover:bg-blue-50 transition-colors text-sm">
            AI Associate Practice
          </Link>
          <Link href="/ai-associate-study-guide" className="inline-flex items-center px-5 py-3 border border-white/40 text-white rounded-lg font-semibold hover:bg-white/10 transition-colors text-sm">
            AI Associate Study Guide
          </Link>
        </div>
      </div>
    </div>
  )
}
