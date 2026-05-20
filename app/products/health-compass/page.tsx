import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { ProductDetail } from "@/components/products/ProductDetail"
import { QuoteForm } from "@/components/products/QuoteForm"
import { WhatsAppButton } from "@/components/shared/WhatsAppButton"
import { getProductById } from "@/lib/products"

export const metadata: Metadata = {
  title: "Health Compass — Ernest Maude International",
  description:
    "Bespoke IPMI for complex needs and corporate expatriate programmes. Request a personalised quote today.",
}

export default function HealthCompassPage() {
  const product = getProductById("health-compass")
  if (!product) notFound()

  return (
    <>
      <Header />
      <main id="main-content" className="min-h-screen">
        <div className="mx-auto max-w-4xl space-y-16 px-6 py-16">
          <ProductDetail product={product} />

          {/* Quote form */}
          <div id="quote-form" className="scroll-mt-20">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold tracking-tight">
                Request your quote
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Fill in your details below and a specialist will respond within
                one business day.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6 md:p-8">
              <QuoteForm />
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
