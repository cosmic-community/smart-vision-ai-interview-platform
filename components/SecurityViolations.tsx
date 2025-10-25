import { AlertTriangle, Shield, AlertCircle } from 'lucide-react'

interface SecurityViolationsProps {
  violations: Array<{
    timestamp: string
    type: string
    severity: string
    description: string
  }>
}

export default function SecurityViolations({ violations }: SecurityViolationsProps) {
  const getSeverityColor = (severity: string) => {
    switch (severity.toLowerCase()) {
      case 'high':
        return 'bg-red-100 text-red-800 border-red-200'
      case 'medium':
        return 'bg-orange-100 text-orange-800 border-orange-200'
      case 'low':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200'
      default:
        return 'bg-secondary-100 text-secondary-800 border-secondary-200'
    }
  }

  const getSeverityIcon = (severity: string) => {
    switch (severity.toLowerCase()) {
      case 'high':
        return <AlertTriangle className="w-5 h-5 text-red-600" />
      case 'medium':
        return <AlertCircle className="w-5 h-5 text-orange-600" />
      case 'low':
        return <Shield className="w-5 h-5 text-yellow-600" />
      default:
        return <Shield className="w-5 h-5 text-secondary-600" />
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-secondary-200">
      <h2 className="text-2xl font-bold text-secondary-900 mb-4">
        🔒 Security Violations
      </h2>
      <div className="space-y-4">
        {violations.map((violation, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg border ${getSeverityColor(violation.severity)}`}
          >
            <div className="flex items-start gap-3">
              {getSeverityIcon(violation.severity)}
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold capitalize">
                    {violation.type.replace(/_/g, ' ')}
                  </h3>
                  <span className="text-xs font-medium">
                    {violation.timestamp}
                  </span>
                </div>
                <p className="text-sm">{violation.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}