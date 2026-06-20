// Scripted knowledge base for NEXO on the marketing website (wouter routes).
// `navigate` targets are SPA routes; `href` is for external/raw links.
// The embedded diagnostics app (and its calculator) lives under
// `${BASE_URL}diagnostics-app/...`, so those are raw hrefs.

export interface NexoAction {
  label: string;
  navigate?: string; // wouter route, e.g. "/services"
  href?: string; // external/raw, e.g. "mailto:", "tel:", "/diagnostics-app/calculator/"
}

export interface NexoIntent {
  id: string;
  label: string; // shown as a quick-reply chip
  keywords: string[]; // lowercase tokens for free-text matching
  reply: string;
  quickReplies?: string[]; // follow-up intent ids
  actions?: NexoAction[];
}

export const GREETING_INTENT_ID = "greeting";
export const FALLBACK_INTENT_ID = "fallback";

const DIAGNOSTICS_BASE = `${import.meta.env.BASE_URL}diagnostics-app`;

export const intents: NexoIntent[] = [
  {
    id: GREETING_INTENT_ID,
    label: "Hi NEXO",
    keywords: ["hi", "hello", "hey", "start"],
    reply:
      "Hi, I'm NEXO — your NEXORA assistant. I can help you book a compliance audit, sort out SSEG registration, estimate your savings, or explore the app. What can I help with?",
    quickReplies: ["book_audit", "sseg_pricing", "try_app", "contact_human"],
  },
  {
    id: "book_audit",
    label: "Book a compliance audit",
    keywords: ["book", "audit", "appointment", "compliance", "deadline", "september", "inspection"],
    reply:
      "We'll start with a compliance audit of your system. You can see what's included and request one from our Services page or the audit form on the home page.",
    quickReplies: ["sseg_pricing", "contact_human"],
    actions: [
      { label: "View services", navigate: "/services" },
      { label: "Request an audit", navigate: "/" },
    ],
  },
  {
    id: "sseg_pricing",
    label: "SSEG registration & pricing",
    keywords: ["sseg", "register", "registration", "price", "pricing", "plan", "plans", "cost", "package", "coc", "nersa"],
    reply:
      "We handle full SSEG registration, CoC issuance and ongoing maintenance plans. The Services page lists every package and what it covers.",
    quickReplies: ["book_audit", "try_app"],
    actions: [{ label: "See services & pricing", navigate: "/services" }],
  },
  {
    id: "try_app",
    label: "See / try the app",
    keywords: ["app", "demo", "try", "preview", "diagnostics", "dashboard", "mobile", "desktop", "platform"],
    reply:
      "The NEXORA diagnostics app monitors your array in real time. You can preview it on mobile or as the full desktop dashboard.",
    quickReplies: ["calculator", "contact_human"],
    actions: [
      { label: "App preview (mobile)", navigate: "/app-preview" },
      { label: "Web platform (desktop)", navigate: "/website" },
    ],
  },
  {
    id: "calculator",
    label: "Estimate my savings",
    keywords: ["calculator", "calculate", "savings", "save", "roi", "estimate", "payback", "yield"],
    reply:
      "The savings calculator estimates how much soiling is costing you and what a clean recovers. It opens in the live app.",
    quickReplies: ["book_audit"],
    actions: [{ label: "Open calculator", href: `${DIAGNOSTICS_BASE}/calculator/` }],
  },
  {
    id: "about",
    label: "About NEXORA",
    keywords: ["about", "who", "company", "team", "story"],
    reply: "NEXORA is South Africa's first-mover solar compliance platform. Here's more about who we are.",
    actions: [{ label: "About us", navigate: "/about" }],
  },
  {
    id: "contact_human",
    label: "Talk to a human",
    keywords: ["human", "contact", "call", "phone", "email", "support", "agent", "person", "help"],
    reply:
      "Happy to hand you over. You can reach the NEXORA team directly — we usually respond within one business day.",
    actions: [
      { label: "Email us", href: "mailto:compliance@nexora.co.za" },
      { label: "Call 0800 NEXORA", href: "tel:0800639672" },
    ],
  },
  {
    id: FALLBACK_INTENT_ID,
    label: "Help",
    keywords: [],
    reply:
      "I'm not sure I caught that, but here's what I can help with. Pick one and I'll point you the right way:",
    quickReplies: ["book_audit", "sseg_pricing", "try_app", "contact_human"],
  },
];

export function getIntent(id: string): NexoIntent {
  return intents.find((i) => i.id === id) ?? intents.find((i) => i.id === FALLBACK_INTENT_ID)!;
}

export function matchIntent(text: string): NexoIntent {
  const q = text.toLowerCase();
  let best: NexoIntent | null = null;
  let bestScore = 0;
  for (const intent of intents) {
    if (intent.id === FALLBACK_INTENT_ID || intent.id === GREETING_INTENT_ID) continue;
    let score = 0;
    for (const kw of intent.keywords) {
      if (q.includes(kw)) score += kw.length;
    }
    if (score > bestScore) {
      bestScore = score;
      best = intent;
    }
  }
  return best ?? getIntent(FALLBACK_INTENT_ID);
}
