import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {
  images: string[];

  constructor(@Inject(MAT_DIALOG_DATA) public data: { images: string[] }) {
    this.images = data.images;
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit', this.images);
  }
}
