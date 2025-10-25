import type { AchievementBadge } from '@/types'

interface BadgeGridProps {
  badges: AchievementBadge[]
}

export default function BadgeGrid({ badges }: BadgeGridProps) {
  if (!badges || badges.length === 0) {
    return null
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {badges.map((badge) => (
        <div
          key={badge.id}
          className="bg-white rounded-lg shadow-md p-4 border border-secondary-200 text-center hover:shadow-lg transition-shadow duration-200"
        >
          <div className="text-4xl mb-2">{badge.metadata.badge_icon}</div>
          <h4 className="text-sm font-semibold text-secondary-900 mb-1 line-clamp-2">
            {badge.metadata.badge_name}
          </h4>
          <span className="text-xs text-accent-600 font-medium">
            {badge.metadata.points_value} pts
          </span>
        </div>
      ))}
    </div>
  )
}