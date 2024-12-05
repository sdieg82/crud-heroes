import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout-page-heroes',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule
  ],
  templateUrl: './layout-page-heroes.component.html',
  styleUrl: './layout-page-heroes.component.css'
})
export class LayoutPageHeroesComponent {


  public sideBarItems=[
    {label:'Listado',icon:'bi bi-card-list', url:'/heroes/list'},
    {label:'Añadir',icon:'bi bi-file-plus', url:'/heroes/new-hero'},
    {label:'Buscar',icon:'bi bi-search', url:'/heroes/search'},
  ]

}
