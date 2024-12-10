import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Hero } from './interfaces/Hero.interface';
import { catchError, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  url='http://localhost:3000'

  constructor(
    private http:HttpClient
  ) {}

  public heroesList:Hero[]=[]

  addHeroService(hero:Hero):void{
    this.http.post<Hero>(`${this.url}/heroes`,hero)
    .subscribe(
      result=> {
        this.heroesList.push(result)
      }
    )
    console.log(this.heroesList)
  }

  getHeroes():Observable<Hero[]>{
   return this.http.get<Hero[]>(`${this.url}/heroes`)
   }

   getHeroById(id:string):Observable<Hero | undefined>{
    return this.http.get<Hero>(`${this.url}/heroes/${id}`)
    .pipe(
      catchError(error=> of(undefined))
    )
   }

   updateHero(hero:Hero):Observable<Hero>{
    if(!hero.id) throw Error('Hero is required')
    return this.http.patch<Hero>(`${this.url}/heroes/${hero.id}`,hero)
   }

   deleteHero(id:string):Observable<boolean>{
    console.log('elimimando con el id',id)
    if(!id) throw Error('Hero id is required')
      return this.http.delete( `${this.url}/heroes/${id}`)
    .pipe(
      catchError(err=>of(false)),
      map(resp=>true)
    )
   }
}

