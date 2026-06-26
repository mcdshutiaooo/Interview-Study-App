import { DashboardSummary, NavItem, StudyQuestion, Topic, WeeklyProgress } from '../models/study.models';

export const navItems: NavItem[] = [
  { label: 'Dashboard', route: '/dashboard', icon: '▦' },
  { label: 'Study', route: '/study', icon: '▤' },
  { label: 'Topics', route: '/topics', icon: '□' },
  { label: 'Progress', route: '/progress', icon: '⌁' },
  { label: 'Review', route: '/review', icon: '↺' },
  { label: 'Settings', route: '/settings', icon: '⚙' },
];

export const dashboardSummary: DashboardSummary = {
  dailyGoalMinutes: 20,
  studiedMinutes: 14,
  streakDays: 12,
  totalCompleted: 96,
  totalItems: 140,
};

export const topics: Topic[] = [
  { id: 1, title: 'C# fundamentals', category: '.NET', completed: 21, total: 28, weakTags: ['LINQ', 'async'], minutes: 74 },
  { id: 2, title: 'Angular architecture', category: 'Angular', completed: 18, total: 24, weakTags: ['signals', 'routing'], minutes: 65 },
  { id: 3, title: 'SQL fundamentals', category: 'SQL', completed: 16, total: 25, weakTags: ['locking', 'indexes'], minutes: 58 },
  { id: 4, title: 'REST API design', category: 'API', completed: 15, total: 20, weakTags: ['status codes'], minutes: 44 },
  { id: 5, title: 'System design basics', category: 'System Design', completed: 10, total: 18, weakTags: ['load balancing', 'queues'], minutes: 39 },
  { id: 6, title: 'Behavioral stories', category: 'Behavioral', completed: 16, total: 25, weakTags: ['conflict', 'impact'], minutes: 51 },
];

export const questions: StudyQuestion[] = [
  {
    id: 101,
    topic: 'SQL fundamentals',
    category: 'SQL',
    prompt: 'Explain the difference between optimistic and pessimistic locking.',
    answer: 'Optimistic locking assumes conflicts are rare and checks a version or timestamp before saving. Pessimistic locking prevents conflicts by locking the row or resource while a transaction is active.',
    status: 'needs-review',
    weaknessScore: 94,
  },
  {
    id: 102,
    topic: 'System design basics',
    category: 'System Design',
    prompt: 'How would you explain load balancing to a non-technical interviewer?',
    answer: 'A load balancer distributes incoming traffic across multiple servers so no single server gets overwhelmed. It improves availability, reliability, and response time.',
    status: 'needs-review',
    weaknessScore: 91,
  },
  {
    id: 103,
    topic: 'Angular architecture',
    category: 'Angular',
    prompt: 'Why are standalone components useful in modern Angular applications?',
    answer: 'Standalone components make dependencies explicit at the component level and allow direct lazy routing, reducing module ceremony and making feature boundaries easier to reason about.',
    status: 'skipped',
    weaknessScore: 82,
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
  { day: 'Tue', minutes: 18, completed: 7 },
  { day: 'Wed', minutes: 20, completed: 8 },
  { day: 'Thu', minutes: 16, completed: 7 },
  { day: 'Fri', minutes: 20, completed: 10 },
  { day: 'Sat', minutes: 14, completed: 6 },
  { day: 'Sun', minutes: 20, completed: 9 },
];

export const recommendations = [
  {
    title: 'Hash Tables',
    description: 'Collision handling, lookups, and time complexity.',
    status: 'High Priority',
    icon: '{}',
  },
  {
    title: 'Behavioral: STAR',
    description: 'Sharpen leadership and conflict stories.',
    status: '2 Days Ago',
    icon: '••',
  },
  {
    title: 'Database Indexing',
    description: 'Explain query plans with clear tradeoffs.',
    status: 'New Module',
    icon: '▦',
  },
  {
    title: 'Dynamic Programming',
    description: 'Practice subproblems without over-explaining.',
    status: 'Needs Review',
    icon: '>',
  },
];
