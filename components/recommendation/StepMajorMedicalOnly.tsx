import { YesNoStep } from "./YesNoStep"

interface StepMajorMedicalOnlyProps {
  onYes: () => void
  onNo: () => void
  onBack?: () => void
}

/**
 * StepMajorMedicalOnly — "Are you happy with Major Medical Hospitalisation covers only?"
 * YES → group membership path. NO → FMU path.
 */
export function StepMajorMedicalOnly({
  onYes,
  onNo,
  onBack,
}: StepMajorMedicalOnlyProps) {
  return (
    <YesNoStep
      question="Are you comfortable with Major Medical Hospitalisation cover as your primary protection?"
      subtext="Major Medical Hospitalisation covers in-hospital stays, surgery and emergency care — but does not include outpatient consultations or GP visits."
      onYes={onYes}
      onNo={onNo}
      onBack={onBack}
      yesLabel="Yes, that's sufficient for me"
      noLabel="No, I need broader cover"
    />
  )
}
