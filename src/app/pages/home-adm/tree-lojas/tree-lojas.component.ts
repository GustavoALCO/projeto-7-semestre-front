import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogDeleteStoreComponent } from './dialog-delete-store/dialog-delete-store.component';
import { DialogAlterateStoreComponent } from './dialog-alterate-store/dialog-alterate-store.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-tree-lojas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tree-lojas.component.html',
  styleUrl: './tree-lojas.component.scss'
})
export class TreeLojasComponent {
  isCollapsed = true; // Inicialmente, as branches estão colapsadas

  private readonly _router = inject(Router);
  //variavel para navegação das rotas

  dialog = inject(MatDialog);

  toggle() {
    this.isCollapsed = !this.isCollapsed; // Alterna entre expandido e colapsado
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogAlterateStoreComponent, {width: '300px',
      height: "250px"});
  }

  deletar(){
    const dialogRef = this.dialog.open(DialogDeleteStoreComponent, {width: '300px',
      height: "250px"});
  }

  CreateStore(){
    this._router.navigate(["adm/Store"])
  }

  ListStore(){
    this._router.navigate(['adm/listStore'])
  }
}
