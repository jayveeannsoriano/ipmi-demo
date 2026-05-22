import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import type { Recommendation } from "@/types/questionnaire"
import { getProductById } from "@/lib/products"

interface RecommendationResultProps {
  recommendation: Recommendation
  onReset: () => void
}

const STANDARD_CONTRACT_CONTENT = {
  title: "A standard domestic contract may be right for you",
  description:
    "Our IPMI plans are designed specifically for expatriates living or working outside their home country. Based on your answers, a standard domestic health insurance policy is likely to be more suitable and better value.",
  actions: [
    { label: "Contact Ernest Maude", href: "#", primary: true },
    {
      label: "Learn about our IPMI plans anyway",
      href: "/compare",
      primary: false,
    },
  ],
}

/**
 * RecommendationResult — displays the recommended IPMI plan (or standard-contract outcome)
 * with rationale and alternative options after the decision-tree questionnaire completes.
 */
export function RecommendationResult({
  recommendation,
  onReset,
}: RecommendationResultProps) {
  // Handle standard contract outcome separately
  if (recommendation.primary === "standard-contract") {
    return (
      <div className="animate-in space-y-6 duration-300 fade-in-0 slide-in-from-bottom-2">
        <Card className="border-muted">
          <CardHeader>
            <Badge variant="secondary" className="w-fit">
              Based on your answers
            </Badge>
            <h2 className="mt-2 text-xl font-semibold">
              {STANDARD_CONTRACT_CONTENT.title}
            </h2>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm leading-relaxed text-muted-foreground">
              {STANDARD_CONTRACT_CONTENT.description}
            </p>
            <div>
              <p className="mb-2 text-xs font-semibold tracking-wider uppercase">
                Why this recommendation?
              </p>
              <ul className="space-y-1.5">
                {recommendation.rationale.map((r, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <span
                      className="mt-0.5 text-muted-foreground"
                      aria-hidden="true"
                    >
                      •
                    </span>
                    {r}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              {STANDARD_CONTRACT_CONTENT.actions.map((a) => (
                <Button
                  key={a.label}
                  variant={a.primary ? "default" : "outline"}
                  asChild
                >
                  <Link href={a.href}>{a.label}</Link>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
        <div className="text-center">
          <button
            onClick={onReset}
            className="text-xs text-muted-foreground underline-offset-2 hover:underline"
          >
            Start again
          </button>
        </div>
      </div>
    )
  }

  const primary = getProductById(recommendation.primary)
  const alternatives = recommendation.alternatives
    .map((id) => getProductById(id))
    .filter(Boolean)

  if (!primary) return null

  return (
    <div className="animate-in space-y-8 duration-300 fade-in-0 slide-in-from-bottom-2">
      {/* Primary recommendation */}
      <div>
        <div className="mb-4 flex items-center gap-2">
          <Badge className="bg-primary/10 text-primary hover:bg-primary/20">
            ✦ Your recommended plan
          </Badge>
        </div>

        <Card className="overflow-hidden border-primary/30 bg-primary/5">
          <CardHeader>
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-xl font-semibold">{primary.name}</h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  {primary.tagline}
                </p>
              </div>
              {primary.badge && (
                <Badge variant="secondary">{primary.badge}</Badge>
              )}
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-sm leading-relaxed text-muted-foreground">
              {primary.description}
            </p>

            {/* Rationale */}
            <div>
              <p className="mb-2 text-xs font-semibold tracking-wider uppercase">
                Why this plan?
              </p>
              <ul className="space-y-1.5">
                {recommendation.rationale.map((reason, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <span className="mt-0.5 text-primary" aria-hidden="true">
                      ✓
                    </span>
                    {reason}
                  </li>
                ))}
              </ul>
            </div>

            {/* Key benefits */}
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {primary.keyBenefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="rounded-md bg-background/80 p-3 text-center"
                >
                  <p className="text-xs font-medium">{benefit.title}</p>
                  <p className="mt-0.5 line-clamp-2 text-xs text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <Button asChild className="flex-1 sm:flex-none">
                <Link
                  href={primary.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {primary.ctaLabel}
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/compare">Compare all plans</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Alternatives */}
      {alternatives.length > 0 && (
        <div>
          <h3 className="mb-3 text-sm font-semibold tracking-wider text-muted-foreground uppercase">
            Alternative options
          </h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {alternatives.map((alt) => {
              if (!alt) return null
              return (
                <Card
                  key={alt.id}
                  className="transition-all duration-200 hover:shadow-sm"
                >
                  <CardContent className="p-4">
                    <p className="text-sm font-medium">{alt.name}</p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {alt.tagline}
                    </p>
                    <Button
                      variant="link"
                      size="sm"
                      asChild
                      className="mt-2 h-auto p-0 text-xs"
                    >
                      <Link
                        href={alt.externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Learn more →
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      )}

      <div className="text-center">
        <button
          onClick={onReset}
          className="text-xs text-muted-foreground underline-offset-2 hover:underline"
        >
          Start again
        </button>
      </div>
    </div>
  )
}
