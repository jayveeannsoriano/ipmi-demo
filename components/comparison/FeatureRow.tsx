interface FeatureRowProps {
  label: string
  values: (boolean | string)[]
  isDetailed?: boolean
}

function FeatureCell({ value }: { value: boolean | string }) {
  if (typeof value === "boolean") {
    return (
      <td className="px-4 py-3 text-center text-sm">
        {value ? (
          <span className="font-medium text-primary" aria-label="Included">
            ✓
          </span>
        ) : (
          <span className="text-muted-foreground" aria-label="Not included">
            —
          </span>
        )}
      </td>
    )
  }
  return (
    <td className="px-4 py-3 text-center text-xs text-muted-foreground">
      {value}
    </td>
  )
}

/**
 * FeatureRow — renders a single feature row in the comparison table,
 * with label and a cell per product.
 */
export function FeatureRow({ label, values, isDetailed }: FeatureRowProps) {
  if (!isDetailed && values.every((v) => typeof v === "boolean" && v)) {
    // Hide uniform true rows in summary view
    return null
  }

  return (
    <tr className="border-t border-border/50 transition-colors hover:bg-muted/30">
      <td className="sticky left-0 min-w-40 bg-background px-4 py-3 text-sm font-medium text-foreground">
        {label}
      </td>
      {values.map((val, i) => (
        <FeatureCell key={i} value={val} />
      ))}
    </tr>
  )
}
