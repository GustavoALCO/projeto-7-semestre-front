import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input()
  Img!:string;
  @Input()
  Model!:string;
  @Input()
  Brand!:string;
  @Input()
  Km!:number;
  @Input()
  Age!:number;
  @Input()
  Price!:number;

  formatNumber(value: number): string {
    return (value / 1000).toFixed(3); 
  }
}
