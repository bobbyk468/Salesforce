import { getCertInsight, DIFFICULTY_LABELS, DIFFICULTY_COLOURS } from '@/lib/cert-insights-data'
import { RELEASE_CURRENT } from '@/lib/release-data'

interface Props {
  certSlug: string
}

export default function CertInsightBlock({ certSlug }: Props) {
  const insight = getCertInsight(certSlug)
  if (!insight) return null

  const { difficulty, difficultyNote, salaryRange, worthIt } = insight
  const label = DIFFICULTY_LABELS[difficulty]
  const colour = DIFFICULTY_COLOURS[difficulty]

  return (
    <div className="my-10 rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-sm">
      <div className="px-5 py-3 border-b border-gray-100 bg-gray-50">
        <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">Honest Cert Breakdown</p>
      </div>

      <div className="divide-y divide-gray-100">
        {/* Difficulty */}
        <div className="px-5 py-4 flex items-start gap-4">
          <div className="shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-bold" style={{ backgroundColor: colour }}>
            {difficulty}
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <p className="text-sm font-semibold text-gray-900">Difficulty: {label}</p>
              <span className="text-xs px-2 py-0.5 rounded-full font-medium text-white" style={{ backgroundColor: colour }}>
                {difficulty}/5
              </span>
            </div>
            {/* Difficulty bar */}
            <div className="flex gap-1 mb-2">
              {[1, 2, 3, 4, 5].map(n => (
                <div
                  key={n}
                  className="h-1.5 w-8 rounded-full"
                  style={{ backgroundColor: n <= difficulty ? colour : '#e5e7eb' }}
                />
              ))}
            </div>
            <p className="text-sm text-gray-600">{difficultyNote}</p>
          </div>
        </div>

        {/* Salary */}
        <div className="px-5 py-4 flex items-start gap-4">
          <div className="shrink-0 w-9 h-9 rounded-full bg-emerald-100 flex items-center justify-center">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2" strokeLinecap="round">
              <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-900 mb-0.5">Salary Range</p>
            <p className="text-lg font-bold text-emerald-700">{salaryRange} <span className="text-sm font-normal text-gray-500">/ year</span></p>
            <p className="text-xs text-gray-400 mt-0.5">
              US average for certified professionals &bull; Updated {RELEASE_CURRENT} &bull;{' '}
              <a href="https://www.salesforce.com/blog/salesforce-talent-ecosystem/" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600">
                Source: Salesforce Talent Ecosystem
              </a>
            </p>
          </div>
        </div>

        {/* Worth it */}
        <div className="px-5 py-4 flex items-start gap-4">
          <div className="shrink-0 w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0176D3" strokeWidth="2" strokeLinecap="round">
              <path d="M9 12l2 2 4-4" /><circle cx="12" cy="12" r="10" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-900 mb-1">Is it worth it?</p>
            <p className="text-sm text-gray-600">{worthIt}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
