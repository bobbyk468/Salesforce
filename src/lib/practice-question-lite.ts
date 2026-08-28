import type { SampleQuestion } from '@/components/PracticeQuestionsSection'

/**
 * Returns the full question set unchanged. PracticeQuestionsSection already handles
 * progressive disclosure client-side (renders an initial subset with a "show more"
 * toggle), so truncating here has no page-weight benefit — it only ever discards
 * questions (and their whyWrong rationale) with no way for users to recover them.
 */
export function getInitialPracticeQuestions(questions: SampleQuestion[]): SampleQuestion[] {
  return questions
}
