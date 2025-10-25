import { getAchievementBadges } from '@/lib/cosmic'
import BadgeCard from '@/components/BadgeCard'

export const revalidate = 60

export default async function BadgesPage() {
  const badges = await getAchievementBadges()

  // Group badges by category
  const badgesByCategory = badges.reduce((acc, badge) => {
    const category = badge.metadata.badge_category?.value || 'Other'
    if (!acc[category]) {
      acc[category] = []
    }
    acc[category].push(badge)
    return acc
  }, {} as Record<string, typeof badges>)

  const categories = Object.keys(badgesByCategory).sort()

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-secondary-900 mb-4">
          🏆 Achievement Badges
        </h1>
        <p className="text-xl text-secondary-600">
          Explore achievement badges for performance milestones and technical excellence
        </p>
      </div>

      {badges.length === 0 ? (
        <div className="bg-white rounded-lg shadow-md p-12 text-center border border-secondary-200">
          <div className="text-6xl mb-4">🏅</div>
          <h2 className="text-2xl font-semibold text-secondary-900 mb-2">
            No Achievement Badges Yet
          </h2>
          <p className="text-secondary-600 mb-6">
            Achievement badges will appear here once they are created
          </p>
        </div>
      ) : (
        <div className="space-y-8">
          {categories.map((category) => {
            const categoryBadges = badgesByCategory[category]
            if (!categoryBadges || categoryBadges.length === 0) {
              return null
            }

            return (
              <div key={category}>
                <h2 className="text-2xl font-bold text-secondary-900 mb-4">
                  {category}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categoryBadges.map((badge) => (
                    <BadgeCard key={badge.id} badge={badge} />
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}