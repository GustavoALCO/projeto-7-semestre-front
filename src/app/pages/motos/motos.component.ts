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

@Component({
  selector: 'app-motos',
  standalone: true,
  imports: [CarouselMotosComponent,
    NavbarComponent,
    CardInfoComponent,
    CommonModule,
    CardInfoMobileComponent,
    CardComponent],
  templateUrl: './motos.component.html',
  styleUrl: './motos.component.scss'
})
export class MotosComponent {

  breakpointObserver = inject(BreakpointObserver);
  dialog = inject(MatDialog);
  mobile:boolean = false

  constructor() {
    this.breakpointObserver.observe([
      '(max-width: 800px)' 
    ]).subscribe((result: BreakpointState) => {
        this.mobile = result.matches
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogCarouselComponent, {
      width: '80vw',   
      height: 'auto',  
      maxWidth: '2000px',  
      maxHeight: '2000px',
    });
  }
}
