import { Badge } from "@/components/ui/badge"
import type { PriceTier } from "@/types/products"

interface EligibilityBadgeProps {
  label: string
  tier?: PriceTier
}

const TIER_VARIANT: Record<PriceTier, "default" | "secondary" | "outline"> = {
  economy: "outline",
  mid: "secondary",
  premium: "default",
}

/**
 * EligibilityBadge — displays an eligibility or audience indicator badge
 * with optional pricing tier styling.
 */
export function EligibilityBadge({ label, tier }: EligibilityBadgeProps) {
  return (
    <Badge
      variant={tier ? TIER_VARIANT[tier] : "secondary"}
      className="text-xs"
    >
      {label}
    </Badge>
  )
}
