import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/Hero.interface';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeroPipe } from '../../pipes/hero.pipe';
import { HeroesService } from '../../heroes.service';

@Component({
  selector: 'app-hero-component',
  standalone: true,
  imports: [
    RouterLink,
    CommonModule,
    HeroPipe
  ],
  templateUrl: './hero-component.component.html',
  styleUrl: './hero-component.component.css'
})
export class HeroComponentComponent implements OnInit {
  
  constructor(
    private heroService:HeroesService
  ){}

  @Input()
  public hero!:Hero
  
  ngOnInit(): void {
    if(!this.hero) throw Error('Hero property is required')
  }

  getHero(id:string):void{
    this.heroService.getHeroById(id)
  }
  
  
}
