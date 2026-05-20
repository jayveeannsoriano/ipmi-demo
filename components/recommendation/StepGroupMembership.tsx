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
      question="Are you familiar with group membership schemes — for example, how employer health schemes work?"
      subtext="Group memberships pool members together under a single policy structure, similar to how workplace health benefits are organised."
      onYes={onYes}
      onNo={onNo}
      onBack={onBack}
      yesLabel="Yes, I'm familiar with how they work"
      noLabel="No, I'm not familiar with these"
    />
  )
}
