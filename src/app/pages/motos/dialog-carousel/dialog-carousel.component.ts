import { Component } from '@angular/core';
import { CarouselMotosComponent } from "../../../components/carousel-motos/carousel-motos.component";

@Component({
  selector: 'app-dialog-carousel',
  standalone: true,
  imports: [CarouselMotosComponent],
  templateUrl: './dialog-carousel.component.html',
  styleUrl: './dialog-carousel.component.scss'
})
export class DialogCarouselComponent {

}
