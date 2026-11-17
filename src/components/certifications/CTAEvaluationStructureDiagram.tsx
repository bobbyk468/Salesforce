const steps = [
  { label: 'Prepare a solution', minutes: 60 },
  { label: 'Present the design', minutes: 30 },
  { label: 'Answer questions', minutes: 30 },
  { label: 'Discuss feedback', minutes: 15 },
]

export default function CTAEvaluationStructureDiagram() {
  return (
    <figure id="cta-evaluation-structure-overview" className="mt-8 rounded-xl border border-gray-200 bg-slate-50 p-4 sm:p-6 scroll-mt-24">
      <figcaption className="mb-1 font-semibold text-gray-900">Architect Evaluation format</figcaption>
      <p className="mb-4 text-sm text-gray-700">
        Design a solution for a scenario and defend it live with one CTA judge. Passing the evaluation qualifies you for the Review Board.
      </p>
      <ol className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {steps.map(({ label, minutes }) => (
          <li key={label} className="rounded-lg border border-gray-200 bg-white p-3">
            <span className="block text-sm font-medium text-gray-900">{label}</span>
            <span className="text-sm text-gray-600">{minutes} minutes</span>
          </li>
        ))}
      </ol>
    </figure>
  )
}
