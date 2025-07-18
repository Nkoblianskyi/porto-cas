import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { RatingSection } from "@/components/rating-section"
import { OurChoiceSection } from "@/components/our-choice-section"
import { InfoSections } from "@/components/info-sections"
import { TopSitesModal } from "@/components/top-sites-modal"
import { BonusSection } from "@/components/bonus-section"

export default function HomePage() {
  return (
    <div className="space-y-2.5">
      <Header />
      <Hero />
      <RatingSection />
      <InfoSections />
      <OurChoiceSection />
      <BonusSection />
      <TopSitesModal />
    </div>
  )
}
