import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { navItems } from '../../core/data/mock-study-data';

@Component({
  selector: 'app-bottom-nav',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './app-bottom-nav.html',
  styleUrl: './app-bottom-nav.scss',
})
export class AppBottomNav {
  protected readonly items = navItems.slice(0, 5);
}
