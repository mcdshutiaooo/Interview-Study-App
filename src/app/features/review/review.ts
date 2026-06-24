import { Component } from '@angular/core';
import { questions } from '../../core/data/mock-study-data';
import { StudyCard } from '../../shared/study-card/study-card';

@Component({
  selector: 'app-review',
  imports: [StudyCard],
  templateUrl: './review.html',
  styleUrl: './review.scss',
})
export class Review {
  protected readonly reviewQuestions = [...questions].sort((a, b) => b.weaknessScore - a.weaknessScore);
}
