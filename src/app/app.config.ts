import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
<<<<<<< HEAD
=======
import { provideHttpClient } from '@angular/common/http';
import { withComponentInputBinding } from '@angular/router';
>>>>>>> master

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
<<<<<<< HEAD
=======
    provideHttpClient(),
    provideRouter(routes, withComponentInputBinding()),
>>>>>>> master
  ],
};
