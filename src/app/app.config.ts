import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { NgxImageCompressService } from 'ngx-image-compress';
import {provideEnvironmentNgxMask} from 'ngx-mask';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
              provideRouter(routes), 
              provideClientHydration(),
               provideAnimationsAsync(),
               provideEnvironmentNgxMask(),
               provideHttpClient(withFetch()),
               //Adicionando Provider para não dar erro no HttpClient
               NgxImageCompressService,
                  ]
};
