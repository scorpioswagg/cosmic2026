import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Astrology Blog | Cosmic Blueprint",
  description:
    "Explore our astrology blog for educational content on zodiac signs, planets, houses, and spiritual growth.",
}

const blogPosts = [
  {
    title: "Understanding the 12 Houses in Astrology",
    description: "Learn about the 12 houses in astrology and how they influence different areas of your life.",
    date: "May 5, 2025",
    category: "Astrology Basics",
    slug: "understanding-houses",
    excerpt:
      "The 12 houses in astrology represent different areas of life, from identity and resources to communication and relationships. Each house governs specific themes and experiences, creating a comprehensive map of your life journey...",
  },
  {
    title: "The Meaning of Retrograde Planets",
    description: "Discover what it means when planets go retrograde and how it affects your life.",
    date: "May 1, 2025",
    category: "Planetary Movements",
    slug: "retrograde-planets",
    excerpt:
      "When a planet appears to move backward in the sky, we call this retrograde motion. Though it's an optical illusion, these periods have significant astrological meaning. Retrograde planets invite us to review, reflect, and reconsider aspects of our lives...",
  },
  {
    title: "Karmic Astrology: Understanding Your Soul's Journey",
    description: "Explore how karmic astrology can reveal patterns from past lives and soul lessons.",
    date: "April 28, 2025",
    category: "Spiritual Astrology",
    slug: "karmic-astrology",
    excerpt:
      "Karmic astrology examines your birth chart through the lens of soul evolution, revealing patterns, lessons, and gifts from past incarnations. By understanding these karmic signatures, you can consciously work with your soul's journey...",
  },
  {
    title: "The North and South Nodes: Your Soul's Direction",
    description: "Learn about the lunar nodes and how they reveal your soul's past and future.",
    date: "April 22, 2025",
    category: "Spiritual Astrology",
    slug: "lunar-nodes",
    excerpt:
      "The North and South Nodes of the Moon, also known as the lunar nodes, represent your soul's journey across lifetimes. The South Node reveals talents and patterns from past lives, while the North Node points to your soul's growth direction in this lifetime...",
  },
  {
    title: "Understanding Aspects: The Conversation Between Planets",
    description: "Discover how planetary aspects create the dynamic energy patterns in your birth chart.",
    date: "April 15, 2025",
    category: "Astrology Basics",
    slug: "planetary-aspects",
    excerpt:
      "Aspects in astrology represent the angular relationships between planets in your birth chart. These geometric patterns create a cosmic conversation, revealing how different parts of your personality interact, harmonize, or create tension...",
  },
  {
    title: "The Four Elements in Astrology: Fire, Earth, Air, and Water",
    description: "Explore the four elements and how they shape personality traits and compatibility.",
    date: "April 8, 2025",
    category: "Astrology Basics",
    slug: "four-elements",
    excerpt:
      "The four elements—Fire, Earth, Air, and Water—form the foundation of astrological temperament. Each element represents a different mode of being and perception, influencing how we express ourselves, process information, and relate to others...",
  },
]

export default function BlogPage() {
  return (
    <div className="container py-12">
      <div className="space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Astrology Blog</h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
            Explore our educational content on astrology, karmic themes, and soul evolution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Card key={post.slug} className="flex flex-col h-full">
              <CardHeader>
                <div className="text-sm text-muted-foreground">
                  {post.date} • {post.category}
                </div>
                <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                <CardDescription>{post.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-muted-foreground line-clamp-4">{post.excerpt}</p>
              </CardContent>
              <CardFooter className="pt-6">
                <Button asChild variant="outline" className="w-full">
                  <Link href={`/blog/${post.slug}`}>Read More</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
