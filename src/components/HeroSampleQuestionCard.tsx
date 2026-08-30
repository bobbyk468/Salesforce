'use client'

import { useEffect, useState } from 'react'

interface HeroSampleQuestion {
  examCode: string
  qNumber: number
  question: string
  options: { letter: string; text: string; correct?: boolean }[]
}

const HERO_SAMPLE_QUESTIONS: HeroSampleQuestion[] = [
  {
    examCode: 'ADM-201',
    qNumber: 12,
    question: 'A Sales Manager wants to receive an email when an Opportunity is updated. Which automation should the admin recommend?',
    options: [
      { letter: 'A', text: 'Approval Process triggered on edit' },
      { letter: 'B', text: 'Flow with a Record-Triggered Email Alert', correct: true },
      { letter: 'C', text: 'Validation Rule with custom error message' },
      { letter: 'D', text: 'Sharing Rule based on owner role' },
    ],
  },
  {
    examCode: 'PD1',
    qNumber: 8,
    question: 'A developer needs to query Accounts and their related Contacts in a single SOQL query. Which clause accomplishes this?',
    options: [
      { letter: 'A', text: 'A WHERE clause with a subquery' },
      { letter: 'B', text: 'A relationship query using a child-to-parent subquery', correct: true },
      { letter: 'C', text: 'Two separate SOQL queries joined in Apex' },
      { letter: 'D', text: 'A GROUP BY clause on Contact.AccountId' },
    ],
  },
  {
    examCode: 'App Builder',
    qNumber: 15,
    question: 'A company wants a formula field that shows "Overdue" when a Case is past its due date. What field type should be used?',
    options: [
      { letter: 'A', text: 'Text field with a Validation Rule' },
      { letter: 'B', text: 'Formula field returning a Text value', correct: true },
      { letter: 'C', text: 'Roll-Up Summary field' },
      { letter: 'D', text: 'Auto Number field' },
    ],
  },
  {
    examCode: 'Sales Cloud',
    qNumber: 6,
    question: 'A consultant wants reps to see only Opportunities from Accounts they own, with managers seeing their team’s records. What should be configured?',
    options: [
      { letter: 'A', text: 'Public Read/Write Org-Wide Default' },
      { letter: 'B', text: 'Private OWD with role hierarchy access', correct: true },
      { letter: 'C', text: 'A sharing rule granting access to all users' },
      { letter: 'D', text: 'Manual sharing on every Opportunity' },
    ],
  },
  {
    examCode: 'System Architect',
    qNumber: 3,
    question: 'A large data volume org is seeing slow query performance on a custom object with 15 million records. What should the architect recommend first?',
    options: [
      { letter: 'A', text: 'Add more custom fields for reporting' },
      { letter: 'B', text: 'Index selective filter fields and review query plans', correct: true },
      { letter: 'C', text: 'Convert the object to a Big Object' },
      { letter: 'D', text: 'Disable sharing rules on the object' },
    ],
  },
  {
    examCode: 'Tableau Consultant',
    qNumber: 9,
    question: 'A client wants a dashboard that lets executives drill from a regional summary into rep-level detail without leaving the view. What should be built?',
    options: [
      { letter: 'A', text: 'A separate workbook per region' },
      { letter: 'B', text: 'A dashboard action using filter or navigate actions', correct: true },
      { letter: 'C', text: 'A static export refreshed manually' },
      { letter: 'D', text: 'A calculated field hiding rep-level rows' },
    ],
  },
]

export default function HeroSampleQuestionCard() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    setIndex(Math.floor(Math.random() * HERO_SAMPLE_QUESTIONS.length))
  }, [])

  const q = HERO_SAMPLE_QUESTIONS[index]

  return (
    <div className="bg-white border border-gray-100 rounded-3xl p-7 relative overflow-hidden shadow-2xl shadow-gray-200/40">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/60 via-white to-blue-50/40 pointer-events-none" aria-hidden="true" />
      <div className="relative">
        <div className="flex justify-between items-center mb-5">
          <span className="text-xs font-semibold text-gray-500 uppercase tracking-widest">Sample question &middot; {q.examCode}</span>
          <span className="text-xs font-semibold text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">Free</span>
        </div>
        <div className="bg-white border border-gray-100 rounded-xl p-5">
          <div className="flex justify-between text-xs text-gray-500 mb-2.5">
            <span className="font-mono font-semibold text-salesforce-blue">{q.examCode} &middot; Q{q.qNumber}</span>
            <span>Single-select</span>
          </div>
          <p className="text-sm font-semibold text-gray-900 leading-snug mb-4">{q.question}</p>
          <div className="space-y-2">
            {q.options.map((opt) => (
              <div
                key={opt.letter}
                className={
                  opt.correct
                    ? 'flex gap-2.5 items-start p-3 border border-emerald-200 rounded-xl text-sm text-emerald-900 bg-emerald-50'
                    : 'flex gap-2.5 items-start p-3 border border-gray-100 rounded-xl text-sm text-gray-700'
                }
              >
                <span
                  className={
                    opt.correct
                      ? 'w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center text-xs font-bold flex-shrink-0 text-white'
                      : 'w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center text-xs font-bold flex-shrink-0 text-gray-600'
                  }
                  aria-hidden="true"
                >
                  {opt.letter}
                </span>
                <span>{opt.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
