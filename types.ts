// Base Cosmic object interface
export interface CosmicObject {
  id: string
  slug: string
  title: string
  content?: string
  metadata: Record<string, any>
  type: string
  created_at: string
  modified_at: string
  thumbnail?: string
}

// Select-dropdown type literals matching content model exactly
type SessionStatus = 'Scheduled' | 'In Progress' | 'Completed' | 'Reviewed'
type SessionType = 'Technical Round' | 'HR Round' | 'Coding Round'
type QuestionType = 'Technical' | 'HR' | 'Coding' | 'Behavioral'
type DifficultyLevel = 'Easy' | 'Medium' | 'Hard'
type ExperienceLevel = 'Fresher' | 'Junior (1-3 years)' | 'Mid-level (3-5 years)' | 'Senior (5+ years)'
type BadgeCategory = 'Performance' | 'Consistency' | 'Technical Excellence' | 'Communication' | 'Confidence'

// Interview Session object type
export interface InterviewSession extends CosmicObject {
  type: 'interview-sessions'
  metadata: {
    candidate_name: string
    candidate_email: string
    candidate_profile?: CandidateProfile
    session_type: {
      key: string
      value: SessionType
    }
    start_time: string
    end_time?: string
    overall_score?: number
    confidence_level?: number
    emotion_timeline?: {
      timestamps: string[]
      emotions: string[]
      confidence: number[]
    }
    questions_asked?: Question[]
    responses_data?: Array<{
      question_id: string
      response_text?: string
      code_submitted?: string
      test_cases_passed?: number
      total_test_cases?: number
      score?: number
      time_complexity?: string
      space_complexity?: string
      execution_time_ms?: number
      keywords_matched?: string[]
      sentiment?: string
      confidence?: number
    }>
    security_violations?: Array<{
      timestamp: string
      type: string
      severity: string
      description: string
    }>
    status: {
      key: string
      value: SessionStatus
    }
    performance_report?: PerformanceReport
  }
}

// Candidate Profile object type
export interface CandidateProfile extends CosmicObject {
  type: 'candidate-profiles'
  metadata: {
    full_name: string
    email: string
    phone?: string
    resume_file?: {
      url: string
      imgix_url: string
    }
    profile_photo?: {
      url: string
      imgix_url: string
    }
    parsed_skills?: {
      technical?: string[]
      soft_skills?: string[]
      certifications?: string[]
    }
    experience_level?: {
      key: string
      value: ExperienceLevel
    }
    interview_history?: InterviewSession[]
    average_score?: number
    total_interviews?: number
    achievement_badges?: AchievementBadge[]
  }
}

// Performance Report object type
export interface PerformanceReport extends CosmicObject {
  type: 'performance-reports'
  metadata: {
    interview_session?: InterviewSession
    overall_score: number
    technical_score?: number
    communication_score?: number
    confidence_score?: number
    emotion_analysis?: {
      dominant_emotions?: string[]
      emotion_distribution?: Record<string, number>
      emotional_stability?: string
      stress_moments?: string[]
      confidence_trend?: string
    }
    strengths?: string[]
    improvements?: string[]
    detailed_feedback?: string
    report_pdf?: {
      url: string
      imgix_url: string
    }
    generated_date: string
  }
}

// Question object type
export interface Question extends CosmicObject {
  type: 'questions-bank'
  metadata: {
    question_text: string
    question_type: {
      key: string
      value: QuestionType
    }
    difficulty_level: {
      key: string
      value: DifficultyLevel
    }
    skills_required?: string
    category?: string
    expected_keywords?: string[]
    coding_test_cases?: Array<{
      input: any
      expected_output: any
      description: string
    }>
    time_limit?: number
  }
}

// Achievement Badge object type
export interface AchievementBadge extends CosmicObject {
  type: 'achievement-badges'
  metadata: {
    badge_name: string
    badge_icon: string
    description: string
    criteria?: string
    points_value: number
    badge_category: {
      key: string
      value: BadgeCategory
    }
  }
}

// API response types
export interface CosmicResponse<T> {
  objects: T[]
  total: number
  limit: number
  skip?: number
}

// Utility types
export type EmotionType = 'happy' | 'sad' | 'angry' | 'neutral' | 'fear' | 'surprise' | 'disgust'

// Type guards for runtime validation
export function isInterviewSession(obj: CosmicObject): obj is InterviewSession {
  return obj.type === 'interview-sessions'
}

export function isCandidateProfile(obj: CosmicObject): obj is CandidateProfile {
  return obj.type === 'candidate-profiles'
}

export function isPerformanceReport(obj: CosmicObject): obj is PerformanceReport {
  return obj.type === 'performance-reports'
}

export function isQuestion(obj: CosmicObject): obj is Question {
  return obj.type === 'questions-bank'
}

export function isAchievementBadge(obj: CosmicObject): obj is AchievementBadge {
  return obj.type === 'achievement-badges'
}