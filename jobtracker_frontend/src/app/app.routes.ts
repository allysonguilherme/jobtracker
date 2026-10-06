import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./pages/dashboard/dashboard.component').then((c) => c.DashboardComponent),
      },
      {
        path: 'applications',
        loadComponent: () =>
          import('./pages/applications/applications.component').then((c) => c.ApplicationsComponent),
      },
      {
        path: 'analytics',
        loadComponent: () => import('./pages/analytics/analytics.component').then((c) => c.AnalyticsComponent),
      },
      {
        path: 'settings',
        loadComponent: () => import('./pages/settings/settings.component').then((c) => c.SettingsComponent),
      },
      {
        path: 'profile',
        loadComponent: () => import('./pages/profile/profile.component').then((c) => c.ProfileComponent),
      },
      {
        path: 'profile',
        loadComponent: () => import('./pages/profile/profile.component').then((c) => c.ProfileComponent),
      },
    ],
  },
];
