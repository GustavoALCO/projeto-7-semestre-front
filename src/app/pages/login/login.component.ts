import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { AuthService } from '../../Services/auth.service';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatIconModule, RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  user!: string
  password!:string

  constructor( private auth: AuthService) { }

 
  hide = signal(true);

  login() {
    this.auth.Login(this.user, this.password).subscribe({
      next: (response) => {
        console.log("Login bem-sucedido:", response);
        const token = response.token;
        this.auth.setToken(token);
        localStorage.setItem('jwt', token); 
        console.log('Token armazenado:', token);
        
      },
      error: (error) => {
        console.error("Erro ao fazer login:", error);
      }
    });
  } 
}