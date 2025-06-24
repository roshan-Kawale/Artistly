import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, MapPin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import artistsData from "@/data/artists.json"

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
          <Card key={artist.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="aspect-square relative">
              <Image src={artist.image || "/placeholder.svg"} alt={artist.name} fill className="object-cover" />
            </div>
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-medium">{artist.rating}</span>
                <span className="text-sm text-gray-500">({artist.reviews} reviews)</span>
              </div>

              <h3 className="text-xl font-semibold mb-2">{artist.name}</h3>

              <div className="flex flex-wrap gap-1 mb-3">
                {artist.category.map((cat) => (
                  <Badge key={cat} variant="secondary" className="text-xs">
                    {cat}
                  </Badge>
                ))}
              </div>

              <div className="flex items-center text-gray-600 text-sm mb-3">
                <MapPin className="h-4 w-4 mr-1" />
                {artist.location}
              </div>

              <p className="text-gray-600 text-sm mb-4 line-clamp-2">{artist.bio}</p>

              <div className="flex items-center justify-between">
                <span className="font-semibold text-primary">{artist.priceRange}</span>
                <Button size="sm">Ask for Quote</Button>
              </div>
            </CardContent>
          </Card>
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
