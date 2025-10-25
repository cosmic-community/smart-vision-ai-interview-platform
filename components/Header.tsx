import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-md border-b border-secondary-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">🎯</span>
            <span className="text-xl font-bold text-secondary-900">
              Smart Vision AI
            </span>
          </Link>

          <div className="flex gap-6">
            <Link
              href="/sessions"
              className="text-secondary-700 hover:text-primary-600 font-medium transition-colors"
            >
              Sessions
            </Link>
            <Link
              href="/candidates"
              className="text-secondary-700 hover:text-primary-600 font-medium transition-colors"
            >
              Candidates
            </Link>
            <Link
              href="/reports"
              className="text-secondary-700 hover:text-primary-600 font-medium transition-colors"
            >
              Reports
            </Link>
            <Link
              href="/questions"
              className="text-secondary-700 hover:text-primary-600 font-medium transition-colors"
            >
              Questions
            </Link>
            <Link
              href="/badges"
              className="text-secondary-700 hover:text-primary-600 font-medium transition-colors"
            >
              Badges
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}