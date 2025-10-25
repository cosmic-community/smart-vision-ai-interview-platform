import { createBucketClient } from '@cosmicjs/sdk'

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
})

// Simple error helper for Cosmic SDK
function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error
}

// Import types
import type {
  InterviewSession,
  CandidateProfile,
  PerformanceReport,
  Question,
  AchievementBadge,
} from '@/types'

// Fetch all interview sessions
export async function getInterviewSessions(): Promise<InterviewSession[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'interview-sessions' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.objects as InterviewSession[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch interview sessions')
  }
}

// Fetch single interview session by slug
export async function getInterviewSession(slug: string): Promise<InterviewSession | null> {
  try {
    const response = await cosmic.objects
      .findOne({
        type: 'interview-sessions',
        slug
      })
      .depth(1)
    
    return response.object as InterviewSession
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null
    }
    throw new Error('Failed to fetch interview session')
  }
}

// Fetch all candidate profiles
export async function getCandidateProfiles(): Promise<CandidateProfile[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'candidate-profiles' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.objects as CandidateProfile[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch candidate profiles')
  }
}

// Fetch single candidate profile by slug
export async function getCandidateProfile(slug: string): Promise<CandidateProfile | null> {
  try {
    const response = await cosmic.objects
      .findOne({
        type: 'candidate-profiles',
        slug
      })
      .depth(1)
    
    return response.object as CandidateProfile
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null
    }
    throw new Error('Failed to fetch candidate profile')
  }
}

// Fetch all performance reports
export async function getPerformanceReports(): Promise<PerformanceReport[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'performance-reports' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.objects as PerformanceReport[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch performance reports')
  }
}

// Fetch single performance report by slug
export async function getPerformanceReport(slug: string): Promise<PerformanceReport | null> {
  try {
    const response = await cosmic.objects
      .findOne({
        type: 'performance-reports',
        slug
      })
      .depth(1)
    
    return response.object as PerformanceReport
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null
    }
    throw new Error('Failed to fetch performance report')
  }
}

// Fetch all questions
export async function getQuestions(): Promise<Question[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'questions-bank' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.objects as Question[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch questions')
  }
}

// Fetch all achievement badges
export async function getAchievementBadges(): Promise<AchievementBadge[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'achievement-badges' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.objects as AchievementBadge[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch achievement badges')
  }
}