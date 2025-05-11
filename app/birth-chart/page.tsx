import BirthChartForm from "@/components/birth-chart-form"

export const metadata = {
  title: "Birth Chart Generator | Cosmic Blueprint",
  description:
    "Generate your personalized birth chart and discover your astrological profile with our free birth chart calculator.",
}

export default function BirthChartPage() {
  return (
    <div className="container py-12 max-w-4xl">
      <div className="space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Birth Chart Generator</h1>
          <p className="text-muted-foreground md:text-lg">
            Enter your birth details to generate your personalized birth chart with accurate planetary positions and
            house placements.
          </p>
        </div>
        <BirthChartForm />
      </div>
    </div>
  )
}
