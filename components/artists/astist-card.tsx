import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, MapPin, MessageCircle } from "lucide-react"
import Image from "next/image"
import { Artist } from "@/types"

interface ArtistCardProps {
  artist: Artist
}

export function ArtistCard({ artist }: ArtistCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-square relative h-64">
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

        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{artist.bio}</p>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="font-semibold text-primary text-lg">{artist.priceRange}</span>
          </div>

          <div className="flex gap-2">
            <Button size="sm" className="flex-1">
              Ask for Quote
            </Button>
            <Button variant="outline" size="sm">
              <MessageCircle className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
