import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-lojas',
  standalone: true,
  imports: [],
  templateUrl: './lojas.component.html',
  styleUrl: './lojas.component.scss'
})
export class LojasComponent {

  @Input()
  telefone1:string = '';

  @Input()
  telefone2!:string;

  @Input()
  endereco!: string;

  @Input()
  Loja: string = '';
}
