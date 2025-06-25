import { TabNavigation } from "./tab-navigation";
import { ManagerArtistsTable } from "./manager-artists-table";
import { ManagerBookingTable } from "./manager-booking-table";
import { ManagerStartCard } from "./manganer-start-card";
import { startCardOptions , MangaerTabOptions } from "./data"
import { activeTabProps } from "./type";

export function ManagerDashboard({
  searchParams,
}: {
  searchParams: activeTabProps;
}) {
  const activeTab: string = searchParams?.tab || "artists";

  return (
    <div className="space-y-8">
      {/* Stats Cards */}
      <ManagerStartCard startCardOptions={startCardOptions} />

      {/* Tab Navigation */}
      <TabNavigation options={MangaerTabOptions} active={activeTab} />

      {/* Artists Tab */}
      {activeTab === "artists" && <ManagerArtistsTable />}

      {/* Bookings Tab */}
      {activeTab === "bookings" && <ManagerBookingTable />}
    </div>
  );
}
