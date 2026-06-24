import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { navItems } from '../../core/data/mock-study-data';

@Component({
  selector: 'app-side-nav',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './app-side-nav.html',
  styleUrl: './app-side-nav.scss',
})
export class AppSideNav {
  protected readonly items = navItems;
}
