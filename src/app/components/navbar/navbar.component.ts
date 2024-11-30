import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
Model!:string

private readonly _router = inject(Router);

BuscarMoto(){
  this._router.navigate(['/estoque'], { queryParams: { model: this.Model } });
}
}
