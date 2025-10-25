import Link from 'next/link'
import { getInterviewSessions } from '@/lib/cosmic'
import SessionCard from '@/components/SessionCard'

export const revalidate = 60

export default async function SessionsPage() {
  const sessions = await getInterviewSessions()

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-secondary-900 mb-4">
          🎯 Interview Sessions
        </h1>
        <p className="text-xl text-secondary-600">
          Track all interview sessions with real-time emotion analysis, confidence metrics, and security monitoring
        </p>
      </div>

      {sessions.length === 0 ? (
        <div className="bg-white rounded-lg shadow-md p-12 text-center border border-secondary-200">
          <div className="text-6xl mb-4">📝</div>
          <h2 className="text-2xl font-semibold text-secondary-900 mb-2">
            No Interview Sessions Yet
          </h2>
          <p className="text-secondary-600 mb-6">
            Interview sessions will appear here once they are created
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sessions.map((session) => (
            <SessionCard key={session.id} session={session} />
          ))}
        </div>
      )}
    </div>
  )
}