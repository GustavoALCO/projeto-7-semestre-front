import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { LojasComponent } from "./lojas/lojas.component";
import { AngularGoogleMapsComponent } from "../../components/angular-google-maps/angular-google-maps.component";

@Component({
  selector: 'app-contatos',
  standalone: true,
  imports: [NavbarComponent, LojasComponent, AngularGoogleMapsComponent],
  templateUrl: './contatos.component.html',
  styleUrl: './contatos.component.scss'
})
export class ContatosComponent {


}
