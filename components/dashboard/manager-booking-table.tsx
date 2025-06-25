import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { CheckCircle, Clock, XCircle } from "lucide-react";
import mockBookings from '@/data/bookings.json';


export function ManagerBookingTable() {
    const getStatusBadge = (status: string) => {
        switch (status) {
          case "pending":
            return (
              <Badge
                variant="outline"
                className="text-yellow-600 border-yellow-600"
              >
                <Clock className="w-3 h-3 mr-1" />
                Pending
              </Badge>
            );
          case "approved":
            return (
              <Badge variant="outline" className="text-green-600 border-green-600">
                <CheckCircle className="w-3 h-3 mr-1" />
                Approved
              </Badge>
            );
          case "declined":
            return (
              <Badge variant="outline" className="text-red-600 border-red-600">
                <XCircle className="w-3 h-3 mr-1" />
                Declined
              </Badge>
            );
          default:
            return <Badge variant="secondary">{status}</Badge>;
        }
      };

    return (
        <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <CardTitle>Booking Requests</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Artist</TableHead>
                <TableHead>Client</TableHead>
                <TableHead>Event</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Budget</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockBookings.map((booking) => (
                <TableRow key={booking.id}>
                  <TableCell className="font-medium">
                    {booking.artistName}
                  </TableCell>
                  <TableCell>{booking.clientName}</TableCell>
                  <TableCell>
                    <div>
                      <div className="font-medium">{booking.eventType}</div>
                      <div className="text-sm text-gray-500">
                        {booking.location}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    {new Date(booking.eventDate).toLocaleDateString()}
                  </TableCell>
                  <TableCell className="font-medium">
                    {booking.budget}
                  </TableCell>
                  <TableCell>{getStatusBadge(booking.status)}</TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <>
                        <Button
                          size="sm"
                          variant="outline"
                          className={`${
                            booking.status === "approved"
                              ? "bg-green-600"
                              : "text-green-600 border-green-600"
                          } hover:bg-green-600 `}
                        >
                          <CheckCircle className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className={`${
                            booking.status === "declined"
                              ? "bg-red-600"
                              : "text-red-600 border-red-600"
                          } hover:bg-red-600`}
                        >
                          <XCircle className="h-4 w-4" />
                        </Button>
                      </>
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