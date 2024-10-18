import { Component, inject } from '@angular/core';
import { AngularGoogleMapsComponent } from "../angular-google-maps/angular-google-maps.component";
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [AngularGoogleMapsComponent,
    CommonModule
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  breakpointObserver = inject(BreakpointObserver);

  mobile:boolean = false

  constructor() {
    this.breakpointObserver.observe([
      '(max-width: 900px)' 
    ]).subscribe((result: BreakpointState) => {
      this.mobile = result.matches
    });
  }
}
