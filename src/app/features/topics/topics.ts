import { Component } from '@angular/core';
import { topics } from '../../core/data/mock-study-data';
import { TopicCard } from '../../shared/topic-card/topic-card';

@Component({
  selector: 'app-topics',
  imports: [TopicCard],
  templateUrl: './topics.html',
  styleUrl: './topics.scss',
})
export class Topics {
  protected readonly topics = topics;
  protected readonly categories = ['.NET', 'Angular', 'SQL', 'API', 'System Design', 'Behavioral'];
}
