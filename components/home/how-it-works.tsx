import { Card, CardContent } from "@/components/ui/card"
import { Search, Users, Calendar, CheckCircle } from "lucide-react"

const steps = [
  {
    icon: Search,
    title: "Browse Artists",
    description: "Search through our curated selection of talented performing artists",
  },
  {
    icon: Users,
    title: "Compare Profiles",
    description: "Review portfolios, ratings, and pricing to find the perfect match",
  },
  {
    icon: Calendar,
    title: "Request Booking",
    description: "Send booking requests with your event details and requirements",
  },
  {
    icon: CheckCircle,
    title: "Confirm & Enjoy",
    description: "Finalize details and enjoy an amazing performance at your event",
  },
]

export function HowItWorks() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Book your perfect artist in just a few simple steps</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="text-center border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
