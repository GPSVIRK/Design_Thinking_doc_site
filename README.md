# TrustLayer

> Paste any AI response. Get sentence-level trust signals so you know what to act on and what to verify.

---

## What is TrustLayer?

TrustLayer is a paste-and-analyse tool that scores AI-generated text for trustworthiness — sentence by sentence. Instead of treating every AI response as equally reliable, TrustLayer surfaces a confidence signal on each claim so you know exactly how much weight to give it.

Paste any text from ChatGPT, Gemini, Claude, or any AI. Every sentence gets scored instantly — no API, no backend, no data sent anywhere.

---

## How it works

**Left panel — paste**
Paste any AI-generated response into the text area, or click one of the three demo presets to see the engine in action.

**Right panel — analysis**
- Overall confidence badge for the full response
- Score distribution bar (how many sentences scored high / medium / low)
- Every sentence highlighted by confidence level with an inline claim type label
- Hover any sentence to see the exact basis for its score
- Live decision tree walkthrough showing which rules fired and why

---

## Confidence levels

| Level | Visual | Meaning |
|---|---|---|
| ✓ High | Teal, solid border | Well-established fact or cited source — safe to act on |
| ⚠ Medium | Amber, dotted border | Sensitive domain or uncertain language — verify before acting |
| ~ Low | Grey, dashed border | Speculative or future-facing — do not act without verification |

**The default is Medium, not High.** Anything the engine cannot positively identify as factual or sourced is treated as unverified. Better to undershoot than overshoot.

---

## Claim type labels

Every sentence also receives an inline claim type tag:

| Label | Meaning |
|---|---|
| Sourced reference | Response cites a named source, study, or URL |
| Sensitive domain | Medical, legal, financial, or safety-related claim |
| Inference | Speculative or future-facing language |
| Opinion | First-person belief or subjective assertion |
| Unverified claim | No signals detected — treated as unconfirmed |
| Factual claim | Well-established fact (physics, geography, history) |

---

## The scoring engine

TrustLayer uses a rule-based heuristic engine — no ML, no external API. It evaluates response text against four signal categories in order:

```
Step 1 — Does the response cite a named source or URL?
YES → HIGH

Step 2 — Is the response speculative or future-facing?
YES → LOW

Step 3 — Is the domain medical, legal, financial, or safety-related?
YES → MEDIUM

Step 4 — Does it contain uncertain or hedging language?
YES → MEDIUM
NO → MEDIUM (default — unverified until confirmed)
```


Well-established facts (boiling points, capital cities, historical dates, mathematical constants) are detected separately and scored HIGH regardless of the above rules.

The decision tree is shown live in the right panel after every analysis — every step, every match, fully visible. No black box.

---

## What the engine catches

**Pushed toward LOW (speculative)**
Phrases like `in 2030`, `will likely`, `i think`, `predicted`, `it's possible that`, `by next year`

**Pushed toward MEDIUM (sensitive domain)**
Medical: `diagnosis`, `dosage`, `diabetes`, `cancer`, `sugar`, `causes`, `leads to`, `harmful`, `safe to`, `boosts`, `immune`
Legal: `lawsuit`, `liability`, `illegal`, `regulation`, `contract`
Financial: `invest`, `crypto`, `returns`, `market`, `inflation`, `debt`
Safety: `dangerous`, `toxic`, `risk`, `avoid`, `do not`, `never`, `warning`
Nutrition: `diet`, `calories`, `supplement`, `good for`, `bad for`, `weight loss`

**Pushed toward MEDIUM (hedging)**
Phrases like `may`, `might`, `some suggest`, `generally`, `it is believed`, `limited evidence`, `conflicting evidence`, `debated`

**Pushed toward HIGH (sourced)**
Phrases like `according to`, `studies show`, `published in`, `peer reviewed`, `meta-analysis`, `WHO says`, `CDC says`

**Pushed toward HIGH (established facts)**
Phrases like `boiling point`, `capital of`, `speed of light`, `was born`, `founded in`, `equals`, `theorem`

---

## Demo queries

Three presets showcase all three confidence levels:

| Demo | Expected level | Why |
|---|---|---|
| Boiling point of water | High | Well-established physical constant |
| Ibuprofen dosage for adults | Medium | Medical domain, no cited source |
| Remote work in 2030 | Low | Future-facing, speculative language |

---

## Tech stack

- [React](https://react.dev/) — UI framework
- [Tailwind CSS](https://tailwindcss.com/) — styling
- [shadcn/ui](https://ui.shadcn.com/) — component primitives (Button)
- [Vite](https://vitejs.dev/) — build tool

No backend. No database. No auth. No API calls. Runs entirely client-side.

---

## Getting started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
git clone https://github.com/CMB-i/TrustLayer.git
cd TrustLayer
git checkout claude/build-react-native-app-O1NLS
npm install
```

run locally

```
npm run dev
```

Open http://localhost:5173 in your browser.

Build for production
```
npm run build
```
---
## Project structure
```
trustlayer/
├── src/
│   ├── components/
│   │   ├── PastePanel.jsx        # Left panel — input, demo buttons
│   │   ├── AnalysisPanel.jsx     # Right panel — results, decision tree
│   │   └── ConfidenceBadge.jsx   # Trust signal badge component
│   │   └── ui/
│   │       └── button.jsx        # shadcn Button
│   ├── engine/
│   │   ├── keywords.js           # All keyword and pattern lists
│   │   └── confidence.js         # Scoring logic, claim types, trace
│   ├── data/
│   │   └── responses.js          # Hardcoded demo responses
│   ├── lib/
│   │   └── utils.js              # shadcn utility
│   ├── App.jsx                   # Root component + state
│   └── index.css                 # Global styles + animations
```
---
## Design decisions

- Why keyword matching and not ML?

Transparency. A neural model can't explain why it scored something the way it did. A keyword engine can — and does, right there in the UI. For a tool about trust, the scoring method itself needs to be trustworthy.

- Why default to Medium instead of High?

Because in health, safety, and factual accuracy, a false positive (flagging something safe as uncertain) is far less harmful than a false negative (approving something unreliable as fact). We err on the side of caution.

- Why sentence-level scoring?

A single AI response can contain both a sourced fact and a speculative claim in the same paragraph. Paragraph-level scoring masks that. Sentence-level scoring shows exactly where the uncertainty lives.

---
## Next?
- Export analysis as a shareable report
- Browser extension — score AI responses inline on ChatGPT, Gemini, Claude
- Per-sentence source suggestion — link to a verifiable source for flagged claims
- Confidence history — track how a topic's reliability changes across multiple AI responses
- Domain-specific keyword packs (medical, legal, financial)