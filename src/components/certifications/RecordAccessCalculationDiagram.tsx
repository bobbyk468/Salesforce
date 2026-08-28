/** Record access calculation flowchart for Sharing & Visibility Architect. */
export default function RecordAccessCalculationDiagram() {
  return (
    <figure id="record-access-calc-overview" className="mt-8 rounded-xl border border-gray-200 bg-gradient-to-b from-slate-50/90 to-white p-4 sm:p-6 scroll-mt-24">
      <figcaption className="text-base font-semibold text-gray-900 mb-1">Record access calculation flowchart (exam mental model)</figcaption>
      <p className="text-xs text-gray-600 mb-4 max-w-3xl">
        A user&apos;s access to a record is the union of every path shown below. If any one path grants access, the
        record is visible — this is why architects trace all four sources when diagnosing a visibility issue.
      </p>
      <svg role="img" aria-labelledby="rac-title" className="w-full max-w-3xl mx-auto h-auto" style={{ fontSize: '11px' }} viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
        <title id="rac-title">Four access paths — OWD, role hierarchy, sharing rules, manual/team shares — all feed into a union that determines whether a user can see a record</title>
        <defs><marker id="racArrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#0b5cab" /></marker></defs>
        {['OWD grants it', 'Role hierarchy grants it', 'A sharing rule grants it', 'Manual/team share grants it'].map((t, i) => (
          <g key={t}>
            <rect x={16 + (i % 2) * 300} y={16 + Math.floor(i / 2) * 68} width="280" height="52" rx="8" fill={i % 2 === 0 ? '#dbeafe' : '#ecfdf5'} stroke={i % 2 === 0 ? '#0b5cab' : '#059669'} strokeWidth="1.5" />
            <text x={156 + (i % 2) * 300} y={16 + Math.floor(i / 2) * 68 + 32} textAnchor="middle" fill="#0f172a" fontWeight="600">{t}</text>
            <path d={`M ${156 + (i % 2) * 300} ${68 + Math.floor(i / 2) * 68} L 300 168`} stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="3 3" />
          </g>
        ))}
        <rect x="180" y="176" width="240" height="40" rx="8" fill="#fef3c7" stroke="#d97706" strokeWidth="2" />
        <text x="300" y="200" textAnchor="middle" fill="#0f172a" fontWeight="700">ANY match → record is visible</text>
      </svg>
    </figure>
  )
}
