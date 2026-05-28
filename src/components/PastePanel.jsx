import { DEMO_RESPONSES } from '../data/responses';

const DEMOS = [
  { label: "Try: Boiling point", key: "What is the boiling point of water at sea level?" },
  { label: "Try: Ibuprofen dosage", key: "What is the recommended dosage of ibuprofen for adults?" },
  { label: "Try: Remote work 2030", key: "Will remote work still be popular in 2030?" },
];

export function PastePanel({ value, onChange, onAnalyse, onDemoSelect }) {
  return (
    <div className="flex flex-col h-full p-6 gap-4">
      <div>
        <label className="text-sm font-semibold text-slate-700">Paste any AI response</label>
        <p className="text-xs text-slate-400 mt-0.5">Paste text from ChatGPT, Gemini, or any AI — we'll score every sentence</p>
      </div>

      <div className="flex flex-col gap-2">
        {DEMOS.map((btn) => (
          <button
            key={btn.key}
            onClick={() => onDemoSelect(DEMO_RESPONSES[btn.key].text)}
            className="
              w-full py-2 px-3 rounded-lg border border-slate-200
              bg-white text-xs text-slate-600 text-left shadow-sm
              hover:border-slate-400 hover:text-slate-800 hover:shadow
              transition-all duration-150
            "
          >
            {btn.label}
          </button>
        ))}
      </div>

      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); onAnalyse(); } }}
        placeholder="Paste an AI-generated response here..."
        className="
          flex-1 min-h-[200px] w-full px-4 py-3 rounded-xl border border-slate-200
          bg-white text-sm text-slate-800 leading-relaxed shadow-sm
          placeholder:text-slate-400 resize-none
          focus:outline-none focus:ring-2 focus:ring-slate-300
        "
      />

      <button
        onClick={() => onAnalyse()}
        disabled={!value.trim()}
        className="
          w-full py-3 rounded-xl bg-slate-800 text-white text-sm font-medium
          hover:bg-slate-700 transition-colors shadow-sm
          disabled:opacity-40 disabled:cursor-not-allowed
        "
      >
        Analyse
      </button>
    </div>
  );
}
