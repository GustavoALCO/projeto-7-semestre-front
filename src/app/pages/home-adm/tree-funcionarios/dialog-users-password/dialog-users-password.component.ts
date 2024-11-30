import { Component, inject, signal } from '@angular/core';
import { AuthService } from '../../../../Services/auth.service';
import { FormsModule } from '@angular/forms';
import { MatFormField, MatInput, MatLabel } from '@angular/material/input';
import { UserService } from '../../../../Services/user.service';

@Component({
  selector: 'app-dialog-users-password',
  standalone: true,
  imports: [MatFormField,MatLabel,MatInput ,FormsModule],
  templateUrl: './dialog-users-password.component.html',
  styleUrl: './dialog-users-password.component.scss'
})
export class DialogUsersPasswordComponent {
id!:string
Password!:string

authService = inject(AuthService);
userService = inject(UserService);

ngOnInit(){
  this.id = this.authService.getIdPayload();
}

hide = signal(true);

AlterarSenha(){
var idpayload = this.authService.getIdPayload()

this.userService.AlterPassword(this.id, this.Password, idpayload).subscribe({
  next: (response) => {
    console.log('Resposta do servidor:', response);
    alert('Usuário atualizado com sucesso!');
  },
  error: (err) => {
    console.error('Erro ao atualizar o usuário:', err);
    alert('Erro ao atualizar o usuário.');
  },
  complete: () => {
    console.log('Chamada concluída.');
  }
})
}
}
