/** AMPscript execution order for Marketing Cloud Engagement Developer: inline vs.
 * block syntax and when each evaluates relative to HTML rendering. */
export default function AMPscriptExecutionDiagram() {
  return (
    <figure id="ampscript-execution-overview" className="mt-8 rounded-xl border border-gray-200 bg-gradient-to-b from-slate-50/90 to-white p-4 sm:p-6 scroll-mt-24">
      <figcaption className="text-base font-semibold text-gray-900 mb-1">AMPscript execution order (exam mental model)</figcaption>
      <p className="text-xs text-gray-600 mb-4 max-w-3xl">
        AMPscript <strong>blocks</strong> (<code>%%[ ]%%</code>) at the top of an email execute first, top to bottom,
        setting variables. <strong>Inline</strong> AMPscript and personalization strings in the HTML body then
        render using those already-set values.
      </p>
      <svg role="img" aria-labelledby="ampe-title" className="w-full max-w-4xl mx-auto h-auto" style={{ fontSize: '11px' }} viewBox="0 0 700 180" xmlns="http://www.w3.org/2000/svg">
        <title id="ampe-title">AMPscript block at the top of the email runs first setting variables, then the HTML body renders using inline AMPscript and personalization strings that reference those variables</title>
        <defs><marker id="ampeArrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#0b5cab" /></marker></defs>
        <rect x="16" y="16" width="668" height="60" rx="8" fill="#dbeafe" stroke="#0b5cab" strokeWidth="2" />
        <text x="350" y="38" textAnchor="middle" fill="#0f172a" fontWeight="700">1. AMPscript Block — %%[ ... ]%%</text>
        <text x="350" y="58" textAnchor="middle" fill="#334155">Runs first, top to bottom — VAR declarations, Lookup() calls</text>
        <path d="M 350 76 L 350 100" stroke="#0b5cab" strokeWidth="2" markerEnd="url(#ampeArrow)" />
        <rect x="16" y="108" width="668" height="60" rx="8" fill="#ecfdf5" stroke="#059669" strokeWidth="2" />
        <text x="350" y="130" textAnchor="middle" fill="#0f172a" fontWeight="700">2. HTML Body Renders</text>
        <text x="350" y="150" textAnchor="middle" fill="#334155">Inline AMPscript and %%Attribute%% strings use values set in step 1</text>
      </svg>
    </figure>
  )
}
