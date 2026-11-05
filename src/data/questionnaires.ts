export type FieldType = "text" | "email" | "tel" | "pills" | "select-pills";

export type Field = {
  id: string;
  type: FieldType;
  label?: string;
  placeholder?: string;
  options?: string[];
  required?: boolean;
};

export type Step = {
  id: string;
  dot: string;
  title: string | ((answers: Record<string, string>) => string);
  help?: string | ((answers: Record<string, string>) => string);
  fields: Field[];
  showWhen?: (answers: Record<string, string>) => boolean;
  continueLabel?: string;
};

export const roles = [
  "Accountant",
  "Financial adviser",
  "Lawyer",
  "Business broker",
  "Consultant",
  "Other",
];

export const states = ["NSW", "ACT", "VIC", "QLD", "SA", "WA", "TAS", "NT"];

export const sellerSteps: Step[] = [
  {
    id: "you",
    dot: "You",
    title: "First, who are we speaking with?",
    help: "Everything you share stays confidential.",
    fields: [
      { id: "name", type: "text", placeholder: "Your name", required: true },
      { id: "mobile", type: "tel", placeholder: "Mobile", required: true },
    ],
  },
  {
    id: "email",
    dot: "Email",
    title: (a) => `Thanks, ${firstName(a.name)}. What’s your email?`,
    help: "We save your details as soon as you continue.",
    fields: [{ id: "email", type: "email", placeholder: "Email", required: true }],
    continueLabel: "Save and continue",
  },
  {
    id: "whose",
    dot: "Whose business",
    title: "Is this your business, or a client’s?",
    help: "Accountants, advisers and brokers are very welcome here.",
    fields: [
      {
        id: "whose",
        type: "pills",
        options: ["My own business", "A client’s business"],
        required: true,
      },
    ],
  },
  {
    id: "practice",
    dot: "Your practice",
    title: "Tell us about your practice",
    showWhen: (a) => a.whose === "A client’s business",
    fields: [
      { id: "firm", type: "text", placeholder: "Firm name", required: true },
      { id: "role", type: "pills", options: roles, required: true },
    ],
  },
  {
    id: "valued",
    dot: "Valued before",
    title: (a) =>
      a.whose === "A client’s business"
        ? "Has BVO or BVOPro valued your client’s business before?"
        : "Has BVO or BVOPro valued your business before?",
    fields: [
      {
        id: "valued",
        type: "pills",
        options: [
          "Yes, in the last 12 months",
          "Yes, over a year ago",
          "No",
          "Not sure",
        ],
        required: true,
      },
    ],
  },
  {
    id: "valuation",
    dot: "Valuation",
    title: "Which business did we value?",
    help: "We’ll look it up, so you can skip the numbers.",
    showWhen: (a) => a.valued === "Yes, in the last 12 months",
    fields: [
      { id: "valuedBusiness", type: "text", placeholder: "Business name", required: true },
    ],
  },
  {
    id: "business",
    dot: "Business",
    title: (a) =>
      a.whose === "A client’s business"
        ? "Tell us about your client’s business"
        : "Tell us about the business",
    fields: [
      { id: "industry", type: "text", placeholder: "Industry", required: true },
      { id: "state", type: "pills", options: states, required: true },
    ],
  },
  {
    id: "timing",
    dot: "Timing",
    title: (a) =>
      a.whose === "A client’s business"
        ? "When is your client thinking of selling?"
        : "When are you thinking of selling?",
    fields: [
      {
        id: "timing",
        type: "pills",
        options: [
          "As soon as possible",
          "In the next 6 months",
          "6–12 months",
          "Just exploring",
        ],
        required: true,
      },
    ],
  },
  {
    id: "ebitda",
    dot: "EBITDA",
    title: "Roughly what is your annual EBITDA?",
    help: "Profit before interest, tax and depreciation, with owner wages and personal costs added back. A best guess is fine.",
    showWhen: (a) => a.valued !== "Yes, in the last 12 months",
    fields: [
      {
        id: "ebitda",
        type: "pills",
        options: [
          "Under $250k",
          "$250k–$600k",
          "$600k–$1m",
          "$1m–$2m",
          "Over $2m",
        ],
        required: true,
      },
    ],
  },
  {
    id: "involvement",
    dot: "Involvement",
    title: "How involved would you like to be?",
    help: "You can change this at any time.",
    showWhen: (a) => a.whose === "A client’s business",
    fields: [
      {
        id: "involvement",
        type: "pills",
        options: [
          "Make the introduction",
          "Keep me informed",
          "Work alongside you",
        ],
        required: true,
      },
    ],
  },
];

export const buyerSteps: Step[] = [
  {
    id: "you",
    dot: "You",
    title: "First, who are we speaking with?",
    fields: [
      { id: "name", type: "text", placeholder: "Your name", required: true },
      { id: "mobile", type: "tel", placeholder: "Mobile", required: true },
    ],
  },
  {
    id: "email",
    dot: "Email",
    title: (a) => `Thanks, ${firstName(a.name)}. What’s your email?`,
    fields: [{ id: "email", type: "email", placeholder: "Email", required: true }],
    continueLabel: "Save and continue",
  },
  {
    id: "buyingFor",
    dot: "Buying for",
    title: "Who are you buying for?",
    help: "Accountants, advisers and brokers are very welcome here.",
    fields: [
      {
        id: "buyingFor",
        type: "pills",
        options: [
          "Myself",
          "Me and a partner",
          "My business or group",
          "Investor or family office",
          "A client (I’m their adviser)",
        ],
        required: true,
      },
    ],
  },
  {
    id: "practice",
    dot: "Your practice",
    title: "Tell us about your practice",
    showWhen: (a) => a.buyingFor === "A client (I’m their adviser)",
    fields: [
      { id: "firm", type: "text", placeholder: "Firm name", required: true },
      { id: "role", type: "pills", options: roles, required: true },
    ],
  },
  {
    id: "target",
    dot: "Target",
    title: (a) =>
      a.buyingFor === "A client (I’m their adviser)"
        ? "What kind of business is your client after?"
        : "What kind of business are you after?",
    fields: [
      {
        id: "industry",
        type: "text",
        placeholder: "Industry or type of business",
        required: true,
      },
      {
        id: "where",
        type: "pills",
        options: ["Anywhere", ...states],
        required: true,
      },
    ],
  },
  {
    id: "budget",
    dot: "Budget",
    title: "Roughly what is your budget?",
    help: "Including any finance lined up.",
    fields: [
      {
        id: "budget",
        type: "pills",
        options: [
          "Under $1m",
          "$1m–$3m",
          "$3m–$5m",
          "$5m–$10m",
          "Over $10m",
        ],
        required: true,
      },
    ],
  },
  {
    id: "funding",
    dot: "Funding",
    title: "How will you fund the purchase?",
    fields: [
      {
        id: "funding",
        type: "pills",
        options: [
          "Cash or equity ready",
          "Finance approved",
          "Finance in progress",
          "Still working it out",
        ],
        required: true,
      },
    ],
  },
  {
    id: "running",
    dot: "Running it",
    title: (a) =>
      a.buyingFor === "A client (I’m their adviser)"
        ? "How would they like to run the business?"
        : "How would you like to run the business?",
    fields: [
      {
        id: "running",
        type: "pills",
        options: [
          "Run it myself",
          "Need management in place",
          "Open to either",
        ],
        required: true,
      },
    ],
  },
  {
    id: "experience",
    dot: "Experience",
    title: "Have you bought a business before?",
    fields: [
      { id: "experience", type: "pills", options: ["Yes", "No"], required: true },
    ],
  },
  {
    id: "timing",
    dot: "Timing",
    title: "When would you like to buy?",
    fields: [
      {
        id: "timing",
        type: "pills",
        options: [
          "As soon as possible",
          "In the next 6 months",
          "6–12 months",
          "Just looking",
        ],
        required: true,
      },
    ],
  },
  {
    id: "listing",
    dot: "Listing",
    title: "Have you seen a listing you’re interested in?",
    fields: [
      {
        id: "listing",
        type: "pills",
        options: ["Yes", "Not yet"],
        required: true,
      },
    ],
  },
  {
    id: "which",
    dot: "Which one",
    title: "Which listing caught your eye?",
    help: "The listing title or a few words is plenty.",
    showWhen: (a) => a.listing === "Yes",
    fields: [
      { id: "listingName", type: "text", placeholder: "Listing name", required: true },
    ],
  },
  {
    id: "involvement",
    dot: "Involvement",
    title: "How involved would you like to be?",
    showWhen: (a) => a.buyingFor === "A client (I’m their adviser)",
    fields: [
      {
        id: "involvement",
        type: "pills",
        options: [
          "Make the introduction",
          "Keep me informed",
          "Work alongside you",
        ],
        required: true,
      },
    ],
  },
];

export const adviserSteps: Step[] = [
  {
    id: "you",
    dot: "You",
    title: "First, who are we speaking with?",
    fields: [
      { id: "name", type: "text", placeholder: "Your name", required: true },
      { id: "mobile", type: "tel", placeholder: "Mobile", required: true },
    ],
  },
  {
    id: "email",
    dot: "Email",
    title: (a) => `Thanks, ${firstName(a.name)}. What’s your email?`,
    fields: [{ id: "email", type: "email", placeholder: "Email", required: true }],
    continueLabel: "Save and continue",
  },
  {
    id: "practice",
    dot: "Your practice",
    title: "Tell us about your practice",
    fields: [
      { id: "firm", type: "text", placeholder: "Firm name", required: true },
      { id: "role", type: "pills", options: roles, required: true },
    ],
  },
  {
    id: "purpose",
    dot: "Purpose",
    title: "What would you like help with?",
    help: "Whether it’s for a client or for you.",
    fields: [
      {
        id: "purpose",
        type: "pills",
        options: [
          "Selling a client’s business",
          "Helping a client buy",
          "Selling my own business",
          "Buying a business myself",
        ],
        required: true,
      },
    ],
  },
  {
    id: "valued",
    dot: "Valued before",
    title: (a) =>
      a.purpose?.includes("client")
        ? "Has BVO or BVOPro valued your client’s business before?"
        : "Has BVO or BVOPro valued your business before?",
    showWhen: (a) => a.purpose?.startsWith("Selling") ?? false,
    fields: [
      {
        id: "valued",
        type: "pills",
        options: [
          "Yes, in the last 12 months",
          "Yes, over a year ago",
          "No",
          "Not sure",
        ],
        required: true,
      },
    ],
  },
  {
    id: "valuation",
    dot: "Valuation",
    title: "Which business did we value?",
    showWhen: (a) =>
      (a.purpose?.startsWith("Selling") ?? false) &&
      a.valued === "Yes, in the last 12 months",
    fields: [
      { id: "valuedBusiness", type: "text", placeholder: "Business name", required: true },
    ],
  },
  {
    id: "business",
    dot: "Business",
    title: "Tell us about the business",
    showWhen: (a) => a.purpose?.startsWith("Selling") ?? false,
    fields: [
      { id: "industry", type: "text", placeholder: "Industry", required: true },
      { id: "state", type: "pills", options: states, required: true },
    ],
  },
  {
    id: "timing-sell",
    dot: "Timing",
    title: "When are you thinking of selling?",
    showWhen: (a) => a.purpose?.startsWith("Selling") ?? false,
    fields: [
      {
        id: "timing",
        type: "pills",
        options: [
          "As soon as possible",
          "In the next 6 months",
          "6–12 months",
          "Just exploring",
        ],
        required: true,
      },
    ],
  },
  {
    id: "ebitda",
    dot: "EBITDA",
    title: "Roughly what is the annual EBITDA?",
    showWhen: (a) =>
      (a.purpose?.startsWith("Selling") ?? false) &&
      a.valued !== "Yes, in the last 12 months",
    fields: [
      {
        id: "ebitda",
        type: "pills",
        options: [
          "Under $250k",
          "$250k–$600k",
          "$600k–$1m",
          "$1m–$2m",
          "Over $2m",
        ],
        required: true,
      },
    ],
  },
  {
    id: "target",
    dot: "Target",
    title: "What kind of business are you after?",
    showWhen: (a) => a.purpose?.includes("buy") || a.purpose?.includes("Buying") || false,
    fields: [
      {
        id: "industry",
        type: "text",
        placeholder: "Industry or type of business",
        required: true,
      },
      {
        id: "where",
        type: "pills",
        options: ["Anywhere", ...states],
        required: true,
      },
    ],
  },
  {
    id: "budget",
    dot: "Budget",
    title: "Roughly what is the budget?",
    showWhen: (a) => a.purpose?.includes("buy") || a.purpose?.includes("Buying") || false,
    fields: [
      {
        id: "budget",
        type: "pills",
        options: [
          "Under $1m",
          "$1m–$3m",
          "$3m–$5m",
          "$5m–$10m",
          "Over $10m",
        ],
        required: true,
      },
    ],
  },
  {
    id: "timing-buy",
    dot: "Timing",
    title: "When would you like to buy?",
    showWhen: (a) => a.purpose?.includes("buy") || a.purpose?.includes("Buying") || false,
    fields: [
      {
        id: "timing",
        type: "pills",
        options: [
          "As soon as possible",
          "In the next 6 months",
          "6–12 months",
          "Just looking",
        ],
        required: true,
      },
    ],
  },
  {
    id: "involvement",
    dot: "Involvement",
    title: "How involved would you like to be?",
    showWhen: (a) => a.purpose?.includes("client") ?? false,
    fields: [
      {
        id: "involvement",
        type: "pills",
        options: [
          "Make the introduction",
          "Keep me informed",
          "Work alongside you",
        ],
        required: true,
      },
    ],
  },
];

export function firstName(name = "") {
  return name.trim().split(/\s+/)[0] || "there";
}

export function resolveText(
  value: string | ((answers: Record<string, string>) => string) | undefined,
  answers: Record<string, string>,
) {
  if (!value) return "";
  return typeof value === "function" ? value(answers) : value;
}
