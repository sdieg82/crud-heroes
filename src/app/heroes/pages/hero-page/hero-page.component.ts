import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/Hero.interface';
import { HeroesService } from '../../heroes.service';
import { Observable, switchMap } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { HeroPipe } from '../../pipes/hero.pipe';

@Component({
  selector: 'app-hero-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    HeroPipe
  ],
  templateUrl: './hero-page.component.html',
  styleUrl: './hero-page.component.css'
})
export class HeroPageComponent implements OnInit {
  
  public hero?:Hero

  constructor(
    private heroService:HeroesService,
    private activatedRoute:ActivatedRoute,
    private router:Router
  ){}

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap(({id})=>this.heroService.getHeroById(id)
      )
    )
    .subscribe(
      hero=> {
        if(!hero)return  this.router.navigate(['/heroes/list'])
        this.hero=hero
        return;
      })
  }
}
