import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Hero } from "@/components/features/home/Hero"
import { ProofBar } from "@/components/features/home/ProofBar"
import { ServicesPreview } from "@/components/features/home/ServicesPreview"
import { WorkPreview } from "@/components/features/home/WorkPreview"
import { CTABand } from "@/components/features/home/CTABand"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ProofBar />
        <ServicesPreview />
        <WorkPreview />
        <CTABand />
      </main>
      <Footer />
    </div>
  )
}
