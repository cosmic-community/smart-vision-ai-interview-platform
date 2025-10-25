import type { Question } from '@/types'
import { Clock } from 'lucide-react'

interface QuestionCardProps {
  question: Question
}

export default function QuestionCard({ question }: QuestionCardProps) {
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

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Technical':
        return '💻'
      case 'HR':
        return '🤝'
      case 'Coding':
        return '⚡'
      case 'Behavioral':
        return '💭'
      default:
        return '❓'
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-secondary-200">
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-lg font-semibold text-secondary-900 flex-1">
          {question.title}
        </h3>
        <span className="text-2xl ml-2">{getTypeIcon(question.metadata.question_type.value)}</span>
      </div>

      <p className="text-secondary-700 mb-4 line-clamp-3">
        {question.metadata.question_text}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        <span className={`text-xs px-2 py-1 rounded-full ${getDifficultyColor(question.metadata.difficulty_level.value)}`}>
          {question.metadata.difficulty_level.value}
        </span>
        <span className="text-xs px-2 py-1 rounded-full bg-secondary-100 text-secondary-800">
          {question.metadata.question_type.value}
        </span>
        {question.metadata.time_limit && (
          <span className="text-xs px-2 py-1 rounded-full bg-secondary-100 text-secondary-800 flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {question.metadata.time_limit} min
          </span>
        )}
      </div>

      {question.metadata.skills_required && (
        <div className="pt-3 border-t border-secondary-200">
          <p className="text-xs text-secondary-600 mb-1">Required Skills:</p>
          <p className="text-sm text-secondary-900">{question.metadata.skills_required}</p>
        </div>
      )}
    </div>
  )
}