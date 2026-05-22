import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { ProductDetail } from "@/components/products/ProductDetail"
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
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
