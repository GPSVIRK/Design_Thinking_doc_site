import Reveal from './Reveal';

export default function JourneyHero() {
  return (
    <section className="relative overflow-hidden rounded-[30px] border border-[#DCE4EE] bg-white px-6 py-8 shadow-[0_24px_70px_rgba(31,41,55,0.07)] md:px-10 md:py-12">
      <div className="pointer-events-none absolute right-0 top-0 h-48 w-48 rounded-full bg-[#DCE4EE]/60 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-10 h-32 w-64 rounded-full bg-[#E1F5EE]/60 blur-3xl" />

      <Reveal className="relative max-w-4xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#52647E]">Journey</p>
        <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-[#1F2937] md:text-6xl">
          From blind trust to calibrated trust.
        </h2>
        <p className="mt-6 max-w-3xl text-base leading-7 text-[#52647E] md:text-lg">
          Our design process began with a broad concern about AI misuse and uncertainty. Through research, synthesis, root cause analysis, and reframing, we arrived at a sharper design opportunity: helping users know when, where, and how much to trust AI.
        </p>
        <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-500">
          At the start, the topic felt huge. AI was showing up in assignments, work, healthcare, writing, research, decision-making, and everyday problem-solving. Everyone had a different relationship with it. Some people used it daily. Some avoided it. Some trusted it too much. Some did not trust it at all. Our challenge was to move from this broad theme into a specific human problem.
        </p>
      </Reveal>
    </section>
  );
}
