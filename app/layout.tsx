import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Footer, Navbar } from "@/components/layout"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Artistly - Performing Artist Booking Platform",
  description: "Connect event planners with talented performing artists",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}