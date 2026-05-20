import { YesNoStep } from "./YesNoStep"

interface StepTrustStructureProps {
  onYes: () => void
  onNo: () => void
  onBack?: () => void
}

/**
 * StepTrustStructure — "Do you understand that a group membership will be held under a Trust?"
 * YES → Medical Membership Program. NO → Expatriate Healthcare.
 */
export function StepTrustStructure({
  onYes,
  onNo,
  onBack,
}: StepTrustStructureProps) {
  return (
    <YesNoStep
      question="Do you understand that a group membership plan is held under a Trust structure?"
      subtext="A Trust-based plan means your membership is administered by a trustee body rather than a traditional insurer. Benefits and terms are governed by the Trust deed."
      onYes={onYes}
      onNo={onNo}
      onBack={onBack}
      yesLabel="Yes, I understand the Trust structure"
      noLabel="No, I'd prefer a traditional insurer"
    />
  )
}
