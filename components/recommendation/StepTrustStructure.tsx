import { InfoTooltip } from "@/components/shared/InfoTooltip"
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
      question={
        <span>
          Do you understand that a group membership plan is held under a{" "}
          <span className="inline-flex items-baseline gap-1">
            <InfoTooltip
              triggerText="Trust structure "
              content="A Trust-based plan is administered by an independent trustee body rather than a traditional insurance company. Benefits and terms are governed by the Trust deed. This structure can offer more flexibility, but it differs from a standard regulated insurer arrangement."
            />
          </span>
          ?
        </span>
      }
      subtext="If you prefer a plan underwritten by a traditional regulated insurer, we have a suitable alternative."
      onYes={onYes}
      onNo={onNo}
      onBack={onBack}
      yesLabel="Yes, I understand the Trust structure"
      noLabel="No, I'd prefer a traditional insurer"
    />
  )
}
