import { ArtistListing } from "@/components/artists";
import { FilterState } from "@/types"

export default async function ArtistsPage({ searchParams }: { searchParams: Promise<FilterState> }) {

  // Await the searchParams promise
  const resolvedSearchParams = await searchParams;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Find Your Perfect Artist</h1>
        <p className="text-muted-foreground">Browse through our curated selection of talented performing artists</p>
      </div>
      <ArtistListing searchParams={resolvedSearchParams} />
    </div>
  )
}