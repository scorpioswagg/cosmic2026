import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"

// A list of report definitions used for the reports overview and detail pages.
// Each report includes a title, a URL-friendly link slug, a short description, and the full content text.
const reports = [
  {
    title: "Natal Chart",
    slug: "natal-chart",
    description: "Your complete birth chart with detailed planetary positions and house placements.",
    content:
      "The Natal Chart is a map of the sky at the exact moment of your birth. It reveals your unique cosmic blueprint, showing the positions of the planets, the Sun, and the Moon in relation to the zodiac signs and houses. This comprehensive report provides insights into your personality traits, strengths, challenges, and life path.",
  },
  {
    title: "Personality & Life Purpose",
    slug: "personality",
    description: "Discover your core personality traits and life's purpose based on your birth chart.",
    content:
      "The Personality & Life Purpose report delves deep into your core essence, revealing your innate talents, challenges, and spiritual mission in this lifetime. By analyzing key placements in your birth chart, this report helps you understand your authentic self and align with your true purpose.",
  },
  {
    title: "Love & Relationship Compatibility",
    slug: "compatibility",
    description: "Analyze compatibility between you and your partner based on your birth charts.",
    content:
      "The Love & Relationship Compatibility report compares two birth charts to reveal the dynamics, strengths, challenges, and potential of your relationship. This report examines how your energies interact on physical, emotional, intellectual, and spiritual levels, providing insights for deeper understanding and growth together.",
  },
  {
    title: "Child Report",
    slug: "child",
    description: "Understand your child's unique personality and potential based on their birth chart.",
    content:
      "The Child Report offers parents and caregivers valuable insights into a child's natural tendencies, talents, and challenges. This report helps you understand your child's unique needs, learning style, and emotional expression, allowing you to support their authentic development and nurture their potential.",
  },
  {
    title: "Solar Return",
    slug: "solar-return",
    description: "Forecast for your upcoming year based on the sun's return to its natal position.",
    content:
      "The Solar Return report provides a forecast for your personal year, from one birthday to the next. It analyzes the chart created when the Sun returns to its exact position at your birth, revealing themes, opportunities, and challenges you're likely to encounter during this period of your life.",
  },
  {
    title: "Daily Transits",
    slug: "daily-transits",
    description: "How current planetary movements are affecting your natal chart today.",
    content:
      "The Daily Transits report shows how current planetary positions are interacting with your birth chart. This report helps you understand the cosmic weather affecting you today, providing insights into the energies at play and how to work with them constructively.",
  },
  {
    title: "Past Life Karma",
    slug: "past-life",
    description: "Explore karmic patterns and past life influences in your current incarnation.",
    content:
      "The Past Life Karma report examines the South Node, retrograde planets, and other karmic indicators in your birth chart to reveal patterns from previous lifetimes. This report helps you understand recurring themes, unresolved issues, and soul contracts that you've brought into this lifetime for healing and integration.",
  },
  {
    title: "Ancestral Karma",
    slug: "ancestral-karma",
    description: "Discover the karmic patterns inherited from your ancestral lineage.",
    content:
      "The Ancestral Karma report explores how family patterns and ancestral influences are reflected in your birth chart. This report helps you identify inherited traits, gifts, and challenges, offering insights for healing generational wounds and honoring your lineage's wisdom.",
  },
  {
    title: "Soul Ties",
    slug: "soul-ties",
    description: "Identify significant soul connections and their purpose in your life journey.",
    content:
      "The Soul Ties report examines significant relationships in your life from a spiritual perspective. This report helps you understand the deeper purpose of important connections, identifying soul mates, twin flames, karmic partners, and soul family members who are supporting your evolution.",
  },
  {
    title: "Soul Contracts",
    slug: "soul-contracts",
    description: "Understand the agreements your soul made before incarnating.",
    content:
      "The Soul Contracts report reveals the agreements your soul made before birth regarding life lessons, relationships, and experiences. This report helps you recognize the higher purpose behind challenging situations and relationships, offering perspective on your soul's evolutionary journey.",
  },
  {
    title: "Karmic Lessons",
    slug: "karmic-lessons",
    description: "Identify the specific lessons your soul is working to master in this lifetime.",
    content:
      "The Karmic Lessons report identifies specific areas of growth and development for your soul in this lifetime. By analyzing karmic indicators in your birth chart, this report helps you understand recurring patterns, challenges, and opportunities that are supporting your spiritual evolution.",
  },
  {
    title: "Spiritual Path",
    slug: "spiritual-path",
    description: "Discover your unique spiritual journey and soul's evolution.",
    content:
      "The Spiritual Path report illuminates your soul's journey and evolutionary direction. This report examines spiritual indicators in your birth chart to reveal your natural connection to the divine, preferred spiritual practices, and unique ways of accessing higher wisdom and consciousness.",
  },
]

interface ReportDetailProps {
  params: { slug: string }
}

export default function ReportDetailPage({ params }: ReportDetailProps) {
  const { slug } = params
  // Find the report that matches the slug provided in the URL.
  const report = reports.find((r) => r.slug === slug)

  // If no report is found for the given slug, return a 404 page.
  if (!report) {
    notFound()
  }

  return (
    <div className="container py-12">
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{report.title}</h1>
          <p className="text-muted-foreground md:text-lg">{report.description}</p>
        </div>
        <p className="text-base md:text-lg leading-relaxed whitespace-pre-line">{report.content}</p>
        <div className="pt-6 flex justify-center">
          <Button asChild>
            <Link href="/reports">Back to Reports</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
