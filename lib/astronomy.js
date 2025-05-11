// A lightweight astronomy library for calculating planetary positions and houses
// This is a simplified version for demonstration purposes

// Constants
const DEG_TO_RAD = Math.PI / 180
const RAD_TO_DEG = 180 / Math.PI

// Julian Day calculation
function getJulianDay(date) {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours() + date.getMinutes() / 60 + date.getSeconds() / 3600

  let y = year
  let m = month

  if (m <= 2) {
    y -= 1
    m += 12
  }

  const a = Math.floor(y / 100)
  const b = 2 - a + Math.floor(a / 4)

  const jd = Math.floor(365.25 * (y + 4716)) + Math.floor(30.6001 * (m + 1)) + day + hour / 24 + b - 1524.5

  return jd
}

// Sidereal time calculation
function getSiderealTime(jd, longitude) {
  // Calculate Greenwich sidereal time
  const t = (jd - 2451545.0) / 36525
  let theta = 280.46061837 + 360.98564736629 * (jd - 2451545.0) + 0.000387933 * t * t - (t * t * t) / 38710000

  // Normalize to 0-360 degrees
  theta = ((theta % 360) + 360) % 360

  // Adjust for observer's longitude
  let siderealTime = theta + longitude
  siderealTime = ((siderealTime % 360) + 360) % 360

  return siderealTime
}

// Simplified planetary position calculations
// In a real implementation, you would use precise ephemeris data
function calculatePlanetaryPosition(planetName, date, latitude, longitude) {
  const jd = getJulianDay(date)

  // Simplified orbital elements for planets (very approximate)
  const planetData = {
    Sun: { period: 1, eccentricity: 0.0167, inclination: 0, longitude: 0, perihelion: 282.9404 },
    Moon: { period: 0.0748, eccentricity: 0.0549, inclination: 5.145, longitude: 125.1228, perihelion: 318.0634 },
    Mercury: { period: 0.2408, eccentricity: 0.2056, inclination: 7.0, longitude: 48.3313, perihelion: 29.1241 },
    Venus: { period: 0.6152, eccentricity: 0.0068, inclination: 3.39, longitude: 76.6799, perihelion: 54.891 },
    Mars: { period: 1.8809, eccentricity: 0.0934, inclination: 1.85, longitude: 49.5574, perihelion: 286.5016 },
    Jupiter: { period: 11.8622, eccentricity: 0.0484, inclination: 1.303, longitude: 100.4542, perihelion: 273.8777 },
    Saturn: { period: 29.4577, eccentricity: 0.0542, inclination: 2.485, longitude: 113.6634, perihelion: 339.3939 },
    Uranus: { period: 84.0139, eccentricity: 0.0472, inclination: 0.773, longitude: 74.0005, perihelion: 96.6612 },
    Neptune: { period: 164.7913, eccentricity: 0.0086, inclination: 1.77, longitude: 131.7806, perihelion: 272.8461 },
    Pluto: { period: 248.543, eccentricity: 0.2488, inclination: 17.16, longitude: 110.303, perihelion: 113.7637 },
  }

  // Get planet data
  const planet = planetData[planetName]
  if (!planet) {
    throw new Error(`Unknown planet: ${planetName}`)
  }

  // Calculate mean anomaly
  const t = (jd - 2451545.0) / 36525 // Julian centuries since J2000.0
  const n = 360 / (planet.period * 365.25) // Mean daily motion in degrees
  const L = (planet.longitude + n * t * 36525) % 360 // Mean longitude
  const M = (L - planet.perihelion + 360) % 360 // Mean anomaly

  // Solve Kepler's equation (simplified)
  let E = M // Initial guess for eccentric anomaly
  for (let i = 0; i < 5; i++) {
    // 5 iterations is usually enough for low eccentricity
    E = M + planet.eccentricity * Math.sin(E * DEG_TO_RAD) * RAD_TO_DEG
  }

  // Calculate true anomaly
  const xv = Math.cos(E * DEG_TO_RAD) - planet.eccentricity
  const yv = Math.sqrt(1 - planet.eccentricity * planet.eccentricity) * Math.sin(E * DEG_TO_RAD)
  let v = Math.atan2(yv, xv) * RAD_TO_DEG
  if (v < 0) v += 360

  // Calculate longitude in the ecliptic
  const lon = (v + planet.perihelion) % 360

  // Simplified calculation for latitude (inclination effect)
  const lat = Math.sin((lon - planet.longitude) * DEG_TO_RAD) * planet.inclination

  // Determine if retrograde (very simplified)
  // In reality, this requires calculating the planet's velocity vector
  const retrograde = Math.random() > 0.8 // ~20% chance of being retrograde

  return {
    longitude: lon,
    latitude: lat,
    retrograde,
  }
}

// Calculate house cusps using the Placidus system
function calculateHouseCusps(date, latitude, longitude, system = "placidus") {
  const jd = getJulianDay(date)
  const siderealTime = getSiderealTime(jd, longitude)

  // Convert latitude to radians
  const latRad = latitude * DEG_TO_RAD

  // Calculate RAMC (Right Ascension of the Medium Coeli)
  const RAMC = siderealTime

  // Calculate the ecliptic longitude of the MC (Medium Coeli)
  const tanRAMC = Math.tan(RAMC * DEG_TO_RAD)
  let MC = Math.atan2(tanRAMC, Math.cos(23.4392911 * DEG_TO_RAD)) * RAD_TO_DEG
  if (MC < 0) MC += 180
  if (RAMC > 180) MC += 180

  // Calculate the ecliptic longitude of the Ascendant
  const ascendant =
    Math.atan2(
      Math.cos(RAMC * DEG_TO_RAD),
      Math.sin(RAMC * DEG_TO_RAD) * Math.cos(23.4392911 * DEG_TO_RAD) +
        Math.tan(latRad) * Math.sin(23.4392911 * DEG_TO_RAD),
    ) * RAD_TO_DEG

  // Normalize to 0-360
  const normalizedAscendant = ((ascendant % 360) + 360) % 360

  // For Placidus houses
  if (system === "placidus") {
    // House cusps array (12 houses)
    const cusps = new Array(12)

    // Set the Ascendant (1st house cusp)
    cusps[0] = normalizedAscendant

    // Set the MC (10th house cusp)
    cusps[9] = ((MC % 360) + 360) % 360

    // Set the Descendant (7th house cusp) - opposite to Ascendant
    cusps[6] = (cusps[0] + 180) % 360

    // Set the IC (4th house cusp) - opposite to MC
    cusps[3] = (cusps[9] + 180) % 360

    // Calculate intermediate house cusps (simplified)
    // In a real implementation, this would involve more complex calculations

    // Houses 11 and 12
    cusps[10] = (cusps[9] + 30) % 360
    cusps[11] = (cusps[9] + 60) % 360

    // Houses 2 and 3
    cusps[1] = (cusps[0] + 30) % 360
    cusps[2] = (cusps[0] + 60) % 360

    // Houses 5 and 6
    cusps[4] = (cusps[3] + 30) % 360
    cusps[5] = (cusps[3] + 60) % 360

    // Houses 8 and 9
    cusps[7] = (cusps[6] + 30) % 360
    cusps[8] = (cusps[6] + 60) % 360

    return cusps
  }

  // For equal houses (fallback)
  const cusps = new Array(12)
  for (let i = 0; i < 12; i++) {
    cusps[i] = (normalizedAscendant + i * 30) % 360
  }

  return cusps
}

export const Astronomy = {
  getJulianDay,
  getSiderealTime,
  calculatePlanetaryPosition,
  calculateHouseCusps,
}
