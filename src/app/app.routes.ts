import { Routes } from '@angular/router';
import { HeroPageComponent } from './heroes/pages/hero-page/hero-page.component';
import { NotFoundPageComponent } from './shared/pages/not-found-page/not-found-page.component';

export const routes: Routes = [
    {
        path:'auth',
        loadChildren:()=>import('./auth/auth.routing').then(m=>m.AuthRoutingModule)
    },
    {
        path:'heroes',
        loadChildren:()=>import('./heroes/heroes.routing.module').then(m=>m.HeroesModule)
    },
    {
        path:'404',
        component:NotFoundPageComponent
    },
    {
        path:'',
        redirectTo:'heroes',
        pathMatch:'full'
    },
    {
        path:'**',
        redirectTo:'404',
    },
];
