# 🎯 Smart Vision AI Interview Platform

![App Preview](https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1200&h=300&fit=crop&auto=format)

An intelligent, emotion-aware interview assessment platform that revolutionizes candidate evaluation through AI-powered mock interviews with real-time emotion analysis, comprehensive performance tracking, and personalized feedback systems.

## ✨ Features

- **Interactive Interview Dashboard** - Real-time emotion tracking with timeline visualizations and confidence metrics
- **Candidate Profile Management** - Comprehensive skill tracking, achievement badges, and interview history
- **Performance Analytics** - Detailed reports with emotion analysis, strengths/weaknesses, and personalized feedback
- **Questions Bank** - Categorized interview questions with difficulty levels and expected keywords
- **Session Tracking** - Complete interview session monitoring with emotion timelines and security violations
- **Achievement System** - Gamified badges for performance milestones and technical excellence
- **Responsive Design** - Seamless experience across desktop, tablet, and mobile devices

## 🚀 Clone this Project

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=68fc6b7e92c9229c30fe57e2&clone_repository=68fc6db992c9229c30fe5938)

## 📋 Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Smart Vision-AI: Intelligent Emotion-Aware Interview Assessment System Abstract This project presents an intelligent, automated interview platform that conducts mock interviews with real-time emotion analysis, voice interaction, and personalized feedback. The system integrates Computer Vision, Natural Language Processing (NLP), and Speech Processing technologies to provide comprehensive interview assessment and training for job candidates. The platform features two interactive interview rounds (Technical & HR), real-time emotion and voice sentiment tracking, and resume-based adaptive question generation using Google Generative AI. A unique highlight is its integrated code execution environment, emotion timeline visualization, and AI-driven analytics that generate personalized feedback reports. This system aims to revolutionize candidate evaluation by enabling objective, data-driven, and emotion-aware assessments, ensuring fairer and more efficient recruitment processes. Problem Statement: Traditional interview preparation and hiring systems lack: • Real-time performance and emotion feedback • Objective evaluation criteria and behavioral insights • Personalized question generation from candidate resumes • Integrated technical + HR assessments • Secure, monitored environments for remote interviews • Engaging and interactive user experience for self-improvement These gaps create inefficiencies in both candidate evaluation and self-assessment. Thus, there's a strong need for an intelligent, automated, and emotion-aware platform to bridge these limitations. Proposed Implementation: The Emotion-Aware AI Interviewer introduces a comprehensive AI-powered platform that: 1. Conducts two-round interviews (Technical & HR) automatically 2. Tracks emotions and behavioral cues in real-time using DeepFace and OpenCV 3. Enables voice-based question and answer sessions through Speech Recognition and gTTS 4. Generates adaptive questions using Google Generative AI and resume-based context 5. Provides emotion, confidence, and performance analytics with visual dashboards 6. Monitors identity and environment security via MediaPipe and face recognition The system delivers both AI analytics and human-like interview experience, providing users with objective performance feedback, detailed reports, and personalized improvement suggestions. Methodology: Development Approach: 1. Modular Architecture – Divided into AI, NLP, Vision, Voice, Security, and Report modules 2. Real-Time Processing – Parallel handling of voice, video, and NLP streams 3. Adaptive Question Flow – Adjusts difficulty based on user emotion and correctness 4. Database Integration – SQLite for performance, emotion, and report data 5. Frontend Integration – Interactive UI with real-time emotion and question updates Algorithms & Models Used: • Face Detection: MediaPipe + OpenCV Haar Cascades • Emotion Recognition: DeepFace (VGG-Face, Facenet, DeepID, ArcFace backends) • Voice Recognition: SpeechRecognition + Google Speech API • Text-to-Speech: gTTS and pyttsx3 • NLP & Sentiment: spaCy, NLTK, and TextBlob • Resume Parsing: PyPDF2 and python-docx • Question Generation: Google Generative AI and GPT integration Detailed Methodology: 1. Data Processing & Input Handling • Candidate uploads resume (PDF/DOCX) → parsed using PyPDF2 or python-docx. • Extracts skills, experience, and domain keywords for customized question generation. 2. Emotion Recognition • Uses OpenCV + DeepFace + MediaPipe for real-time face detection and expression classification. • Tracks emotional changes across the session and plots an emotion timeline. 3. Voice & Sentiment Analysis • SpeechRecognition API captures candidate's voice → converts to text. • TextBlob / spaCy analyzes sentiment and tone. • Librosa measures pitch, energy, and stress indicators for emotion validation. 4. Question Generation • Resume keywords sent to Gemini API for contextual question generation. • Gemini tailors both technical and HR questions dynamically. • Flask backend stores generated questions for the session. 5. Response Evaluation • Candidate's speech → text → analyzed for keyword relevance, clarity, and sentiment. • Confidence and emotional stability inferred using combined emotion + sentiment data. 6. Coding Round • Code submitted via Monaco Editor → validated using backend subprocess execution. • Test cases ensure functional correctness and time efficiency. 7. Report Generation • Performance data compiled using Pandas & Matplotlib. • ReportLab generates a detailed PDF report with: o Emotion chart o Question-answer summary o Confidence levels o Improvement suggestions Core Features: Interview System • Two-Round Process: Technical & HR • Resume-Based Question Generation (from uploaded resume) • Real-Time Emotion Analysis (DeepFace + OpenCV) • Voice Interaction (TTS + STT) • Performance Analytics (comprehensive scoring & feedback) • PDF Report Generation with charts and recommendations Advanced Security Features • Face Detection & Monitoring: Real-time presence tracking • Multi-person Detection: Prevents impersonation • Identity Verification: Reference photo comparison • Security Violations Tracking & Alerts: Logs suspicious activity • Visual & Audio Alerts for rule violations AI-Powered Analysis • Emotion Detection: 7 emotions (happy, sad, angry, neutral, fear, surprise, disgust) • Speech Analysis: Tone, sentiment, and confidence scoring • Resume Parsing: Extracts skills, education, and experience • Adaptive Questioning: Dynamic difficulty adjustment • Real-Time Feedback: Continuous analysis and personalized suggestions Enhanced User Experience • Gamification System: Achievement badges and skill levels • Avatar System: Multiple interviewer personas • Emotion Heatmap: Visual stress and confidence tracking • Responsive Design: Works seamlessly on all devices"

### Code Generation Prompt

> Based on the content model I created for the Smart Vision-AI Interview Assessment System, now build a complete web application that showcases this content. Include a modern, responsive design with proper navigation, content display, and user-friendly interface.

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## 🛠️ Technologies Used

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Modern styling with custom design system
- **Cosmic CMS** - Headless CMS for content management
- **Recharts** - Data visualization for emotion timelines
- **Lucide React** - Modern icon library

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or Bun runtime
- Cosmic account with bucket access

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd smart-vision-ai-interview-platform
```

2. Install dependencies:
```bash
bun install
```

3. Set up environment variables:
```bash
# .env.local
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
```

4. Run the development server:
```bash
bun run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📚 Cosmic SDK Examples

### Fetching Interview Sessions with Emotion Data

```typescript
import { cosmic } from '@/lib/cosmic'

export async function getInterviewSessions() {
  try {
    const { objects: sessions } = await cosmic.objects
      .find({ 
        type: 'interview-sessions',
        'metadata.status': 'Completed'
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return sessions as InterviewSession[]
  } catch (error) {
    if (error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch interview sessions')
  }
}
```

### Fetching Candidate Profiles with Badges

```typescript
export async function getCandidateProfiles() {
  try {
    const { objects: candidates } = await cosmic.objects
      .find({ type: 'candidate-profiles' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return candidates as CandidateProfile[]
  } catch (error) {
    if (error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch candidate profiles')
  }
}
```

### Fetching Performance Reports

```typescript
export async function getPerformanceReports() {
  try {
    const { objects: reports } = await cosmic.objects
      .find({ type: 'performance-reports' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return reports as PerformanceReport[]
  } catch (error) {
    if (error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch performance reports')
  }
}
```

## 🎨 Cosmic CMS Integration

This application leverages the following Cosmic object types:

- **Interview Sessions** - Complete session tracking with emotion timelines, confidence levels, questions asked, and security violations
- **Candidate Profiles** - User profiles with skills, experience levels, achievement badges, and interview history
- **Performance Reports** - Detailed analytics with emotion analysis, strengths, improvements, and feedback
- **Questions Bank** - Categorized questions with difficulty levels, expected keywords, and coding test cases
- **Achievement Badges** - Gamified badges with point values and category classifications

All content is fetched server-side using the Cosmic SDK, ensuring optimal performance and SEO.

## 🚀 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository in Vercel
3. Add environment variables:
   - `COSMIC_BUCKET_SLUG`
   - `COSMIC_READ_KEY`
4. Deploy!

### Environment Variables

Set these in your deployment platform:

```bash
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
```

## 📄 License

MIT License - feel free to use this project for your own purposes.

---

Built with ❤️ using [Cosmic](https://www.cosmicjs.com) headless CMS
<!-- README_END -->