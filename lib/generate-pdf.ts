"use client"

import { jsPDF } from "jspdf"

export const generatePDF = ({ name, chartData, formData }) => {
  const doc = new jsPDF()

  // Add title
  doc.setFontSize(22)
  doc.setTextColor(128, 0, 128) // Purple color
  doc.text(`${name} Birth Chart Report`, 105, 20, { align: "center" })

  // Add birth details
  doc.setFontSize(12)
  doc.setTextColor(0, 0, 0)
  doc.text(`Birth Date: ${formData.birthMonth}/${formData.birthDay}/${formData.birthYear}`, 20, 40)

  if (formData.birthTime) {
    doc.text(`Birth Time: ${formData.birthTime}`, 20, 50)
  }

  if (formData.birthLocation) {
    doc.text(`Birth Location: ${formData.birthLocation}`, 20, formData.birthTime ? 60 : 50)
  }

  // Add sun sign information
  const sunPlanet = chartData.planets.find((p) => p.name === "Sun")
  if (sunPlanet) {
    doc.setFontSize(16)
    doc.setTextColor(128, 0, 128)
    doc.text(`Sun Sign: ${sunPlanet.sign}`, 20, 80)

    doc.setFontSize(12)
    doc.setTextColor(0, 0, 0)
    doc.text(getSunSignDescription(sunPlanet.sign), 20, 90, { maxWidth: 170 })
  }

  // Add ascendant information
  doc.setFontSize(16)
  doc.setTextColor(128, 0, 128)
  doc.text(`Ascendant: ${chartData.ascendant.sign}`, 20, 130)

  doc.setFontSize(12)
  doc.setTextColor(0, 0, 0)
  doc.text(getAscendantDescription(chartData.ascendant.sign), 20, 140, { maxWidth: 170 })

  // Add planetary positions
  doc.setFontSize(16)
  doc.setTextColor(128, 0, 128)
  doc.text("Planetary Positions", 20, 180)

  doc.setFontSize(12)
  doc.setTextColor(0, 0, 0)

  chartData.planets.forEach((planet, index) => {
    const y = 190 + index * 10
    const retrograde = planet.retrograde ? " (Retrograde)" : ""
    doc.text(
      `${planet.name}${retrograde}: ${planet.sign} ${planet.degree}°${planet.minutes ? planet.minutes + "'" : ""}`,
      20,
      y,
    )
  })

  // Add a new page for aspects
  doc.addPage()

  doc.setFontSize(22)
  doc.setTextColor(128, 0, 128)
  doc.text("Astrological Aspects", 105, 20, { align: "center" })

  doc.setFontSize(12)
  doc.setTextColor(0, 0, 0)

  chartData.aspects.forEach((aspect, index) => {
    const y = 40 + index * 10
    doc.text(`${aspect.planet1} ${aspect.type} ${aspect.planet2} (Orb: ${aspect.orb}°)`, 20, y)
  })

  // Add houses information
  doc.setFontSize(16)
  doc.setTextColor(128, 0, 128)
  doc.text("Houses", 20, 130)

  doc.setFontSize(12)
  doc.setTextColor(0, 0, 0)

  chartData.houses.forEach((house, index) => {
    const y = 140 + index * 10
    if (y < 280) {
      // Ensure we don't go off the page
      doc.text(`House ${house.number}: ${house.sign} ${house.degree}°`, 20, y)
    }
  })

  // Add a disclaimer
  doc.setFontSize(10)
  doc.setTextColor(128, 128, 128)
  doc.text(
    "This report is for entertainment purposes only. The information provided is not intended to replace professional advice.",
    20,
    280,
  )

  // Save the PDF
  doc.save(`${name.replace(/\s+/g, "_")}_birth_chart.pdf`)
}

function getSunSignDescription(sign) {
  const descriptions = {
    Aries:
      "As an Aries, you are energetic, confident, and enthusiastic. You have a pioneering spirit and love to take initiative. Your natural leadership abilities and courage help you excel in challenging situations.",
    Taurus:
      "As a Taurus, you are reliable, patient, and practical. You appreciate beauty and comfort, and have a strong connection to the physical world. Your determination and persistence help you achieve long-term goals.",
    Gemini:
      "As a Gemini, you are versatile, curious, and communicative. You have a quick mind and enjoy learning about diverse subjects. Your adaptability and wit make you excellent at handling changing situations.",
    Cancer:
      "As a Cancer, you are intuitive, emotional, and nurturing. You have a strong connection to home and family. Your empathy and protective nature make you a supportive friend and family member.",
    Leo: "As a Leo, you are creative, passionate, and generous. You have natural charisma and enjoy being in the spotlight. Your warmth and loyalty make you a beloved friend and inspiring leader.",
    Virgo:
      "As a Virgo, you are analytical, practical, and detail-oriented. You have a methodical approach to life and value improvement. Your helpfulness and problem-solving abilities make you an invaluable team member.",
    Libra:
      "As a Libra, you are diplomatic, fair-minded, and social. You have a strong sense of justice and appreciate harmony. Your charm and ability to see multiple perspectives make you an excellent mediator.",
    Scorpio:
      "As a Scorpio, you are passionate, resourceful, and determined. You have emotional depth and powerful intuition. Your intensity and loyalty make you a transformative force in others' lives.",
    Sagittarius:
      "As a Sagittarius, you are optimistic, freedom-loving, and philosophical. You have a love for adventure and learning. Your honesty and enthusiasm inspire others to expand their horizons.",
    Capricorn:
      "As a Capricorn, you are disciplined, responsible, and ambitious. You have a practical approach to achieving your goals. Your patience and wisdom make you an excellent manager and advisor.",
    Aquarius:
      "As an Aquarius, you are innovative, independent, and humanitarian. You have original ideas and value intellectual freedom. Your vision and objectivity help you create positive change in society.",
    Pisces:
      "As a Pisces, you are compassionate, artistic, and intuitive. You have a deep connection to the spiritual and emotional realms. Your empathy and imagination make you a healing presence and creative visionary.",
  }

  return descriptions[sign] || "Description not available."
}

function getAscendantDescription(sign) {
  const descriptions = {
    Aries:
      "With an Aries Ascendant, you appear confident, direct, and energetic. You approach life with enthusiasm and aren't afraid to take initiative. Others see you as brave and independent.",
    Taurus:
      "With a Taurus Ascendant, you appear stable, reliable, and practical. You approach life methodically and value security. Others see you as grounded and dependable.",
    Gemini:
      "With a Gemini Ascendant, you appear quick-witted, versatile, and communicative. You approach life with curiosity and adaptability. Others see you as intellectual and sociable.",
    Cancer:
      "With a Cancer Ascendant, you appear nurturing, sensitive, and protective. You approach life with emotional awareness. Others see you as caring and intuitive.",
    Leo: "With a Leo Ascendant, you appear confident, warm, and dramatic. You approach life with creativity and enthusiasm. Others see you as charismatic and generous.",
    Virgo:
      "With a Virgo Ascendant, you appear analytical, precise, and helpful. You approach life with attention to detail. Others see you as intelligent and practical.",
    Libra:
      "With a Libra Ascendant, you appear diplomatic, charming, and balanced. You approach life seeking harmony. Others see you as fair-minded and sociable.",
    Scorpio:
      "With a Scorpio Ascendant, you appear intense, mysterious, and perceptive. You approach life with emotional depth. Others see you as powerful and transformative.",
    Sagittarius:
      "With a Sagittarius Ascendant, you appear optimistic, adventurous, and philosophical. You approach life with enthusiasm for growth. Others see you as honest and freedom-loving.",
    Capricorn:
      "With a Capricorn Ascendant, you appear disciplined, responsible, and ambitious. You approach life with determination. Others see you as mature and accomplished.",
    Aquarius:
      "With an Aquarius Ascendant, you appear innovative, independent, and humanitarian. You approach life with originality. Others see you as unique and forward-thinking.",
    Pisces:
      "With a Pisces Ascendant, you appear compassionate, dreamy, and receptive. You approach life with sensitivity. Others see you as gentle and imaginative.",
  }

  return descriptions[sign] || "Description not available."
}
