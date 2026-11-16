/**
 * The events a practice question card dispatches when its answer is checked
 * or cleared, and which the running score bar listens for.
 *
 * These live in `lib` rather than on the score-bar component so that
 * QuestionCard does not have to import another client component (and drag it
 * into its module graph) just to name two strings.
 */
export const QUIZ_ANSWER_EVENT = 'cert-quiz-answer'
export const QUIZ_RESET_EVENT = 'cert-quiz-reset'

/** Payload both events carry. */
export interface QuizAnswerEventDetail {
  questionNumber: number
  correct: boolean
}
