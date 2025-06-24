import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Artistly</span>
            </div>
            <p className="text-sm text-gray-600">
              Connecting event planners with talented performing artists worldwide.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">For Event Planners</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="/artists" className="hover:text-primary">
                  Find Artists
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">For Artists</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="/onboard" className="hover:text-primary">
                  Join Artistly
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="hover:text-primary">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  Resources
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="#" className="hover:text-primary">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} Artistly. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
