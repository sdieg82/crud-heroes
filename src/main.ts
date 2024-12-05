import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'; // Asegúrate de definir tus rutas
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [
    provideAnimations(),
    provideRouter(routes, withComponentInputBinding()), 
    provideAnimationsAsync(), 
    provideAnimationsAsync(), // Configuración del router
    provideHttpClient()
  ],
});
