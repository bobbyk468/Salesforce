import { EXAM_WEIGHTAGE, type ExamSection } from '@/lib/exam-weightage-data'
import { OFFICIAL_CERT_NAMES } from '@/lib/cert-official-names'
import { getExamLogistics, slugToDisplayName } from '@/lib/cert-seo-data'

export type CalculatorExam = {
  slug: string
  name: string
  /** Pass mark as a number, e.g. 65 for "65%". */
  passMark: number
  /** Raw pass-mark label as published, kept for display ("~65%" stays fuzzy). */
  passMarkLabel: string
  sections: ExamSection[]
}

/**
 * The certifications the score calculator can model.
 *
 * An exam qualifies only when we hold both its section weightage and a
 * published pass mark, and the weightages sum to roughly 100. Anything else
 * would give a confidently wrong number, which is worse than not offering
 * the exam at all — people use this to decide whether to rebook.
 *
 * Practice-test aliases are excluded; they are duplicates of their parent.
 */
export function getCalculatorExams(): CalculatorExam[] {
  const exams: CalculatorExam[] = []

  for (const [slug, sections] of Object.entries(EXAM_WEIGHTAGE)) {
    if (slug.endsWith('-practice-test')) continue
    if (!sections?.length) continue

    const total = sections.reduce((sum, s) => sum + s.percentage, 0)
    if (total < 97 || total > 103) continue

    const logistics = getExamLogistics(slug)
    const label = logistics?.passingScore
    if (!label) continue
    const passMark = Number.parseFloat(label.replace(/[^\d.]/g, ''))
    if (!Number.isFinite(passMark) || passMark <= 0 || passMark >= 100) continue

    exams.push({
      slug,
      name: (OFFICIAL_CERT_NAMES[slug] || slugToDisplayName(slug)).replace(/^Salesforce Certified\s+/i, ''),
      passMark,
      passMarkLabel: label,
      sections,
    })
  }

  return exams.sort((a, b) => a.name.localeCompare(b.name))
}

/**
 * Weighted overall score from per-section percentages.
 *
 * Salesforce reports a percentage per section and not an overall figure, so
 * the overall is the sections weighted by their published share of the exam.
 * Sections are normalised by the weight actually supplied, so a partially
 * filled form still returns a meaningful number for what was entered.
 */
export function computeWeightedScore(
  sections: ExamSection[],
  entered: Record<string, number | null>,
): { score: number | null; usedWeight: number } {
  let weighted = 0
  let usedWeight = 0
  for (const section of sections) {
    const value = entered[section.name]
    if (value == null || !Number.isFinite(value)) continue
    weighted += (value * section.percentage) / 100
    usedWeight += section.percentage
  }
  if (usedWeight === 0) return { score: null, usedWeight: 0 }
  return { score: (weighted / usedWeight) * 100, usedWeight }
}
