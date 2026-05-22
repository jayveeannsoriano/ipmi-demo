import { LucideIcon } from "lucide-react"

export type ProductId =
  | "medical-membership"
  | "expatriate-healthcare"
  | "health-compass"

export type PriceTier = "economy" | "mid" | "premium"

export type Benefit = {
  icon: string | LucideIcon
  title: string
  description: string
}

export type FeatureValue = boolean | string

export type FeatureMatrix = {
  coverageArea: string
  emergencyCare: FeatureValue
  dental: FeatureValue
  vision: FeatureValue
  maternity: FeatureValue
  preExisting: FeatureValue
  repatriation: FeatureValue
  corporate: FeatureValue
  priceTier: PriceTier
}

export type Product = {
  id: ProductId
  name: string
  tagline: string
  description: string
  idealFor: string[]
  keyBenefits: Benefit[]
  features: FeatureMatrix
  /** How the visitor is handed off — all products route to external platforms */
  handoffType: "direct-purchase" | "ai-comparison-quote"
  /** External platform URL — the single handoff destination for this product */
  externalUrl: string
  ctaLabel: string
  priceTier: PriceTier
  badge?: string
  /**
   * True for Medical Membership Program — price is fixed regardless of age or
   * gender, so no quotation step is needed before handoff.
   */
  fixedPrice?: boolean
  /**
   * True for Options 1 & 2 — preferred conversion targets due to 24/7
   * straight-through digital purchase. Influences visual priority in the UI.
   */
  preferredOption?: boolean
  /**
   * Pre-handoff expectation copy shown on the recommendation result screen
   * before the user clicks through. Required for Health Compass (Option 3)
   * which involves a wet-ink application and analogue follow-up.
   */
  handoffWarning?: string
}
