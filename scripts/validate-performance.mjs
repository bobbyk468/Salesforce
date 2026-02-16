#!/usr/bin/env node
/**
 * Performance validation: run build and remind to check both Mobile and Desktop.
 * Ensures desktop-only optimizations don't regress mobile.
 *
 * Usage: npm run validate:perf
 * See docs/PERFORMANCE.md for full checklist.
 */

import { execSync } from 'child_process'

const ADMIN_URL = 'https://www.trailblazeprep.com/certifications/administrator'

console.log('Running build...\n')
try {
  execSync('npm run build', { stdio: 'inherit' })
} catch {
  process.exit(1)
}

console.log('\n--- Performance validation checklist ---')
console.log('1. Build: passed')
console.log('2. Run Lighthouse for BOTH form factors. Do NOT merge if either regresses:')
console.log(`   Mobile:  ${ADMIN_URL}`)
console.log('   Form factor: Mobile  → Baseline: Performance ≥ 97, LCP < 2.5s, CLS = 0, TBT ≤ 50ms')
console.log(`   Desktop: ${ADMIN_URL}`)
console.log('   Form factor: Desktop → Baseline: Performance 100, CLS < 0.01, TBT ≤ 60ms')
console.log('\n3. Rule: Fix one without breaking the other (see docs/PERFORMANCE.md).')
console.log('Done. If scores dropped, do not merge until resolved or explicitly accepted.')
