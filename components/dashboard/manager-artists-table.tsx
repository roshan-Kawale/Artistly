import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
  import { Badge } from "@/components/ui/badge";
import artistsData from "@/data/artists.json";
import { Button } from "../ui/button";
import { Eye } from "lucide-react";

export function ManagerArtistsTable() {
    return (
        <Card>
          <CardHeader>
            <CardTitle>My Artists</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Fee Range</TableHead>
                  <TableHead>Rating</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {artistsData.map((artist) => (
                  <TableRow key={artist.id}>
                    <TableCell className="font-medium">{artist.name}</TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-1">
                        {artist.category.slice(0, 2).map((cat) => (
                          <Badge
                            key={cat}
                            variant="secondary"
                            className="text-xs"
                          >
                            {cat}
                          </Badge>
                        ))}
                        {artist.category.length > 2 && (
                          <Badge variant="secondary" className="text-xs">
                            +{artist.category.length - 2}
                          </Badge>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>{artist.location}</TableCell>
                    <TableCell>{artist.priceRange}</TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        <span className="text-sm font-medium">
                          {artist.rating}
                        </span>
                        <span className="text-xs text-gray-500 ml-1">
                          ({artist.reviews})
                        </span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
    )
}