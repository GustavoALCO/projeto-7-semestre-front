import { Component } from '@angular/core';
import { CarouselMotosComponent } from "../../components/carousel-motos/carousel-motos.component";
import { AsyncPipe, CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { InputFuelComponent } from './input-fuel/input-fuel.component';
import { InputMarcasComponent } from './input-marcas/input-marcas.component';

@Component({
  selector: 'app-create-motos',
  standalone: true,
  imports: [CarouselMotosComponent,
    InputFuelComponent,
    InputMarcasComponent,
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    AsyncPipe],
  templateUrl: './create-motos.component.html',
  styleUrl: './create-motos.component.scss'
})
export class CreateMotosComponent {

  
}
