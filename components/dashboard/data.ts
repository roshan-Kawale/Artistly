import artistsData from "@/data/artists.json";
import mockBookings from "@/data/bookings.json";

export const MangaerTabOptions = [
    {
      id: "artists",
      label: "My Artists",
    },
    {
      id: "bookings",
      label: "Booking Requests",
    },
  ];
  
export const startCardOptions = [
    {
      header: "Total Artists",
      length: artistsData.length,
      desc: "Active profiles",
    },
    {
      header: "Pending Requests",
      length: mockBookings.filter((b) => b.status === "pending").length,
      desc: "Awaiting response",
    },
    {
      header: "This month",
      length: mockBookings.filter((b) => b.status === "approved").length,
      desc: "Confirmed bookings",
    },
  ];