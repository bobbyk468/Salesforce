/** Visual pyramid of the System Architect component exams plus final proctored exam. */
export default function SystemArchitectPyramidDiagram() {
  const certs = ['Platform Developer I', 'Integration Architect', 'IAM Architect', 'Dev Lifecycle Architect']
  return (
    <figure id="system-architect-pyramid-overview" className="mt-8 rounded-xl border border-gray-200 bg-gradient-to-b from-slate-50/90 to-white p-4 sm:p-6 scroll-mt-24">
      <figcaption className="text-base font-semibold text-gray-900 mb-1">System Architect: 4 component exams + final exam (exam mental model)</figcaption>
      <p className="text-xs text-gray-600 mb-4 max-w-3xl">
        Unlike Application Architect, System Architect requires a <strong>final proctored exam</strong> after the
        four component certifications. Platform Developer I is the only exam shared with Application Architect.
      </p>
      <svg role="img" aria-labelledby="sap-title" className="w-full max-w-3xl mx-auto h-auto" style={{ fontSize: '11px' }} viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
        <title id="sap-title">Four component certifications feed into a final proctored System Architect exam, unlike Application Architect which is auto-awarded</title>
        <defs><marker id="sapArrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#0b5cab" /></marker></defs>
        {certs.map((c, i) => (
          <g key={c}>
            <rect x={16 + i * 148} y="16" width="132" height="72" rx="8" fill={i === 0 ? '#dbeafe' : '#fef3c7'} stroke={i === 0 ? '#0b5cab' : '#d97706'} strokeWidth="1.5" />
            <text x={82 + i * 148} y="46" textAnchor="middle" fill="#0f172a" fontWeight="600">{c.split(' ').slice(0, 2).join(' ')}</text>
            <text x={82 + i * 148} y="64" textAnchor="middle" fill="#334155">{c.split(' ').slice(2).join(' ')}</text>
            <path d={`M ${82 + i * 148} 88 L ${300} 130`} stroke="#059669" strokeWidth="1.5" strokeDasharray="4 3" markerEnd="url(#sapArrow)" />
          </g>
        ))}
        <rect x="180" y="140" width="240" height="60" rx="8" fill="#fee2e2" stroke="#dc2626" strokeWidth="2" />
        <text x="300" y="162" textAnchor="middle" fill="#0f172a" fontWeight="700">Final System Architect Exam</text>
        <text x="300" y="180" textAnchor="middle" fill="#334155">Required — tests all 4 domains together</text>
      </svg>
    </figure>
  )
}
