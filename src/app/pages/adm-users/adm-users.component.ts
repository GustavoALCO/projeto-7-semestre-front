import { Component } from '@angular/core';
import { InputCargoComponent } from "./input-cargo/input-cargo.component";
import { InputLojaComponent } from "./input-loja/input-loja.component";
import { PasswordInputComponent } from "../../components/password-input/password-input.component";
import { MatFormField, MatLabel } from '@angular/material/form-field';

@Component({
  selector: 'app-adm-users',
  standalone: true,
  imports: [MatLabel,MatFormField, InputCargoComponent, InputLojaComponent, PasswordInputComponent],
  templateUrl: './adm-users.component.html',
  styleUrl: './adm-users.component.scss'
})
export class AdmUsersComponent {

}
