/** Industries CPQ vs. standard OmniStudio scope for Industries CPQ Developer. */
export default function CPQVsOmniStudioDiagram() {
  return (
    <figure id="cpq-omnistudio-overview" className="mt-8 rounded-xl border border-gray-200 bg-gradient-to-b from-slate-50/90 to-white p-4 sm:p-6 scroll-mt-24">
      <figcaption className="text-base font-semibold text-gray-900 mb-1">Industries CPQ vs. OmniStudio scope (exam mental model)</figcaption>
      <p className="text-xs text-gray-600 mb-4 max-w-3xl">
        <strong>Industries CPQ</strong> owns product, pricing, and quote/order logic for industry verticals.{' '}
        <strong>OmniStudio</strong> (OmniScript, FlexCards, Integration Procedures, DataRaptors) is the UI and
        orchestration layer that often sits on top of it — the two are complementary, not competing.
      </p>
      <svg role="img" aria-labelledby="cvo-title" className="w-full max-w-3xl mx-auto h-auto" style={{ fontSize: '11px' }} viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
        <title id="cvo-title">Industries CPQ owns product, pricing, and order logic; OmniStudio provides the guided UI and orchestration layer on top, calling into CPQ scripting</title>
        <rect x="90" y="140" width="420" height="64" rx="8" fill="#dbeafe" stroke="#0b5cab" strokeWidth="2" />
        <text x="300" y="164" textAnchor="middle" fill="#0f172a" fontWeight="700">Industries CPQ</text>
        <text x="300" y="182" textAnchor="middle" fill="#334155">Product config, pricing rules, quote/order logic (backend)</text>
        <rect x="130" y="20" width="340" height="90" rx="8" fill="#ecfdf5" stroke="#059669" strokeWidth="2" />
        <text x="300" y="44" textAnchor="middle" fill="#0f172a" fontWeight="700">OmniStudio</text>
        <text x="300" y="64" textAnchor="middle" fill="#334155">OmniScript (guided UI) · FlexCards (views)</text>
        <text x="300" y="80" textAnchor="middle" fill="#334155">Integration Procedures · DataRaptors</text>
        <text x="300" y="96" textAnchor="middle" fill="#334155">(orchestration + UX layer)</text>
        <path d="M 300 110 L 300 134" stroke="#0b5cab" strokeWidth="2" markerEnd="url(#cvoArrow)" />
        <defs><marker id="cvoArrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#0b5cab" /></marker></defs>
        <text x="300" y="130" textAnchor="middle" fill="#475569" fontSize="10">calls into</text>
      </svg>
    </figure>
  )
}
