/** Visual pyramid of the 4 Application Architect component exams. */
export default function ApplicationArchitectPyramidDiagram() {
  const certs = ['Platform App Builder', 'Platform Developer I', 'Data Architect', 'Sharing & Visibility Architect']
  return (
    <figure id="app-architect-pyramid-overview" className="mt-8 rounded-xl border border-gray-200 bg-gradient-to-b from-slate-50/90 to-white p-4 sm:p-6 scroll-mt-24">
      <figcaption className="text-base font-semibold text-gray-900 mb-1">Application Architect: the 4-cert pyramid (exam mental model)</figcaption>
      <p className="text-xs text-gray-600 mb-4 max-w-3xl">
        This is not a single exam — Salesforce auto-awards the credential once all four component certifications
        below are passed, in any order.
      </p>
      <svg role="img" aria-labelledby="aap-title" className="w-full max-w-3xl mx-auto h-auto" style={{ fontSize: '11px' }} viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg">
        <title id="aap-title">Four component certifications — Platform App Builder, Platform Developer I, Data Architect, Sharing and Visibility Architect — feed into the auto-awarded Application Architect credential</title>
        <defs><marker id="aapArrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#0b5cab" /></marker></defs>
        {certs.map((c, i) => (
          <g key={c}>
            <rect x={16 + i * 148} y="16" width="132" height="72" rx="8" fill={i < 2 ? '#dbeafe' : '#fef3c7'} stroke={i < 2 ? '#0b5cab' : '#d97706'} strokeWidth="1.5" />
            <text x={82 + i * 148} y="46" textAnchor="middle" fill="#0f172a" fontWeight="600">{c.split(' ').slice(0, 2).join(' ')}</text>
            <text x={82 + i * 148} y="64" textAnchor="middle" fill="#334155">{c.split(' ').slice(2).join(' ')}</text>
            <path d={`M ${82 + i * 148} 88 L ${300} 130`} stroke="#059669" strokeWidth="1.5" strokeDasharray="4 3" markerEnd="url(#aapArrow)" />
          </g>
        ))}
        <rect x="200" y="140" width="200" height="52" rx="8" fill="#ecfdf5" stroke="#059669" strokeWidth="2" />
        <text x="300" y="162" textAnchor="middle" fill="#0f172a" fontWeight="700">Application Architect</text>
        <text x="300" y="178" textAnchor="middle" fill="#334155">Auto-awarded — no separate exam</text>
      </svg>
    </figure>
  )
}
