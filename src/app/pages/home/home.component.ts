import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { CarouselLojasComponent } from '../../components/carousel-lojas/carousel-lojas.component';
import { CardComponent } from '../../components/card/card.component';
import { FooterComponent } from "../../components/footer/footer.component";
import { HttpClientModule } from '@angular/common/http';
import { MotosService } from '../../Services/motos.service';
import { Moto } from '../../models/Motos';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent,
            CarouselLojasComponent,
            CardComponent,
            FooterComponent,
            CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  Motos:Moto[] =[]

  constructor(private motosService: MotosService) { }

  
  ngOnInit(){
    this.obterMotos();
  
  }

  obterMotos() {
    try{
      this.motosService.GetMotosHome()
      .subscribe(motos => this.Motos = motos);
    }catch(error)
    {
      console.error('Erro ao obter motos:', error);
    }
  }
}
