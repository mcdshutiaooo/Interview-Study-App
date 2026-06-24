import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progress-ring',
  imports: [],
  templateUrl: './progress-ring.html',
  styleUrl: './progress-ring.scss',
})
export class ProgressRing {
  @Input() value = 0;
  @Input() label = 'Progress';

  get clampedValue(): number {
    return Math.max(0, Math.min(100, this.value));
  }
}
