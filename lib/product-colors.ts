import type { ProductId } from "@/types/products"

/**
 * Per-product colour tokens used across ProductCards and ProductDetail.
 * All Tailwind classes are listed statically so Tailwind can detect them.
 */
export type ProductColorScheme = {
  /** Thick top-border on a card */
  border: string
  /** Light tinted background for the hero strip */
  heroBg: string
  /** Accent text colour (product name / heading) */
  text: string
  /** Badge background + text */
  badgeBg: string
  /** Check-mark / tick colour */
  check: string
  /** CTA button accent (bg) */
  ctaBg: string
  /** CTA button accent (hover bg) */
  ctaHover: string
}

export const PRODUCT_COLORS: Record<ProductId, ProductColorScheme> = {
  "medical-membership": {
    border: "border-t-emerald-500",
    heroBg: "bg-emerald-50 dark:bg-emerald-950/40",
    text: "text-emerald-700 dark:text-emerald-400",
    badgeBg:
      "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200",
    check: "text-emerald-600 dark:text-emerald-400",
    ctaBg: "bg-emerald-600 hover:bg-emerald-700",
    ctaHover: "hover:bg-emerald-700",
  },
  "expatriate-healthcare": {
    border: "border-t-blue-500",
    heroBg: "bg-blue-50 dark:bg-blue-950/40",
    text: "text-blue-700 dark:text-blue-400",
    badgeBg: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
    check: "text-blue-600 dark:text-blue-400",
    ctaBg: "bg-blue-600 hover:bg-blue-700",
    ctaHover: "hover:bg-blue-700",
  },
  "health-compass": {
    border: "border-t-amber-500",
    heroBg: "bg-amber-50 dark:bg-amber-950/40",
    text: "text-amber-700 dark:text-amber-400",
    badgeBg:
      "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200",
    check: "text-amber-600 dark:text-amber-400",
    ctaBg: "bg-amber-600 hover:bg-amber-700",
    ctaHover: "hover:bg-amber-700",
  },
}
