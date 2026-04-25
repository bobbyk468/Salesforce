// Centralised Salesforce exam pricing tiers — single source of truth.
// Used by ExamLogisticsSection (cert pages) and ExamPricingCard (study guides / exam tips).

export type PricingTier = 'associate' | 'standard' | 'ap' | 'architect' | 'cta-panel' | 'cta-board'

export interface TierPricing {
  tier: PricingTier
  label: string        // human-readable tier name
  fee: number          // USD, numeric for GST calculation
  retake: number       // 0 = free
  feeDisplay: string
  retakeDisplay: string
  note?: string        // e.g. "No retake discount — same fee applies"
}

export const PRICING_TIERS: Record<PricingTier, TierPricing> = {
  associate: {
    tier: 'associate',
    label: 'Associate',
    fee: 75,
    retake: 0,
    feeDisplay: '$75',
    retakeDisplay: 'Free',
  },
  standard: {
    tier: 'standard',
    label: 'Standard',
    fee: 200,
    retake: 100,
    feeDisplay: '$200',
    retakeDisplay: '$100',
  },
  ap: {
    tier: 'ap',
    label: 'Accredited Professional',
    fee: 150,
    retake: 150,
    feeDisplay: '$150',
    retakeDisplay: '$150',
    note: 'No retake discount — same fee applies for every attempt.',
  },
  architect: {
    tier: 'architect',
    label: 'Architect',
    fee: 400,
    retake: 200,
    feeDisplay: '$400',
    retakeDisplay: '$200',
  },
  'cta-panel': {
    tier: 'cta-panel',
    label: 'CTA — Panel Review',
    fee: 1500,
    retake: 750,
    feeDisplay: '$1,500',
    retakeDisplay: '$750',
  },
  'cta-board': {
    tier: 'cta-board',
    label: 'CTA — Board Review',
    fee: 4500,
    retake: 2250,
    feeDisplay: '$4,500',
    retakeDisplay: '$2,250',
  },
}

// Derive tier from the fee string already stored in cert-seo-data.ts.
// Keeps this file in sync without duplicating the slug mapping.
export function tierFromFeeString(feeStr: string): TierPricing {
  const num = parseInt(feeStr.replace(/[^0-9]/g, ''), 10)
  if (num <= 75)   return PRICING_TIERS.associate
  if (num === 150) return PRICING_TIERS.ap
  if (num === 400) return PRICING_TIERS.architect
  if (num === 1500) return PRICING_TIERS['cta-panel']
  if (num >= 4500) return PRICING_TIERS['cta-board']
  return PRICING_TIERS.standard
}

// ---------------------------------------------------------------------------
// India GST (18 %) — informational note shown on all pricing displays.
// Salesforce adds GST on top of the USD fee for registrations in India.
// The INR approximation uses a fixed rate; actual rate at checkout may vary.
// ---------------------------------------------------------------------------
const GST_RATE = 0.18
const USD_INR_APPROX = 84

export function getIndiaGstNote(feeUsd: number): string {
  if (feeUsd === 0) return ''
  const withGst = Math.round(feeUsd * (1 + GST_RATE))
  const inr = Math.round(feeUsd * USD_INR_APPROX * (1 + GST_RATE) / 100) * 100
  return `India: +18% GST applies — approx. $${withGst} USD (~₹${inr.toLocaleString('en-IN')}) per attempt`
}
