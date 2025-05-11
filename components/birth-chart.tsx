"use client"

import { useEffect, useRef } from "react"

export default function BirthChart({ chartData }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    if (!chartData || !canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    const width = canvas.width
    const height = canvas.height
    const centerX = width / 2
    const centerY = height / 2
    const radius = Math.min(centerX, centerY) - 20

    // Clear canvas
    ctx.clearRect(0, 0, width, height)

    // Draw chart wheel
    drawChartWheel(ctx, centerX, centerY, radius, chartData)

    // Draw planets
    drawPlanets(ctx, centerX, centerY, radius, chartData)
  }, [chartData])

  const drawChartWheel = (ctx, centerX, centerY, radius, chartData) => {
    // Draw outer circle
    ctx.beginPath()
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI)
    ctx.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue("--primary")
    ctx.lineWidth = 2
    ctx.stroke()

    // Draw inner circle
    ctx.beginPath()
    ctx.arc(centerX, centerY, radius * 0.8, 0, 2 * Math.PI)
    ctx.stroke()

    // Draw house lines
    chartData.houses.forEach((house) => {
      const angle = (house.degree / 30) * 2 * Math.PI
      ctx.beginPath()
      ctx.moveTo(centerX, centerY)
      ctx.lineTo(centerX + radius * Math.cos(angle), centerY + radius * Math.sin(angle))
      ctx.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue("--muted-foreground")
      ctx.lineWidth = 1
      ctx.stroke()

      // Draw house numbers
      const textRadius = radius * 0.9
      const textX = centerX + textRadius * Math.cos(angle + 0.1)
      const textY = centerY + textRadius * Math.sin(angle + 0.1)
      ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue("--foreground")
      ctx.font = "12px sans-serif"
      ctx.fillText(house.number.toString(), textX, textY)
    })

    // Draw zodiac signs
    const zodiacSigns = ["♈", "♉", "♊", "♋", "♌", "♍", "♎", "♏", "♐", "♑", "♒", "♓"]
    for (let i = 0; i < 12; i++) {
      const angle = (i * 30 * Math.PI) / 180
      const textRadius = radius * 0.7
      const textX = centerX + textRadius * Math.cos(angle)
      const textY = centerY + textRadius * Math.sin(angle)
      ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue("--primary")
      ctx.font = "20px sans-serif"
      ctx.fillText(zodiacSigns[i], textX - 10, textY + 5)
    }
  }

  const drawPlanets = (ctx, centerX, centerY, radius, chartData) => {
    const planetSymbols = {}
    chartData.planets.forEach((planet) => {
      planetSymbols[planet.name] = planet.symbol || "?"
    })

    // Calculate positions for planets to avoid overlap
    const positions = []

    chartData.planets.forEach((planet) => {
      // Use the actual longitude for precise positioning
      const baseAngle = (planet.longitude * Math.PI) / 180

      // Find a position that doesn't overlap with existing planets
      let angle = baseAngle
      let distance = radius * 0.5
      let overlap = true
      let attempts = 0

      while (overlap && attempts < 10) {
        overlap = positions.some((pos) => {
          const dist = Math.sqrt(
            Math.pow(centerX + distance * Math.cos(angle) - pos.x, 2) +
              Math.pow(centerY + distance * Math.sin(angle) - pos.y, 2),
          )
          return dist < 25
        })

        if (overlap) {
          distance += 5
          angle += 0.05
          attempts++
        }
      }

      const x = centerX + distance * Math.cos(angle)
      const y = centerY + distance * Math.sin(angle)

      positions.push({ x, y })

      // Draw planet symbol
      ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue("--primary")
      ctx.font = "16px sans-serif"
      ctx.fillText(planetSymbols[planet.name] || "?", x - 8, y + 5)

      // Add retrograde symbol if the planet is retrograde
      if (planet.retrograde) {
        ctx.fillText("℞", x + 8, y + 5)
      }

      // Draw line connecting planet to its position on the wheel
      ctx.beginPath()
      ctx.moveTo(x, y)
      const wheelX = centerX + radius * Math.cos(baseAngle)
      const wheelY = centerY + radius * Math.sin(baseAngle)
      ctx.lineTo(wheelX, wheelY)
      ctx.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue("--muted-foreground")
      ctx.lineWidth = 0.5
      ctx.stroke()
    })
  }

  return (
    <div className="chart-container">
      <canvas
        ref={canvasRef}
        width={500}
        height={500}
        className="mx-auto"
        style={{ maxWidth: "100%", height: "auto" }}
      />
    </div>
  )
}
