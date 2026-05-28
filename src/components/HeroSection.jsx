export default function HeroSection({ eyebrow, title, description, actions, children }) {
  return (
    <section className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#52647E]">{eyebrow}</p>
        <h2 className="mt-4 max-w-3xl text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[#1F2937]">
          {title}
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-7 text-[#52647E]">{description}</p>
        {actions && <div className="mt-7 flex flex-wrap gap-3">{actions}</div>}
      </div>
      {children}
    </section>
  );
}
