import type { ProductId } from "@/types/products"

/**
 * Per-product colour tokens used across ProductCards and ProductDetail.
 * Muted, professional palette. All Tailwind classes listed statically.
 */
export type ProductColorScheme = {
  /** Subtle left-border accent */
  border: string
  /** Very light tinted header background */
  heroBg: string
  /** Muted accent text (product name) */
  text: string
  /** Badge chip colours */
  badgeBg: string
  /** Check-mark tick colour */
  check: string
  /** CTA button bg + hover */
  ctaBg: string
  /** Icon container */
  iconBg: string
}

export const PRODUCT_COLORS: Record<ProductId, ProductColorScheme> = {
  "medical-membership": {
    border: "border-l-4 border-l-teal-600",
    heroBg: "bg-teal-50/60 dark:bg-teal-950/20",
    text: "text-teal-800 dark:text-teal-300",
    badgeBg:
      "bg-teal-100/80 text-teal-800 dark:bg-teal-900/60 dark:text-teal-300",
    check: "text-teal-600 dark:text-teal-400",
    ctaBg: "bg-teal-700 hover:bg-teal-800",
    iconBg:
      "bg-teal-100/70 text-teal-700 dark:bg-teal-900/50 dark:text-teal-300",
  },
  "expatriate-healthcare": {
    border: "border-l-4 border-l-slate-500",
    heroBg: "bg-slate-50/60 dark:bg-slate-900/30",
    text: "text-slate-800 dark:text-slate-200",
    badgeBg:
      "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300",
    check: "text-slate-500 dark:text-slate-400",
    ctaBg: "bg-slate-700 hover:bg-slate-800",
    iconBg: "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300",
  },
  "health-compass": {
    border: "border-l-4 border-l-amber-600",
    heroBg: "bg-amber-50/50 dark:bg-amber-950/20",
    text: "text-amber-900 dark:text-amber-300",
    badgeBg:
      "bg-amber-100/80 text-amber-800 dark:bg-amber-900/50 dark:text-amber-300",
    check: "text-amber-600 dark:text-amber-400",
    ctaBg: "bg-amber-700 hover:bg-amber-800",
    iconBg:
      "bg-amber-100/70 text-amber-700 dark:bg-amber-900/50 dark:text-amber-300",
  },
}
