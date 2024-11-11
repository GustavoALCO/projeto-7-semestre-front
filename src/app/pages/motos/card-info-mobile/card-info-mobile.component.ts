import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-info-mobile',
  standalone: true,
  imports: [],
  templateUrl: './card-info-mobile.component.html',
  styleUrl: './card-info-mobile.component.scss'
})
export class CardInfoMobileComponent {
@Input()
modelo!: string;
@Input()
marca!: string;
@Input()
preco!: number;
@Input()
ano!: number;
@Input()
km!: number;
@Input()
cor!: string;
@Input()
combustivel!: string;
@Input()
placa!: string;
@Input()
numero!: string[];

formatNumber(value: number): string {
  return (value / 1000).toFixed(3); 
}
}
