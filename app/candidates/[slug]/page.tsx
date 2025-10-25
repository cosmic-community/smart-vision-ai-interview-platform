// app/candidates/[slug]/page.tsx
import { getCandidateProfile } from '@/lib/cosmic'
import { notFound } from 'next/navigation'
import BadgeGrid from '@/components/BadgeGrid'
import { Mail, Phone, TrendingUp, Award } from 'lucide-react'

export const revalidate = 60

interface PageProps {
  params: Promise<{ slug: string }>
}

export default async function CandidateDetailPage({ params }: PageProps) {
  const { slug } = await params
  const candidate = await getCandidateProfile(slug)

  if (!candidate) {
    notFound()
  }

  const skills = candidate.metadata.parsed_skills

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header with Profile Photo */}
      <div className="bg-white rounded-lg shadow-md p-8 mb-8 border border-secondary-200">
        <div className="flex flex-col md:flex-row gap-6 items-start">
          {candidate.metadata.profile_photo && (
            <img
              src={`${candidate.metadata.profile_photo.imgix_url}?w=200&h=200&fit=crop&auto=format,compress`}
              alt={candidate.metadata.full_name}
              className="w-32 h-32 rounded-full object-cover border-4 border-primary-100"
            />
          )}
          <div className="flex-1">
            <h1 className="text-4xl font-bold text-secondary-900 mb-2">
              {candidate.metadata.full_name}
            </h1>
            <div className="space-y-2 text-secondary-600 mb-4">
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                <span>{candidate.metadata.email}</span>
              </div>
              {candidate.metadata.phone && (
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  <span>{candidate.metadata.phone}</span>
                </div>
              )}
            </div>
            {candidate.metadata.experience_level && (
              <span className="inline-block bg-primary-100 text-primary-800 px-4 py-2 rounded-full text-sm font-medium">
                {candidate.metadata.experience_level.value}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md border border-secondary-200">
          <div className="flex items-center justify-between mb-2">
            <span className="text-secondary-600">Average Score</span>
            <TrendingUp className="w-5 h-5 text-primary-600" />
          </div>
          <div className="text-3xl font-bold text-secondary-900">
            {candidate.metadata.average_score || 0}%
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border border-secondary-200">
          <div className="flex items-center justify-between mb-2">
            <span className="text-secondary-600">Total Interviews</span>
            <TrendingUp className="w-5 h-5 text-accent-600" />
          </div>
          <div className="text-3xl font-bold text-secondary-900">
            {candidate.metadata.total_interviews || 0}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border border-secondary-200">
          <div className="flex items-center justify-between mb-2">
            <span className="text-secondary-600">Achievements</span>
            <Award className="w-5 h-5 text-secondary-600" />
          </div>
          <div className="text-3xl font-bold text-secondary-900">
            {candidate.metadata.achievement_badges?.length || 0}
          </div>
        </div>
      </div>

      {/* Skills */}
      {skills && (
        <div className="bg-white rounded-lg shadow-md p-6 mb-8 border border-secondary-200">
          <h2 className="text-2xl font-bold text-secondary-900 mb-4">
            Skills & Expertise
          </h2>
          <div className="space-y-6">
            {skills.technical && skills.technical.length > 0 && (
              <div>
                <h3 className="font-semibold text-secondary-900 mb-3">
                  💻 Technical Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.technical.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {skills.soft_skills && skills.soft_skills.length > 0 && (
              <div>
                <h3 className="font-semibold text-secondary-900 mb-3">
                  🤝 Soft Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.soft_skills.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-accent-100 text-accent-800 px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {skills.certifications && skills.certifications.length > 0 && (
              <div>
                <h3 className="font-semibold text-secondary-900 mb-3">
                  🎓 Certifications
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.certifications.map((cert, index) => (
                    <span
                      key={index}
                      className="bg-secondary-100 text-secondary-800 px-3 py-1 rounded-full text-sm"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Achievement Badges */}
      {candidate.metadata.achievement_badges && candidate.metadata.achievement_badges.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-secondary-900 mb-4">
            🏆 Achievement Badges
          </h2>
          <BadgeGrid badges={candidate.metadata.achievement_badges} />
        </div>
      )}
    </div>
  )
}