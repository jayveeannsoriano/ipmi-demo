import Link from "next/link"
import { ExternalLink } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export interface HandoffCTAProps {
  /** Button label — pulled from product.ctaLabel */
  label: string
  /** External platform URL — pulled from product.externalUrl */
  href: string
  /**
   * Controls the supporting subtext shown beneath the button.
   * "direct-purchase" → instant digital purchase messaging
   * "ai-comparison-quote" → managed quote process messaging
   */
  handoffType?: "direct-purchase" | "ai-comparison-quote"
  /** Optional extra class names on the wrapper div */
  className?: string
}

const subtext: Record<NonNullable<HandoffCTAProps["handoffType"]>, string> = {
  "direct-purchase": "Purchase online in minutes — available 24/7.",
  "ai-comparison-quote":
    "This option includes a personalised quote process. Ernest Maude will follow up directly.",
}

/**
 * HandoffCTA — single external link CTA per product.
 *
 * This component does NOT contain forms, quote widgets, or purchase flows.
 * Its sole responsibility is to hand the visitor off to the correct external
 * platform in one confident click (AGENT.md §6.4).
 *
 * All links open in a new tab per current spec; confirm with client if
 * full-page navigation is preferred for Options 1 & 2.
 */
export function HandoffCTA({
  label,
  href,
  handoffType,
  className,
}: HandoffCTAProps) {
  return (
    <div className="flex flex-col items-start gap-2">
      <Button size="lg" asChild className={cn("w-full sm:w-auto", className)}>
        <Link href={href} target="_blank" rel="noopener noreferrer">
          {label}
          <ExternalLink
            className="ml-2 h-4 w-4 opacity-70"
            aria-hidden="true"
          />
        </Link>
      </Button>
      {handoffType && (
        <p className="text-xs text-muted-foreground">{subtext[handoffType]}</p>
      )}
    </div>
  )
}
