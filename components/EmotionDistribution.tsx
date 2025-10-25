'use client'

import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts'

interface EmotionDistributionProps {
  distribution: Record<string, number>
}

export default function EmotionDistribution({ distribution }: EmotionDistributionProps) {
  const data = Object.entries(distribution).map(([emotion, value]) => ({
    name: emotion.charAt(0).toUpperCase() + emotion.slice(1),
    value,
  }))

  const COLORS = ['#2563eb', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899', '#06b6d4']

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
      <h3 className="font-semibold text-secondary-900 mb-4">
        Emotion Distribution
      </h3>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
      <div className="grid grid-cols-2 gap-2 mt-4">
        {data.map((entry, index) => (
          <div key={entry.name} className="flex items-center gap-2">
            <div className="text-2xl">{getEmotionEmoji(entry.name)}</div>
            <div className="flex-1">
              <div className="text-xs text-secondary-600">{entry.name}</div>
              <div className="text-sm font-semibold text-secondary-900">
                {entry.value}%
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}