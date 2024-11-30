import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormField, MatInput, MatLabel } from '@angular/material/input';
import { UserService } from '../../../../Services/user.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-delete-users',
  standalone: true,
  imports: [MatFormField,MatLabel,MatInput ,FormsModule],
  templateUrl: './dialog-delete-users.component.html',
  styleUrl: './dialog-delete-users.component.scss'
})
export class DialogDeleteUsersComponent {
  id!:string

 private userService = inject(UserService)

 private dialog = inject(MatDialogRef)

  Delete(){
    if (this.id !== undefined) {
      this.userService.DeleteUser(this.id).subscribe({
        next: (response) => {
          console.log('Resposta do servidor:', response);
          alert('Usuário Excluido com sucesso!');
        },
        error: (err) => {
          console.error('Erro ao atualizar o usuário:', err);
          alert('Erro ao atualizar o usuário.');
        },
        complete: () => {
          console.log('Chamada concluída.');
        }
      });
    }
    this.dialog.close();
  }
}
