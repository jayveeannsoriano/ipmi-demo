import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BenefitsList } from "./BenefitsList"
import { EligibilityBadge } from "./EligibilityBadge"
import { PurchaseCTA } from "./PurchaseCTA"
import { PRODUCT_COLORS } from "@/lib/product-colors"
import type { Product } from "@/types/products"

interface ProductDetailProps {
  product: Product
}

/**
 * ProductDetail — full product detail view including description, benefits,
 * ideal-for badges, features, and purchase CTA.
 */
export function ProductDetail({ product }: ProductDetailProps) {
  const colors = PRODUCT_COLORS[product.id]
  return (
    <div className="space-y-10">
      {/* Hero */}
      <div
        className={[
          "space-y-4 rounded-xl border-t-4 p-6",
          colors.border,
          colors.heroBg,
        ].join(" ")}
      >
        <div className="flex flex-wrap items-center gap-2">
          {product.badge && (
            <span
              className={[
                "rounded-full px-2.5 py-0.5 text-xs font-medium",
                colors.badgeBg,
              ].join(" ")}
            >
              {product.badge}
            </span>
          )}
          <Badge variant="outline" className="capitalize">
            {product.priceTier} tier
          </Badge>
        </div>
        <h1
          className={[
            "text-3xl font-semibold tracking-tight md:text-4xl",
            colors.text,
          ].join(" ")}
        >
          {product.name}
        </h1>
        <p className="text-lg text-muted-foreground">{product.tagline}</p>
        <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
          {product.description}
        </p>
        <PurchaseCTA
          label={product.ctaLabel}
          href={product.purchasePath === "quote" ? `#quote-form` : "#purchase"}
          purchasePath={product.purchasePath}
        />
      </div>

      {/* Ideal for */}
      <div>
        <h2 className="mb-3 text-sm font-semibold tracking-wider text-muted-foreground uppercase">
          Ideal for
        </h2>
        <div className="flex flex-wrap gap-2">
          {product.idealFor.map((label) => (
            <EligibilityBadge
              key={label}
              label={label}
              tier={product.priceTier}
            />
          ))}
        </div>
      </div>

      {/* Key benefits */}
      <div>
        <h2 className="mb-4 text-xl font-semibold">Key benefits</h2>
        <BenefitsList benefits={product.keyBenefits} />
      </div>

      {/* Features */}
      <div>
        <h2 className="mb-4 text-xl font-semibold">Coverage at a glance</h2>
        <div className="overflow-hidden rounded-lg border border-border">
          {(
            [
              ["Coverage Area", product.features.coverageArea],
              ["Emergency Care", product.features.emergencyCare],
              ["Dental", product.features.dental],
              ["Vision", product.features.vision],
              ["Maternity", product.features.maternity],
              ["Pre-existing Conditions", product.features.preExisting],
              ["Repatriation", product.features.repatriation],
              ["Corporate Options", product.features.corporate],
            ] as [string, boolean | string][]
          ).map(([label, value], i) => (
            <div
              key={label}
              className={[
                "flex items-center justify-between px-4 py-3 text-sm",
                i % 2 === 0 ? "bg-muted/20" : "bg-background",
              ].join(" ")}
            >
              <span className="text-muted-foreground">{label}</span>
              <span className="text-right font-medium">
                {typeof value === "boolean" ? (
                  value ? (
                    <span className={colors.check}>✓ Included</span>
                  ) : (
                    <span className="text-muted-foreground">—</span>
                  )
                ) : (
                  value
                )}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Compare CTA */}
      <div className="rounded-lg bg-muted/30 p-6 text-center">
        <p className="mb-3 text-sm text-muted-foreground">
          Not sure if this is the right plan for you?
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button variant="outline" asChild>
            <Link href="/compare">Compare all plans</Link>
          </Button>
          <Button asChild>
            <Link href="/recommend">Get a recommendation</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
