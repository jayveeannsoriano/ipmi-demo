export type ProductId =
  | "medical-membership"
  | "expatriate-healthcare"
  | "health-compass"

export type PriceTier = "economy" | "mid" | "premium"

export type Benefit = {
  icon: string
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
  purchasePath: "direct" | "quote"
  ctaLabel: string
  ctaUrl: string
  priceTier: PriceTier
  badge?: string
}
