/* Ported from /experience-cloud-consultant-study-guide, merged into /certifications/experience-cloud in November 2026.
 * Content is the original page copy. Page chrome (metadata, JSON-LD, H1
 * header) was dropped because the hub page already provides it. */
import Link from '@/components/AppLink'
import { Clock, Target, ArrowRight, BookOpen } from 'lucide-react'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import DifficultyHeatmap from '@/components/DifficultyHeatmap'
import { buildStudyGuideTitle } from '@/lib/seo-title-helpers'
import ExamTipsCrossLink from '@/components/ExamTipsCrossLink'
import CertInsightBlock from '@/components/CertInsightBlock'
import CredentialSchema from '@/components/CredentialSchema'
import ExamPricingCard from '@/components/ExamPricingCard'
import LastUpdated from '@/components/LastUpdated'





const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const slug = 'experience-cloud'

const pageTitle = buildStudyGuideTitle(slug)
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription =
  `Experience Cloud Consultant study guide: sharing model, external users, site templates, CMS, branding. Pass first attempt.`


export const faqItems = [
  {
    question: 'What is the Experience Cloud Consultant exam format?',
    answer: 'The Experience Cloud Consultant exam has 60 multiple-choice questions, a 105-minute time limit, a 62% passing score, and a $200 fee ($100 retake). It requires Salesforce Administrator certification (ADM-201) and practical Experience Cloud implementation experience, as the exam tests hands-on configuration knowledge that is difficult to acquire through study alone.',
  },
  {
    question: 'What are the highest-weight Experience Cloud Consultant exam sections?',
    answer: 'Administration, Setup, and Configuration (25%) is by far the largest section. Sharing, Visibility, and Licensing (17%) is second. Together they account for 42% of the exam. Org-level setup and domain configuration, plus the sharing model for external users (sharing sets, licence-based access), are the topics most candidates find hardest and where the most failures occur.',
  },
  {
    question: 'What is the hardest topic in the Experience Cloud Consultant exam?',
    answer: 'The sharing model for external users is consistently rated the hardest topic. Unlike internal users (where OWD + role hierarchy + sharing rules apply), external users have their own sharing mechanisms: Sharing Sets (grant access based on field relationships, e.g., a Contact can see all Cases where the Contact field matches), and high-volume portal users have additional restrictions (no role hierarchy, no manual sharing). Understanding when to use a Sharing Set vs an Account relationship vs manual sharing is the most tested nuance.',
  },
  {
    question: 'What Experience Cloud templates are tested on the exam?',
    answer: 'The exam tests knowledge of the main Experience Cloud template types: Customer Service (Napili-based, for support portals), Partner Central (for partner relationship management), Help Centre (for self-service knowledge), Build Your Own (LWR or Aura, for custom experiences), and Microsite (lightweight landing pages). You need to know which template is most appropriate for a given use case, not necessarily how to configure each template in detail.',
  },
]

const examSections = [
  { name: 'Administration, Setup, and Configuration', weight: 25, note: 'Site creation, template selection, Experience Builder workspaces, domain configuration, custom domain SSL, enabling features per site, moderation settings' },
  { name: 'Sharing, Visibility, and Licensing', weight: 17, note: 'External user sharing model, sharing sets, high-volume portal users, licence types (Customer Community, Partner Community, Employee)' },
  { name: 'Branding, Personalization, and Content', weight: 15, note: 'Themes, branding sets, page variants, Salesforce CMS content types and workspaces, publishing content to sites' },
  { name: 'User Creation and Authentication', weight: 13, note: 'External user profile creation, registration pages, self-registration, SSO/authentication providers, contact-to-user relationships' },
  { name: 'Templates and Themes', weight: 10, note: 'Customer Service, Partner Central, Help Centre, Build Your Own (LWR/Aura), and Microsite templates; theme selection and configuration' },
  { name: 'Experience Cloud Basics', weight: 8, note: 'Core concepts: sites, members, licences, and the overall Experience Cloud product landscape' },
  { name: 'Customization Considerations and Limitations', weight: 7, note: 'Experience Builder components, custom LWC components, navigation menus, and where declarative customization reaches its limits' },
  { name: 'Adoption and Analytics', weight: 5, note: 'Reputation levels, recognition badges, site analytics, dashboards, engagement monitoring' },
]

export default function ExperienceCloudConsultantStudyGuideContent() {
  return (
    <div className="mt-12">


      <CertInsightBlock certSlug="experience-cloud-consultant" />

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Experience Cloud Consultant Exam at a Glance</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { label: 'Questions', value: '60' },
            { label: 'Time Limit', value: '105 min' },
            { label: 'Passing Score', value: '62%' },
            { label: 'Exam Fee', value: '$200' },
          ].map(({ label, value }) => (
            <div key={label} className="rounded-lg bg-gray-50 border border-gray-100 p-3 text-center">
              <p className="text-xl font-bold text-salesforce-blue">{value}</p>
              <p className="text-xs text-gray-600 mt-1">{label}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-600 mt-4">
          ADM-201 strongly recommended. Retake fee: $100. Hands-on portal-building experience is essential, this exam cannot be passed through study alone.
        </p>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Experience Cloud Consultant Exam Sections and Weightage</h2>
        <p className="text-sm text-gray-600 mb-4">
          Administration, Setup, and Configuration (25%) is the largest section by a wide margin. Sharing, Visibility &amp; Licensing (17%) is second, and external user sharing is the most commonly failed topic area within it.
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
        <p className="text-sm text-gray-700 mt-4">
          Already have section-level scores from a practice test? Run them through the{' '}
          <Link href="/tools/score-calculator" className="text-salesforce-blue font-medium hover:underline">
            Salesforce Exam Score Calculator
          </Link>{' '}
          to see where you stand against the 62% pass mark.
        </p>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">What Each Section Actually Tests</h2>
        <div className="space-y-5 text-sm text-gray-700">
          <div>
            <p className="font-semibold text-gray-900 mb-1 flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-salesforce-blue" />
              Sharing, Visibility, and Licensing (17%)
            </p>
            <p>A technically complex section. External users (Contacts or Person Accounts in Salesforce) have a different sharing model from internal users: <strong>Sharing Sets</strong> grant access to records based on a field relationship (e.g., a Contact sees all Cases where Cases.Contact = the logged-in user’s Contact record). <strong>High-Volume Portal Users (HVPUs)</strong> are a special external user type for large-scale deployments; they have no role in the role hierarchy, no manual sharing, no peer record access. They can only see records via sharing sets or owned records. <strong>Licence types:</strong> Customer Community (basic external access: Cases, Knowledge), Customer Community Plus (full sharing model, reports, dashboards), Partner Community (full CRM access for partner users). Know which licence supports which features, choosing the wrong licence is a common implementation mistake.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1 flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-salesforce-blue" />
              Administration, Setup, and Configuration (25%)
            </p>
            <p>The single largest section. Experience Cloud site creation: choosing the right template (Customer Service for support portals, Partner Central for partner management, Help Centre for knowledge, Build Your Own LWR for custom builds). Workspaces in Experience Builder: Builder (visual page editing), Content, Moderation, Administration, Analytics. Key settings: enabling self-registration, enabling Topics (for community discussions), enabling Reputation (gamification), and configuring the site’s domain. Know what each Workspace controls, the exam tests which workspace contains which settings.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1 flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-salesforce-blue" />
              User Creation and Authentication (13%)
            </p>
            <p>External user creation: users are created from Contacts (B2B / Partner portals) or Person Accounts (B2C portals). Self-registration: configure a self-registration page so prospects can create their own accounts, the default behaviour creates either a Contact + User or a Lead. <strong>Roles for external users:</strong> unlike internal users (who use role hierarchy), external user roles are scoped to the portal and account hierarchy. Partner Community users have roles (Executive, Manager, User) within an Account hierarchy, this enables data visibility between partner users at the same account.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1 flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-salesforce-blue" />
              Branding, Personalization, and Content (15%)
            </p>
            <p>Experience Builder is the visual drag-and-drop tool for building portal pages. Know the component types: standard Lightning components, custom LWC components, and CMS content components. Navigation menus: configure the main navigation, footer navigation, and user profile menu. Themes: set fonts, colours, and background images for the whole site. Branding sets allow different visual themes for different pages or audiences. Page variants allow showing different page designs based on audience criteria (e.g., show different homepage for logged-in vs guest users).</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1 flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-salesforce-blue" />
              Templates and Themes (10%)
            </p>
            <p>Salesforce CMS is the content management system integrated with Experience Cloud. Key concepts: <strong>Content Workspaces</strong>: containers for CMS content, associated with one or more Experience Cloud sites. <strong>Content Types</strong>: News, Announcement, Image, Document (standard types). You can create custom content types. <strong>Publishing workflow:</strong> draft → published → archived. Content can be shared across multiple Experience Cloud sites from a single CMS workspace. Know the difference between Knowledge Articles (Salesforce Knowledge, for support/self-service) and CMS Content (for marketing/informational content).</p>
          </div>
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">6-Week Experience Cloud Consultant Study Plan</h2>
        <div className="space-y-4 text-sm text-gray-700">
          <p><strong>Week 1: Administration, Setup, and Configuration (25%, the heaviest section):</strong> Create at least two Experience Cloud sites using different templates (Customer Service + one other). Explore each workspace in Experience Builder. Know what Administration, Content, Moderation, and Analytics contain. Set up a custom domain and review moderation settings.</p>
          <p><strong>Week 2: Sharing, Visibility, and Licensing (17%):</strong> Study Sharing Sets, HVPU restrictions, and licence types thoroughly. Configure a Sharing Set in a Developer Edition org and verify record access. Understand the difference between Customer Community and Customer Community Plus licences.</p>
          <p><strong>Week 3: Branding, Personalization, and Content (15%):</strong> Build a custom page in Experience Builder using standard components. Configure navigation menus and page variants. Set up a CMS workspace, create content types, publish content to a site. Understand Knowledge Articles vs CMS Content.</p>
          <p><strong>Week 4: User Creation and Authentication (13%):</strong> Create external users from Contacts. Configure self-registration flows and review authentication providers/SSO. Set up Partner Community account hierarchies and user roles.</p>
          <p><strong>Week 5: Templates and Themes (10%), Experience Cloud Basics (8%), Customization Considerations (7%), and Adoption and Analytics (5%):</strong> Compare all five template types for fit. Review licence and member basics. Note where declarative customization hits its limits. Configure reputation levels and review site analytics dashboards.</p>
          <p><strong>Week 6:</strong> Timed full mock exams. Score 75%+ consistently. Focus revision on administration/setup and sharing model questions; these are the highest-value and hardest questions.</p>
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">How to Approach Experience Cloud Consultant Scenario Questions</h2>
        <ul className="space-y-3 text-sm text-gray-700">
          <li className="flex gap-2">
            <Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />
            <span><strong>Sharing questions:</strong> When a scenario describes external users needing to see a specific set of records related to their Account or Contact, the answer is usually a <strong>Sharing Set</strong>. When the scenario involves peer-to-peer sharing between portal users (one user seeing another user’s records), that requires Customer Community Plus (not Customer Community). HVPUs cannot see other users’ records at all, if the scenario mentions millions of portal users, the answer likely involves HVPUs with sharing sets only.</span>
          </li>
          <li className="flex gap-2">
            <Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />
            <span><strong>Template selection questions:</strong> Customer Service template → self-service support portals (knowledge + case deflection). Partner Central → partner relationship management (leads, opportunities, deal registration). Help Centre → knowledge-only self-service (no case creation). Build Your Own LWR → maximum flexibility for custom digital experiences. When a scenario describes a &ldquo;partner portal&rdquo; with CRM data access, the answer is Partner Central with Partner Community licences.</span>
          </li>
          <li className="flex gap-2">
            <Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />
            <span><strong>Licence type questions:</strong> Customer Community licence → read cases, read knowledge, basic self-service. Customer Community Plus licence → full sharing model, reports, dashboards, peer record access. Partner Community licence → Lead and Opportunity object access, full CRM collaboration. When cost is a constraint in the scenario, Customer Community is always cheaper than Plus or Partner, choose the least-privileged licence that meets the requirement.</span>
          </li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Readiness Check Before You Book</h2>
        <p className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2">
          <Clock className="h-4 w-4" />
          75%+ on 3 timed full mocks (60 Q / 105 min) before booking
        </p>
        <p className="text-sm text-gray-700 mt-3">
          The most common failure mode for Experience Cloud Consultant is insufficient hands-on experience.
          Candidates who have never built a portal from scratch, including setting up external users,
          configuring sharing sets, and building pages in Experience Builder, consistently fail the
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
          <li>Partner Community roles: Executive, Manager, User, scoped to Account hierarchy</li>
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
          <Link href="#practice-questions" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-colors">
            Experience Cloud Practice Questions <ArrowRight className="h-4 w-4" />
          </Link>
          <span className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            Experience Cloud Exam Tips
          </span>
          <Link href="/sales-cloud-vs-experience-cloud-consultant" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            Sales Cloud vs Experience Cloud
          </Link>
        </div>
      </section>

      

      <DifficultyHeatmap slug="experience-cloud" />
      {/* Hub CTA */}
      <div className="bg-salesforce-blue rounded-xl p-8 text-center text-white mt-10">
        <h2 className="text-2xl font-bold mb-2">Ready to Test Your Knowledge?</h2>
        <p className="text-white mb-6">Try the Experience Cloud Consultant free practice exam, scored with full explanations.</p>
        <Link href="#practice-questions"
          className="inline-flex items-center px-6 py-3 bg-white text-salesforce-blue rounded-lg font-semibold hover:bg-blue-50 transition-colors"
        >
          Experience Cloud Consultant Free Practice Exam &rarr;
        </Link>
      </div>
    </div>
  )
}