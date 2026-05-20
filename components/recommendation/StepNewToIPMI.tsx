import { YesNoStep } from "./YesNoStep"

interface StepNewToIPMIProps {
  onYes: () => void
  onNo: () => void
  onBack?: () => void
}

/**
 * StepNewToIPMI — "Are you new to IPMI?"
 * Experienced users skip the comparison/pre-selection steps and go straight to Branch A.
 */
export function StepNewToIPMI({ onYes, onNo, onBack }: StepNewToIPMIProps) {
  return (
    <YesNoStep
      question="Are you new to international private medical insurance?"
      subtext="IPMI (International Private Medical Insurance) is health cover designed specifically for people living outside their home country."
      onYes={onYes}
      onNo={onNo}
      onBack={onBack}
      yesLabel="Yes, this is new to me"
      noLabel="No, I've had IPMI before"
    />
  )
}
