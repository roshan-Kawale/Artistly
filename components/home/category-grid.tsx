import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import categoriesData from "@/data/categories.json"

export function CategoryGrid() {
  return (
    <section className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Browse by Category</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover talented artists across different performance categories
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categoriesData.map((category) => (
          <Card key={category.id} className="hover:shadow-lg transition-shadow cursor-pointer group">
            <CardContent className="p-6 text-center">
              <div className="text-4xl mb-4">{category.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
              <p className="text-gray-600 text-sm mb-4">{category.description}</p>
              <p className="text-primary font-medium mb-4">{category.count} artists</p>
              <Button
                variant="outline"
                size="sm"
                asChild
                className="group-hover:bg-primary group-hover:text-white transition-colors"
              >
                <Link href={`/artists?category=${category.id}`}>View Artists</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
