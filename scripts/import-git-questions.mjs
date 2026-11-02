#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';

export const REPOSITORY = 'bobbyk468/SF-Questions';
export const DEFAULT_COMMIT = 'c3ca1118d266b276aa9dcfbb270197d55c5bacca';
export const FOLDER_TO_SLUG = {
  'Platform Admin':'administrator','Advance admin':'advanced-administrator','Platform Developer1':'developer-1','Platform App Builder':'app-builder','Pd2':'developer-2',
  'AgentForce Sales Cloud':'sales-cloud','Agentforce Service Cloud':'service-cloud','Agentforce Specialist':'agentforce-specialist','Agentforce Public Sector':'public-sector-solutions-ap',
  'B2B commerce admin':'b2b-commerce-admin-ap','B2B commerce developer':'b2b-commerce-developer-ap','B2C Solution architect':'b2c-solution-architect','Business analyst':'business-analyst',
  'Claude Developer':'claude-certified-developer','Claude associate foundation':'claude-certified-associate','Data 360 consultant':'data-360-consultant','Experience cloud':'experience-cloud',
  'Javascript Developer':'javascript-developer-i','MC Acc6ount engagement Admin':'marketing-cloud-engagement-admin','Mulesoft Developer 2':'mulesoft-developer-ii',
  'Non profit Cloud consultant':'nonprofit-cloud','Omni Developer':'omnistudio-developer','Omni Studio Consultant':'omnistudio-consultant','Platform Data Architect':'data-architect',
  'Platform Identity And Access management':'identity-access-management-architect','Platform Sharing And Visibility':'sharing-visibility-architect','Platform foundation SU 26':'platform-foundations',
  'Revenue cloud':'revenue-cloud-consultant','Salesforce Certified Agentforce Field Service and Operations Consultant':'field-service','Slack Admin':'slack-administrator','Tableu Data Analyst':'tableau-data-analyst'
};
const UNMAPPED = ['Claude & Advance AI application','Marketing Cloud Next','GH 300 Github Capilot'];
const NOTICE_FILES = ['Platform App Builder/App builder - 29th Aug.txt','Platform Developer1/PD1-- alert-- 4th september update.txt'];
const REPORT_FILE = 'Claude architect foundation/verification_report.txt';

const stable = (a,b) => a.localeCompare(b, 'en');
const cleanNonblank = x => typeof x === 'string' && x.trim().length > 0;
const answerSet = q => [...new Set((Array.isArray(q.correctAnswers) ? q.correctAnswers : String(q.answer ?? '').split(',')).map(x => String(x).trim().toUpperCase()).filter(Boolean))].sort();

export function validateQuestion(q) {
  if (!q || typeof q !== 'object' || Array.isArray(q)) return 'not_object';
  if (String(q.confidence).toUpperCase() !== 'HIGH') return 'not_high_confidence';
  if (!['accepted','carried'].includes(String(q.status).toLowerCase())) return 'status_not_accepted_or_carried';
  const as = String(q.answerSource ?? '').toLowerCase();
  if (!as || ['attempted','color_marked','unknown','unresolved'].some(s => as.includes(s))) return 'answer_source_unresolved';
  if (!cleanNonblank(q.text)) return 'empty_prompt';
  if (q.id == null || !cleanNonblank(String(q.id)) || (!cleanNonblank(q.sourcePath) && !cleanNonblank(q.source))) return 'missing_source_provenance';
  if (cleanNonblank(q.notes)) return 'review_notes_present';
  const opts = q.options;
  if (!opts || typeof opts !== 'object' || Array.isArray(opts)) return 'invalid_options';
  const labels = ['A','B','C','D','E','F'];
  const populated = labels.filter(k => cleanNonblank(opts[k]));
  if (populated.length < 2) return 'fewer_than_two_options';
  for (let i=0;i<Math.max(...populated.map(k=>labels.indexOf(k)))+1;i++) if (!cleanNonblank(opts[labels[i]])) return 'interior_option_gap';
  const strings = populated.map(k => opts[k]);
  if (new Set(strings).size !== strings.length) return 'duplicate_option_text';
  const ans = answerSet(q);
  if (!ans.length || ans.some(a => !populated.includes(a))) return 'answer_label_missing';
  if (Number(q.answerCount) !== ans.length) return 'answer_count_mismatch';
  if (q.answer != null) {
    const raw = String(q.answer).split(',').map(x=>x.trim().toUpperCase()).filter(Boolean).sort();
    if (JSON.stringify(raw) !== JSON.stringify(ans)) return 'answer_fields_conflict';
  }
  const type = String(q.answerType ?? '').toLowerCase();
  if (type === 'single' && ans.length !== 1 || type === 'multi' && ans.length < 2) return 'answer_type_mismatch';
  const n = String(q.text).match(/\b(?:choose|select)\s+(one|two|three|four|five|\d+)\s+(?:answers?|options?)\b/i);
  if (n) {
    const nums = {one:1,two:2,three:3,four:4,five:5};
    if ((nums[n[1].toLowerCase()] ?? Number(n[1])) !== ans.length) return 'choose_n_mismatch';
  }
  if (/\b(?:refer to|see|review|based on)\s+(?:the\s+)?(?:exhibit|diagram|image|screenshot|picture|illustration)\b|\b(?:exhibit|diagram|image|screenshot)\s+(?:above|below|provided|shown)\b/i.test(q.text)) return 'missing_visual_context';
  return null;
}

function readMeReview(folder, files) {
  return files.find(f => path.basename(f).toLowerCase() === 'readme.txt') ? 'README.txt requires manual review; refusing automatic import' : null;
}

export function chooseBanks(folder, files) {
  const readFirst = files.filter(f => f.split(/[\\/]/).some(part => /^read first/i.test(part)));
  return readFirst.length ? { files: [...readFirst].sort(stable), rule: 'read_first_only' } : { files: [...files].sort(stable), rule: 'all_sets_no_read_first' };
}

function rawIdentity(q) { return JSON.stringify([q.text, ['A','B','C','D','E','F'].map(k => q.options?.[k] ?? '')]); }
function sourceSet(q, bankPath) { return cleanNonblank(q.sourcePath) ? q.sourcePath : cleanNonblank(q.source) ? q.source : bankPath; }

export function selectQuestions(questionBanks, { count = 15 } = {}) {
  const candidates=[], exclusions={}, duplicateGroups={}, observedSets=new Set();
  const exclude = (r, n=1) => { exclusions[r]=(exclusions[r]||0)+n; };
  for (const bank of questionBanks) for (const [index,q] of bank.questions.entries()) {
    if(q&&typeof q==='object')observedSets.add(sourceSet(q,bank.path));
    const reason=validateQuestion(q); if (reason) { exclude(reason); continue; }
    candidates.push({q,bankPath:bank.path,index,set:sourceSet(q,bank.path),identity:rawIdentity(q),answers:answerSet(q)});
  }
  const groups=new Map(); for (const c of candidates) { const a=groups.get(c.identity)||[]; a.push(c); groups.set(c.identity,a); }
  const unique=[];
  for (const group of groups.values()) {
    const variants=new Set(group.map(c=>JSON.stringify(c.answers)));
    if (variants.size>1) { exclude('conflicting_exact_duplicates',group.length); duplicateGroups.conflicting=(duplicateGroups.conflicting||0)+1; continue; }
    group.sort((a,b)=>stable(a.bankPath,b.bankPath)||a.index-b.index);
    unique.push(group[0]);
    if (group.length>1) { exclude('identical_exact_duplicates_removed', group.length-1); duplicateGroups.identical=(duplicateGroups.identical||0)+1; }
  }
  const bySet=new Map([...observedSets].map(s=>[s,[]])); for (const c of unique) { const a=bySet.get(c.set)||[]; a.push(c); bySet.set(c.set,a); }
  for (const a of bySet.values()) a.sort((x,y)=>stable(x.bankPath,y.bankPath)||x.index-y.index);
  const sets=[...bySet.keys()].sort(stable), perSet=new Map(sets.map(s=>[s,[]]));
  // Round the target up to a multiple of the set count, never favoring one set.
  const requestedPerSet = sets.length ? Math.ceil(count / sets.length) : 0;
  const perSetCount = sets.length ? Math.min(requestedPerSet, ...sets.map(s => bySet.get(s).length)) : 0;
  for (const s of sets) {
    const arr = bySet.get(s), n = arr.length;
    for (let i = 0; i < perSetCount; i++) {
      perSet.get(s).push(arr[Math.floor(((i + 0.5) * n) / perSetCount)]);
    }
  }
  const selected = [];
  for (let i = 0; i < perSetCount; i++) {
    for (const s of sets) selected.push(perSet.get(s)[i]);
  }
  const balance=sets.map(set=>({sourcePath:set,available:bySet.get(set).length,selected:perSet.get(set).length,empty:bySet.get(set).length===0}));
  return {selected, exclusions, duplicateGroups, balance, candidateCount:candidates.length, eligibleUniqueCount:unique.length};
}

function sha(file) { return crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex'); }
function optionsArray(q) { const a=[]; for(const k of ['A','B','C','D','E','F']) { if(!cleanNonblank(q.options?.[k])) break; a.push(q.options[k]); } return a; }
function toRecord(c,commit) {
  const correctAnswers=c.answers.map(a=>'ABCDEF'.indexOf(a));
  return {question:c.q.text, options:optionsArray(c.q), correctAnswers, ...(correctAnswers.length===1?{correctAnswer:correctAnswers[0]}:{}), source:{repository:REPOSITORY,commit,path:c.q.sourcePath||c.q.source||c.bankPath,questionId:String(c.q.sourceQuestionNum ?? c.q.id ?? c.q.questionNum ?? c.index+1),bankQuestionId:c.q.id == null ? null : String(c.q.id),answerEvidence:String(c.q.answerSource),confidence:String(c.q.confidence),answerText:c.q.answerText ?? null},bankPath:c.bankPath};
}

export function importSnapshot({source,output,count=15,commit=DEFAULT_COMMIT,catalogSlugs=[]}) {
  const root=path.resolve(source), extracted=fs.existsSync(path.join(root,'Extracted'))?path.join(root,'Extracted'):root;
  const tree=path.join(root,'tree.json'); let treeSha=null;
  if(!/^[0-9a-f]{40}$/i.test(commit)) throw new Error('Commit must be a 40-character Git SHA');
  if(!fs.existsSync(extracted)||!fs.statSync(extracted).isDirectory()) throw new Error('Source directory or Extracted directory does not exist');
  if(fs.existsSync(tree)){ const snapshot=JSON.parse(fs.readFileSync(tree,'utf8')); treeSha=snapshot.sha; if(treeSha!==commit) throw new Error(`Source tree commit mismatch: expected ${commit}, found ${treeSha}`); }
  const allFiles=[]; function walk(dir){ for(const ent of fs.readdirSync(dir,{withFileTypes:true}).sort((a,b)=>stable(a.name,b.name))){const p=path.join(dir,ent.name); if(ent.isDirectory())walk(p); else allFiles.push(p);} } walk(root);
  const sourceFolders=fs.readdirSync(extracted,{withFileTypes:true}).filter(x=>x.isDirectory()).map(x=>x.name).sort(stable);
  const banks={}, counts={}, coverage=[], mappingReport=[], sourceHashes={};
  const rootReadme=allFiles.find(f=>path.dirname(f)===root&&path.basename(f).toLowerCase()==='readme.txt');
  const manifestExams=[];
  for(const slug of [...new Set(catalogSlugs)].filter(slug=>slug!=='administrator-practice-test').sort(stable)) {
    const folder=Object.entries(FOLDER_TO_SLUG).find(([,s])=>s===slug)?.[0];
    if(!folder){coverage.push({slug,status:'no_source_mapping'});continue;}
    if(!sourceFolders.includes(folder)){coverage.push({slug,status:'missing_source_folder',folder});continue;}
    const dir=path.join(extracted,folder), files=[]; function localWalk(d){for(const ent of fs.readdirSync(d,{withFileTypes:true}).sort((a,b)=>stable(a.name,b.name))){const p=path.join(d,ent.name);if(ent.isDirectory())localWalk(p);else if(p.toLowerCase().endsWith('.json'))files.push(p);}} localWalk(dir);
    const relative=files.map(f=>path.relative(extracted,f).split(path.sep).join('/'));
    const picked=chooseBanks(folder,relative), readme=rootReadme||allFiles.find(f=>path.basename(f).toLowerCase()==='readme.txt'&&path.relative(root,f).split(path.sep).includes(folder));
    for(const f of files)sourceHashes[path.relative(root,f).split(path.sep).join('/')]=sha(f);
    if(readme){coverage.push({slug,status:'blocked',reason:'readme_manual_review',detail:readme});continue;}
    if(!picked.files.length){coverage.push({slug,status:'blocked',reason:'no_json_banks',selectionRule:picked.rule});continue;}
    const qbanks=picked.files.map(rel=>{const full=path.join(extracted,...rel.split('/'));let parsed;try{parsed=JSON.parse(fs.readFileSync(full,'utf8'));}catch{parsed={};}return {path:rel,questions:Array.isArray(parsed.questions)?parsed.questions:[]};});
    const result=selectQuestions(qbanks,{count});
    if(result.selected.length<count){coverage.push({slug,status:'blocked',reason:'insufficient_eligible_questions',eligibleUniqueCount:result.eligibleUniqueCount,requestedCount:count,selectionRule:picked.rule});manifestExams.push({slug,folder,selectionRule:picked.rule,selectedCount:0,selectedBySource:[],balance:result.balance,exclusions:result.exclusions,duplicates:result.duplicateGroups});continue;}
    const records=result.selected.map(c=>toRecord(c,commit)); banks[slug]=records;counts[slug]=records.length;
    const selectedBySource={};for(const c of result.selected)selectedBySource[c.set]=(selectedBySource[c.set]||0)+1;
    coverage.push({slug,status:'selected',folder,selectionRule:picked.rule,count:records.length});
    manifestExams.push({slug,folder,selectionRule:picked.rule,selectedCount:records.length,selectedBySource:Object.fromEntries(Object.entries(selectedBySource).sort(([a],[b])=>stable(a,b))),balance:result.balance,exclusions:result.exclusions,duplicates:result.duplicateGroups,eligibleUniqueCount:result.eligibleUniqueCount});
  }
  for(const folder of sourceFolders) mappingReport.push({folder,slug:FOLDER_TO_SLUG[folder]||null,status:FOLDER_TO_SLUG[folder]?'mapped':'unmapped'});
  for(const folder of UNMAPPED)if(!sourceFolders.includes(folder))mappingReport.push({folder,slug:null,status:'unmapped_folder_missing'});
  if(banks.administrator){banks['administrator-practice-test']=banks.administrator;counts['administrator-practice-test']=counts.administrator;coverage.push({slug:'administrator-practice-test',status:'alias',aliasOf:'administrator',count:counts.administrator});}
  const noticeHashes={};for(const rel of NOTICE_FILES){const f=path.join(root,rel);if(fs.existsSync(f))noticeHashes[rel]=sha(f);}
  const verificationReportPath=path.join(root,REPORT_FILE), verificationReport=fs.existsSync(verificationReportPath)?{file:REPORT_FILE,sha256:sha(verificationReportPath),summary:'Verification report covers Claude Architect Foundations input rows (163), notes 161 valid answers, 2 missing correct-option-text fields, 2 UNKNOWN answers, 0 conflicts, and 4 warnings. It is extraction-quality metadata only and creates no exam mapping.'}:null;
  const manifest={repository:REPOSITORY,commit,sourceTreeSha:treeSha,requestedCount:count,selectionRule:'Read First bank(s) only when present; otherwise all banks; eligible exact-text identities round-robin across source PDFs, with evenly spread picks within each PDF. No answer semantics independently reviewed.',limitations:['Source confidence/status are structural indicators, not independent semantic answer validation.','No associated visual assets are imported; prompts dependent on exhibits, diagrams, images, or screenshots are excluded as missing_visual_context.','Only exact raw prompt+option duplicates are grouped; conflicting exact identities are excluded globally.','Do not publish/deploy without confirming upstream question-bank publication rights; source snapshot README contains no license declaration.'],readmeTxtFound:allFiles.some(f=>path.basename(f).toLowerCase()==='readme.txt'),rootReadmeRequiresManualReview:Boolean(rootReadme),noticeFiles:Object.entries(noticeHashes).map(([file,sha256])=>({file,sha256,summary:file.startsWith('Platform App Builder/')?'Notice says use latest/master READ FIRST file and monitor folder for updates.':'Notice says 4 September master file corrected answers; use the updated READ FIRST master file.'})),verificationReport,mapping:mappingReport,coverage:coverage.sort((a,b)=>stable(a.slug,b.slug)),exams:manifestExams.sort((a,b)=>stable(a.slug,b.slug)),sourceHashes:Object.fromEntries(Object.entries(sourceHashes).sort(([a],[b])=>stable(a,b))),unmappedSourceFolders:sourceFolders.filter(f=>!FOLDER_TO_SLUG[f]),lowQualityMappings:['marketing-cloud-engagement-admin','revenue-cloud-consultant'].filter(s=>coverage.some(x=>x.slug===s&&x.status==='blocked'))};
  fs.mkdirSync(output,{recursive:true});
  for(const [slug,records] of Object.entries(banks))fs.writeFileSync(path.join(output,`${slug}.json`),JSON.stringify(records,null,2)+'\n');
  fs.writeFileSync(path.join(output,'banks.json'),JSON.stringify(banks,null,2)+'\n');
  fs.writeFileSync(path.join(output,'counts.json'),JSON.stringify(counts,null,2)+'\n');
  fs.writeFileSync(path.join(output,'manifest.json'),JSON.stringify(manifest,null,2)+'\n');
  return manifest;
}

function main(args){const opts={};for(let i=0;i<args.length;i++){const k=args[i];if(k==='--source'||k==='--output'||k==='--commit'||k==='--count'){opts[k.slice(2)]=args[++i];if(!opts[k.slice(2)])throw new Error(`Missing value for ${k}`);}else throw new Error(`Unknown argument ${k}`);}if(!opts.source)throw new Error('--source DIR is required');opts.count=opts.count===undefined?15:Number(opts.count);if(!Number.isInteger(opts.count)||opts.count<1)throw new Error('--count must be a positive integer');opts.commit=opts.commit||DEFAULT_COMMIT;const repo=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');const names=fs.readFileSync(path.join(repo,'src/lib/cert-official-names.ts'),'utf8');const slugs=[...names.matchAll(/^\s*['"]?([a-z0-9-]+)['"]?\s*:/gm)].map(m=>m[1]);const manifest=importSnapshot({...opts,output:path.resolve(opts.output||path.join(repo,'src/lib/question-banks/imported')),catalogSlugs:slugs});console.log(`Imported ${Object.values(manifest.coverage).filter(x=>x.status==='selected').length} mapped banks; see manifest.json for exclusions and coverage.`);}
if(process.argv[1]&&path.resolve(process.argv[1])===fileURLToPath(import.meta.url)){try{main(process.argv.slice(2));}catch(e){console.error(e.message);process.exitCode=1;}}
