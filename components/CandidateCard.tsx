import Link from 'next/link'
import type { CandidateProfile } from '@/types'
import { Mail, TrendingUp, Award } from 'lucide-react'

interface CandidateCardProps {
  candidate: CandidateProfile
}

export default function CandidateCard({ candidate }: CandidateCardProps) {
  return (
    <Link
      href={`/candidates/${candidate.slug}`}
      className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-200 border border-secondary-200 p-6"
    >
      <div className="flex items-center gap-4 mb-4">
        {candidate.metadata.profile_photo ? (
          <img
            src={`${candidate.metadata.profile_photo.imgix_url}?w=100&h=100&fit=crop&auto=format,compress`}
            alt={candidate.metadata.full_name}
            className="w-16 h-16 rounded-full object-cover border-2 border-primary-100"
          />
        ) : (
          <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center text-2xl">
            👤
          </div>
        )}
        <div className="flex-1 min-w-0">
          <h3 className="text-xl font-semibold text-secondary-900 line-clamp-1">
            {candidate.metadata.full_name}
          </h3>
          {candidate.metadata.experience_level && (
            <span className="text-xs text-secondary-600">
              {candidate.metadata.experience_level.value}
            </span>
          )}
        </div>
      </div>

      <div className="space-y-2 mb-4">
        <div className="flex items-center gap-2 text-sm text-secondary-600">
          <Mail className="w-4 h-4" />
          <span className="line-clamp-1">{candidate.metadata.email}</span>
        </div>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-secondary-200">
        <div className="flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-primary-600" />
          <span className="text-sm font-medium text-secondary-900">
            Avg: {candidate.metadata.average_score || 0}%
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Award className="w-4 h-4 text-accent-600" />
          <span className="text-sm font-medium text-secondary-900">
            {candidate.metadata.achievement_badges?.length || 0} badges
          </span>
        </div>
      </div>
    </Link>
  )
}