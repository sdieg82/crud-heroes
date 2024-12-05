import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet, Routes } from '@angular/router';
import { LayoutPageComponent } from '../auth/pages/layout-page/layout-page.component';
import { LayoutPageHeroesComponent } from './pages/layout-page-heroes/layout-page-heroes.component';
import { NewHeroPageComponent } from './pages/new-hero-page/new-hero-page.component';
import { ListHeroPageComponent } from './pages/list-hero-page/list-hero-page.component';
import { SearchHeroPageComponent } from './pages/search-hero-page/search-hero-page.component';
import { HeroPageComponent } from './pages/hero-page/hero-page.component';

const routes:Routes=[
  {
    path:'',
    component:LayoutPageHeroesComponent,
    children:[
      {path:'new-hero',component:NewHeroPageComponent},
      {path:'search',component:SearchHeroPageComponent},
      {path:'edit-hero/:id',component:NewHeroPageComponent},
      {path:'list',component:ListHeroPageComponent},
      {path:':id',component:HeroPageComponent},
      {path:'**',redirectTo:'list-hero'},
    ]
  }
]



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    RouterOutlet
  ]
})
export class HeroesModule { }
