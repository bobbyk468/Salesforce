/* Ported from /tableau-server-administrator-exam-tips, merged into /certifications/tableau-server-administrator in November 2026.
 * Content is the original page copy. Page chrome (metadata, JSON-LD, H1
 * header) was dropped because the hub page already provides it. */
import Link from '@/components/AppLink'
import { CheckCircle2, Clock, Target, ArrowRight } from 'lucide-react'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import ExamTipsCertLink from '@/components/ExamTipsCertLink'
import { getConceptFaqs } from '@/lib/exam-tips-concept-faqs'
import { buildExamTipsTitle } from '@/lib/seo-title-helpers'
import LastUpdated from '@/components/LastUpdated'


const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const slug = 'tableau-server-administrator'

const pageTitle = buildExamTipsTitle(slug)
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription =
  `Tableau Server Administrator exam tips for ${RELEASE_CURRENT}: server installation, user management, security, performance monitoring.`

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Tableau Server Administrator Exam Tips', url: '/tableau-server-administrator-exam-tips' },
]

export const faqItems = [
  {
    question: 'What is the Tableau Server Administrator exam format?',
    answer: 'The Tableau Server Administrator exam has 60 multiple-choice questions, a 120-minute time limit, a 65% passing score, and a $250 fee. It tests Tableau Server and Tableau Services Manager (TSM) administration: installation, configuration, user and content management, security, performance monitoring, and maintenance tasks.',
  },
  {
    question: 'What are the highest-weight Tableau Server Administrator exam sections?',
    answer: 'Server Configuration and Maintenance (30%) and Security and Permissions (25%) together account for 55% of the exam. Configuring Tableau Services Manager (TSM), managing users and groups, implementing permissions at site and project level, and maintaining server health are the most heavily tested areas.',
  },
  {
    question: 'What is Tableau Services Manager (TSM) and how is it tested?',
    answer: 'TSM (Tableau Services Manager) is the administration interface for Tableau Server, replacing the older tabadmin command-line tool. TSM manages server processes, configuration settings, backup/restore, and licensing. The exam tests TSM web UI and TSM CLI (tsm) commands for common administrative tasks like backup, restore, restart, and configuration changes.',
  },
  {
    question: 'What are the different Tableau Server permission levels and how do they work?',
    answer: 'Tableau Server has permissions at multiple levels: Site (site-level roles: Server Admin, Site Admin, Creator, Explorer, Viewer), Project (content permissions: Can Edit, Can Publish, View), and Workbook/View (individual content permissions). More permissive settings at higher levels can be overridden at lower levels. Understanding the permission hierarchy is essential for this exam.',
  },
  {
    question: 'What concepts do most Tableau Server Administrator candidates get wrong?',
    answer: 'The most commonly misunderstood topics for the Tableau Server Administrator exam are: (1) Sites vs Projects vs Workbooks: The Permission Hierarchy; (2) TSM vs tabcmd vs REST API: Three Admin Interfaces; (3) Extract Refresh: Scheduled vs Manual vs Incremental. Candidates are most confidently wrong on these. Learn the distinctions early to avoid losing marks on questions you expect to get right.',
  },
  ...getConceptFaqs('tableau-server-administrator-exam-tips'),
]

export default function TableauServerAdministratorExamTipsContent() {
  return (
    <div className="mt-12">





      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">At a Glance: What Tableau Server Administrator Covers</h2>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Server installation and configuration</strong>: Installing Tableau Server with TSM, configuring server processes and ports, managing SSL certificates, configuring SMTP for email notifications, and basic multi-node server setup.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>User and content management</strong>: User and group management, site roles (Server Admin, Site Admin, Creator, Explorer, Viewer), projects and permissions, content governance, and using Active Directory or LDAP for user provisioning.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Performance and maintenance</strong>: Server health monitoring, background tasks, extract refresh scheduling, backup and restore procedures, log file management, and troubleshooting common server issues.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Where the Exam Weight Falls</h2>
        <div className="space-y-3 text-sm text-gray-700">
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Server Configuration and Maintenance</span>
            <span className="font-bold text-salesforce-blue ml-4">30%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Security and Permissions</span>
            <span className="font-bold text-salesforce-blue ml-4">25%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">User and Content Management</span>
            <span className="font-bold text-salesforce-blue ml-4">22%</span>
          </div>
          <div className="flex justify-between items-start">
            <span className="font-medium text-gray-900">Performance Monitoring</span>
            <span className="font-bold text-salesforce-blue ml-4">15%</span>
          </div>
          <p className="text-xs text-gray-600 pt-1">Configuration + Security + User Management = 77%. TSM commands and permission hierarchy are the most technically tested areas.</p>
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Scenario Strategy: How to Approach Tableau Server Administrator Questions</h2>
        <p className="text-sm text-gray-700 mb-3">
          Questions describe an administrative scenario and ask which TSM command, permission setting,
          or server configuration addresses it. Read for the specific action required, configuration
          changes, user provisioning, or maintenance tasks, and match to the correct TSM procedure.
        </p>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For TSM questions: tsm configuration set modifies server settings. tsm restart restarts all Tableau Server services. tsm maintenance backup creates a backup. tsm maintenance restore restores from a backup. The exam tests which tsm command to use for specific administrative tasks. Know the common commands.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For permissions questions: deny always overrides allow. A user gets permissions from the most permissive of their direct permissions and group permissions: EXCEPT deny; which always wins. Site role caps what a user can do regardless of content permissions (a Viewer cannot publish even if project permissions allow it).</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For backup/restore questions: always backup before major server changes (upgrades, configuration changes). Backups include the PostgreSQL repository (user data, content metadata) and File Store (extracts, packaged workbooks). The backup process can be scheduled with tsm maintenance backup or triggered manually from TSM web UI.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Readiness Check Before You Book</h2>
        <p className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2">
          <Clock className="h-4 w-4" />
          75%+ on 3 timed full mocks before booking (65% passing score)
        </p>
        <p className="text-sm text-gray-700 mt-3">
          Hands-on Tableau Server administration experience is essential for this exam. Set up a Tableau
          Server trial on a Windows VM and practice TSM commands, user provisioning, and backup/restore
          procedures. The exam tests specific administrative workflows that are very difficult to
          understand without real server access.
        </p>
      </section>


            <section className="rounded-xl border border-amber-100 bg-amber-50 p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-2">3 Concepts That Fail Most Tableau Server Administrator Candidates</h2>
        <p className="text-sm text-gray-600 mb-5">These are not the hardest topics; they are the ones where candidates are <strong>most confidently wrong</strong>. Learn the distinction early.</p>
        <div className="space-y-5">
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">1. Sites vs Projects vs Workbooks: The Permission Hierarchy</h3>
            <p className="text-sm text-gray-700">Sites are the top-level tenant isolation unit (similar to Salesforce Business Units). Projects are folders within a site for organising content. Workbooks contain views and dashboards. Permissions can be set at Site → Project → Workbook level, more specific permissions override broader ones. Candidates set permissions at the Workbook level for all users, the exam expects Project-level permissions for efficient group-based access management.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">2. TSM vs tabcmd vs REST API: Three Admin Interfaces</h3>
            <p className="text-sm text-gray-700">TSM (Tableau Services Manager) is the server administration CLI for server configuration, backups, and restart. tabcmd is the command-line tool for automating content tasks (publish, download, refresh). REST API enables programmatic server management from applications. Candidates use tabcmd for server restarts, the exam expects TSM for infrastructure operations and tabcmd for content automation.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">3. Extract Refresh: Scheduled vs Manual vs Incremental</h3>
            <p className="text-sm text-gray-700">Full Refresh replaces all data in the extract. Incremental Refresh appends only new rows (requires a date/ID field to identify new records). Scheduled refreshes run automatically on a defined schedule. Candidates use Full Refresh for all scheduled refreshes, the exam expects Incremental Refresh for large data sources where only new records change, to reduce refresh time and database load.</p>
          </div>
        </div>
      </section>

<section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Common Questions</h2>
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
        <h2 className="text-xl font-bold text-gray-900 mb-4">More Exam-Prep Guides</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/certifications/tableau-data-analyst" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Tableau Data Analyst Exam Tips</span>
          </Link>
          <Link href="/certifications/tableau-architect" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Tableau Architect Exam Tips</span>
          </Link>
          <Link href="/certifications/administrator" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">ADM-201 Exam Tips</span>
          </Link>
          <Link href="/architect-certification-path" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Architect Certification Path</span>
          </Link>
        </div>
      </section>


      <section className="rounded-xl border border-salesforce-blue/20 bg-salesforce-blue/5 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Start Tableau Server Administrator Prep</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="#practice-questions" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-colors">
            Tableau Server Admin Practice Questions <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/certifications/tableau-architect" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            Tableau Architect Tips
          </Link>
          <Link href="/architect-certification-path" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            Architect Certification Path
          </Link>
        </div>
        <p className="text-xs text-gray-600 mt-4">
          After this exam, consider <Link href="/certifications/tableau-consultant" className="text-salesforce-blue underline">Tableau Consultant</Link> or <Link href="/certifications/tableau-data-analyst" className="text-salesforce-blue underline">Tableau Data Analyst</Link> next.
        </p>
      </section>
    </div>
  )
}