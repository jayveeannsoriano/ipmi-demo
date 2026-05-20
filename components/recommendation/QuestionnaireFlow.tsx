"use client"

import { StepIndicator } from "@/components/shared/StepIndicator"
import { ProgressBar } from "@/components/layout/ProgressBar"
import { StepExpatriate } from "./StepExpatriate"
import { StepNewToIPMI } from "./StepNewToIPMI"
import { StepFullComparison } from "./StepFullComparison"
import { StepPreSelectedOptions } from "./StepPreSelectedOptions"
import { StepPECAwareness } from "./StepPECAwareness"
import { StepMajorMedicalOnly } from "./StepMajorMedicalOnly"
import { StepGroupMembership } from "./StepGroupMembership"
import { StepTrustStructure } from "./StepTrustStructure"
import { StepFMU } from "./StepFMU"
import { RecommendationResult } from "./RecommendationResult"
import { useQuestionnaire } from "@/hooks/useQuestionnaire"
import type { StepId } from "@/types/questionnaire"

// Maximum depth of the tree � used for progress calculation
const MAX_STEPS = 8

const STEP_LABELS: Partial<Record<StepId, string>> = {
  expatriate: "Expatriate",
  "new-to-ipmi": "Experience",
  "full-comparison": "Comparison",
  "pre-selected-options": "Options",
  "pec-awareness": "Pre-existing",
  "major-medical-only": "Cover level",
  "group-membership": "Group plan",
  "trust-structure": "Trust",
  fmu: "Underwriting",
}

const STEP_QUESTIONS: Partial<Record<StepId, string>> = {
  expatriate: "Tell us about where you live",
  "new-to-ipmi": "Your experience with IPMI",
  "full-comparison": "How would you like to explore options?",
  "pre-selected-options": "Your preferred approach",
  "pec-awareness": "Understanding your cover",
  "major-medical-only": "Coverage level preference",
  "group-membership": "Familiarity with group plans",
  "trust-structure": "Understanding the Trust structure",
  fmu: "Medical underwriting preference",
}

/**
 * QuestionnaireFlow � orchestrates the IPMI decision-tree questionnaire.
 * Routes between step components based on yes/no answers and the engine logic
 * defined in AGENT.md �6.2. Handles the PEC hard gate loop.
 */
export function QuestionnaireFlow() {
  const { state, answer, goBack, reset } = useQuestionnaire()
  const {
    currentStepId,
    stepHistory,
    recommendation,
    isComplete,
    pecLoopCount,
  } = state

  const currentStepNum = stepHistory.length + 1

  if (isComplete && recommendation) {
    return (
      <RecommendationResult recommendation={recommendation} onReset={reset} />
    )
  }

  const canGoBack = stepHistory.length > 0
  const question = STEP_QUESTIONS[currentStepId]
  const visibleSteps = Array.from(
    new Set([...stepHistory, currentStepId])
  ) as StepId[]

  return (
    <div className="space-y-6">
      {/* Progress */}
      <ProgressBar currentStep={currentStepNum} totalSteps={MAX_STEPS} />
      <StepIndicator
        currentStep={currentStepNum}
        totalSteps={Math.max(MAX_STEPS, visibleSteps.length)}
        labels={visibleSteps.map((id) => STEP_LABELS[id] ?? id)}
      />

      {/* Question heading */}
      {question && (
        <div
          key={currentStepId}
          className="animate-in duration-200 fade-in-0 slide-in-from-bottom-1"
        >
          <h2 className="text-xl font-semibold tracking-tight">{question}</h2>
        </div>
      )}

      {/* Step content */}
      <div
        key={`${currentStepId}-${pecLoopCount}`}
        className="animate-in duration-200 fade-in-0 slide-in-from-bottom-2"
      >
        {currentStepId === "expatriate" && (
          <StepExpatriate
            onYes={() => answer("expatriate", true)}
            onNo={() => answer("expatriate", false)}
          />
        )}
        {currentStepId === "new-to-ipmi" && (
          <StepNewToIPMI
            onYes={() => answer("new-to-ipmi", true)}
            onNo={() => answer("new-to-ipmi", false)}
            onBack={canGoBack ? goBack : undefined}
          />
        )}
        {currentStepId === "full-comparison" && (
          <StepFullComparison
            onYes={() => answer("full-comparison", true)}
            onNo={() => answer("full-comparison", false)}
            onBack={canGoBack ? goBack : undefined}
          />
        )}
        {currentStepId === "pre-selected-options" && (
          <StepPreSelectedOptions
            onYes={() => answer("pre-selected-options", true)}
            onNo={() => answer("pre-selected-options", false)}
            onBack={canGoBack ? goBack : undefined}
          />
        )}
        {currentStepId === "pec-awareness" && (
          <StepPECAwareness
            onYes={() => answer("pec-awareness", true)}
            onNo={() => answer("pec-awareness", false)}
            onBack={canGoBack ? goBack : undefined}
            loopCount={pecLoopCount}
          />
        )}
        {currentStepId === "major-medical-only" && (
          <StepMajorMedicalOnly
            onYes={() => answer("major-medical-only", true)}
            onNo={() => answer("major-medical-only", false)}
            onBack={canGoBack ? goBack : undefined}
          />
        )}
        {currentStepId === "group-membership" && (
          <StepGroupMembership
            onYes={() => answer("group-membership", true)}
            onNo={() => answer("group-membership", false)}
            onBack={canGoBack ? goBack : undefined}
          />
        )}
        {currentStepId === "trust-structure" && (
          <StepTrustStructure
            onYes={() => answer("trust-structure", true)}
            onNo={() => answer("trust-structure", false)}
            onBack={canGoBack ? goBack : undefined}
          />
        )}
        {currentStepId === "fmu" && (
          <StepFMU
            onYes={() => answer("fmu", true)}
            onNo={() => answer("fmu", false)}
            onBack={canGoBack ? goBack : undefined}
          />
        )}
      </div>
    </div>
  )
}
