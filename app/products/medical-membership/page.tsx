import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { ProductDetail } from "@/components/products/ProductDetail"
import { WhatsAppButton } from "@/components/shared/WhatsAppButton"
import { getProductById } from "@/lib/products"

export const metadata: Metadata = {
  title: "Medical Membership Program — Ernest Maude International",
  description:
    "Structured international medical membership for individuals and families. Purchase online in minutes.",
}

export default function MedicalMembershipPage() {
  const product = getProductById("medical-membership")
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
