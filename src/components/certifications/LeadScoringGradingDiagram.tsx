/** Lead scoring vs. grading lifecycle for Pardot (Account Engagement) Consultant. */
export default function LeadScoringGradingDiagram() {
  return (
    <figure id="lead-scoring-grading-overview" className="mt-8 rounded-xl border border-gray-200 bg-gradient-to-b from-slate-50/90 to-white p-4 sm:p-6 scroll-mt-24">
      <figcaption className="text-base font-semibold text-gray-900 mb-1">Scoring vs. grading: interest vs. fit (exam mental model)</figcaption>
      <p className="text-xs text-gray-600 mb-4 max-w-3xl">
        <strong>Scoring</strong> rises with engagement activity (opens, clicks, form fills) — it measures{' '}
        <em>interest</em>. <strong>Grading</strong> is set from profile attributes (title, industry, company size) —
        it measures <em>fit</em>. Sales should prioritize prospects that are high on both axes.
      </p>
      <svg role="img" aria-labelledby="lsg-title" className="w-full max-w-3xl mx-auto h-auto" style={{ fontSize: '11px' }} viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg">
        <title id="lsg-title">Two-axis quadrant: grading (fit) on the x-axis, scoring (interest) on the y-axis; the top-right quadrant of high fit and high engagement is the priority for sales follow-up</title>
        <line x1="60" y1="20" x2="60" y2="260" stroke="#64748b" strokeWidth="1.5" />
        <line x1="60" y1="260" x2="460" y2="260" stroke="#64748b" strokeWidth="1.5" />
        <text x="30" y="140" textAnchor="middle" fill="#334155" transform="rotate(-90 30 140)">Scoring (interest) →</text>
        <text x="260" y="284" textAnchor="middle" fill="#334155">Grading (fit) →</text>
        <rect x="260" y="20" width="200" height="120" fill="#ecfdf5" stroke="#059669" strokeWidth="1.5" />
        <text x="360" y="60" textAnchor="middle" fill="#0f172a" fontWeight="700">High Fit + High Interest</text>
        <text x="360" y="80" textAnchor="middle" fill="#334155">Route to sales now</text>
        <rect x="60" y="20" width="200" height="120" fill="#fef3c7" stroke="#d97706" strokeWidth="1.5" />
        <text x="160" y="60" textAnchor="middle" fill="#0f172a" fontWeight="600">Low Fit + High Interest</text>
        <text x="160" y="80" textAnchor="middle" fill="#334155">Nurture, not qualified yet</text>
        <rect x="260" y="140" width="200" height="120" fill="#dbeafe" stroke="#0b5cab" strokeWidth="1.5" />
        <text x="360" y="180" textAnchor="middle" fill="#0f172a" fontWeight="600">High Fit + Low Interest</text>
        <text x="360" y="200" textAnchor="middle" fill="#334155">Targeted re-engagement</text>
        <rect x="60" y="140" width="200" height="120" fill="#f1f5f9" stroke="#64748b" strokeWidth="1.5" />
        <text x="160" y="180" textAnchor="middle" fill="#0f172a" fontWeight="600">Low Fit + Low Interest</text>
        <text x="160" y="200" textAnchor="middle" fill="#334155">Long-term nurture only</text>
      </svg>
    </figure>
  )
}
