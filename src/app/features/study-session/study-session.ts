import { Component, signal } from '@angular/core';
import { questions } from '../../core/data/mock-study-data';
import { StudyQuestion, StudyStatus } from '../../core/models/study.models';
import { QuestionPanel } from '../../shared/question-panel/question-panel';
import { StatsCard } from '../../shared/stats-card/stats-card';

@Component({
  selector: 'app-study-session',
  imports: [QuestionPanel, StatsCard],
  templateUrl: './study-session.html',
  styleUrl: './study-session.scss',
})
export class StudySession {
  protected readonly sessionMinutes = 20;
  protected readonly minutesLeft = 8;
  protected readonly currentIndex = signal(0);
  protected readonly sessionQuestions = signal<StudyQuestion[]>(questions);

  protected get currentQuestion(): StudyQuestion {
    return this.sessionQuestions()[this.currentIndex()];
  }

  protected get sessionProgress(): number {
    return Math.round(((this.currentIndex() + 1) / this.sessionQuestions().length) * 100);
  }

  protected markQuestion(status: StudyStatus): void {
    this.sessionQuestions.update((items) =>
      items.map((item) => (item.id === this.currentQuestion.id ? { ...item, status } : item)),
    );
    this.currentIndex.update((index) => Math.min(index + 1, this.sessionQuestions().length - 1));
  }
}
