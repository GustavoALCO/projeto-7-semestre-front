import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
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

  //variavel para atribuir as imagens futuralmente
  images = [
    { url: 'assets/images/1600x900.jpg'},
    {url: 'https://media.revistagq.com/photos/5ef1cd5609f9a6fc5dffaca0/master/w_1600,c_limit/nsc-F900XR-2560x1440.jpg.asset.1571140838882.jpg'},
    {url: 'https://media.revistagq.com/photos/5ef1d03be3676ab95600ed8a/master/w_1600,c_limit/c4.png'},
  ];
}
