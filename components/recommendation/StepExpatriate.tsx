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
      question="Are you an expatriate?"
      subtext="An expatriate is someone who lives or works outside their home country, either temporarily or permanently."
      onYes={onYes}
      onNo={onNo}
      yesLabel="Yes, I live or work abroad"
      noLabel="No, I'm based in my home country"
    />
  )
}
