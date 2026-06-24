import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StudyCard } from '../../shared/study-card/study-card';

@Component({
  selector: 'app-settings',
  imports: [FormsModule, StudyCard],
  templateUrl: './settings.html',
  styleUrl: './settings.scss',
})
export class Settings {
  protected dailyGoal = 20;
  protected theme = 'Light';
  protected reminders = true;
}
