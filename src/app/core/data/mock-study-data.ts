import { DashboardSummary, NavItem, StudyQuestion, Topic, WeeklyProgress } from '../models/study.models';

export const navItems: NavItem[] = [
  { label: 'Home', route: '/dashboard', icon: '⌂' },
  { label: 'Study', route: '/study', icon: '▶' },
  { label: 'Topics', route: '/topics', icon: '◫' },
  { label: 'Progress', route: '/progress', icon: '◷' },
  { label: 'Review', route: '/review', icon: '↻' },
  { label: 'Settings', route: '/settings', icon: '⚙' },
];

export const dashboardSummary: DashboardSummary = {
  dailyGoalMinutes: 20,
  studiedMinutes: 12,
  streakDays: 8,
  totalCompleted: 86,
  totalItems: 140,
};

export const topics: Topic[] = [
  { id: 1, title: 'C# fundamentals', category: '.NET', completed: 18, total: 24, weakTags: ['LINQ', 'async'], minutes: 42 },
  { id: 2, title: 'Angular architecture', category: 'Angular', completed: 14, total: 22, weakTags: ['signals', 'routing'], minutes: 36 },
  { id: 3, title: 'SQL querying', category: 'SQL', completed: 11, total: 20, weakTags: ['joins', 'indexes'], minutes: 31 },
  { id: 4, title: 'REST API design', category: 'API', completed: 13, total: 18, weakTags: ['status codes'], minutes: 28 },
  { id: 5, title: 'Scalable systems', category: 'System Design', completed: 8, total: 18, weakTags: ['caching', 'queues'], minutes: 24 },
  { id: 6, title: 'Behavioral stories', category: 'Behavioral', completed: 22, total: 38, weakTags: ['conflict', 'impact'], minutes: 47 },
];

export const questions: StudyQuestion[] = [
  {
    id: 101,
    topic: 'Angular architecture',
    category: 'Angular',
    prompt: 'How would you explain standalone components and why they simplify Angular app structure?',
    answer: 'Standalone components declare their own imports and can be routed directly, reducing NgModule overhead and making feature boundaries easier to understand.',
    status: 'needs-review',
    weaknessScore: 92,
  },
  {
    id: 102,
    topic: 'SQL querying',
    category: 'SQL',
    prompt: 'What is the difference between INNER JOIN and LEFT JOIN?',
    answer: 'INNER JOIN returns matching rows from both tables. LEFT JOIN returns all rows from the left table and matching rows from the right table, using nulls when no match exists.',
    status: 'needs-review',
    weaknessScore: 88,
  },
  {
    id: 103,
    topic: 'REST API design',
    category: 'API',
    prompt: 'When should an API return 409 Conflict instead of 400 Bad Request?',
    answer: 'Use 409 when the request is syntactically valid but conflicts with the current resource state, such as duplicate unique data or a version mismatch.',
    status: 'skipped',
    weaknessScore: 78,
  },
  {
    id: 104,
    topic: 'Behavioral stories',
    category: 'Behavioral',
    prompt: 'Tell me about a time you handled disagreement on a technical decision.',
    answer: 'Use a concise STAR story: situation, task, action, and result. Emphasize listening, tradeoffs, evidence, and measurable outcome.',
    status: 'completed',
    weaknessScore: 52,
  },
];

export const weeklyProgress: WeeklyProgress[] = [
  { day: 'Mon', minutes: 20, completed: 9 },
  { day: 'Tue', minutes: 12, completed: 5 },
  { day: 'Wed', minutes: 20, completed: 8 },
  { day: 'Thu', minutes: 18, completed: 7 },
  { day: 'Fri', minutes: 20, completed: 10 },
  { day: 'Sat', minutes: 16, completed: 6 },
  { day: 'Sun', minutes: 20, completed: 9 },
];
