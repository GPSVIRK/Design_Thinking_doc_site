import { NavLink } from 'react-router-dom';
import Logo from './Logo';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Journey', path: '/journey' },
  { label: 'Prototype', path: '/prototype' },
  { label: 'Docs', path: '/docs' },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#DCE4EE] bg-white/85 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-5 md:px-6 py-3.5 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
        <NavLink to="/" className="flex items-center gap-3 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
          <Logo className="h-9 w-9 shrink-0 text-slate-800" />
          <div>
            <div className="text-lg font-semibold tracking-tight text-slate-900">
              TrustLayer
            </div>
            <div className="text-xs text-[#52647E]">
              Trust-calibration interface for AI users
            </div>
          </div>
        </NavLink>

        <nav className="flex gap-1 rounded-2xl border border-[#DCE4EE] bg-[#F3F6F8] p-1 shadow-[0_1px_8px_rgba(31,41,55,0.04)] w-fit">
          {navItems.map(item => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) =>
                `px-4 py-2 rounded-xl text-sm transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 ${
                  isActive
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
