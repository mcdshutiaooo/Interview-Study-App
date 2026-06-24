import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stats-card',
  imports: [],
  templateUrl: './stats-card.html',
  styleUrl: './stats-card.scss',
})
export class StatsCard {
  @Input({ required: true }) label = '';
  @Input({ required: true }) value = '';
  @Input() helper = '';
}
