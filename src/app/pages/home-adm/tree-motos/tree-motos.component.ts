import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router, } from '@angular/router';
import { DialogComponent } from './dialog/dialog.component';
import { DialogDeleteComponent } from './dialog-delete/dialog-delete.component';

@Component({
  selector: 'app-tree-motos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tree-motos.component.html',
  styleUrl: './tree-motos.component.scss'
})
export class TreeMotosComponent {
  isCollapsed = true;
  
  private readonly _router = inject(Router);

  private route = inject(Router) 
  
  dialog = inject(MatDialog);

  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent, {width: '300px',
      height: "250px"});
  }

  deletar(){
    const dialogRef = this.dialog.open(DialogDeleteComponent, {width: '300px',
      height: "250px"});
  }

  criarMoto(){
    this.route.navigate(["adm/Store"])
  }

  listMoto(){
    this.route.navigate(['adm/listMoto'])
  }

  toggle() {
    this.isCollapsed = !this.isCollapsed; // Alterna entre expandido e colapsado
  }
}
