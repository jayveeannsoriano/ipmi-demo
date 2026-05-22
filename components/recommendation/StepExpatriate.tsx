import { InfoTooltip } from "@/components/shared/InfoTooltip"
import { YesNoStep } from "./YesNoStep"

interface StepExpatriateProps {
  onYes: () => void
  onNo: () => void
}

/**
 * StepExpatriate — first decision-tree node.
 * "Are you an expatriate?" — NO routes to Standard Contract; YES continues.
 */
export function StepExpatriate({ onYes, onNo }: StepExpatriateProps) {
  return (
    <YesNoStep
      question={
        <span>
          Are you an{" "}
          <span className="inline-flex items-baseline gap-1">
            <InfoTooltip
              triggerText="expatriate"
              content="An expatriate is someone who lives or works outside their home country — either on a fixed-term assignment or permanently. IPMI is designed specifically for this situation."
            />
          </span>
          ?
        </span>
      }
      subtext="If you are based in your home country, IPMI may not be the right product for you — we can point you in the right direction."
      onYes={onYes}
      onNo={onNo}
      yesLabel="Yes, I live or work abroad"
      noLabel="No, I'm based in my home country"
    />
  )
}
