export default function ReframeBlock() {
  const items = [
    ['Before', 'Can people trust AI?'],
    ['After', 'How can we help people know when, where, and how much to trust AI?'],
  ];

  return (
    <section className="grid gap-4 md:grid-cols-2">
      {items.map(([label, text]) => (
        <div key={label} className="rounded-[24px] border border-[#DCE4EE] bg-white p-6 shadow-[0_12px_34px_rgba(31,41,55,0.05)]">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#52647E]">{label}</p>
          <p className="mt-3 text-xl font-semibold leading-8 text-[#1F2937]">{text}</p>
        </div>
      ))}
    </section>
  );
}
