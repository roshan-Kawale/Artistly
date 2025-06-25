import { ManagerDashboard } from "@/components/dashboard/manager-dashboard"

export default function DashboardPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Manager Dashboard</h1>
        <p className="text-muted-foreground">Manage your artists and booking requests</p>
      </div>
      <ManagerDashboard />
    </div>
  )
}