import type { SampleQuestion } from '@/components/PracticeQuestionsSection'
import importedBanks from '@/lib/question-banks/imported/banks.json'

const banks = importedBanks as Record<string, SampleQuestion[]>

/** Resolve on the server so each client quiz receives only its own exam bank. */
export function getPracticeQuestionsForExam(slug: string, fallback: SampleQuestion[]): SampleQuestion[] {
  return banks[slug]?.length ? banks[slug] : fallback
}

export function hasImportedPracticeQuestions(slug: string): boolean {
  return Boolean(banks[slug]?.length)
}
