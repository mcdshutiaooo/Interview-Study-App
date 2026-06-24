export type StudyStatus = 'completed' | 'skipped' | 'needs-review';

export interface NavItem {
  label: string;
  route: string;
  icon: string;
}

export interface Topic {
  id: number;
  title: string;
  category: string;
  completed: number;
  total: number;
  weakTags: string[];
  minutes: number;
}

export interface StudyQuestion {
  id: number;
  topic: string;
  category: string;
  prompt: string;
  answer: string;
  status: StudyStatus;
  weaknessScore: number;
}

export interface WeeklyProgress {
  day: string;
  minutes: number;
  completed: number;
}

export interface DashboardSummary {
  dailyGoalMinutes: number;
  studiedMinutes: number;
  streakDays: number;
  totalCompleted: number;
  totalItems: number;
}
