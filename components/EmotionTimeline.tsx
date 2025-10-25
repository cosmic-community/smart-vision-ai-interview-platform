'use client'

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

interface EmotionTimelineProps {
  timeline: {
    timestamps: string[]
    emotions: string[]
    confidence: number[]
  }
}

export default function EmotionTimeline({ timeline }: EmotionTimelineProps) {
  const data = timeline.timestamps.map((timestamp, index) => ({
    time: timestamp,
    emotion: timeline.emotions[index],
    confidence: timeline.confidence[index],
  }))

  const getEmotionEmoji = (emotion: string) => {
    const emojiMap: Record<string, string> = {
      happy: '😊',
      sad: '😢',
      angry: '😠',
      neutral: '😐',
      fear: '😨',
      surprise: '😲',
      disgust: '🤢',
    }
    return emojiMap[emotion.toLowerCase()] || '😐'
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-secondary-200">
      <h2 className="text-2xl font-bold text-secondary-900 mb-4">
        Emotion Timeline
      </h2>

      <div className="mb-6">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis domain={[0, 100]} />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="confidence"
              stroke="#2563eb"
              strokeWidth={2}
              name="Confidence %"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {data.map((point, index) => (
          <div
            key={index}
            className="bg-secondary-50 rounded-lg p-3 text-center"
          >
            <div className="text-3xl mb-1">{getEmotionEmoji(point.emotion ?? 'neutral')}</div>
            <div className="text-xs text-secondary-600 mb-1">{point.time}</div>
            <div className="text-sm font-semibold text-secondary-900 capitalize">
              {point.emotion ?? 'neutral'}
            </div>
            <div className="text-xs text-primary-600 font-medium">
              {point.confidence ?? 0}% confidence
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}