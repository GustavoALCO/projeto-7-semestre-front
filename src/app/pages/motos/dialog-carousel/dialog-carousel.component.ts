import { Component, Inject } from '@angular/core';
import { CarouselMotosComponent } from "../../../components/carousel-motos/carousel-motos.component";
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-carousel',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './dialog-carousel.component.html',
  styleUrl: './dialog-carousel.component.scss'
})
export class DialogCarouselComponent {
  images: string[];

  constructor(@Inject(MAT_DIALOG_DATA) public data: { images: string[] }) {
    this.images = data.images;
  }
}
