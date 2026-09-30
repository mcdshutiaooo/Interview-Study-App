import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './app-header.html',
  styleUrl: './app-header.scss',
})
export class AppHeader {
  constructor(private readonly router: Router) {}

  protected get eyebrow(): string {
    if (this.router.url.startsWith('/study')) return 'Topics  ›  SQL Fundamentals';
    if (this.router.url.startsWith('/topics')) return 'Study Map';
    if (this.router.url.startsWith('/progress')) return 'Weekly Momentum';
    if (this.router.url.startsWith('/review')) return 'Weakest First';
    if (this.router.url.startsWith('/settings')) return 'Personal Setup';
    return 'Good morning, Qin Yee.';
  }

  protected get title(): string {
    if (this.router.url.startsWith('/study')) return 'SQL Fundamentals';
    if (this.router.url.startsWith('/topics')) return 'Topics';
    if (this.router.url.startsWith('/progress')) return 'Progress';
    if (this.router.url.startsWith('/review')) return 'Review queue';
    if (this.router.url.startsWith('/settings')) return 'Settings';
    return 'Ready for your 20-min session today?';
  }
}
