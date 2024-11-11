import { Component, inject } from '@angular/core';
import { CarouselMotosComponent } from "../../components/carousel-motos/carousel-motos.component";
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { CardInfoComponent } from "./card-info/card-info.component";
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { CardInfoMobileComponent } from "./card-info-mobile/card-info-mobile.component";
import { CardComponent } from "../../components/card/card.component";
import { DialogCarouselComponent } from './dialog-carousel/dialog-carousel.component';
import { MatDialog } from '@angular/material/dialog';
import { MotosService } from '../../Services/motos.service';
import { Moto } from '../../models/Motos';
import { ActivatedRoute } from '@angular/router';
import { ImagesComponent } from "./images/images.component";

@Component({
  selector: 'app-motos',
  standalone: true,
  imports: [CarouselMotosComponent,
    NavbarComponent,
    CardInfoComponent,
    CommonModule,
    CardInfoMobileComponent,
    CardComponent, ImagesComponent],
  templateUrl: './motos.component.html',
  styleUrl: './motos.component.scss'
})
export class MotosComponent {
  Motos: Moto = {} as Moto;

  mobile:boolean = false

  ngOnInit(){
    const id = this.route.snapshot.paramMap.get('idMoto');
    if(id){
      this.Motosid(id);
    } 
  }

  constructor(
    private motosService: MotosService, 
    private route: ActivatedRoute,
    private breakpointObserver: BreakpointObserver 
  ) {
    this.breakpointObserver.observe([
      '(max-width: 900px)' 
    ]).subscribe((result: BreakpointState) => {
      this.mobile = result.matches;
    });
  }

  Motosid(id: string) {
    this.motosService.GetMotosId(id).subscribe(
      motos => {
        this.Motos = motos;
      },
    );
  }
}
