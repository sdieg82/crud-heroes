import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Hero } from './interfaces/Hero.interface';
import { Observable } from 'rxjs';

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
  //  .subscribe(
  //     (result) =>{
  //       console.log(result)
  //     }
  //   )
  }


}

