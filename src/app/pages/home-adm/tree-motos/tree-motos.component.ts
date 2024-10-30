import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tree-motos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tree-motos.component.html',
  styleUrl: './tree-motos.component.scss'
})
export class TreeMotosComponent {
  isCollapsed = true; // Inicialmente, as branches estão colapsadas

  toggle() {
    this.isCollapsed = !this.isCollapsed; // Alterna entre expandido e colapsado
  }
}
