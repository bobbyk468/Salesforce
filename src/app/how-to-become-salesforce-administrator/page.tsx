import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, Clock, ArrowRight, BookOpen, Target } from 'lucide-react'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'

const pageTitle = `How to Become a Salesforce Administrator (${RELEASE_CURRENT} Guide)`
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription =
  `How to become a Salesforce Administrator in ${new Date().getFullYear()}: from zero experience to ADM-201 certified in 8–12 weeks. Step-by-step guide...`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/how-to-become-salesforce-administrator` },
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
  keywords:
    `how to become Salesforce administrator, Salesforce admin career path, how to get Salesforce certified, ADM-201 requirements, Salesforce admin salary, Salesforce certification for beginners`,
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'How to Become a Salesforce Administrator', url: '/how-to-become-salesforce-administrator' },
]

const faqItems = [
  {
    question: 'How long does it take to become a Salesforce Administrator?',
    answer: 'From no prior Salesforce experience to ADM-201 certified, expect 8–12 weeks of part-time study (10–15 hours per week). Candidates with prior CRM or database experience often complete it in 4–6 weeks. The exam itself takes 105 minutes. Most people take 1–3 months to find their first Salesforce Admin role after certification.',
  },
  {
    question: 'What qualifications do I need to become a Salesforce Administrator?',
    answer: 'There are no formal educational prerequisites for the Salesforce Administrator (ADM-201) exam. You do not need a computer science degree, prior Salesforce experience, or any other certification. The entry requirements are: pass the ADM-201 exam (65% score), access to study resources, and a Salesforce Developer Edition org for hands-on practice. Many successful admins come from business, sales, marketing, and non-technical backgrounds.',
  },
  {
    question: 'Is Salesforce administration a good career in 2026?',
    answer: 'Yes — Salesforce Administrator remains one of the strongest entry-level tech careers in 2026. Salesforce has over 150,000 customers globally and consistently reports more job demand than supply for certified professionals. Entry-level Salesforce admins typically earn $60,000–$80,000 USD, and experienced admins with multiple certifications earn $90,000–$130,000. The role also provides a natural path into Salesforce consulting, architecture, or development.',
  },
  {
    question: 'Can I learn Salesforce for free?',
    answer: 'Yes — the core Salesforce training resources are free. Trailhead (trailhead.salesforce.com) is Salesforce&apos;s official free learning platform with hundreds of modules and guided projects. A Salesforce Developer Edition org is also free and gives you a full Salesforce environment to practice in. The only cost is the $200 ADM-201 exam fee (retakes are $100).',
  },
  {
    question: 'What comes after Salesforce Administrator?',
    answer: 'After ADM-201, the most common next certifications are: Platform App Builder (same admin track, deeper customisation), Advanced Administrator (advanced admin skills, requires ADM-201 first), and Salesforce Business Analyst. Admins who want to move into consulting pursue Sales Cloud Consultant or Service Cloud Consultant. Those interested in development take Platform Developer I (PD1). The architect track starts with Application Architect.',
  },
]

export default function HowToBecomeSalesforceAdministratorPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/how-to-become-salesforce-administrator" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />

      <header data-lcp-header className="mb-10">
        <p className="inline-flex items-center rounded-full bg-salesforce-blue/10 px-3 py-1 text-sm font-medium text-salesforce-dark mb-4">
          Updated for {RELEASE_CURRENT}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          How to Become a Salesforce Administrator ({RELEASE_CURRENT}): Complete Step-by-Step Guide
        </h1>
        <p className="text-lg text-gray-600">
          Salesforce Administrator is one of the most accessible tech career paths available in {new Date().getFullYear()}. You do not
          need a technical degree, prior coding experience, or expensive bootcamps. This guide walks you from zero
          to ADM-201 certified — and then into your first role.
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
              <p>Go to developer.salesforce.com/signup and create a free Developer Edition org. This is a full Salesforce environment that never expires — you will use it to practice every topic in the ADM-201 exam. Having hands-on access is the single most important factor in passing. Candidates who only study theory and do not practice in a real org fail at a much higher rate.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-salesforce-blue text-white flex items-center justify-center font-bold text-sm">2</div>
            <div>
              <p className="font-semibold text-gray-900 mb-1">Complete Salesforce Trailhead Admin Trails (Free)</p>
              <p>Trailhead (trailhead.salesforce.com) is Salesforce&apos;s official learning platform — free, gamified, and comprehensive. Start with the &ldquo;Admin Beginner&rdquo; trail, then &ldquo;Admin Intermediate.&rdquo; Complete the &ldquo;Prepare for Your Salesforce Administrator Credential&rdquo; trail. These modules are directly aligned to the ADM-201 exam and include hands-on challenges in a Trailhead Playground org.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-salesforce-blue text-white flex items-center justify-center font-bold text-sm">3</div>
            <div>
              <p className="font-semibold text-gray-900 mb-1">Study the 7 ADM-201 Exam Sections by Weight</p>
              <p>The ADM-201 exam has 7 sections. Study them in order of weight, not in the order Salesforce lists them. Start with Configuration &amp; Setup (20%) and Object Manager/App Builder (20%) — together they are 40% of the exam. Then Workflow &amp; Process Automation (16%), Data Management (14%), and Sales/Service/Productivity (30% combined). Use our <Link href="/adm-201-study-guide" className="text-salesforce-blue underline">ADM-201 study guide</Link> for deep coverage of each section.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-salesforce-blue text-white flex items-center justify-center font-bold text-sm">4</div>
            <div>
              <p className="font-semibold text-gray-900 mb-1">Practice With Scenario-Based Mock Questions</p>
              <p>ADM-201 is a scenario-based exam — it asks &ldquo;a company needs X, what should the administrator do?&rdquo; rather than pure knowledge questions. Reading documentation is not enough — you need to practise answering scenario questions under time pressure. Use free practice tests to identify your weak areas, then return to Trailhead or hands-on practice to fill gaps. Score 75%+ on 3 full mock exams before booking. Use our <Link href="/certifications/administrator-practice-test" className="text-salesforce-blue underline">free ADM-201 practice test</Link> to benchmark your readiness.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-salesforce-blue text-white flex items-center justify-center font-bold text-sm">5</div>
            <div>
              <p className="font-semibold text-gray-900 mb-1">Book and Pass the ADM-201 Exam</p>
              <p>Register through Webassessor (webassessor.com). You can take the exam online proctored from home (requires a webcam, quiet room, and verified ID) or at a physical test centre. The exam is 65 questions, 105 minutes, 65% passing score. The result is shown immediately after you submit. If you do not pass, you can retake after 1 day — the retake costs $100.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-salesforce-blue text-white flex items-center justify-center font-bold text-sm">6</div>
            <div>
              <p className="font-semibold text-gray-900 mb-1">Build a Portfolio and Apply for Roles</p>
              <p>After passing ADM-201: create a Salesforce Developer Edition org showcasing your skills (custom objects, flows, reports). Join the Salesforce Trailblazer Community, local user groups, and LinkedIn groups. Update your LinkedIn with your Salesforce Administrator certification badge. Apply for &ldquo;Junior Salesforce Administrator&rdquo; or &ldquo;Salesforce Administrator&rdquo; roles. Many organisations also hire for &ldquo;Salesforce Support Analyst&rdquo; roles that are a strong entry point. Plan your next certification (App Builder or Service Cloud Consultant) to demonstrate a growth trajectory.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who it is for */}
      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Who Becomes a Salesforce Administrator?</h2>
        <p className="text-sm text-gray-700 mb-3">Salesforce Administration is a career transition path for professionals from many backgrounds — not just IT. Common backgrounds of successful Salesforce Admins:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700">
          <div className="flex gap-2">
            <CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" />
            <span><strong>Sales / Account Management</strong> — understands CRM from the user side, transition into admin is natural</span>
          </div>
          <div className="flex gap-2">
            <CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" />
            <span><strong>Marketing / Marketing Operations</strong> — campaign management, lead tracking, data hygiene — all Salesforce admin territory</span>
          </div>
          <div className="flex gap-2">
            <CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" />
            <span><strong>Business Analyst / Operations</strong> — process documentation and requirements gathering translate directly to admin skills</span>
          </div>
          <div className="flex gap-2">
            <CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" />
            <span><strong>Customer Service / Support</strong> — case management, queues, and service processes are core ADM-201 topics</span>
          </div>
          <div className="flex gap-2">
            <CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" />
            <span><strong>Project Management</strong> — workflow, approvals, and team coordination map directly to Salesforce process automation</span>
          </div>
          <div className="flex gap-2">
            <CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" />
            <span><strong>Non-technical roles</strong> — no coding is required; logical thinking and attention to detail are the primary skill requirements</span>
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
              <p>Free official learning platform. Complete the &ldquo;Admin Beginner&rdquo; and &ldquo;Admin Intermediate&rdquo; trails. Gamified, includes hands-on challenges. Directly aligned with exam content. Start here first.</p>
            </div>
          </div>
          <div className="flex gap-3">
            <BookOpen className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />
            <div>
              <p className="font-semibold text-gray-900">Developer Edition Org</p>
              <p>Free full Salesforce environment. Sign up at developer.salesforce.com/signup. Use it to practise everything you learn — do not just read, configure it yourself. Muscle memory from hands-on practice is the fastest path to passing.</p>
            </div>
          </div>
          <div className="flex gap-3">
            <BookOpen className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />
            <div>
              <p className="font-semibold text-gray-900">Salesforce Help Documentation</p>
              <p>The official Salesforce Help docs are free and comprehensive. When Trailhead explains a concept, go deeper by reading the corresponding Help article. This is especially useful for sharing model (OWD, sharing rules) and Flow Builder topics.</p>
            </div>
          </div>
          <div className="flex gap-3">
            <BookOpen className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />
            <div>
              <p className="font-semibold text-gray-900">Free Practice Questions</p>
              <p>Scenario-based practice tests expose your weak areas before the real exam. Use our free <Link href="/certifications/administrator" className="text-salesforce-blue underline">Salesforce Administrator practice questions</Link> — aligned to {RELEASE_CURRENT} exam weightage.</p>
            </div>
          </div>
          <div className="flex gap-3">
            <BookOpen className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />
            <div>
              <p className="font-semibold text-gray-900">Salesforce Trailblazer Community</p>
              <p>Free community forum at trailblazers.salesforce.com. Ask questions, find study groups, and connect with other candidates. The &ldquo;Certification&rdquo; group has active discussions from candidates preparing for ADM-201.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Admin career path */}
      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Career Path After ADM-201</h2>
        <div className="space-y-3 text-sm text-gray-700">
          <p>ADM-201 is the starting point, not the destination. Most Salesforce admins pursue one of these tracks:</p>
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
            <span><strong>Studying theory without hands-on practice.</strong> Reading about OWD settings is not the same as configuring them and testing access with a second user. Hands-on practice is mandatory — not optional.</span>
          </li>
          <li className="flex gap-2">
            <Target className="h-4 w-4 mt-0.5 text-red-500 flex-shrink-0" />
            <span><strong>Neglecting the security model.</strong> OWD settings, role hierarchy, profiles, permission sets, and sharing rules collectively account for a large portion of the exam. The most common confusion: roles control record visibility, profiles control object access. These are different and both are tested.</span>
          </li>
          <li className="flex gap-2">
            <Target className="h-4 w-4 mt-0.5 text-red-500 flex-shrink-0" />
            <span><strong>Booking too early.</strong> Score 75%+ on 3 full mock exams consistently before booking. The 65% passing score feels comfortable until you experience the actual scenario complexity. Many first-time failures score 62–64% — just below passing — due to premature booking.</span>
          </li>
          <li className="flex gap-2">
            <Target className="h-4 w-4 mt-0.5 text-red-500 flex-shrink-0" />
            <span><strong>Ignoring lower-weight sections.</strong> Productivity and Collaboration is only 7% — but that is still 4 questions. Do not skip any section entirely. Use the final week for a broad review pass.</span>
          </li>
        </ul>
      </section>

      {/* Benchmark */}
      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">When Are You Ready to Book?</h2>
        <p className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2">
          <Clock className="h-4 w-4" />
          75%+ on 3 timed full mocks (65 Q / 105 min) on separate days
        </p>
        <p className="text-sm text-gray-700 mt-3">
          When you hit this benchmark consistently, book the exam for 3–5 days later — not weeks away.
          A short gap keeps the material fresh. If you miss the benchmark, identify the specific weak sections
          from your mock results and spend another week on those topics only.
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
          <Link href="/adm-201-study-guide" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">ADM-201 Study Guide</span>
          </Link>
          <Link href="/adm-201-exam-tips-2026" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
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
          Free ADM-201 practice questions, study guide, and exam tips — everything you need to pass first time:
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/certifications/administrator"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-colors"
          >
            Free ADM-201 Practice Questions
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/adm-201-study-guide"
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
