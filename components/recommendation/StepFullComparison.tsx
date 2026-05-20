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
      question="Would you like to explore a full comparison of all available plans?"
      subtext="We can walk you through every option in detail, or if you prefer, we'll shortlist two best-of-breed plans for a quicker decision."
      onYes={onYes}
      onNo={onNo}
      onBack={onBack}
      yesLabel="Yes, show me everything"
      noLabel="No, just the best options for me"
    />
  )
}
