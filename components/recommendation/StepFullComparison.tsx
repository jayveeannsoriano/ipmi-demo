import { InfoTooltip } from "@/components/shared/InfoTooltip"
import { YesNoStep } from "./YesNoStep"

interface StepFullComparisonProps {
  onYes: () => void
  onNo: () => void
  onBack?: () => void
}

/**
 * StepFullComparison — "Do you want full comparisons (with AI Assistant)?"
 * YES → proceeds to Branch A. NO → asks about pre-selected options.
 */
export function StepFullComparison({
  onYes,
  onNo,
  onBack,
}: StepFullComparisonProps) {
  return (
    <YesNoStep
      question={
        <span>
          Would you like to explore a{" "}
          <span className="inline-flex items-baseline gap-1">
            full AI-assisted comparison
            <InfoTooltip
              triggerText="(Health Compass)"
              content="Health Compass uses an AI assistant to compare all available plans side-by-side based on your personal profile. It then generates a formal quote and an Ernest Maude advisor follows up directly."
            />
          </span>{" "}
          of all available plans?
        </span>
      }
      subtext="We can walk you through every option in detail, or if you prefer, we'll shortlist two best-of-breed plans for a quicker decision."
      onYes={onYes}
      onNo={onNo}
      onBack={onBack}
      yesLabel="Yes, show me everything"
      noLabel="No, just the best options for me"
    />
  )
}
