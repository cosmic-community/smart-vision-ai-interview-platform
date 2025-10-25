import Link from 'next/link'
import type { PerformanceReport } from '@/types'
import { Calendar, TrendingUp, Award } from 'lucide-react'

interface ReportCardProps {
  report: PerformanceReport
}

export default function ReportCard({ report }: ReportCardProps) {
  return (
    <Link
      href={`/reports/${report.slug}`}
      className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-200 border border-secondary-200 p-6"
    >
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-xl font-semibold text-secondary-900 line-clamp-2">
          {report.title}
        </h3>
        <span className="text-2xl">📊</span>
      </div>

      <div className="space-y-2 mb-4">
        <div className="flex items-center gap-2 text-sm text-secondary-600">
          <Calendar className="w-4 h-4" />
          <span>{new Date(report.metadata.generated_date).toLocaleDateString()}</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 pt-4 border-t border-secondary-200">
        <div>
          <div className="flex items-center gap-1 text-xs text-secondary-600 mb-1">
            <TrendingUp className="w-3 h-3" />
            <span>Overall</span>
          </div>
          <div className="text-2xl font-bold text-primary-600">
            {report.metadata.overall_score}%
          </div>
        </div>
        {report.metadata.technical_score !== undefined && (
          <div>
            <div className="flex items-center gap-1 text-xs text-secondary-600 mb-1">
              <Award className="w-3 h-3" />
              <span>Technical</span>
            </div>
            <div className="text-2xl font-bold text-accent-600">
              {report.metadata.technical_score}%
            </div>
          </div>
        )}
      </div>
    </Link>
  )
}