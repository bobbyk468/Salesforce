/**
 * Flow vs. Apex decision tree for Platform App Builder: the recurring exam scenario
 * pattern of "which automation tool fits this requirement."
 */
export default function FlowVsApexDiagram() {
  return (
    <figure
      id="flow-vs-apex-overview"
      className="mt-8 rounded-xl border border-gray-200 bg-gradient-to-b from-slate-50/90 to-white p-4 sm:p-6 scroll-mt-24"
    >
      <figcaption className="text-base font-semibold text-gray-900 mb-1">
        Flow vs. Apex decision tree (exam mental model)
      </figcaption>
      <p className="text-xs text-gray-600 mb-4 max-w-3xl">
        App Builder exam scenarios almost always reduce to one question: <strong>can this be built
        declaratively?</strong> Default to Flow — it's faster to build, easier to maintain, and requires no code
        deployment. Reach for Apex only when the requirement genuinely exceeds what Flow can do.
      </p>
      <svg
        role="img"
        aria-labelledby="flow-apex-diagram-title"
        className="w-full max-w-3xl mx-auto h-auto"
        style={{ fontSize: '11px' }}
        viewBox="0 0 620 380"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title id="flow-apex-diagram-title">
          Decision tree: start with Flow by default; move to Apex only if the requirement needs complex
          data manipulation, callouts inside a trigger context, recursive/bulk logic beyond Flow limits, or
          reusable code shared across triggers
        </title>
        <defs>
          <marker id="faArrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 Z" fill="#0b5cab" />
          </marker>
        </defs>

        <rect x="210" y="8" width="200" height="52" rx="8" fill="#dbeafe" stroke="#0b5cab" strokeWidth="2" />
        <text x="310" y="30" textAnchor="middle" fill="#0f172a" fontWeight="700">New automation</text>
        <text x="310" y="48" textAnchor="middle" fill="#334155">requirement</text>

        <path d="M 310 60 L 310 88" stroke="#0b5cab" strokeWidth="2" markerEnd="url(#faArrow)" />
        <rect x="170" y="88" width="280" height="52" rx="8" fill="#fef3c7" stroke="#d97706" strokeWidth="1.5" />
        <text x="310" y="110" textAnchor="middle" fill="#0f172a" fontWeight="600">Can it be built declaratively?</text>
        <text x="310" y="128" textAnchor="middle" fill="#334155">Record changes, approvals, simple logic</text>

        <path d="M 250 140 L 150 176" stroke="#059669" strokeWidth="2" markerEnd="url(#faArrow)" />
        <text x="170" y="160" fill="#059669" fontWeight="600">Yes</text>
        <path d="M 370 140 L 470 176" stroke="#dc2626" strokeWidth="2" markerEnd="url(#faArrow)" />
        <text x="440" y="160" fill="#dc2626" fontWeight="600">No</text>

        <rect x="16" y="184" width="270" height="72" rx="8" fill="#ecfdf5" stroke="#059669" strokeWidth="2" />
        <text x="151" y="208" textAnchor="middle" fill="#0f172a" fontWeight="700">Use Flow</text>
        <text x="151" y="226" textAnchor="middle" fill="#334155">Record-Triggered Flow, Screen Flow,</text>
        <text x="151" y="242" textAnchor="middle" fill="#334155">or Scheduled Flow — default choice</text>

        <rect x="334" y="184" width="270" height="164" rx="8" fill="#fee2e2" stroke="#dc2626" strokeWidth="2" />
        <text x="469" y="208" textAnchor="middle" fill="#0f172a" fontWeight="700">Use Apex when Flow can't:</text>
        <text x="354" y="228" fill="#334155">• Complex data manipulation or</text>
        <text x="364" y="242" fill="#334155">   heavy recursive/bulk logic</text>
        <text x="354" y="262" fill="#334155">• Callouts requiring precise</text>
        <text x="364" y="276" fill="#334155">   transaction control</text>
        <text x="354" y="296" fill="#334155">• Reusable logic shared across</text>
        <text x="364" y="310" fill="#334155">   multiple triggers/contexts</text>
        <text x="354" y="330" fill="#334155">• Governor-limit-sensitive work</text>
        <text x="364" y="344" fill="#334155">   at high data volume</text>
      </svg>
    </figure>
  )
}
