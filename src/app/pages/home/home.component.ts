import { Component, inject } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { CarouselLojasComponent } from '../../components/carousel-lojas/carousel-lojas.component';
import { CardComponent } from '../../components/card/card.component';
import { FooterComponent } from "../../components/footer/footer.component";
import { MotosService } from '../../Services/motos.service';
import { Moto } from '../../models/Motos';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent,
            CarouselLojasComponent,
            CardComponent,
            FooterComponent,
            CommonModule,
          RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  Motos:Moto[] =[]
  model:string = ''
  page:number = 1
  
  private motosService = inject(MotosService)

  
  ngOnInit(){
    this.obterMotos();
  }

  obterMotos() {
    try{
      this.motosService.GetMotosModel(this.model, this.page)
      .subscribe(motos => this.Motos = motos);
    }catch(error)
    {
      console.error('Erro ao obter motos:', error);
    }
  }
}
