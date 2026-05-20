import { YesNoStep } from "./YesNoStep"

interface StepPreSelectedOptionsProps {
  onYes: () => void
  onNo: () => void
  onBack?: () => void
}

/**
 * StepPreSelectedOptions — "Will you consider 2 pre-selected best-of-breed IPMI options?"
 * YES → Health Compass: advisor curates the two best-fit plans for the user.
 * NO → Branch A (pec-awareness): user proceeds with independent self-assessment.
 */
export function StepPreSelectedOptions({
  onYes,
  onNo,
  onBack,
}: StepPreSelectedOptionsProps) {
  return (
    <YesNoStep
      question="Would you consider two pre-selected best-of-breed IPMI options with online purchase?"
      subtext="Our advisors have identified two top-rated plans that suit most expatriate profiles. Choosing this option connects you with Health Compass for expert-guided selection."
      onYes={onYes}
      onNo={onNo}
      onBack={onBack}
      yesLabel="Yes, that works for me"
      noLabel="No, I'd prefer to assess my own options"
    />
  )
}
