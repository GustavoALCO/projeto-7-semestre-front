import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tree-funcionarios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tree-funcionarios.component.html',
  styleUrl: './tree-funcionarios.component.scss'
})
export class TreeFuncionariosComponent {
  isCollapsed = true; // Inicialmente, as branches estão colapsadas

  toggle() {
    this.isCollapsed = !this.isCollapsed; // Alterna entre expandido e colapsado
  }
}
