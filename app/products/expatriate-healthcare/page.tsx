import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { ProductDetail } from "@/components/products/ProductDetail"
import { WhatsAppButton } from "@/components/shared/WhatsAppButton"
import { getProductById } from "@/lib/products"

export const metadata: Metadata = {
  title: "Expatriate Healthcare — Ernest Maude International",
  description:
    "Purpose-built international health insurance for expatriates living and working abroad. Purchase online.",
}

export default function ExpatriateHealthcarePage() {
  const product = getProductById("expatriate-healthcare")
  if (!product) notFound()

  return (
    <>
      <Header />
      <main id="main-content" className="min-h-screen">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <ProductDetail product={product} />
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
