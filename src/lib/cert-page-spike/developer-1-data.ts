import type { PdiSpikeBody } from './types'

export const DEVELOPER_1_SLUG = 'developer-1' as const

/** PD1: bespoke layout in `Developer1CertBody`; registry entry is a marker only. */
export const developer1CertPageBody: PdiSpikeBody = {
  template: 'pd1',
}
