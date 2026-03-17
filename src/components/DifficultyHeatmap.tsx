import { DIFFICULTY_DATA, type DifficultyLevel } from '@/lib/difficulty-data'

const DIFFICULTY_STYLES: Record<DifficultyLevel, { bg: string; text: string; label: string }> = {
  Easy:     { bg: 'bg-green-50',  text: 'text-green-700',  label: 'Easy' },
  Moderate: { bg: 'bg-amber-50',  text: 'text-amber-700',  label: 'Moderate' },
  Hard:     { bg: 'bg-orange-50', text: 'text-orange-700', label: 'Hard' },
  Trap:     { bg: 'bg-red-50',    text: 'text-red-700',    label: 'Trap ⚠' },
}

interface DifficultyHeatmapProps {
  slug: string
}

export default function DifficultyHeatmap({ slug }: DifficultyHeatmapProps) {
  const sections = DIFFICULTY_DATA[slug]
  if (!sections || sections.length === 0) return null

  return (
    <div id="difficulty-heatmap" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Exam Section Difficulty Heatmap</h2>
      <p className="text-sm text-gray-600 mb-5">
        Which sections are a gimme vs which ones trap confident candidates. Use this to prioritise your final-week revision.
      </p>
      <div className="overflow-x-auto">
        <table className="min-w-[500px] w-full text-sm text-left border-collapse">
          <thead>
            <tr className="border-b-2 border-gray-200">
              <th scope="col" className="py-2.5 pr-4 font-semibold text-gray-900">Exam Section</th>
              <th scope="col" className="py-2.5 w-24 font-semibold text-gray-900 text-center">Difficulty</th>
              <th scope="col" className="py-2.5 font-semibold text-gray-900">Study Tip</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {sections.map((section) => {
              const style = DIFFICULTY_STYLES[section.difficulty]
              return (
                <tr key={section.sectionName}>
                  <td className="py-2.5 pr-4 font-medium text-gray-800">{section.sectionName}</td>
                  <td className="py-2.5 pr-4 text-center">
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${style.bg} ${style.text}`}
                      aria-label={`Difficulty: ${style.label}`}
                    >
                      {style.label}
                    </span>
                  </td>
                  <td className="py-2.5 text-gray-700">{section.tip}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-gray-600 mt-4">
        Difficulty based on analysis of common candidate errors across each exam section.
      </p>
    </div>
  )
}
