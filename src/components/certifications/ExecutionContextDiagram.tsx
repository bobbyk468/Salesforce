/**
 * Transaction execution context for Platform Developer I: how Triggers, Flow, and
 * Process Builder all execute within a single transaction, sharing one set of
 * governor limits rather than getting a fresh set per automation.
 */
export default function ExecutionContextDiagram() {
  return (
    <figure
      id="execution-context-overview"
      className="mt-8 rounded-xl border border-gray-200 bg-gradient-to-b from-slate-50/90 to-white p-4 sm:p-6 scroll-mt-24"
    >
      <figcaption className="text-base font-semibold text-gray-900 mb-1">
        Execution context: Triggers, Flow, and Process Builder share one transaction (exam mental model)
      </figcaption>
      <p className="text-xs text-gray-600 mb-4 max-w-3xl">
        All automation that fires on a single DML operation — before/after triggers, Record-Triggered Flows, and
        Process Builder — runs inside <strong>one execution context</strong>. Governor limits (SOQL queries, DML
        statements, CPU time) accumulate across all of them, not per-automation. This is why bulkification and
        avoiding recursive updates matters for PD1.
      </p>
      <svg
        role="img"
        aria-labelledby="exec-context-diagram-title"
        className="w-full max-w-3xl mx-auto h-auto"
        style={{ fontSize: '11px' }}
        viewBox="0 0 620 320"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title id="exec-context-diagram-title">
          Diagram: a single transaction execution context boundary contains before triggers, validation, after
          triggers, Record-Triggered Flow, and Process Builder, all sharing one shared governor limit pool
        </title>
        <defs>
          <marker id="ecArrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 Z" fill="#0b5cab" />
          </marker>
        </defs>

        <rect x="16" y="16" width="588" height="256" rx="12" fill="#fef3c7" stroke="#d97706" strokeWidth="2" strokeDasharray="6 4" />
        <text x="36" y="38" fill="#92400e" fontWeight="700">One Transaction / Execution Context</text>
        <text x="36" y="54" fill="#92400e" fontSize="10">(one shared governor-limit pool for everything inside this box)</text>

        <rect x="36" y="68" width="150" height="56" rx="8" fill="#dbeafe" stroke="#0b5cab" strokeWidth="1.5" />
        <text x="111" y="90" textAnchor="middle" fill="#0f172a" fontWeight="600">Before Trigger</text>
        <text x="111" y="108" textAnchor="middle" fill="#334155">Field defaults, validation</text>

        <path d="M 186 96 L 214 96" stroke="#0b5cab" strokeWidth="2" markerEnd="url(#ecArrow)" />
        <rect x="222" y="68" width="150" height="56" rx="8" fill="#ecfdf5" stroke="#059669" strokeWidth="1.5" />
        <text x="297" y="90" textAnchor="middle" fill="#0f172a" fontWeight="600">Record Saved</text>
        <text x="297" y="108" textAnchor="middle" fill="#334155">(not yet committed)</text>

        <path d="M 372 96 L 400 96" stroke="#0b5cab" strokeWidth="2" markerEnd="url(#ecArrow)" />
        <rect x="408" y="68" width="150" height="56" rx="8" fill="#dbeafe" stroke="#0b5cab" strokeWidth="1.5" />
        <text x="483" y="90" textAnchor="middle" fill="#0f172a" fontWeight="600">After Trigger</text>
        <text x="483" y="108" textAnchor="middle" fill="#334155">Related record updates</text>

        <path d="M 111 124 L 111 152" stroke="#0b5cab" strokeWidth="2" markerEnd="url(#ecArrow)" />
        <path d="M 297 124 L 297 152" stroke="#0b5cab" strokeWidth="2" markerEnd="url(#ecArrow)" />
        <path d="M 483 124 L 483 152" stroke="#0b5cab" strokeWidth="2" markerEnd="url(#ecArrow)" />

        <rect x="36" y="160" width="260" height="56" rx="8" fill="#f1f5f9" stroke="#64748b" strokeWidth="1.5" />
        <text x="166" y="182" textAnchor="middle" fill="#0f172a" fontWeight="600">Record-Triggered Flow</text>
        <text x="166" y="200" textAnchor="middle" fill="#475569">Runs in the same transaction</text>

        <rect x="312" y="160" width="246" height="56" rx="8" fill="#f1f5f9" stroke="#64748b" strokeWidth="1.5" />
        <text x="435" y="182" textAnchor="middle" fill="#0f172a" fontWeight="600">Process Builder (legacy)</text>
        <text x="435" y="200" textAnchor="middle" fill="#475569">Also shares the same context</text>

        <path d="M 166 216 L 166 232" stroke="#0b5cab" strokeWidth="2" markerEnd="url(#ecArrow)" />
        <path d="M 435 216 L 435 232" stroke="#0b5cab" strokeWidth="2" markerEnd="url(#ecArrow)" />
        <rect x="36" y="232" width="522" height="28" rx="6" fill="#fee2e2" stroke="#dc2626" strokeWidth="1.5" />
        <text x="297" y="250" textAnchor="middle" fill="#7f1d1d" fontWeight="600">
          If a Flow/Process re-updates the record, before/after triggers can re-fire — watch for recursion
        </text>

        <text x="310" y="298" textAnchor="middle" fill="#475569">
          Governor limits (100 SOQL, 150 DML, CPU time) apply to the WHOLE box above — not per automation
        </text>
      </svg>
    </figure>
  )
}
