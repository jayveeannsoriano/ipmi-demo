"use client"

/**
 * InfoTooltip — Core UX pattern (AGENT.md §7.2)
 *
 * A hover-activated (i) tooltip that replaces all click-away explanations.
 * Every insurance term or concept a first-time visitor may not understand
 * should be wrapped in this component.
 *
 * Behaviour contract:
 * - Opens on mouse-enter (desktop) and tap (mobile)
 * - Appears above the trigger with a 4px offset
 * - Fades in over 150ms — no open delay
 * - Dismisses on mouse-leave or tap-outside
 * - Never requires a click to open; never navigates away
 * - Content: 1–3 sentences maximum
 *
 * Accessibility contract:
 * - Trigger has `aria-describedby` pointing at the tooltip element
 * - Tooltip element has `role="tooltip"`
 * - Opens on :focus, dismisses on :blur (keyboard accessible)
 */

import * as React from "react"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"

export interface InfoTooltipProps {
  /** 1–3 sentence clarification. No links or rich content. */
  content: React.ReactNode
  /**
   * When provided, renders the term text itself as the trigger using the
   * dashed-underline inline glossary style (InsuranceTerm pattern).
   * When omitted, renders the circular `(i)` icon trigger instead.
   */
  triggerText?: string
  /** Optional size variant for the (i) icon trigger. Defaults to "md". Ignored when triggerText is set. */
  size?: "sm" | "md" | "lg"
  /** Additional class names applied to the trigger element. */
  className?: string
  /** Accessible label for the trigger. Defaults to "More information", or "{triggerText}: definition" when triggerText is set. */
  label?: string
}

const sizeMap = {
  sm: "h-3 w-3 text-[9px]",
  md: "h-4 w-4 text-[10px]",
  lg: "h-5 w-5 text-[11px]",
} as const

export function InfoTooltip({
  content,
  triggerText,
  size = "md",
  className,
  label,
}: InfoTooltipProps) {
  const tooltipId = React.useId()

  return (
    <Tooltip>
      {triggerText ? (
        /*
         * Term mode — the visible text IS the trigger (InsuranceTerm pattern).
         * Dashed underline signals "this term has a definition"; cursor-help
         * reinforces that hovering reveals more information.
         */
        <TooltipTrigger
          aria-describedby={tooltipId}
          aria-label={label ?? `${triggerText}: definition`}
          className={cn(
            "inline cursor-help border-b border-dashed border-muted-foreground/50",
            "text-foreground transition-colors duration-100",
            "hover:border-primary/60 hover:text-primary",
            "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:outline-none",
            className
          )}
        >
          {triggerText}
        </TooltipTrigger>
      ) : (
        /*
         * Icon mode — circular (i) button, sits inline next to text.
         * Used when the surrounding text is already clear and the tooltip
         * adds supplemental detail rather than a term definition.
         */
        <TooltipTrigger
          aria-describedby={tooltipId}
          aria-label={label ?? "More information"}
          className={cn(
            "inline-flex cursor-default items-center justify-center rounded-full",
            "border border-muted-foreground/30 bg-muted/60 text-muted-foreground",
            "align-middle leading-none",
            "transition-colors duration-100",
            "hover:border-muted-foreground/60 hover:bg-muted hover:text-foreground",
            "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:outline-none",
            sizeMap[size],
            className
          )}
        >
          {/* Decorative "i" — hidden from screen readers since the button has aria-label */}
          <span
            aria-hidden="true"
            className="font-serif font-medium not-italic"
          >
            i
          </span>
        </TooltipTrigger>
      )}

      <TooltipContent
        id={tooltipId}
        // role="tooltip" is set by the Radix primitive automatically
        side="top"
        sideOffset={4}
        className={cn(
          "animate-in duration-150 fade-in-0 zoom-in-95",
          "data-[state=closed]:animate-out data-[state=closed]:duration-100 data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
          "max-w-xs rounded-lg border border-border/60 bg-popover px-3.5 py-2.5",
          "text-xs leading-relaxed text-popover-foreground shadow-md"
        )}
      >
        {content}
      </TooltipContent>
    </Tooltip>
  )
}
