import { useState } from 'react';
import { PastePanel } from '../components/PastePanel';
import { AnalysisPanel } from '../components/AnalysisPanel';
import { getConfidence, getConfidenceTrace } from '../engine/confidence';

function splitSentences(text) {
  return text
    .split(/(?<=[.!?])(?!\d)\s+(?=[A-Z])/)
    .map(s => s.trim())
    .filter(s => s.length > 0);
}

export default function Prototype() {
  const [input, setInput] = useState('');
  const [sentences, setSentences] = useState([]);
  const [overallConfidence, setOverallConfidence] = useState(null);
  const [trace, setTrace] = useState(null);

  function handleAnalyse(text) {
    const t = text || input;
    if (!t.trim()) return;
    const chunks = splitSentences(t);
    setSentences(chunks.map(s => ({ text: s, confidence: getConfidence(s) })));
    setOverallConfidence(getConfidence(t));
    setTrace(getConfidenceTrace(t));
  }

  function handleDemoSelect(responseText) {
    setInput(responseText);
    handleAnalyse(responseText);
  }

  return (
    <div className="flex-1 min-h-0 grid lg:grid-cols-[40%_60%] bg-[#F8F7F4]">
      <section className="border-b lg:border-b-0 lg:border-r border-[#DCE4EE] overflow-y-auto">
        <PastePanel
          value={input}
          onChange={setInput}
          onAnalyse={handleAnalyse}
          onDemoSelect={handleDemoSelect}
        />
      </section>

      <section className="overflow-y-auto">
        <AnalysisPanel
          sentences={sentences}
          overallConfidence={overallConfidence}
          trace={trace}
        />
      </section>
    </div>
  );
}
