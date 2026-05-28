import { Link } from 'react-router-dom';

export default function CTAButton({ to, children, variant = 'primary' }) {
  const classes = variant === 'secondary'
    ? 'border border-[#DCE4EE] bg-white text-slate-700 hover:border-slate-300 hover:text-slate-900 hover:shadow-md'
    : 'bg-slate-900 text-white hover:bg-slate-800 hover:shadow-md';

  return (
    <Link
      to={to}
      className={`inline-flex items-center justify-center px-5 py-2.5 rounded-xl text-sm font-medium transition shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 ${classes}`}
    >
      {children}
    </Link>
  );
}
