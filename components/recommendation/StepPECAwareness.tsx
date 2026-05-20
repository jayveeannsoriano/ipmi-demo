"use client"

import { useState } from "react"
import { YesNoStep } from "./YesNoStep"
import { Button } from "@/components/ui/button"

interface StepPECAwarenessProps {
  onYes: () => void
  /** onNo triggers the educational interstitial; the hard gate re-asks until YES */
  onNo: () => void
  onBack?: () => void
  /** How many times the user has already hit NO (drives educational messaging) */
  loopCount?: number
}

/**
 * StepPECAwareness — mandatory hard gate.
 * "Are you aware that pre-existing conditions are most often excluded?"
 * Answering NO shows an educational interstitial; the question is re-presented
 * until the user confirms YES. This implements the loop from AGENT.md §6.2.
 */
export function StepPECAwareness({
  onYes,
  onNo,
  onBack,
  loopCount = 0,
}: StepPECAwarenessProps) {
  const [showEducation, setShowEducation] = useState(false)

  function handleNo() {
    setShowEducation(true)
    onNo()
  }

  function handleDismissEducation() {
    setShowEducation(false)
  }

  return (
    <YesNoStep
      question="Are you aware that pre-existing medical conditions are most often excluded from IPMI policies?"
      subtext="A pre-existing condition is any illness, injury or medical condition you have been diagnosed with or received treatment for before your policy starts."
      onYes={onYes}
      onNo={handleNo}
      onBack={onBack}
      yesLabel="Yes, I understand"
      noLabel="No"
    >
      {showEducation && (
        <div
          role="alert"
          aria-live="polite"
          className="rounded-lg border border-amber-200 bg-amber-50 p-4 dark:border-amber-800 dark:bg-amber-950/30"
        >
          <p className="mb-2 text-sm font-semibold text-amber-800 dark:text-amber-200">
            ⚠ Important: Pre-existing condition exclusions
          </p>
          <p className="text-sm leading-relaxed text-amber-700 dark:text-amber-300">
            International Private Medical Insurance{" "}
            <strong>does not cover</strong> conditions you already have when you
            take out the policy. This includes ongoing conditions like diabetes,
            heart disease, asthma, or previous injuries.
            {loopCount > 0 && (
              <> You must acknowledge this before we can recommend a plan.</>
            )}
          </p>
          <p className="mt-2 text-xs text-amber-600 dark:text-amber-400">
            If you need cover for pre-existing conditions, our Health Compass
            plan offers Full Medical Underwriting which may include them — ask
            us about this option.
          </p>
          <Button
            size="sm"
            variant="outline"
            className="mt-3 border-amber-400 text-amber-800 hover:bg-amber-100 dark:text-amber-200"
            onClick={handleDismissEducation}
          >
            I understand — ask me again
          </Button>
        </div>
      )}
    </YesNoStep>
  )
}
