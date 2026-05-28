import Reveal from './Reveal';

export default function IdeationChip({ children, delay = 0 }) {
  return (
    <Reveal delay={delay} className="inline-flex">
      <span className="rounded-full border border-[#DCE4EE] bg-white px-3 py-2 text-xs font-medium text-[#52647E] shadow-sm">
        {children}
      </span>
    </Reveal>
  );
}
