import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { dashboardSummary, recommendations } from '../../core/data/mock-study-data';
import { ProgressRing } from '../../shared/progress-ring/progress-ring';
import { StatsCard } from '../../shared/stats-card/stats-card';
import { StudyCard } from '../../shared/study-card/study-card';

@Component({
  selector: 'app-dashboard',
  imports: [RouterLink, ProgressRing, StatsCard, StudyCard],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  protected readonly summary = dashboardSummary;
  protected readonly recommendations = recommendations;

  protected get overallProgress(): number {
    return Math.round((this.summary.totalCompleted / this.summary.totalItems) * 100);
  }

  protected get remainingMinutes(): number {
    return Math.max(0, this.summary.dailyGoalMinutes - this.summary.studiedMinutes);
  }

  protected get todayPercent(): number {
    return Math.round((this.summary.studiedMinutes / this.summary.dailyGoalMinutes) * 100);
  }
}
