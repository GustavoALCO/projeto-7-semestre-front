import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { FiltroComponent } from './filtro/filtro.component';
import { CardComponent } from "../../components/card/card.component";
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import {MatDialog} from '@angular/material/dialog';
import { Moto } from '../../models/Motos';
import { MotosService } from '../../Services/motos.service';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-estoque',
  standalone: true,
  imports: [CommonModule,
            NavbarComponent,
            FooterComponent,
            FiltroComponent,
            CardComponent,
            RouterLink
            ],
  templateUrl: './estoque.component.html',
  styleUrl: './estoque.component.scss'
})
export class EstoqueComponent {
  isActive: boolean = false;
  mobile:boolean = false;

  Motos:Moto[] = []

  breakpointObserver = inject(BreakpointObserver);
  dialog = inject(MatDialog);


  activateLoading() {
    this.isActive = true;
    setTimeout(() => {
      this.isActive = false;
    }, 2000);
  }

  ngOnInit(){
    this.buscarSemfiltro()
  }  

  constructor(private MotosService:MotosService) {
    this.breakpointObserver.observe([
      '(max-width: 800px)' 
    ]).subscribe((result: BreakpointState) => {
        this.mobile = result.matches
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(FiltroComponent, {
      width: '150px',
      height: "650px"
    });
  }

  buscarSemfiltro(){
    try{
      this.MotosService.GetMotosHome()
        .subscribe( motos => this.Motos = motos);
    }catch(error)
    {
      console.error('Erro ao obter motos:', error);
    }
    
  }
}
