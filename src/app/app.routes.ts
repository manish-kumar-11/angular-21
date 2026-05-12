import { Routes } from '@angular/router';
import { App } from './app';
import { Nabvar } from './components/nabvar/nabvar';
import { Home } from './components/home/home';

export const routes: Routes = [
 {
    path: '',
    component: App,
    children: [
      {  
        path: '',
        component: Home
      }
    ]
      
   
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
