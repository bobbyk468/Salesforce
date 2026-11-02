import test from 'node:test';
import assert from 'node:assert/strict';
import { validateQuestion, chooseBanks, selectQuestions, importSnapshot, DEFAULT_COMMIT } from './import-git-questions.mjs';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';

const q=(over={})=>({id:1,text:'Which literal is used?\nconst x = " a  b ";',options:{A:'first',B:'second',C:'',D:'',E:'',F:''},answerType:'single',answerCount:1,answer:'A',correctAnswers:['A'],answerText:'first',answerSource:'local_pdf:explicit_answer_label',confidence:'HIGH',notes:'',status:'accepted',sourcePath:'Exam/Set A.pdf',...over});
test('question eligibility supports resolved multi-answer and blank trailing placeholders',()=>{
  assert.equal(validateQuestion(q()),null);
  assert.equal(validateQuestion(q({answerType:'multi',answerCount:2,answer:'A,C',correctAnswers:['A','C'],options:{A:'first',B:'second',C:'third',D:'',E:'',F:''}})),null);
  assert.equal(validateQuestion(q({options:{A:'first',B:'',C:'third',D:'',E:'',F:''}})),'interior_option_gap');
  assert.equal(validateQuestion(q({options:{A:'same',B:'same',C:'',D:'',E:'',F:''}})),'duplicate_option_text');
  assert.equal(validateQuestion(q({text:'Refer to the exhibit. Which?',options:{A:'first',B:'second',C:'',D:'',E:'',F:''}})),'missing_visual_context');
  assert.equal(validateQuestion(q({text:'Which literal is used?\nconst x = " a  b ";'})),null);
});
test('Read First is exclusive and selection is deterministic round robin over source sets',()=>{
  assert.deepEqual(chooseBanks('X',['Read First Master/x.json','Read Second/y.json']),{files:['Read First Master/x.json'],rule:'read_first_only'});
  const banks=[{path:'b.json',questions:[q({id:3,text:'B question one',sourcePath:'B.pdf'}),q({id:4,text:'B question two',sourcePath:'B.pdf'})]},{path:'a.json',questions:[q({id:1,text:'A question one',sourcePath:'A.pdf'}),q({id:2,text:'A question two',sourcePath:'A.pdf'})]}];
  const one=selectQuestions(banks,{count:3}),two=selectQuestions(banks,{count:3});
  assert.deepEqual(one.selected.map(x=>x.set),['A.pdf','B.pdf','A.pdf','B.pdf']);
  assert.deepEqual(one.selected.map(x=>x.q.id),two.selected.map(x=>x.q.id));
});
test('equal-set sampling never backfills a missing or low-quality set from another set', () => {
  const banks = [{path:'a.json',questions:[q({text:'good one',sourcePath:'A.pdf'}),q({text:'good two',sourcePath:'A.pdf'})]},
    {path:'b.json',questions:[q({text:'unresolved one',sourcePath:'B.pdf',confidence:'LOW'})]}];
  const result = selectQuestions(banks,{count:2});
  assert.equal(result.selected.length,0);
  assert.deepEqual(result.balance.map(set=>set.selected),[0,0]);
});
test('exact raw prompt/options identity: conflicts exclude all, duplicate exacts deduplicate, whitespace distinctions survive',()=>{
  const a=q({id:1}),same=q({id:2}),conflict=q({id:3,answer:'B',correctAnswers:['B'],answerText:'second'}),spaced=q({id:4,text:q().text+' '}),independent=q({id:5,text:'another prompt'}),independentCopy=q({id:6,text:'another prompt'});
  const r=selectQuestions([{path:'a.json',questions:[a,same,conflict,spaced,independent,independentCopy]}],{count:10});
  assert.deepEqual(r.selected.map(x=>x.q.id),[4,5]);
  assert.equal(r.duplicateGroups.conflicting,1);
  assert.equal(r.exclusions.conflicting_exact_duplicates,3);
  assert.equal(r.exclusions.identical_exact_duplicates_removed,1);
});
test('snapshot import emits aggregate/count aliases, hashes notices, and blocks root README for review',()=>{
  const source=fs.mkdtempSync(path.join(os.tmpdir(),'sf-import-source-'));
  const out=path.join(source,'out'), folder=path.join(source,'Extracted','Platform Admin','Read First Master');fs.mkdirSync(folder,{recursive:true});
  const fixture={questions:Array.from({length:16},(_,i)=>q({id:i+1,sourceQuestionNum:100+i,text:`Prompt ${i+1}`,sourcePath:`Platform Admin/Read First Master/Set ${i%2}.pdf`}))};
  fs.writeFileSync(path.join(folder,'bank_questions.json'),JSON.stringify(fixture));
  fs.writeFileSync(path.join(source,'tree.json'),JSON.stringify({sha:DEFAULT_COMMIT,tree:[]}));
  fs.mkdirSync(path.join(source,'Platform App Builder'),{recursive:true});fs.writeFileSync(path.join(source,'Platform App Builder','App builder - 29th Aug.txt'),'latest READ FIRST master');
  fs.mkdirSync(path.join(source,'Platform Developer1'),{recursive:true});fs.writeFileSync(path.join(source,'Platform Developer1','PD1-- alert-- 4th september update.txt'),'updated READ FIRST master');
  const manifest=importSnapshot({source,output:out,count:15,commit:DEFAULT_COMMIT,catalogSlugs:['administrator']});
  const banks=JSON.parse(fs.readFileSync(path.join(out,'banks.json'))),counts=JSON.parse(fs.readFileSync(path.join(out,'counts.json')));
  assert.equal(manifest.sourceTreeSha,DEFAULT_COMMIT);
  assert.equal(banks.administrator.length,16);
  assert.deepEqual(banks['administrator-practice-test'],banks.administrator);
  assert.equal(counts['administrator-practice-test'],16);
  assert.deepEqual(Object.keys(counts),['administrator','administrator-practice-test']);
  assert.equal(manifest.noticeFiles.length,2);
  assert.ok(manifest.exams[0].balance.every(set=>!set.empty));
  assert.deepEqual(manifest.exams[0].selectedBySource,{'Platform Admin/Read First Master/Set 0.pdf':8,'Platform Admin/Read First Master/Set 1.pdf':8});
  assert.equal(typeof banks.administrator[0].source.answerEvidence,'string');
  assert.equal(banks.administrator[0].source.questionId,'100');
  assert.equal(banks.administrator[0].source.bankQuestionId,'1');
  assert.equal(manifest.coverage.filter(x=>x.slug==='administrator-practice-test').length,1);
  fs.writeFileSync(path.join(source,'README.txt'),'manual review needed');
  const blocked=importSnapshot({source,output:path.join(source,'out-blocked'),count:15,commit:DEFAULT_COMMIT,catalogSlugs:['administrator']});
  assert.equal(blocked.coverage[0].status,'blocked');
  fs.rmSync(source,{recursive:true,force:true});
});
