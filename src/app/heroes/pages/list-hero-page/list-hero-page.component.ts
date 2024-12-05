import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../heroes.service';
import { Hero } from '../../interfaces/Hero.interface';
import { HeroComponentComponent } from "../../components/hero-component/hero-component.component";

@Component({
  selector: 'app-list-hero-page',
  standalone: true,
  imports: [CommonModule, HeroComponentComponent],
  templateUrl: './list-hero-page.component.html',
  styleUrl: './list-hero-page.component.css'
})
export class ListHeroPageComponent implements OnInit {
  
  public heroesList:Hero[]=[]
  
  constructor(
    private heroeService:HeroesService
  ){
    
  }
  ngOnInit(): void {
    this.listHeroes()
  }


  listHeroes(){
    this.heroeService.getHeroes().subscribe(
      (result)=>{
        this.heroesList=result
      }
    )
  }

}
