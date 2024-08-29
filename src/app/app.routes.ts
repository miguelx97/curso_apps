import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'variables',
    loadComponent: () => import('./variables/variables.page').then( m => m.VariablesPage)
  },
  {
    path: 'colecciones',
    loadComponent: () => import('./colecciones/colecciones.page').then( m => m.ColeccionesPage)
  },
  {
    path: 'diccionarios',
    loadComponent: () => import('./diccionarios/diccionarios.page').then( m => m.DiccionariosPage)
  },
];
