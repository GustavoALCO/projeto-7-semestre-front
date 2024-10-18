import { Component } from '@angular/core';
import { CardImageComponent } from './card-image/card-image.component';


@Component({
  selector: 'app-filtro',
  standalone: true,
  imports: [CardImageComponent],
  templateUrl: './filtro.component.html',
  styleUrl: './filtro.component.scss'
})
export class FiltroComponent {

  isActive: boolean = false;

  activateLoading() {
    this.isActive = true;

    // Remove a classe 'active' após 2 segundos (tempo da animação)
    setTimeout(() => {
      this.isActive = false;
    }, 2000);
  }
}
