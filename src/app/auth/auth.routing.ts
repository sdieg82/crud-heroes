import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, RouterOutlet, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { AuthComponent } from './auth.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';

const routes:Routes=[
    {
        path:'',
        component:LayoutPageComponent,
        children:[
            { path:'login', component:LoginPageComponent },
            { path:'new-account', component:RegisterPageComponent },
            { path:'**', redirectTo:'login' },
        ]
    }
];


@NgModule({
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        RouterOutlet
    ],
    exports: [],
   
})
export class AuthRoutingModule { }
