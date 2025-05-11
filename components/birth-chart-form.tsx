"use client"

import { useState } from "react"
import { zodiac } from "@/lib/zodiac"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import BirthChart from "@/components/birth-chart"
import { generatePDF } from "@/lib/generate-pdf"

export default function BirthChartForm() {
  const [formData, setFormData] = useState({
    name: "",
    birthMonth: "",
    birthDay: "",
    birthYear: "",
    birthTime: "",
    birthLocation: "",
  })

  const [chartData, setChartData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

  const days = Array.from({ length: 31 }, (_, i) => i + 1)
  const years = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i)

  const hours = Array.from({ length: 24 }, (_, i) => {
    const hour = i.toString().padStart(2, "0")
    return `${hour}:00`
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Use real astronomical calculations
      const chartData = zodiac.calculateBirthChart(formData)
      setChartData(chartData)
    } catch (error) {
      console.error("Error generating chart:", error)
      // Fallback to mock data if real calculations fail
      const mockChartData = zodiac.generateMockChartData(formData)
      setChartData(mockChartData)
    } finally {
      setIsLoading(false)
    }
  }

  const handleDownloadPDF = () => {
    if (!chartData) return

    generatePDF({
      name: formData.name || "Your",
      chartData,
      formData,
    })
  }

  return (
    <div className="space-y-8">
      <Card className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div>
              <Label htmlFor="name">Your Name (Optional)</Label>
              <Input
                id="name"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="birthMonth">Birth Month</Label>
                <Select
                  value={formData.birthMonth}
                  onValueChange={(value) => handleSelectChange("birthMonth", value)}
                  required
                >
                  <SelectTrigger id="birthMonth">
                    <SelectValue placeholder="Month" />
                  </SelectTrigger>
                  <SelectContent>
                    {months.map((month, index) => (
                      <SelectItem key={month} value={(index + 1).toString()}>
                        {month}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="birthDay">Birth Day</Label>
                <Select
                  value={formData.birthDay}
                  onValueChange={(value) => handleSelectChange("birthDay", value)}
                  required
                >
                  <SelectTrigger id="birthDay">
                    <SelectValue placeholder="Day" />
                  </SelectTrigger>
                  <SelectContent>
                    {days.map((day) => (
                      <SelectItem key={day} value={day.toString()}>
                        {day}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="birthYear">Birth Year</Label>
                <Select
                  value={formData.birthYear}
                  onValueChange={(value) => handleSelectChange("birthYear", value)}
                  required
                >
                  <SelectTrigger id="birthYear">
                    <SelectValue placeholder="Year" />
                  </SelectTrigger>
                  <SelectContent>
                    {years.map((year) => (
                      <SelectItem key={year} value={year.toString()}>
                        {year}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="birthTime">Birth Time (Optional)</Label>
                <Select value={formData.birthTime} onValueChange={(value) => handleSelectChange("birthTime", value)}>
                  <SelectTrigger id="birthTime">
                    <SelectValue placeholder="Select time (optional)" />
                  </SelectTrigger>
                  <SelectContent>
                    {hours.map((hour) => (
                      <SelectItem key={hour} value={hour}>
                        {hour}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="birthLocation">Birth Location (Optional)</Label>
                <Input
                  id="birthLocation"
                  name="birthLocation"
                  placeholder="City, Country"
                  value={formData.birthLocation}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Generating Chart..." : "Generate Birth Chart"}
          </Button>
        </form>
      </Card>

      {chartData && (
        <div className="space-y-6">
          <Card className="p-6">
            <div className="space-y-6">
              <div className="text-center">
                <h2 className="text-2xl font-bold">
                  {formData.name ? `${formData.name}'s Birth Chart` : "Your Birth Chart"}
                </h2>
                <p className="text-muted-foreground">
                  {months[Number.parseInt(formData.birthMonth) - 1]} {formData.birthDay}, {formData.birthYear}
                  {formData.birthTime && ` at ${formData.birthTime}`}
                  {formData.birthLocation && ` in ${formData.birthLocation}`}
                </p>
              </div>

              <BirthChart chartData={chartData} />

              <Button onClick={handleDownloadPDF} className="w-full">
                Download PDF Report
              </Button>
            </div>
          </Card>

          <Card className="p-6">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Planetary Positions</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {chartData.planets.map((planet) => (
                  <div key={planet.name} className="flex justify-between border-b pb-2">
                    <span className="font-medium">{planet.name}</span>
                    <span>
                      {planet.sign} {planet.degree}°
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Houses</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {chartData.houses.map((house) => (
                  <div key={house.number} className="flex justify-between border-b pb-2">
                    <span className="font-medium">House {house.number}</span>
                    <span>
                      {house.sign} {house.degree}°
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Aspects</h3>
              <div className="grid grid-cols-1 gap-2">
                {chartData.aspects.map((aspect, index) => (
                  <div key={index} className="flex justify-between border-b pb-2">
                    <span>
                      {aspect.planet1} {aspect.type} {aspect.planet2}
                    </span>
                    <span className="text-muted-foreground">{aspect.orb}°</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      )}
    </div>
  )
}
