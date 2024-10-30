import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { CardComponent } from "./components/card/card.component";
import { CarouselLojasComponent } from "./components/carousel-lojas/carousel-lojas.component";

import { AngularGoogleMapsComponent } from "./components/angular-google-maps/angular-google-maps.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    NavbarComponent,
    CardComponent,
    CarouselLojasComponent,
     AngularGoogleMapsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Imperio-Motos';
}
