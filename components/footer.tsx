import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Cosmic Blueprint</h3>
            <p className="text-sm text-muted-foreground">
              Discover your cosmic blueprint with free personalized astrology reports, birth charts, compatibility
              readings, and more.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">Reports</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/reports/natal-chart"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Natal Chart
                </Link>
              </li>
              <li>
                <Link
                  href="/reports/personality"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Personality & Life Purpose
                </Link>
              </li>
              <li>
                <Link
                  href="/reports/compatibility"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Love & Relationship Compatibility
                </Link>
              </li>
              <li>
                <Link href="/reports/child" className="text-muted-foreground hover:text-primary transition-colors">
                  Child Report
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">Exclusive Reports</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/reports/past-life" className="text-muted-foreground hover:text-primary transition-colors">
                  Past Life Karma
                </Link>
              </li>
              <li>
                <Link
                  href="/reports/ancestral-karma"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Ancestral Karma
                </Link>
              </li>
              <li>
                <Link href="/reports/soul-ties" className="text-muted-foreground hover:text-primary transition-colors">
                  Soul Ties
                </Link>
              </li>
              <li>
                <Link
                  href="/reports/karmic-lessons"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Karmic Lessons
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Cosmic Blueprint. All rights reserved.</p>
          <p className="mt-2">
            This site is for entertainment purposes only. The information provided is not intended to replace
            professional advice.
          </p>
        </div>
      </div>
    </footer>
  )
}
