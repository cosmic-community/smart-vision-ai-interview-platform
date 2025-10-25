import { getPerformanceReports } from '@/lib/cosmic'
import ReportCard from '@/components/ReportCard'

export const revalidate = 60

export default async function ReportsPage() {
  const reports = await getPerformanceReports()

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-secondary-900 mb-4">
          📊 Performance Reports
        </h1>
        <p className="text-xl text-secondary-600">
          Access detailed performance reports with emotion analysis, strengths identification, and personalized feedback
        </p>
      </div>

      {reports.length === 0 ? (
        <div className="bg-white rounded-lg shadow-md p-12 text-center border border-secondary-200">
          <div className="text-6xl mb-4">📈</div>
          <h2 className="text-2xl font-semibold text-secondary-900 mb-2">
            No Performance Reports Yet
          </h2>
          <p className="text-secondary-600 mb-6">
            Performance reports will appear here once interviews are completed and analyzed
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reports.map((report) => (
            <ReportCard key={report.id} report={report} />
          ))}
        </div>
      )}
    </div>
  )
}