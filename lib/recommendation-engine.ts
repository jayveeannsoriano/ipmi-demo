import type {
  QuestionnaireAnswers,
  Recommendation,
  RecommendationOutcome,
  StepId,
} from "@/types/questionnaire"
import type { ProductId } from "@/types/products"

/**
 * Decision-tree recommendation engine for IPMI product matching.
 *
 * Implements the exact tree defined in AGENT.md §6.2:
 *   expatriate? → NO → standard-contract
 *   expatriate? → YES → new-to-ipmi?
 *     new-to-ipmi? → YES → full-comparison?
 *       full-comparison? → YES → [Branch A]
 *       full-comparison? → NO  → pre-selected-options? → [Branch A either way]
 *     new-to-ipmi? → NO (experienced) → [Branch A]
 *
 * Branch A:
 *   pec-awareness? → NO  → loop (hard gate)
 *   pec-awareness? → YES → major-medical-only?
 *     major-medical-only? → YES → group-membership?
 *       group-membership? → YES → trust-structure?
 *         trust-structure? → YES → medical-membership
 *         trust-structure? → NO  → expatriate-healthcare
 *       group-membership? → NO  → expatriate-healthcare
 *     major-medical-only? → NO  → fmu?
 *       fmu? → YES → health-compass
 *       fmu? → NO  → loop back to pec-awareness
 */

type NextStepResult =
  | { type: "step"; stepId: StepId }
  | { type: "recommendation"; recommendation: Recommendation }

const RATIONALE: Record<RecommendationOutcome, string[]> = {
  "medical-membership": [
    "You are an expatriate who understands that pre-existing conditions are generally excluded.",
    "You are comfortable with major medical hospitalisation cover as your primary protection.",
    "You are familiar with group membership schemes and understand the Trust structure.",
    "The Medical Membership Program gives you structured, cost-effective worldwide cover.",
  ],
  "expatriate-healthcare": [
    "You are an expatriate who understands the pre-existing condition exclusions.",
    "You need comprehensive cover beyond major medical hospitalisation alone.",
    "Expatriate Healthcare is purpose-built for individuals living and working outside their home country.",
  ],
  "health-compass": [
    "You are an expatriate who requires Full Medical Underwriting to assess pre-existing conditions.",
    "Health Compass provides bespoke, broker-assisted cover with broader underwriting options.",
    "A dedicated advisor will work with you to structure the most suitable policy.",
  ],
  "standard-contract": [
    "Based on your answers, a standard domestic health insurance contract is likely more appropriate.",
    "Our IPMI plans are designed specifically for expatriates living or working abroad.",
    "Please speak to an advisor who can direct you to the right domestic product.",
  ],
}

const ALTERNATIVES: Record<RecommendationOutcome, ProductId[]> = {
  "medical-membership": ["expatriate-healthcare", "health-compass"],
  "expatriate-healthcare": ["medical-membership", "health-compass"],
  "health-compass": ["expatriate-healthcare", "medical-membership"],
  "standard-contract": ["expatriate-healthcare", "medical-membership"],
}

function makeRecommendation(outcome: RecommendationOutcome): Recommendation {
  return {
    primary: outcome,
    rationale: RATIONALE[outcome],
    alternatives: ALTERNATIVES[outcome],
  }
}

/**
 * computeNextStep — given the current step, the boolean answer provided,
 * and accumulated answers so far, returns either the next step ID or a final
 * recommendation. The PEC loop is handled externally in the hook/flow component.
 */
export function computeNextStep(
  currentStep: StepId,
  answer: boolean,
  _answers: Partial<QuestionnaireAnswers>
): NextStepResult {
  switch (currentStep) {
    case "expatriate":
      if (!answer) {
        return {
          type: "recommendation",
          recommendation: makeRecommendation("standard-contract"),
        }
      }
      return { type: "step", stepId: "new-to-ipmi" }

    case "new-to-ipmi":
      if (answer) {
        return { type: "step", stepId: "full-comparison" }
      }
      // experienced user → Branch A
      return { type: "step", stepId: "pec-awareness" }

    case "full-comparison":
      if (answer) {
        // YES → Branch A directly
        return { type: "step", stepId: "pec-awareness" }
      }
      // NO → ask about pre-selected options first
      return { type: "step", stepId: "pre-selected-options" }

    case "pre-selected-options":
      // Either YES or NO → Branch A
      return { type: "step", stepId: "pec-awareness" }

    case "pec-awareness":
      if (!answer) {
        // Hard gate: signal loop — caller must increment pecLoopCount and re-show this step
        return { type: "step", stepId: "pec-awareness" }
      }
      return { type: "step", stepId: "major-medical-only" }

    case "major-medical-only":
      if (answer) {
        return { type: "step", stepId: "group-membership" }
      }
      return { type: "step", stepId: "fmu" }

    case "group-membership":
      if (answer) {
        return { type: "step", stepId: "trust-structure" }
      }
      return {
        type: "recommendation",
        recommendation: makeRecommendation("expatriate-healthcare"),
      }

    case "trust-structure":
      if (answer) {
        return {
          type: "recommendation",
          recommendation: makeRecommendation("medical-membership"),
        }
      }
      return {
        type: "recommendation",
        recommendation: makeRecommendation("expatriate-healthcare"),
      }

    case "fmu":
      if (answer) {
        return {
          type: "recommendation",
          recommendation: makeRecommendation("health-compass"),
        }
      }
      // NO → loop back to pec-awareness
      return { type: "step", stepId: "pec-awareness" }
  }
}
