import { ReactNode } from 'react'

interface StatsCardProps {
  icon: ReactNode
  title: string
  value: number
  subtitle: string
  trend: string
}

export default function StatsCard({ icon, title, value, subtitle, trend }: StatsCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-secondary-200">
      <div className="flex items-center justify-between mb-4">
        <div>{icon}</div>
        <span className="text-sm text-secondary-600">{title}</span>
      </div>
      <div className="text-3xl font-bold text-secondary-900 mb-1">{value}</div>
      <div className="text-sm text-secondary-600 mb-2">{subtitle}</div>
      <div className="text-xs text-accent-600 font-medium">{trend}</div>
    </div>
  )
}