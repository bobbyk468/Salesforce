import Link from 'next/link'

interface Props {
  examTipsSlug: string // e.g. "adm-201-exam-tips"
  certName: string     // e.g. "Salesforce Administrator"
}

export default function ExamTipsCrossLink({ examTipsSlug, certName }: Props) {
  return (
    <div className="rounded-xl border border-amber-100 bg-amber-50/60 px-5 py-4 mb-8 flex items-start gap-3">
      <svg className="shrink-0 mt-0.5" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#d97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
      <p className="text-sm text-gray-700">
        Ready to sharpen your exam strategy?{' '}
        <Link href={`/${examTipsSlug}`} className="font-semibold text-amber-700 hover:underline">
          Prepare with our {certName} Exam Tips &amp; Strategy Guide
        </Link>
        {' '}— high-weight topics, scenario tactics, and mock-test targets for first-attempt success.
      </p>
    </div>
  )
}
