const BADGE_CONFIG = {
  high: { bg: 'bg-[#E1F5EE]', border: 'border-[#1D9E75] border-solid', text: 'text-[#085041]', icon: '✓', iconBg: 'bg-[#1D9E75]' },
  medium: { bg: 'bg-[#FAEEDA]', border: 'border-[#EF9F27] border-dotted', text: 'text-[#633806]', icon: '⚠', iconBg: 'bg-[#EF9F27]' },
  low: { bg: 'bg-[#F1EFE8]', border: 'border-[#888780] border-dashed', text: 'text-[#444441]', icon: '~', iconBg: 'bg-[#888780]' },
};

export function ConfidenceBadge({ confidence }) {
  if (!confidence) return null;
  const config = BADGE_CONFIG[confidence.level] || BADGE_CONFIG.medium;
  return (
    <div className={`mt-3 px-4 py-3 rounded-lg border-2 ${config.bg} ${config.border} ${config.text} transition-all duration-300 ease-in-out animate-fadeIn`} role="status" aria-label={`Trust level: ${confidence.label}`}>
      <div className="flex items-center gap-2 mb-1">
        <span className={`inline-flex items-center justify-center w-5 h-5 rounded-full text-white text-xs font-bold ${config.iconBg}`} aria-hidden="true">{config.icon}</span>
        <span className="font-semibold text-sm tracking-wide">{confidence.label}</span>
      </div>
      <p className="text-xs opacity-75 ml-7">{confidence.basis}</p>
    </div>
  );
}
