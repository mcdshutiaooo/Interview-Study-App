import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => import('./features/dashboard/dashboard').then((m) => m.Dashboard),
  },
  {
    path: 'topics',
    loadComponent: () => import('./features/topics/topics').then((m) => m.Topics),
  },
  {
    path: 'progress',
    loadComponent: () => import('./features/progress/progress').then((m) => m.Progress),
  },
  {
    path: 'review',
    loadComponent: () => import('./features/review/review').then((m) => m.Review),
  },
  {
    path: 'settings',
    loadComponent: () => import('./features/settings/settings').then((m) => m.Settings),
  },
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  { path: '**', redirectTo: 'dashboard' },
];
