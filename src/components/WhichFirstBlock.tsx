import Link from 'next/link'

interface CertOption {
  name: string          // e.g. "Platform App Builder"
  certSlug: string      // e.g. "app-builder" → links to /certifications/app-builder
  examTipsSlug?: string // e.g. "app-builder-exam-tips" → links to /app-builder-exam-tips
  conditions: string[]  // bullet list of "take this if..."
}

interface Props {
  certA: CertOption
  certB: CertOption
  recommendation: {
    certName: string      // which cert is recommended
    certSlug: string      // for the practice questions link
    examTipsSlug?: string // for the exam tips link
    reason: string        // 1–2 sentence honest explanation
    careerPathSlug?: string // e.g. "developer-certification-path"
    careerPathLabel?: string // e.g. "Salesforce Developer Path"
  }
}

export default function WhichFirstBlock({ certA, certB, recommendation }: Props) {
  return (
    <div className="my-10 rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-sm">
      {/* Header */}
      <div className="px-5 py-3 bg-gray-50 border-b border-gray-100">
        <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
          Which should you take first?
        </p>
      </div>

      {/* Two columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
        {[certA, certB].map((cert) => (
          <div key={cert.certSlug} className="px-5 py-5">
            <p className="text-sm font-bold text-gray-900 mb-3">
              Take{' '}
              <Link
                href={`/certifications/${cert.certSlug}`}
                className="text-salesforce-blue hover:underline"
              >
                {cert.name}
              </Link>{' '}
              if:
            </p>
            <ul className="space-y-2">
              {cert.conditions.map((c) => (
                <li key={c} className="flex items-start gap-2 text-sm text-gray-600">
                  <svg className="shrink-0 mt-0.5" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0176D3" strokeWidth="2.5" strokeLinecap="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {c}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Our Recommendation — h3 for Featured Snippet eligibility */}
      <div className="px-5 py-5 border-t border-gray-100 bg-blue-50/50">
        <h3 className="text-sm font-bold text-gray-900 mb-2">
          Our Recommendation: Start with {recommendation.certName}
        </h3>
        <p className="text-sm text-gray-700 mb-4">{recommendation.reason}</p>

        <div className="flex flex-wrap gap-3">
          <Link
            href={`/certifications/${recommendation.certSlug}#practice-questions`}
            className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-full text-white transition-colors"
            style={{ backgroundColor: '#0176D3' }}
          >
            Start {recommendation.certName} Practice Questions
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>

          {recommendation.examTipsSlug && (
            <Link
              href={`/${recommendation.examTipsSlug}`}
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-full border transition-colors hover:bg-white"
              style={{ borderColor: '#0176D3', color: '#0176D3' }}
            >
              {recommendation.certName} Exam Tips &amp; Strategy
            </Link>
          )}

          {recommendation.careerPathSlug && recommendation.careerPathLabel && (
            <Link
              href={`/${recommendation.careerPathSlug}`}
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-50 transition-colors"
            >
              Explore the {recommendation.careerPathLabel} →
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
