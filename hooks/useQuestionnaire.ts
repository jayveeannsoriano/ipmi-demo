"use client"

import { useReducer, useEffect, useCallback } from "react"
import type {
  QuestionnaireState,
  QuestionnaireAction,
  QuestionnaireAnswers,
  StepId,
  Recommendation,
} from "@/types/questionnaire"
import { computeNextStep } from "@/lib/recommendation-engine"

const STORAGE_KEY = "ipmi_questionnaire"

const initialState: QuestionnaireState = {
  currentStepId: "expatriate",
  stepHistory: [],
  answers: {},
  recommendation: null,
  isComplete: false,
  pecLoopCount: 0,
}

// Answer key mapping from step ID to QuestionnaireAnswers key
const STEP_ANSWER_KEY: Partial<Record<StepId, keyof QuestionnaireAnswers>> = {
  expatriate: "isExpatriate",
  "new-to-ipmi": "isNewToIPMI",
  "full-comparison": "wantsFullComparison",
  "pre-selected-options": "acceptsPreSelectedOptions",
  "pec-awareness": "awarePECExclusion",
  "major-medical-only": "acceptsMajorMedicalOnly",
  "group-membership": "familiarWithGroupMembership",
  "trust-structure": "understandsTrustStructure",
  fmu: "requiresFMU",
}

function reducer(
  state: QuestionnaireState,
  action: QuestionnaireAction
): QuestionnaireState {
  switch (action.type) {
    case "ANSWER": {
      const answerKey = STEP_ANSWER_KEY[action.stepId]
      const newAnswers = answerKey
        ? { ...state.answers, [answerKey]: action.value }
        : state.answers

      const result = computeNextStep(action.stepId, action.value, newAnswers)

      if (result.type === "recommendation") {
        return {
          ...state,
          answers: newAnswers,
          recommendation: result.recommendation,
          isComplete: true,
        }
      }

      // Check if this is the PEC loop (stayed on pec-awareness after NO)
      if (
        result.stepId === "pec-awareness" &&
        action.stepId === "pec-awareness" &&
        !action.value
      ) {
        return {
          ...state,
          answers: newAnswers,
          pecLoopCount: state.pecLoopCount + 1,
          // currentStepId stays pec-awareness, don't push to history
        }
      }

      // FMU NO loops back to pec-awareness — increment counter
      if (
        result.stepId === "pec-awareness" &&
        action.stepId === "fmu" &&
        !action.value
      ) {
        return {
          ...state,
          answers: newAnswers,
          currentStepId: "pec-awareness",
          stepHistory: [...state.stepHistory, action.stepId],
          pecLoopCount: state.pecLoopCount + 1,
        }
      }

      return {
        ...state,
        answers: newAnswers,
        currentStepId: result.stepId,
        stepHistory: [...state.stepHistory, action.stepId],
      }
    }

    case "BACK": {
      if (state.stepHistory.length === 0) return state
      const prev = state.stepHistory[state.stepHistory.length - 1]
      return {
        ...state,
        currentStepId: prev,
        stepHistory: state.stepHistory.slice(0, -1),
      }
    }

    case "PEC_LOOP":
      return { ...state, pecLoopCount: state.pecLoopCount + 1 }

    case "SET_RECOMMENDATION":
      return { ...state, recommendation: action.payload, isComplete: true }

    case "RESET":
      return initialState

    case "RESTORE":
      return action.payload

    default:
      return state
  }
}

/**
 * useQuestionnaire — manages decision-tree questionnaire state with sessionStorage persistence.
 * Implements the IPMI recommendation decision tree from AGENT.md §6.2.
 */
export function useQuestionnaire() {
  const [state, dispatch] = useReducer(reducer, initialState)

  // Restore from sessionStorage on mount
  useEffect(() => {
    try {
      const stored = sessionStorage.getItem(STORAGE_KEY)
      if (stored) {
        const parsed = JSON.parse(stored) as QuestionnaireState
        dispatch({ type: "RESTORE", payload: parsed })
      }
    } catch {
      /* ignore */
    }
  }, [])

  // Persist on state change
  useEffect(() => {
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(state))
    } catch {
      /* ignore */
    }
  }, [state])

  const answer = useCallback((stepId: StepId, value: boolean) => {
    dispatch({ type: "ANSWER", stepId, value })
  }, [])

  const goBack = useCallback(() => {
    dispatch({ type: "BACK" })
  }, [])

  const reset = useCallback(() => {
    sessionStorage.removeItem(STORAGE_KEY)
    dispatch({ type: "RESET" })
  }, [])

  const setRecommendation = useCallback((rec: Recommendation) => {
    dispatch({ type: "SET_RECOMMENDATION", payload: rec })
  }, [])

  return { state, answer, goBack, reset, setRecommendation }
}
