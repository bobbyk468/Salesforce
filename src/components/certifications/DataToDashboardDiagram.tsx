/** Data source to dashboard pipeline for Tableau Data Analyst. */
export default function DataToDashboardDiagram() {
  const steps = ['Connect to Data', 'Shape (joins/blends)', 'Build Worksheets', 'Assemble Dashboard', 'Publish & Share']
  return (
    <figure id="data-to-dashboard-overview" className="mt-8 rounded-xl border border-gray-200 bg-gradient-to-b from-slate-50/90 to-white p-4 sm:p-6 scroll-mt-24">
      <figcaption className="text-base font-semibold text-gray-900 mb-1">Data source to dashboard pipeline (exam mental model)</figcaption>
      <p className="text-xs text-gray-600 mb-4 max-w-3xl">
        Every Tableau project follows the same five stages — this pipeline structure underlies most Data Analyst
        exam scenarios about calculated fields, joins, and dashboard actions.
      </p>
      <svg role="img" aria-labelledby="dtd-title" className="w-full max-w-4xl mx-auto h-auto" style={{ fontSize: '11px' }} viewBox="0 0 780 130" xmlns="http://www.w3.org/2000/svg">
        <title id="dtd-title">Five-stage pipeline: Connect to Data, Shape with joins and blends, Build Worksheets, Assemble Dashboard, Publish and Share</title>
        <defs><marker id="dtdArrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#0b5cab" /></marker></defs>
        {steps.map((s, i) => (
          <g key={s}>
            <rect x={16 + i * 152} y="20" width="136" height="64" rx="8" fill={i % 2 === 0 ? '#dbeafe' : '#ecfdf5'} stroke={i % 2 === 0 ? '#0b5cab' : '#059669'} strokeWidth="1.5" />
            <text x={84 + i * 152} y="48" textAnchor="middle" fill="#0f172a" fontWeight="700" fontSize="10">{i + 1}. {s.split(' (')[0]}</text>
            {s.includes('(') && <text x={84 + i * 152} y="64" textAnchor="middle" fill="#334155" fontSize="9">({s.split('(')[1]}</text>}
            {i < steps.length - 1 && <path d={`M ${152 + i * 152} 52 L ${168 + i * 152} 52`} stroke="#0b5cab" strokeWidth="2" markerEnd="url(#dtdArrow)" />}
          </g>
        ))}
      </svg>
    </figure>
  )
}
