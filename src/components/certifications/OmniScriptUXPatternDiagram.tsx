/** OmniScript best-practice UX pattern for OmniStudio Consultant: step design,
 * conditional branching, and reuse. */
export default function OmniScriptUXPatternDiagram() {
  return (
    <figure id="omniscript-ux-pattern-overview" className="mt-8 rounded-xl border border-gray-200 bg-gradient-to-b from-slate-50/90 to-white p-4 sm:p-6 scroll-mt-24">
      <figcaption className="text-base font-semibold text-gray-900 mb-1">OmniScript guided UX pattern (exam mental model)</figcaption>
      <p className="text-xs text-gray-600 mb-4 max-w-3xl">
        Well-designed OmniScripts keep each step focused, use <strong>conditional views</strong> to skip irrelevant
        questions, and call reusable <strong>sub-OmniScripts</strong> for shared sequences instead of duplicating
        steps across scripts.
      </p>
      <svg role="img" aria-labelledby="ousp-title" className="w-full max-w-4xl mx-auto h-auto" style={{ fontSize: '11px' }} viewBox="0 0 720 160" xmlns="http://www.w3.org/2000/svg">
        <title id="ousp-title">Step 1 leads to a conditional branch based on user input, one path calls a reusable sub-OmniScript, both paths converge at a final review step</title>
        <defs><marker id="ouspArrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#0b5cab" /></marker></defs>
        <rect x="16" y="48" width="120" height="56" rx="8" fill="#f1f5f9" stroke="#64748b" strokeWidth="1.5" />
        <text x="76" y="72" textAnchor="middle" fill="#1e293b" fontWeight="600">Step 1</text>
        <text x="76" y="88" textAnchor="middle" fill="#475569">Focused question</text>
        <path d="M 136 76 L 168 40" stroke="#0b5cab" strokeWidth="2" markerEnd="url(#ouspArrow)" />
        <path d="M 136 76 L 168 112" stroke="#0b5cab" strokeWidth="2" markerEnd="url(#ouspArrow)" />
        <rect x="176" y="8" width="180" height="56" rx="8" fill="#dbeafe" stroke="#0b5cab" strokeWidth="1.5" />
        <text x="266" y="32" textAnchor="middle" fill="#0f172a" fontWeight="600">Conditional View A</text>
        <text x="266" y="48" textAnchor="middle" fill="#334155">Skipped if not relevant</text>
        <rect x="176" y="84" width="180" height="56" rx="8" fill="#ecfdf5" stroke="#059669" strokeWidth="1.5" />
        <text x="266" y="108" textAnchor="middle" fill="#0f172a" fontWeight="600">Sub-OmniScript</text>
        <text x="266" y="124" textAnchor="middle" fill="#334155">Reused across scripts</text>
        <path d="M 356 36 L 400 76" stroke="#0b5cab" strokeWidth="2" markerEnd="url(#ouspArrow)" />
        <path d="M 356 112 L 400 76" stroke="#0b5cab" strokeWidth="2" markerEnd="url(#ouspArrow)" />
        <rect x="408" y="48" width="150" height="56" rx="8" fill="#fef3c7" stroke="#d97706" strokeWidth="1.5" />
        <text x="483" y="72" textAnchor="middle" fill="#0f172a" fontWeight="600">Review Step</text>
        <text x="483" y="88" textAnchor="middle" fill="#334155">Confirm before submit</text>
      </svg>
    </figure>
  )
}
