export default function Chip({ children }) {
  return (
    <span className="inline-flex rounded-full border border-[#DCE4EE] bg-white px-3 py-1.5 text-xs font-medium text-[#52647E] shadow-sm">
      {children}
    </span>
  );
}
