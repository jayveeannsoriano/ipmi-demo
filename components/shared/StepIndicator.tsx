"use client"

interface StepIndicatorProps {
  currentStep: number
  totalSteps: number
  labels?: string[]
}

/**
 * StepIndicator — visual step dots indicating progress through the questionnaire.
 * Marks the active step with aria-current="step" for accessibility.
 */
export function StepIndicator({
  currentStep,
  totalSteps,
  labels,
}: StepIndicatorProps) {
  return (
    <nav aria-label="Questionnaire progress">
      <ol className="flex items-center gap-2">
        {Array.from({ length: totalSteps }, (_, i) => {
          const step = i + 1
          const isActive = step === currentStep
          const isComplete = step < currentStep
          return (
            <li key={step} className="flex items-center gap-2">
              <div
                aria-current={isActive ? "step" : undefined}
                aria-label={labels?.[i] ?? `Step ${step}`}
                className={[
                  "flex h-6 w-6 items-center justify-center rounded-full text-xs font-medium transition-all duration-200",
                  isComplete
                    ? "bg-primary text-primary-foreground"
                    : isActive
                      ? "bg-primary text-primary-foreground ring-2 ring-primary ring-offset-2"
                      : "bg-muted text-muted-foreground",
                ].join(" ")}
              >
                {isComplete ? "✓" : step}
              </div>
              {step < totalSteps && (
                <div
                  className={[
                    "h-px w-6 transition-all duration-300",
                    isComplete ? "bg-primary" : "bg-muted-foreground/30",
                  ].join(" ")}
                />
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
