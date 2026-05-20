import { YesNoStep } from "./YesNoStep"

interface StepPreSelectedOptionsProps {
  onYes: () => void
  onNo: () => void
  onBack?: () => void
}

/**
 * StepPreSelectedOptions — "Will you consider 2 pre-selected best-of-breed IPMI options?"
 * Both YES and NO lead to Branch A — this step collects the preference for analytics.
 */
export function StepPreSelectedOptions({
  onYes,
  onNo,
  onBack,
}: StepPreSelectedOptionsProps) {
  return (
    <YesNoStep
      question="Would you consider two pre-selected best-of-breed IPMI options with online purchase?"
      subtext="Our advisors have identified two top-rated plans that suit most expatriate profiles. You can purchase either online in minutes."
      onYes={onYes}
      onNo={onNo}
      onBack={onBack}
      yesLabel="Yes, that works for me"
      noLabel="No, I'd prefer to see all options"
    />
  )
}
