import { useState } from 'react';
import PageShell from '../components/PageShell';
import DocumentCard from '../components/DocumentCard';
import Card from '../components/Card';

const docGroups = [
  {
    group: "Research",
    description: "Original research material used to understand AI usage, trust, uncertainty, and user behavior.",
    items: [
      {
        title: "Survey & Interview Guide",
        description: "Survey objective, target audience, revised interview questions, and user research prompts.",
        href: "/docs/survey-interview-guide.pdf",
      },
      {
        title: "Journey Writeup",
        description: "Narrative writeup explaining how the project evolved from a broad AI concern to TrustLayer.",
        href: "/docs/journey-writeup.pdf",
      },
    ],
  },
  {
    group: "Synthesis",
    description: "Artifacts that convert raw research into user patterns, personas, and problem framing.",
    items: [
      {
        title: "Persona Template",
        description: "User archetypes, motivations, pain points, behaviors, scenarios, and trust tensions.",
        href: "/docs/persona-template.pdf",
      },
      {
        title: "Problem Statements — Userwise",
        description: "Persona-wise problem statements, POV framing, HMW questions, and final reframes.",
        href: "/docs/problem-statements_userwise.pdf",
      },
      {
        title: "Problem Statement Iteration & Evaluation",
        description: "Problem statement refinement, evaluation, and iteration notes from the design process.",
        href: "/docs/problem-statement-iteration_1+evaluation.pdf",
      },
      {
        title: "Root Cause Analysis",
        description: "5 Whys analysis showing the shift from unclear AI rules to missing trust infrastructure.",
        href: "/docs/root-cause-analysis.pdf",
      },
    ],
  },
  {
    group: "Ideation",
    description: "How the team moved from HMW questions to possible solution directions.",
    items: [
      {
        title: "HMW & Brainwriting",
        description: "How Might We questions, brainwriting rounds, idea clusters, and narrowed solution directions.",
        href: "/docs/hmw-ideation.pdf",
      },
    ],
  },
  {
    group: "Poster",
    description: "Final project poster consolidating the complete Design Thinking journey.",
    items: [
      {
        title: "TrustLayer Final Poster",
        description: "Comprehensive visual summary of the project, solution rationale, and the TrustLayer Prototype.",
        href: "/docs/TrustLayer_Poster.pdf"
      }
    ]
  }
];

const confidenceRows = [
  ['High', 'Well-established fact or cited source'],
  ['Medium', 'Sensitive domain, uncertain language, or unverified default'],
  ['Low', 'Speculative or future-facing language'],
];

export default function Docs() {
  const [open, setOpen] = useState(false);

  return (
    <PageShell>
      <div className="space-y-10">
        <section className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#52647E]">Docs</p>
          <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight text-[#1F2937]">
            Documentation & Evidence
          </h2>
          <p className="mt-5 text-base leading-7 text-[#52647E]">
            Original research, synthesis, root cause, ideation, and prototype artifacts used during the design thinking process.
          </p>
          <p className="mt-4 rounded-[20px] border border-[#DCE4EE] bg-white px-5 py-4 text-sm leading-6 text-[#52647E] shadow-[0_10px_30px_rgba(31,41,55,0.04)]">
            These documents are supporting evidence. The Journey page summarizes the process; the PDFs preserve the original research and design artifacts.
          </p>
        </section>

        <section className="space-y-7">
          {docGroups.map(({ group, description, items }) => (
            <div key={group} className="space-y-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#52647E]">{group}</p>
                <p className="mt-1 max-w-2xl text-sm leading-6 text-[#52647E]">{description}</p>
              </div>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {items.map((item) => (
                  <DocumentCard
                    key={`${group}-${item.title}`}
                    title={item.title}
                    description={item.description}
                    href={item.href}
                  />
                ))}
              </div>
            </div>
          ))}
        </section>

        <section className="rounded-[24px] border border-[#DCE4EE] bg-white shadow-[0_14px_44px_rgba(31,41,55,0.05)]">
          <button
            onClick={() => setOpen(value => !value)}
            className="flex w-full items-center justify-between px-6 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            <div>
              <p className="text-sm font-semibold text-[#1F2937]">How the scoring engine works</p>
              <p className="mt-1 text-xs text-[#52647E]">Compact reference for confidence levels and rule order.</p>
            </div>
            <span className="text-sm text-[#52647E]">{open ? 'Hide' : 'Show'}</span>
          </button>

          {open && (
            <div className="grid gap-4 border-t border-[#DCE4EE] p-6 lg:grid-cols-2">
              <Card className="shadow-none">
                <h3 className="text-sm font-semibold text-slate-800">Confidence Levels</h3>
                <div className="mt-4 space-y-3">
                  {confidenceRows.map(([level, description]) => (
                    <div key={level} className="flex gap-3 text-sm">
                      <span className="w-20 font-semibold text-slate-700">{level}</span>
                      <span className="text-slate-500">{description}</span>
                    </div>
                  ))}
                </div>
              </Card>
              <Card className="shadow-none">
                <h3 className="text-sm font-semibold text-slate-800">Rule Order</h3>
                <ol className="mt-4 space-y-2 text-sm leading-6 text-slate-500">
                  <li>1. Source signal found: High.</li>
                  <li>2. Speculative or future-facing language found: Low.</li>
                  <li>3. Sensitive domain found without source: Medium.</li>
                  <li>4. Hedging found without source: Medium.</li>
                  <li>5. Established factual pattern found: High.</li>
                  <li>6. No positive signal found: Medium by default.</li>
                </ol>
              </Card>
            </div>
          )}
        </section>
      </div>
    </PageShell>
  );
}
