/** DataWeave payload transformation for MuleSoft Developer II: input format -> DataWeave
 * script (header + body) -> output format. */
export default function DataWeaveTransformDiagram() {
  return (
    <figure id="dataweave-transform-overview" className="mt-8 rounded-xl border border-gray-200 bg-gradient-to-b from-slate-50/90 to-white p-4 sm:p-6 scroll-mt-24">
      <figcaption className="text-base font-semibold text-gray-900 mb-1">DataWeave transformation pipeline (exam mental model)</figcaption>
      <p className="text-xs text-gray-600 mb-4 max-w-3xl">
        A DataWeave script declares its <strong>output directive</strong> (e.g. <code>%dw 2.0 output application/json</code>),
        then maps the input payload — regardless of source format (JSON, XML, CSV) — into the target structure using
        functions like <code>map</code>, <code>filter</code>, and <code>pluck</code>.
      </p>
      <svg role="img" aria-labelledby="dw-title" className="w-full max-w-4xl mx-auto h-auto" style={{ fontSize: '11px' }} viewBox="0 0 720 180" xmlns="http://www.w3.org/2000/svg">
        <title id="dw-title">Input payload in any format enters a DataWeave script with header directives and transformation body, producing output in the declared target format</title>
        <defs><marker id="dwArrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#0b5cab" /></marker></defs>
        <rect x="16" y="56" width="140" height="64" rx="8" fill="#f1f5f9" stroke="#64748b" strokeWidth="1.5" />
        <text x="86" y="80" textAnchor="middle" fill="#1e293b" fontWeight="600">Input Payload</text>
        <text x="86" y="98" textAnchor="middle" fill="#475569">JSON / XML / CSV</text>
        <path d="M 156 88 L 188 88" stroke="#0b5cab" strokeWidth="2" markerEnd="url(#dwArrow)" />
        <rect x="196" y="40" width="330" height="96" rx="8" fill="#dbeafe" stroke="#0b5cab" strokeWidth="2" />
        <text x="361" y="62" textAnchor="middle" fill="#0f172a" fontWeight="700">DataWeave Script</text>
        <text x="361" y="82" textAnchor="middle" fill="#334155">%dw 2.0 output application/json</text>
        <text x="361" y="100" textAnchor="middle" fill="#334155">map(), filter(), pluck(), reduce()</text>
        <text x="361" y="118" textAnchor="middle" fill="#334155">reshapes structure and field names</text>
        <path d="M 526 88 L 558 88" stroke="#0b5cab" strokeWidth="2" markerEnd="url(#dwArrow)" />
        <rect x="566" y="56" width="140" height="64" rx="8" fill="#ecfdf5" stroke="#059669" strokeWidth="1.5" />
        <text x="636" y="80" textAnchor="middle" fill="#0f172a" fontWeight="600">Output Payload</text>
        <text x="636" y="98" textAnchor="middle" fill="#334155">Declared target format</text>
      </svg>
    </figure>
  )
}
