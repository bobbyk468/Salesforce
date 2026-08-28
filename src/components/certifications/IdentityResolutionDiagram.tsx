/** Identity Resolution rule flow for Data 360 (Data Cloud) Consultant: matching rules
 * link records from multiple sources into one Unified Profile. */
export default function IdentityResolutionDiagram() {
  return (
    <figure id="identity-resolution-overview" className="mt-8 rounded-xl border border-gray-200 bg-gradient-to-b from-slate-50/90 to-white p-4 sm:p-6 scroll-mt-24">
      <figcaption className="text-base font-semibold text-gray-900 mb-1">Identity Resolution rule flow (exam mental model)</figcaption>
      <p className="text-xs text-gray-600 mb-4 max-w-3xl">
        Records from multiple Data Streams pass through <strong>Match Rules</strong> (email, phone, custom logic).
        Matched records merge into a single <strong>Unified Individual</strong>, which powers Segments and
        Calculated Insights.
      </p>
      <svg role="img" aria-labelledby="ir-title" className="w-full max-w-4xl mx-auto h-auto" style={{ fontSize: '11px' }} viewBox="0 0 700 200" xmlns="http://www.w3.org/2000/svg">
        <title id="ir-title">Records from CRM, Commerce, and Marketing data streams pass through match rules based on email, phone, or custom logic, merging into one Unified Individual profile</title>
        <defs><marker id="irArrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#0b5cab" /></marker></defs>
        {['CRM', 'Commerce', 'Marketing'].map((src, i) => (
          <g key={src}>
            <rect x="16" y={16 + i * 56} width="130" height="40" rx="8" fill="#f1f5f9" stroke="#64748b" strokeWidth="1.5" />
            <text x="81" y={40 + i * 56} textAnchor="middle" fill="#1e293b" fontWeight="600">{src} Stream</text>
            <path d={`M 146 ${36 + i * 56} L 188 96`} stroke="#0b5cab" strokeWidth="1.5" markerEnd="url(#irArrow)" />
          </g>
        ))}
        <rect x="196" y="72" width="160" height="56" rx="8" fill="#fef3c7" stroke="#d97706" strokeWidth="2" />
        <text x="276" y="94" textAnchor="middle" fill="#0f172a" fontWeight="700">Match Rules</text>
        <text x="276" y="112" textAnchor="middle" fill="#334155">Email, phone, custom</text>
        <path d="M 356 100 L 388 100" stroke="#0b5cab" strokeWidth="2" markerEnd="url(#irArrow)" />
        <rect x="396" y="72" width="180" height="56" rx="8" fill="#ecfdf5" stroke="#059669" strokeWidth="2" />
        <text x="486" y="94" textAnchor="middle" fill="#0f172a" fontWeight="700">Unified Individual</text>
        <text x="486" y="112" textAnchor="middle" fill="#334155">One profile per person</text>
      </svg>
    </figure>
  )
}
