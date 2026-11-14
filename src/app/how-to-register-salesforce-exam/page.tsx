import type { Metadata } from 'next'
import Link from '@/components/AppLink'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import LastUpdated from '@/components/LastUpdated'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const pageTitle = `How to Register for a Salesforce Cert Exam (${RELEASE_CURRENT})`
const pageDescription = `How to register for a Salesforce cert exam: Trailhead Academy setup, booking, online vs centre, exam day tips.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: {
    canonical: `${siteUrl}/how-to-register-salesforce-exam`,
    languages: { 'en-US': `${siteUrl}/how-to-register-salesforce-exam`, 'x-default': `${siteUrl}/how-to-register-salesforce-exam` },
  },
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
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Salesforce Careers', url: '/certifications' },
  { name: 'How to Register for a Salesforce Exam', url: '/how-to-register-salesforce-exam' },
]

const faqItems = [
  {
    question: 'Where do I register for a Salesforce certification exam?',
    answer: 'Register through Trailhead Academy (trailheadacademy.salesforce.com). Sign in with your Trailblazer account, find your exam, and book either an online-proctored session through Pearson VUE OnVUE or an onsite appointment at a Pearson VUE testing centre.',
  },
  {
    question: 'Can I take a Salesforce exam online from home?',
    answer: 'Yes. Salesforce offers online-proctored exams through Pearson VUE OnVUE, booked via Trailhead Academy. You take the exam on your computer with a webcam while the system checks your identity and exam environment. You need a quiet, private room, a working webcam and microphone, a stable internet connection, and government-issued photo ID. Check Trailhead Academy for available appointment times.',
  },
  {
    question: 'What ID do I need for a Salesforce exam?',
    answer: 'Bring a valid, government-issued photo ID with a name that exactly matches your Trailhead Academy account. Accepted IDs include a passport, national ID card, or driving licence. A mismatch may prevent you from taking the exam. For an online proctored exam, you will show your ID to the webcam during identity checks.',
  },
  {
    question: 'How far in advance should I book my Salesforce exam?',
    answer: 'Book early if you want a broader choice of date, time, and format. Appointment availability varies by location and delivery type. Review Salesforce’s reschedule and cancellation rules before booking: online appointments require at least 24 hours’ notice, and onsite appointments require at least 48 hours’ notice for free changes.',
  },
  {
    question: 'Can I reschedule or cancel my Salesforce exam?',
    answer: 'Yes. Salesforce requires at least 24 hours’ notice for online-proctored exams and 48 hours’ notice for testing-centre exams. Changes made within those windows may result in the loss of your exam fee. See the current Salesforce reschedule and cancellation policy for exceptions and CTA-specific rules.',
  },
]

export default function HowToRegisterSalesforceExamPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/how-to-register-salesforce-exam" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />

      <div data-lcp-header className="mb-10">
        <div className="inline-flex items-center gap-2 bg-salesforce-blue/10 text-salesforce-dark text-sm font-semibold px-3 py-1 rounded-full mb-4">

      <ContentPageAuthor />
          <span>Exam Guide</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          How to Register for a Salesforce Certification Exam ({RELEASE_CURRENT})
        </h1>
        <LastUpdated />
        <p className="text-lg text-gray-600">
          A complete step-by-step guide to booking your Salesforce exam: Trailhead Academy registration, exam format selection, identity requirements, and exam day preparation.
        </p>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Step-by-Step Registration Guide</h2>
        <div className="space-y-5">
          {[
            { step: '1', title: 'Sign in to Trailhead Academy', desc: 'Go to trailheadacademy.salesforce.com and sign in with your Trailhead account, or create a free one if you don\'t have it yet. Make sure your name matches your government-issued photo ID exactly, to avoid problems on exam day, and use an email address you check often for confirmations and reminders.' },
            { step: '2', title: 'Find your target exam', desc: 'From your Trailhead Academy dashboard, search for your certification, such as Administrator or Platform Developer I. Check that you choose the right exam; some certifications have similarly named options, such as maintenance and initial certification.' },
            { step: '3', title: 'Choose an exam format', desc: 'Choose Online Proctored to take the exam at home or a Testing Centre to take it in person. Online exams require a webcam and a quiet room. Both formats use the same exam content, passing score, and result rules.' },
            { step: '4', title: 'Select your date and time', desc: 'Choose an available appointment that leaves enough time to study. Testing-centre availability depends on location. Book early if you want a wider choice of slots.' },
            { step: '5', title: 'Complete payment', desc: 'Pay by credit or debit card. If you have a voucher code, such as a retake discount or event voucher, enter it at checkout to adjust the fee. Keep your payment and exam confirmation emails.' },
            { step: '6', title: 'Prepare for exam day', desc: 'For an online exam, run Pearson VUE’s OnVUE system check and prepare a quiet, private room. Have a valid government-issued photo ID that matches your booking. At a testing centre, arrive early and follow the confirmation instructions. Personal items are not allowed in the exam room.' },
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
            <li className="flex gap-2"><span className="text-green-500 font-bold">✓</span> Take it at home or at work</li>
            <li className="flex gap-2"><span className="text-green-500 font-bold">✓</span> More flexible scheduling</li>
            <li className="flex gap-2"><span className="text-red-400 font-bold">✗</span> You need a webcam and microphone</li>
            <li className="flex gap-2"><span className="text-red-400 font-bold">✗</span> You need a private room without other people or pets</li>
            <li className="flex gap-2"><span className="text-red-400 font-bold">✗</span> Technical problems may interrupt the exam</li>
          </ul>
        </div>
        <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
          <h2 className="text-lg font-bold text-gray-900 mb-3">Testing Centre Exam</h2>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex gap-2"><span className="text-green-500 font-bold">✓</span> The centre provides the equipment</li>
            <li className="flex gap-2"><span className="text-green-500 font-bold">✓</span> The exam room is controlled and quiet</li>
            <li className="flex gap-2"><span className="text-green-500 font-bold">✓</span> Your own equipment cannot cause technical issues</li>
            <li className="flex gap-2"><span className="text-red-400 font-bold">✗</span> You must travel to the centre</li>
            <li className="flex gap-2"><span className="text-red-400 font-bold">✗</span> Appointment times may be less flexible</li>
            <li className="flex gap-2"><span className="text-red-400 font-bold">✗</span> A centre may not be available nearby</li>
          </ul>
        </div>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-8">
        <h2 className="text-base font-bold text-amber-900 mb-2">Common Registration Mistakes to Avoid</h2>
        <ul className="space-y-1 text-sm text-amber-800">
          <li>⚠ <strong>Name mismatch:</strong> Your Trailhead Academy account name must exactly match your ID. A difference in your middle name may cause a problem.</li>
          <li>⚠ <strong>Registering through a third-party site:</strong> Book only through trailheadacademy.salesforce.com. Third-party "registration help" sites are not official.</li>
          <li>⚠ <strong>Skipping the system check:</strong> Run Pearson VUE's OnVUE system check at least 24 hours before an online exam.</li>
          <li>⚠ <strong>Assuming every retake is discounted:</strong> Check the current retake price for your credential. Foundations retakes are free, while Accredited Professional retakes cost the same as the first attempt.</li>
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
      <div className="bg-gray-50 rounded-xl border border-gray-100 p-5 mb-8">
        <h2 className="text-base font-bold text-gray-900 mb-3">Compare Certifications</h2>
        <ul className="space-y-2">
          <li><Link href="/salesforce-certification-passing-score" className="text-sm text-salesforce-dark hover:underline font-medium">→ Salesforce certification passing scores by tier</Link></li>
          <li><Link href="/salesforce-certification-validity" className="text-sm text-salesforce-dark hover:underline font-medium">→ How long is a Salesforce certification valid?</Link></li>
          <li><Link href="/salesforce-exam-retake-policy" className="text-sm text-salesforce-dark hover:underline font-medium">→ Salesforce exam retake policy</Link></li>
        </ul>
      </div>


      <div className="bg-salesforce-blue rounded-xl p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-2">Get Ready to Book</h2>
        <p className="text-white mb-6">Use practice exams to prepare before you schedule your certification exam.</p>
        <Link href="/certifications" className="inline-flex items-center px-6 py-3 bg-white text-salesforce-blue rounded-lg font-semibold hover:bg-blue-50 transition-colors">
          Start Free Practice Questions
        </Link>
      </div>
    </div>
  )
}
