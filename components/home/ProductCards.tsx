import Link from "next/link"
import { ArrowRight, CheckIcon } from "lucide-react"
import { PRODUCTS } from "@/lib/products"
import { PRODUCT_COLORS } from "@/lib/product-colors"
import { InfoTooltip } from "@/components/shared/InfoTooltip"
import { Check } from "@phosphor-icons/react"
import { HandoffCTA } from "../products/HandoffCTA"

const PRICE_TIER_LABEL: Record<string, string> = {
  economy: "Economy",
  mid: "Mid-range",
  premium: "Premium",
}

const PRICE_TIER_TOOLTIP: Record<string, string> = {
  economy:
    "Entry-level cover focusing on essential inpatient care at a lower price point.",
  mid: "Balanced cover including inpatient care and key outpatient benefits. Suited to most individual and family needs.",
  premium:
    "Comprehensive cover with the broadest benefits, highest limits, and optional enhancements such as dental and maternity.",
}

const HANDOFF_TYPE_LABEL: Record<string, string> = {
  "direct-purchase": "Direct purchase",
  "ai-comparison-quote": "Expert quote",
}

const HANDOFF_TYPE_TOOLTIP: Record<string, string> = {
  "direct-purchase":
    "You can purchase this plan instantly online, 24/7 — no broker or adviser call required. Fixed pricing means no waiting for a personalised quote.",
  "ai-comparison-quote":
    "This plan uses an AI-assisted comparison to find the best fit for your profile, followed by a formal quote. An Ernest Maude adviser will follow up directly.",
}

/**
 * ProductCards � minimal, professional grid of all three IPMI product cards.
 * Left-border accent differentiates each plan; no heavy colour fills.
 */
export function ProductCards() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Our IPMI Plans
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Three distinct solutions covering every international healthcare
            need.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {PRODUCTS.map((product) => {
            const colors = PRODUCT_COLORS[product.id]
            return (
              <div
                key={product.id}
                className={[
                  "group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md",
                  colors.border,
                ].join(" ")}
              >
                {/* Header */}
                <div className={["px-6 pt-6 pb-4", colors.heroBg].join(" ")}>
                  <div className="mb-3 flex items-center justify-between gap-2">
                    {product.badge ? (
                      <span
                        className={[
                          "inline-block rounded-md px-2 py-0.5 text-xs font-medium",
                          colors.badgeBg,
                        ].join(" ")}
                      >
                        {product.badge}
                      </span>
                    ) : (
                      <span />
                    )}
                    <span className="ml-auto inline-flex items-center gap-1 text-xs text-muted-foreground">
                      {PRICE_TIER_LABEL[product.priceTier]}
                      <InfoTooltip
                        size="sm"
                        content={PRICE_TIER_TOOLTIP[product.priceTier]}
                      />
                    </span>
                  </div>
                  <h3
                    className={[
                      "text-base leading-snug font-semibold",
                      colors.text,
                    ].join(" ")}
                  >
                    {product.name}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {product.tagline}
                  </p>
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col gap-5 px-6 py-5">
                  {/* Ideal for */}
                  <div>
                    <p className="mb-2 text-xs font-medium tracking-wider text-muted-foreground uppercase">
                      Ideal for
                    </p>
                    <ul className="space-y-1.5">
                      {product.idealFor.slice(0, 3).map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-sm text-foreground/75"
                        >
                          <span
                            className={[
                              "text-s mt-xs leading-5",
                              colors.check,
                            ].join(" ")}
                            aria-hidden="true"
                          >
                            <CheckIcon className="h-5 w-3.5" />
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Divider */}
                  <hr className="border-border" />

                  {/* Description */}
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {product.description}
                  </p>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between gap-3 border-t border-border px-6 py-4">
                  <HandoffCTA
                    label={product.ctaLabel}
                    href={product.externalUrl}
                    className={colors.ctaBg}
                  />
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                      {HANDOFF_TYPE_LABEL[product.handoffType]}
                      <InfoTooltip
                        size="sm"
                        content={HANDOFF_TYPE_TOOLTIP[product.handoffType]}
                      />
                    </span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
