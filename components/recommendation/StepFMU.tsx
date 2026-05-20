import { YesNoStep } from "./YesNoStep"

interface StepFMUProps {
  onYes: () => void
  onNo: () => void
  onBack?: () => void
}

/**
 * StepFMU — "Do you require Full Medical Underwriting (FMU)?"
 * YES → Health Compass. NO → loops back to PEC awareness question.
 */
export function StepFMU({ onYes, onNo, onBack }: StepFMUProps) {
  return (
    <YesNoStep
      question="Do you require Full Medical Underwriting to assess whether your pre-existing conditions could be included?"
      subtext="Full Medical Underwriting (FMU) involves a detailed review of your medical history. It may allow some pre-existing conditions to be covered, but requires a more involved application process."
      onYes={onYes}
      onNo={onNo}
      onBack={onBack}
      yesLabel="Yes, I want FMU assessed"
      noLabel="No, I don't need FMU"
    />
  )
}
