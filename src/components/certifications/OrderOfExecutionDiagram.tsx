/**
 * Salesforce record save order of execution for Administrator (ADM-201): the single
 * most commonly tested sequencing topic on the exam, from system validation through
 * post-commit async logic.
 */
export default function OrderOfExecutionDiagram() {
  return (
    <figure
      id="order-of-execution-overview"
      className="mt-8 rounded-xl border border-gray-200 bg-gradient-to-b from-slate-50/90 to-white p-4 sm:p-6 scroll-mt-24"
    >
      <figcaption className="text-base font-semibold text-gray-900 mb-1">
        Order of Execution when a record saves (exam mental model)
      </figcaption>
      <p className="text-xs text-gray-600 mb-4 max-w-3xl">
        Salesforce runs a fixed sequence every time a record is saved. Validation and{' '}
        <strong>before-save</strong> logic run first, the record is written to the database, then{' '}
        <strong>after-save</strong> automation (assignment rules, workflow, Flow, escalation) fires — with
        post-commit actions like emails and async Apex running only after the transaction succeeds.
      </p>
      <svg
        role="img"
        aria-labelledby="ooe-diagram-title"
        className="w-full max-w-3xl mx-auto h-auto"
        style={{ fontSize: '11px' }}
        viewBox="0 0 560 460"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title id="ooe-diagram-title">
          Diagram: system validation, before triggers, validation rules, duplicate rules, database write, after
          triggers, assignment rules, workflow rules, Flow/Process Builder, escalation rules, database commit, then
          post-commit async logic
        </title>
        <defs>
          <marker id="ooeArrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 Z" fill="#0b5cab" />
          </marker>
        </defs>

        {[
          { y: 8, fill: '#f1f5f9', stroke: '#64748b', title: '1. System Validation', sub: 'Required fields, data types, max length' },
          { y: 60, fill: '#dbeafe', stroke: '#0b5cab', title: '2. Before-Save Triggers', sub: 'Apex before insert/update logic' },
          { y: 112, fill: '#f1f5f9', stroke: '#64748b', title: '3. Custom Validation Rules', sub: 'Admin-defined field/record checks' },
          { y: 164, fill: '#f1f5f9', stroke: '#64748b', title: '4. Duplicate Rules', sub: 'Block or alert on matching records' },
        ].map((s) => (
          <g key={s.title}>
            <rect x="30" y={s.y} width="500" height="44" rx="8" fill={s.fill} stroke={s.stroke} strokeWidth="1.5" />
            <text x="50" y={s.y + 18} fill="#0f172a" fontWeight="600">{s.title}</text>
            <text x="50" y={s.y + 34} fill="#475569">{s.sub}</text>
          </g>
        ))}
        <path d="M 280 52 L 280 60" stroke="#0b5cab" strokeWidth="2" markerEnd="url(#ooeArrow)" />
        <path d="M 280 104 L 280 112" stroke="#0b5cab" strokeWidth="2" markerEnd="url(#ooeArrow)" />
        <path d="M 280 156 L 280 164" stroke="#0b5cab" strokeWidth="2" markerEnd="url(#ooeArrow)" />
        <path d="M 280 208 L 280 224" stroke="#0b5cab" strokeWidth="2" markerEnd="url(#ooeArrow)" />

        <rect x="30" y="224" width="500" height="40" rx="8" fill="#ecfdf5" stroke="#059669" strokeWidth="2" />
        <text x="280" y="248" textAnchor="middle" fill="#0f172a" fontWeight="700">
          Record written to database (not yet committed)
        </text>

        <path d="M 280 264 L 280 280" stroke="#0b5cab" strokeWidth="2" markerEnd="url(#ooeArrow)" />

        {[
          { y: 280, fill: '#dbeafe', stroke: '#0b5cab', title: '5. After-Save Triggers', sub: 'Apex after insert/update logic' },
          { y: 332, fill: '#f1f5f9', stroke: '#64748b', title: '6. Assignment & Auto-Response Rules', sub: 'Lead/Case routing, auto-reply emails' },
          { y: 384, fill: '#fef3c7', stroke: '#d97706', title: '7. Workflow Rules, Flow & Escalation Rules', sub: 'May re-trigger before/after logic once more' },
        ].map((s) => (
          <g key={s.title}>
            <rect x="30" y={s.y} width="500" height="44" rx="8" fill={s.fill} stroke={s.stroke} strokeWidth="1.5" />
            <text x="50" y={s.y + 18} fill="#0f172a" fontWeight="600">{s.title}</text>
            <text x="50" y={s.y + 34} fill="#475569">{s.sub}</text>
          </g>
        ))}
        <path d="M 280 324 L 280 332" stroke="#0b5cab" strokeWidth="2" markerEnd="url(#ooeArrow)" />
        <path d="M 280 376 L 280 384" stroke="#0b5cab" strokeWidth="2" markerEnd="url(#ooeArrow)" />

        <text x="280 " y="440" textAnchor="middle" fill="#334155" fontWeight="600">
          → Transaction commits → post-commit async (emails, future/queueable Apex)
        </text>
      </svg>
    </figure>
  )
}
