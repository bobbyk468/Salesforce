/** Einstein Discovery model deployment lifecycle for the CRM Analytics & Einstein
 * Discovery Consultant exam. */
export default function EinsteinDiscoveryLifecycleDiagram() {
  const steps = ['Prepare Data', 'Create Story', 'Train Model', 'Deploy', 'Get Predictions']
  return (
    <figure id="einstein-discovery-lifecycle-overview" className="mt-8 rounded-xl border border-gray-200 bg-gradient-to-b from-slate-50/90 to-white p-4 sm:p-6 scroll-mt-24">
      <figcaption className="text-base font-semibold text-gray-900 mb-1">Einstein Discovery model lifecycle (exam mental model)</figcaption>
      <p className="text-xs text-gray-600 mb-4 max-w-3xl">
        A Story trains a predictive model against a dataset, surfaces narrative insights and key predictors, and
        once deployed can be embedded via a <strong>prediction field</strong> or <strong>Prompt Template</strong> so
        Salesforce records get real-time predicted outcomes.
      </p>
      <svg role="img" aria-labelledby="edl-title" className="w-full max-w-4xl mx-auto h-auto" style={{ fontSize: '11px' }} viewBox="0 0 780 130" xmlns="http://www.w3.org/2000/svg">
        <title id="edl-title">Prepare data, create a Story, train the model, deploy it, then get real-time predictions embedded in Salesforce records</title>
        <defs><marker id="edlArrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#0b5cab" /></marker></defs>
        {steps.map((s, i) => (
          <g key={s}>
            <rect x={16 + i * 152} y="20" width="136" height="64" rx="8" fill={i % 2 === 0 ? '#dbeafe' : '#ecfdf5'} stroke={i % 2 === 0 ? '#0b5cab' : '#059669'} strokeWidth="1.5" />
            <text x={84 + i * 152} y="48" textAnchor="middle" fill="#0f172a" fontWeight="700">{i + 1}. {s}</text>
            {i < steps.length - 1 && <path d={`M ${152 + i * 152} 52 L ${168 + i * 152} 52`} stroke="#0b5cab" strokeWidth="2" markerEnd="url(#edlArrow)" />}
          </g>
        ))}
        <text x="390" y="112" textAnchor="middle" fill="#475569">Deployed predictions surface via prediction fields or Prompt Templates in Flow/Agentforce</text>
      </svg>
    </figure>
  )
}
