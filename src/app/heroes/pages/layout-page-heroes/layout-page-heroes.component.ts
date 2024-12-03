import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout-page-heroes',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './layout-page-heroes.component.html',
  styleUrl: './layout-page-heroes.component.css'
})
export class LayoutPageHeroesComponent {

}
