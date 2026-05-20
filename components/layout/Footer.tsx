import Link from "next/link"

/**
 * Footer — site-wide footer with navigation links and legal copy.
 */
export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="mb-4 flex items-center gap-2">
              <span className="text-sm font-semibold">
                International Private Medical Insurance
              </span>
            </div>
            <p className="text-xs leading-relaxed text-muted-foreground">
              Premium international private medical insurance for individuals,
              families, and businesses worldwide.
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="mb-3 text-xs font-semibold tracking-wider text-foreground uppercase">
              Products
            </h4>
            <ul className="space-y-2">
              {[
                {
                  label: "Medical Membership",
                  href: "/products/medical-membership",
                },
                {
                  label: "Expatriate Healthcare",
                  href: "/products/expatriate-healthcare",
                },
                { label: "Health Compass", href: "/products/health-compass" },
                { label: "Compare All Plans", href: "/compare" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-3 text-xs font-semibold tracking-wider text-foreground uppercase">
              Company
            </h4>
            <ul className="space-y-2">
              {[
                { label: "About Us", href: "#" },
                { label: "Contact", href: "#" },
                { label: "Broker Partners", href: "#" },
                {
                  label: "Corporate Solutions",
                  href: "/products/health-compass",
                },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="mb-3 text-xs font-semibold tracking-wider text-foreground uppercase">
              Support
            </h4>
            <ul className="space-y-2">
              {[
                { label: "FAQs", href: "#" },
                { label: "Claims", href: "#" },
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Use", href: "#" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border/50 pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Ernest Maude International. All rights
            reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Regulated by the Financial Conduct Authority
          </p>
        </div>
      </div>
    </footer>
  )
}
