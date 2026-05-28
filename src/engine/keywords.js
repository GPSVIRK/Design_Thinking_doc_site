// ─── FROZEN — do not change without full team agreement ───

export const HEDGE_WORDS = [
  // Uncertainty
  "may", "might", "could", "possibly", "perhaps", "apparently",
  "seemingly", "ostensibly", "presumably", "supposedly",
  // Soft claims
  "some suggest", "some say", "some believe", "some argue",
  "generally", "typically", "usually", "often", "sometimes",
  "it is believed", "it is thought", "it is said", "it has been suggested",
  "in some cases", "in many cases", "in certain cases",
  "arguably", "debatable", "unclear", "uncertain",
  "not fully understood", "not conclusive", "not proven",
  "limited evidence", "mixed evidence", "conflicting evidence",
  "experts disagree", "research is mixed", "studies vary",
  "anecdotal", "unconfirmed", "unverified", "disputed",
  "controversial", "debated", "contested",
];

export const DOMAIN_TRIGGERS = [
  // ── Medical / Health ──
  "health", "healthy", "unhealthy", "medical", "medicine",
  "diagnosis", "diagnosed", "symptom", "symptoms", "condition",
  "disease", "disorder", "syndrome", "illness", "infection",
  "treatment", "therapy", "cure", "remedy", "recovery",
  "medication", "medicine", "drug", "drugs", "prescription",
  "dosage", "dose", "overdose", "side effect", "side effects",
  "ibuprofen", "paracetamol", "aspirin", "antibiotic", "vaccine",
  "surgery", "procedure", "clinical", "hospital", "doctor",
  "cancer", "diabetes", "obesity", "hypertension", "depression",
  "anxiety", "heart disease", "stroke", "alzheimer", "dementia",
  "hiv", "aids", "covid", "virus", "bacteria", "pathogen",
  "blood pressure", "blood sugar", "cholesterol", "inflammation",
  "immune", "immunity", "allergy", "allergic",
  // Food & nutrition
  "sugar", "salt", "fat", "carb", "carbs", "protein", "calorie",
  "calories", "vitamin", "mineral", "supplement", "nutrient",
  "diet", "fasting", "detox", "gluten", "dairy", "lactose",
  "caffeine", "alcohol", "smoking", "nicotine", "tobacco",
  "chocolate", "processed food", "junk food", "organic",
  "causes", "leads to", "linked to", "associated with",
  "increases risk", "decreases risk", "prevents", "protects",
  "good for", "bad for", "harmful", "dangerous", "safe to",
  "toxic", "carcinogenic", "beneficial", "boosts", "improves",
  "weight loss", "weight gain", "obesity", "bmi",
  "exercise", "workout", "fitness", "sedentary",
  // Mental health
  "mental health", "stress", "burnout", "trauma", "ptsd",
  "addiction", "dependency", "withdrawal", "therapy",
  // ── Legal ──
  "legal", "illegal", "law", "laws", "regulation", "regulations",
  "lawsuit", "litigation", "attorney", "lawyer", "court",
  "contract", "liability", "rights", "crime", "criminal",
  "sue", "sued", "comply", "compliance", "policy", "policies",
  "ban", "banned", "permit", "license", "enforcement",
  // ── Financial ──
  "financial", "finance", "money", "invest", "investment",
  "stock", "stocks", "shares", "market", "crypto",
  "bitcoin", "ethereum", "returns", "profit", "loss",
  "portfolio", "trading", "fund", "funds", "savings",
  "tax", "taxes", "debt", "loan", "mortgage", "insurance",
  "recession", "inflation", "interest rate", "pension",
  "retirement", "bankruptcy", "fraud",
  // ── Safety ──
  "safe", "unsafe", "danger", "dangerous", "hazard", "hazardous",
  "risk", "risks", "risky", "warning", "caution", "avoid",
  "do not", "never", "always", "must", "should not",
];

export const SPECULATIVE_PATTERNS = [
  // Future claims
  "in 2030", "in 2040", "in 2050", "in the future", "in the coming years",
  "by next year", "in the next decade", "soon", "eventually",
  "will become", "will be", "will likely", "will probably",
  "is going to", "are going to",
  // Predictions
  "projected to", "expected to", "forecast", "forecasted",
  "predicted", "prediction", "anticipated", "estimate",
  // Opinion / belief
  "i think", "i believe", "i feel", "i suspect", "i reckon",
  "in my opinion", "in my view", "personally",
  "could potentially", "might become", "may eventually",
  "it's possible that", "it is possible that",
  "there's a chance", "there is a chance",
  "some predict", "experts predict", "scientists believe",
];

export const SOURCE_SIGNALS = [
  "according to", "as stated by", "as reported by",
  "studies show", "study shows", "research shows",
  "research indicates", "research suggests", "research finds",
  "scientists found", "scientists say", "scientists report",
  "published in", "published by", "source:", "sources:",
  "cited by", "per the", "based on research",
  "based on studies", "based on data", "data shows",
  "data indicates", "evidence shows", "evidence suggests",
  "clinical trials", "randomised trial", "peer reviewed",
  "meta-analysis", "systematic review",
  "https://", "http://", "www.",
  "new england journal", "lancet", "nature", "science",
  "who says", "cdc says", "nhs says", "fda says",
];

export const ESTABLISHED_FACTS = [
  // Physics / chemistry
  "boiling point", "melting point", "freezing point", "speed of light",
  "gravity", "gravitational", "atomic", "molecule", "element",
  "periodic table", "celsius", "fahrenheit", "kelvin",
  // Mathematics
  "equals", "formula", "theorem", "equation", "calculation",
  "percentage", "per cent", "ratio", "average", "median",
  // Geography
  "capital of", "population of", "located in", "borders",
  "continent", "ocean", "sea level", "latitude", "longitude",
  // History (dates/events)
  "was born", "died in", "founded in", "established in",
  "discovered in", "invented by", "first recorded",
];
