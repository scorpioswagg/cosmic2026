import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Astrology Reports | Cosmic Blueprint",
  description:
    "Explore our comprehensive collection of free astrology reports including natal charts, compatibility readings, and more.",
}

const reports = [
  {
    title: "Natal Chart",
    description: "Your complete birth chart with detailed planetary positions and house placements.",
    icon: "🌠",
    link: "/reports/natal-chart",
    content:
      "The Natal Chart is a map of the sky at the exact moment of your birth. It reveals your unique cosmic blueprint, showing the positions of the planets, the Sun, and the Moon in relation to the zodiac signs and houses. This comprehensive report provides insights into your personality traits, strengths, challenges, and life path.",
  },
  {
    title: "Personality & Life Purpose",
    description: "Discover your core personality traits and life's purpose based on your birth chart.",
    icon: "✨",
    link: "/reports/personality",
    content:
      "The Personality & Life Purpose report delves deep into your core essence, revealing your innate talents, challenges, and spiritual mission in this lifetime. By analyzing key placements in your birth chart, this report helps you understand your authentic self and align with your true purpose.",
  },
  {
    title: "Love & Relationship Compatibility",
    description: "Analyze compatibility between you and your partner based on your birth charts.",
    icon: "❤️",
    link: "/reports/compatibility",
    content:
      "The Love & Relationship Compatibility report compares two birth charts to reveal the dynamics, strengths, challenges, and potential of your relationship. This report examines how your energies interact on physical, emotional, intellectual, and spiritual levels, providing insights for deeper understanding and growth together.",
  },
  {
    title: "Child Report",
    description: "Understand your child's unique personality and potential based on their birth chart.",
    icon: "👶",
    link: "/reports/child",
    content:
      "The Child Report offers parents and caregivers valuable insights into a child's natural tendencies, talents, and challenges. This report helps you understand your child's unique needs, learning style, and emotional expression, allowing you to support their authentic development and nurture their potential.",
  },
  {
    title: "Solar Return",
    description: "Forecast for your upcoming year based on the sun's return to its natal position.",
    icon: "🌞",
    link: "/reports/solar-return",
    content:
      "The Solar Return report provides a forecast for your personal year, from one birthday to the next. It analyzes the chart created when the Sun returns to its exact position at your birth, revealing themes, opportunities, and challenges you're likely to encounter during this period of your life.",
  },
  {
    title: "Daily Transits",
    description: "How current planetary movements are affecting your natal chart today.",
    icon: "🌙",
    link: "/reports/daily-transits",
    content:
      "The Daily Transits report shows how current planetary positions are interacting with your birth chart. This report helps you understand the cosmic weather affecting you today, providing insights into the energies at play and how to work with them constructively.",
  },
  {
    title: "Past Life Karma",
    description: "Explore karmic patterns and past life influences in your current incarnation.",
    icon: "⏳",
    link: "/reports/past-life",
    content:
      "The Past Life Karma report examines the South Node, retrograde planets, and other karmic indicators in your birth chart to reveal patterns from previous lifetimes. This report helps you understand recurring themes, unresolved issues, and soul contracts that you've brought into this lifetime for healing and integration.",
  },
  {
    title: "Ancestral Karma",
    description: "Discover the karmic patterns inherited from your ancestral lineage.",
    icon: "👪",
    link: "/reports/ancestral-karma",
    content:
      "The Ancestral Karma report explores how family patterns and ancestral influences are reflected in your birth chart. This report helps you identify inherited traits, gifts, and challenges, offering insights for healing generational wounds and honoring your lineage's wisdom.",
  },
  {
    title: "Soul Ties",
    description: "Identify significant soul connections and their purpose in your life journey.",
    icon: "🔗",
    link: "/reports/soul-ties",
    content:
      "The Soul Ties report examines significant relationships in your life from a spiritual perspective. This report helps you understand the deeper purpose of important connections, identifying soul mates, twin flames, karmic partners, and soul family members who are supporting your evolution.",
  },
  {
    title: "Soul Contracts",
    description: "Understand the agreements your soul made before incarnating.",
    icon: "📜",
    link: "/reports/soul-contracts",
    content:
      "The Soul Contracts report reveals the agreements your soul made before birth regarding life lessons, relationships, and experiences. This report helps you recognize the higher purpose behind challenging situations and relationships, offering perspective on your soul's evolutionary journey.",
  },
  {
    title: "Karmic Lessons",
    description: "Identify the specific lessons your soul is working to master in this lifetime.",
    icon: "🔄",
    link: "/reports/karmic-lessons",
    content:
      "The Karmic Lessons report identifies specific areas of growth and development for your soul in this lifetime. By analyzing karmic indicators in your birth chart, this report helps you understand recurring patterns, challenges, and opportunities that are supporting your spiritual evolution.",
  },
  {
    title: "Spiritual Path",
    description: "Discover your unique spiritual journey and soul's evolution.",
    icon: "🧘",
    link: "/reports/spiritual-path",
    content:
      "The Spiritual Path report illuminates your soul's journey and evolutionary direction. This report examines spiritual indicators in your birth chart to reveal your natural connection to the divine, preferred spiritual practices, and unique ways of accessing higher wisdom and consciousness.",
  },
]

export default function ReportsPage() {
  return (
    <div className="container py-12">
      <div className="space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Free Astrology Reports</h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
            Explore our comprehensive collection of free astrology reports to gain insights into various aspects of your
            life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reports.map((report) => (
            <Card key={report.title} className="flex flex-col h-full">
              <CardHeader>
                <div className="text-4xl mb-2">{report.icon}</div>
                <CardTitle>{report.title}</CardTitle>
                <CardDescription>{report.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-muted-foreground">{report.content}</p>
              </CardContent>
              <CardFooter className="pt-6">
                <Button asChild className="w-full">
                  <Link href={report.link}>View Report</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
