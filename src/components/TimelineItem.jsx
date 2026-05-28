import Reveal from './Reveal';
import InsightPill from './InsightPill';

export default function TimelineItem({ number, title, body, insight, delay = 0, isLast = false }) {
  return (
    <Reveal delay={delay} className="relative grid grid-cols-[48px_1fr] items-start gap-4 md:grid-cols-[72px_minmax(0,860px)] md:gap-6">
      <div className="relative flex justify-center self-stretch">
        <div className={`absolute left-1/2 w-px -translate-x-1/2 bg-[#DCE4EE] ${isLast ? 'top-0 h-6' : 'top-0 bottom-[-28px]'}`} />
        <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-[#DCE4EE] bg-white text-xs font-semibold text-[#52647E] shadow-sm md:h-11 md:w-11 md:text-sm">
          {number}
        </div>
      </div>

      <div className="pb-8 md:pb-10">
        <article className="rounded-[24px] border border-[#DCE4EE] bg-white p-5 shadow-[0_14px_44px_rgba(31,41,55,0.05)] md:p-6">
          <h3 className="text-lg font-semibold text-[#1F2937]">{title}</h3>
          <p className="mt-3 text-sm leading-7 text-[#52647E]">{body}</p>
          <div className="mt-5">
            <InsightPill>{insight}</InsightPill>
          </div>
        </article>
      </div>
    </Reveal>
  );
}
