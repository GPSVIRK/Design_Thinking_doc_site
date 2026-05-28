import Reveal from './Reveal';

export default function PersonaInsightCard({ archetype, quote, body, tension, delay = 0 }) {
  return (
    <Reveal delay={delay}>
      <article className="h-full rounded-[24px] border border-[#DCE4EE] bg-white p-5 shadow-[0_14px_44px_rgba(31,41,55,0.05)]">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#52647E]">{archetype}</p>
        <p className="mt-4 text-base font-semibold leading-7 text-[#1F2937]">“{quote}”</p>
        <p className="mt-4 text-sm leading-7 text-[#52647E]">{body}</p>
        <div className="mt-5 rounded-2xl bg-[#F3F6F8] px-4 py-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#52647E]">Trust tension</p>
          <p className="mt-1 text-sm font-medium text-[#1F2937]">{tension}</p>
        </div>
      </article>
    </Reveal>
  );
}
