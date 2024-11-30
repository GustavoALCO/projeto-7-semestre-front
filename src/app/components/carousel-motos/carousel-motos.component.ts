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

onFilesSelected(event: any) {
  const files: FileList = event.target.files;

  // Verifica se há arquivos selecionados
  if (files.length > 0) {
    Array.from(files).forEach(file => {
      const reader = new FileReader();
      
      reader.onload = (e: any) => {
        // Adiciona a URL da imagem ao array de imagens
        this.images.push(e.target.result);  // `e.target.result` contém a URL base64
      };
      
      reader.readAsDataURL(file);  // Lê o arquivo como uma URL base64
    });
  }
}
}
