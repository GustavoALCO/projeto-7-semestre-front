import { Component, Inject } from '@angular/core';
import { CarouselComponent } from "../../../../motos/images/carousel/carousel.component";
import { CarouselMotosComponent } from "../../../../../components/carousel-motos/carousel-motos.component";
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-list-infos',
  standalone: true,
  imports: [CarouselMotosComponent],
  templateUrl: './dialog-list-infos.component.html',
  styleUrl: './dialog-list-infos.component.scss'
})
export class DialogListInfosComponent {

  formattedPrice!: string 

  constructor(@Inject(MAT_DIALOG_DATA) public data: {
    idMoto: string;
    motoBrand: string;
    model: string;
    fuel: string;
    color: string;
    plate: string;
    age: number;
    km: number;
    price: number;
    url: string[];
    dateUpload: Date;
    createUserId: string;
    dateUpdate: Date;
    alterationUserId: string;
    idStore: number;
    phoneNumber: string[];
  }) {
  }
  ngOnInit(){
    this.formatPrice(this.data.price)
  }

  private formatPrice(price: number):void {
    var Price= price * 0.001
    this.formattedPrice = Price.toFixed(3);
  }
  
}
