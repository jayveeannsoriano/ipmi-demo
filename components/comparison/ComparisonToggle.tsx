"use client"

import { Button } from "@/components/ui/button"

interface ComparisonToggleProps {
  isDetailed: boolean
  onToggle: () => void
}

/**
 * ComparisonToggle — switches between summarised and detailed feature views
 * in the comparison table.
 */
export function ComparisonToggle({
  isDetailed,
  onToggle,
}: ComparisonToggleProps) {
  return (
    <div className="flex items-center gap-2 rounded-lg border border-border bg-muted/30 p-1">
      <Button
        size="sm"
        variant={!isDetailed ? "default" : "ghost"}
        onClick={() => !isDetailed || onToggle()}
        className="text-xs"
        aria-pressed={!isDetailed}
      >
        Summary
      </Button>
      <Button
        size="sm"
        variant={isDetailed ? "default" : "ghost"}
        onClick={() => isDetailed || onToggle()}
        className="text-xs"
        aria-pressed={isDetailed}
      >
        Detailed
      </Button>
    </div>
  )
}
