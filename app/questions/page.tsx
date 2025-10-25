import { getQuestions } from '@/lib/cosmic'
import QuestionCard from '@/components/QuestionCard'

export const revalidate = 60

export default async function QuestionsPage() {
  const questions = await getQuestions()

  // Group questions by category
  const questionsByCategory = questions.reduce((acc, question) => {
    const category = question.metadata.category || 'Other'
    if (!acc[category]) {
      acc[category] = []
    }
    acc[category].push(question)
    return acc
  }, {} as Record<string, typeof questions>)

  const categories = Object.keys(questionsByCategory).sort()

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-secondary-900 mb-4">
          📋 Questions Bank
        </h1>
        <p className="text-xl text-secondary-600">
          Browse categorized interview questions with difficulty levels and expected keywords
        </p>
      </div>

      {questions.length === 0 ? (
        <div className="bg-white rounded-lg shadow-md p-12 text-center border border-secondary-200">
          <div className="text-6xl mb-4">❓</div>
          <h2 className="text-2xl font-semibold text-secondary-900 mb-2">
            No Questions Yet
          </h2>
          <p className="text-secondary-600 mb-6">
            Questions will appear here once they are added to the bank
          </p>
        </div>
      ) : (
        <div className="space-y-8">
          {categories.map((category) => {
            const categoryQuestions = questionsByCategory[category]
            if (!categoryQuestions || categoryQuestions.length === 0) {
              return null
            }

            return (
              <div key={category}>
                <h2 className="text-2xl font-bold text-secondary-900 mb-4">
                  {category}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {categoryQuestions.map((question) => (
                    <QuestionCard key={question.id} question={question} />
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