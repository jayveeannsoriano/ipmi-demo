import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { PRODUCTS } from "@/lib/products"
import { PRODUCT_COLORS } from "@/lib/product-colors"

const PRICE_TIER_LABEL: Record<string, string> = {
  economy: "Economy",
  mid: "Mid-range",
  premium: "Premium",
}

/**
 * ProductCards — grid of all three IPMI product cards on the landing page.
 * Each card shows key benefits, ideal user badge, and a CTA.
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

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {PRODUCTS.map((product) => {
            const colors = PRODUCT_COLORS[product.id]
            return (
              <Card
                key={product.id}
                className={[
                  "group flex flex-col overflow-hidden transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg",
                  "border-t-4",
                  colors.border,
                ].join(" ")}
              >
                <CardHeader className={["pb-4", colors.heroBg].join(" ")}>
                  <div className="mb-3 flex items-start justify-between gap-2">
                    {product.badge ? (
                      <span
                        className={[
                          "rounded-full px-2.5 py-0.5 text-xs font-medium",
                          colors.badgeBg,
                        ].join(" ")}
                      >
                        {product.badge}
                      </span>
                    ) : (
                      <span />
                    )}
                    <Badge variant="outline" className="ml-auto text-xs">
                      {PRICE_TIER_LABEL[product.priceTier]}
                    </Badge>
                  </div>
                  <h3
                    className={[
                      "text-lg leading-tight font-semibold",
                      colors.text,
                    ].join(" ")}
                  >
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {product.tagline}
                  </p>
                </CardHeader>

                <CardContent className="flex flex-1 flex-col gap-4 pt-4">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {product.description}
                  </p>

                  <div className="mt-auto">
                    <p className="mb-2 text-xs font-semibold tracking-wider text-foreground uppercase">
                      Ideal for
                    </p>
                    <ul className="space-y-1">
                      {product.idealFor.slice(0, 3).map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <span
                            className={["mt-0.5 font-bold", colors.check].join(
                              " "
                            )}
                            aria-hidden="true"
                          >
                            ✓
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>

                <CardFooter className="flex items-center gap-3 pt-4">
                  <Link
                    href={product.ctaUrl}
                    className={[
                      "inline-flex flex-1 items-center justify-center rounded-full px-4 py-2.5 text-sm font-semibold text-white transition-colors",
                      colors.ctaBg,
                    ].join(" ")}
                  >
                    {product.ctaLabel}
                  </Link>
                  <Button
                    variant="ghost"
                    size="sm"
                    asChild
                    className="shrink-0"
                  >
                    <Link href="/compare">Compare</Link>
                  </Button>
                </CardFooter>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
