import Link from 'next/link'
import { 
  getInterviewSessions, 
  getCandidateProfiles, 
  getPerformanceReports,
  getQuestions,
  getAchievementBadges 
} from '@/lib/cosmic'
import StatsCard from '@/components/StatsCard'
import { Users, TrendingUp, Award, ClipboardList } from 'lucide-react'

export const revalidate = 60 // Revalidate every 60 seconds

export default async function HomePage() {
  const [sessions, candidates, reports, questions, badges] = await Promise.all([
    getInterviewSessions(),
    getCandidateProfiles(),
    getPerformanceReports(),
    getQuestions(),
    getAchievementBadges()
  ])

  // Calculate average scores
  const avgSessionScore = sessions.length > 0
    ? sessions.reduce((acc, s) => acc + (s.metadata.overall_score || 0), 0) / sessions.length
    : 0

  const avgCandidateScore = candidates.length > 0
    ? candidates.reduce((acc, c) => acc + (c.metadata.average_score || 0), 0) / candidates.length
    : 0

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-4">
          🎯 Smart Vision AI Interview Platform
        </h1>
        <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
          Intelligent emotion-aware interview assessment system with real-time analysis, 
          comprehensive performance tracking, and AI-powered personalized feedback
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <StatsCard
          icon={<Users className="w-8 h-8 text-primary-600" />}
          title="Candidates"
          value={candidates.length}
          subtitle="Total profiles"
          trend={`Avg Score: ${avgCandidateScore.toFixed(1)}%`}
        />
        <StatsCard
          icon={<TrendingUp className="w-8 h-8 text-accent-600" />}
          title="Sessions"
          value={sessions.length}
          subtitle="Interviews completed"
          trend={`Avg Score: ${avgSessionScore.toFixed(1)}%`}
        />
        <StatsCard
          icon={<ClipboardList className="w-8 h-8 text-primary-600" />}
          title="Questions"
          value={questions.length}
          subtitle="In question bank"
          trend="Multiple categories"
        />
        <StatsCard
          icon={<Award className="w-8 h-8 text-accent-600" />}
          title="Badges"
          value={badges.length}
          subtitle="Achievement types"
          trend="Performance tracking"
        />
      </div>

      {/* Quick Links */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <Link
          href="/sessions"
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-200 border border-secondary-200"
        >
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xl font-semibold text-secondary-900">Interview Sessions</h3>
            <span className="text-3xl">🎯</span>
          </div>
          <p className="text-secondary-600 mb-4">
            View all interview sessions with emotion timelines, confidence tracking, and detailed analytics
          </p>
          <span className="text-primary-600 font-medium hover:text-primary-700">
            View Sessions →
          </span>
        </Link>

        <Link
          href="/candidates"
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-200 border border-secondary-200"
        >
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xl font-semibold text-secondary-900">Candidate Profiles</h3>
            <span className="text-3xl">👤</span>
          </div>
          <p className="text-secondary-600 mb-4">
            Manage candidate profiles with skills tracking, achievement badges, and interview history
          </p>
          <span className="text-primary-600 font-medium hover:text-primary-700">
            View Candidates →
          </span>
        </Link>

        <Link
          href="/reports"
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-200 border border-secondary-200"
        >
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xl font-semibold text-secondary-900">Performance Reports</h3>
            <span className="text-3xl">📊</span>
          </div>
          <p className="text-secondary-600 mb-4">
            Access detailed performance reports with emotion analysis and personalized feedback
          </p>
          <span className="text-primary-600 font-medium hover:text-primary-700">
            View Reports →
          </span>
        </Link>

        <Link
          href="/questions"
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-200 border border-secondary-200"
        >
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xl font-semibold text-secondary-900">Questions Bank</h3>
            <span className="text-3xl">📋</span>
          </div>
          <p className="text-secondary-600 mb-4">
            Browse categorized interview questions with difficulty levels and expected keywords
          </p>
          <span className="text-primary-600 font-medium hover:text-primary-700">
            View Questions →
          </span>
        </Link>

        <Link
          href="/badges"
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-200 border border-secondary-200"
        >
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xl font-semibold text-secondary-900">Achievement Badges</h3>
            <span className="text-3xl">🏆</span>
          </div>
          <p className="text-secondary-600 mb-4">
            Explore achievement badges for performance milestones and technical excellence
          </p>
          <span className="text-primary-600 font-medium hover:text-primary-700">
            View Badges →
          </span>
        </Link>

        <div className="bg-gradient-to-br from-primary-50 to-accent-50 p-6 rounded-lg shadow-md border border-primary-200">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xl font-semibold text-secondary-900">AI-Powered Features</h3>
            <span className="text-3xl">🤖</span>
          </div>
          <ul className="space-y-2 text-secondary-700">
            <li>✨ Real-time emotion detection</li>
            <li>🎯 Confidence tracking</li>
            <li>📈 Performance analytics</li>
            <li>🔒 Security monitoring</li>
          </ul>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white rounded-lg shadow-md p-8 border border-secondary-200">
        <h2 className="text-2xl font-bold text-secondary-900 mb-6 text-center">
          Platform Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-4xl mb-3">😊</div>
            <h3 className="font-semibold text-secondary-900 mb-2">Emotion Recognition</h3>
            <p className="text-sm text-secondary-600">
              7 emotions tracked in real-time with DeepFace AI
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-3">🎤</div>
            <h3 className="font-semibold text-secondary-900 mb-2">Voice Interaction</h3>
            <p className="text-sm text-secondary-600">
              Speech recognition and text-to-speech integration
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-3">💻</div>
            <h3 className="font-semibold text-secondary-900 mb-2">Code Execution</h3>
            <p className="text-sm text-secondary-600">
              Live coding environment with test case validation
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-3">📊</div>
            <h3 className="font-semibold text-secondary-900 mb-2">Analytics Dashboard</h3>
            <p className="text-sm text-secondary-600">
              Comprehensive performance metrics and visualizations
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-3">🔒</div>
            <h3 className="font-semibold text-secondary-900 mb-2">Security Monitoring</h3>
            <p className="text-sm text-secondary-600">
              Face detection and multi-person detection alerts
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-3">🎯</div>
            <h3 className="font-semibold text-secondary-900 mb-2">Adaptive Questions</h3>
            <p className="text-sm text-secondary-600">
              AI-generated questions based on resume analysis
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}