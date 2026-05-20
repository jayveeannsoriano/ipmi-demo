import type { Metadata } from "next"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { HeroSection } from "@/components/home/HeroSection"
import { JourneySelector } from "@/components/home/JourneySelector"
import { ProductCards } from "@/components/home/ProductCards"
import { WhatsAppButton } from "@/components/shared/WhatsAppButton"

export const metadata: Metadata = {
  title: "Ernest Maude International — IPMI Plans",
  description:
    "International private medical insurance for expatriates, frequent travellers and global businesses. Find the right plan in minutes.",
}

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <HeroSection />
        <JourneySelector />
        <ProductCards />

        {/* Trust bar */}
        <section className="border-y border-border/50 bg-muted/20 py-10">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-2 gap-6 text-center md:grid-cols-4">
              {[
                { stat: "190+", label: "Countries covered" },
                { stat: "24/7", label: "Emergency support" },
                { stat: "3", label: "Specialist plans" },
                { stat: "FCA", label: "Regulated" },
              ].map(({ stat, label }) => (
                <div key={label}>
                  <p className="text-2xl font-semibold text-primary">{stat}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
