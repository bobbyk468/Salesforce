/**
 * One-off / repeatable: add discovery hashtags without stuffing.
 * Run: node scripts/apply-x-hashtags.mjs
 */
import { readFileSync, writeFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const QUEUE = resolve(__dirname, 'x-content-queue.json')
const TIPS = resolve(__dirname, 'x-tips-queue.json')

/** Append hashtags to text if not already present (avoid duplicates). */
function appendHashtags(text, tags) {
  const line = tags.join(' ')
  if (text.includes('#Salesforce') && tags.every((t) => text.includes(t))) return text
  if (text.trimEnd().endsWith(line)) return text
  return `${text.trimEnd()}\n\n${line}`
}

const threadMeta = {
  'w1-thread-3-study-method': {
    hookTags: ['#Salesforce', '#ADM201'],
    replyTags: ['#SalesforceAdmin', '#ADM201'],
  },
  'w2-thread-1-pd1-roadmap': {
    hookTags: ['#Salesforce', '#PD1'],
    replyTags: ['#Apex', '#SalesforceDeveloper'],
  },
  'w2-thread-2-pd1-apex': {
    hookTags: ['#Salesforce', '#PD1'],
    replyTags: ['#Apex', '#SalesforceDeveloper'],
    fixLastTweet: true,
  },
  'w2-thread-3-pd1-vs-admin': {
    hookTags: ['#Salesforce', '#SalesforceCertified'],
    replyTags: ['#ADM201', '#PD1'],
    fixLastTweet: true,
  },
  'w3-thread-1-app-builder': {
    hookTags: ['#Salesforce', '#AppBuilder'],
    replyTags: ['#SalesforceAdmin', '#AppBuilder'],
  },
  'w3-thread-2-flow-tips': {
    hookTags: ['#Salesforce', '#SalesforceFlow'],
    replyTags: ['#Flow', '#AppBuilder'],
  },
  'w3-thread-3-cert-roadmap': {
    hookTags: ['#Salesforce', '#Trailblazer'],
    replyTags: ['#SalesforceCertified', '#Trailhead'],
    fixLastTweet: true,
  },
  'w4-thread-1-agentforce': {
    hookTags: ['#Salesforce', '#Agentforce'],
    replyTags: ['#Agentforce', '#SalesforceAI'],
  },
  'w4-thread-2-adm211': {
    hookTags: ['#Salesforce', '#ADM211'],
    replyTags: ['#SalesforceAdmin', '#ADM211'],
  },
  'w4-thread-3-salary-stats': {
    hookTags: ['#Salesforce', '#SalesforceCareer'],
    replyTags: ['#SalesforceCertified', '#TechJobs'],
    fixLastTweet: true,
  },
}

function fixApexLastTweet(s) {
  return s
    .replace(/\n\n+#SalesforceDeveloper #Apex #PD1\n\n/g, '\n\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim()
}

function fixVsLastTweet(s) {
  return s
    .replace(/\n\n+#Salesforce #SalesforceCertification #SalesforceCareer\n\n/g, '\n\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim()
}

function fixRoadmapLastTweet(s) {
  return s.replace(/\n\n\n\nno login required\./g, '\n\nno login required.').replace(/\n{3,}/g, '\n\n').trim()
}

function fixSalaryLastTweet(s) {
  return s.replace(/\n\n\n\nget certified/g, '\n\nget certified').replace(/\n{3,}/g, '\n\n').trim()
}

let queue = JSON.parse(readFileSync(QUEUE, 'utf8'))

queue = queue.map((thread) => {
  if (thread.status !== 'pending') return thread
  const meta = threadMeta[thread.id]
  if (!meta) return thread

  const tweets = [...thread.tweets]
  const last = tweets.length - 1

  tweets[0] = appendHashtags(tweets[0], meta.hookTags)

  if (meta.fixLastTweet) {
    if (thread.id === 'w2-thread-2-pd1-apex') tweets[last] = fixApexLastTweet(tweets[last])
    if (thread.id === 'w2-thread-3-pd1-vs-admin') tweets[last] = fixVsLastTweet(tweets[last])
    if (thread.id === 'w3-thread-3-cert-roadmap') tweets[last] = fixRoadmapLastTweet(tweets[last])
    if (thread.id === 'w4-thread-3-salary-stats') tweets[last] = fixSalaryLastTweet(tweets[last])
  }

  thread.tweets = tweets

  if (thread.immediateReply) {
    thread.immediateReply = appendHashtags(thread.immediateReply, meta.replyTags)
  }

  return thread
})

writeFileSync(QUEUE, JSON.stringify(queue, null, 2))

// Tips: pending only — 2 hashtags each, skip if already has #
let tips = JSON.parse(readFileSync(TIPS, 'utf8'))

function tagsForTip(text) {
  const t = text.toLowerCase()
  if (t.includes('agentforce') || t.includes('ai agent')) return ['#Salesforce', '#Agentforce']
  if (t.includes('pd1') || t.includes('apex') || t.includes('governor')) return ['#Salesforce', '#PD1']
  if (
    t.includes('flow tip') ||
    t.includes('fault path') ||
    (t.includes('flow') && t.includes('exam'))
  ) {
    return ['#Salesforce', '#SalesforceFlow']
  }
  if (t.includes('app builder')) return ['#Salesforce', '#AppBuilder']
  if (t.includes('salary') || t.includes('trajectory') || t.includes('architect track')) {
    return ['#Salesforce', '#SalesforceCareer']
  }
  if (
    t.includes('adm-201') ||
    t.includes('admin exam') ||
    t.includes('order of execution') ||
    t.includes('validation rules') ||
    t.includes('sharing') ||
    t.includes('profile') ||
    t.includes('permission set')
  ) {
    return ['#Salesforce', '#SalesforceAdmin']
  }
  if (t.includes('trailhead') || t.includes('exam guide') || t.includes('practice exam')) {
    return ['#Salesforce', '#SalesforceCertified']
  }
  return ['#Salesforce', '#Trailblazer']
}

tips = tips.map((tip) => {
  if (tip.status !== 'pending') return tip
  if (/#\w/.test(tip.tweet)) return tip
  return { ...tip, tweet: appendHashtags(tip.tweet, tagsForTip(tip.tweet)) }
})

writeFileSync(TIPS, JSON.stringify(tips, null, 2))

console.log('Updated hashtags on pending threads + tips.')
