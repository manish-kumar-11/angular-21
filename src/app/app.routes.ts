import { Routes } from '@angular/router';
import { App } from './app';

export const routes: Routes = [
   {
path:'',
component:App
   },
    {
        path: 'about',
        loadComponent: () => import('./components/about/about').then(m => m.About)
    },
    {
        path: 'contact',
        loadComponent: () => import('./components/contact/contact').then(m => m.Contact)
    }
];
