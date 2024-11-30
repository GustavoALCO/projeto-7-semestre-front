import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../../../Services/user.service';
import { AuthService } from '../../../../Services/auth.service';

@Component({
  selector: 'app-create-funcionario',
  standalone: true,
  imports: [MatLabel,MatInput,MatFormField,CommonModule,FormsModule,],
  templateUrl: './create-funcionario.component.html',
  styleUrl: './create-funcionario.component.scss'
})
export class CreateFuncionarioComponent {
  idUser! : string
  idStore!: number
  name!: string
  lastName!: string
  role!: string
  login!: string
  password!: string

  id!:string | null

  private  _router = inject(Router);
  private auth = inject(AuthService);
  private UserService = inject(UserService);
  private route = inject(ActivatedRoute);

  ngOnInit() {

    this.id = this.route.snapshot.paramMap.get('idUser');
  
     if(this.id !== null){
      
       this.GetUserId(this.id)
     } 
     
    }

    GetUserId(id:string | null){
      this.UserService.GetUserId(id).subscribe(user => {
        this.idUser = user.idUser
        this.idStore = user.idStore,
        this.name = user.name,
        this.lastName = user.lastName,
        this.role = user.role,
        this.login = user.login,
        this.password = user.password
      })
    }


    voltar(){
      this._router.navigate(['adm'])
    }

    Create() {
      const idPayload = this.auth.getIdPayload();
    
      // Adicione validação para os campos obrigatórios
      if (!this.name || !this.lastName || !this.login || !this.password) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
      }
    
      this.UserService.CreateUser(
        this.idStore,
        this.name,
        this.lastName,
        this.role,
        this.login,
        this.password,
        idPayload
      ).subscribe({
        next: () => {
          alert('Usuário criado com sucesso!');
        },
        error: (err) => {
          if (err.error) {
            console.error('Erro detalhado:', err.error);
            alert(`Erro ao criar o usuário: ${err.error.message || 'Erro desconhecido'}`);
          } else {
            console.error('Erro ao criar o usuário:', err);
            alert('Erro ao criar o usuário.');
          }
        },
        complete: () => {
          console.log('Chamada concluída.');
        }
      });
    }

    alteration(){
      var idPayload = this.auth.getIdPayload()

       // Adicione validação para os campos obrigatórios
       if (!this.name || !this.lastName || !this.login || !this.password) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
      }
      
      this.UserService.PutUser(this.idUser,this.idStore, this.name,this.lastName,this.role,this.login,this.password, idPayload).subscribe({
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
      });
    }
}

  
