import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, Clock, Target, ArrowRight } from 'lucide-react'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import { getConceptFaqs } from '@/lib/exam-tips-concept-faqs'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'

const pageTitle = `Slack Administrator Exam Tips (${RELEASE_CURRENT}): Study Guide`
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription =
  `Salesforce Slack Administrator exam tips for ${RELEASE_CURRENT}: workspace management, channels, security, Slack Connect Free practice questions.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/slack-administrator-exam-tips` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/slack-administrator-exam-tips`,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: ogImageUrl, alt: pageTitle }],
  },
  keywords:
    `Slack Administrator exam tips ${RELEASE_CURRENT}, how to pass Slack Administrator, Slack admin certification study guide, Slack certification tips`,
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Slack Administrator Exam Tips', url: '/slack-administrator-exam-tips' },
]

const faqItems = [
  {
    question: 'What is the Slack Administrator exam format?',
    answer: 'The Slack Administrator exam has 60 multiple-choice questions, a 105-minute time limit, a 65% passing score, and a $200 fee ($100 retake). It tests workspace administration, channel management, security policies, Slack Connect, and app integrations.',
  },
  {
    question: 'What are the highest-weight Slack Administrator exam sections?',
    answer: 'Workspace Management (30%) and Security and Compliance (25%) together account for 55% of the exam. Understanding workspace settings, message retention policies, data loss prevention (DLP), guest access types, and Slack Connect governance are the most heavily tested topics.',
  },
  {
    question: 'What is the difference between a guest and a member in Slack?',
    answer: 'Members have full workspace access. Single-Channel Guests can only access the specific channels they are invited to and cannot see other workspace members or channels. Multi-Channel Guests can access multiple designated channels. Understanding guest limitations and how they interact with Slack Connect external channels is frequently tested.',
  },
  {
    question: 'What is Slack Connect and why is it tested heavily?',
    answer: 'Slack Connect allows communication between separate Slack workspaces — used for external collaboration with clients or partners. The exam tests Slack Connect governance: who can send invitations, how admins control external channel creation, DLP policies for Connect channels, and the difference between Connect DMs and Connect channels.',
  },
  {
    question: 'What concepts do most Slack Administrator candidates get wrong?',
    answer: 'The most commonly misunderstood topics for the Slack Administrator exam are: (1) Workspace vs Organisation vs Enterprise Grid — Three Admin Scopes; (2) Public vs Private vs Shared Channels — Visibility and External Access; (3) User Groups vs Channels — @mention Broadcast vs Conversation Space. Candidates are most confidently wrong on these — learn the distinctions early to avoid losing marks on questions you expect to get right.',
  },
  ...getConceptFaqs('slack-administrator-exam-tips'),
]

export default function SlackAdministratorExamTipsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/slack-administrator-exam-tips" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />

      <header data-lcp-header className="mb-10">
        <p className="inline-flex items-center rounded-full bg-salesforce-blue/10 px-3 py-1 text-sm font-medium text-salesforce-blue mb-4">
          Updated for {RELEASE_CURRENT}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Slack Administrator Exam Tips ({RELEASE_CURRENT}): How to Pass
        </h1>
        <p className="text-lg text-gray-600">
          The Slack Administrator exam tests your ability to manage Slack workspaces, enforce security policies,
          and configure external collaboration. These tips focus on workspace governance, guest access controls,
          and Slack Connect administration that define the exam.
        </p>
      </header>

      <ContentPageAuthor />

      <section className="rounded-xl border border-gray-100 bg-gray-50 p-5 mb-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-600 mb-3">Exam At a Glance</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div>
            <p className="text-2xl font-bold text-salesforce-blue">60</p>
            <p className="text-xs text-gray-500 mt-0.5">Questions</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-salesforce-blue">105 min</p>
            <p className="text-xs text-gray-500 mt-0.5">Time Limit</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-salesforce-blue">65%</p>
            <p className="text-xs text-gray-500 mt-0.5">Passing Score</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-salesforce-blue">$200</p>
            <p className="text-xs text-gray-500 mt-0.5">Exam Fee</p>
          </div>
        </div>
      </section>


      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Quick Answer: What Slack Administrator Tests</h2>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Workspace management</strong> — Channel types (public, private, shared), message retention policies, workspace settings, admin and owner roles, and how to manage members across workspaces or an Enterprise Grid.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Security and compliance</strong> — Data Loss Prevention (DLP), message retention, eDiscovery, two-factor authentication requirements, approved app lists, and workspace-level security settings for regulated industries.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Slack Connect and guests</strong> — External channel governance, guest type limitations (single vs. multi-channel), Slack Connect invitation controls, and how admins restrict external collaboration for compliance.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Highest-Weight Exam Sections</h2>
        <div className="space-y-3 text-sm text-gray-700">
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Workspace Management</span>
            <span className="font-bold text-salesforce-blue ml-4">30%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Security and Compliance</span>
            <span className="font-bold text-salesforce-blue ml-4">25%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Slack Connect and External Collaboration</span>
            <span className="font-bold text-salesforce-blue ml-4">20%</span>
          </div>
          <div className="flex justify-between items-start">
            <span className="font-medium text-gray-900">Apps and Integrations</span>
            <span className="font-bold text-salesforce-blue ml-4">15%</span>
          </div>
          <p className="text-xs text-gray-500 pt-1">Workspace Management + Security + Connect = 75%. Focus on access controls, retention policies, and guest governance.</p>
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Scenario Strategy: How to Approach Slack Administrator Questions</h2>
        <p className="text-sm text-gray-700 mb-3">
          Questions describe an administrative or governance scenario and ask which setting, role, or feature
          addresses it. Read for the constraint — compliance, guest access, external collaboration, or app
          management — and eliminate answers that grant more access than needed.
        </p>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For guest access questions: Single-Channel Guests are the most restrictive option — they only see the channels they are explicitly invited to. Multi-Channel Guests see multiple specific channels. Members see everything. Prefer the most restrictive option for external users.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For retention policy questions: workspace-level retention applies to all channels unless overridden by channel-level settings. Longer retention = more storage, higher compliance overhead. eDiscovery exports require a paid compliance plan — know which features require which plan tier.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For Enterprise Grid questions: Grid allows multiple workspaces under one organisation. Org-level admins can manage all workspaces; workspace admins manage individual workspaces. Channel types (org-wide channels) only exist in Enterprise Grid — this distinction is tested.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Mock-Test Benchmark Before Booking</h2>
        <p className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2">
          <Clock className="h-4 w-4" />
          75%+ on 3 timed full mocks before booking
        </p>
        <p className="text-sm text-gray-700 mt-3">
          The Slack Administrator exam is accessible to candidates with 6–12 months of Slack administration
          experience. Candidates from a pure Salesforce background without Slack admin experience should
          spend extra time on Enterprise Grid concepts and security policy settings that differ
          significantly from Salesforce platform administration.
        </p>
      </section>


            <section className="rounded-xl border border-amber-100 bg-amber-50 p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-2">3 Concepts That Fail Most Slack Administrator Candidates</h2>
        <p className="text-sm text-gray-600 mb-5">These are not the hardest topics — they are the ones where candidates are <strong>most confidently wrong</strong>. Learn the distinction early.</p>
        <div className="space-y-5">
          <div>
            <p className="font-semibold text-gray-900 mb-1">1. Workspace vs Organisation vs Enterprise Grid — Three Admin Scopes</p>
            <p className="text-sm text-gray-700">A Workspace is a single Slack instance (company.slack.com). An Organisation groups multiple Workspaces under shared admin controls. Enterprise Grid connects many Organisations under one enterprise umbrella with centralised security. Candidates apply Workspace-level settings to Enterprise Grid problems — the exam distinguishes admin scope: Workspace Admin (one workspace), Org Admin (multiple workspaces), Enterprise Grid Admin (enterprise-wide).</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1">2. Public vs Private vs Shared Channels — Visibility and External Access</p>
            <p className="text-sm text-gray-700">Public channels are visible and joinable by all workspace members. Private channels require an invitation — members cannot search or join uninvited. Shared channels (Slack Connect) connect internal channels with external organisations. Candidates recommend Private channels for External Partner collaboration — the exam expects Shared Channels (Slack Connect) for cross-organisation communication.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1">3. User Groups vs Channels — @mention Broadcast vs Conversation Space</p>
            <p className="text-sm text-gray-700">User Groups are @mentionable sets of users (e.g., @engineering-team) — mentioning the group notifies all members but does not create a conversation space. Channels are conversation spaces where messages are posted and archived. Candidates create new channels when a scenario just needs a way to notify a team — the exam expects User Groups for broadcast notifications without needing a new channel.</p>
          </div>
        </div>
      </section>

<section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
        <dl className="space-y-4">
          {faqItems.map((item, i) => (
            <div key={i} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
              <dt className="font-semibold text-gray-900 mb-1">{item.question}</dt>
              <dd className="text-sm text-gray-700" dangerouslySetInnerHTML={{ __html: item.answer }} />
            </div>
          ))}
        </dl>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Related Exam Tips</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/slack-developer-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Slack Developer Exam Tips</span>
          </Link>
          <Link href="/slack-consultant-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Slack Consultant Exam Tips</span>
          </Link>
          <Link href="/adm-201-exam-tips-2026" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">ADM-201 Exam Tips</span>
          </Link>
          <Link href="/admin-certification-path" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Admin Certification Path</span>
          </Link>
        </div>
      </section>


      <section className="rounded-xl border border-salesforce-blue/20 bg-salesforce-blue/5 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Start Slack Administrator Prep</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/certifications/slack-administrator" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-colors">
            Slack Administrator Practice Questions <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/slack-developer-exam-tips" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            Slack Developer Tips
          </Link>
          <Link href="/certification-path" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            All Certification Paths
          </Link>
        </div>
      </section>
    </div>
  )
}
