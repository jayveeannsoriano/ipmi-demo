import type { Benefit } from "@/types/products"

interface BenefitsListProps {
  benefits: Benefit[]
}

/**
 * BenefitsList — renders a grid of product key benefits with icon and description.
 */
export function BenefitsList({ benefits }: BenefitsListProps) {
  return (
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2" role="list">
      {benefits.map((benefit) => (
        <li
          key={benefit.title}
          className="flex items-start gap-3 rounded-lg border border-border/50 bg-card p-4"
        >
          <div
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-primary/10 text-lg text-primary"
            aria-hidden="true"
          >
            ✦
          </div>
          <div>
            <p className="text-sm font-medium">{benefit.title}</p>
            <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
              {benefit.description}
            </p>
          </div>
        </li>
      ))}
    </ul>
  )
}
