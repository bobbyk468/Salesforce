/** Integration pattern decision matrix for Integration Architect: matches requirement
 * type to the right pattern (sync, async, batch, pub-sub). */
export default function IntegrationPatternsMatrixDiagram() {
  const rows = [
    { need: 'Real-time, needs immediate response', pattern: 'Synchronous REST/SOAP' },
    { need: 'Real-time, no immediate response needed', pattern: 'Async / Platform Events' },
    { need: 'High-volume, scheduled data movement', pattern: 'Batch ETL' },
    { need: 'Multiple systems need the same update', pattern: 'Publish-Subscribe' },
  ]
  return (
    <figure id="integration-patterns-matrix-overview" className="mt-8 rounded-xl border border-gray-200 bg-gradient-to-b from-slate-50/90 to-white p-4 sm:p-6 scroll-mt-24">
      <figcaption className="text-base font-semibold text-gray-900 mb-1">Integration pattern decision matrix (exam mental model)</figcaption>
      <p className="text-xs text-gray-600 mb-4 max-w-3xl">
        Integration Architect scenarios reduce to matching the requirement’s latency and fan-out needs to the
        correct pattern.
      </p>
      <svg role="img" aria-labelledby="ipm-title" className="w-full max-w-3xl mx-auto h-auto" style={{ fontSize: '11px' }} viewBox="0 0 620 200" xmlns="http://www.w3.org/2000/svg">
        <title id="ipm-title">Table mapping integration requirements (real-time immediate, real-time deferred, high-volume batch, multi-system fan-out) to the correct pattern</title>
        <rect x="10" y="8" width="330" height="28" fill="#0b5cab" /><text x="175" y="27" textAnchor="middle" fill="white" fontWeight="700">Requirement</text>
        <rect x="340" y="8" width="270" height="28" fill="#0b5cab" /><text x="475" y="27" textAnchor="middle" fill="white" fontWeight="700">Pattern</text>
        {rows.map((r, i) => (
          <g key={r.need}>
            <rect x="10" y={36 + i * 40} width="600" height="40" fill={i % 2 === 0 ? '#f8fafc' : '#f1f5f9'} stroke="#e2e8f0" />
            <text x="20" y={36 + i * 40 + 24} fill="#0f172a">{r.need}</text>
            <text x="350" y={36 + i * 40 + 24} fill="#0f172a" fontWeight="600">{r.pattern}</text>
          </g>
        ))}
      </svg>
    </figure>
  )
}
