import PageShell from '../components/PageShell';
import Reveal from '../components/Reveal';
import JourneyHero from '../components/JourneyHero';
import TimelineItem from '../components/TimelineItem';
import PersonaInsightCard from '../components/PersonaInsightCard';
import IdeationChip from '../components/IdeationChip';
import JourneyCTA from '../components/JourneyCTA';

const timelineItems = [
  {
    number: '01',
    title: 'Starting with a broad concern',
    body: 'We began with the theme of digital integrity, intellectual ethics, and responsible AI use. The problem space felt important but too broad: AI raised questions about truth, trust, academic honesty, privacy, over-reliance, and responsibility, but we did not yet know which specific human problem to solve.',
    insight: 'Insight: “AI has risks” was too generic to design for.',
  },
  {
    number: '02',
    title: 'Understanding the problem space',
    body: 'Our early discussions showed that users were not simply divided into AI users and non-users. Many people found AI genuinely useful because it saved time, generated ideas, explained concepts, summarized information, and supported productivity. But when the output mattered, they hesitated.',
    insight: 'Insight: The issue was not usefulness. It was knowing when usefulness becomes risky.',
  },
  {
    number: '03',
    title: 'Moving from assumptions to empathy',
    body: 'We created survey and interview material to understand how people use AI, what they use it for, where they hesitate, whether they verify answers, and what would help them use AI more responsibly or confidently. This helped us move away from designing for a generic “AI user.”',
    insight: 'Insight: Trust depends heavily on context.',
  },
  {
    number: '04',
    title: 'Finding different trust patterns',
    body: 'The research showed that AI trust is not one universal problem. A student using AI for an assignment, a professional using AI for work, a high-stakes user making critical decisions, and a casual user asking quick questions all face different trust tensions.',
    insight: 'Insight: One warning cannot serve every user.',
  },
  {
    number: '05',
    title: 'Moving beyond “AI can be wrong”',
    body: 'At first, it was easy to say users hesitate because AI can produce incorrect answers. But root cause analysis pushed us deeper. The issue was not only inaccuracy. It was the absence of visible trust signals: confidence, uncertainty, source quality, factual support, ethical limits, risk level, and guidance on when human verification is needed.',
    insight: 'Insight: Users carry the burden of uncertainty.',
  },
  {
    number: '06',
    title: 'Reframing the problem',
    body: 'Our problem statements evolved across user types. Students struggled with responsible use and learning integrity. Professionals struggled with verification burden and accountability. High-stakes users needed reliability and strict boundaries. Casual users lacked confidence and source clarity. The common thread was not blind distrust. It was the need to judge how much weight to give an AI answer before acting on it.',
    insight: 'Insight: Blind trust is dangerous. Total distrust is limiting. Calibrated trust is useful.',
  },
  {
    number: '07',
    title: 'Exploring solution directions',
    body: 'We generated How Might We questions across multiple personas and explored ideas around confidence indicators, source visibility, claim verification, uncertainty flags, risk cues, limitation warnings, and human verification prompts. The strongest ideas were the ones that added clarity without slowing users down too much.',
    insight: 'Insight: Trust support should be lightweight, not restrictive.',
  },
  {
    number: '08',
    title: 'Arriving at TrustLayer',
    body: 'TrustLayer emerged as a focused response to the research. Instead of trying to stop AI use or guarantee truth, it adds a transparent trust-calibration layer that helps users inspect AI-generated answers and decide whether to trust, question, verify, or avoid relying on them.',
    insight: 'Insight: The goal is not blind trust. The goal is appropriate trust.',
  },
];

const personas = [
  {
    archetype: 'Conflicted Power User',
    quote: 'AI helps me move faster, but I’m not always sure I’m using it the right way.',
    body: 'Frequent AI users who rely on it for studying, writing, brainstorming, or completing tasks, especially under time pressure. They value speed and support, but feel uneasy about over-reliance, originality, learning quality, and responsible use.',
    tension: 'High usage, uneven confidence.',
  },
  {
    archetype: 'Cautious Professional',
    quote: 'AI is useful, but I cannot afford to trust it blindly.',
    body: 'Working professionals who use AI for drafting, coding, analysis, summaries, planning, or productivity support. They see the value clearly, but must verify outputs because accountability, accuracy, privacy, and work quality still remain their responsibility.',
    tension: 'Efficiency conflicts with accountability.',
  },
  {
    archetype: 'High-Stakes Skeptic',
    quote: 'In my context, a confident wrong answer can be dangerous.',
    body: 'Users in high-responsibility contexts such as healthcare, education, law, finance, or safety-critical settings. They may see AI’s potential, but avoid relying on it for core decisions unless reliability, boundaries, and human judgment are clearly protected.',
    tension: 'Trust requires evidence and restraint.',
  },
  {
    archetype: 'Low-Trust Casual User',
    quote: 'I ask quick questions, but I don’t always know what to trust.',
    body: 'Occasional users who use AI for convenience, curiosity, or small daily tasks. They may not have the confidence or domain knowledge to detect errors, and AI answers can feel too fluent to question but too unsupported to fully trust.',
    tension: 'Low expertise makes errors harder to spot.',
  },
];

const hmwExamples = [
  'How might we help users decide when to trust AI outputs?',
  'How might we make users aware of AI limitations without disrupting convenience?',
  'How might we help professionals quickly verify AI outputs?',
  'How might we communicate risk and uncertainty clearly?',
  'How might we ensure AI supports decisions without replacing human judgment?',
];

const ideationChips = [
  'Confidence scoring',
  'Source checking',
  'Claim verification',
  'Uncertainty flags',
  'Risk indicators',
  'Limitation warnings',
  'Human verification guidance',
  'Productive friction',
  'Context-aware caution',
  'Transparent rule paths',
];

export default function Journey() {
  return (
    <PageShell>
      <div className="space-y-16">
        <JourneyHero />

        <Reveal>
          <section className="space-y-6">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#52647E]">Reframe</p>
              <h3 className="mt-3 text-3xl font-semibold tracking-tight text-[#1F2937]">
                The question changed as our understanding changed.
              </h3>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-[26px] border border-[#DCE4EE] bg-white p-6 shadow-[0_18px_54px_rgba(31,41,55,0.06)]">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#52647E]">Before</p>
                <p className="mt-4 text-2xl font-semibold leading-9 text-[#1F2937]">Can people trust AI?</p>
              </div>
              <div className="rounded-[26px] border border-[#DCE4EE] bg-white p-6 shadow-[0_18px_54px_rgba(31,41,55,0.06)]">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#52647E]">After</p>
                <p className="mt-4 text-2xl font-semibold leading-9 text-[#1F2937]">How can we help people know when, where, and how much to trust AI?</p>
              </div>
            </div>
            <p className="rounded-[22px] border border-[#DCE4EE] bg-[#F3F6F8] px-5 py-4 text-sm leading-6 text-[#52647E]">
              This shift moved the project from a broad ethical concern to a focused design opportunity around trust calibration.
            </p>
          </section>
        </Reveal>

        <section className="space-y-8">
          <Reveal className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#52647E]">Process</p>
            <h3 className="mt-3 text-3xl font-semibold tracking-tight text-[#1F2937]">The design thinking journey</h3>
            <p className="mt-4 text-sm leading-7 text-[#52647E]">
              The project evolved through theme selection, empathy work, persona synthesis, root cause analysis, problem statement refinement, ideation, and final solution framing.
            </p>
          </Reveal>
          <div className="space-y-7">
            {timelineItems.map((item, index) => (
              <TimelineItem
                key={item.number}
                number={item.number}
                title={item.title}
                body={item.body}
                insight={item.insight}
                delay={(index % 2) * 80}
                isLast={index === timelineItems.length - 1}
              />
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <Reveal className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#52647E]">Personas</p>
            <h3 className="mt-3 text-3xl font-semibold tracking-tight text-[#1F2937]">Different users, different trust tensions</h3>
            <p className="mt-4 text-sm leading-7 text-[#52647E]">
              Our research showed that uncertainty around AI was not experienced in the same way by everyone. Each user archetype carried a different kind of trust burden.
            </p>
          </Reveal>
          <div className="grid gap-4 md:grid-cols-2">
            {personas.map((persona, index) => (
              <PersonaInsightCard key={persona.archetype} {...persona} delay={index * 80} />
            ))}
          </div>
        </section>

        <Reveal>
          <section className="rounded-[28px] border border-[#DCE4EE] bg-white p-7 shadow-[0_18px_54px_rgba(31,41,55,0.06)] md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#52647E]">Root Cause</p>
            <h3 className="mt-3 text-3xl font-semibold tracking-tight text-[#1F2937]">The deeper issue was missing trust infrastructure.</h3>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-[#52647E]">
              The core issue was not simply that AI lacks capability. Users were receiving powerful, polished outputs without enough guidance, transparency, or contextual guardrails. That made it difficult to use AI confidently, correctly, and responsibly.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-2 text-xs font-medium text-[#52647E]">
              {['Powerful AI output', 'unclear limitations', 'inconsistent verification', 'misplaced confidence', 'poor trust decisions'].map((step, index) => (
                <span key={step} className="flex items-center gap-2">
                  <span className="rounded-full border border-[#DCE4EE] bg-[#F3F6F8] px-3 py-1.5">{step}</span>
                  {index < 4 && <span className="text-slate-300">→</span>}
                </span>
              ))}
            </div>
            <p className="mt-6 rounded-[22px] bg-[#F8F7F4] px-5 py-4 text-sm font-medium leading-7 text-[#1F2937]">
              Users are not equipped to judge when to trust, question, or verify AI outputs because current AI experiences rarely make confidence, uncertainty, risk, and evidence visible at the moment of use.
            </p>
          </section>
        </Reveal>

        <section className="space-y-6">
          <Reveal className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#52647E]">Ideation</p>
            <h3 className="mt-3 text-3xl font-semibold tracking-tight text-[#1F2937]">From HMWs to solution clusters</h3>
            <p className="mt-4 text-sm leading-7 text-[#52647E]">
              As we translated insight into possible solutions, a few recurring directions kept appearing across the ideation process.
            </p>
          </Reveal>

          <Reveal>
            <div className="grid gap-3 md:grid-cols-2">
              {hmwExamples.map((hmw) => (
                <div key={hmw} className="rounded-[20px] border border-[#DCE4EE] bg-white px-5 py-4 text-sm leading-6 text-[#52647E] shadow-[0_10px_30px_rgba(31,41,55,0.04)]">
                  {hmw}
                </div>
              ))}
            </div>
          </Reveal>

          <div className="flex flex-wrap gap-2">
            {ideationChips.map((chip, index) => (
              <IdeationChip key={chip} delay={index * 45}>{chip}</IdeationChip>
            ))}
          </div>

          <Reveal>
            <p className="rounded-[22px] border border-[#DCE4EE] bg-[#F3F6F8] px-5 py-4 text-sm leading-7 text-[#52647E]">
              These clusters helped narrow the solution toward a lightweight, inspectable trust layer rather than a restrictive AI policy tool or a full fact-checking engine.
            </p>
          </Reveal>
        </section>

        <JourneyCTA />
      </div>
    </PageShell>
  );
}
