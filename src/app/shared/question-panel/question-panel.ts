import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { StudyQuestion, StudyStatus } from '../../core/models/study.models';

@Component({
  selector: 'app-question-panel',
  imports: [],
  templateUrl: './question-panel.html',
  styleUrl: './question-panel.scss',
})
export class QuestionPanel {
  @Input({ required: true }) question!: StudyQuestion;
  @Output() statusChange = new EventEmitter<StudyStatus>();
  protected revealed = signal(false);

  reveal(): void {
    this.revealed.set(true);
  }

  mark(status: StudyStatus): void {
    this.statusChange.emit(status);
  }
}
