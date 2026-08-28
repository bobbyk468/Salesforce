/** Large Data Volume mitigation strategies for Data Architect. */
export default function LDVMitigationDiagram() {
  const strategies = [
    { t: 'Skinny Tables', s: 'Fewer joins for common reports' },
    { t: 'Indexed Fields', s: 'Custom indexes on filtered fields' },
    { t: 'Selective Queries', s: 'Avoid full-table scans in SOQL' },
    { t: 'Archiving', s: 'Move cold data to Big Objects' },
  ]
  return (
    <figure id="ldv-mitigation-overview" className="mt-8 rounded-xl border border-gray-200 bg-gradient-to-b from-slate-50/90 to-white p-4 sm:p-6 scroll-mt-24">
      <figcaption className="text-base font-semibold text-gray-900 mb-1">LDV mitigation strategies (exam mental model)</figcaption>
      <p className="text-xs text-gray-600 mb-4 max-w-3xl">
        Large Data Volume orgs (millions of records) need proactive design — skinny tables and indexing to keep
        queries selective, and archiving to Big Objects to keep active tables lean.
      </p>
      <svg role="img" aria-labelledby="ldv-title" className="w-full max-w-3xl mx-auto h-auto" style={{ fontSize: '11px' }} viewBox="0 0 620 130" xmlns="http://www.w3.org/2000/svg">
        <title id="ldv-title">Four LDV mitigation strategies: skinny tables, indexed fields, selective queries, and archiving to Big Objects, all reducing query and storage pressure</title>
        {strategies.map((s, i) => (
          <g key={s.t}>
            <rect x={16 + i * 152} y="16" width="136" height="80" rx="8" fill={i % 2 === 0 ? '#dbeafe' : '#ecfdf5'} stroke={i % 2 === 0 ? '#0b5cab' : '#059669'} strokeWidth="1.5" />
            <text x={84 + i * 152} y="42" textAnchor="middle" fill="#0f172a" fontWeight="700">{s.t}</text>
            <text x={84 + i * 152} y="62" textAnchor="middle" fill="#334155">{s.s.split(' ').slice(0, 3).join(' ')}</text>
            <text x={84 + i * 152} y="78" textAnchor="middle" fill="#334155">{s.s.split(' ').slice(3).join(' ')}</text>
          </g>
        ))}
      </svg>
    </figure>
  )
}
