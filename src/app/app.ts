import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppBottomNav } from './shared/app-bottom-nav/app-bottom-nav';
import { AppHeader } from './shared/app-header/app-header';
import { AppSideNav } from './shared/app-side-nav/app-side-nav';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AppHeader, AppBottomNav, AppSideNav],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
}
