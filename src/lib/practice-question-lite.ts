import type { SampleQuestion } from '@/components/PracticeQuestionsSection'

export function getInitialPracticeQuestions(
  questions: SampleQuestion[],
  count = 2,
): SampleQuestion[] {
  return questions.slice(0, count).map(({ question, options, correctAnswer, explanation }) => ({
    question,
    options,
    correctAnswer,
    explanation,
  }))
}
