/** FlexCard vs. OmniScript use-case mapping for OmniStudio Developer. */
export default function FlexCardOmniScriptDiagram() {
  return (
    <figure id="flexcard-omniscript-overview" className="mt-8 rounded-xl border border-gray-200 bg-gradient-to-b from-slate-50/90 to-white p-4 sm:p-6 scroll-mt-24">
      <figcaption className="text-base font-semibold text-gray-900 mb-1">FlexCard vs. OmniScript: which to use when (exam mental model)</figcaption>
      <p className="text-xs text-gray-600 mb-4 max-w-3xl">
        Use a <strong>FlexCard</strong> to <em>display</em> compact record data at a glance. Use an{' '}
        <strong>OmniScript</strong> to <em>guide</em> a user through a multi-step process. Both can call the same
        Integration Procedures and DataRaptors underneath.
      </p>
      <svg role="img" aria-labelledby="fcos-title" className="w-full max-w-3xl mx-auto h-auto" style={{ fontSize: '11px' }} viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg">
        <title id="fcos-title">FlexCard displays compact record views; OmniScript guides users through multi-step processes; both call shared Integration Procedures and DataRaptors underneath</title>
        <rect x="16" y="16" width="260" height="88" rx="8" fill="#dbeafe" stroke="#0b5cab" strokeWidth="2" />
        <text x="146" y="40" textAnchor="middle" fill="#0f172a" fontWeight="700">FlexCard</text>
        <text x="146" y="60" textAnchor="middle" fill="#334155">Display a compact, card-based</text>
        <text x="146" y="76" textAnchor="middle" fill="#334155">view of record data</text>
        <text x="146" y="92" textAnchor="middle" fill="#334155">Use case: dashboard summary</text>
        <rect x="324" y="16" width="260" height="88" rx="8" fill="#ecfdf5" stroke="#059669" strokeWidth="2" />
        <text x="454" y="40" textAnchor="middle" fill="#0f172a" fontWeight="700">OmniScript</text>
        <text x="454" y="60" textAnchor="middle" fill="#334155">Guide a user through a</text>
        <text x="454" y="76" textAnchor="middle" fill="#334155">multi-step, branching flow</text>
        <text x="454" y="92" textAnchor="middle" fill="#334155">Use case: onboarding wizard</text>
        <path d="M 146 104 L 146 140" stroke="#0b5cab" strokeWidth="2" markerEnd="url(#fcosArrow)" />
        <path d="M 454 104 L 454 140" stroke="#0b5cab" strokeWidth="2" markerEnd="url(#fcosArrow)" />
        <defs><marker id="fcosArrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#0b5cab" /></marker></defs>
        <rect x="100" y="148" width="400" height="40" rx="8" fill="#fef3c7" stroke="#d97706" strokeWidth="1.5" />
        <text x="300" y="172" textAnchor="middle" fill="#0f172a" fontWeight="600">Shared: Integration Procedures + DataRaptors</text>
      </svg>
    </figure>
  )
}
