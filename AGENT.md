# IPMI Platform — Agent Instructions

**Project:** International Private Medical Insurance (IPMI) for Ernest Maude
**Type:** Conversion-Focused Insurance Recommendation & Routing Platform
**Stack:** Next.js · React · shadcn/ui · TypeScript · Tailwind CSS

---

## 1. Project Overview

Build a premium, conversion-focused IPMI web application that serves as the unified insurance recommendation and routing experience for both **Ernest Maude** and **Ernest Maude International**. The platform guides visitors to the most suitable IPMI solution through two complementary journeys: a self-directed path for informed users and a guided recommendation flow for first-time visitors.

---

## 2. Available IPMI Products

| #   | Product                        | Primary Audience                                            | Purchase Path           |
| --- | ------------------------------ | ----------------------------------------------------------- | ----------------------- |
| 1   | **Medical Membership Program** | Individuals, families needing structured medical membership | Direct digital purchase |
| 2   | **Expatriate Healthcare**      | Expats, long-term international travelers                   | Direct digital purchase |
| 3   | **Health Compass**             | Complex needs, HR/corporate, broker-assisted                | Quote request flow      |

---

## 3. Target Users

- **Expatriates** — Individuals/families relocating abroad or travelling long-term internationally
- **HR & Benefits Managers** — Corporate decision-makers managing expatriate employee benefits
- **Insurance Brokers & Partners** — Third-party agents referring clients to Ernest Maude

---

## 4. Core User Scenarios

1. **Guided First-Timer** — Completes questionnaire → receives personalised recommendation → purchases or requests quote
2. **Direct Purchase User** — Selects a known product → completes purchase with minimal steps
3. **Research & Comparison User** — Explores and compares all options before deciding
4. **Assisted Support User** — Needs clarification → uses tooltips or WhatsApp escalation

---

## 5. Application Architecture

```
src/
├── app/
│   ├── page.tsx                    # Landing / entry point
│   ├── compare/page.tsx            # Comparison interface
│   ├── recommend/page.tsx          # Guided recommendation flow
│   └── products/
│       ├── medical-membership/page.tsx
│       ├── expatriate-healthcare/page.tsx
│       └── health-compass/page.tsx
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── ProgressBar.tsx
│   ├── home/
│   │   ├── HeroSection.tsx
│   │   ├── JourneySelector.tsx     # "Find my plan" vs "Browse all"
│   │   └── ProductCards.tsx
│   ├── recommendation/
│   │   ├── QuestionnaireFlow.tsx        # Multi-step wizard container & loop logic
│   │   ├── StepExpatriate.tsx           # "Are you an expatriate?"
│   │   ├── StepNewToIPMI.tsx            # "Are you new to IPMI?"
│   │   ├── StepFullComparison.tsx       # "Do you want full comparisons (with AI Assistant)?"
│   │   ├── StepPreSelectedOptions.tsx   # "Will you consider 2 pre-selected options?"
│   │   ├── StepPECAwareness.tsx         # "Are you aware pre-existing conditions are excluded?" (hard gate)
│   │   ├── StepMajorMedicalOnly.tsx     # "Are you happy with Major Medical Hospitalisation only?"
│   │   ├── StepGroupMembership.tsx      # "Are you familiar with group memberships?"
│   │   ├── StepTrustStructure.tsx       # "Do you understand a group membership is held under a Trust?"
│   │   ├── StepFMU.tsx                  # "Do you require Full Medical Underwriting?"
│   │   └── RecommendationResult.tsx
│   ├── comparison/
│   │   ├── ComparisonTable.tsx
│   │   ├── ComparisonToggle.tsx    # Summary vs detailed view
│   │   └── FeatureRow.tsx
│   ├── products/
│   │   ├── ProductDetail.tsx
│   │   ├── BenefitsList.tsx
│   │   ├── EligibilityBadge.tsx
│   │   └── PurchaseCTA.tsx
│   ├── shared/
│   │   ├── Tooltip.tsx             # Hover-based terminology tooltips
│   │   ├── WhatsAppButton.tsx
│   │   ├── StepIndicator.tsx
│   │   └── InsuranceTerm.tsx      # Inline glossary component
│   └── ui/                         # shadcn/ui components (pre-configured)
├── lib/
│   ├── recommendation-engine.ts    # Rules-based matching logic
│   ├── products.ts                 # Product data and configs
│   └── utils.ts
├── hooks/
│   ├── useQuestionnaire.ts         # Wizard state management
│   └── useComparison.ts
└── types/
    ├── products.ts
    └── questionnaire.ts
```

---

## 6. Functional Requirements

### 6.1 Dual User Journeys

#### A — Direct Selection Path

- Display all three IPMI solutions as scannable product cards on landing
- Each card: summary, eligibility indicators, key benefits, ideal user badge
- Side-by-side comparison accessible in one click
- CTA visible at all times; minimal steps to purchase/quote

#### B — Guided Recommendation Flow

- Decision-tree questionnaire driven by the logic defined in **Section 6.2** below
- Progress indicator showing current step and total
- Smart transitions between steps (no page reloads)
- Plain-English questions — avoid insurance jargon in questions
- Loop handling: user is re-asked awareness questions until they confirm understanding before advancing
- Final screen: recommended plan + rationale + alternatives

### 6.2 Recommendation Engine (`lib/recommendation-engine.ts`)

The engine implements the following decision tree exactly. Each node is a yes/no question; outcomes are one of four destinations: **Medical Membership Program**, **Expatriate Healthcare**, **Health Compass**, or **Standard Contract**.

#### Decision Tree

```
START
│
├─► Are you an expatriate?
│     │
│     ├─ YES ─► Are you new to IPMI?
│     │               │
│     │               ├─ YES ─► Do you want full comparisons (with AI Assistant)?
│     │               │               │
│     │               │               ├─ NO ──► Will you consider 2 pre-selected best-of-breed
│     │               │               │         IPMI options with online purchase?
│     │               │               │               │
│     │               │               │               ├─ YES ─► [Branch A — see below]
│     │               │               │               └─ NO  ─► [Branch A — see below]
│     │               │               │
│     │               │               └─ YES ─► [Branch A — see below]
│     │               │
│     │               └─ NO (experienced) ─► [Branch A — see below]
│     │
│     └─ NO ──► Standard Contract
│
│
Branch A — Coverage & Underwriting Questions
│
├─► Are you aware that pre-existing conditions are most often excluded?
│     │
│     ├─ YES ─► Are you happy with Major Medical Hospitalisation covers ONLY?
│     │         (i.e. no out-patient and no general practitioners' costs covered)
│     │               │
│     │               ├─ YES ─► Are you familiar with group memberships
│     │               │         (e.g. similar to employer schemes)?
│     │               │               │
│     │               │               ├─ YES ─► Do you understand that a group
│     │               │               │         membership will be held under a Trust?
│     │               │               │               │
│     │               │               │               ├─ YES ──► Medical Membership Program
│     │               │               │               └─ NO  ──► Expatriate Healthcare
│     │               │               │
│     │               │               └─ NO ──► Expatriate Healthcare
│     │               │
│     │               └─ NO ─► Do you require Full Medical Underwriting ("FMU")
│     │                         to see if pre-existing conditions could be included?
│     │                               │
│     │                               ├─ YES ──► Health Compass
│     │                               └─ NO  ──► [loop back to pre-existing
│     │                                           conditions awareness question]
│     │
│     └─ NO ──► [loop — re-ask until user answers YES]
│               ⚠ This is a mandatory awareness gate; user cannot proceed
│                 until they acknowledge pre-existing condition exclusions.
```

#### Loop Handling Rule

The pre-existing conditions awareness question (`"Are you aware that pre-existing conditions are most often excluded?"`) is a **hard gate**. If the user answers NO, display an educational tooltip/interstitial explaining the exclusion, then re-present the question. The loop continues until the user confirms YES.

#### TypeScript Types

```typescript
type QuestionnaireAnswers = {
  isExpatriate: boolean;
  isNewToIPMI: boolean;
  wantsFullComparison: boolean;
  acceptsPreSelectedOptions: boolean;
  awarePECExclusion: boolean;          // hard gate — loop until true
  acceptsMajorMedicalOnly: boolean;
  familiarWithGroupMembership: boolean;
  understandsTrustStructure: boolean;
  requiresFMU: boolean;
};

type Recommendation = {
  primary: 'medical-membership' | 'expatriate-healthcare' | 'health-compass' | 'standard-contract';
  rationale: string[];
  alternatives: ProductId[];
};
```

#### Outcome Summary

| Outcome                        | Conditions                                                                                                            |
| ------------------------------ | --------------------------------------------------------------------------------------------------------------------- |
| **Medical Membership Program** | Expat · aware of PEC · accepts major medical only · familiar with group membership · understands Trust structure      |
| **Expatriate Healthcare**      | Expat · aware of PEC · accepts major medical only · (not familiar with group membership OR does not understand Trust) |
| **Health Compass**             | Expat · aware of PEC · requires full medical underwriting (FMU)                                                       |
| **Standard Contract**          | Not an expatriate                                                                                                     |

### 6.3 Comparison Interface

- Side-by-side table for all three products
- Toggle: Summarised view ↔ Detailed view
- Feature rows: Coverage area, Emergency care, Dental/Vision, Maternity, Pre-existing conditions, Repatriation, Corporate options, Price tier
- Highlight recommended plan based on questionnaire (if available in state)
- "Choose this plan" CTA per column

### 6.4 Conversion & Support

| Integration      | Products      | Implementation                                               |
| ---------------- | ------------- | ------------------------------------------------------------ |
| Direct purchase  | Options 1 & 2 | Internal purchase flow / redirect to provider                |
| Quote request    | Option 3      | Multi-field quote form with email confirmation               |
| WhatsApp support | All           | Floating WhatsApp button (persistent, bottom-right)          |
| Escalation path  | All           | "Speak to an advisor" CTA when user shows hesitation signals |

WhatsApp number: configure via `NEXT_PUBLIC_WHATSAPP_NUMBER` env variable.

---

## 7. Design System

### 7.1 Design Direction

- **Tone:** Premium, trustworthy, refined — high-end healthtech/fintech aesthetic
- **Not:** Generic insurance blue, stock photography heavy, cluttered forms
- **Reference feeling:** Clean like Stripe, warm like Calm, authoritative like BUPA digital

### 7.2 Component Conventions (shadcn/ui)

- Use `Card`, `Button`, `Badge`, `Progress`, `Tooltip`, `RadioGroup`, `Select`, `Dialog` from shadcn
- Extend with custom variants where needed — do not override shadcn defaults
- All interactive states: default → hover → active → disabled → loading

### 7.3 Motion & Interactions

- Step transitions: `opacity 0 → 1` + `translateY(8px) → 0` over 200ms
- Card hover: subtle `box-shadow` lift + `translateY(-2px)`
- CTA buttons: `scale(1.02)` on hover, no bounce
- Progress bar: smooth width transition on step advance
- Tooltips: fade-in 150ms, position above with 4px offset

### 7.4 Responsiveness

- Breakpoints: `sm: 640px` · `md: 768px` · `lg: 1024px` · `xl: 1280px`
- Mobile-first: questionnaire is full-screen cards on mobile
- Comparison table: horizontally scrollable on mobile, sticky first column
- WhatsApp button: bottom-right fixed, 60px from edges

---

## 8. State Management

Use React Context + `useReducer` for questionnaire state. Keep it local — no external state library required for MVP.

```typescript
// hooks/useQuestionnaire.ts
type QuestionnaireState = {
  currentStep: number;
  totalSteps: number;
  answers: Partial<QuestionnaireAnswers>;  // see QuestionnaireAnswers in Section 6.2
  recommendation: Recommendation | null;
  isComplete: boolean;
  pecLoopCount: number;                    // tracks how many times the PEC gate has looped
};
```

Persist questionnaire progress to `sessionStorage` so users don't lose progress on refresh.

---

## 9. Data Layer (`lib/products.ts`)

Define all product data as typed constants — no hardcoded strings in components:

```typescript
export type Product = {
  id: 'medical-membership' | 'expatriate-healthcare' | 'health-compass';
  name: string;
  tagline: string;
  description: string;
  idealFor: string[];
  keyBenefits: Benefit[];
  features: FeatureMatrix;
  purchasePath: 'direct' | 'quote';
  ctaLabel: string;
  ctaUrl: string;
  priceTier: 'economy' | 'mid' | 'premium';
};
```

---

## 10. Accessibility Requirements

- WCAG 2.1 AA compliance throughout
- All form controls: visible labels, `aria-describedby` for help text
- Keyboard navigation: full tab order, focus rings visible
- Tooltips: accessible via keyboard (`aria-label` / `role="tooltip"`)
- Colour contrast: minimum 4.5:1 for body text, 3:1 for UI components
- Step indicators: `aria-current="step"` on active step
- Loading states: `aria-live="polite"` regions for dynamic updates

---

## 11. Form Validation

Use `react-hook-form` + `zod` for all forms:

- Questionnaire: validate each step before advancing
- Quote form: full schema validation with inline error messages
- Purchase flow: email format, required fields, phone number format
- Error messages: plain English, positioned inline below each field

---

## 12. Environment Variables

```bash
NEXT_PUBLIC_WHATSAPP_NUMBER=      # WhatsApp business number (international format)
NEXT_PUBLIC_SITE_URL=             # Canonical site URL
NEXT_PUBLIC_GTM_ID=               # Google Tag Manager (analytics)
NEXT_PUBLIC_ERNEST_MAUDE_URL=     # Ernest Maude main site URL
NEXT_PUBLIC_EM_INTERNATIONAL_URL= # Ernest Maude International URL
```

---

## 13. Analytics & Conversion Tracking

Instrument key events for GTM/GA4:

| Event                        | Trigger                     |
| ---------------------------- | --------------------------- |
| `ipmi_journey_started`       | User clicks "Find my plan"  |
| `ipmi_step_completed`        | Each questionnaire step     |
| `ipmi_recommendation_viewed` | Recommendation result shown |
| `ipmi_comparison_opened`     | Comparison table viewed     |
| `ipmi_cta_clicked`           | Any purchase/quote CTA      |
| `ipmi_whatsapp_opened`       | WhatsApp button clicked     |
| `ipmi_quote_submitted`       | Quote form submitted        |

---

## 14. Development Phases

### Phase 1 — Foundation

- [ ] Project setup, routing, layout shell (Header, Footer)
- [ ] Product data layer (`lib/products.ts`)
- [ ] Landing page with journey selector and product cards
- [ ] Design tokens and typography applied

### Phase 2 — Guided Flow

- [ ] Questionnaire wizard (all 6 steps)
- [ ] Progress indicator component
- [ ] Recommendation engine (`lib/recommendation-engine.ts`)
- [ ] Recommendation result screen

### Phase 3 — Comparison & Products

- [ ] Product detail pages (all 3)
- [ ] Comparison table with toggle
- [ ] Side-by-side highlighting

### Phase 4 — Conversion

- [ ] Direct purchase flow (Options 1 & 2)
- [ ] Quote request form (Option 3)
- [ ] WhatsApp integration
- [ ] Escalation / advisor paths

### Phase 5 — Polish & QA

- [ ] Accessibility audit and fixes
- [ ] Mobile responsiveness review
- [ ] Analytics instrumentation
- [ ] Performance optimisation (Core Web Vitals)
- [ ] Cross-browser testing

---

## 15. Key Constraints & Decisions

- **No external state library** for MVP — React Context is sufficient
- **shadcn/ui is pre-configured** — do not reinstall or modify the base config
- **Recommendation engine is rules-based** — no ML/AI for MVP; architecture must support future AI layer
- **Both Ernest Maude sites share this codebase** — use environment variables to customise branding per site, not separate codebases
- **WhatsApp is the primary human escalation channel** — no live chat widget for MVP
- **Quote form for Health Compass only** — Options 1 and 2 are direct-purchase

---

## 16. Definition of Done

A feature is complete when:

1. Renders correctly on mobile (375px), tablet (768px), and desktop (1280px)
2. Passes keyboard navigation test (tab through all interactive elements)
3. Has no TypeScript errors (`tsc --noEmit` clean)
4. Analytics event fires correctly on the relevant trigger
5. Matches design direction: premium, trustworthy, conversion-focused
6. Component is documented with a JSDoc comment describing its props and purpose
