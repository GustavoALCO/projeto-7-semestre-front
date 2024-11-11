import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { url } from 'inspector';

@Component({
  selector: 'app-carousel-motos',
  standalone: true,
  imports: [CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './carousel-motos.component.html',
  styleUrl: './carousel-motos.component.scss'
})
export class CarouselMotosComponent {
@Input()
images:string[] = []
}
