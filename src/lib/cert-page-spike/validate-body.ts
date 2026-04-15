/**
 * Runtime validation for promoted associate cert bodies.
 * Catches structural issues at build time before they break pages at runtime.
 */

import type { AssociateSpikeBody, IntroSegment, RichSectionBlock, SpikeSampleQuestion } from './types'

function isIntroSegment(x: unknown): x is IntroSegment {
  if (typeof x !== 'object' || x === null) return false
  const obj = x as any
  if (obj.type === 'text' && typeof obj.text === 'string') return true
  if (obj.type === 'strong' && typeof obj.text === 'string') return true
  if (obj.type === 'link' && typeof obj.href === 'string' && typeof obj.label === 'string') return true
  return false
}

function isRichSectionBlock(x: unknown): x is RichSectionBlock {
  if (typeof x !== 'object' || x === null) return false
  const obj = x as any
  if (typeof obj.heading !== 'string') return false
  if (typeof obj.body !== 'string') return false
  if (obj.bodySegments !== undefined) {
    if (!Array.isArray(obj.bodySegments) || !obj.bodySegments.every(isIntroSegment)) {
      return false
    }
  }
  return true
}

function isSpikeSampleQuestion(x: unknown): x is SpikeSampleQuestion {
  if (typeof x !== 'object' || x === null) return false
  const obj = x as any
  if (typeof obj.question !== 'string') return false
  if (!Array.isArray(obj.options) || !obj.options.every((o: any) => typeof o === 'string')) return false
  if (typeof obj.correctAnswer !== 'number') return false
  if (obj.explanation !== undefined && typeof obj.explanation !== 'string') return false
  if (obj.whyWrong !== undefined) {
    if (!Array.isArray(obj.whyWrong) || !obj.whyWrong.every((w: any) => typeof w === 'string')) {
      return false
    }
  }
  return true
}

export function validateAssociateSpikeBody(json: unknown, slug: string): AssociateSpikeBody {
  if (typeof json !== 'object' || json === null) {
    throw new Error(`[${slug}] Body must be an object`)
  }

  const obj = json as any

  // Validate template
  if (obj.template !== 'associate') {
    throw new Error(`[${slug}] template must be 'associate', got '${obj.template}'`)
  }

  // Validate certificationCard
  if (!obj.certificationCard || typeof obj.certificationCard !== 'object') {
    throw new Error(`[${slug}] certificationCard is required and must be an object`)
  }
  const card = obj.certificationCard
  if (typeof card.code !== 'string') throw new Error(`[${slug}] certificationCard.code must be a string`)
  if (typeof card.description !== 'string') {
    throw new Error(`[${slug}] certificationCard.description must be a string`)
  }
  if (!card.examDetails || typeof card.examDetails !== 'object') {
    throw new Error(`[${slug}] certificationCard.examDetails is required`)
  }
  const details = card.examDetails
  if (typeof details.questions !== 'number' && typeof details.questions !== 'string') {
    throw new Error(`[${slug}] examDetails.questions must be a number or string`)
  }
  if (typeof details.passingScore !== 'string') {
    throw new Error(`[${slug}] examDetails.passingScore must be a string`)
  }
  if (typeof details.duration !== 'string') throw new Error(`[${slug}] examDetails.duration must be a string`)
  if (typeof details.cost !== 'string') throw new Error(`[${slug}] examDetails.cost must be a string`)
  if (!Array.isArray(card.topics) || !card.topics.every((t: any) => typeof t === 'string')) {
    throw new Error(`[${slug}] certificationCard.topics must be an array of strings`)
  }

  // Validate keyConcepts
  if (!obj.keyConcepts || typeof obj.keyConcepts !== 'object') {
    throw new Error(`[${slug}] keyConcepts is required`)
  }
  if (typeof obj.keyConcepts.h2 !== 'string') {
    throw new Error(`[${slug}] keyConcepts.h2 must be a string`)
  }
  if (!Array.isArray(obj.keyConcepts.blocks) || !obj.keyConcepts.blocks.every(isRichSectionBlock)) {
    throw new Error(`[${slug}] keyConcepts.blocks must be an array of RichSectionBlock`)
  }

  // Validate scenarioTips
  if (!obj.scenarioTips || typeof obj.scenarioTips !== 'object') {
    throw new Error(`[${slug}] scenarioTips is required`)
  }
  if (typeof obj.scenarioTips.h2 !== 'string') {
    throw new Error(`[${slug}] scenarioTips.h2 must be a string`)
  }
  if (typeof obj.scenarioTips.intro !== 'string') {
    throw new Error(`[${slug}] scenarioTips.intro must be a string`)
  }
  if (!Array.isArray(obj.scenarioTips.blocks) || !obj.scenarioTips.blocks.every(isRichSectionBlock)) {
    throw new Error(`[${slug}] scenarioTips.blocks must be an array of RichSectionBlock`)
  }

  // Validate tocSections
  if (!Array.isArray(obj.tocSections) || !obj.tocSections.every((s: any) => typeof s.id === 'string' && typeof s.title === 'string')) {
    throw new Error(`[${slug}] tocSections must be an array of { id: string, title: string }`)
  }

  // Validate sampleQuestions
  if (!Array.isArray(obj.sampleQuestions) || !obj.sampleQuestions.every(isSpikeSampleQuestion)) {
    throw new Error(`[${slug}] sampleQuestions must be an array of SpikeSampleQuestion`)
  }

  // Validate optional fields
  if (obj.introLead !== undefined) {
    if (!Array.isArray(obj.introLead) || !obj.introLead.every(isIntroSegment)) {
      throw new Error(`[${slug}] introLead must be an array of IntroSegment`)
    }
  }

  if (obj.practiceQuestionsIntroSuffix !== undefined && typeof obj.practiceQuestionsIntroSuffix !== 'string') {
    throw new Error(`[${slug}] practiceQuestionsIntroSuffix must be a string`)
  }

  if (obj.nextCertsAfter !== undefined) {
    if (typeof obj.nextCertsAfter !== 'object') {
      throw new Error(`[${slug}] nextCertsAfter must be an object`)
    }
    if (typeof obj.nextCertsAfter.heading !== 'string') {
      throw new Error(`[${slug}] nextCertsAfter.heading must be a string`)
    }
    if (typeof obj.nextCertsAfter.intro !== 'string') {
      throw new Error(`[${slug}] nextCertsAfter.intro must be a string`)
    }
    if (!Array.isArray(obj.nextCertsAfter.links)) {
      throw new Error(`[${slug}] nextCertsAfter.links must be an array`)
    }
    for (const link of obj.nextCertsAfter.links) {
      if (typeof link.href !== 'string' || typeof link.label !== 'string') {
        throw new Error(`[${slug}] nextCertsAfter.links must be array of { href: string, label: string }`)
      }
    }
  }

  return obj as AssociateSpikeBody
}
