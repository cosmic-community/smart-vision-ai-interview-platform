import Link from 'next/link'
import type { InterviewSession } from '@/types'
import { Calendar, User, TrendingUp } from 'lucide-react'

interface SessionCardProps {
  session: InterviewSession
}

export default function SessionCard({ session }: SessionCardProps) {
  return (
    <Link
      href={`/sessions/${session.slug}`}
      className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-200 border border-secondary-200 p-6"
    >
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-xl font-semibold text-secondary-900 line-clamp-1">
          {session.title}
        </h3>
        <span className="text-2xl">{session.metadata.session_type.value.includes('Technical') ? '💻' : session.metadata.session_type.value.includes('HR') ? '🤝' : '⚡'}</span>
      </div>

      <div className="space-y-2 mb-4">
        <div className="flex items-center gap-2 text-sm text-secondary-600">
          <User className="w-4 h-4" />
          <span className="line-clamp-1">{session.metadata.candidate_name}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-secondary-600">
          <Calendar className="w-4 h-4" />
          <span>{new Date(session.metadata.start_time).toLocaleDateString()}</span>
        </div>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-secondary-200">
        <div className="flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-primary-600" />
          <span className="text-sm font-medium text-secondary-900">
            Score: {session.metadata.overall_score || 0}%
          </span>
        </div>
        <span className={`text-xs px-2 py-1 rounded-full ${
          session.metadata.status.value === 'Completed' ? 'bg-accent-100 text-accent-800' :
          session.metadata.status.value === 'Reviewed' ? 'bg-primary-100 text-primary-800' :
          'bg-secondary-100 text-secondary-800'
        }`}>
          {session.metadata.status.value}
        </span>
      </div>
    </Link>
  )
}