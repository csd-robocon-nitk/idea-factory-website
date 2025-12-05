"use client"

import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import StatsSection from "@/components/stats-section"
import FeaturesSection from "@/components/features-section"
import WhyItMattersSection from "@/components/why-it-matters-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Header />
      <HeroSection />
      <FeaturesSection />
      {/* <MissionSection /> */}
      <WhyItMattersSection />
      <StatsSection />
      <Footer />
    </main>
  )
}
