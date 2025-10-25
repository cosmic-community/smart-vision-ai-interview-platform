// app/reports/[slug]/page.tsx
import { getPerformanceReport } from '@/lib/cosmic'
import { notFound } from 'next/navigation'
import EmotionDistribution from '@/components/EmotionDistribution'
import { TrendingUp, Award, Target } from 'lucide-react'

export const revalidate = 60

interface PageProps {
  params: Promise<{ slug: string }>
}

export default async function ReportDetailPage({ params }: PageProps) {
  const { slug } = await params
  const report = await getPerformanceReport(slug)

  if (!report) {
    notFound()
  }

  const emotionAnalysis = report.metadata.emotion_analysis

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-secondary-900 mb-4">
          {report.title}
        </h1>
        <p className="text-secondary-600">
          Generated on {new Date(report.metadata.generated_date).toLocaleDateString()}
        </p>
      </div>

      {/* Score Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md border border-secondary-200">
          <div className="flex items-center justify-between mb-2">
            <span className="text-secondary-600">Overall</span>
            <TrendingUp className="w-5 h-5 text-primary-600" />
          </div>
          <div className="text-3xl font-bold text-secondary-900">
            {report.metadata.overall_score}%
          </div>
        </div>

        {report.metadata.technical_score !== undefined && (
          <div className="bg-white p-6 rounded-lg shadow-md border border-secondary-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-secondary-600">Technical</span>
              <Target className="w-5 h-5 text-primary-600" />
            </div>
            <div className="text-3xl font-bold text-secondary-900">
              {report.metadata.technical_score}%
            </div>
          </div>
        )}

        {report.metadata.communication_score !== undefined && (
          <div className="bg-white p-6 rounded-lg shadow-md border border-secondary-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-secondary-600">Communication</span>
              <Award className="w-5 h-5 text-accent-600" />
            </div>
            <div className="text-3xl font-bold text-secondary-900">
              {report.metadata.communication_score}%
            </div>
          </div>
        )}

        {report.metadata.confidence_score !== undefined && (
          <div className="bg-white p-6 rounded-lg shadow-md border border-secondary-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-secondary-600">Confidence</span>
              <TrendingUp className="w-5 h-5 text-accent-600" />
            </div>
            <div className="text-3xl font-bold text-secondary-900">
              {report.metadata.confidence_score}%
            </div>
          </div>
        )}
      </div>

      {/* Emotion Analysis */}
      {emotionAnalysis && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-secondary-900 mb-4">
            Emotion Analysis
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {emotionAnalysis.emotion_distribution && (
              <EmotionDistribution distribution={emotionAnalysis.emotion_distribution} />
            )}
            <div className="bg-white rounded-lg shadow-md p-6 border border-secondary-200">
              <h3 className="font-semibold text-secondary-900 mb-4">
                Emotional Insights
              </h3>
              {emotionAnalysis.dominant_emotions && (
                <div className="mb-4">
                  <p className="text-sm text-secondary-600 mb-2">Dominant Emotions:</p>
                  <div className="flex flex-wrap gap-2">
                    {emotionAnalysis.dominant_emotions.map((emotion, index) => (
                      <span
                        key={index}
                        className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm"
                      >
                        {emotion}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              {emotionAnalysis.emotional_stability && (
                <div className="mb-4">
                  <p className="text-sm text-secondary-600 mb-1">Emotional Stability:</p>
                  <p className="font-semibold text-secondary-900">
                    {emotionAnalysis.emotional_stability}
                  </p>
                </div>
              )}
              {emotionAnalysis.confidence_trend && (
                <div>
                  <p className="text-sm text-secondary-600 mb-1">Confidence Trend:</p>
                  <p className="font-semibold text-secondary-900">
                    {emotionAnalysis.confidence_trend}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Strengths */}
      {report.metadata.strengths && report.metadata.strengths.length > 0 && (
        <div className="bg-white rounded-lg shadow-md p-6 mb-8 border border-secondary-200">
          <h2 className="text-2xl font-bold text-secondary-900 mb-4">
            ✨ Strengths
          </h2>
          <ul className="space-y-2">
            {report.metadata.strengths.map((strength, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-accent-600 mt-1">✓</span>
                <span className="text-secondary-700">{strength}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Areas for Improvement */}
      {report.metadata.improvements && report.metadata.improvements.length > 0 && (
        <div className="bg-white rounded-lg shadow-md p-6 mb-8 border border-secondary-200">
          <h2 className="text-2xl font-bold text-secondary-900 mb-4">
            🎯 Areas for Improvement
          </h2>
          <ul className="space-y-2">
            {report.metadata.improvements.map((improvement, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-primary-600 mt-1">→</span>
                <span className="text-secondary-700">{improvement}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Detailed Feedback */}
      {report.metadata.detailed_feedback && (
        <div className="bg-white rounded-lg shadow-md p-6 border border-secondary-200">
          <h2 className="text-2xl font-bold text-secondary-900 mb-4">
            Detailed Feedback
          </h2>
          <div
            className="prose max-w-none text-secondary-700"
            dangerouslySetInnerHTML={{ __html: report.metadata.detailed_feedback }}
          />
        </div>
      )}
    </div>
  )
}