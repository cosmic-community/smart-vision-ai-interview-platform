import type { AchievementBadge } from '@/types'
import { Award } from 'lucide-react'

interface BadgeCardProps {
  badge: AchievementBadge
}

export default function BadgeCard({ badge }: BadgeCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-secondary-200 hover:shadow-xl transition-shadow duration-200">
      <div className="flex items-start gap-4 mb-3">
        <div className="text-4xl">{badge.metadata.badge_icon}</div>
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-secondary-900 mb-1">
            {badge.metadata.badge_name}
          </h3>
          <span className="text-xs px-2 py-1 rounded-full bg-primary-100 text-primary-800">
            {badge.metadata.badge_category.value}
          </span>
        </div>
      </div>

      <p className="text-secondary-700 mb-4">
        {badge.metadata.description}
      </p>

      {badge.metadata.criteria && (
        <p className="text-sm text-secondary-600 mb-4 italic">
          {badge.metadata.criteria}
        </p>
      )}

      <div className="flex items-center justify-between pt-4 border-t border-secondary-200">
        <div className="flex items-center gap-2">
          <Award className="w-4 h-4 text-accent-600" />
          <span className="text-sm font-medium text-secondary-900">
            {badge.metadata.points_value} points
          </span>
        </div>
      </div>
    </div>
  )
}