import { Component, Input, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WeeklyProgress } from '../../core/models/study.models';

@Component({
  selector: 'app-study-time-log',
  imports: [FormsModule],
  templateUrl: './study-time-log.html',
  styleUrl: './study-time-log.scss',
})
export class StudyTimeLog {
  @Input() weeklyTargetMinutes = 60;

  protected readonly entries = signal<WeeklyProgress[]>([
    { day: 'Mon', minutes: 20, completed: 9 },
    { day: 'Tue', minutes: 18, completed: 7 },
    { day: 'Wed', minutes: 20, completed: 8 },
    { day: 'Thu', minutes: 16, completed: 7 },
    { day: 'Fri', minutes: 20, completed: 10 },
    { day: 'Sat', minutes: 14, completed: 6 },
    { day: 'Sun', minutes: 20, completed: 9 },
  ]);

  protected get totalMinutes(): number {
    return this.entries().reduce((total, entry) => total + entry.minutes, 0);
  }

  protected get targetPercent(): number {
    return Math.min(100, Math.round((this.totalMinutes / this.weeklyTargetMinutes) * 100));
  }

  protected get remainingMinutes(): number {
    return Math.max(0, this.weeklyTargetMinutes - this.totalMinutes);
  }

  protected get statusText(): string {
    return this.remainingMinutes === 0
      ? 'Weekly study target reached'
      : `${this.remainingMinutes} min left to reach your weekly minimum`;
  }

  protected updateMinutes(day: string, minutes: number): void {
    const nextMinutes = Math.max(0, Math.min(240, Number(minutes) || 0));

    this.entries.update((entries) =>
      entries.map((entry) => (entry.day === day ? { ...entry, minutes: nextMinutes } : entry)),
    );
  }
}
