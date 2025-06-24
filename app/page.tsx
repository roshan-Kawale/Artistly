import { CategoryGrid, FeaturedArtists, Hero, HowItWorks } from "@/components/home";

export default function HomePage() {
  return (
    <div className="space-y-16 pb-16">
      <Hero />
      <CategoryGrid />
      <FeaturedArtists />
      <HowItWorks />
    </div>
  )
}