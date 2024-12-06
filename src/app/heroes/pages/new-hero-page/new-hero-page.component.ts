import { CommonModule, JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { HeroesService } from '../../heroes.service';
import { v4 as uuid } from 'uuid';
import Swal from 'sweetalert2';
import { Hero, Publisher } from '../../interfaces/Hero.interface';

@Component({
  selector: 'app-new-hero-page',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, JsonPipe],
  templateUrl: './new-hero-page.component.html',
  styleUrl: './new-hero-page.component.css',
})
export class NewHeroPageComponent {
  constructor(private heroService: HeroesService) {}

  public listPublisher = [
    { id: 'DC Comics', desc: 'DC - Comics' },
    { id: 'Marvel Comics', desc: 'Marvel - Comics' },
  ];

  private fb = inject(FormBuilder);
  public heroForm = this.fb.group({
    id: [''],
    superHero: ['', [Validators.minLength(4), Validators.required]],
    alter_ego: ['', [Validators.minLength(4), Validators.required]],
    publisher: [''],
    first_appearance: ['', [Validators.minLength(4), Validators.required]],
    characters: ['', [Validators.minLength(4), Validators.required]],
    altImage: [''],
  });

  get currentHero(): Hero {
    const hero = this.heroForm.value as Hero;
    return hero;
  }

  addHero() {
    if (this.currentHero.id) {
      if (this.heroForm.value.id) {
        this.heroService.updateHero(this.currentHero).subscribe(() => {
          Swal.fire({
            title: 'Actualizado!',
            text: 'El héroe ha sido actualizado con éxito.',
            icon: 'success',
          });
          this.heroForm.reset();
        });
        return;
      }
    }

      Swal.fire({
        title: 'Estás seguro de añadir este héroe',
        text: 'Se añadirá el héroe',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, añadir',
      }).then((result) => {
        if (result.isConfirmed) {
          const newHero = { ...this.heroForm.value, id: uuid() };
          this.heroService.addHeroService(newHero as Hero);
          console.log(this.heroForm.value);
          Swal.fire({
            title: 'Listo!',
            text: 'Tu héroe ha sido añadido con éxito.',
            icon: 'success',
          });
          this.heroForm.reset();
        }
      });
    }
  }

