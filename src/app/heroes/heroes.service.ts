import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Hero } from './interfaces/Hero.interface';
import { catchError, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  url='http://localhost:3000'

  constructor(
    private http:HttpClient
  ) { 

  }
  public heroesList:Hero[]=[]

  getHeroes():Observable<Hero[]>{
   return this.http.get<Hero[]>(`${this.url}/heroes`)
   }

  getHeroById(id:string):Observable<Hero | undefined>{
    return this.http.get<Hero>(`${this.url}/heroes/${id}`)
    .pipe(
      catchError( (error)=> of (undefined))
    )
   }
}

