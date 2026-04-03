export const appConfig = {
  "slug": "grantjudge",
  "name": "GrantJudge",
  "oneLiner": "Score grant applications before humans waste review cycles.",
  "pitch": "Paste the startup application and the fund thesis. The contract returns a ranked decision with the exact reasons the deal should move or pause.",
  "mode": "nonComparative",
  "primaryLabel": "Application or startup memo",
  "secondaryLabel": "Grant thesis and eligibility rules",
  "primaryPlaceholder": "Startup: TideGrid\nProblem: blackouts for small factories\nSolution: predictive load balancing with local agents\nAsk: $75k grant...",
  "secondaryPlaceholder": "Fund only backs climate, infra, or public service products with measurable outcomes inside 12 months.",
  "task": "Evaluate the application against the grant thesis and decide if it should advance, be reviewed manually, or be rejected.",
  "principle": "The verdict must match exactly. Scores can differ by at most 10 points. Reasons must cover the same thesis fit, execution risk, and impact logic.",
  "judgingPoints": [
    "Real use case with fast business value.",
    "Non-comparative equivalence keeps approval logic stable and easy to trust.",
    "Simple UX: two text blocks and a decision."
  ],
  "theme": {
    "accent": "#5b21b6",
    "accentSoft": "#efe4ff",
    "surface": "#faf5ff",
    "ink": "#1f1537"
  },
  "criteria": "Output must be valid JSON with keys headline, verdict, score, reasons, next_action, proof_of_advantage. verdict must be APPROVE, REVIEW, or REJECT. score must be an integer 0-100. reasons must contain exactly 3 short strings tied to thesis fit, execution risk, or impact.",
  "modeLabel": "Non-comparative equivalence"
} as const;
