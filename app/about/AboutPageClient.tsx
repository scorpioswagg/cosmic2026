"use client"

export default function AboutPageClient() {
  return (
    <div className="container py-12 max-w-4xl">
      <div className="space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Cosmic Blueprint</h1>
          <p className="text-muted-foreground md:text-lg">Our mission and approach to astrology</p>
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <h2>Our Mission</h2>
          <p>
            At Cosmic Blueprint, we believe that astrology is a powerful tool for self-discovery, personal growth, and
            spiritual evolution. Our mission is to make accurate astrological insights accessible to everyone,
            regardless of their background or financial resources.
          </p>
          <p>
            We provide free, high-quality astrology reports and educational content to help you understand your unique
            cosmic blueprint—the celestial patterns that were present at the moment of your birth and continue to
            influence your life journey.
          </p>

          <h2>Our Approach to Astrology</h2>
          <p>
            We view astrology as a symbolic language that describes the relationship between the cosmos and human
            experience. Rather than being deterministic or fatalistic, we believe that astrology reveals potentials,
            patterns, and possibilities that you can work with consciously.
          </p>
          <p>
            Our approach integrates traditional astrological wisdom with modern psychological insights and spiritual
            perspectives. We focus particularly on evolutionary and karmic astrology, which examines the soul's journey
            across lifetimes and the lessons, gifts, and challenges you've brought into this incarnation.
          </p>

          <h2>Our Technology</h2>
          <p>
            Cosmic Blueprint is built using modern web technologies that prioritize speed, accessibility, and user
            experience. Our platform runs entirely on free-tier infrastructure, allowing us to provide these services at
            no cost to you.
          </p>
          <p>
            We use client-side calculations for chart generation and PDF reports, ensuring your data remains private and
            secure. Our lightweight implementation means the site loads quickly even on slower connections, making
            astrology accessible to people worldwide.
          </p>

          <h2>Educational Focus</h2>
          <p>
            Beyond providing reports, we're committed to astrological education. Our blog features articles that explain
            astrological concepts in clear, accessible language, helping you develop a deeper understanding of this
            ancient wisdom tradition.
          </p>
          <p>
            We believe that the more you understand about your birth chart, the more effectively you can work with its
            energies, making conscious choices that align with your highest potential.
          </p>

          <h2>A Note on Interpretation</h2>
          <p>
            While we strive to provide accurate and insightful astrological information, we recognize that
            interpretation is both an art and a science. The reports we generate offer general patterns and
            possibilities based on astrological principles, but your free will and personal choices remain the primary
            factors in shaping your life.
          </p>
          <p>
            We encourage you to approach astrology as a tool for self-reflection and growth rather than a fixed
            prediction of your future. The stars may incline, but they do not compel.
          </p>

          <h2>Contact Us</h2>
          <p>
            We welcome your feedback, questions, and suggestions. If you'd like to get in touch with the Cosmic
            Blueprint team, please email us at{" "}
            <a href="mailto:contact@cosmicblueprint.space">contact@cosmicblueprint.space</a>.
          </p>
        </div>
      </div>
    </div>
  )
}
