import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MotosComponent } from "../motos/motos.component";
import { TreeMotosComponent } from "./tree-motos/tree-motos.component";
import { TreeFuncionariosComponent } from "./tree-funcionarios/tree-funcionarios.component";
import { TreeLojasComponent } from "./tree-lojas/tree-lojas.component";
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-home-adm',
  standalone: true,
  imports: [CommonModule, TreeMotosComponent, TreeFuncionariosComponent, TreeLojasComponent, RouterOutlet],
  templateUrl: './home-adm.component.html',
  styleUrl: './home-adm.component.scss'
})
export class HomeAdmComponent {
  isCollapsed = true;
 
  toggle() {
    this.isCollapsed = !this.isCollapsed; // Alterna entre expandido e colapsado
  }

}
