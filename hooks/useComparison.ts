"use client"

import { useState, useCallback } from "react"
import type { ProductId } from "@/types/products"

/**
 * useComparison — manages which products are selected for comparison
 * and whether the detailed view is active.
 */
export function useComparison() {
  const [selectedIds, setSelectedIds] = useState<ProductId[]>([
    "medical-membership",
    "expatriate-healthcare",
    "health-compass",
  ])
  const [isDetailed, setIsDetailed] = useState(false)

  const toggleProduct = useCallback((id: ProductId) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    )
  }, [])

  const toggleView = useCallback(() => {
    setIsDetailed((prev) => !prev)
  }, [])

  return { selectedIds, isDetailed, toggleProduct, toggleView }
}
