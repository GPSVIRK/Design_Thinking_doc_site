export default function TimelineSection({ items }) {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div key={item.title} className="grid gap-3 md:grid-cols-[140px_1fr]">
          <div className="text-xs font-semibold uppercase tracking-wide text-slate-400">{item.kicker}</div>
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-sm font-semibold text-slate-800">{item.title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-500">{item.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
