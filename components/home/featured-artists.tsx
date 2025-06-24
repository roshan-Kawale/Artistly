import { Button } from "@/components/ui/button"
import Link from "next/link"
import artistsData from "@/data/artists.json"
import { ArtistCard } from "../artists"

export function FeaturedArtists() {
  const featuredArtists = artistsData.slice(0, 3)

  return (
    <section className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Artists</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">Meet some of our top-rated performing artists</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {featuredArtists.map((artist) => (
           <ArtistCard key={artist.id} artist={artist}/>
        ))}
      </div>

      <div className="text-center mt-12">
        <Button asChild size="lg">
          <Link href="/artists">View All Artists</Link>
        </Button>
      </div>
    </section>
  )
}
