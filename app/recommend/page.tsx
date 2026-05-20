import type { Metadata } from "next"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { QuestionnaireFlow } from "@/components/recommendation/QuestionnaireFlow"
import { WhatsAppButton } from "@/components/shared/WhatsAppButton"

export const metadata: Metadata = {
  title: "Find My IPMI Plan — Ernest Maude International",
  description:
    "Answer 6 quick questions to receive a personalised international health insurance recommendation.",
}

export default function RecommendPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="min-h-screen">
        <div className="mx-auto max-w-2xl px-6 py-16">
          <div className="mb-8">
            <h1 className="text-2xl font-semibold tracking-tight">
              Find your perfect plan
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
              A few questions to help us point you to the right IPMI solution.
            </p>
          </div>

          <QuestionnaireFlow />
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
