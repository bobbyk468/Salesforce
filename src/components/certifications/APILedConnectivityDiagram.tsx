/** System/Process/Experience API layers for MuleSoft Developer I. */
export default function APILedConnectivityDiagram() {
  return (
    <figure id="api-led-connectivity-overview" className="mt-8 rounded-xl border border-gray-200 bg-gradient-to-b from-slate-50/90 to-white p-4 sm:p-6 scroll-mt-24">
      <figcaption className="text-base font-semibold text-gray-900 mb-1">API-led connectivity: System, Process, Experience layers (exam mental model)</figcaption>
      <p className="text-xs text-gray-600 mb-4 max-w-3xl">
        <strong>System APIs</strong> expose backend systems of record with a stable contract. <strong>Process
        APIs</strong> orchestrate logic across multiple System APIs. <strong>Experience APIs</strong> shape data for
        a specific consumer (mobile, web, partner). Each layer is independently reusable.
      </p>
      <svg role="img" aria-labelledby="alc-title" className="w-full max-w-4xl mx-auto h-auto" style={{ fontSize: '11px' }} viewBox="0 0 720 220" xmlns="http://www.w3.org/2000/svg">
        <title id="alc-title">Experience APIs on top consume Process APIs in the middle, which orchestrate System APIs at the bottom that connect directly to backend systems of record</title>
        <defs><marker id="alcArrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#0b5cab" /></marker></defs>
        <rect x="200" y="16" width="320" height="48" rx="8" fill="#dbeafe" stroke="#0b5cab" strokeWidth="2" />
        <text x="360" y="36" textAnchor="middle" fill="#0f172a" fontWeight="700">Experience APIs</text>
        <text x="360" y="52" textAnchor="middle" fill="#334155">Mobile app · Web · Partner portal</text>
        <path d="M 360 64 L 360 88" stroke="#0b5cab" strokeWidth="2" markerEnd="url(#alcArrow)" />
        <rect x="180" y="96" width="360" height="48" rx="8" fill="#ecfdf5" stroke="#059669" strokeWidth="2" />
        <text x="360" y="116" textAnchor="middle" fill="#0f172a" fontWeight="700">Process APIs</text>
        <text x="360" y="132" textAnchor="middle" fill="#334155">Orchestrate business logic across systems</text>
        <path d="M 300 144 L 260 168" stroke="#0b5cab" strokeWidth="2" markerEnd="url(#alcArrow)" />
        <path d="M 360 144 L 360 168" stroke="#0b5cab" strokeWidth="2" markerEnd="url(#alcArrow)" />
        <path d="M 420 144 L 460 168" stroke="#0b5cab" strokeWidth="2" markerEnd="url(#alcArrow)" />
        {[{ x: 60, l: 'System API' }, { x: 290, l: 'System API' }, { x: 520, l: 'System API' }].map((s) => (
          <g key={s.x}>
            <rect x={s.x} y="176" width="140" height="40" rx="8" fill="#fef3c7" stroke="#d97706" strokeWidth="1.5" />
            <text x={s.x + 70} y="200" textAnchor="middle" fill="#0f172a" fontWeight="600">{s.l}</text>
          </g>
        ))}
      </svg>
    </figure>
  )
}
