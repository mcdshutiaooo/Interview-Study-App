import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, signal } from '@angular/core';
import { StudyQuestion, StudyStatus } from '../../core/models/study.models';

@Component({
  selector: 'app-question-panel',
  imports: [],
  templateUrl: './question-panel.html',
  styleUrl: './question-panel.scss',
})
export class QuestionPanel implements OnChanges {
  @Input({ required: true }) question!: StudyQuestion;
  @Output() statusChange = new EventEmitter<StudyStatus>();
  protected revealed = signal(false);

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['question']) {
      this.revealed.set(false);
    }
  }

  reveal(): void {
    this.revealed.set(true);
  }

  mark(status: StudyStatus): void {
    this.statusChange.emit(status);
  }
}
