import { Component } from '@angular/core';
import { dashboardSummary, weeklyProgress } from '../../core/data/mock-study-data';
import { ProgressRing } from '../../shared/progress-ring/progress-ring';
import { StatsCard } from '../../shared/stats-card/stats-card';
import { StudyCard } from '../../shared/study-card/study-card';
import { StudyTimeLog } from '../../shared/study-time-log/study-time-log';

@Component({
  selector: 'app-progress',
  imports: [ProgressRing, StatsCard, StudyCard, StudyTimeLog],
  templateUrl: './progress.html',
  styleUrl: './progress.scss',
})
export class Progress {
  protected readonly weekly = weeklyProgress;
  protected readonly summary = dashboardSummary;

  protected get totalPercent(): number {
    return Math.round((this.summary.totalCompleted / this.summary.totalItems) * 100);
  }

  protected get weeklyMinutes(): number {
    return this.weekly.reduce((total, day) => total + day.minutes, 0);
  }
}
