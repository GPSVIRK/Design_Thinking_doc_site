export default function DocumentCard({ title, description, href }) {
  return (
    <div className="rounded-[20px] border border-[#DCE4EE] bg-white p-5 shadow-[0_10px_30px_rgba(31,41,55,0.04)]">
      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#52647E]">PDF</p>
      <h3 className="mt-2 text-sm font-semibold text-[#1F2937]">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-[#52647E]">{description}</p>
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="mt-4 inline-flex rounded-full border border-[#DCE4EE] px-3 py-1.5 text-xs font-medium text-slate-700 transition hover:border-slate-300 hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
      >
        Open PDF
      </a>
    </div>
  );
}
