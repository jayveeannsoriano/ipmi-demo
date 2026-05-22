import { InfoTooltip } from "@/components/shared/InfoTooltip"
import { YesNoStep } from "./YesNoStep"

interface StepPreSelectedOptionsProps {
  onYes: () => void
  onNo: () => void
  onBack?: () => void
}

/**
 * StepPreSelectedOptions — "Will you consider 2 pre-selected best-of-breed IPMI options?"
 * YES → Health Compass: advisor curates the two best-fit plans for the user.
 * NO → Branch A (pec-awareness): user proceeds with independent self-assessment.
 */
export function StepPreSelectedOptions({
  onYes,
  onNo,
  onBack,
}: StepPreSelectedOptionsProps) {
  return (
    <YesNoStep
      question={
        <span>
          Would you consider two{" "}
          <span className="inline-flex items-baseline gap-1">
            <InfoTooltip
              triggerText="pre-selected best-of-breed"
              content="Our advisors have reviewed all available IPMI plans and identified the two that offer the strongest combination of cover, price, and digital purchase experience for most expatriate profiles."
            />
          </span>{" "}
          IPMI options with online purchase?
        </span>
      }
      subtext="Choosing this option connects you with Health Compass for expert-guided plan selection and an instant online quote."
      onYes={onYes}
      onNo={onNo}
      onBack={onBack}
      yesLabel="Yes, that works for me"
      noLabel="No, I'd prefer to assess my own options"
    />
  )
}
