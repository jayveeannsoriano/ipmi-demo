import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Compass, LayoutGrid } from "lucide-react"

/**
 * JourneySelector — presents two entry paths: guided "Find My Plan" flow
 * and the direct "Browse All Plans" route. Layout mirrors a split CTA panel:
 * left = primary action card, right = two stacked secondary option tiles.
 */
export function JourneySelector() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="overflow-hidden rounded-xl border border-border shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_400px]">
            {/* ── Left: primary CTA ── */}
            <div className="flex flex-col justify-center gap-6 p-10">
              <Badge variant="outline" className="w-fit text-xs">
                Find Your Plan
              </Badge>
              <div className="space-y-3">
                <h2 className="text-3xl font-bold tracking-tight text-foreground">
                  Not sure which plan is right for you?
                </h2>
                <p className="max-w-sm text-base leading-relaxed text-muted-foreground">
                  Answer a few quick questions about your situation and we'll
                  match you to the IPMI plan that fits — no jargon, no pressure.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="rounded-md px-6">
                  <Link href="/recommend">Get My Recommendation</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-md px-6"
                >
                  <Link href="/compare">Browse All Plans</Link>
                </Button>
              </div>
            </div>

            {/* ── Right: two secondary option tiles ── */}
            <div className="divide-y divide-border border-l border-border">
              {/* Tile 1 — Guided flow */}
              <div className="flex items-start gap-4 p-8">
                <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-muted">
                  <Compass className="h-5 w-5 text-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">
                    Guided Recommendation
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    Answer a short decision-tree questionnaire and receive a
                    personalised IPMI match in under 2 minutes.
                  </p>
                </div>
              </div>

              {/* Tile 2 — Compare all */}
              <div className="flex items-start gap-4 p-8">
                <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-muted">
                  <LayoutGrid className="h-5 w-5 text-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">
                    Compare All Plans
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    Already know what you need? View all three plans side by
                    side and choose with confidence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
