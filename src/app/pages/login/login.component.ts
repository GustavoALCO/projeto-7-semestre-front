import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { AuthService } from '../../Services/auth.service';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatLabel} from '@angular/material/form-field';
import { RouterLink, Router } from '@angular/router';
import { MatInput } from '@angular/material/input';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatFormFieldModule, MatLabel,MatInput, FormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  user!: string
  password!:string

  private readonly _router = inject(Router);
  //variavel para navegação das rotas
  
  private auth =  inject(AuthService);

 
  hide = signal(true);

  login() {
    this.auth.Login(this.user, this.password).subscribe({
      next: (_) => {
        this._router.navigate(["adm"]);
      },
      error: (error) => {
        const errorMessage = error.error?.message || "Erro ao fazer login. Verifique as credenciais e tente novamente.";
      alert(`Erro ao fazer login: ${errorMessage}`);
      }
    });
  } 

  Home() {
    this._router.navigate([""]);
    }
}