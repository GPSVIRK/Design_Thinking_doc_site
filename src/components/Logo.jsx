export default function Logo({ className = "h-8 w-8" }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M24 5.5L38 10.5V22.5C38 31.2 32.4 39.1 24 42.5C15.6 39.1 10 31.2 10 22.5V10.5L24 5.5Z"
        className="stroke-slate-800"
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      <path
        d="M17 18.5C20.8 16.7 27.2 16.7 31 18.5"
        className="stroke-slate-400"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M17 24C20.8 22.2 27.2 22.2 31 24"
        className="stroke-slate-500"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M18 29.5C21.5 31.2 26.5 31.2 30 29.5"
        className="stroke-teal-400"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M20 25.5L23 28.5L29 21.5"
        className="stroke-slate-800"
        strokeWidth="2.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
