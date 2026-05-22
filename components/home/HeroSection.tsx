import Link from "next/link"
import { Button } from "@/components/ui/button"

/**
 * HeroSection — landing page hero with headline, subtext and primary CTAs.
 * Sets the premium, trustworthy tone of the IPMI platform.
 */
export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-45">
      {/* Background gradient */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-br from-primary/5 via-background to-background"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-0 -z-10 h-125 w-125 rounded-full bg-primary/5 blur-3xl"
      />

      <div className="mx-auto max-w-4xl px-6 text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
          International Private Medical Insurance
        </div>

        <h1 className="mb-6 text-4xl font-semibold tracking-tight text-foreground md:text-5xl lg:text-6xl">
          World-class healthcare,{" "}
          <span className="text-primary">wherever you are</span>
        </h1>

        <p className="mx-auto mb-10 max-w-2xl text-base text-muted-foreground md:text-lg">
          Tailored international health insurance for expatriates, frequent
          travellers and global businesses. Find the plan that fits your life —
          in minutes.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" asChild className="w-full sm:w-auto">
            <Link href="/recommend">
              Find My Plan
              <span aria-hidden="true" className="ml-2">
                →
              </span>
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="w-full sm:w-auto"
          >
            <Link href="/compare">Compare All Plans</Link>
          </Button>
        </div>

        <p className="mt-6 text-xs text-muted-foreground">
          Takes 2 minutes · No commitment required
        </p>
      </div>
    </section>
  )
}
