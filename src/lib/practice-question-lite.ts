import type { SampleQuestion } from '@/components/PracticeQuestionsSection'

/**
 * Returns the full question set unchanged so every question is present in the
 * initial server-rendered page and its structured data.
 */
export function getInitialPracticeQuestions(questions: SampleQuestion[]): SampleQuestion[] {
  return questions
}

/**
 * Used for the Quiz JSON-LD, which mirrors what PracticeQuestionsSection
 * server-renders.
 */
export function getVisiblePracticeQuestions(questions: SampleQuestion[]): SampleQuestion[] {
  return questions
}
