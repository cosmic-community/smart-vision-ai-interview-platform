import { getCandidateProfiles } from '@/lib/cosmic'
import CandidateCard from '@/components/CandidateCard'

export const revalidate = 60

export default async function CandidatesPage() {
  const candidates = await getCandidateProfiles()

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-secondary-900 mb-4">
          👤 Candidate Profiles
        </h1>
        <p className="text-xl text-secondary-600">
          Manage candidate profiles with skills tracking, achievement badges, and interview history
        </p>
      </div>

      {candidates.length === 0 ? (
        <div className="bg-white rounded-lg shadow-md p-12 text-center border border-secondary-200">
          <div className="text-6xl mb-4">👥</div>
          <h2 className="text-2xl font-semibold text-secondary-900 mb-2">
            No Candidate Profiles Yet
          </h2>
          <p className="text-secondary-600 mb-6">
            Candidate profiles will appear here once they are created
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {candidates.map((candidate) => (
            <CandidateCard key={candidate.id} candidate={candidate} />
          ))}
        </div>
      )}
    </div>
  )
}