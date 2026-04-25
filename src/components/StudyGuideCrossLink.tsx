import Link from 'next/link'

interface Props {
  studyGuideSlug: string // e.g. "adm-201-study-guide"
  certName: string       // e.g. "Salesforce Administrator"
}

export default function StudyGuideCrossLink({ studyGuideSlug, certName }: Props) {
  return (
    <div className="rounded-xl border border-blue-100 bg-blue-50/60 px-5 py-4 mb-8 flex items-start gap-3">
      <svg className="shrink-0 mt-0.5" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0176D3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
      <p className="text-sm text-gray-700">
        Looking for a full study plan, topic breakdown, and key concepts?{' '}
        <Link href={`/${studyGuideSlug}`} className="font-semibold text-salesforce-blue hover:underline">
          View the comprehensive {certName} Study Guide
        </Link>
        {' '}for everything you need before sitting the exam.
      </p>
    </div>
  )
}
