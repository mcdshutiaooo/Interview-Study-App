import { Component } from '@angular/core';
import { dashboardSummary, weeklyProgress } from '../../core/data/mock-study-data';
import { ProgressRing } from '../../shared/progress-ring/progress-ring';
import { StatsCard } from '../../shared/stats-card/stats-card';
import { StudyCard } from '../../shared/study-card/study-card';

@Component({
  selector: 'app-progress',
  imports: [ProgressRing, StatsCard, StudyCard],
  templateUrl: './progress.html',
  styleUrl: './progress.scss',
})
export class Progress {
  protected readonly weekly = weeklyProgress;
  protected readonly summary = dashboardSummary;

  protected get totalPercent(): number {
    return Math.round((this.summary.totalCompleted / this.summary.totalItems) * 100);
  }
}
