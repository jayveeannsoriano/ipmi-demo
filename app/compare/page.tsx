import type { Metadata } from "next"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { ComparisonTable } from "@/components/comparison/ComparisonTable"
import { WhatsAppButton } from "@/components/shared/WhatsAppButton"

export const metadata: Metadata = {
  title: "Compare IPMI Plans — Ernest Maude International",
  description:
    "Side-by-side comparison of all three Ernest Maude International IPMI plans.",
}

export default function ComparePage() {
  return (
    <>
      <Header />
      <main id="main-content" className="min-h-screen">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="mb-10">
            <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Compare all plans
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
              See how our three IPMI solutions stack up — toggle between a quick
              summary and full feature details.
            </p>
          </div>

          <ComparisonTable />
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
