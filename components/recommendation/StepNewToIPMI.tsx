import { YesNoStep } from "./YesNoStep"

interface StepNewToIPMIProps {
  onYes: () => void
  onNo: () => void
  onBack?: () => void
}

/**
 * StepNewToIPMI — "Are you new to IPMI?"
 * YES (new) → Health Compass directly: first-timers benefit from expert-guided setup.
 * NO (experienced) → continues to full-comparison preference question.
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
