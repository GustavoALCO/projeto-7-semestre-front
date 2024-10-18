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
    { url: 'https://imperiomotoszn.com.br/dados/auto/thumbnails/EX20240301171831_300x230_w_dd0bf011610f382d2081b47ddec10d8e.jpg', alt: 'Image 1' },
    { url: 'https://imperiomotoszn.com.br/dados/auto/thumbnails/EX20240301171853_300x230_w_dd0bf011610f382d2081b47ddec10d8e.jpg', alt: 'Image 2' },
    { url: 'https://imperiomotoszn.com.br/dados/auto/thumbnails/EX20240301171914_300x230_w_dd0bf011610f382d2081b47ddec10d8e.jpg', alt: 'Image 3' },
    {url:'https://imperiomotoszn.com.br/dados/auto/thumbnails/EX20240301171935_300x230_w_dd0bf011610f382d2081b47ddec10d8e.jpg', alt:'imagem 4'}
    
  ];
}
