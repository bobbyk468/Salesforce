import type { SampleQuestion } from '@/components/PracticeQuestionsSection'

/** Keep the server-rendered sample and Quiz structured data in sync. */
export const INITIAL_PRACTICE_QUESTION_COUNT = 5

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

export function getVisiblePracticeQuestions(questions: SampleQuestion[]): SampleQuestion[] {
  return questions.slice(0, INITIAL_PRACTICE_QUESTION_COUNT)
}
