import Link from "next/link"
import { Button } from "@/components/ui/button"
import ZodiacGrid from "@/components/zodiac-grid"
import ReportsList from "@/components/reports-list"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden star-bg">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-indigo-500 to-purple-600">
                Discover Your Cosmic Blueprint
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Free personalized astrology reports to guide your journey through the stars. Unlock the secrets of your
                birth chart and discover your true potential.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="animate-pulse-slow">
                <Link href="/birth-chart">Generate Your Birth Chart</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/reports">Explore All Reports</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Animated stars/planets background effect */}
        <div className="absolute inset-0 overflow-hidden -z-10 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-purple-500 animate-pulse-slow"></div>
          <div
            className="absolute top-3/4 left-1/3 w-3 h-3 rounded-full bg-indigo-500 animate-pulse-slow"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-1/2 left-2/3 w-2 h-2 rounded-full bg-purple-500 animate-pulse-slow"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute top-1/3 left-3/4 w-4 h-4 rounded-full bg-indigo-500 animate-pulse-slow"
            style={{ animationDelay: "0.5s" }}
          ></div>
          <div
            className="absolute top-2/3 left-1/4 w-3 h-3 rounded-full bg-purple-500 animate-pulse-slow"
            style={{ animationDelay: "1.5s" }}
          ></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-24 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Free Astrology Reports</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
                Explore our comprehensive collection of free astrology reports to gain insights into various aspects of
                your life.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-12">
            <ReportsList />
          </div>
        </div>
      </section>

      {/* Zodiac Signs Section */}
      <section className="py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Explore the Zodiac</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
                Discover the unique traits and characteristics of each zodiac sign.
              </p>
            </div>
          </div>
          <div className="mx-auto py-12">
            <ZodiacGrid />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-24 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Ready to Discover Your Cosmic Blueprint?
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
                Generate your personalized birth chart and unlock the secrets of your astrological profile.
              </p>
            </div>
            <Button asChild size="lg">
              <Link href="/birth-chart">Generate Your Birth Chart</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
