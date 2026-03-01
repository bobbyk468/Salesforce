import type { Metadata } from 'next'
import Link from 'next/link'
import { getWebPageJsonLd, getBreadcrumbListJsonLd, getArticleJsonLd, getFaqPageJsonLd } from '@/lib/schema-data'
import { RELEASE_CURRENT } from '@/lib/release-data'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const pageTitle = `How to Register for a Salesforce Certification Exam (${RELEASE_CURRENT})`
const pageDescription = `Step-by-step guide to registering for a Salesforce certification exam in 2026: Webassessor account setup, exam booking, online vs testing centre, and exam day tips.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/how-to-register-salesforce-exam` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/how-to-register-salesforce-exam`,
    images: [{ url: `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`, alt: pageTitle }],
  },
  keywords: `how to register salesforce certification exam, webassessor salesforce 2026, book salesforce exam, salesforce exam registration steps`,
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'How to Register for a Salesforce Exam', url: '/how-to-register-salesforce-exam' },
]

const faqItems = [
  {
    question: 'Where do I register for a Salesforce certification exam?',
    answer: 'Salesforce certification exams are registered through Webassessor, operated by Kryterion (webassessor.com/salesforce). You create a free account using your email address, search for your target certification exam, and book either an online proctored session or a testing centre slot. Webassessor stores your exam history, retake vouchers, and score reports.',
  },
  {
    question: 'Can I take a Salesforce exam online from home?',
    answer: 'Yes — Salesforce offers online proctored exams through Kryterion\'s Sentinel system. You take the exam on your own computer with a webcam, while an AI-monitored system verifies your identity and exam environment. Requirements: a quiet, private room with no other people; a computer with a working webcam and microphone; a stable internet connection; and government-issued photo ID. Online proctored exams are available 24/7.',
  },
  {
    question: 'What ID do I need for a Salesforce exam?',
    answer: 'You must present a valid, government-issued photo ID that matches the name on your Webassessor account exactly. Accepted IDs include: passport, national ID card, driving licence. The name on your ID must match your registration name character-for-character. If there is a mismatch, you may be turned away. For online proctored exams, you hold your ID up to the webcam during identity verification.',
  },
  {
    question: 'How far in advance should I book my Salesforce exam?',
    answer: 'Book your exam at least 1–2 weeks in advance to get your preferred date, time, and format (online or testing centre). Online proctored slots are available 24/7 and typically have more availability than testing centres. Some candidates book their exam before finishing their study period to create a firm deadline — this motivates consistent study. If you need to reschedule, Webassessor allows rescheduling up to 24 hours before the exam without penalty.',
  },
  {
    question: 'Can I reschedule or cancel my Salesforce exam?',
    answer: 'Yes — you can reschedule or cancel your exam through Webassessor up to 24 hours before your scheduled exam time without penalty. Within 24 hours of the exam, the cancellation and rescheduling policy may result in forfeiture of your exam fee. Check the current Kryterion/Webassessor terms when you book, as policies can vary.',
  },
]

export default function HowToRegisterSalesforceExamPage() {
  const webPageJsonLd = getWebPageJsonLd({ name: pageTitle, description: pageDescription, path: '/how-to-register-salesforce-exam', breadcrumbItems })
  const breadcrumbJsonLd = getBreadcrumbListJsonLd(breadcrumbItems)
  const articleJsonLd = getArticleJsonLd({ headline: pageTitle, description: pageDescription, path: '/how-to-register-salesforce-exam' })
  const faqJsonLd = getFaqPageJsonLd(faqItems)

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <div className="mb-10">
        <div className="inline-flex items-center gap-2 bg-salesforce-blue/10 text-salesforce-blue text-sm font-semibold px-3 py-1 rounded-full mb-4">
          <span>Exam Guide</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          How to Register for a Salesforce Certification Exam ({RELEASE_CURRENT})
        </h1>
        <p className="text-lg text-gray-600">
          A complete step-by-step guide to booking your Salesforce exam — Webassessor setup, exam format selection, identity requirements, and exam day preparation.
        </p>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Step-by-Step Registration Guide</h2>
        <div className="space-y-5">
          {[
            { step: '1', title: 'Create a Webassessor account', desc: 'Go to webassessor.com/salesforce and click "Create Account". Use your full legal name exactly as it appears on your government-issued photo ID — mismatches cause exam day problems. Use an email address you check regularly for exam confirmations and reminders.' },
            { step: '2', title: 'Link your Trailhead account', desc: 'In Webassessor, go to Account Settings and link your Salesforce Trailhead/org account. This connection ensures your passed certifications appear on your Trailhead profile automatically. Without linking, your certifications will not appear publicly.' },
            { step: '3', title: 'Find your target exam', desc: 'From the Webassessor dashboard, click "Register for an Exam". Search for the certification you want (e.g., "Administrator", "Platform Developer I"). Verify you are selecting the correct exam — some certifications have similarly named versions (e.g., maintenance vs initial certification).' },
            { step: '4', title: 'Choose exam format: online or testing centre', desc: 'Select Online Proctored (take from home, available 24/7, requires webcam + quiet room) or Testing Centre (attend a Kryterion testing centre in person, more structured environment). Both formats have the same exam content, passing score, and result validity.' },
            { step: '5', title: 'Select your date and time', desc: 'Choose an available slot that gives you sufficient remaining study time. For online exams, slots are available around the clock. Testing centre availability varies by location. Book at least 1 week ahead to secure your preferred slot.' },
            { step: '6', title: 'Complete payment', desc: 'Pay the exam fee by credit or debit card. If you have a voucher code (retake discount or event voucher), enter it at checkout — the fee will be adjusted. Keep your payment confirmation and exam confirmation email.' },
            { step: '7', title: 'Prepare for exam day', desc: 'For online proctored: test your system at least 24 hours before (Kryterion provides a system check tool). Prepare a quiet, private room. Have your government-issued photo ID ready. For testing centre: arrive 15 minutes early. Bring two forms of ID. No personal items are allowed in the exam room.' },
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

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
          <h2 className="text-lg font-bold text-gray-900 mb-3">Online Proctored Exam</h2>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex gap-2"><span className="text-green-500 font-bold">✓</span> Take from home or office</li>
            <li className="flex gap-2"><span className="text-green-500 font-bold">✓</span> Available 24/7, 365 days</li>
            <li className="flex gap-2"><span className="text-green-500 font-bold">✓</span> More scheduling flexibility</li>
            <li className="flex gap-2"><span className="text-red-400 font-bold">✗</span> Requires webcam + microphone</li>
            <li className="flex gap-2"><span className="text-red-400 font-bold">✗</span> Private room required (no family, pets)</li>
            <li className="flex gap-2"><span className="text-red-400 font-bold">✗</span> Technical issues can interrupt exam</li>
          </ul>
        </div>
        <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
          <h2 className="text-lg font-bold text-gray-900 mb-3">Testing Centre Exam</h2>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex gap-2"><span className="text-green-500 font-bold">✓</span> No personal equipment needed</li>
            <li className="flex gap-2"><span className="text-green-500 font-bold">✓</span> Controlled, distraction-free environment</li>
            <li className="flex gap-2"><span className="text-green-500 font-bold">✓</span> No technical issues on your end</li>
            <li className="flex gap-2"><span className="text-red-400 font-bold">✗</span> Must travel to centre</li>
            <li className="flex gap-2"><span className="text-red-400 font-bold">✗</span> Less scheduling flexibility</li>
            <li className="flex gap-2"><span className="text-red-400 font-bold">✗</span> Not available in all locations</li>
          </ul>
        </div>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-8">
        <h2 className="text-base font-bold text-amber-900 mb-2">Common Registration Mistakes to Avoid</h2>
        <ul className="space-y-1 text-sm text-amber-800">
          <li>⚠ <strong>Name mismatch:</strong> Your Webassessor name must exactly match your ID. Even a middle name difference can cause issues.</li>
          <li>⚠ <strong>Not linking Trailhead:</strong> Without linking accounts, passed certs will not appear on your public profile.</li>
          <li>⚠ <strong>Booking without system check:</strong> For online proctored, test your system at least 24 hours before — not 5 minutes before.</li>
          <li>⚠ <strong>Missing the retake voucher:</strong> After a failed attempt, log into Webassessor to access your ~50% retake discount before paying full price again.</li>
        </ul>
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
        <h2 className="text-2xl font-bold mb-2">Get Ready to Book</h2>
        <p className="text-blue-100 mb-6">Practice until you score 75%+ on mock exams — then book your exam with confidence.</p>
        <Link href="/certifications" className="inline-flex items-center px-6 py-3 bg-white text-salesforce-blue rounded-lg font-semibold hover:bg-blue-50 transition-colors">
          Start Free Practice Questions
        </Link>
      </div>
    </div>
  )
}
