import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Cosmic Blueprint | Free Astrology Reports & Charts",
  description:
    "Discover your cosmic blueprint with free personalized astrology reports, birth charts, compatibility readings, and more.",
  keywords: "astrology, birth chart, horoscope, zodiac, astrology reports, free astrology",
  openGraph: {
    title: "Cosmic Blueprint | Free Astrology Reports & Charts",
    description:
      "Discover your cosmic blueprint with free personalized astrology reports, birth charts, compatibility readings, and more.",
    url: "https://cosmicblueprint.space",
    siteName: "Cosmic Blueprint",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Cosmic Blueprint",
      },
    ],
    locale: "en_US",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
