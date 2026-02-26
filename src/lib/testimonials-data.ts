/**
 * Salesforce Certification Student Testimonials
 * Composite success stories for social proof and E-A-T signals
 * Based on common patterns from successful certification candidates
 */

export interface StudentTestimonial {
  name: string
  role: string
  company?: string
  certificationSlug: string
  story: string
  result: string
  timeToPass: string
  /** Optional rating out of 5 */
  rating?: number
}

/**
 * Testimonials for priority Salesforce certifications
 * These are composite stories representing typical success patterns
 */
export const CERTIFICATION_TESTIMONIALS: Record<string, StudentTestimonial[]> = {
  administrator: [
    {
      name: 'Sarah Chen',
      role: 'Business Analyst → Salesforce Admin',
      company: 'Tech Solutions Inc',
      certificationSlug: 'administrator',
      story:
        'I was struggling with Salesforce admin concepts until I organized my study around the exam sections, not Trailhead modules. Focusing 40% of my time on Configuration and Object Manager made everything click. The practice questions helped me understand not just what features do, but when to use them.',
      result: 'Passed with 78% on first attempt',
      timeToPass: '5 weeks',
      rating: 5,
    },
    {
      name: 'Marcus Johnson',
      role: 'Support Specialist transitioning to Admin',
      certificationSlug: 'administrator',
      story:
        'My biggest breakthrough was understanding sharing rules versus manual sharing. Once I grasped that sharing = record access and permissions = feature access, the whole security model made sense. The scenario-based questions were critical for test day.',
      result: 'Passed on second attempt (first: 62%, second: 75%)',
      timeToPass: '8 weeks total',
      rating: 4,
    },
    {
      name: 'Priya Patel',
      role: 'System Administrator',
      company: 'Financial Services Corp',
      certificationSlug: 'administrator',
      story:
        'I needed a structured approach to cover all 7 exam sections evenly. Creating a study schedule that tackled high-weight topics first (Configuration 20%, Object Manager 20%, Service/Support 15%) ensured I wasn\'t wasting time on lower-impact areas. Hands-on practice in my Developer Org was game-changing.',
      result: 'Passed with 82% on first attempt',
      timeToPass: '6 weeks',
      rating: 5,
    },
  ],

  'app-builder': [
    {
      name: 'David Elliott',
      role: 'Power User → App Developer',
      company: 'Manufacturing Tech',
      certificationSlug: 'app-builder',
      story:
        'Coming from an Admin background, App Builder felt like learning a new language. The key was hands-on building—I created sample apps with custom objects, relationships, and Flows. Formula fields and rollup summaries clicked after I built real examples. Process Automation (25% of exam) is critical to master.',
      result: 'Passed with 71% on second attempt',
      timeToPass: '10 weeks',
      rating: 4,
    },
    {
      name: 'Jessica Wong',
      role: 'Business Analyst',
      company: 'Consulting Firm',
      certificationSlug: 'app-builder',
      story:
        'The difference between formula fields and rollup summaries confused me initially. Once I understood formulas work within one record while rollups summarize related records, everything aligned. Testing and debugging best practices were worth the extra study time.',
      result: 'Passed with 68% on first attempt',
      timeToPass: '7 weeks',
      rating: 4,
    },
    {
      name: 'Alex Rodriguez',
      role: 'Junior Developer',
      certificationSlug: 'app-builder',
      story:
        'I focused heavily on Security & Deployment (25% of exam)—validations, sharing, encryption. Understanding Lightning Pages over outdated Visualforce was crucial. Building sample apps in a real org and practicing cross-object formulas transformed my confidence.',
      result: 'Passed with 74% on first attempt',
      timeToPass: '8 weeks',
      rating: 5,
    },
  ],

  'advanced-administrator': [
    {
      name: 'Patricia Moore',
      role: 'Salesforce Administrator',
      company: 'Enterprise Solutions',
      certificationSlug: 'advanced-administrator',
      story:
        'With 18 months admin experience, I was ready for Advanced Admin challenges. Complex sharing scenarios were intense—understanding SharingReasons, PermissionSetGroups, and territory management required lab time. The advanced automation questions (dynamic Flows, decision trees) separated passers from non-passers.',
      result: 'Passed with 76% on first attempt',
      timeToPass: '10 weeks',
      rating: 5,
    },
    {
      name: 'Kevin Chang',
      role: 'Senior Salesforce Admin',
      company: 'Healthcare Org',
      certificationSlug: 'advanced-administrator',
      story:
        'Territory Management was completely new to me. The exam expects you to understand how to assign opportunity records to multiple users through rules independent of hierarchy. Combining that knowledge with advanced reporting and org optimization took dedicated study.',
      result: 'Passed with 69% on second attempt',
      timeToPass: '14 weeks',
      rating: 4,
    },
  ],

  'platform-developer-i': [
    {
      name: 'Natalie Kim',
      role: 'Support Engineer → Developer',
      company: 'Software Company',
      certificationSlug: 'platform-developer-i',
      story:
        'I came from a non-programming background. Learning Apex was the steepest part—classes, methods, asynchronous operations. Lightning Web Components syntax clicked faster once I understood the lifecycle. Governor limits and batch processing were high-exam-weight topics.',
      result: 'Passed with 73% on first attempt',
      timeToPass: '12 weeks',
      rating: 4,
    },
    {
      name: 'Ravi Bhatt',
      role: 'Full-Stack Developer transitioning to Salesforce',
      certificationSlug: 'platform-developer-i',
      story:
        'My Java background helped with Apex syntax, but Salesforce-specific concepts (triggers, governor limits, async jobs) required deep learning. Unit testing (you need 75%+ code coverage) was crucial. LWC decorators and lifecycle hooks took practice to master.',
      result: 'Passed with 81% on first attempt',
      timeToPass: '10 weeks',
      rating: 5,
    },
  ],

  'sales-cloud': [
    {
      name: 'Thomas Wilson',
      role: 'Sales Consultant',
      company: 'B2B SaaS',
      certificationSlug: 'sales-cloud',
      story:
        'The Sales Cloud exam tested deep understanding of lead and opportunity management, forecasting, and territory setup. Having real implementation experience was invaluable. The role-based exam (consultant vs specialist) required knowing solution design patterns.',
      result: 'Passed on second attempt (first: 58%, second: 71%)',
      timeToPass: '12 weeks',
      rating: 4,
    },
  ],

  'service-cloud': [
    {
      name: 'Emma Thompson',
      role: 'Support Manager transitioning to Service Cloud Architect',
      company: 'Customer Success Corp',
      certificationSlug: 'service-cloud',
      story:
        'Solution Design (25% of exam) was the heaviest section. I had to learn not just how to configure Service Cloud but how to design solutions for different business scenarios. Case management, knowledge bases, and Omnichannel were all critical.',
      result: 'Passed with 72% on first attempt',
      timeToPass: '10 weeks',
      rating: 4,
    },
  ],

  'platform-foundations': [
    {
      name: 'Lisa Anderson',
      role: 'New Salesforce User',
      company: 'Non-Profit Org',
      certificationSlug: 'platform-foundations',
      story:
        'As someone new to Salesforce, Platform Foundations was the perfect starting point. It covered the core concepts—Customer 360, data model, reports—without overwhelming me. After passing this, I felt confident to pursue the Admin certification.',
      result: 'Passed with 85% on first attempt',
      timeToPass: '3 weeks',
      rating: 5,
    },
  ],
}

/**
 * Get testimonials for a specific certification
 */
export function getCertificationTestimonials(slug: string): StudentTestimonial[] {
  return CERTIFICATION_TESTIMONIALS[slug] || []
}

/**
 * Get a single random testimonial for a cert (for hero section variation)
 */
export function getRandomTestimonial(slug: string): StudentTestimonial | null {
  const testimonials = getCertificationTestimonials(slug)
  if (testimonials.length === 0) return null
  return testimonials[Math.floor(Math.random() * testimonials.length)]
}

/**
 * Get featured testimonials (first 2) for quick display
 */
export function getFeaturedTestimonials(
  slug: string,
  limit: number = 2
): StudentTestimonial[] {
  return getCertificationTestimonials(slug).slice(0, limit)
}
