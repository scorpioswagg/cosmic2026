import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const zodiacSigns = [
  {
    name: "Aries",
    dates: "March 21 - April 19",
    element: "Fire",
    ruling_planet: "Mars",
    description: "Bold, ambitious, and energetic",
    color: "zodiac-aries",
    symbol: "♈",
  },
  {
    name: "Taurus",
    dates: "April 20 - May 20",
    element: "Earth",
    ruling_planet: "Venus",
    description: "Patient, reliable, and practical",
    color: "zodiac-taurus",
    symbol: "♉",
  },
  {
    name: "Gemini",
    dates: "May 21 - June 20",
    element: "Air",
    ruling_planet: "Mercury",
    description: "Curious, adaptable, and communicative",
    color: "zodiac-gemini",
    symbol: "♊",
  },
  {
    name: "Cancer",
    dates: "June 21 - July 22",
    element: "Water",
    ruling_planet: "Moon",
    description: "Intuitive, emotional, and protective",
    color: "zodiac-cancer",
    symbol: "♋",
  },
  {
    name: "Leo",
    dates: "July 23 - August 22",
    element: "Fire",
    ruling_planet: "Sun",
    description: "Creative, passionate, and generous",
    color: "zodiac-leo",
    symbol: "♌",
  },
  {
    name: "Virgo",
    dates: "August 23 - September 22",
    element: "Earth",
    ruling_planet: "Mercury",
    description: "Analytical, practical, and meticulous",
    color: "zodiac-virgo",
    symbol: "♍",
  },
  {
    name: "Libra",
    dates: "September 23 - October 22",
    element: "Air",
    ruling_planet: "Venus",
    description: "Diplomatic, fair-minded, and social",
    color: "zodiac-libra",
    symbol: "♎",
  },
  {
    name: "Scorpio",
    dates: "October 23 - November 21",
    element: "Water",
    ruling_planet: "Pluto, Mars",
    description: "Passionate, resourceful, and brave",
    color: "zodiac-scorpio",
    symbol: "♏",
  },
  {
    name: "Sagittarius",
    dates: "November 22 - December 21",
    element: "Fire",
    ruling_planet: "Jupiter",
    description: "Optimistic, freedom-loving, and philosophical",
    color: "zodiac-sagittarius",
    symbol: "♐",
  },
  {
    name: "Capricorn",
    dates: "December 22 - January 19",
    element: "Earth",
    ruling_planet: "Saturn",
    description: "Disciplined, responsible, and self-controlled",
    color: "zodiac-capricorn",
    symbol: "♑",
  },
  {
    name: "Aquarius",
    dates: "January 20 - February 18",
    element: "Air",
    ruling_planet: "Uranus, Saturn",
    description: "Progressive, original, and independent",
    color: "zodiac-aquarius",
    symbol: "♒",
  },
  {
    name: "Pisces",
    dates: "February 19 - March 20",
    element: "Water",
    ruling_planet: "Neptune, Jupiter",
    description: "Compassionate, artistic, and intuitive",
    color: "zodiac-pisces",
    symbol: "♓",
  },
]

export default function ZodiacGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {zodiacSigns.map((sign) => (
        <Link key={sign.name} href={`/zodiac/${sign.name.toLowerCase()}`}>
          <Card className="zodiac-card h-full hover:shadow-md transition-all">
            <CardHeader className="pb-2">
              <div className="text-4xl mb-2">{sign.symbol}</div>
              <CardTitle>{sign.name}</CardTitle>
              <CardDescription>{sign.dates}</CardDescription>
            </CardHeader>
            <CardContent className="pb-2">
              <div className="grid grid-cols-2 gap-1 text-sm">
                <div className="text-muted-foreground">Element:</div>
                <div>{sign.element}</div>
                <div className="text-muted-foreground">Planet:</div>
                <div>{sign.ruling_planet}</div>
              </div>
            </CardContent>
            <CardFooter>
              <p className="text-sm text-muted-foreground">{sign.description}</p>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  )
}
