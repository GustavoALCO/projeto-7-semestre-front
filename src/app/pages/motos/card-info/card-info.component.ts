import { Component } from '@angular/core';
import { ContatosComponent } from "./contatos/contatos.component";



@Component({
  selector: 'app-card-info',
  standalone: true,
  imports: [ContatosComponent],
  templateUrl: './card-info.component.html',
  styleUrl: './card-info.component.scss'
})
export class CardInfoComponent {

}
