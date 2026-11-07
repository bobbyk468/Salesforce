import type { SampleQuestion } from '@/components/PracticeQuestionsSection'
/** The imported SF-Questions bank has no confirmed publication rights.
 * Keep the site's authored samples in the rendered pages until clearance is recorded.
 */
export function getPracticeQuestionsForExam(_slug: string, fallback: SampleQuestion[]): SampleQuestion[] {
  return fallback
}

export function hasImportedPracticeQuestions(_slug: string): boolean {
  return false
}
