import { InfoTooltip } from "@/components/shared/InfoTooltip"
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
      question={
        <span>
          Are you new to{" "}
          <span className="inline-flex items-baseline gap-1">
            international private medical insurance
            <InfoTooltip
              triggerText="(IPMI)"
              content="International Private Medical Insurance (IPMI) provides health cover for people living or working outside their home country. It is separate from travel insurance and is designed for long-term international living."
            />
          </span>
          ?
        </span>
      }
      subtext="If this is your first time exploring IPMI, we'll guide you to the most straightforward option first."
      onYes={onYes}
      onNo={onNo}
      onBack={onBack}
      yesLabel="Yes, this is new to me"
      noLabel="No, I've had IPMI before"
    />
  )
}
