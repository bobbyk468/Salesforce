/** Generic visual career roadmap: parses a "Step 1 → Step 2 → Step 3" string into a
 * connected flow diagram. Used across all role hub pages so each career path renders
 * as a scannable visual instead of a single line of plain text. */
interface CareerRoadmapDiagramProps {
  roleName: string
  path: string
}

export default function CareerRoadmapDiagram({ roleName, path }: CareerRoadmapDiagramProps) {
  const steps = path.split('→').map((s) => s.trim())
  const stepWidth = 168
  const gap = 16
  const boxHeight = 76
  const width = steps.length * stepWidth + (steps.length - 1) * gap + 32
  const colors = ['#0b5cab', '#059669', '#d97706', '#dc2626', '#7c3aed']

  return (
    <figure id="career-roadmap-overview" className="mt-8 rounded-xl border border-gray-200 bg-gradient-to-b from-slate-50/90 to-white p-4 sm:p-6 scroll-mt-24">
      <figcaption className="text-base font-semibold text-gray-900 mb-1">
        {roleName} career roadmap (visual)
      </figcaption>
      <p className="text-xs text-gray-600 mb-4 max-w-3xl">
        Each step below is a real credential or role milestone — most candidates spend 6–18 months at each stage
        before advancing to the next.
      </p>
      <div className="overflow-x-auto">
        <svg
          role="img"
          aria-labelledby="career-roadmap-title"
          className="h-auto"
          style={{ fontSize: '11px', minWidth: `${Math.min(width, 900)}px`, maxWidth: '100%' }}
          viewBox={`0 0 ${width} ${boxHeight + 40}`}
          xmlns="http://www.w3.org/2000/svg"
        >
          <title id="career-roadmap-title">
            {roleName} career progression: {steps.join(' leading to ')}
          </title>
          <defs>
            <marker id="crArrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
              <path d="M0,0 L8,4 L0,8 Z" fill="#0b5cab" />
            </marker>
          </defs>
          {steps.map((step, i) => {
            const x = 16 + i * (stepWidth + gap)
            const color = colors[i % colors.length]
            return (
              <g key={`${step}-${i}`}>
                <rect
                  x={x}
                  y={16}
                  width={stepWidth}
                  height={boxHeight}
                  rx={8}
                  fill={`${color}15`}
                  stroke={color}
                  strokeWidth="1.5"
                />
                <text x={x + stepWidth / 2} y={38} textAnchor="middle" fill="#64748b" fontWeight="600" fontSize="9">
                  Step {i + 1}
                </text>
                {step.split(' ').reduce<string[]>((lines, word) => {
                  const last = lines[lines.length - 1]
                  if (last && (last + ' ' + word).length <= 22) {
                    lines[lines.length - 1] = last + ' ' + word
                  } else {
                    lines.push(word)
                  }
                  return lines
                }, []).slice(0, 3).map((line, li) => (
                  <text key={li} x={x + stepWidth / 2} y={56 + li * 15} textAnchor="middle" fill="#0f172a" fontWeight="600">
                    {line}
                  </text>
                ))}
                {i < steps.length - 1 && (
                  <path
                    d={`M ${x + stepWidth} ${16 + boxHeight / 2} L ${x + stepWidth + gap} ${16 + boxHeight / 2}`}
                    stroke="#0b5cab"
                    strokeWidth="2"
                    markerEnd="url(#crArrow)"
                  />
                )}
              </g>
            )
          })}
        </svg>
      </div>
    </figure>
  )
}
