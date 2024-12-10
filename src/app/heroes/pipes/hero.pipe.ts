import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/Hero.interface';

@Pipe({
  name: 'hero',
  standalone: true
})
export class HeroPipe implements PipeTransform {

  transform(hero: Hero ): string {
    if(!hero.id && hero.altImage==='')
      return `no-image.png`

    if(hero.altImage) return hero.altImage
    return `heroes/${hero.id}.jpg`
  } 
  
}
