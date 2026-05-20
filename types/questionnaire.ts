import type { ProductId } from "./products"

export type QuestionnaireAnswers = {
  isExpatriate: boolean
  isNewToIPMI: boolean
  wantsFullComparison: boolean
  acceptsPreSelectedOptions: boolean
  awarePECExclusion: boolean // hard gate — loop until true
  acceptsMajorMedicalOnly: boolean
  familiarWithGroupMembership: boolean
  understandsTrustStructure: boolean
  requiresFMU: boolean
}

export type StepId =
  | "expatriate"
  | "new-to-ipmi"
  | "full-comparison"
  | "pre-selected-options"
  | "pec-awareness"
  | "major-medical-only"
  | "group-membership"
  | "trust-structure"
  | "fmu"

export type RecommendationOutcome =
  | "medical-membership"
  | "expatriate-healthcare"
  | "health-compass"
  | "standard-contract"

export type Recommendation = {
  primary: RecommendationOutcome
  rationale: string[]
  alternatives: ProductId[]
}

export type QuestionnaireState = {
  currentStepId: StepId
  stepHistory: StepId[]
  answers: Partial<QuestionnaireAnswers>
  recommendation: Recommendation | null
  isComplete: boolean
  pecLoopCount: number
}

export type QuestionnaireAction =
  | { type: "ANSWER"; stepId: StepId; value: boolean }
  | { type: "BACK" }
  | { type: "PEC_LOOP" }
  | { type: "SET_RECOMMENDATION"; payload: Recommendation }
  | { type: "RESET" }
  | { type: "RESTORE"; payload: QuestionnaireState }
