import { Astronomy } from "./astronomy"

// Zodiac sign data
const zodiacSigns = [
  { name: "Aries", symbol: "♈", startDegree: 0 },
  { name: "Taurus", symbol: "♉", startDegree: 30 },
  { name: "Gemini", symbol: "♊", startDegree: 60 },
  { name: "Cancer", symbol: "♋", startDegree: 90 },
  { name: "Leo", symbol: "♌", startDegree: 120 },
  { name: "Virgo", symbol: "♍", startDegree: 150 },
  { name: "Libra", symbol: "♎", startDegree: 180 },
  { name: "Scorpio", symbol: "♏", startDegree: 210 },
  { name: "Sagittarius", symbol: "♐", startDegree: 240 },
  { name: "Capricorn", symbol: "♑", startDegree: 270 },
  { name: "Aquarius", symbol: "♒", startDegree: 300 },
  { name: "Pisces", symbol: "♓", startDegree: 330 },
]

// Planet data
const planets = [
  { name: "Sun", symbol: "☉" },
  { name: "Moon", symbol: "☽" },
  { name: "Mercury", symbol: "☿" },
  { name: "Venus", symbol: "♀" },
  { name: "Mars", symbol: "♂" },
  { name: "Jupiter", symbol: "♃" },
  { name: "Saturn", symbol: "♄" },
  { name: "Uranus", symbol: "♅" },
  { name: "Neptune", symbol: "♆" },
  { name: "Pluto", symbol: "♇" },
]

// Aspect data
const aspects = [
  { name: "Conjunction", angle: 0, orb: 8, symbol: "☌", harmonious: true },
  { name: "Opposition", angle: 180, orb: 8, symbol: "☍", harmonious: false },
  { name: "Trine", angle: 120, orb: 8, symbol: "△", harmonious: true },
  { name: "Square", angle: 90, orb: 7, symbol: "□", harmonious: false },
  { name: "Sextile", angle: 60, orb: 6, symbol: "⚹", harmonious: true },
  { name: "Quincunx", angle: 150, orb: 5, symbol: "⚻", harmonious: false },
  { name: "Semi-Sextile", angle: 30, orb: 3, symbol: "⚺", harmonious: true },
]

export const zodiac = {
  signs: zodiacSigns.map((sign) => sign.name),
  planets: planets.map((planet) => planet.name),
  aspects: aspects.map((aspect) => aspect.name),

  // Get zodiac sign based on longitude
  getZodiacSignByLongitude(longitude) {
    // Normalize longitude to 0-360 range
    const normalizedLongitude = ((longitude % 360) + 360) % 360

    // Find the sign based on the longitude
    const sign = zodiacSigns.find((sign, index, array) => {
      const nextIndex = (index + 1) % array.length
      const nextStartDegree = array[nextIndex].startDegree

      if (sign.startDegree < nextStartDegree) {
        return normalizedLongitude >= sign.startDegree && normalizedLongitude < nextStartDegree
      } else {
        // Handle the Pisces/Aries boundary
        return normalizedLongitude >= sign.startDegree || normalizedLongitude < nextStartDegree
      }
    })

    return sign ? sign.name : "Unknown"
  },

  // Get zodiac sign by date
  getZodiacSign(month, day) {
    month = Number.parseInt(month)
    day = Number.parseInt(day)

    const dates = [
      { sign: "Capricorn", start: { month: 12, day: 22 }, end: { month: 1, day: 19 } },
      { sign: "Aquarius", start: { month: 1, day: 20 }, end: { month: 2, day: 18 } },
      { sign: "Pisces", start: { month: 2, day: 19 }, end: { month: 3, day: 20 } },
      { sign: "Aries", start: { month: 3, day: 21 }, end: { month: 4, day: 19 } },
      { sign: "Taurus", start: { month: 4, day: 20 }, end: { month: 5, day: 20 } },
      { sign: "Gemini", start: { month: 5, day: 21 }, end: { month: 6, day: 20 } },
      { sign: "Cancer", start: { month: 6, day: 21 }, end: { month: 7, day: 22 } },
      { sign: "Leo", start: { month: 7, day: 23 }, end: { month: 8, day: 22 } },
      { sign: "Virgo", start: { month: 8, day: 23 }, end: { month: 9, day: 22 } },
      { sign: "Libra", start: { month: 9, day: 23 }, end: { month: 10, day: 22 } },
      { sign: "Scorpio", start: { month: 10, day: 23 }, end: { month: 11, day: 21 } },
      { sign: "Sagittarius", start: { month: 11, day: 22 }, end: { month: 12, day: 21 } },
    ]

    for (const date of dates) {
      if ((month === date.start.month && day >= date.start.day) || (month === date.end.month && day <= date.end.day)) {
        return date.sign
      }

      // Special case for Capricorn which spans December to January
      if (
        date.sign === "Capricorn" &&
        ((month === 12 && day >= date.start.day) || (month === 1 && day <= date.end.day))
      ) {
        return "Capricorn"
      }
    }

    return "Unknown"
  },

  // Calculate the birth chart
  calculateBirthChart(formData) {
    const { birthMonth, birthDay, birthYear, birthTime, birthLocation } = formData

    // Parse date and time
    const month = Number.parseInt(birthMonth, 10) - 1 // JavaScript months are 0-indexed
    const day = Number.parseInt(birthDay, 10)
    const year = Number.parseInt(birthYear, 10)

    // Parse time (default to noon if not provided)
    let hours = 12
    let minutes = 0

    if (birthTime) {
      const [hoursStr, minutesStr] = birthTime.split(":")
      hours = Number.parseInt(hoursStr, 10)
      minutes = Number.parseInt(minutesStr, 10) || 0
    }

    // Create date object
    const birthDate = new Date(year, month, day, hours, minutes)

    // Get location coordinates (simplified - in a real app, you'd use geocoding)
    let latitude = 0
    let longitude = 0

    if (birthLocation) {
      // For demo purposes, we'll use some default coordinates based on common locations
      // In a real app, you would use a geocoding service
      const locationMap = {
        "New York": { lat: 40.7128, lng: -74.006 },
        "Los Angeles": { lat: 34.0522, lng: -118.2437 },
        Chicago: { lat: 41.8781, lng: -87.6298 },
        London: { lat: 51.5074, lng: -0.1278 },
        Paris: { lat: 48.8566, lng: 2.3522 },
        Tokyo: { lat: 35.6762, lng: 139.6503 },
        Sydney: { lat: -33.8688, lng: 151.2093 },
      }

      // Try to match the location
      for (const [city, coords] of Object.entries(locationMap)) {
        if (birthLocation.toLowerCase().includes(city.toLowerCase())) {
          latitude = coords.lat
          longitude = coords.lng
          break
        }
      }
    }

    // Calculate planetary positions
    const planetPositions = this.calculatePlanetaryPositions(birthDate, latitude, longitude)

    // Calculate houses
    const houses = this.calculateHouses(birthDate, latitude, longitude)

    // Calculate aspects
    const aspectsList = this.calculateAspects(planetPositions)

    // Calculate ascendant and midheaven
    const ascendant = houses[0]
    const midheaven = houses[9] // 10th house cusp

    return {
      planets: planetPositions,
      houses,
      aspects: aspectsList,
      ascendant,
      midheaven,
    }
  },

  // Calculate planetary positions
  calculatePlanetaryPositions(date, latitude, longitude) {
    return planets.map((planet) => {
      // Calculate the planet's position using the astronomy library
      const position = Astronomy.calculatePlanetPosition(planet.name, date, latitude, longitude)

      // Determine the zodiac sign based on the longitude
      const sign = this.getZodiacSignByLongitude(position.longitude)

      // Calculate the degree within the sign (0-29)
      const signStartDegree = zodiacSigns.find((s) => s.name === sign).startDegree
      const degreeInSign = (((position.longitude - signStartDegree) % 30) + 30) % 30

      return {
        name: planet.name,
        sign,
        degree: Math.floor(degreeInSign),
        minutes: Math.floor((degreeInSign - Math.floor(degreeInSign)) * 60),
        longitude: position.longitude,
        latitude: position.latitude,
        retrograde: position.retrograde,
        symbol: planet.symbol,
      }
    })
  },

  // Calculate houses
  calculateHouses(date, latitude, longitude) {
    // Use the Placidus house system (most common)
    const houseCusps = Astronomy.calculateHouseCusps(date, latitude, longitude, "placidus")

    return houseCusps.map((cusp, index) => {
      const houseNumber = index + 1
      const sign = this.getZodiacSignByLongitude(cusp)

      // Calculate the degree within the sign (0-29)
      const signStartDegree = zodiacSigns.find((s) => s.name === sign).startDegree
      const degreeInSign = (((cusp - signStartDegree) % 30) + 30) % 30

      return {
        number: houseNumber,
        sign,
        degree: Math.floor(degreeInSign),
        minutes: Math.floor((degreeInSign - Math.floor(degreeInSign)) * 60),
        longitude: cusp,
      }
    })
  },

  // Calculate aspects between planets
  calculateAspects(planets) {
    const aspectsList = []

    // Compare each planet with every other planet
    for (let i = 0; i < planets.length; i++) {
      for (let j = i + 1; j < planets.length; j++) {
        const planet1 = planets[i]
        const planet2 = planets[j]

        // Calculate the angular difference
        let diff = Math.abs(planet1.longitude - planet2.longitude)
        if (diff > 180) diff = 360 - diff

        // Check if the difference matches any aspect
        for (const aspect of aspects) {
          const orb = aspect.orb

          if (Math.abs(diff - aspect.angle) <= orb) {
            aspectsList.push({
              planet1: planet1.name,
              planet2: planet2.name,
              type: aspect.name,
              orb: Math.abs(diff - aspect.angle).toFixed(1),
              exact: Math.abs(diff - aspect.angle) < 1,
              harmonious: aspect.harmonious,
              symbol: aspect.symbol,
            })
            break // Only add the closest matching aspect
          }
        }
      }
    }

    return aspectsList
  },

  // Generate mock chart data for testing or when real calculations fail
  generateMockChartData(formData) {
    const { birthMonth, birthDay, birthYear } = formData
    const sunSign = this.getZodiacSign(birthMonth, birthDay)

    // Generate random positions for planets
    const mockPlanets = planets.map((planet) => {
      const randomSign = zodiacSigns[Math.floor(Math.random() * zodiacSigns.length)].name
      const randomDegree = Math.floor(Math.random() * 30)
      return {
        name: planet.name,
        sign: planet.name === "Sun" ? sunSign : randomSign,
        degree: randomDegree,
        minutes: Math.floor(Math.random() * 60),
        longitude: zodiacSigns.findIndex((s) => s.name === randomSign) * 30 + randomDegree,
        latitude: Math.random() * 10 - 5,
        retrograde: Math.random() > 0.8,
        symbol: planet.symbol,
      }
    })

    // Generate houses
    const mockHouses = Array.from({ length: 12 }, (_, i) => {
      const houseNumber = i + 1
      const randomSign = zodiacSigns[Math.floor(Math.random() * zodiacSigns.length)].name
      const randomDegree = Math.floor(Math.random() * 30)
      return {
        number: houseNumber,
        sign: randomSign,
        degree: randomDegree,
        minutes: Math.floor(Math.random() * 60),
        longitude: zodiacSigns.findIndex((s) => s.name === randomSign) * 30 + randomDegree,
      }
    })

    // Generate aspects
    const mockAspects = []
    for (let i = 0; i < 8; i++) {
      const planet1Index = Math.floor(Math.random() * planets.length)
      let planet2Index = Math.floor(Math.random() * planets.length)

      // Ensure planet2 is different from planet1
      while (planet2Index === planet1Index) {
        planet2Index = Math.floor(Math.random() * planets.length)
      }

      const aspectIndex = Math.floor(Math.random() * aspects.length)
      const aspect = aspects[aspectIndex]
      const orb = (Math.random() * 5).toFixed(1)

      mockAspects.push({
        planet1: planets[planet1Index].name,
        planet2: planets[planet2Index].name,
        type: aspect.name,
        orb,
        exact: Number.parseFloat(orb) < 1,
        harmonious: aspect.harmonious,
        symbol: aspect.symbol,
      })
    }

    return {
      planets: mockPlanets,
      houses: mockHouses,
      aspects: mockAspects,
      ascendant: {
        sign: zodiacSigns[Math.floor(Math.random() * zodiacSigns.length)].name,
        degree: Math.floor(Math.random() * 30),
        minutes: Math.floor(Math.random() * 60),
      },
      midheaven: {
        sign: zodiacSigns[Math.floor(Math.random() * zodiacSigns.length)].name,
        degree: Math.floor(Math.random() * 30),
        minutes: Math.floor(Math.random() * 60),
      },
    }
  },
}
