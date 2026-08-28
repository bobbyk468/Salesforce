/** Enterprise Grid rollout change-management phases for Slack Consultant. */
export default function EnterpriseGridRolloutDiagram() {
  const phases = [
    { t: 'Discover', s: 'Team structure, workflows' },
    { t: 'Design', s: 'Channel structure, governance' },
    { t: 'Pilot', s: 'Small group, gather feedback' },
    { t: 'Rollout', s: 'Org-wide with champions' },
    { t: 'Optimize', s: 'Measure adoption, iterate' },
  ]
  return (
    <figure id="enterprise-grid-rollout-overview" className="mt-8 rounded-xl border border-gray-200 bg-gradient-to-b from-slate-50/90 to-white p-4 sm:p-6 scroll-mt-24">
      <figcaption className="text-base font-semibold text-gray-900 mb-1">Enterprise Grid rollout change-management phases (exam mental model)</figcaption>
      <p className="text-xs text-gray-600 mb-4 max-w-3xl">
        A successful Slack rollout is a change-management effort, not just a technical one — it moves through
        discovery, design, a small pilot, phased org-wide rollout with champions, then ongoing optimization.
      </p>
      <svg role="img" aria-labelledby="egr-title" className="w-full max-w-4xl mx-auto h-auto" style={{ fontSize: '11px' }} viewBox="0 0 780 130" xmlns="http://www.w3.org/2000/svg">
        <title id="egr-title">Five rollout phases: Discover, Design, Pilot, Rollout, Optimize, each building on the previous phase&apos;s feedback</title>
        <defs><marker id="egrArrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#0b5cab" /></marker></defs>
        {phases.map((p, i) => (
          <g key={p.t}>
            <rect x={16 + i * 152} y="20" width="136" height="64" rx="8" fill={i % 2 === 0 ? '#dbeafe' : '#ecfdf5'} stroke={i % 2 === 0 ? '#0b5cab' : '#059669'} strokeWidth="1.5" />
            <text x={84 + i * 152} y="46" textAnchor="middle" fill="#0f172a" fontWeight="700">{i + 1}. {p.t}</text>
            <text x={84 + i * 152} y="64" textAnchor="middle" fill="#334155">{p.s}</text>
            {i < phases.length - 1 && <path d={`M ${152 + i * 152} 52 L ${168 + i * 152} 52`} stroke="#0b5cab" strokeWidth="2" markerEnd="url(#egrArrow)" />}
          </g>
        ))}
      </svg>
    </figure>
  )
}
