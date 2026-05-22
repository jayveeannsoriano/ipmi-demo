import { InfoTooltip } from "@/components/shared/InfoTooltip"
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
      question={
        <span>
          Do you require{" "}
          <span className="inline-flex items-baseline gap-1">
            Full Medical Underwriting
            <InfoTooltip
              triggerText="(FMU)"
              content="Full Medical Underwriting (FMU) is a detailed review of your complete medical history before your policy is issued. It may allow some pre-existing conditions to be covered — or explicitly excluded — giving you a clear picture of exactly what is and isn't included."
            />
          </span>{" "}
          to assess whether your pre-existing conditions could be included?
        </span>
      }
      subtext="FMU involves a more involved application process but can provide greater certainty about your level of cover."
      onYes={onYes}
      onNo={onNo}
      onBack={onBack}
      yesLabel="Yes, I want FMU assessed"
      noLabel="No, I don't need FMU"
    />
  )
}
