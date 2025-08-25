import { Routes } from '@angular/router';
import { Create } from './modules/create/create/create';
import { Menu } from './modules/menu/menu/menu';
import { Allwords } from './modules/allwords/allwords';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'menu',
    pathMatch: 'full',
  },
  {
    path: '*',
    redirectTo: 'menu',
    pathMatch: 'full',
  },
  {
    path: 'menu',
    pathMatch: 'full',
    component: Menu,
  },
  {
    path: 'create',
    pathMatch: 'full',
    component: Create,
  },
  {
    path: 'allwords',
    pathMatch: 'full',
    component: Allwords,
  },
];
