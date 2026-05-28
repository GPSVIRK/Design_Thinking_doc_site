export default function PersonaCard({ name, archetype, quote, tension }) {
  return (
    <div className="rounded-[22px] border border-[#DCE4EE] bg-white p-5 shadow-[0_10px_30px_rgba(31,41,55,0.04)]">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#52647E]">{archetype}</p>
      <h3 className="mt-2 text-base font-semibold text-[#1F2937]">{name}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">“{quote}”</p>
      <p className="mt-4 rounded-2xl bg-[#F3F6F8] px-3 py-2 text-xs leading-5 text-[#52647E]">{tension}</p>
    </div>
  );
}
