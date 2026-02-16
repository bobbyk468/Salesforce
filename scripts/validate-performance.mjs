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
console.log('2. Run Lighthouse for BOTH form factors and confirm no regression:')
console.log(`   Mobile:  ${ADMIN_URL}`)
console.log('   Form factor: Mobile  → Target: Performance ≥ 90, LCP < 4s, CLS = 0')
console.log(`   Desktop: ${ADMIN_URL}`)
console.log('   Form factor: Desktop → Target: Performance ≥ 95, CLS < 0.05')
console.log('\n3. Rule: Desktop-only code must not run on mobile (see docs/PERFORMANCE.md)')
console.log('Done. If Lighthouse scores dropped on either form factor, review recent changes.')
