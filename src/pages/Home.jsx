import CTAButton from '../components/CTAButton';
import PageShell from '../components/PageShell';
import HeroSection from '../components/HeroSection';
import FeatureCard from '../components/FeatureCard';

function ProductPreview() {
  const rows = [
    ['The boiling point of water is 100°C.', 'High', 'bg-[#E1F5EE] text-[#085041]'],
    ['Ibuprofen dosage varies by context.', 'Medium', 'bg-[#FAEEDA] text-[#633806]'],
    ['Remote work may change by 2030.', 'Low', 'bg-[#F1EFE8] text-[#444441]'],
  ];

  return (
    <div className="relative">
      <div className="pointer-events-none absolute -inset-8 rounded-full bg-[#A8DDD0]/25 blur-3xl" />
      <div className="home-preview-in relative rounded-[28px] border border-[#DCE4EE] bg-white p-5 shadow-[0_24px_70px_rgba(31,41,55,0.09)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(31,41,55,0.12)]">
        <div className="flex items-center justify-between border-b border-[#EEF2F6] pb-4">
          <div>
            <p className="text-xs font-semibold text-[#1F2937]">Sentence-level scoring</p>
            <p className="mt-1 text-[11px] text-[#52647E]">Trust score preview</p>
          </div>
          <span className="rounded-full bg-[#F3F6F8] px-3 py-1 text-[11px] font-medium text-[#52647E]">Local</span>
        </div>

        <div className="mt-4 space-y-3">
          {rows.map(([text, label, pill], index) => (
            <div
              key={text}
              className="preview-row-in rounded-2xl border border-[#EEF2F6] bg-[#FBFCFD] p-3 transition duration-200 hover:-translate-y-0.5 hover:border-[#DCE4EE] hover:bg-white"
              style={{ animationDelay: `${180 + index * 110}ms` }}
            >
              <div className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-[#A8BDD0]" />
                <p className="flex-1 text-sm leading-6 text-slate-700">{text}</p>
                <span className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ${pill}`}>{label}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 rounded-2xl bg-[#F8F7F4] p-4">
          <div className="flex items-center justify-between text-xs text-[#52647E]">
            <span>High</span>
            <span>Medium</span>
            <span>Low</span>
          </div>
          <div className="mt-2 flex h-2 overflow-hidden rounded-full bg-slate-100">
            <div className="trust-bar-grow w-1/3 bg-[#1D9E75]" style={{ animationDelay: '560ms' }} />
            <div className="trust-bar-grow w-1/3 bg-[#EF9F27]" style={{ animationDelay: '660ms' }} />
            <div className="trust-bar-grow w-1/3 bg-[#888780]" style={{ animationDelay: '760ms' }} />
          </div>
        </div>
      </div>
    </div>
  );
}

function TrustDecisionFlow() {
  const steps = [
    ['01', 'AI gives an answer', 'Fluent output can still contain facts, guesses, advice, or unsupported claims.'],
    ['02', 'TrustLayer checks signals', 'It looks for confidence cues, uncertainty, source signals, sensitive domains, and claim types.'],
    ['03', 'User makes a better decision', 'Trust, verify, or avoid relying on the answer depending on context and risk.'],
  ];

  return (
    <section className="grid gap-3 md:grid-cols-3 md:items-stretch">
      {steps.map(([number, title, text], index) => (
        <div key={number} className="relative">
          {index < steps.length - 1 && (
            <div className="hidden md:block absolute left-[calc(100%-8px)] top-8 z-10 h-px w-4 bg-[#DCE4EE]" />
          )}
          <div className="h-full rounded-[22px] border border-[#DCE4EE] bg-white p-5 shadow-[0_10px_30px_rgba(31,41,55,0.04)]">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#F3F6F8] text-xs font-semibold text-[#52647E]">
              {number}
            </span>
            <h3 className="mt-4 text-sm font-semibold text-[#1F2937]">{title}</h3>
            <p className="mt-2 text-sm leading-6 text-[#52647E]">{text}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default function Home() {
  return (
    <PageShell>
      <div className="space-y-10">
        <HeroSection
          eyebrow="TrustLayer"
          title="Paste any AI response. See what deserves trust."
          description="TrustLayer helps users inspect AI-generated text through confidence signals, uncertainty cues, and transparent rule paths — without sending data anywhere."
          actions={(
            <>
              <CTAButton to="/prototype">View Prototype</CTAButton>
              <CTAButton to="/journey" variant="secondary">Explore the Journey</CTAButton>
            </>
          )}
        >
          <ProductPreview />
        </HeroSection>

        <TrustDecisionFlow />

        <section className="grid gap-4 md:grid-cols-3">
          <FeatureCard title="Sentence-level scoring" marker="bg-[#A8DDD0]">
            Each claim receives a confidence level, claim type, and explanation.
          </FeatureCard>
          <FeatureCard title="Transparent rules" marker="bg-[#B8C7D6]">
            The system shows which signal fired and why.
          </FeatureCard>
          <FeatureCard title="Local by design" marker="bg-[#D8D4C9]">
            The prototype runs client-side with hardcoded demo rules.
          </FeatureCard>
        </section>

        <section className="flex flex-col gap-3 rounded-[24px] border border-[#DCE4EE] bg-[#F3F6F8] p-5 shadow-[0_10px_30px_rgba(31,41,55,0.04)] md:flex-row md:items-center">
          <span className="h-2.5 w-2.5 rounded-full bg-[#A8DDD0]" />
          <div>
            <p className="text-sm font-semibold text-[#1F2937]">AI confidence can be misleading.</p>
            <p className="mt-1 text-sm leading-6 text-[#52647E]">TrustLayer makes uncertainty visible before users act on an answer.</p>
          </div>
        </section>

        <section className="rounded-[24px] border border-[#DCE4EE] bg-white p-6 shadow-[0_14px_44px_rgba(31,41,55,0.05)]">
          <p className="text-sm font-semibold text-[#1F2937]">The default is Medium, not High.</p>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-[#52647E]">
            Anything the engine cannot positively identify as factual or sourced is treated as unverified.
          </p>
        </section>
      </div>
    </PageShell>
  );
}
