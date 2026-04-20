import type { Metadata } from 'next'
import Link from 'next/link'
import { Clock, Target, ArrowRight, BookOpen } from 'lucide-react'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import DifficultyHeatmap from '@/components/DifficultyHeatmap'
import { buildStudyGuideTitle } from '@/lib/seo-title-helpers'


const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const slug = 'experience-cloud'

const pageTitle = buildStudyGuideTitle(slug)
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription =
  `Experience Cloud Consultant study guide: sharing model, external users, site templates, CMS, branding. Pass first attempt.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/experience-cloud-consultant-study-guide` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/experience-cloud-consultant-study-guide`,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: ogImageUrl, alt: pageTitle }],
  },
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Experience Cloud Consultant Study Guide', url: '/experience-cloud-consultant-study-guide' },
]

const faqItems = [
  {
    question: 'What is the Experience Cloud Consultant exam format?',
    answer: 'The Experience Cloud Consultant exam has 60 multiple-choice questions, a 105-minute time limit, a 65% passing score, and a $200 fee ($100 retake). It requires Salesforce Administrator certification (ADM-201) and practical Experience Cloud implementation experience, as the exam tests hands-on configuration knowledge that is difficult to acquire through study alone.',
  },
  {
    question: 'What are the highest-weight Experience Cloud Consultant exam sections?',
    answer: 'Sharing, Visibility and Licencing (20%) is the hardest and most important section. Community Setup and Configuration (18%) is second. Together they account for 38% of the exam. The sharing model for external users — sharing sets, sharing rules, and licence-based access — is the topic most candidates find hardest and where the most failures occur.',
  },
  {
    question: 'What is the hardest topic in the Experience Cloud Consultant exam?',
    answer: 'The sharing model for external users is consistently rated the hardest topic. Unlike internal users (where OWD + role hierarchy + sharing rules apply), external users have their own sharing mechanisms: Sharing Sets (grant access based on field relationships — e.g., a Contact can see all Cases where the Contact field matches), and high-volume portal users have additional restrictions (no role hierarchy, no manual sharing). Understanding when to use a Sharing Set vs an Account relationship vs manual sharing is the most tested nuance.',
  },
  {
    question: 'What Experience Cloud templates are tested on the exam?',
    answer: 'The exam tests knowledge of the main Experience Cloud template types: Customer Service (Napili-based, for support portals), Partner Central (for partner relationship management), Help Centre (for self-service knowledge), Build Your Own (LWR or Aura, for custom experiences), and Microsite (lightweight landing pages). You need to know which template is most appropriate for a given use case — not necessarily how to configure each template in detail.',
  },
]

const examSections = [
  { name: 'Sharing, Visibility and Licencing', weight: 20, note: 'External user sharing model, sharing sets, high-volume portal users, licence types (Customer Community, Partner Community, Employee)' },
  { name: 'Community Setup and Configuration', weight: 18, note: 'Site creation, template selection, Experience Builder basics, workspaces, enabling features per community' },
  { name: 'User Management', weight: 16, note: 'External user profile creation, registration pages, self-registration, user roles for external users, contact-to-user relationships' },
  { name: 'Experience Builder and Branding', weight: 15, note: 'Experience Builder components, page layouts, navigation menus, themes, branding customisation, custom components' },
  { name: 'Content Management', weight: 13, note: 'Salesforce CMS, content types, content workspaces, publishing content to Experience Cloud sites' },
  { name: 'Adoption and Analytics', weight: 10, note: 'Reputation levels, recognition badges, site analytics, dashboards, engagement monitoring' },
  { name: 'Administration', weight: 8, note: 'Org-level Experience Cloud settings, domain configuration, custom domain SSL, moderation settings' },
]

export default function ExperienceCloudConsultantStudyGuidePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/experience-cloud-consultant-study-guide" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />

      <header data-lcp-header className="mb-10">
        <p className="inline-flex items-center rounded-full bg-salesforce-blue/10 px-3 py-1 text-sm font-medium text-salesforce-dark mb-4">
          Updated for {RELEASE_CURRENT}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Salesforce Experience Cloud Consultant Study Guide ({RELEASE_CURRENT}): Complete Exam Prep
        </h1>
        <p className="text-lg text-gray-600">
          The Experience Cloud Consultant certification validates your ability to design and implement
          Salesforce digital experience portals — customer self-service sites, partner portals, and
          employee intranets. The hardest topics are the external user sharing model and licence
          configuration. This guide covers every section with the depth needed to pass.
        </p>
      </header>

      <ContentPageAuthor />

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Experience Cloud Consultant Exam at a Glance</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { label: 'Questions', value: '60' },
            { label: 'Time Limit', value: '105 min' },
            { label: 'Passing Score', value: '65%' },
            { label: 'Exam Fee', value: '$200' },
          ].map(({ label, value }) => (
            <div key={label} className="rounded-lg bg-gray-50 border border-gray-100 p-3 text-center">
              <p className="text-xl font-bold text-salesforce-blue">{value}</p>
              <p className="text-xs text-gray-600 mt-1">{label}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-600 mt-4">
          ADM-201 strongly recommended. Retake fee: $100. Hands-on portal-building experience is essential — this exam cannot be passed through study alone.
        </p>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Experience Cloud Consultant Exam Sections and Weightage</h2>
        <p className="text-sm text-gray-600 mb-4">
          Sharing, Visibility &amp; Licencing (20%) is the hardest section. Do not underestimate it — external user sharing is the most commonly failed topic area.
        </p>
        <div className="space-y-3">
          {examSections.map(({ name, weight, note }) => (
            <div key={name}>
              <div className="flex justify-between text-sm mb-1">
                <span className="font-medium text-gray-800">{name}</span>
                <span className="text-salesforce-blue font-semibold">{weight}%</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2 mb-1">
                <div className="bg-salesforce-blue h-2 rounded-full" style={{ width: `${weight}%` }} />
              </div>
              <p className="text-xs text-gray-600">{note}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">What Each Section Actually Tests</h2>
        <div className="space-y-5 text-sm text-gray-700">
          <div>
            <p className="font-semibold text-gray-900 mb-1 flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-salesforce-blue" />
              Sharing, Visibility and Licencing (20%)
            </p>
            <p>The most complex section. External users (Contacts or Person Accounts in Salesforce) have a different sharing model from internal users: <strong>Sharing Sets</strong> grant access to records based on a field relationship (e.g., a Contact sees all Cases where Cases.Contact = the logged-in user&apos;s Contact record). <strong>High-Volume Portal Users (HVPUs)</strong> are a special external user type for large-scale deployments — they have no role in the role hierarchy, no manual sharing, no peer record access. They can only see records via sharing sets or owned records. <strong>Licence types:</strong> Customer Community (basic external access — Cases, Knowledge), Customer Community Plus (full sharing model, reports, dashboards), Partner Community (full CRM access for partner users). Know which licence supports which features — choosing the wrong licence is a common implementation mistake.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1 flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-salesforce-blue" />
              Community Setup and Configuration (18%)
            </p>
            <p>Experience Cloud site creation: choosing the right template (Customer Service for support portals, Partner Central for partner management, Help Centre for knowledge, Build Your Own LWR for custom builds). Workspaces in Experience Builder: Builder (visual page editing), Content, Moderation, Administration, Analytics. Key settings: enabling self-registration, enabling Topics (for community discussions), enabling Reputation (gamification), and configuring the site&apos;s domain. Know what each Workspace controls — the exam tests which workspace contains which settings.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1 flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-salesforce-blue" />
              User Management (16%)
            </p>
            <p>External user creation: users are created from Contacts (B2B / Partner portals) or Person Accounts (B2C portals). Self-registration: configure a self-registration page so prospects can create their own accounts — the default behaviour creates either a Contact + User or a Lead. <strong>Roles for external users:</strong> unlike internal users (who use role hierarchy), external user roles are scoped to the portal and account hierarchy. Partner Community users have roles (Executive, Manager, User) within an Account hierarchy — this enables data visibility between partner users at the same account.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1 flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-salesforce-blue" />
              Experience Builder and Branding (15%)
            </p>
            <p>Experience Builder is the visual drag-and-drop tool for building portal pages. Know the component types: standard Lightning components, custom LWC components, and CMS content components. Navigation menus: configure the main navigation, footer navigation, and user profile menu. Themes: set fonts, colours, and background images for the whole site. Branding sets allow different visual themes for different pages or audiences. Page variants allow showing different page designs based on audience criteria (e.g., show different homepage for logged-in vs guest users).</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1 flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-salesforce-blue" />
              Content Management (13%)
            </p>
            <p>Salesforce CMS is the content management system integrated with Experience Cloud. Key concepts: <strong>Content Workspaces</strong> — containers for CMS content, associated with one or more Experience Cloud sites. <strong>Content Types</strong> — News, Announcement, Image, Document (standard types). You can create custom content types. <strong>Publishing workflow:</strong> draft → published → archived. Content can be shared across multiple Experience Cloud sites from a single CMS workspace. Know the difference between Knowledge Articles (Salesforce Knowledge — for support/self-service) and CMS Content (for marketing/informational content).</p>
          </div>
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">6-Week Experience Cloud Consultant Study Plan</h2>
        <div className="space-y-4 text-sm text-gray-700">
          <p><strong>Week 1 — External User Sharing Model (20%):</strong> This is the most critical week. Study Sharing Sets, HVPU restrictions, and licence types thoroughly. Configure a Sharing Set in a Developer Edition org and verify record access. Understand the difference between Customer Community and Customer Community Plus licences.</p>
          <p><strong>Week 2 — Site Setup and Templates (18%):</strong> Create at least two Experience Cloud sites using different templates (Customer Service + one other). Explore each workspace in Experience Builder — know what Administration, Content, Moderation, and Analytics contain. Configure self-registration.</p>
          <p><strong>Week 3 — User Management (16%):</strong> Create external users from Contacts. Configure self-registration flows. Set up Partner Community account hierarchies and user roles. Practice: create a Contact, enable them as a Community user, and verify their record access based on a Sharing Set.</p>
          <p><strong>Week 4 — Experience Builder, Branding &amp; Content (15% + 13%):</strong> Build a custom page in Experience Builder using standard components. Configure navigation menus. Set up a CMS workspace, create content types, publish content to a site. Understand Knowledge Articles vs CMS Content.</p>
          <p><strong>Week 5 — Adoption, Analytics &amp; Administration (10% + 8%):</strong> Configure reputation levels and recognition settings. Review site analytics dashboards. Set up custom domain. Review moderation settings (flagging, freezing users).</p>
          <p><strong>Week 6:</strong> Timed full mock exams. Score 75%+ consistently. Focus revision on sharing model questions — these are the highest-value and hardest questions.</p>
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">How to Approach Experience Cloud Consultant Scenario Questions</h2>
        <ul className="space-y-3 text-sm text-gray-700">
          <li className="flex gap-2">
            <Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />
            <span><strong>Sharing questions:</strong> When a scenario describes external users needing to see a specific set of records related to their Account or Contact, the answer is usually a <strong>Sharing Set</strong>. When the scenario involves peer-to-peer sharing between portal users (one user seeing another user&apos;s records), that requires Customer Community Plus (not Customer Community). HVPUs cannot see other users&apos; records at all — if the scenario mentions millions of portal users, the answer likely involves HVPUs with sharing sets only.</span>
          </li>
          <li className="flex gap-2">
            <Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />
            <span><strong>Template selection questions:</strong> Customer Service template → self-service support portals (knowledge + case deflection). Partner Central → partner relationship management (leads, opportunities, deal registration). Help Centre → knowledge-only self-service (no case creation). Build Your Own LWR → maximum flexibility for custom digital experiences. When a scenario describes a &ldquo;partner portal&rdquo; with CRM data access, the answer is Partner Central with Partner Community licences.</span>
          </li>
          <li className="flex gap-2">
            <Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />
            <span><strong>Licence type questions:</strong> Customer Community licence → read cases, read knowledge, basic self-service. Customer Community Plus licence → full sharing model, reports, dashboards, peer record access. Partner Community licence → Lead and Opportunity object access, full CRM collaboration. When cost is a constraint in the scenario, Customer Community is always cheaper than Plus or Partner — choose the least-privileged licence that meets the requirement.</span>
          </li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Mock-Test Benchmark Before Booking</h2>
        <p className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2">
          <Clock className="h-4 w-4" />
          75%+ on 3 timed full mocks (60 Q / 105 min) before booking
        </p>
        <p className="text-sm text-gray-700 mt-3">
          The most common failure mode for Experience Cloud Consultant is insufficient hands-on experience.
          Candidates who have never built a portal from scratch — including setting up external users,
          configuring sharing sets, and building pages in Experience Builder — consistently fail the
          scenario-based questions. You cannot pass this exam purely through memorisation.
        </p>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Top 10 Topics to Review the Day Before</h2>
        <ol className="space-y-1 text-sm text-gray-700 list-decimal list-inside">
          <li>Sharing Sets: grant external users access to records via field relationships (not role hierarchy)</li>
          <li>High-Volume Portal Users: no role hierarchy, no manual sharing, sharing sets only</li>
          <li>Licence types: Customer Community vs Customer Community Plus vs Partner Community</li>
          <li>Template types: Customer Service, Partner Central, Help Centre, Build Your Own LWR</li>
          <li>External user creation: from Contact (B2B) or Person Account (B2C)</li>
          <li>Self-registration: how prospects create their own portal accounts</li>
          <li>Partner Community roles: Executive, Manager, User — scoped to Account hierarchy</li>
          <li>Experience Builder workspaces: Builder, Content, Moderation, Administration, Analytics</li>
          <li>Salesforce CMS vs Knowledge Articles: CMS for marketing content; Knowledge for support articles</li>
          <li>Page variants: show different page designs based on audience (logged-in vs guest, profile-based)</li>
        </ol>
      </section>

      <section className="rounded-xl border border-salesforce-blue/20 bg-salesforce-blue/5 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Practice With Real Exam-Style Questions</h2>
        <p className="text-sm text-gray-700 mb-4">
          Apply this study guide with free Experience Cloud Consultant practice questions:
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/certifications/experience-cloud" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-colors">
            Experience Cloud Practice Questions <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/experience-cloud-exam-tips" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            Experience Cloud Exam Tips
          </Link>
          <Link href="/sales-cloud-vs-experience-cloud-consultant" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            Sales Cloud vs Experience Cloud
          </Link>
        </div>
      </section>

      
            <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">What Comes After This Certification?</h2>
        <p className="text-sm text-gray-700">
          After this certification, consider: <Link href="/certifications/sales-cloud" className="text-salesforce-blue font-medium hover:underline">Sales Cloud Consultant</Link>, <Link href="/certifications/service-cloud" className="text-salesforce-blue font-medium hover:underline">Service Cloud Consultant</Link>, or <Link href="/certifications/experience-cloud" className="text-salesforce-blue font-medium hover:underline">Experience Cloud Consultant</Link>.
        </p>
      </section>

      <DifficultyHeatmap slug="experience-cloud" />
      {/* Hub CTA */}
      <div className="bg-salesforce-blue rounded-xl p-8 text-center text-white mt-10">
        <h2 className="text-2xl font-bold mb-2">Ready to Test Your Knowledge?</h2>
        <p className="text-white mb-6">Try the Experience Cloud Consultant free practice exam — scored with full explanations.</p>
        <Link
          href="/certifications/experience-cloud"
          className="inline-flex items-center px-6 py-3 bg-white text-salesforce-blue rounded-lg font-semibold hover:bg-blue-50 transition-colors"
        >
          Experience Cloud Consultant Free Practice Exam &rarr;
        </Link>
      </div>
    </div>
  )
}