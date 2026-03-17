import { Brain } from 'lucide-react'
import { getCertDifficultyLevel, DifficultyLevel } from '@/lib/certifications-data'

interface DifficultyBadgeProps {
  slug: string
  size?: 'sm' | 'md' | 'lg'
}

const difficultyConfig: Record<DifficultyLevel, { color: string; bgColor: string; label: string }> = {
  beginner: { color: 'text-emerald-700', bgColor: 'bg-emerald-100', label: 'Beginner' },
  intermediate: { color: 'text-amber-700', bgColor: 'bg-amber-100', label: 'Intermediate' },
  advanced: { color: 'text-red-700', bgColor: 'bg-red-100', label: 'Advanced' },
  expert: { color: 'text-purple-700', bgColor: 'bg-purple-100', label: 'Expert' },
}

export default function DifficultyBadge({ slug, size = 'md' }: DifficultyBadgeProps) {
  const difficulty = getCertDifficultyLevel(slug)
  const config = difficultyConfig[difficulty]

  const sizeClasses = {
    sm: 'px-2 py-1 text-xs gap-1',
    md: 'px-3 py-1.5 text-sm gap-1.5',
    lg: 'px-4 py-2 text-base gap-2',
  }

  const iconSize = {
    sm: 'h-3 w-3',
    md: 'h-4 w-4',
    lg: 'h-5 w-5',
  }

  return (
    <span
      className={`inline-flex items-center rounded-full font-semibold ${config.bgColor} ${config.color} ${sizeClasses[size]} border border-current/10`}
      aria-label={`Certification difficulty: ${config.label}`}
    >
      <Brain className={iconSize[size]} aria-hidden="true" />
      <span>{config.label}</span>
    </span>
  )
}
