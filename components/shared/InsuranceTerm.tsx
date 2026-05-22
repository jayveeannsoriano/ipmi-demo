"use client"

import { Tooltip } from "./Tooltip"

interface InsuranceTermProps {
  term: string
  definition: string
}

/**
 * InsuranceTerm — renders an insurance term inline with a tooltip definition.
 * Allows plain-English explanations of industry jargon inline in content.
 */
export function InsuranceTerm({ term, definition }: InsuranceTermProps) {
  return (
    <Tooltip content={definition}>
      <span
        tabIndex={0}
        aria-label={`${term}: ${definition}`}
        className="cursor-help border-b border-dashed border-muted-foreground/50 text-foreground hover:text-primary focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-none"
      >
        {term}
      </span>
    </Tooltip>
  )
}
