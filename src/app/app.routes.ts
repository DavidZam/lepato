import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  // Directly lazy loading the Home standalone component
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  // Directly lazy loading the Viajes standalone component
  {
    path: 'viajes',
    loadComponent: () => import('./pages/viajes/viajes.component').then((m) => m.ViajesComponent),
  }
];
