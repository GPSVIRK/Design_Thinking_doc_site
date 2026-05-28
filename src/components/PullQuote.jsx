export default function PullQuote({ children }) {
  return (
    <blockquote className="rounded-xl border-l-4 border-slate-800 bg-white px-5 py-4 text-sm text-slate-600 shadow-sm">
      {children}
    </blockquote>
  );
}
