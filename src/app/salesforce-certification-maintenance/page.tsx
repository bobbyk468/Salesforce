import type { Metadata } from 'next'
import Link from '@/components/AppLink'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import LastUpdated from '@/components/LastUpdated'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const pageTitle = `Salesforce Certification Maintenance Guide (${RELEASE_CURRENT})`
const pageDescription = `Learn when Salesforce certification maintenance is due, which Trailhead modules to complete, and how to track renewal deadlines.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: {
    canonical: `${siteUrl}/salesforce-certification-maintenance`,
    languages: { 'en-US': `${siteUrl}/salesforce-certification-maintenance`, 'x-default': `${siteUrl}/salesforce-certification-maintenance` },
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/salesforce-certification-maintenance`,
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
  { name: 'Salesforce Certifications', url: '/certifications' },
  { name: 'Certification Maintenance Guide', url: '/salesforce-certification-maintenance' },
]

const faqItems = [
  {
    question: 'How often do Salesforce certifications need to be maintained?',
    answer: 'Salesforce has three major releases each year: Spring, Summer, and Winter. Maintenance is annual: each credential has one badge per year, released in the cycle Salesforce assigns to it. For most certifications, complete the maintenance module on Trailhead within about 30 days of publication. Certifications in the same role category usually share a module, so you do not need one for each certification.',
  },
  {
    question: 'What happens if I miss the Salesforce certification maintenance deadline?',
    answer: 'If you miss a maintenance deadline, your Trailhead credential status changes from Active to Inactive. The certification is not permanently revoked. Complete all overdue maintenance modules to reactivate it. While it is Inactive, do not describe it on your resume or LinkedIn profile as currently active.',
  },
  {
    question: 'Where do I find the Salesforce certification maintenance modules?',
    answer: 'Salesforce publishes maintenance modules on Trailhead (trailhead.salesforce.com). Sign in, open your profile, and check Credentials for alerts about pending maintenance. You can also search the Trailhead module catalogue for "maintenance." Salesforce may also send reminders to your registered email address.',
  },
  {
    question: 'Do maintenance modules cost anything?',
    answer: 'No. Salesforce maintenance modules are free. These short Trailhead modules usually take 20–60 minutes and cover platform changes related to your certification. Salesforce does not charge a maintenance fee.',
  },
  {
    question: 'Do all Salesforce certifications require maintenance?',
    answer: 'Most role-based Salesforce certifications, including Administrator, Developer, Consultant, and Architect, require maintenance. Accredited Professional (AP) and some associate-level certifications may follow different rules. Check your certification at trailhead.salesforce.com/credentials for its schedule and any exceptions.',
  },
]

export default function SalesforceCertificationMaintenancePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/salesforce-certification-maintenance" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />

      {/* Breaking news banner: Summer '26 maintenance now live */}
      <div className="mb-6 flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 px-5 py-4">
        <span className="shrink-0 mt-0.5 text-sm font-bold text-red-600 uppercase tracking-wide">Breaking</span>
        <div>
          <p className="text-sm font-semibold text-red-800">
            Summer ’26 maintenance modules are now live on Trailhead, released August 2026.
          </p>
          <p className="text-sm text-red-700 mt-0.5">
            Deadline to complete: <strong>April 16, 2027.</strong> Log in to{' '}
            <a href="https://trailhead.salesforce.com" target="_blank" rel="noopener noreferrer nofollow" className="underline">
              Trailhead
            </a>
            {' '}and check your Credentials tab to see which modules are pending for your certifications.
          </p>
        </div>
      </div>

      <div data-lcp-header className="mb-10">
        <div className="inline-flex items-center gap-2 bg-salesforce-blue/10 text-salesforce-dark text-sm font-semibold px-3 py-1 rounded-full mb-4">

      <ContentPageAuthor />
          <span>Maintenance Guide</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          Salesforce Certification Maintenance Guide ({RELEASE_CURRENT})
        </h1>
        <LastUpdated />
        <p className="text-lg text-gray-600">
          Learn when to complete maintenance, where to find Trailhead modules, and what happens if you miss a deadline. See the <Link href="/salesforce-certification-validity" className="text-salesforce-dark hover:underline font-medium">certification validity guide</Link> for more details.
        </p>
      </div>

      {/* Key facts */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
        {[
          { label: 'Releases/Year', value: '3' },
          { label: 'Cost', value: 'Free' },
          { label: 'Module Time', value: '20–60 min' },
          { label: 'Where', value: 'Trailhead' },
        ].map((stat) => (
          <div key={stat.label} className="bg-white rounded-xl border border-gray-100 p-4 text-center shadow-sm">
            <div className="text-2xl font-bold text-salesforce-blue">{stat.value}</div>
            <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* How it works */}
      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">How Salesforce Certification Maintenance Works</h2>
        <div className="space-y-4 text-sm text-gray-700">
          <p>Salesforce releases three major platform updates each year: <strong>Spring</strong> (January/February), <strong>Summer</strong> (May/June), and <strong>Winter</strong> (September/October). Each release brings new features and changes.</p>
          <p>Salesforce publishes <strong>maintenance modules on Trailhead</strong> for each release. A role category may have one or more short modules. Complete the required module within about <strong>30 days</strong> of publication to keep your certification Active.</p>
          <p>Certifications in the same role category usually share one maintenance module. For example, someone with both ADM-201 and Advanced Administrator usually completes one Administrator-category module, not two.</p>
        </div>
      </div>

      {/* Step by step */}
      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">How to Complete Maintenance: Step by Step</h2>
        <div className="space-y-4">
          {[
            { step: '1', title: 'Watch for Salesforce release announcements', desc: 'Salesforce announces releases on its blog and Trust.salesforce.com. Sign up for release email updates to hear when maintenance modules are available.' },
            { step: '2', title: 'Log in to Trailhead', desc: 'Go to trailhead.salesforce.com and sign in with the Salesforce account linked to your certification. Open your profile and select "Credentials."' },
            { step: '3', title: 'Check for pending maintenance', desc: 'Certifications with outstanding maintenance show an alert. Select a certification to see the required module and its deadline.' },
            { step: '4', title: 'Complete the maintenance module', desc: 'Open the Trailhead module, read each unit, and complete its challenge quiz. Modules usually take 20–60 minutes. You can pause and return later.' },
            { step: '5', title: 'Verify your status', desc: 'After you finish the module, check your certification status. Your Trailhead badge should show Active for the new release and the updated maintenance date.' },
          ].map((item) => (
            <div key={item.step} className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-salesforce-blue text-white flex items-center justify-center font-bold text-sm">{item.step}</div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* What if you miss */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold text-amber-900 mb-3">What If You Miss the Maintenance Deadline?</h2>
        <div className="space-y-2 text-sm text-amber-800">
          <p><strong>Your certification becomes Inactive.</strong> It is not permanently revoked, but the status appears on your Trailhead credential profile.</p>
          <p><strong>To reactivate it,</strong> complete every overdue maintenance module. Your status returns to Active after you finish them.</p>
          <p><strong>While it is Inactive,</strong> do not describe the certification as currently active on your resume, LinkedIn profile, or to clients. The status is visible in Trailhead verification.</p>
          <p><strong>Reactivation is free.</strong> Complete the overdue modules; Salesforce does not charge a reactivation fee.</p>
        </div>
      </div>

      {/* Release schedule */}
      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Salesforce Release Schedule ({RELEASE_CURRENT})</h2>
        <div className="space-y-3">
          {[
            { release: 'Spring ’26', period: 'Jan–Feb 2026', maintenance: 'Feb–Mar 2026', status: 'Complete' },
            { release: 'Summer ’26', period: 'May–Jun 2026', maintenance: 'Jun–Jul 2026', status: 'Current' },
            { release: 'Winter ’27', period: 'Sep–Oct 2026', maintenance: 'Oct–Nov 2026', status: 'Upcoming' },
          ].map((row) => (
            <div key={row.release} className="flex flex-wrap items-center justify-between gap-3 py-3 border-b border-gray-100 last:border-0 text-sm">
              <span className="font-semibold text-gray-900">{row.release}</span>
              <span className="text-gray-600">Release: {row.period}</span>
              <span className="text-gray-600">Maintenance due: {row.maintenance}</span>
              <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">{row.status}</span>
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-600 mt-3">Exact dates vary. Check release.salesforce.com for confirmed dates.</p>
      </div>

      {/* FAQ */}
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
      <div className="bg-gray-50 rounded-xl border border-gray-100 p-5 mb-8">
        <h2 className="text-base font-bold text-gray-900 mb-3">Compare Certifications</h2>
        <ul className="space-y-2">
          <li><Link href="/salesforce-certification-validity" className="text-sm text-salesforce-dark hover:underline font-medium">→ Salesforce certification validity & expiry guide</Link></li>
        </ul>
      </div>


      <div className="bg-salesforce-blue rounded-xl p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-2">Get Certified First</h2>
        <p className="text-white mb-6">Try free practice questions for your target certification.</p>
        <Link href="/certifications" className="inline-flex items-center px-6 py-3 bg-white text-salesforce-blue rounded-lg font-semibold hover:bg-blue-50 transition-colors">
          Browse All Certifications
        </Link>
      </div>
    </div>
  )
}
