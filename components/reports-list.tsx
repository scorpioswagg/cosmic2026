import Link from "next/link"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const reports = [
  {
    title: "Natal Chart",
    description: "Your complete birth chart with detailed planetary positions and house placements.",
    icon: "🌠",
    link: "/reports/natal-chart",
  },
  {
    title: "Personality & Life Purpose",
    description: "Discover your core personality traits and life's purpose based on your birth chart.",
    icon: "✨",
    link: "/reports/personality",
  },
  {
    title: "Love & Relationship Compatibility",
    description: "Analyze compatibility between you and your partner based on your birth charts.",
    icon: "❤️",
    link: "/reports/compatibility",
  },
  {
    title: "Child Report",
    description: "Understand your child's unique personality and potential based on their birth chart.",
    icon: "👶",
    link: "/reports/child",
  },
  {
    title: "Solar Return",
    description: "Forecast for your upcoming year based on the sun's return to its natal position.",
    icon: "🌞",
    link: "/reports/solar-return",
  },
  {
    title: "Daily Transits",
    description: "How current planetary movements are affecting your natal chart today.",
    icon: "🌙",
    link: "/reports/daily-transits",
  },
  {
    title: "Past Life Karma",
    description: "Explore karmic patterns and past life influences in your current incarnation.",
    icon: "⏳",
    link: "/reports/past-life",
  },
  {
    title: "Ancestral Karma",
    description: "Discover the karmic patterns inherited from your ancestral lineage.",
    icon: "👪",
    link: "/reports/ancestral-karma",
  },
  {
    title: "Soul Ties",
    description: "Identify significant soul connections and their purpose in your life journey.",
    icon: "🔗",
    link: "/reports/soul-ties",
  },
]

export default function ReportsList() {
  return (
    <>
      {reports.map((report) => (
        <Card key={report.title} className="flex flex-col h-full">
          <CardHeader>
            <div className="text-4xl mb-2">{report.icon}</div>
            <CardTitle>{report.title}</CardTitle>
            <CardDescription>{report.description}</CardDescription>
          </CardHeader>
          <CardFooter className="mt-auto pt-6">
            <Button asChild className="w-full">
              <Link href={report.link}>View Report</Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </>
  )
}
