import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { FiltroComponent } from './filtro/filtro.component';
import { CardComponent } from "../../components/card/card.component";

@Component({
  selector: 'app-estoque',
  standalone: true,
  imports: [CommonModule,
    NavbarComponent,
    FooterComponent,
    FiltroComponent,
    CardComponent],
  templateUrl: './estoque.component.html',
  styleUrl: './estoque.component.scss'
})
export class EstoqueComponent {
  isActive: boolean = false;

  activateLoading() {
    this.isActive = true;

    // Remove a classe 'active' após 2 segundos (tempo da animação)
    setTimeout(() => {
      this.isActive = false;
    }, 2000);
  }
}
