import Link from "next/link"
import { Button } from "@/components/ui/button"

/**
 * Header — site-wide navigation for Ernest Maude IPMI platform.
 * Includes logo, main nav links, and a persistent CTA.
 */
export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          {/* <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
            <span className="text-xs font-bold text-primary-foreground">
              EM
            </span>
          </div> */}
          <span className="font-semibold tracking-tight text-primary">
            International Private Medical Insurance
            {/* <span className="text-primary">International</span> */}
          </span>
        </Link>

        {/* Nav */}
        <nav className="hidden items-center gap-6 md:flex">
          <Link
            href="/"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Home
          </Link>
          <Link
            href="/compare"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Compare Plans
          </Link>
          <Link
            href="/products/medical-membership"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Medical Membership
          </Link>
          <Link
            href="/products/expatriate-healthcare"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Expat Healthcare
          </Link>
          <Link
            href="/products/health-compass"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Health Compass
          </Link>
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" asChild className="hidden sm:flex">
            <Link href="/compare">Compare</Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="/recommend">Find My Plan</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
