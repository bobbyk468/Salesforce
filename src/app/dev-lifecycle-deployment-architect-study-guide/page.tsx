import type { Metadata } from 'next'
import Link from 'next/link'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const pageTitle = `Dev Lifecycle & Deployment Architect Study Guide (${RELEASE_CURRENT})`
const pageDescription = `Dev Lifecycle & Deployment Architect study guide: org strategy, CI/CD, packaging, release management. $400, 60 questions, ~68% passing.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/dev-lifecycle-deployment-architect-study-guide` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/dev-lifecycle-deployment-architect-study-guide`,
    images: [{ url: `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`, alt: pageTitle }],
  },
  keywords: `salesforce dev lifecycle deployment architect study guide, DLDA certification 2026, salesforce CI/CD exam prep, org strategy salesforce architect`,
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Dev Lifecycle & Deployment Architect Study Guide', url: '/dev-lifecycle-deployment-architect-study-guide' },
]

const examSections = [
  { name: 'Environment Strategy', weight: 25, note: 'Sandbox types (Developer, Developer Pro, Partial, Full) — when to use each. Scratch orgs: definition-driven, short-lived, source-driven. Hub org and scratch org lifecycle. Org strategy for ISV partners (packaging orgs, subscriber orgs) vs enterprise customers. Sandbox refresh strategy and data masking.' },
  { name: 'Release Management', weight: 25, note: 'Release management approaches: change sets (UI-based, declarative), Metadata API (XML-based, scriptable), Salesforce CLI/SFDX (source-driven). Comparing change sets vs SFDX for team-based development. Release branching strategies: GitFlow, trunk-based development. Deployment order and dependency management.' },
  { name: 'Team-Based Development', weight: 20, note: 'Source control with Git: branching, pull requests, merge strategies. Developer isolation using scratch orgs. Merging metadata: conflict resolution, metadata types that conflict (profiles, permission sets, custom labels). Code review practices and pull request workflows in Salesforce projects. Package development model vs org development model.' },
  { name: 'CI/CD & Automation', weight: 18, note: 'CI/CD pipeline stages: build, test, deploy. Tools: Salesforce CLI, Gearset, Copado, GitHub Actions, Jenkins, CircleCI for Salesforce. Running Apex tests in CI: minimum 75% coverage requirement, test selection strategies. Static code analysis: PMD, Salesforce Code Analyzer. Automated deployment validation.' },
  { name: 'Governance & ALM', weight: 12, note: 'Application Lifecycle Management (ALM) tooling: Jira, ADO, ServiceNow for work item tracking. Change advisory boards (CAB) and release governance. Managing unpackaged vs packaged metadata. 1st-Generation Packaging (1GP) vs 2nd-Generation Packaging (2GP): differences, use cases, namespace management. ISV partner program requirements.' },
]

const faqItems = [
  {
    question: 'What is the Salesforce Dev Lifecycle & Deployment Architect certification?',
    answer: 'The Dev Lifecycle & Deployment Architect (DLDA) certification validates expertise in designing and implementing Salesforce development processes — including org strategy, environment management, CI/CD pipelines, release management, and team-based development practices. The exam has 60 questions, ~110-minute time limit, ~68% passing score, and a $400 fee. It is part of the System Architect credential path.',
  },
  {
    question: 'What is the difference between change sets and Salesforce CLI/SFDX?',
    answer: 'Change sets are a UI-based deployment tool built into Salesforce Setup — easy to use but limited: no version control integration, no automation, no rollback, and limited metadata type support. Salesforce CLI (SFDX) is a source-driven command-line tool that works with Git, supports scratch orgs, enables CI/CD pipelines, and covers all metadata types. For enterprise projects and ISV development, SFDX is the recommended approach. Change sets are still acceptable for simple admin-driven deployments.',
  },
  {
    question: 'What are scratch orgs and when should I use them?',
    answer: 'Scratch orgs are temporary, disposable Salesforce environments created from a configuration file (project-scratch-def.json) using Salesforce CLI. They are short-lived (up to 30 days), source-driven, and ideal for developer isolation in CI/CD pipelines. Each developer or CI build gets a fresh org, eliminating merge conflicts from shared sandbox environments. Use scratch orgs for: ISV/AppExchange development, CI/CD pipelines, developer isolation in team projects. Use sandboxes when you need persistent data, production-matching configurations, or integration testing.',
  },
  {
    question: 'What is the difference between 1GP and 2GP packaging?',
    answer: 'First-Generation Packaging (1GP) is the original ISV packaging model — metadata is locked to a namespace org, packages are managed, and releases are uploaded manually. Second-Generation Packaging (2GP) is the modern model — packages are created from source control using Salesforce CLI, support multiple packages in one namespace, enable unlocked packages (no namespace requirement), and integrate natively with CI/CD. For new ISV projects, 2GP is strongly recommended. The exam tests when each is appropriate and how they differ in namespace handling.',
  },
  {
    question: 'What CI/CD tools work with Salesforce?',
    answer: 'Salesforce supports multiple CI/CD approaches: Salesforce CLI scripts in any CI platform (GitHub Actions, CircleCI, Jenkins, Azure DevOps, Bitbucket Pipelines); native Salesforce tools like Salesforce DevOps Center (built into Setup); and third-party platforms like Gearset (most popular in enterprise), Copado (enterprise ALM + DevOps), and AutoRABIT. The exam tests conceptual CI/CD pipeline design and the role of each stage — it does not require tool-specific configuration knowledge.',
  },
]

export default function DevLifecycleDeploymentArchitectStudyGuidePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/dev-lifecycle-deployment-architect-study-guide" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />

      <div data-lcp-header className="mb-10">
        <div className="inline-flex items-center gap-2 bg-salesforce-blue/10 text-salesforce-blue text-sm font-semibold px-3 py-1 rounded-full mb-4">
          <span>Study Guide</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          Salesforce Dev Lifecycle &amp; Deployment Architect Study Guide ({RELEASE_CURRENT})
        </h1>
        <p className="text-lg text-gray-600">
          Your complete guide to passing the DLDA exam — org strategy, CI/CD pipelines, scratch orgs, packaging, release management, and team-based development.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
        {[
          { label: 'Questions', value: '60' },
          { label: 'Time Limit', value: '110 min' },
          { label: 'Passing Score', value: '~68%' },
          { label: 'Exam Fee', value: '$400' },
        ].map((stat) => (
          <div key={stat.label} className="bg-white rounded-xl border border-gray-100 p-4 text-center shadow-sm">
            <div className="text-2xl font-bold text-salesforce-blue">{stat.value}</div>
            <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Exam Sections &amp; Weightings</h2>
        <div className="space-y-4">
          {examSections.map((section) => (
            <div key={section.name}>
              <div className="flex justify-between text-sm mb-1">
                <span className="font-medium text-gray-800">{section.name}</span>
                <span className="text-salesforce-blue font-semibold">{section.weight}%</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div className="bg-salesforce-blue h-2 rounded-full" style={{ width: `${section.weight * 3.3}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">What Each Section Tests</h2>
        <div className="space-y-4">
          {examSections.map((section) => (
            <div key={section.name} className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 mt-0.5 inline-flex items-center justify-center w-7 h-7 rounded-full bg-salesforce-blue/10 text-salesforce-blue text-xs font-bold">{section.weight}%</span>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{section.name}</h3>
                  <p className="text-sm text-gray-600">{section.note}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">10-Week Study Plan</h2>
        <div className="space-y-3 text-sm">
          {[
            { week: 'Week 1', focus: 'Sandbox types — compare Developer, Developer Pro, Partial Copy, and Full sandbox: storage limits, data, metadata, refresh frequency, and use cases for each.' },
            { week: 'Week 2', focus: 'Scratch orgs — set up a Dev Hub, create a scratch org from a definition file, deploy metadata from source control, and delete the scratch org. Understand the scratch org lifecycle.' },
            { week: 'Week 3', focus: 'Salesforce CLI & SFDX — install SFDX, connect to an org, retrieve and deploy metadata, run Apex tests from the command line. Compare with the Metadata API.' },
            { week: 'Week 4', focus: 'Change sets vs SFDX — build a change set deployment in a sandbox, then replicate the same deployment with SFDX. Understand the limitations of change sets for team environments.' },
            { week: 'Week 5', focus: 'Git branching strategies — study GitFlow (feature, develop, release, main branches) and trunk-based development. Understand which strategy suits Salesforce project team sizes.' },
            { week: 'Week 6', focus: 'CI/CD pipeline design — sketch a full CI/CD pipeline: source control trigger, static analysis, scratch org creation, metadata deploy, Apex test run, deploy to staging, deploy to production.' },
            { week: 'Week 7', focus: 'Packaging — understand the differences between unpackaged metadata, unlocked packages, managed 1GP, and managed 2GP. Know when each is appropriate. Practice creating an unlocked package.' },
            { week: 'Week 8', focus: 'Release governance — study change advisory boards (CAB), release calendars, deployment windows, and rollback strategies. Understand how to handle failed deployments.' },
            { week: 'Week 9', focus: 'ALM tools — understand the role of Jira, Copado, Gearset, Salesforce DevOps Center in a Salesforce project. Know what functionality each category of tool provides.' },
            { week: 'Week 10', focus: 'Full mock exams. Environment Strategy (25%) + Release Management (25%) = 50% of the exam. Master sandbox vs scratch org decision scenarios. Aim for 75%+ before booking.' },
          ].map((item) => (
            <div key={item.week} className="flex gap-3">
              <span className="flex-shrink-0 font-semibold text-salesforce-blue w-16">{item.week}</span>
              <span className="text-gray-700">{item.focus}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Scenario Strategy Tips</h2>
        <ul className="space-y-3 text-sm text-gray-700">
          <li className="flex gap-2"><span className="text-salesforce-blue font-bold flex-shrink-0">1.</span><span><strong>Sandbox vs scratch org decision:</strong> Use scratch orgs for short-lived, isolated developer work and CI/CD pipelines. Use sandboxes for persistent integration testing, UAT, and environments that need production-matching data or configuration.</span></li>
          <li className="flex gap-2"><span className="text-salesforce-blue font-bold flex-shrink-0">2.</span><span><strong>SFDX over change sets for teams:</strong> Any scenario with multiple developers, version control requirements, or CI/CD should recommend SFDX/Salesforce CLI over change sets. Change sets are appropriate only for simple admin-driven deployments without version control.</span></li>
          <li className="flex gap-2"><span className="text-salesforce-blue font-bold flex-shrink-0">3.</span><span><strong>2GP for new ISV development:</strong> Any new AppExchange product or managed package should use 2nd-Generation Packaging. 1GP is legacy — the exam tests when 2GP is the correct recommendation and what limitations still apply (e.g., namespace requirements for managed 2GP).</span></li>
          <li className="flex gap-2"><span className="text-salesforce-blue font-bold flex-shrink-0">4.</span><span><strong>75% Apex test coverage is a minimum:</strong> The exam will reference the Salesforce requirement that at least 75% of Apex code must be covered by tests for production deployment. In CI/CD, run tests on every commit and fail the pipeline if coverage drops below 75%.</span></li>
        </ul>
      </div>

      <div className="bg-salesforce-blue/5 rounded-xl border border-salesforce-blue/20 p-5 mb-8">
        <h2 className="text-lg font-bold text-gray-900 mb-2">Mock Exam Benchmark</h2>
        <p className="text-sm text-gray-700">Aim for <strong>75%+ on practice exams</strong> before scheduling. DLDA is conceptual and scenario-driven — questions describe a team&apos;s development situation and ask for the best environment strategy, deployment tool, or CI/CD design. Hands-on experience with Salesforce CLI and Git significantly improves performance.</p>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Top 10 Concepts to Review</h2>
        <ol className="space-y-2 text-sm text-gray-700 list-decimal list-inside">
          <li>Sandbox types: storage, data, metadata, refresh frequency, use cases</li>
          <li>Scratch orgs: Dev Hub, definition file, lifecycle, vs sandboxes</li>
          <li>Change sets vs Metadata API vs Salesforce CLI — trade-offs for each</li>
          <li>GitFlow vs trunk-based development for Salesforce teams</li>
          <li>CI/CD pipeline stages and Salesforce-specific considerations</li>
          <li>Apex test coverage: 75% minimum, test selection in CI</li>
          <li>Static code analysis tools: PMD, Salesforce Code Analyzer</li>
          <li>Unlocked packages vs managed 1GP vs managed 2GP</li>
          <li>2GP: namespace options, project-level vs package-level namespace</li>
          <li>DevOps Center, Gearset, Copado — roles in Salesforce ALM</li>
        </ol>
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

      <div className="bg-salesforce-blue rounded-xl p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-2">Ready to Practice?</h2>
        <p className="text-blue-100 mb-6">Free Dev Lifecycle &amp; Deployment Architect practice questions covering all 5 exam sections.</p>
        <Link
          href="/certifications/dev-lifecycle-deployment-architect"
          className="inline-flex items-center px-6 py-3 bg-white text-salesforce-blue rounded-lg font-semibold hover:bg-blue-50 transition-colors"
        >
          Start Free Practice Questions
        </Link>
      </div>
    </div>
  )
}
