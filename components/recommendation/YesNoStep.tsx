import * as React from "react"
import { Button } from "@/components/ui/button"

interface YesNoStepProps {
  /**
   * The plain-English question to display.
   * Accepts ReactNode so individual step components can embed inline
   * InfoTooltip elements next to jargon terms without extra wrapper divs.
   */
  question: React.ReactNode
  /** Optional supporting context shown below the question */
  subtext?: string
  /** Optional additional content (e.g. educational interstitial for PEC loop) */
  children?: React.ReactNode
  onYes: () => void
  onNo: () => void
  onBack?: () => void
  yesLabel?: string
  noLabel?: string
  /** Disables both answer buttons (e.g. while showing an interstitial) */
  disabled?: boolean
}

/**
 * YesNoStep — shared yes/no question card used by all decision-tree step components.
 * Renders a question, optional subtext, action buttons, and an optional back link.
 */
export function YesNoStep({
  question,
  subtext,
  children,
  onYes,
  onNo,
  onBack,
  yesLabel = "Yes",
  noLabel = "No",
  disabled = false,
}: YesNoStepProps) {
  return (
    <div className="space-y-6">
      {children && <div>{children}</div>}

      <div className="space-y-1">
        <p className="text-base leading-snug font-medium text-foreground">
          {question}
        </p>
        {subtext && (
          <p className="text-sm leading-relaxed text-muted-foreground">
            {subtext}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          onClick={onYes}
          disabled={disabled}
          className={[
            "flex-1 rounded-lg border-2 px-6 py-4 text-sm font-medium transition-all duration-150",
            "border-primary bg-primary/5 text-primary",
            "hover:bg-primary hover:text-primary-foreground",
            "focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:outline-none",
            "disabled:cursor-not-allowed disabled:opacity-40",
          ].join(" ")}
        >
          {yesLabel}
        </button>
        <button
          type="button"
          onClick={onNo}
          disabled={disabled}
          className={[
            "flex-1 rounded-lg border-2 px-6 py-4 text-sm font-medium transition-all duration-150",
            "border-border text-muted-foreground",
            "hover:border-foreground hover:text-foreground",
            "focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-none",
            "disabled:cursor-not-allowed disabled:opacity-40",
          ].join(" ")}
        >
          {noLabel}
        </button>
      </div>

      {onBack && (
        <div>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={onBack}
            className="text-muted-foreground"
          >
            ← Back
          </Button>
        </div>
      )}
    </div>
  )
}
