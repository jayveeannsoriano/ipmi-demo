import { Progress } from "@/components/ui/progress"

interface ProgressBarProps {
  currentStep: number
  totalSteps: number
  label?: string
}

/**
 * ProgressBar — displays the current step progress in the questionnaire wizard.
 * Shows step count and a smooth animated progress bar.
 */
export function ProgressBar({
  currentStep,
  totalSteps,
  label,
}: ProgressBarProps) {
  const percentage = Math.round((currentStep / totalSteps) * 100)

  return (
    <div className="w-full space-y-2">
      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <span>{label ?? `Step ${currentStep} of ${totalSteps}`}</span>
        <span>{percentage}% complete</span>
      </div>
      <Progress value={percentage} className="h-1.5" />
    </div>
  )
}
