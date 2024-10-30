import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tree-lojas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tree-lojas.component.html',
  styleUrl: './tree-lojas.component.scss'
})
export class TreeLojasComponent {
  isCollapsed = true; // Inicialmente, as branches estão colapsadas

  toggle() {
    this.isCollapsed = !this.isCollapsed; // Alterna entre expandido e colapsado
  }
}
