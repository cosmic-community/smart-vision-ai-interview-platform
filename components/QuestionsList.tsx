import type { Question } from '@/types'
import { Clock } from 'lucide-react'

interface QuestionsListProps {
  questions: Question[]
}

export default function QuestionsList({ questions }: QuestionsListProps) {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy':
        return 'bg-accent-100 text-accent-800'
      case 'Medium':
        return 'bg-primary-100 text-primary-800'
      case 'Hard':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-secondary-100 text-secondary-800'
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-md border border-secondary-200 divide-y divide-secondary-200">
      {questions.map((question, index) => (
        <div key={question.id} className="p-6">
          <div className="flex items-start justify-between mb-3">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-secondary-600 font-medium">
                  Question {index + 1}
                </span>
                <span className={`text-xs px-2 py-1 rounded-full ${getDifficultyColor(question.metadata.difficulty_level.value)}`}>
                  {question.metadata.difficulty_level.value}
                </span>
                <span className="text-xs px-2 py-1 rounded-full bg-secondary-100 text-secondary-800">
                  {question.metadata.question_type.value}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                {question.title}
              </h3>
            </div>
          </div>
          
          <p className="text-secondary-700 mb-3">
            {question.metadata.question_text}
          </p>

          {question.metadata.time_limit && (
            <div className="flex items-center gap-2 text-sm text-secondary-600">
              <Clock className="w-4 h-4" />
              <span>Time Limit: {question.metadata.time_limit} minutes</span>
            </div>
          )}

          {question.metadata.expected_keywords && question.metadata.expected_keywords.length > 0 && (
            <div className="mt-3 pt-3 border-t border-secondary-200">
              <p className="text-xs text-secondary-600 mb-2">Expected Keywords:</p>
              <div className="flex flex-wrap gap-2">
                {question.metadata.expected_keywords.map((keyword, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2 py-1 rounded-full bg-secondary-100 text-secondary-800"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}