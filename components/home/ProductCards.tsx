import Link from "next/link"
import { ArrowRight, CheckIcon } from "lucide-react"
import { PRODUCTS } from "@/lib/products"
import { PRODUCT_COLORS } from "@/lib/product-colors"
import { Check } from "@phosphor-icons/react"

const PRICE_TIER_LABEL: Record<string, string> = {
  economy: "Economy",
  mid: "Mid-range",
  premium: "Premium",
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
                    <span className="ml-auto text-xs text-muted-foreground">
                      {PRICE_TIER_LABEL[product.priceTier]}
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
                  <Link
                    href={product.ctaUrl}
                    className={[
                      "inline-flex items-center gap-1.5 rounded-md px-4 py-2 text-sm font-medium text-white transition-colors",
                      colors.ctaBg,
                    ].join(" ")}
                  >
                    {product.ctaLabel}
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                  <Link
                    href="/compare"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Compare
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
