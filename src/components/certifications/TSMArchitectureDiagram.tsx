/** Tableau Services Manager (TSM) command-line architecture for Tableau Server Administrator. */
export default function TSMArchitectureDiagram() {
  return (
    <figure id="tsm-architecture-overview" className="mt-8 rounded-xl border border-gray-200 bg-gradient-to-b from-slate-50/90 to-white p-4 sm:p-6 scroll-mt-24">
      <figcaption className="text-base font-semibold text-gray-900 mb-1">Tableau Services Manager (TSM) architecture (exam mental model)</figcaption>
      <p className="text-xs text-gray-600 mb-4 max-w-3xl">
        TSM is the command-line/API layer for installing, configuring, and managing the Tableau Server topology —
        it controls which processes (VizQL, Backgrounder, Repository) run on which node.
      </p>
      <svg role="img" aria-labelledby="tsma-title" className="w-full max-w-4xl mx-auto h-auto" style={{ fontSize: '11px' }} viewBox="0 0 700 160" xmlns="http://www.w3.org/2000/svg">
        <title id="tsma-title">TSM command-line/API layer configures and controls the Tableau Server topology, distributing VizQL, Backgrounder, and Repository processes across nodes</title>
        <rect x="16" y="48" width="160" height="64" rx="8" fill="#dbeafe" stroke="#0b5cab" strokeWidth="2" />
        <text x="96" y="72" textAnchor="middle" fill="#0f172a" fontWeight="700">TSM (tsm CLI)</text>
        <text x="96" y="90" textAnchor="middle" fill="#334155">Config, topology, licensing</text>
        <path d="M 176 68 L 208 40" stroke="#0b5cab" strokeWidth="1.5" markerEnd="url(#tsmaArrow)" />
        <path d="M 176 80 L 208 80" stroke="#0b5cab" strokeWidth="1.5" markerEnd="url(#tsmaArrow)" />
        <path d="M 176 92 L 208 120" stroke="#0b5cab" strokeWidth="1.5" markerEnd="url(#tsmaArrow)" />
        <defs><marker id="tsmaArrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#0b5cab" /></marker></defs>
        <rect x="216" y="16" width="150" height="40" rx="6" fill="#ecfdf5" stroke="#059669" strokeWidth="1.5" />
        <text x="291" y="40" textAnchor="middle" fill="#0f172a" fontWeight="600" fontSize="10">VizQL Server process</text>
        <rect x="216" y="64" width="150" height="40" rx="6" fill="#fef3c7" stroke="#d97706" strokeWidth="1.5" />
        <text x="291" y="88" textAnchor="middle" fill="#0f172a" fontWeight="600" fontSize="10">Backgrounder process</text>
        <rect x="216" y="104" width="150" height="40" rx="6" fill="#f1f5f9" stroke="#64748b" strokeWidth="1.5" />
        <text x="291" y="128" textAnchor="middle" fill="#0f172a" fontWeight="600" fontSize="10">Repository process</text>
      </svg>
    </figure>
  )
}
