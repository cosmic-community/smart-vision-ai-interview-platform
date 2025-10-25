// app/sessions/[slug]/page.tsx
import { getInterviewSession } from '@/lib/cosmic'
import { notFound } from 'next/navigation'
import EmotionTimeline from '@/components/EmotionTimeline'
import SecurityViolations from '@/components/SecurityViolations'
import QuestionsList from '@/components/QuestionsList'
import { Calendar, Mail, User, TrendingUp, Shield } from 'lucide-react'

export const revalidate = 60

interface PageProps {
  params: Promise<{ slug: string }>
}

export default async function SessionDetailPage({ params }: PageProps) {
  const { slug } = await params
  const session = await getInterviewSession(slug)

  if (!session) {
    notFound()
  }

  const emotionTimeline = session.metadata.emotion_timeline

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-secondary-900 mb-4">
          {session.title}
        </h1>
        <div className="flex flex-wrap gap-4 text-secondary-600">
          <div className="flex items-center gap-2">
            <User className="w-5 h-5" />
            <span>{session.metadata.candidate_name}</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-5 h-5" />
            <span>{session.metadata.candidate_email}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            <span>{new Date(session.metadata.start_time).toLocaleDateString()}</span>
          </div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md border border-secondary-200">
          <div className="flex items-center justify-between mb-2">
            <span className="text-secondary-600">Overall Score</span>
            <TrendingUp className="w-5 h-5 text-primary-600" />
          </div>
          <div className="text-3xl font-bold text-secondary-900">
            {session.metadata.overall_score || 0}%
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border border-secondary-200">
          <div className="flex items-center justify-between mb-2">
            <span className="text-secondary-600">Confidence Level</span>
            <TrendingUp className="w-5 h-5 text-accent-600" />
          </div>
          <div className="text-3xl font-bold text-secondary-900">
            {session.metadata.confidence_level || 0}%
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border border-secondary-200">
          <div className="flex items-center justify-between mb-2">
            <span className="text-secondary-600">Status</span>
            <Shield className="w-5 h-5 text-secondary-600" />
          </div>
          <div className="text-xl font-bold text-secondary-900">
            {session.metadata.status.value}
          </div>
        </div>
      </div>

      {/* Emotion Timeline */}
      {emotionTimeline && (
        <div className="mb-8">
          <EmotionTimeline timeline={emotionTimeline} />
        </div>
      )}

      {/* Questions Asked */}
      {session.metadata.questions_asked && session.metadata.questions_asked.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-secondary-900 mb-4">
            Questions Asked
          </h2>
          <QuestionsList questions={session.metadata.questions_asked} />
        </div>
      )}

      {/* Security Violations */}
      {session.metadata.security_violations && session.metadata.security_violations.length > 0 && (
        <div className="mb-8">
          <SecurityViolations violations={session.metadata.security_violations} />
        </div>
      )}

      {/* Response Data */}
      {session.metadata.responses_data && session.metadata.responses_data.length > 0 && (
        <div className="bg-white rounded-lg shadow-md p-6 border border-secondary-200">
          <h2 className="text-2xl font-bold text-secondary-900 mb-4">
            Response Analysis
          </h2>
          <div className="space-y-4">
            {session.metadata.responses_data.map((response, index) => (
              <div key={index} className="border-b border-secondary-200 pb-4 last:border-b-0">
                <h3 className="font-semibold text-secondary-900 mb-2">
                  Question {index + 1}: {response.question_id}
                </h3>
                {response.response_text && (
                  <p className="text-secondary-700 mb-2">
                    <strong>Response:</strong> {response.response_text}
                  </p>
                )}
                {response.code_submitted && (
                  <div className="bg-secondary-50 p-4 rounded-lg mb-2">
                    <p className="text-sm text-secondary-600 mb-2">Code Submitted:</p>
                    <pre className="text-xs overflow-x-auto">
                      <code>{response.code_submitted}</code>
                    </pre>
                  </div>
                )}
                <div className="flex gap-4 text-sm text-secondary-600">
                  {response.score !== undefined && (
                    <span>Score: {response.score}%</span>
                  )}
                  {response.confidence !== undefined && (
                    <span>Confidence: {response.confidence}%</span>
                  )}
                  {response.test_cases_passed !== undefined && (
                    <span>
                      Test Cases: {response.test_cases_passed}/{response.total_test_cases}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}