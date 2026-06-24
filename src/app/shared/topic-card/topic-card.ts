import { Component, Input } from '@angular/core';
import { Topic } from '../../core/models/study.models';

@Component({
  selector: 'app-topic-card',
  imports: [],
  templateUrl: './topic-card.html',
  styleUrl: './topic-card.scss',
})
export class TopicCard {
  @Input({ required: true }) topic!: Topic;

  get percent(): number {
    return Math.round((this.topic.completed / this.topic.total) * 100);
  }
}
