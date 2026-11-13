import type {
  AgentforceSpecialistSpikeBody,
  ExamDifficulty,
  ExamFormat,
  IntroSegment,
  RichSectionBlock,
  SpikeSampleQuestion,
  WhoIsThisFor,
} from './types'
import bodyJson from './agentforce-specialist-body.json'

export const AGENTFORCE_SPECIALIST_SLUG = 'agentforce-specialist' as const

export const agentforceSpecialistCertPageBody: AgentforceSpecialistSpikeBody = {
  template: 'agentforce-specialist',
}

type AgentforceSpecialistContent = {
  introLead: IntroSegment[]
  whoIsThisFor: WhoIsThisFor
  examDifficulty: ExamDifficulty
  examFormat: ExamFormat
  certificationCard: {
    code: string
    description: string
    examDetails: { questions: number | string; passingScore: string; duration: string; cost: string }
    topics: string[]
  }
  keyConcepts: { h2: string; blocks: RichSectionBlock[] }
  scenarioTips: { h2: string; intro: string; blocks: RichSectionBlock[] }
  nextCertsAfter: { heading: string; intro: string; links: { href: string; label: string }[] }
  sampleQuestions: SpikeSampleQuestion[]
}

export const agentforceSpecialistContent = bodyJson as AgentforceSpecialistContent
