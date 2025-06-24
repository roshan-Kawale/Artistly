import artistsData from "@/data/artists.json";
import { ArtistFilters } from "./artist-filters";
import { ArtistCard } from "./astist-card";
import { Artist, FilterState } from "@/types";

function filterArtists(artists: Artist[], filters: FilterState) {
  return artists.filter((artist) => {
    const matchesCategory =
      !filters.category ||
      artist.category.some((cat: string) =>
        cat.toLowerCase().includes(filters.category.toLowerCase())
      );

    const matchesLocation =
      !filters.location ||
      artist.location.toLowerCase().includes(filters.location.toLowerCase());

    const matchesPriceRange =
      !filters.priceRange || artist.priceRange === filters.priceRange;

    const matchesSearch =
      !filters.search ||
      artist.name.toLowerCase().includes(filters.search.toLowerCase()) ||
      artist.bio.toLowerCase().includes(filters.search.toLowerCase());

    return (
      matchesCategory && matchesLocation && matchesPriceRange && matchesSearch
    );
  });
}

export function ArtistListing({ searchParams }: { searchParams: FilterState }) {

  const filters: FilterState = {
    category: searchParams?.category || "",
    location: searchParams?.location || "",
    priceRange: searchParams?.priceRange || "",
    search: searchParams?.search || "",
  };

  const filteredArtists = filterArtists(artistsData, filters);

  return (
    <div className="space-y-8">
      <ArtistFilters filters={filters}/>

      <div className="flex items-center justify-between">
        <p className="text-gray-600">
          {filteredArtists.length} artist
          {filteredArtists.length !== 1 ? "s" : ""} found
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredArtists.map((artist) => (
          <ArtistCard key={artist.id} artist={artist} />
        ))}
      </div>

      {filteredArtists.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">
            No artists found matching your criteria.
          </p>
          <p className="text-gray-400 text-sm mt-2">
            Try adjusting your filters to see more results.
          </p>
        </div>
      )}
    </div>
  );
}
