export default function PageShell({ children, className = '' }) {
  return (
    <main className={`relative mx-auto max-w-6xl px-5 md:px-6 py-12 md:py-16 ${className}`}>
      <div className="pointer-events-none absolute inset-x-6 top-4 -z-10 h-56 rounded-full bg-[#DCE4EE]/40 blur-3xl" />
      {children}
    </main>
  );
}
