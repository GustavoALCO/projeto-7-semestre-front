import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, inject, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogCarouselComponent } from '../dialog-carousel/dialog-carousel.component';

@Component({
  selector: 'app-images',
  standalone: true,
  imports: [],
  templateUrl: './images.component.html',
  styleUrl: './images.component.scss'
})
export class ImagesComponent {
@Input()
images:string[] = []

breakpointObserver = inject(BreakpointObserver);
dialog = inject(MatDialog);

  constructor(){
    this.breakpointObserver.observe([
      '(max-width: 800px)' 
    ])
  }



  openDialog(): void {
    const dialogRef = this.dialog.open(DialogCarouselComponent, {
      width: '80vw',   
      height: 'auto',  
      maxWidth: '2000px',  
      maxHeight: '2000px',
      data: {images : this.images}
    });
  }
}
