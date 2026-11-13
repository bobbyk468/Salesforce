import type { Metadata } from 'next'
import Link from '@/components/AppLink'
import { CheckCircle2, Clock, ArrowRight, BookOpen, Target } from 'lucide-react'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import LastUpdated from '@/components/LastUpdated'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'

const pageTitle = `How to Become a Salesforce Administrator (${RELEASE_CURRENT} Guide)`
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription =
  `How to become a Salesforce Administrator in ${new Date().getFullYear()}: from zero experience to ADM-201 certified in 8–12 weeks. Step-by-step guide...`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: {
    canonical: `${siteUrl}/how-to-become-salesforce-administrator`,
    languages: { 'en-US': `${siteUrl}/how-to-become-salesforce-administrator`, 'x-default': `${siteUrl}/how-to-become-salesforce-administrator` },
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/how-to-become-salesforce-administrator`,
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
  { name: 'Salesforce Careers', url: '/certifications' },
  { name: 'How to Become a Salesforce Administrator', url: '/how-to-become-salesforce-administrator' },
]

const faqItems = [
  {
    question: 'How long does it take to become a Salesforce Administrator?',
    answer: 'Plan for 8–12 weeks of part-time study (10–15 hours per week) if you are new to Salesforce. Prior CRM or database experience may shorten preparation to 4–6 weeks. The exam takes 105 minutes. After certification, many candidates spend 1–3 months looking for their first Salesforce Admin role.',
  },
  {
    question: 'What qualifications do I need to become a Salesforce Administrator?',
    answer: 'There are no formal education prerequisites for the Salesforce Administrator (ADM-201) exam. You do not need a computer science degree, Salesforce experience, or another certification. You need to pass the exam (68% score), find study resources, and use a Salesforce Developer Edition org for hands-on practice. Admins come from business, sales, marketing, and other non-technical fields.',
  },
  {
    question: 'Is Salesforce administration a good career in 2026?',
    answer: 'Salesforce Administrator can be an entry point to a technology career in 2026. Salesforce has over 150,000 customers globally and reports more demand for certified professionals than available supply. Entry-level Salesforce admins typically earn $60,000–$80,000 USD, while experienced admins with multiple certifications earn $90,000–$130,000. Admin experience can also lead toward consulting, architecture, or development.',
  },
  {
    question: 'Can I learn Salesforce for free?',
    answer: 'Yes. Trailhead (trailhead.salesforce.com), Salesforce’s official learning platform, offers free modules and guided projects. A Salesforce Developer Edition org is also free and gives you a place to practice. The ADM-201 exam costs $200, and retakes cost $100.',
  },
  {
    question: 'What comes after Salesforce Administrator?',
    answer: 'After ADM-201, you could pursue Platform App Builder to build custom apps, Advanced Administrator for deeper admin skills, or Salesforce Business Analyst. Sales Cloud Consultant and Service Cloud Consultant are options for admins moving into consulting. Platform Developer I (PD1) suits people interested in development. The architect track starts with Application Architect.',
  },
]

export default function HowToBecomeSalesforceAdministratorPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/how-to-become-salesforce-administrator" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />

      <header data-lcp-header className="mb-10">
        <p className="inline-flex items-center rounded-full bg-salesforce-blue/10 px-3 py-1 text-sm font-medium text-salesforce-dark mb-4">

      <ContentPageAuthor />
          Updated for {RELEASE_CURRENT}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          How to Become a Salesforce Administrator ({RELEASE_CURRENT}): Complete Step-by-Step Guide
        </h1>
        <LastUpdated />
        <p className="text-lg text-gray-600">
          Salesforce administration is an accessible way to enter a technology role. You do not
          need a technical degree or prior coding experience. This guide lays out how to prepare for ADM-201,
          practice the work, and look for your first admin role.
        </p>
      </header>

      {/* Quick overview */}
      <section className="rounded-xl border border-gray-100 bg-gray-50 p-5 mb-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-600 mb-3">The Path at a Glance</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div>
            <p className="text-2xl font-bold text-salesforce-blue">8–12</p>
            <p className="text-xs text-gray-600 mt-0.5">Weeks to Certified</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-salesforce-blue">$200</p>
            <p className="text-xs text-gray-600 mt-0.5">Exam Fee (only cost)</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-salesforce-blue">$70k+</p>
            <p className="text-xs text-gray-600 mt-0.5">Avg Entry Salary (US)</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-salesforce-blue">0</p>
            <p className="text-xs text-gray-600 mt-0.5">Prerequisites Required</p>
          </div>
        </div>
      </section>

      {/* Step by step */}
      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Step-by-Step: From Zero to Salesforce Admin</h2>
        <div className="space-y-6 text-sm text-gray-700">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-salesforce-blue text-white flex items-center justify-center font-bold text-sm">1</div>
            <div>
              <p className="font-semibold text-gray-900 mb-1">Create a Free Salesforce Developer Edition Org</p>
              <p>Visit developer.salesforce.com/signup and create a free Developer Edition org. Use this Salesforce environment to try the tasks you study for the ADM-201 exam. Practice configuring the platform as you learn; reading about a feature alone may not prepare you to recognize how it works in a scenario.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-salesforce-blue text-white flex items-center justify-center font-bold text-sm">2</div>
            <div>
              <p className="font-semibold text-gray-900 mb-1">Complete Salesforce Trailhead Admin Trails (Free)</p>
              <p>Trailhead (trailhead.salesforce.com) is Salesforce’s free learning platform. Start with the &ldquo;Admin Beginner&rdquo; trail, continue to &ldquo;Admin Intermediate,&rdquo; then complete &ldquo;Prepare for Your Salesforce Administrator Credential.&rdquo; The modules cover ADM-201 topics and include exercises in a Trailhead Playground org.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-salesforce-blue text-white flex items-center justify-center font-bold text-sm">3</div>
            <div>
              <p className="font-semibold text-gray-900 mb-1">Study the 7 ADM-201 Exam Sections by Weight</p>
              <p>The ADM-201 exam has 8 sections. Use their weights to plan your study time. Data and Analytics Management is 17%; Configuration and Setup, Object Manager and Lightning App Builder, and Automation are 15% each. Together, those four sections make up 62% of the exam. Sales and Marketing, Service and Support, and Productivity and Collaboration are 10% each; Agentforce is 8%.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-salesforce-blue text-white flex items-center justify-center font-bold text-sm">4</div>
            <div>
              <p className="font-semibold text-gray-900 mb-1">Practice With Scenario-Based Mock Questions</p>
              <p>ADM-201 asks you to apply Salesforce knowledge to business situations, such as choosing what an administrator should do to meet a company’s needs. Practice answering scenario questions with a time limit. Use practice tests to find gaps, then review those topics in Trailhead or your org. Aim for 75%+ on 3 full mock exams before booking. Try the <Link href="/certifications/administrator" className="text-salesforce-blue underline">free ADM-201 practice test</Link> to check your readiness.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-salesforce-blue text-white flex items-center justify-center font-bold text-sm">5</div>
            <div>
              <p className="font-semibold text-gray-900 mb-1">Book and Pass the ADM-201 Exam</p>
              <p>Register through Trailhead Academy (trailheadacademy.salesforce.com). Choose an online proctored exam at home, delivered via Pearson VUE (OnVUE) and requiring a webcam, quiet room, and verified ID, or book at a test center. The exam has 60 scored questions plus up to five unscored questions, lasts 105 minutes, and requires a 68% passing score. You see the result after submitting. If you do not pass, you can retake after 1 day for $100.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-salesforce-blue text-white flex items-center justify-center font-bold text-sm">6</div>
            <div>
              <p className="font-semibold text-gray-900 mb-1">Build a Portfolio and Apply for Roles</p>
              <p>After passing ADM-201, create a portfolio in a Developer Edition org with examples such as custom objects, flows, and reports. Meet other professionals through the Trailblazer Community, local user groups, and LinkedIn groups. Add your certification badge to LinkedIn and apply for &ldquo;Junior Salesforce Administrator&rdquo; and &ldquo;Salesforce Administrator&rdquo; roles. &ldquo;Salesforce Support Analyst&rdquo; can also be an entry role. Choose a next certification, such as App Builder or Service Cloud Consultant, when it supports your goals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who it is for */}
      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Who Becomes a Salesforce Administrator?</h2>
        <p className="text-sm text-gray-700 mb-3">People move into Salesforce administration from many fields, including work outside IT. These backgrounds can provide useful experience:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700">
          <div className="flex gap-2">
            <CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" />
            <span><strong>Sales / Account Management</strong>: experience with CRM from a user’s perspective can help with admin work</span>
          </div>
          <div className="flex gap-2">
            <CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" />
            <span><strong>Marketing / Marketing Operations</strong>: campaign management, lead tracking, and data quality are relevant to Salesforce administration</span>
          </div>
          <div className="flex gap-2">
            <CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" />
            <span><strong>Business Analyst / Operations</strong>: process documentation and requirements gathering carry over to admin work</span>
          </div>
          <div className="flex gap-2">
            <CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" />
            <span><strong>Customer Service / Support</strong>: familiarity with cases, queues, and service processes helps with ADM-201 topics</span>
          </div>
          <div className="flex gap-2">
            <CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" />
            <span><strong>Project Management</strong>: workflow, approvals, and team coordination relate to Salesforce process automation</span>
          </div>
          <div className="flex gap-2">
            <CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" />
            <span><strong>Non-technical roles</strong>: coding is not required, while logical thinking and attention to detail are useful</span>
          </div>
        </div>
      </section>

      {/* Study resources */}
      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Free Study Resources</h2>
        <div className="space-y-3 text-sm text-gray-700">
          <div className="flex gap-3">
            <BookOpen className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />
            <div>
              <p className="font-semibold text-gray-900">Salesforce Trailhead</p>
              <p>Use this free official platform to complete the &ldquo;Admin Beginner&rdquo; and &ldquo;Admin Intermediate&rdquo; trails. The lessons include hands-on challenges and cover exam topics. It is a good place to begin.</p>
            </div>
          </div>
          <div className="flex gap-3">
            <BookOpen className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />
            <div>
              <p className="font-semibold text-gray-900">Developer Edition Org</p>
              <p>Create a free Salesforce environment at developer.salesforce.com/signup. Try each feature as you study so you can see how it works in practice.</p>
            </div>
          </div>
          <div className="flex gap-3">
            <BookOpen className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />
            <div>
              <p className="font-semibold text-gray-900">Salesforce Help Documentation</p>
              <p>Salesforce Help is free. When Trailhead introduces a topic, use the related Help article to learn more. This is useful for the sharing model (OWD and sharing rules) and Flow Builder.</p>
            </div>
          </div>
          <div className="flex gap-3">
            <BookOpen className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />
            <div>
              <p className="font-semibold text-gray-900">Free Practice Questions</p>
              <p>Use scenario-based tests to find topics that need more study. Try our free <Link href="/certifications/administrator#practice-questions" className="text-salesforce-blue underline">Salesforce Administrator practice questions</Link>, aligned with the {RELEASE_CURRENT} exam weights.</p>
            </div>
          </div>
          <div className="flex gap-3">
            <BookOpen className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />
            <div>
              <p className="font-semibold text-gray-900">Salesforce Trailblazer Community</p>
              <p>Visit trailblazers.salesforce.com to ask questions, find a study group, and meet other candidates. The &ldquo;Certification&rdquo; group includes discussions about ADM-201 preparation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Admin career path */}
      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Career Path After ADM-201</h2>
        <div className="space-y-3 text-sm text-gray-700">
          <p>After ADM-201, choose a next step that matches the work you want to do:</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-2">
            <div className="rounded-lg bg-gray-50 border border-gray-100 p-4">
              <p className="font-semibold text-salesforce-dark mb-2">Admin Track</p>
              <ul className="space-y-1 text-xs">
                <li className="flex gap-1.5"><ArrowRight className="h-3.5 w-3.5 mt-0.5 text-salesforce-blue flex-shrink-0" />ADM-201 ✓</li>
                <li className="flex gap-1.5"><ArrowRight className="h-3.5 w-3.5 mt-0.5 text-salesforce-blue flex-shrink-0" />Platform App Builder</li>
                <li className="flex gap-1.5"><ArrowRight className="h-3.5 w-3.5 mt-0.5 text-salesforce-blue flex-shrink-0" />Advanced Administrator</li>
                <li className="flex gap-1.5"><ArrowRight className="h-3.5 w-3.5 mt-0.5 text-salesforce-blue flex-shrink-0" />Business Analyst</li>
              </ul>
            </div>
            <div className="rounded-lg bg-gray-50 border border-gray-100 p-4">
              <p className="font-semibold text-salesforce-dark mb-2">Consultant Track</p>
              <ul className="space-y-1 text-xs">
                <li className="flex gap-1.5"><ArrowRight className="h-3.5 w-3.5 mt-0.5 text-salesforce-blue flex-shrink-0" />ADM-201 ✓</li>
                <li className="flex gap-1.5"><ArrowRight className="h-3.5 w-3.5 mt-0.5 text-salesforce-blue flex-shrink-0" />Sales Cloud Consultant</li>
                <li className="flex gap-1.5"><ArrowRight className="h-3.5 w-3.5 mt-0.5 text-salesforce-blue flex-shrink-0" />Service Cloud Consultant</li>
                <li className="flex gap-1.5"><ArrowRight className="h-3.5 w-3.5 mt-0.5 text-salesforce-blue flex-shrink-0" />Experience Cloud Consultant</li>
              </ul>
            </div>
            <div className="rounded-lg bg-gray-50 border border-gray-100 p-4">
              <p className="font-semibold text-salesforce-dark mb-2">Developer Track</p>
              <ul className="space-y-1 text-xs">
                <li className="flex gap-1.5"><ArrowRight className="h-3.5 w-3.5 mt-0.5 text-salesforce-blue flex-shrink-0" />ADM-201 ✓</li>
                <li className="flex gap-1.5"><ArrowRight className="h-3.5 w-3.5 mt-0.5 text-salesforce-blue flex-shrink-0" />Platform App Builder</li>
                <li className="flex gap-1.5"><ArrowRight className="h-3.5 w-3.5 mt-0.5 text-salesforce-blue flex-shrink-0" />Platform Developer I (PD1)</li>
                <li className="flex gap-1.5"><ArrowRight className="h-3.5 w-3.5 mt-0.5 text-salesforce-blue flex-shrink-0" />Platform Developer II (PD2)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Exam tips */}
      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Common Mistakes That Cause First-Time Failures</h2>
        <ul className="space-y-3 text-sm text-gray-700">
          <li className="flex gap-2">
            <Target className="h-4 w-4 mt-0.5 text-red-500 flex-shrink-0" />
          <span><strong>Studying theory without practice.</strong> Read about OWD settings, then configure them and check access with a second user. Try the features in your org as part of your study routine.</span>
          </li>
          <li className="flex gap-2">
            <Target className="h-4 w-4 mt-0.5 text-red-500 flex-shrink-0" />
          <span><strong>Skipping the security model.</strong> Review OWD settings, role hierarchy, profiles, permission sets, and sharing rules. Remember the difference: roles control record visibility, while profiles control object access. Both are tested.</span>
          </li>
          <li className="flex gap-2">
            <Target className="h-4 w-4 mt-0.5 text-red-500 flex-shrink-0" />
          <span><strong>Booking before you are ready.</strong> Aim for 75%+ on 3 full mock exams. The 68% passing score may seem manageable, but exam scenarios can be challenging. Some candidates score 65–67%, just below passing, when they book too early.</span>
          </li>
          <li className="flex gap-2">
            <Target className="h-4 w-4 mt-0.5 text-red-500 flex-shrink-0" />
          <span><strong>Skipping lower-weight sections.</strong> Productivity and Collaboration is 10%, or about six questions. Review every section, then use the final week for a broad recap.</span>
          </li>
        </ul>
      </section>

      {/* Benchmark */}
      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">When Are You Ready to Book?</h2>
        <p className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2">
          <Clock className="h-4 w-4" />
          80%+ on 3 timed full mocks (60 scored questions / 105 min) on separate days
        </p>
        <p className="text-sm text-gray-700 mt-3">
          Once you meet this benchmark consistently, book the exam for 3–5 days later so the material is still fresh.
          If you are below the benchmark, use your mock results to identify the weakest sections and spend another week
          reviewing those topics.
        </p>
      </section>

      {/* FAQ */}
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

      {/* Related links */}
      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Related Guides</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/certifications/administrator" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">ADM-201 Study Guide</span>
          </Link>
          <Link href="/certifications/administrator" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">ADM-201 Exam Tips {RELEASE_CURRENT}</span>
          </Link>
          <Link href="/admin-certification-path" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Admin Certification Path</span>
          </Link>
          <Link href="/salesforce-certification-salary" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Salesforce Certification Salary</span>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-xl border border-salesforce-blue/20 bg-salesforce-blue/5 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Start Your Admin Journey Today</h2>
        <p className="text-sm text-gray-700 mb-4">
          Use free ADM-201 practice questions, a study guide, and exam tips as you prepare:
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/certifications/administrator#practice-questions"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-colors"
          >
            Free ADM-201 Practice Questions
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/certifications/administrator"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            ADM-201 Study Guide
          </Link>
          <Link
            href="/admin-certification-path"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            Full Admin Cert Path
          </Link>
        </div>
      </section>
    </div>
  )
}
