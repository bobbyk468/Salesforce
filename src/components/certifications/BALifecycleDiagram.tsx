/** Business Analyst discovery-to-deployment lifecycle: the recurring exam framework for
 * sequencing requirements work on a Salesforce project. */
export default function BALifecycleDiagram() {
  const steps = [
    { t: 'Discovery', s: 'Stakeholder interviews, workshops' },
    { t: 'Requirements', s: 'User stories, acceptance criteria' },
    { t: 'Design', s: 'Solution mapped to Salesforce features' },
    { t: 'Build & Test', s: 'Traceability matrix validates coverage' },
    { t: 'Deploy & Validate', s: 'UAT, solution validation, adoption' },
  ]
  return (
    <figure id="ba-lifecycle-overview" className="mt-8 rounded-xl border border-gray-200 bg-gradient-to-b from-slate-50/90 to-white p-4 sm:p-6 scroll-mt-24">
      <figcaption className="text-base font-semibold text-gray-900 mb-1">Business Analyst discovery-to-deployment lifecycle (exam mental model)</figcaption>
      <p className="text-xs text-gray-600 mb-4 max-w-3xl">
        Every BA exam scenario maps to one of five stages. A Requirements Traceability Matrix ties each stage&apos;s
        artifacts back to the original business requirement, so nothing is built — or tested — that wasn&apos;t asked for.
      </p>
      <svg role="img" aria-labelledby="ba-title" className="w-full max-w-4xl mx-auto h-auto" style={{ fontSize: '11px' }} viewBox="0 0 780 140" xmlns="http://www.w3.org/2000/svg">
        <title id="ba-title">Five-stage BA lifecycle: Discovery, Requirements, Design, Build and Test, Deploy and Validate, connected left to right</title>
        <defs><marker id="baArrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#0b5cab" /></marker></defs>
        {steps.map((step, i) => (
          <g key={step.t}>
            <rect x={16 + i * 152} y="20" width="136" height="76" rx="8" fill={i % 2 === 0 ? '#dbeafe' : '#ecfdf5'} stroke={i % 2 === 0 ? '#0b5cab' : '#059669'} strokeWidth="1.5" />
            <text x={84 + i * 152} y="44" textAnchor="middle" fill="#0f172a" fontWeight="700">{i + 1}. {step.t}</text>
            <text x={84 + i * 152} y="64" textAnchor="middle" fill="#334155">{step.s.split(', ')[0]}</text>
            {step.s.split(', ')[1] && <text x={84 + i * 152} y="80" textAnchor="middle" fill="#334155">{step.s.split(', ')[1]}</text>}
            {i < steps.length - 1 && <path d={`M ${152 + i * 152} 58 L ${168 + i * 152} 58`} stroke="#0b5cab" strokeWidth="2" markerEnd="url(#baArrow)" />}
          </g>
        ))}
        <text x="390" y="128" textAnchor="middle" fill="#475569">Requirements Traceability Matrix links every stage back to the original requirement</text>
      </svg>
    </figure>
  )
}
