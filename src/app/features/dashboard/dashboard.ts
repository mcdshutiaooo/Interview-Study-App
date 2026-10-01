import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { questions } from '../../core/data/mock-study-data';
import { ProgressRing } from '../../shared/progress-ring/progress-ring';

@Component({ selector: 'app-dashboard', imports: [RouterLink, ProgressRing], templateUrl: './dashboard.html', styleUrl: './dashboard.scss' })
export class Dashboard {
  protected readonly recentQuestions = questions.slice(0, 5);
  protected readonly streakDays = [{ label: 'Mon', today: false }, { label: 'Tue', today: false }, { label: 'Wed', today: true }, { label: 'Thu', today: false }, { label: 'Fri', today: false }, { label: 'Sat', today: false }, { label: 'Sun', today: false }];
  protected readonly topicProgress = [{ label: 'Angular', percent: 80, completed: 32 }, { label: '.NET Core', percent: 65, completed: 26 }, { label: 'SQL', percent: 45, completed: 18 }, { label: 'System Design', percent: 30, completed: 12 }];
  protected readonly calendarDays = [{ value: 'Mon', review: false, done: false }, { value: 'Tue', review: false, done: false }, { value: 'Wed', review: false, done: false }, { value: 'Thu', review: false, done: false }, { value: 'Fri', review: false, done: false }, { value: 'Sat', review: false, done: false }, { value: 'Sun', review: false, done: false }, ...Array.from({ length: 31 }, (_, index) => ({ value: String(index + 1), review: [1, 6, 8, 14, 21].includes(index + 1), done: [3, 8, 14].includes(index + 1) }))];
}
