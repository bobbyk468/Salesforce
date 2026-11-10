import type { SampleQuestion } from '@/components/PracticeQuestionsSection'

/** Counts for question sets loaded only after the reader asks for the full set. */
export const DEFERRED_PRACTICE_QUESTION_COUNTS = {
  administrator: 9,
} as const

export function getPracticeQuestionsTotalCount(
  sampleCount: number,
  extraQuestionsKey?: keyof typeof DEFERRED_PRACTICE_QUESTION_COUNTS,
): number {
  return sampleCount + (extraQuestionsKey ? DEFERRED_PRACTICE_QUESTION_COUNTS[extraQuestionsKey] : 0)
}

/**
 * Returns the full question set unchanged. PracticeQuestionsSection already handles
 * progressive disclosure client-side (renders an initial subset with a "show more"
 * toggle), so truncating here has no page-weight benefit; it only ever discards
 * questions (and their whyWrong rationale) with no way for users to recover them.
 */
export function getInitialPracticeQuestions(questions: SampleQuestion[]): SampleQuestion[] {
  return questions
}

/**
 * Used for the Quiz JSON-LD, which must mirror what PracticeQuestionsSection
 * actually server-renders. The base question set is now rendered in full
 * (see PracticeQuestionsSection), so this returns it unchanged; only the
 * separately dynamic-imported "extra" bank (DEFERRED_PRACTICE_QUESTION_COUNTS)
 * stays out of both the initial render and this schema.
 */
export function getVisiblePracticeQuestions(questions: SampleQuestion[]): SampleQuestion[] {
  return questions
}
