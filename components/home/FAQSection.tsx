import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const FAQS = [
  {
    id: "what-is-ipmi",
    question: "What is International Private Medical Insurance (IPMI)?",
    answer:
      "IPMI provides global healthcare coverage for people living or working outside their home country — primarily expatriates. It covers medical expenses such as hospital stays, surgeries, outpatient consultations, and specialist treatments in countries other than your country of origin. USA coverage is sometimes available for an additional premium.",
  },
  {
    id: "who-needs-ipmi",
    question: "Who needs IPMI?",
    answer:
      "IPMI is designed for expatriates, long-term international workers, relocating families, and HR managers arranging employee benefits for staff working abroad. If you are living outside your home country for an extended period, your domestic health insurance will typically not cover you, making IPMI essential.",
  },
  {
    id: "pre-existing-conditions",
    question: "Are pre-existing conditions covered?",
    answer:
      "Most IPMI policies, plans, and schemes exclude pre-existing conditions — meaning any health issue that was diagnosed, treated, or sometimes even present (but undiagnosed) before your policy start date. This is standard across the market. If covering pre-existing conditions is important to you, Full Medical Underwriting (FMU) may offer a route to tailored inclusion, subject to assessment.",
  },
  {
    id: "what-is-fmu",
    question: "What is Full Medical Underwriting (FMU)?",
    answer:
      "Full Medical Underwriting is a thorough assessment of your complete health history carried out by the insurer or scheme administrator before your cover begins. Unlike Moratorium Underwriting — which automatically excludes conditions from the last few years — FMU reviews your entire medical history to produce a personalised policy with clearly defined exclusions and, in some cases, the possibility of covering certain pre-existing conditions.",
  },
  {
    id: "does-ipmi-cover-usa",
    question: "Does IPMI cover treatment in the USA?",
    answer:
      "USA coverage is not included as standard in most IPMI plans due to the significantly higher cost of healthcare in the US. It can typically be added as an optional extension, though this can meaningfully increase your premium. If you spend time in the USA, discuss this with your advisor before purchasing.",
  },
  {
    id: "which-plan-is-right",
    question: "Which IPMI plan is right for me?",
    answer:
      "The right plan depends on your residency status, health history, coverage preferences, and budget. Our guided recommendation tool walks you through a short decision-tree questionnaire — usually under two minutes — and matches you to the most suitable plan from our three options: Medical Membership Program, Expatriate Healthcare, or Health Compass.",
  },
  {
    id: "whats-the-difference",
    question:
      "What is the difference between Medical Membership, Expatriate Healthcare, and Health Compass?",
    answer:
      "Medical Membership is a structured group scheme held under a Trust, ideal for those comfortable with major medical (hospitalisation) cover at a competitive price point. Expatriate Healthcare is a comprehensive individual policy for expats who want broader cover including outpatient and specialist care. Health Compass is a bespoke, advisor-guided solution suited to complex needs, corporate groups, or those requiring full medical underwriting.",
  },
  {
    id: "how-to-claim",
    question: "How does the claims process work?",
    answer:
      "Claims processes vary by plan. For planned treatment, most policies require pre-authorisation from the insurer before you proceed. For emergencies, you should seek treatment immediately and notify your insurer as soon as reasonably possible. Our team and your dedicated advisor (where applicable) can guide you through the process at every stage.",
  },
  {
    id: "ernest-maude-and-ipmi",
    question: "What is Ernest Maude's role in IPMI?",
    answer:
      "Ernest Maude and Ernest Maude International are specialist insurance intermediaries with deep expertise in international private medical insurance. Rather than being an insurer themselves, they act as advisors and brokers — sourcing, structuring, and managing IPMI plans on behalf of individuals, families, and corporate clients. Their role is to match clients to the most appropriate cover, negotiate terms, and provide ongoing support throughout the life of the policy. Ernest Maude International focuses specifically on the expatriate and global mobility market, offering the three plans available on this platform.",
  },
]

/**
 * FAQSection — accordion-based FAQ addressing common IPMI questions.
 * Covers product differences, pre-existing conditions, FMU, and USA coverage.
 */
export function FAQSection() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Frequently asked questions
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Everything you need to know about international private medical
            insurance.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-2">
          {FAQS.map((faq) => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              className="rounded-lg border border-border px-5 transition-colors hover:bg-muted/30"
            >
              <AccordionTrigger className="py-4 text-left text-sm leading-snug font-medium hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="pb-4 text-sm leading-relaxed text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
