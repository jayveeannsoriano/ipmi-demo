import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

/**
 * JourneySelector — presents two entry paths: guided "Find My Plan" flow
 * and the direct "Browse All Plans" route.
 */
export function JourneySelector() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-semibold tracking-tight">
            How would you like to start?
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Choose the path that suits you best.
          </p>
        </div>

        <div className="mx-auto grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2">
          {/* Guided path */}
          <Card className="group relative overflow-hidden border-primary/30 bg-primary/5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
            <CardContent className="flex flex-col items-start gap-4 p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-lg text-primary">
                🧭
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Find My Plan</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Answer 6 quick questions and receive a personalised
                  recommendation — no jargon, no pressure.
                </p>
              </div>
              <Button asChild className="mt-auto w-full">
                <Link href="/recommend">Get My Recommendation</Link>
              </Button>
            </CardContent>
          </Card>

          {/* Direct path */}
          <Card className="group relative overflow-hidden transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
            <CardContent className="flex flex-col items-start gap-4 p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-muted text-lg">
                📋
              </div>
              <div>
                <h3 className="font-semibold text-foreground">
                  Browse All Plans
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Already know what you need? Browse and compare all three IPMI
                  plans side by side.
                </p>
              </div>
              <Button variant="outline" asChild className="mt-auto w-full">
                <Link href="/compare">Compare Plans</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
