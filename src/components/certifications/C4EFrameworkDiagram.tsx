/** Center for Enablement (C4E) framework for MuleSoft Catalyst Consultant. */
export default function C4EFrameworkDiagram() {
  return (
    <figure id="c4e-framework-overview" className="mt-8 rounded-xl border border-gray-200 bg-gradient-to-b from-slate-50/90 to-white p-4 sm:p-6 scroll-mt-24">
      <figcaption className="text-base font-semibold text-gray-900 mb-1">Center for Enablement (C4E) framework (exam mental model)</figcaption>
      <p className="text-xs text-gray-600 mb-4 max-w-3xl">
        C4E is a cross-functional team — <strong>Central IT</strong> provides governance, <strong>LOB (Line of
        Business) teams</strong> consume and build with reusable assets, and both contribute back to a shared{' '}
        <strong>Anypoint Exchange</strong> catalog, accelerating delivery org-wide.
      </p>
      <svg role="img" aria-labelledby="c4e-title" className="w-full max-w-3xl mx-auto h-auto" style={{ fontSize: '11px' }} viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
        <title id="c4e-title">Central IT provides governance and platform, Line of Business teams consume and build, both contribute to a shared Anypoint Exchange catalog of reusable assets</title>
        <defs><marker id="c4eArrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#0b5cab" /></marker></defs>
        <rect x="16" y="16" width="240" height="72" rx="8" fill="#dbeafe" stroke="#0b5cab" strokeWidth="2" />
        <text x="136" y="40" textAnchor="middle" fill="#0f172a" fontWeight="700">Central IT (C4E core)</text>
        <text x="136" y="58" textAnchor="middle" fill="#334155">Governance, platform ops,</text>
        <text x="136" y="74" textAnchor="middle" fill="#334155">design standards</text>
        <rect x="344" y="16" width="240" height="72" rx="8" fill="#ecfdf5" stroke="#059669" strokeWidth="2" />
        <text x="464" y="40" textAnchor="middle" fill="#0f172a" fontWeight="700">LOB Teams</text>
        <text x="464" y="58" textAnchor="middle" fill="#334155">Consume + build with</text>
        <text x="464" y="74" textAnchor="middle" fill="#334155">reusable assets</text>
        <path d="M 136 88 L 200 140" stroke="#0b5cab" strokeWidth="2" markerEnd="url(#c4eArrow)" />
        <path d="M 464 88 L 400 140" stroke="#0b5cab" strokeWidth="2" markerEnd="url(#c4eArrow)" />
        <rect x="170" y="148" width="260" height="56" rx="8" fill="#fef3c7" stroke="#d97706" strokeWidth="2" />
        <text x="300" y="172" textAnchor="middle" fill="#0f172a" fontWeight="700">Anypoint Exchange</text>
        <text x="300" y="190" textAnchor="middle" fill="#334155">Shared, reusable API catalog</text>
      </svg>
    </figure>
  )
}
