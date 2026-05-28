import { HEDGE_WORDS, DOMAIN_TRIGGERS, SPECULATIVE_PATTERNS, SOURCE_SIGNALS, ESTABLISHED_FACTS } from './keywords.js';

export function getConfidence(responseText) {
  const text = responseText.toLowerCase();

  const hasSource     = SOURCE_SIGNALS.some(s => text.includes(s));
  const hasDomain     = DOMAIN_TRIGGERS.some(d => text.includes(d));
  const hasHedge      = HEDGE_WORDS.some(w => text.includes(w));
  const isSpeculative = SPECULATIVE_PATTERNS.some(p => text.includes(p));
  const isEstablished = ESTABLISHED_FACTS.some(f => text.includes(f));

  // Rule order matters — most restrictive first
  if (isSpeculative) {
    return {
      level: "low",
      label: "Uncertain — inference heavy",
      basis: "Response contains speculative or future-facing language"
    };
  }

  if (hasDomain && !hasSource) {
    return {
      level: "medium",
      label: "Verification recommended",
      basis: "Sensitive domain detected — verify with a qualified source"
    };
  }

  if (hasHedge && !hasSource) {
    return {
      level: "medium",
      label: "Verification recommended",
      basis: "Uncertain language detected — no cited sources found"
    };
  }

  if (hasSource) {
    return {
      level: "high",
      label: "High verification confidence",
      basis: "Response references identifiable sources"
    };
  }

  if (isEstablished && !hasDomain && !isSpeculative) {
    return {
      level: "high",
      label: "High verification confidence",
      basis: "Well-established factual claim detected"
    };
  }

  // Default — no signals either way, treat as unverified
  return {
    level: "medium",
    label: "Verification recommended",
    basis: "No sources detected — treat as unverified until confirmed"
  };
}

export function getClaimType(text) {
  const t = text.toLowerCase();
  if (SOURCE_SIGNALS.some(s => t.includes(s)))      return "Sourced reference";
  if (SPECULATIVE_PATTERNS.some(p => t.includes(p))) return "Inference";
  if (DOMAIN_TRIGGERS.some(d => t.includes(d)))      return "Sensitive domain";
  if (ESTABLISHED_FACTS.some(f => t.includes(f)))     return "Established fact";
  if (
    t.includes("i think") || t.includes("i believe") ||
    t.includes("in my opinion") || t.includes("arguably")
  ) return "Opinion";
  return "Unverified claim";
}

export function getConfidenceTrace(responseText) {
  const text = responseText.toLowerCase();

  const hasSource     = SOURCE_SIGNALS.some(s => text.includes(s));
  const isSpeculative = SPECULATIVE_PATTERNS.some(p => text.includes(p));
  const hasDomain     = DOMAIN_TRIGGERS.some(d => text.includes(d));
  const hasHedge      = HEDGE_WORDS.some(w => text.includes(w));
  const isEstablished = ESTABLISHED_FACTS.some(f => text.includes(f));

  // Find the matched keyword for transparency
  const matchedSource  = SOURCE_SIGNALS.find(s => text.includes(s));
  const matchedDomain  = DOMAIN_TRIGGERS.find(d => text.includes(d));
  const matchedHedge   = HEDGE_WORDS.find(w => text.includes(w));
  const matchedSpec    = SPECULATIVE_PATTERNS.find(p => text.includes(p));
  const matchedFact    = ESTABLISHED_FACTS.find(f => text.includes(f));

  const steps = [];

  steps.push({
    question: 'Does the response cite a named source or URL?',
    answer: hasSource,
    fired: hasSource,
    outcome: hasSource ? 'HIGH' : null,
    match: matchedSource ? `matched: "${matchedSource}"` : null,
  });

  if (!hasSource) {
    steps.push({
      question: 'Is the response speculative or future-facing?',
      answer: isSpeculative,
      fired: isSpeculative,
      outcome: isSpeculative ? 'LOW' : null,
      match: matchedSpec ? `matched: "${matchedSpec}"` : null,
    });

    if (!isSpeculative) {
      steps.push({
        question: 'Is the domain medical, legal, financial, or safety-related?',
        answer: hasDomain,
        fired: hasDomain,
        outcome: hasDomain ? 'MEDIUM' : null,
        match: matchedDomain ? `matched: "${matchedDomain}"` : null,
      });

      if (!hasDomain) {
        steps.push({
          question: 'Does it contain uncertain or hedging language?',
          answer: hasHedge,
          fired: hasHedge,
          outcome: hasHedge ? 'MEDIUM' : null,
          match: matchedHedge
            ? `matched: "${matchedHedge}"`
            : null,
        });

        if (!hasHedge) {
          steps.push({
            question: 'Is it a well-established factual claim?',
            answer: isEstablished,
            fired: true,
            outcome: isEstablished ? 'HIGH' : 'MEDIUM',
            match: matchedFact
              ? `matched: "${matchedFact}"`
              : 'no signals — defaulting to unverified',
          });
        }
      }
    }
  }

  return steps;
}
