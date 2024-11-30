import { CommonModule } from '@angular/common';
import { Component, inject,} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogUsersComponent } from './dialog-users/dialog-users.component';
import { DialogDeleteUsersComponent } from './dialog-delete-users/dialog-delete-users.component';
import { DialogUsersPasswordComponent } from './dialog-users-password/dialog-users-password.component';


@Component({
  selector: 'app-tree-funcionarios',
  standalone: true,
  imports: [CommonModule, ],
  templateUrl: './tree-funcionarios.component.html',
  styleUrl: './tree-funcionarios.component.scss'
})
export class TreeFuncionariosComponent {
  isCollapsed = true; // Inicialmente, as branches estão colapsadas

  dialog = inject(MatDialog);
  private readonly _router = inject(Router);
  //variavel para navegação das rotas

  toggle() {
    this.isCollapsed = !this.isCollapsed; // Alterna entre expandido e colapsado
  }

  Create(){
    this._router.navigate(["adm/user"])
  }

  alterar(){
    const dialogRef = this.dialog.open(DialogUsersComponent, {width: '300px',
      height: "250px"});
  }

  AlterarSenha(){
    const dialogRef = this.dialog.open(DialogUsersPasswordComponent, {width: '300px',
      height: "250px"});
  }

  excluir(){
    const dialogRef = this.dialog.open(DialogDeleteUsersComponent, {width: '300px',
      height: "250px"});
  }

  ListarUsuarios(){
    this._router.navigate(["adm/ListUsers"])
  }
}
