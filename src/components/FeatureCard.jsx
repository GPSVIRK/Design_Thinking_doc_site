export default function FeatureCard({ marker = 'bg-[#A8DDD0]', title, children }) {
  return (
    <div className="h-full rounded-[22px] border border-[#DCE4EE] bg-white/95 p-5 shadow-[0_10px_30px_rgba(31,41,55,0.04)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_16px_42px_rgba(31,41,55,0.07)]">
      <div className={`h-2.5 w-2.5 rounded-full ${marker}`} />
      <h3 className="mt-4 text-sm font-semibold text-[#1F2937]">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-[#52647E]">{children}</p>
    </div>
  );
}
