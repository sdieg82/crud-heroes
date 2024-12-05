import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/Hero.interface';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero-component',
  standalone: true,
  imports: [
    RouterLink,
    CommonModule
  ],
  templateUrl: './hero-component.component.html',
  styleUrl: './hero-component.component.css'
})
export class HeroComponentComponent implements OnInit {
  
  @Input()
  public hero!:Hero
  
  ngOnInit(): void {
    if(!this.hero) throw Error('Hero property is required')
  }
  
  
}
