/**
 * Refreshes all *pending* threads + tips: casual human voice, hashtags, selective @mentions.
 * Run: node scripts/refresh-x-upcoming.mjs
 * Optional: --all-threads  (rewrite every thread that has a patch, including posted — JSON only, does not edit X)
 *            --all-tips     (same for tips in x-tips-queue.json)
 */
import { readFileSync, writeFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const QUEUE_FILE = resolve(__dirname, 'x-content-queue.json')
const TIPS_FILE = resolve(__dirname, 'x-tips-queue.json')
const SITE = 'https://www.trailblazeprep.com'
/** Portable paths for x-content-queue.json (same as generate-tweet-images.mjs). */
const img = (name) => `tweet-images/${name}`

const H = {
  sf: '#Salesforce',
  admin: '#SalesforceAdmin',
  adm201: '#ADM201',
  adm211: '#ADM211',
  pd1: '#PD1',
  apex: '#Apex',
  dev: '#SalesforceDeveloper',
  flow: '#SalesforceFlow',
  app: '#AppBuilder',
  cert: '#SalesforceCertified',
  trail: '#Trailblazer',
  th: '#Trailhead',
  agent: '#Agentforce',
  ai: '#SalesforceAI',
  career: '#SalesforceCareer',
  job: '#TechJobs',
  mule: '#MuleSoft',
}

/** Two hashtags as string */
const t = (a, b) => `\n\n${a} ${b}`

const THREADS = {
  'w1-thread-3-study-method': {
    tweets: [
      `dropped \$300 on a salesforce course when i first started. completely useless. ended up passing using a free method instead.

here's exactly what i did so you don't waste your money 🧵${t(H.sf, H.adm201)}`,
      `courses love breadth. 201 wants you deep on a few themes. i burned time on random setup trivia and was still shaky on flow + security bc i never measured what i actually missed.${t(H.flow, H.admin)}`,
      `took a practice test with basically zero prep. ate it. fine. the score breakdown told me what to study instead of me guessing.${t(H.adm201, H.cert)}`,
      `after that = trailhead + help on gaps only. no reading the whole catalog out of guilt. felt less scary → another practice test → repeat.

tons of free admin stuff. @MikeWheelerMedia is a good second voice.${t(H.th, H.trail)}`,
      `re-reading feels productive. quizzes feel annoying. on exam day the stuff that stuck was almost always questions i got wrong, not yellow highlights in a pdf.${t(H.admin, H.cert)}`,
      `i didn't chase a magic score. more like "can i explain why the wrong answers are wrong." two different practice runs felt ok → booked the real thing.${t(H.adm201, H.sf)}`,
      `free admin qs by section live on trailblazeprep. link in reply. no signup.

saves someone a month? rt the opener. idc either way.${t(H.admin, H.trail)}`,
    ],
    immediateReply: `free admin practice (mapped by section): ${SITE}/certifications/administrator

@salesforceben @MikeWheelerMedia

${H.admin} ${H.adm201}`,
    engagementTweets: [
      {
        text: `sf has that official practice assessment. run it twice. first time you're guessing. second time you actually see what they're asking.${t(H.adm201, H.cert)}`,
        imageFile: img('w1-thread-3-study-method-engage-1.png'),
      },
      {
        text: `anyone else "study" by rereading notes forever and nothing sticks? switching to wrong-answers-only is what actually moved my score.${t(H.admin, H.trail)}`,
        imageFile: img('w1-thread-3-study-method-engage-2.png'),
      },
    ],
  },

  'w2-thread-1-pd1-roadmap': {
    tweets: [
      `pd1 freaked me out at first. if you haven't actually shipped apex in a real org it's a jump from admin. not impossible just... more ways to fail.

quick map of what showed up for me 🧵${t(H.sf, H.pd1)}`,
      `big buckets: apex (triggers, classes, soql), some UI (lwc showed up more than i expected), plus data + security overlap if you already did admin.${t(H.apex, H.dev)}`,
      `governor limits are the thing people sleep on. if your brain says "java in the cloud" you'll get wrecked on bulkification qs.${t(H.pd1, H.apex)}`,
      `timing from admin if you can kinda code: few weeks apex + triggers, ~week lwc basics, then practice tests until you're not panicking. brand new to code = longer. normal.${t(H.dev, H.cert)}`,
      `dumb stuff i did: wrote code without thinking in batches, ignored asserts til the end, never broke stuff in a dev org on purpose.${t(H.pd1, H.apex)}`,
      `can you skip admin entirely. technically yes. would i. no. pd1 still assumes you get profiles, owd, when flow is enough, etc.${t(H.admin, H.pd1)}`,
      `wrote up pd1 + free qs on our site if you want it in one place. link next tweet.

rt if you know someone cramming.${t(H.dev, H.cert)}`,
    ],
    immediateReply: `pd1 guide + practice qs: ${SITE}/certifications/platform-developer-i

@dvdkliu @walters954

${H.apex} ${H.dev}`,
    engagementTweets: [
      {
        text: `pd1 got easier after i shipped ugly apex and fixed prod fires. test cares more about "i've seen this explode" than pretty syntax.${t(H.pd1, H.apex)}`,
        imageFile: img('w2-thread-1-pd1-roadmap-engage-1.png'),
      },
      {
        text: `coming from java/python/js — what part of pd1 scares you most. reply and i'll tell you if it's overrated (usually fixable).${t(H.dev, H.pd1)}`,
        imageFile: img('w2-thread-1-pd1-roadmap-engage-2.png'),
      },
    ],
  },

  'w2-thread-2-pd1-apex': {
    tweets: [
      `five apex patterns that kept popping up when i studied pd1. actually type these in a dev org. reading alone did nothing for me 🧵${t(H.sf, H.pd1)}`,
      [
        '1) bulk trigger — this dies in prod:',
        'trigger AccountTrigger on Account (before insert) {',
        '  Account a = Trigger.new[0];',
        '}',
        'fix:',
        'for (Account a : Trigger.new) {',
        '}',
      ].join('\n') + t(H.apex, H.pd1),
      [
        '2) soql inside loops — query limit death:',
        'for (Account a : accounts) {',
        '  List<Contact> c = [SELECT Id FROM Contact WHERE AccountId = :a.Id];',
        '}',
        'query once, map it, look up in the loop.',
      ].join('\n') + t(H.apex, H.pd1),
      `3) tests: IsTest annotation, Test.startTest and Test.stopTest when it matters, System.assert actually there. no assert = you proved nothing.${t(H.pd1, H.dev)}`,
      [
        '4) exceptions — DmlException vs QueryException vs NPE. test loves "what blew up."',
        'try { insert accounts; } catch (DmlException e) { System.debug(e.getMessage()); }',
      ].join('\n') + t(H.apex, H.pd1),
      `5) collections — set = no dupes, map = lookup. sounds obvious until q55.${t(H.pd1, H.dev)}`,
      `more pd1 qs + explanations on our site. link in reply.${t(H.dev, H.cert)}`,
    ],
    immediateReply: `pd1 practice: ${SITE}/certifications/platform-developer-i

@dvdkliu @walters954

${H.apex} ${H.dev}`,
    engagementTweets: [
      {
        text: `bonus: Database.insert(rows, false) for partial success. plain insert is all or nothing. bites in prod too.${t(H.apex, H.pd1)}`,
        imageFile: img('w2-thread-2-pd1-apex-engage-1.png'),
      },
      {
        text: `what messes you up most — soql in loops, tests, or collections. is it the same order for everyone or just me.${t(H.pd1, H.dev)}`,
        imageFile: img('w2-thread-2-pd1-apex-engage-2.png'),
      },
    ],
  },

  'w2-thread-3-pd1-vs-admin': {
    tweets: [
      `people dm "admin or pd1 first" constantly. depends what job you want but there's a default order that saves headaches. short thread 🧵${t(H.sf, H.cert)}`,
      `want admin work → admin track. "dev" track still needs admin-level platform stuff. coding doesn't make those qs disappear.${t(H.admin, H.adm201)}`,
      `even if you code: data model + security + when flow is enough shows up on pd1-style scenarios. skipping admin = learning that in panic mode later.${t(H.pd1, H.flow)}`,
      `salary bands are messy (city, remote, etc) but more certs + more real scope usually compounds over time. not gonna fake one number.${t(H.career, H.job)}`,
      `sequence i've seen work: 201 → app builder → pd1 if you want builder/dev hybrid. ymmv.${t(H.app, H.pd1)}`,
      `what cert are you on now — 201, pd1, app builder, something else. i'll reply with one link not ten.${t(H.cert, H.trail)}`,
      `wrote a comparison + cert links. next tweet.${t(H.admin, H.pd1)}`,
    ],
    immediateReply: `admin vs dev career (non-hype): ${SITE}/salesforce-admin-vs-developer-career

@salesforceben @BradleyRice1

${H.adm201} ${H.pd1}`,
    engagementTweets: [
      {
        text: `years of real admin work. sometimes pd1 first is fine you already learned half the platform the hard way. brand new to sf. i'd still do admin.${t(H.admin, H.pd1)}`,
        imageFile: img('w2-thread-3-pd1-vs-admin-engage-1.png'),
      },
      {
        text: `admin then pd1 back to back — how long did you wait between. what actually worked vs what we tell ourselves.${t(H.cert, H.career)}`,
        imageFile: img('w2-thread-3-pd1-vs-admin-engage-2.png'),
      },
    ],
  },

  'w3-thread-1-app-builder': {
    tweets: [
      `after admin everyone sprints to pd1. sometimes app builder is the smoother next step if you actually live in flow + lightning pages.

why i bothered 🧵${t(H.sf, H.app)}`,
      `app builder = more admin depth. lightning pages, heavier automation, data model. still no apex requirement.${t(H.app, H.admin)}`,
      `good for admins growing into solution design, devs who need to know when not to code, people shipping stuff without living in a repo.${t(H.trail, H.cert)}`,
      `exam-wise flow is a fat slice. shaky on record-triggered vs screen vs autolaunched. fix that before you pay for the attempt.${t(H.flow, H.app)}`,
      `my dumb cheat sheet: screen = human in the loop, record-triggered = save path, scheduled = clock, autolaunched = called from somewhere else.${t(H.flow, H.app)}`,
      `extra 2-4 weeks after admin felt worth it in interviews. less "i only admin" more "i can design the thing."${t(H.admin, H.career)}`,
      `free app builder section + qs on our site. link in reply.${t(H.app, H.cert)}`,
    ],
    immediateReply: `app builder prep: ${SITE}/certifications/app-builder

@SteveMoForce @salesforceben

${H.admin} ${H.app}`,
    engagementTweets: [
      {
        text: `app builder felt more scenario-heavy than admin for me. less name the feature more pick the least bad option for this messy req.${t(H.app, H.cert)}`,
        imageFile: img('w3-thread-1-app-builder-engage-1.png'),
      },
      {
        text: `hiring folks — do you care about app builder on a resume or is it nice-to-have. actually curious.${t(H.career, H.job)}`,
        imageFile: img('w3-thread-1-app-builder-engage-2.png'),
      },
    ],
  },

  'w3-thread-2-flow-tips': {
    tweets: [
      `flow is a huge chunk of app builder and real admin work. six things i wish someone had yelled at me earlier 🧵${t(H.sf, H.flow)}`,
      `process builder → flow migration still shows up. know what you'd rebuild as flow.${t(H.flow, H.app)}`,
      `record-triggered: before vs after save actually matters. i got burned once on related updates. worth labbing.${t(H.flow, H.admin)}`,
      `subflows beat one 80-node monster. easier debug, reuse, and it's the right answer when you duplicated logic everywhere.${t(H.flow, H.app)}`,
      `fault paths: without them you're blind when flow dml fails. 2 min to add. hours saved at 9pm. @SteveMoForce yells about this too.${t(H.flow, H.trail)}`,
      `debug: step through. doesn't fire. check entry conditions first then actually read the debug output.${t(H.flow, H.admin)}`,
      `one interview = one run. variables don't persist. free flow + app builder qs on our site. link next.${t(H.app, H.cert)}`,
    ],
    immediateReply: `flow + app builder practice: ${SITE}/certifications/app-builder

@SteveMoForce @salesforceben

${H.flow} ${H.app}`,
    engagementTweets: [
      {
        text: `before-save vs after-save still trips people up. system vs user context shows up in weird sharing edge cases.${t(H.flow, H.admin)}`,
        imageFile: img('w3-thread-2-flow-tips-engage-1.png'),
      },
      {
        text: `biggest flow you've shipped. mine was embarrassing before subflows. still not proud of v1.${t(H.flow, H.trail)}`,
        imageFile: img('w3-thread-2-flow-tips-engage-2.png'),
      },
    ],
  },

  'w3-thread-3-cert-roadmap': {
    tweets: [
      `cert catalog is overwhelming. this isn't the only path just a default if you're staring at the list frozen 🧵${t(H.sf, H.trail)}`,
      `admin line: 201 → 211 if you want "serious admin." cpq if you're in that world. skip if you're not.${t(H.admin, H.adm201)}`,
      `dev line: need admin-level literacy then pd1. pd2 or js certs if your job actually goes there.${t(H.pd1, H.dev)}`,
      `architect line is a marathon. app builder, architect certs, cta for the tiny % who want the board.${t(H.cert, H.career)}`,
      `consultant track: often admin + app builder + some cloud consultant cert (SI or customer side).${t(H.app, H.cert)}`,
      `no experience → 201. in an org every day → you can compress time but still gotta find your weak spots.${t(H.adm201, H.th)}`,
      `mapped certs + free guides on one page. link in reply.${t(H.sf, H.cert)}`,
    ],
    immediateReply: `full cert list + free guides: ${SITE}/salesforce-certifications-list

@MikeWheelerMedia @salesforceben

${H.cert} ${H.th}`,
    engagementTweets: [
      {
        text: `agentforce + ai showing up on roadmaps whether we like it or not. worth skimming release notes even if you're not chasing certs.${t(H.agent, H.ai)}`,
        imageFile: img('w3-thread-3-cert-roadmap-engage-1.png'),
      },
      {
        text: `which track — admin, dev, consulting, architect-curious. reply and i'll say the next cert i'd do from there.${t(H.trail, H.cert)}`,
        imageFile: img('w3-thread-3-cert-roadmap-engage-2.png'),
      },
    ],
  },

  'w4-thread-1-agentforce': {
    tweets: [
      `agentforce cert is new-ish and customers keep asking on calls. plain english + what's actually on the guide 🧵${t(H.sf, H.agent)}`,
      `salesforce-native agents = topics, actions, guardrails. not "paste chatgpt into a field" energy.${t(H.agent, H.ai)}`,
      `study: builder UI, what actions can call, data cloud touchpoints, ethics + trust (boring but on the test).${t(H.agent, H.cert)}`,
      `way less third-party prep than older certs. annoying if you love courses. fine if you learn by clicking in a trial org.${t(H.sf, H.trail)}`,
      `useful if you don't wanna be the person who "doesn't get AI" or you're wiring workflows + demos for clients.${t(H.career, H.agent)}`,
      `einstein recs = assist humans. agent-style stuff = more autonomous actions. interviewers mix the terms constantly.${t(H.ai, H.agent)}`,
      `agentforce specialist notes + qs on our site. link below.${t(H.agent, H.cert)}`,
    ],
    immediateReply: `agentforce specialist prep: ${SITE}/certifications/agentforce-specialist

@salesforceben @walters954

${H.agent} ${H.ai}`,
    engagementTweets: [
      {
        text: `first toy agent in a scratch org was faster than i expected. still side-eyeing hype but it's not vapor.${t(H.agent, H.ai)}`,
        imageFile: img('w4-thread-1-agentforce-engage-1.png'),
      },
      {
        text: `is your org actually on agentforce yet or still powerpoint mode. what was the first real use case.${t(H.agent, H.sf)}`,
        imageFile: img('w4-thread-1-agentforce-engage-2.png'),
      },
    ],
  },

  'w4-thread-2-adm211': {
    tweets: [
      `passed 201 and everyone screams pd1 at you. sometimes 211 is the better next cert if you still actually live in admin world 🧵${t(H.sf, H.adm211)}`,
      `211 isn't "201 but harder." territories, nastier reports, heavier automation scenarios, stuff you might not touch every day.${t(H.admin, H.adm211)}`,
      `automation is still a big chunk of the score. if you like flow you're not starting from zero.${t(H.flow, H.adm211)}`,
      `territory mgmt is where people panic. it's on the test. don't ignore it. also don't spend your whole life on one subsection only.${t(H.adm211, H.admin)}`,
      `money talk is regional but stacking certs usually helps comp over time. not overnight magic.${t(H.career, H.cert)}`,
      `timeline: faster if you're in prod weekly. nights-and-weekends only = add time. both valid.${t(H.admin, H.adm211)}`,
      `free advanced admin stuff on our site. link in reply.${t(H.adm211, H.cert)}`,
    ],
    immediateReply: `free 211 prep (advanced admin): ${SITE}/certifications/advanced-administrator

@MikeWheelerMedia @salesforceben

${H.admin} ${H.adm211}`,
    engagementTweets: [
      {
        text: `territory looked scary on paper for me. flow + automation studying moved my score more. ymmv.${t(H.adm211, H.flow)}`,
        imageFile: img('w4-thread-2-adm211-engage-1.png'),
      },
      {
        text: `211 holders — did it actually change title or pay or was it mostly learning. want honest answers not linkedin fantasy.${t(H.career, H.admin)}`,
        imageFile: img('w4-thread-2-adm211-engage-2.png'),
      },
    ],
  },

  'w4-thread-3-salary-stats': {
    tweets: [
      `salary threads are always messy. these are ballparks i've seen or scraped together. not your offer letter 🧵${t(H.sf, H.career)}`,
      `early career: uncertified → certified admin usually bumps the band. exact dollars = city + remote policy.${t(H.admin, H.job)}`,
      `mid: cert stack + what you actually shipped starts beating "years" on paper sometimes.${t(H.cert, H.career)}`,
      `senior + architect: cta is its own planet. tiny group. different band entirely.${t(H.cert, H.career)}`,
      `\$200 exam → more interviews is dumb ROI if it works. not the only lever but it's real.${t(H.sf, H.cert)}`,
      `recruiter-friendly stacks aren't one size (SI vs product vs consulting). match what you want to hire for not every badge.${t(H.job, H.career)}`,
      `cert pages + context on our site. link next. grain of salt. do your own market research.${t(H.sf, H.cert)}`,
    ],
    immediateReply: `all cert pages: ${SITE}/salesforce-certifications-list

@BradleyRice1 @salesforceben

${H.cert} ${H.job}`,
    engagementTweets: [
      {
        text: `add COLA brain for NYC SF etc. remote flattened some gaps but not all.${t(H.career, H.job)}`,
        imageFile: img('w4-thread-3-salary-stats-engage-1.png'),
      },
      {
        text: `drop certs + rough geo if you want. trying to sanity check ranges against real humans not just glassdoor.${t(H.career, H.cert)}`,
        imageFile: img('w4-thread-3-salary-stats-engage-2.png'),
      },
    ],
  },
}

function assertLen(label, tweets, max = 280) {
  tweets.forEach((s, i) => {
    if (s.length > max) console.warn(`WARN ${label} tweet ${i + 1}: ${s.length} chars`)
  })
}

const TIP_PATCHES = {
  'tip-013': `you don't need an expensive paid course to pass a salesforce cert. trailhead + the official exam guide + one good practice bank got me there. paid stuff helps some people. not required.

@salesforceben

${H.sf} ${H.cert}`,
  'tip-014': `pattern i see a lot: admin cert → more scope → app builder → pd1 if they like code. not a rule just a shape.

${H.sf} ${H.app} ${H.career}`,
  'tip-015': `adm-201 save order still wrecks people. draw the path once on paper — before-save vs validation vs after — you stop mixing it up.

@SteveMoForce

${H.admin} ${H.adm201}`,
  'tip-016': `lots of jobs still hang off this ecosystem. if you're on the fence about certifying the demand isn't made up.

@BradleyRice1

${H.sf} ${H.trail}`,
  'tip-017': `profiles = baseline. permission sets = stack on top. exam loves "give only these people X without cloning five profiles."

@MikeWheelerMedia

${H.admin} ${H.sf}`,
  'tip-018': `pd1: no asserts in a test = you didn't finish. reviewers notice. so does the exam.

@dvdkliu

${H.pd1} ${H.apex}`,
  'tip-019': `how long admin prep takes = how much you touch a real org. nights-only takes longer. that's scheduling not iq.

@MikeWheelerMedia

${H.admin} ${H.adm201}`,
  'tip-020': `owd is the floor. sharing opens from there. public read/write is not the same vibe as private + rules. read twice when tired.

${H.admin} ${H.sf}`,
  'tip-021': `exam fee vs potential raise is funny IF you actually switch jobs — cert gets interviews. offers still take work.

@BradleyRice1

${H.career} ${H.cert}`,
  'tip-022': `fault paths on flow dml. 2 minutes now. saves you at 9pm later.

@SteveMoForce

${H.flow} ${H.app}`,
  'tip-023': `first cert is usually still 201 unless your job is weirdly specific. platform literacy first.

@salesforceben

${H.adm201} ${H.trail}`,
  'tip-024': `validation vs flow vs approval — exam wants the right tool not the clever one. declarative first is usually the safe brain.

${H.flow} ${H.admin}`,
  'tip-025': `sandbox types = pure memorization. dev vs partial vs full — know data + limits.

@salesforceben

${H.sf} ${H.cert}`,
  'tip-026': `one trigger per object keeps order sane. pd1 and real jobs both care.

@walters954

${H.pd1} ${H.apex}`,
  'tip-027': `cta is brutal. anyone selling easy architect is lying. still a real ceiling if that's your thing.

${H.career} ${H.cert}`,
  'tip-028': `service cloud consultant: queues routing entitlements — if you've only read about them go build one in a dev org before the exam.

@salesforceben

${H.sf} ${H.career}`,
  'tip-029': `exam guide first. practice test early. learn why wrong answers are wrong. boring and it works.

${H.cert} ${H.th}`,
  'tip-030': `dashboards sit on reports. no secret data lake under the hood. obvious until hour two of studying.

${H.trail} ${H.sf}`,
  'tip-031': `211 before pd1 isn't universal but i like it for admin career arcs. you learn pain pd1 won't spell out.

@dvdkliu

${H.adm211} ${H.admin}`,
  'tip-032': `lwc is the focus now. don't live in aura unless your org still does.

${H.pd1} ${H.dev}`,
  'tip-033': `\$200 exam + free trailhead can be enough. courses are optional comfort not oxygen.

${H.sf} ${H.cert}`,
  'tip-034': `soql: one main object; child subqueries in parens. nesting trips people under exam stress.

@dvdkliu

${H.pd1} ${H.apex}`,
  'tip-035': `agent = topics + actions + instructions. prototype fast — still govern it like anything else.

@walters954

${H.agent} ${H.ai}`,
  'tip-036': `maintenance modules: set a calendar reminder. lapsed cert = paperwork tax + maybe full retake.

${H.cert} ${H.sf}`,
  'tip-037': `profiles don't hide records. owd roles sharing do. classic trick q.

@MikeWheelerMedia

${H.admin} ${H.sf}`,
  'tip-038': `trailblazer community — corny name, actually useful. use it while studying.

${H.trail} ${H.sf}`,
  'tip-039': `data cloud on exams: streams identity resolution calculated insights — high level unless you're specializing.

${H.sf} ${H.cert}`,
  'tip-040': `dev org + break things beat passive video for me. worth trying once.

@salesforceben

${H.trail} ${H.cert}`,
  'tip-041': `outbound change set = send. deploy inbound on target. metadata is not data. they love that distinction.

${H.app} ${H.flow}`,
  'tip-042': `study week that worked for me: one heavy topic day, one practice exam, one review. sleep isn't optional.

${H.admin} ${H.cert}`,
  'tip-043': `soql = structured query one path. sosl = search text across objects. mixing them up = free missed points.

@salesforceben

${H.pd1} ${H.sf}`,
  'tip-044': `interview "trigger vs workflow" — they want declarative first, code when you must.

${H.pd1} ${H.flow}`,
  'tip-045': `sales cloud consultant slept on if you live in pipelines. not for everyone.

${H.sf} ${H.career}`,
  'tip-046': `good senior admins answer "why not X" not only "how." tests love that energy.

@MikeWheelerMedia

${H.admin} ${H.cert}`,
  'tip-047': `releases shift exams. check maintenance deadlines.

${H.sf} ${H.cert}`,
  'tip-048': `mulesoft foundations: layers transforms errors. different muscle than apex.

${H.mule} ${H.sf}`,
  'tip-049': `night before: sleep beats new chapters.

@salesforceben

${H.cert} ${H.adm201}`,
  'tip-050': `certs stay active with maintenance. letting them lapse is future you problem.

${H.sf} ${H.cert}`,
}

const allThreads = process.argv.includes('--all-threads')
const allTips = process.argv.includes('--all-tips')

let queue = JSON.parse(readFileSync(QUEUE_FILE, 'utf8'))
queue = queue.map((thread) => {
  const patch = THREADS[thread.id]
  if (!patch) return thread
  if (!allThreads && thread.status !== 'pending') return thread
  assertLen(thread.id, patch.tweets)
  assertLen(thread.id + ' engage', patch.engagementTweets.map((e) => e.text))
  return {
    ...thread,
    tweets: patch.tweets,
    immediateReply: patch.immediateReply,
    engagementTweets: patch.engagementTweets,
  }
})
writeFileSync(QUEUE_FILE, JSON.stringify(queue, null, 2))

let tips = JSON.parse(readFileSync(TIPS_FILE, 'utf8'))
tips = tips.map((tip) => {
  const text = TIP_PATCHES[tip.id]
  if (!text) return tip
  if (!allTips && tip.status !== 'pending') return tip
  if (text.length > 280) console.warn(`WARN ${tip.id}: ${text.length} chars`)
  return { ...tip, tweet: text }
})
writeFileSync(TIPS_FILE, JSON.stringify(tips, null, 2))

const scope =
  allThreads || allTips
    ? `all patched threads${allThreads ? ' (incl. posted)' : ''} + tips${allTips ? ' (incl. posted)' : ''}`
    : 'pending threads + tips'
console.log(`OK: Refreshed ${scope} (human voice, hashtags, handles).`)

