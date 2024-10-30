import { Component } from '@angular/core';
import { InputAdmComponent } from "../../components/input-adm/input-adm.component";
import { InputCargoComponent } from "./input-cargo/input-cargo.component";
import { InputLojaComponent } from "./input-loja/input-loja.component";
import { PasswordInputComponent } from "../../components/password-input/password-input.component";

@Component({
  selector: 'app-adm-users',
  standalone: true,
  imports: [InputAdmComponent, InputCargoComponent, InputLojaComponent, PasswordInputComponent],
  templateUrl: './adm-users.component.html',
  styleUrl: './adm-users.component.scss'
})
export class AdmUsersComponent {

}
