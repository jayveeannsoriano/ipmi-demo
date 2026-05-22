import { InfoTooltip } from "@/components/shared/InfoTooltip"
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
      question={
        <span>
          Are you comfortable with{" "}
          <span className="inline-flex items-baseline gap-1">
            <InfoTooltip
              triggerText="Major Medical Hospitalisation "
              content="Major Medical Hospitalisation covers in-hospital stays, surgery, and emergency care. It does not include outpatient GP visits, specialist consultations, or routine health checks — those require a more comprehensive plan."
            />
          </span>{" "}
          cover as your primary protection?
        </span>
      }
      subtext="This is a more focused, cost-effective tier. If you need outpatient or day-to-day cover included, choose 'No'."
      onYes={onYes}
      onNo={onNo}
      onBack={onBack}
      yesLabel="Yes, that's sufficient for me"
      noLabel="No, I need broader cover"
    />
  )
}
