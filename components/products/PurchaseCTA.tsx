import Link from "next/link"
import { Button } from "@/components/ui/button"

interface PurchaseCTAProps {
  label: string
  href: string
  purchasePath: "direct" | "quote"
  className?: string
}

/**
 * PurchaseCTA — renders the primary conversion button for a product.
 * Direct-purchase products get a strong primary CTA; quote products
 * get a secondary variant with appropriate messaging.
 */
export function PurchaseCTA({
  label,
  href,
  purchasePath,
  className,
}: PurchaseCTAProps) {
  return (
    <div className={["flex flex-col items-start gap-2", className].join(" ")}>
      <Button size="lg" asChild className="w-full sm:w-auto">
        <Link href={href}>{label}</Link>
      </Button>
      <p className="text-xs text-muted-foreground">
        {purchasePath === "direct"
          ? "Purchase online in minutes — no broker needed."
          : "A specialist will respond within one business day."}
      </p>
    </div>
  )
}
