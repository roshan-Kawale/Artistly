import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <div className="min-h-screen relative ">
      <section className="bg-white relative md:overflow">
        <div className="hidden sm:block absolute -bottom-32 -left-5 h-72 w-72 rounded-full bg-[#b3f5d2b3] blur-2xl animate-shapeChange"></div>
        <div className="hidden sm:block absolute -top-32 -right-0 h-72 w-72 rounded-full bg-[#bbb3f588] blur-2xl animate-shapeChange"></div>
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              Find the Perfect
              <span className="text-primary block">Performing Artist</span>
            </h1>

            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Connect with talented singers, dancers, speakers, and DJs for your
              next event. Book with confidence through our trusted platform.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search artists, categories..."
                  className="pl-10"
                />
              </div>
              <Button asChild size="lg">
                <Link href="/artists">Explore Artists</Link>
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button variant="outline" asChild>
                <Link href="/onboard">Join as Artist</Link>
              </Button>
              <span className="text-sm text-gray-500">
                Trusted by 500+ event planners
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
