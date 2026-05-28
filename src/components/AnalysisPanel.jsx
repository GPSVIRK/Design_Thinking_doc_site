import { useState, useEffect } from 'react';
import { ConfidenceBadge } from './ConfidenceBadge';
import { getClaimType } from '../engine/confidence';

const HIGHLIGHT = {
  high:   { bg: 'bg-[#C8EDE0]', pill: 'bg-[#A8DDD0] text-[#085041]' },
  medium: { bg: 'bg-[#FAE9C2]', pill: 'bg-[#F5D78E] text-[#633806]' },
  low:    { bg: 'bg-[#E5E3DC]', pill: 'bg-[#D0CEC6] text-[#444441]' },
};

const OUTCOME_STYLES = {
  HIGH:   'bg-[#E1F5EE] text-[#085041] border-[#1D9E75]',
  MEDIUM: 'bg-[#FAEEDA] text-[#633806] border-[#EF9F27]',
  LOW:    'bg-[#F1EFE8] text-[#444441] border-[#888780]',
};

function DecisionTree({ trace }) {
  const [visibleSteps, setVisibleSteps] = useState(0);

  useEffect(() => {
    if (!trace || trace.length === 0) { setVisibleSteps(0); return; }
    setVisibleSteps(0);
    trace.forEach((_, i) => {
      setTimeout(() => setVisibleSteps(i + 1), i * 650 + 200);
    });
  }, [trace]);

  if (!trace || trace.length === 0) return null;

  return (
    <div className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
      <div className="px-4 py-3 border-b border-slate-100 bg-slate-50">
        <p className="text-xs font-semibold text-slate-600">Live scoring walkthrough</p>
        <p className="text-[10px] text-slate-400 mt-0.5">Decision tree evaluated in real time</p>
      </div>

      <div className="px-4 py-3 flex flex-col">
        {trace.map((step, i) => {
          const isVisible = i < visibleSteps;
          const isChecking = i === visibleSteps;

          return (
            <div key={i} className={`transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              <div className="flex items-start gap-3 py-2.5">
                {/* Step number bubble */}
                <div className={`
                  flex-shrink-0 w-6 h-6 rounded-full text-[10px] font-bold
                  flex items-center justify-center mt-0.5 border transition-all duration-300
                  ${step.fired
                    ? 'bg-slate-800 text-white border-slate-800'
                    : isVisible
                      ? 'bg-white text-slate-400 border-slate-200'
                      : 'bg-slate-100 text-slate-300 border-slate-100'
                  }
                `}>
                  {i + 1}
                </div>

                <div className="flex-1">
                  <p className={`text-xs transition-colors duration-300 ${step.fired ? 'text-slate-800 font-medium' : 'text-slate-500'}`}>
                    {step.question}
                  </p>

                  {isVisible && (
                    <div className="flex flex-col gap-1 mt-1.5 animate-fadeIn">
                      <div className="flex items-center gap-2">
                        <span className={`
                          text-[10px] font-bold px-2 py-0.5 rounded-full
                          ${step.answer ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-400'}
                        `}>
                          {step.answer ? '✓ YES' : '✗ NO'}
                        </span>
                        {step.fired && step.outcome && (
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${OUTCOME_STYLES[step.outcome]}`}>
                            → {step.outcome}
                          </span>
                        )}
                        {!step.fired && (
                          <span className="text-[10px] text-slate-300">next step →</span>
                        )}
                      </div>
                      {step.match && (
                        <span className="text-[10px] text-slate-400 font-mono ml-0.5">{step.match}</span>
                      )}
                    </div>
                  )}

                  {isChecking && (
                    <div className="flex gap-1 mt-1.5">
                      <span className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  )}
                </div>
              </div>

              {i < trace.length - 1 && (
                <div className={`ml-3 w-px h-3 transition-all duration-300 ${isVisible ? 'bg-slate-200' : 'bg-slate-100'}`} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function ScoreBar({ sentences }) {
  const total = sentences.length;
  if (!total) return null;
  const counts = { high: 0, medium: 0, low: 0 };
  sentences.forEach(s => counts[s.confidence.level]++);
  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex gap-3 text-xs text-slate-500">
        <span><span className="font-semibold text-[#085041]">{counts.high}</span> high</span>
        <span><span className="font-semibold text-[#633806]">{counts.medium}</span> medium</span>
        <span><span className="font-semibold text-[#444441]">{counts.low}</span> low</span>
        <span className="ml-auto text-slate-400">{total} sentences</span>
      </div>
      <div className="flex h-1.5 rounded-full overflow-hidden w-full gap-px">
        {counts.high > 0 && <div className="bg-[#1D9E75]" style={{ width: `${(counts.high / total) * 100}%` }} />}
        {counts.medium > 0 && <div className="bg-[#EF9F27]" style={{ width: `${(counts.medium / total) * 100}%` }} />}
        {counts.low > 0 && <div className="bg-[#888780]" style={{ width: `${(counts.low / total) * 100}%` }} />}
      </div>
    </div>
  );
}

export function AnalysisPanel({ sentences, overallConfidence, trace, isLoading, error }) {
  const [visibleCount, setVisibleCount] = useState(0);
  const isEmpty = !isLoading && !error && sentences.length === 0;

  useEffect(() => {
    if (sentences.length === 0) { setVisibleCount(0); return; }
    setVisibleCount(0);
    sentences.forEach((_, i) => {
      setTimeout(() => setVisibleCount(i + 1), i * 50 + 100);
    });
  }, [sentences]);

  return (
    <div className="flex flex-col h-full p-6 gap-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-slate-700">Analysis</p>
          <p className="text-xs text-slate-400 mt-0.5">Sentence-level trust scoring</p>
        </div>
        <div className="flex gap-2">
          {[{ color: 'bg-[#C8EDE0]', label: 'High' }, { color: 'bg-[#FAE9C2]', label: 'Med' }, { color: 'bg-[#E5E3DC]', label: 'Low' }].map(item => (
            <div key={item.label} className="flex items-center gap-1">
              <span className={`w-2.5 h-2.5 rounded-sm ${item.color}`} />
              <span className="text-[10px] text-slate-400">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {isLoading && (
        <div className="flex-1 flex flex-col items-center justify-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2 h-2 bg-slate-300 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
            <span className="w-2 h-2 bg-slate-300 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
            <span className="w-2 h-2 bg-slate-300 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
          </div>
          <p className="text-xs text-slate-400">Getting response and scoring...</p>
        </div>
      )}

      {error && (
        <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
          {error}
        </div>
      )}

      {isEmpty && (
        <div className="flex-1 flex flex-col items-center justify-center gap-2 text-center">
          <span className="text-3xl">🛡️</span>
          <p className="text-sm text-slate-400 max-w-xs">Click a demo or type a question — every sentence gets scored in real time</p>
        </div>
      )}

      {!isLoading && sentences.length > 0 && (
        <>
          <ConfidenceBadge confidence={overallConfidence} />
          <ScoreBar sentences={sentences} />

          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-4 text-sm text-slate-800 leading-loose">
            {sentences.slice(0, visibleCount).map((s, i) => {
              const style = HIGHLIGHT[s.confidence.level] || HIGHLIGHT.medium;
              return (
                <span
                  key={i}
                  className={`relative group inline cursor-default rounded px-0.5 mr-1 ${style.bg} animate-fadeIn`}
                >
                  {s.text}{' '}
                  <span className={`inline-flex items-center mx-1 px-1.5 py-0.5 rounded-full text-[10px] font-medium ${style.pill}`}>
                    {getClaimType(s.text)}
                  </span>
                  <span className="pointer-events-none absolute bottom-full left-0 mb-1 z-10 w-64 px-3 py-2 rounded-lg shadow-lg bg-slate-800 text-white text-xs leading-snug opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                    <span className="font-semibold block mb-0.5">{s.confidence.label}</span>
                    {s.confidence.basis}
                  </span>
                </span>
              );
            })}
          </div>

          <DecisionTree trace={trace} />
        </>
      )}
    </div>
  );
}
