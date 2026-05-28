export default function TimelineCard({ number, title, body, insight }) {
  return (
    <div className="relative grid gap-4 pl-10 md:grid-cols-[180px_1fr] md:pl-0">
      <div className="absolute left-3 top-2 bottom-[-22px] w-px bg-[#DCE4EE] md:left-[91px]" />
      <div className="relative z-10 flex md:justify-center">
        <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#DCE4EE] bg-white text-xs font-semibold text-[#52647E] shadow-sm">
          {number}
        </span>
      </div>
      <div className="rounded-[22px] border border-[#DCE4EE] bg-white p-5 shadow-[0_10px_30px_rgba(31,41,55,0.04)]">
        <h3 className="text-sm font-semibold text-[#1F2937]">{title}</h3>
        <p className="mt-2 text-sm leading-6 text-[#52647E]">{body}</p>
        <span className="mt-4 inline-flex rounded-full bg-[#F3F6F8] px-3 py-1 text-[11px] font-medium text-[#52647E]">
          Insight: {insight}
        </span>
      </div>
    </div>
  );
}
