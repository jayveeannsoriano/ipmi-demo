import { InfoTooltip } from "@/components/shared/InfoTooltip"
import { YesNoStep } from "./YesNoStep"

interface StepGroupMembershipProps {
  onYes: () => void
  onNo: () => void
  onBack?: () => void
}

/**
 * StepGroupMembership — "Are you familiar with group memberships (e.g. employer schemes)?"
 * YES → trust structure step. NO → Expatriate Healthcare.
 */
export function StepGroupMembership({
  onYes,
  onNo,
  onBack,
}: StepGroupMembershipProps) {
  return (
    <YesNoStep
      question={
        <span>
          Are you familiar with{" "}
          <span className="inline-flex items-baseline gap-1">
            <InfoTooltip
              triggerText="group membership schemes "
              content="A group membership scheme pools multiple members under a single policy structure — similar to how workplace health benefits work. Members benefit from group purchasing power, which can reduce premiums compared to individual policies."
            />
          </span>
          ?
        </span>
      }
      subtext="For example, employer health schemes or association-based cover. Familiarity with this structure helps us direct you to the right plan."
      onYes={onYes}
      onNo={onNo}
      onBack={onBack}
      yesLabel="Yes, I'm familiar with how they work"
      noLabel="No, I'm not familiar with these"
    />
  )
}
