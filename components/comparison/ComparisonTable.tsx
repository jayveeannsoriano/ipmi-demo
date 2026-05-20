"use client"

import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ComparisonToggle } from "./ComparisonToggle"
import { FeatureRow } from "./FeatureRow"
import { useComparison } from "@/hooks/useComparison"
import { PRODUCTS } from "@/lib/products"
import type { ProductId } from "@/types/products"

const PRICE_TIER_LABEL: Record<string, string> = {
  economy: "Economy",
  mid: "Mid-range",
  premium: "Premium",
}

interface ComparisonTableProps {
  highlightId?: ProductId
}

/**
 * ComparisonTable — side-by-side feature comparison for all three IPMI plans.
 * Supports summary and detailed toggle views. Highlights a recommended plan
 * if a recommendation is passed in.
 */
export function ComparisonTable({ highlightId }: ComparisonTableProps) {
  const { isDetailed, toggleView } = useComparison()

  const products = PRODUCTS

  const featureRows: {
    label: string
    key: keyof (typeof products)[0]["features"]
  }[] = [
    { label: "Coverage Area", key: "coverageArea" },
    { label: "Emergency Care", key: "emergencyCare" },
    { label: "Dental", key: "dental" },
    { label: "Vision", key: "vision" },
    { label: "Maternity", key: "maternity" },
    { label: "Pre-existing Conditions", key: "preExisting" },
    { label: "Repatriation", key: "repatriation" },
    { label: "Corporate Options", key: "corporate" },
    { label: "Price Tier", key: "priceTier" },
  ]

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          Comparing {products.length} plans
        </p>
        <ComparisonToggle isDetailed={isDetailed} onToggle={toggleView} />
      </div>

      <div className="overflow-x-auto rounded-lg border border-border">
        <table className="w-full min-w-150 border-collapse">
          <thead>
            <tr className="border-b border-border bg-muted/30">
              <th className="sticky left-0 min-w-40 bg-muted/30 px-4 py-4 text-left text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                Feature
              </th>
              {products.map((p) => (
                <th
                  key={p.id}
                  className={[
                    "min-w-48 px-4 py-4 text-center",
                    highlightId === p.id ? "bg-primary/10" : "",
                  ].join(" ")}
                >
                  <div className="flex flex-col items-center gap-1.5">
                    {p.badge && (
                      <Badge
                        variant={highlightId === p.id ? "default" : "secondary"}
                        className="text-xs"
                      >
                        {highlightId === p.id ? "✦ Recommended" : p.badge}
                      </Badge>
                    )}
                    <span className="text-sm font-semibold text-foreground">
                      {p.name}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {PRICE_TIER_LABEL[p.priceTier]}
                    </span>
                  </div>
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {featureRows.map((row) => (
              <FeatureRow
                key={row.key}
                label={row.label}
                values={products.map((p) => p.features[row.key])}
                isDetailed={isDetailed}
              />
            ))}
          </tbody>

          {/* CTA row */}
          <tfoot>
            <tr className="border-t border-border bg-muted/20">
              <td className="sticky left-0 bg-muted/20 px-4 py-4 text-sm font-medium" />
              {products.map((p) => (
                <td key={p.id} className="px-4 py-4 text-center">
                  <Button
                    size="sm"
                    variant={highlightId === p.id ? "default" : "outline"}
                    asChild
                    className="w-full"
                  >
                    <Link href={p.ctaUrl}>{p.ctaLabel}</Link>
                  </Button>
                </td>
              ))}
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  )
}
